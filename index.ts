/**
 * ES6 Set with a loose comparator (==) instead of the strict (===) one by default.
 * 
 * Technically Sets use SameValueZero comparison which is pretty much strict comparison.
 * @see http://www.ecma-international.org/ecma-262/6.0/#sec-samevaluezero
 */
export default class <T> extends Set<T> {
  private data = new Map<string, T>()

  // Push both the stringified and raw versions
  add(value: T) {
    this.data.set(JSON.stringify(value), value)
    return this
  }

  // Check against only the stringified
  has(value: T) {
    return this.data.has(JSON.stringify(value))
  }

  // Check against only the stringified
  delete(value: T) {
    return this.data.delete(JSON.stringify(value))
  }

  get size() {
    return this.data.size
  }

  [Symbol.iterator]() {
    return this.data.values()
  }

  clear() {
    this.data.clear()
  }

  values() {
    return this.data.values()
  }

  keys() {
    return this.data.values()
  }

  *entries() {
    for (const item of this)
      yield [item, item] as [T, T]
  }

  forEach(cb: (value: T, value2: T, set: this) => void) {
    for (const item of this)
      cb(item, item, this)
  }
}
