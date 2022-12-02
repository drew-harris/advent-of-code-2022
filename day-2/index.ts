// opponent
// A: rock     1
// B: paper    2
// C: Scissors 3

// me
// X: lose
// Y: draw
// Z: win

const input = await Deno.readTextFile("./input.txt");
const rounds = input.split("\n");
const opts = ["X", "Y", "Z"];
let totalScore = 0;
rounds.forEach((round) => {
  const moves = round.split(" ");
  const opponent = moves[0];
  const me = moves[1];
  let toAdd = 0;
  if (!me) return;
  console.log(`moves: me:[${me}], opp: [${opponent}]`);
  if (opts.indexOf(me) + 1 === 0) {
    return;
  }
  toAdd += opts.indexOf(me);
  toAdd *= 3;
  if (opponent === "A") {
    if (me === "X") {
      toAdd += 3;
    } else if (me === "Y") {
      toAdd = toAdd + 1;
    } else if (me === "Z") {
      toAdd += 2;
    }
  } else if (opponent === "B") {
    if (me === "Y") {
      toAdd += 2;
    } else if (me === "Z") {
      toAdd += 3;
    } else if (me === "X") {
      toAdd += 1;
    }
  } else if (opponent == "C") {
    if (me == "X") {
      toAdd += 2;
    } else if (me === "Z") {
      toAdd += 1;
    } else if (me === "Y") {
      toAdd += 3;
    }
  } else {
    console.log("MAJOR ERROR");
  }
  console.log("TO ADD: ", toAdd);
  totalScore += toAdd;
});

console.log(totalScore);
