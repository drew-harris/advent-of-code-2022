const input = await Deno.readTextFile("./input.txt");
const splitted = input.split(/\n\s*\n/);

let totals: number[] = [];

splitted.forEach((elf) => {
  const foods = elf.split("\n").map((val) => parseInt(val));
  const total = foods.reduce((partialSum, a) => partialSum + a, 0);
  totals.push(total);
});

const sorted = totals.sort((a, b) => b - a);

const first = sorted[0];
const second = sorted[1];
const third = sorted[2];

console.log(first + second + third);
