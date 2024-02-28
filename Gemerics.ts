// 1번 last(arr)
type JoSignatures1 = {
  <T>(arr: T[]): T;
};

const last: JoSignatures1 = (arr) => {
  const arrLength = arr.length;
  return arr[arrLength - 1];
};

// 2번 prepend(arr, item)
interface Prepend {
  <T>(arr: T[], item: T): T[];
}

const prepend: Prepend = (arr, item) => [item, ...arr];

// 3번 mix(arr, arr)
function mix<T>(item: T[], item2: T[]) {
  return [...item, ...item2];
}

// 4번 count(arr)
interface Count {
  <T>(arr: T[]): T;
}

const count: Count = (arr: any) => arr.length;

function count2<T>(arr: T[]) {
  return arr.length;
}

// 5번 findIndex(arr, item)
interface IFind {
  <T>(arr: T[], item: T);
}

const findIndex: IFind = (arr: any, item) => {
  let answer = arr.indexOf(item);
  if (answer) {
    return answer;
  } else if (answer === 0) {
    return 0;
  } else {
    return null;
  }
};
