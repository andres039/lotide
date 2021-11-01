const middle = require('../middle')
const { assert } = require('chai')

describe('#theMiddle!!', () => {
  it("returns Bart for ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie']", () => {
    assert.deepEqual(middle(['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie']), ['Bart'])
  })
})
