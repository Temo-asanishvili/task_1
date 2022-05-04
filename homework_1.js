let row = 4;
let col = 5;

const getTable = (row, col) => {
  let arr = [];
  let num = 1;
  for (var i = 0; i < col; i++) {
    if (i === 0) {
      for (var a = 0; a < row; a++) {
        var x = [];
        x.push(num);
        arr.push(x);
        num++;
      }
    }

    for (var a = 0; a < row; a++) {
      arr[a].push(num);
      num++;
    }
  }

  return arr;
};

console.log(getTable(row, col));
