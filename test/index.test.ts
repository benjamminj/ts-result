import {
  resultSuccess,
  resultError,
  isResultSuccess,
  Result,
  isResultError,
} from '../src'

describe('resultSuccess', () => {
  it('returns a result success type', () => {
    expect(resultSuccess(345)).toEqual({ type: 'success', value: 345 })
  })
})

describe('resultError', () => {
  it('returns a result error type', () => {
    let error = new Error('sad dayz')
    expect(resultError(error)).toEqual({ type: 'error', error })
  })
})

describe('isResultSuccess', () => {
  it('returns "true" if the value is a ResultSuccess type', () => {
    let result: Result<number> = { type: 'success', value: 2 }

    expect(isResultSuccess(result)).toEqual(true)
  })

  it('returns "false" if the value is a ResultError type', () => {
    let result: Result<number> = { type: 'error', error: new Error('testzzz') }

    expect(isResultSuccess(result)).toEqual(false)
  })
})

describe('isResultError', () => {
  it('returns "true" if the value is a ResultError type', () => {
    let result: Result<number> = { type: 'error', error: new Error() }

    expect(isResultError(result)).toEqual(true)
  })

  it('returns "false" if the value is a ResultSuccess type', () => {
    let result: Result<number> = { type: 'success', value: 2 }

    expect(isResultError(result)).toEqual(false)
  })
})
