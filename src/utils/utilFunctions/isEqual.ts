type TObj = Record<string, any>;

function isEqual(a: TObj, b: TObj): boolean {
  if (a === b) {
    return true;
  }

  if ((typeof a === 'object' && typeof b === 'object')) {
    if (a.constructor !== b.constructor) {
      return false;
    }

    for (let key in a) {
      if (a.hasOwnProperty(key)) {
        if (!b.hasOwnProperty(key) || !isEqual(a[key] as TObj, b[key] as TObj)) {
          return false;
        }
      }
    }

    for (let key in b) {
      if (b.hasOwnProperty(key)) {
        if (!a.hasOwnProperty(key)) {
          return false;
        }
      }
    }

    return true;
  }

  return false;
}

export default isEqual
