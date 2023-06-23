const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result() {
  let sort = input.sort();
  let half = Math.floor(sort.length / 2);

  if (half % 2) {
    console.log(sort[half]);
  }
  console.log((sort[half] + sort[half - 1]) / 2);
}

result();
