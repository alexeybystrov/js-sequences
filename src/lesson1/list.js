// @ts-check
// eslint-disable-next-line
import { l, cons as consList, head, tail, isEmpty, toString as listToString } from '../utils/index.js';

// BEGIN (write your solution here)
export const has = (list, element) => {
  if (isEmpty(list)) {
    return false;
  }
  if (head(list) === element) {
    return true;
  }

  return has(tail(list), element);
};

export const reverse = (list) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return acc;
    }

    return iter(tail(items), consList(head(items), acc));
  };

  return iter(list, l());
};

export const concat = (list1, list2) => {
  if (isEmpty(list1)) {
    return list2;
  }

  return consList(head(list1), concat(tail(list1), list2));
};

// END
