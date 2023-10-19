/** Minimum Path Sum - https://leetcode.com/problems/minimum-path-sum/ */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  // f(x,y) = Min(F( x+1, y), F(x, y+1)) + grid[x][y]

  let memoize = new Array(grid.length)
    .fill(-1)
    .map((col) => new Array(grid[0].length).fill(-1));
  return recurse(0, 0, grid, memoize);
};

function recurse(x, y, grid, memoize) {
  if (x >= grid.length || y >= grid[0].length) return Number.POSITIVE_INFINITY;
  if (memoize[x][y] != -1) return memoize[x][y];
  if (x == grid.length - 1 && y == grid[0].length - 1) return grid[x][y];
  let ans =
    Math.min(
      recurse(x + 1, y, grid, memoize),
      recurse(x, y + 1, grid, memoize)
    ) + grid[x][y];
  memoize[x][y] = ans;
  return ans;
}
