function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === Math.floor(arr.length / 2)) continue;

    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

export function task1Tests(code: string, data: number[]): boolean {
  const evalFunction = eval(`(${code})`);

  if (typeof evalFunction !== "function") {
    throw new Error("eval did not return a function");
  }

  return (
    JSON.stringify(quickSort(data)) === JSON.stringify(evalFunction(data))
  );
}

export const test1Data = [
  [1, 3, 2, 4, 5],
  [0, 0, 0],
  [],
  [99, 1, 100 , 2]
]
