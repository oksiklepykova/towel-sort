
// You should implement your task here.

module.exports = function towelSort (matrix) {
        if (matrix === undefined) return [];
        let arr = [];
        matrix.map((cur, index) => {
          if ((index + 1) % 2 === 0) {
            cur = cur.reverse();
          }
          cur.map(el => {
            arr.push(el);
          });
        });
          return arr;
}