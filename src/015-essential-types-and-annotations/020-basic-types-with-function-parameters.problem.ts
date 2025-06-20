import { Equal, Expect } from "@total-typescript/helpers";

// CODE

// Switch types
const add = (a: number, b: number) => {
  return a + b;
};

// TESTS

const result = add(1, 2);

type test = Expect<Equal<typeof result, number>>;
