// 1번 last(arr)
type JoSignatures1 = {
  <T>(arr: T[]): T;
};

const last: JoSignatures1 = (arr) => {
  const arrLength = arr.length;
  return arr[arrLength - 1];
};
