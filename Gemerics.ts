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
