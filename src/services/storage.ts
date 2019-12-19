/**
 * Localstorage wrapper
 * - automatically serializes JSON
 * - falls back to memory storage
 */

let storage
try {
  let fail
  let uid = new Date().toString()
  storage = window.localStorage
  storage.setItem('uid', uid)
  fail = storage.getItem('uid') !== uid
  storage.removeItem('uid')
  fail && (storage = false)
} catch (e) {
  console.error('localstorage not supported')
}

interface Storage {
  [x: string]: any
}

/**
 * Shim localstorage to fallback to in memory storage when storage is disabled
 */
const createMemoryStorage = () => {
  const memoryStorage: Storage = {}
  return {
    getItem: function(key: string): object | null {
      if (key === undefined) return memoryStorage
      else return memoryStorage[key]
    },
    setItem: function(key: string, value: any) {
      memoryStorage[key] = value
    },
    removeItem: function(key: string) {
      delete memoryStorage[key]
    },
  }
}

/**
 * fallback for private browsing mode (safari) where using localstorage will thrown an exception
 */
function shimLocalStorage() {
  return {
    getItem: function(key: string): object | undefined {
      let strValue = localStorage.getItem(key) || ''
      let value
      if (strValue) {
        try {
          value = JSON.parse(strValue)
        } catch (e) {}
      }
      return value
    },
    setItem: function(key: string, value: any) {
      if (value !== undefined && value !== null) {
        localStorage.setItem(key, JSON.stringify(value))
      } else {
        localStorage.removeItem(key)
      }
    },
    removeItem: function(key: string) {
      localStorage.removeItem(key)
    },
  }
}

let localstore = storage ? shimLocalStorage() : createMemoryStorage()

export default {
  getItem: localstore.getItem,
  setItem: localstore.setItem,
  removeItem: localstore.removeItem,
}
