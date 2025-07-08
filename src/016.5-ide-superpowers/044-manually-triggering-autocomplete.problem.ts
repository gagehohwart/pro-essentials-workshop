type MyObj = {
  foo: string;
  bar: number;
  baz: boolean;
};

const acceptsObj = (obj: MyObj) => {};

acceptsObj({
  foo: "",
  bar: 2,
  baz: true,
});

document.addEventListener(
  // Autocomplete this string!
  "",
  (event) => {
    console.log(event);
  }
);
