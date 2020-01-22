import { assert } from 'chai'

import './hello-world'

describe('HelloWorld', () => {
  let element

  async function createElement(element) {
    const el = document.createElement(element)
    document.body.appendChild(el)
    await el.updateComplete
    return el;
  }

  beforeEach(async() => {
    element = await createElement('hello-world')
  })

  afterEach(() => {
    document.body.removeChild(element)
  })

  it('should have element', () => {
    assert.ok(element)
  })

  it('should have shadowRoot', () => {
    assert.ok(element.shadowRoot)
  })

  it('should have h1 element', () => {
    assert.ok(element.shadowRoot.querySelector('h1'))
  })

})