'use strict'

const assert = require('assert')
const weakable = require('.')

describe('weakable()', function () {
  it('should return true for an object', function () {
    assert(weakable({}))
  })

  it('should return false for null', function () {
    assert(!weakable(null))
  })

  it('should return true for a function', function () {
    assert(weakable(() => {}))
  })

  it('should return false for a string', function () {
    assert(!weakable('test'))
  })

  it('should return false for a number', function () {
    assert(!weakable(123))
  })

  it('should return false for a boolean', function () {
    assert(!weakable(true))
  })
})
