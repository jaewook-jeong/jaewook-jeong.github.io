import _ from 'lodash'

const win = typeof window !== `undefined` ? window : {}

export const localStorage = win.localStorage
export const sessionStorage = win.sessionStorage

function isEmpty(storage) {
  return !storage || storage === {}
}

export function getValueFrom(storage, key) {
  if (isEmpty(storage)) {
    return
  }
  const rawData = storage.getItem(key)

  if (!rawData) {
    return
  }
  return JSON.parse(rawData)
}

export function setValueTo(storage, key, data) {
  if (isEmpty(storage)) {
    return
  }
  return storage.setItem(key, JSON.stringify(data))
}

export const setValueToLocalStorage = _.partial(setValueTo, localStorage)
export const getValueFromLocalStorage = _.partial(getValueFrom, localStorage)