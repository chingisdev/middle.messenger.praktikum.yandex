type StringIndexed = Record<string, any>;

function makePrimitive(key: string, value: any): string {
  let subArray = [];
  if (typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) {
      subArray.push(makePrimitive(`${key}[${k}]`, v));
    }
  } else {
    return `${key}=${value}`;
  }
  return subArray.join('&');
}

function queryStringify(data: StringIndexed): string | never {
  if (typeof data !== 'object') {
    throw new Error('input must be an object');
  }

  const pairs: string[] = [];

  (function _queryStringify(data: StringIndexed): void {
    if (typeof data !== 'object') {
      return;
    }
    for (const [key, value] of Object.entries(data)) {
      pairs.push(makePrimitive(key, value));
    }
  })(data);
  return pairs.join('&');
}

export default queryStringify
