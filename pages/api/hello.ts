export function Hello() {
  console.log("Hello World");
}

export function R() {
  let x = Math.floor(Math.random() * 10);
  let y = "Numero é " + x;

  console.log(y);
}

export function T() {
  const x = Math.floor(Math.random() * 10);
  const y = Math.floor(Math.random() * 10);
  console.log(x + y);
}
