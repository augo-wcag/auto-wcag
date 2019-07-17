const gfmCodeBlocks = require('gfm-code-blocks')
const HTMLHint = require("htmlhint");
const describeRule = require('../../test-utils/describe-rule')

const htmlHintRules = {
  // on rules
  "tagname-lowercase": true,
  "attr-lowercase": true,
  "attr-value-double-quotes": true,
  "tag-pair": true,
  "spec-char-escape": true,
  "id-unique": true,
  "attr-no-duplication": true,
  // default off rules
  "doctype-first": false,
  "src-not-empty": false,
  "title-require": false
}

describeRule('test cases', (ruleData) => {
  const { frontmatter, body } = ruleData
  const { id, name, htmlHintIgnore = [] } = frontmatter

  const codeBlocks = gfmCodeBlocks(body)

  const codeSnippets = codeBlocks
    .filter(({ block }) => (/html/gm.test(block.substring(0, 25))))
    .map(({ code }) => code)

  test.each(codeSnippets)('is valid HTML code - `%s`', snippet => {

    const rules = { ...htmlHintRules };
    /**
     * Ignore `rules` specified in frontmatter of certain rules (if any)
     */
    htmlHintIgnore.forEach(ignoreRule => rules[ignoreRule] = false);

    const errors = HTMLHint.default.verify(snippet, rules);

    if (errors.length) {
      console.log(`Rule Name: ${name} \n`);
      console.log(`Rule Id: ${id} \n`);
      console.table(errors)
    }

    expect(errors.length).toEqual(0)
  })
})