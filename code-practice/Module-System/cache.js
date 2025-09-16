'use strict'

const cache = {} // shared object

function set(key, value) {
  cache[key] = value
}

function get(key) {
  return cache[key]
}

function getAll() {
  return { ...cache }
  //return cache --> same o/p
}

module.exports = { set, get, getAll }
