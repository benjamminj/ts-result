export interface ResultSuccess<T> {
  type: 'success'
  value: T
}

export interface ResultError {
  type: 'error'
  error: Error
}

export type Result<T> = ResultSuccess<T> | ResultError

export let resultSuccess = <T>(value: T): ResultSuccess<T> => ({
  type: 'success',
  value,
})

export let resultError = (error: Error): ResultError => ({
  type: 'error',
  error,
})

export let isResultSuccess = (result: Result<unknown>) =>
  result.type === 'success'
export let isResultError = (result: Result<unknown>) =>
  isResultSuccess(result) === false
