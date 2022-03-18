type Indexed<T = unknown> = {
  [key in string]: T;
};

const isObject = (item: any): boolean => {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

function merge(left: Indexed, ...objects: Indexed[]): Indexed {
  if (!objects.length) {
    return left;
  }
  const source = objects.pop();

  if (isObject(left) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!left[key]) {
          Object.assign(left, {
            [key]: {}
          });
        }
        merge(left[key] as Indexed, source[key] as Indexed);
      } else {
        Object.assign(left, {
          [key]: source[key]
        });
      }
    }
  }

  return merge(left, ...objects);
}

export { merge, Indexed }
