const codeBlocks = require('gfm-code-blocks');
const { www: { url, baseDir }, name: pkgName, description } = require('./../package.json')
const createFile = require('./../build/create-file')
const getAllMatchesForRegex = require('./get-all-matches-for-regex')

const createPageGenerateTestcases = (options) => {
  const { graphql } = options

  return graphql(`{
    allMarkdownRemark(
      sort: { fields: [frontmatter___name], order: ASC }
      filter: { fields: { markdownType: { eq: "rules" } } }
    ) {
      totalCount
      edges {
        node {
          rawMarkdownBody
          fields {
            markdownType
            slug
          }
          frontmatter {
            name
          }
        }
      }
    }
  }`).then(({ errors, data }) => {
    if (errors) {
      Promise.reject(errors)
    }

    const allRulePages = data.allMarkdownRemark.edges;
    const regExIsTestcaseTitle = /^#### (.*)/m
    const regExCodeType = /```svg/gm

    const testcases = []

    /**
     * iterate all rule pages
     * -> get code snippets
     * -> and their relevant titles
     */
    allRulePages
      .forEach((markdownPage, index) => {
        const { node } = markdownPage
        const { rawMarkdownBody, frontmatter, fields } = node
        const { name } = frontmatter
        const { slug } = fields
        const codeTitles = getAllMatchesForRegex(regExIsTestcaseTitle, rawMarkdownBody)
        const codeSnippets = codeBlocks(rawMarkdownBody);

        if (codeTitles.length !== codeSnippets.length) {
          throw new Error(`Number of matching titles for code snippets is wrong. Check markdown '${name}' for irregularities. Slug: '${slug}'`)
        }

        /**
         * iterate each code snippet
         * -> create a testcase file
         * -> and add meta of testcase to `testcases.json`
         */
        codeSnippets
          .forEach((codeBlock, index) => {
            const title = codeTitles[index]
            if (!title) {
              throw new Error('No title found for code snippet.')
            }

            const { code } = codeBlock
            let { type = 'html' } = codeBlock

            if (regExCodeType.test(codeBlock.block.substring(0, 15))) {
              type = 'svg'
            }

            const uniqueId = slug.replace('rules/', '')
            const titleCurated = title.value.split(' ').map(t => t.toLowerCase())

            const testcaseFileName = `${uniqueId}-${titleCurated.join('-')}.${type}`;
            const testcasePath = `testcases/${testcaseFileName}`
            /**
             * Create testcase file
             */
            createFile(`${baseDir}/${testcasePath}`, code)

            /**
             * Create meta data for testcase(s)
             */
            const testcase = {
              url: `${url}/${testcasePath}`,
              expected: titleCurated[0],
              ruleId: uniqueId,
              ruleName: name,
              rulePage: `${url}/${slug}`
            }
            testcases.push(testcase)
          })
      })

    /**
     * Create `testcases.json`
     */
    const testcasesData = {
      name: `${pkgName} test cases`,
      website: url,
      license: `${url}/pages/license/`,
      description,
      count: testcases.length,
      testcases
    }
    createFile(`${baseDir}/testcases.json`, JSON.stringify(testcasesData, undefined, 2))

    console.log(`DONE!!! Generated Test Cases Data.`)
  })
}

module.exports = createPageGenerateTestcases