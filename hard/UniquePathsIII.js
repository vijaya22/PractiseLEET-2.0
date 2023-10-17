/**
 * You are given an m x n integer array grid where grid[i][j] could be:
 * 1 representing the starting square. There is exactly one starting square.
 * 2 representing the ending square. There is exactly one ending square.
 * 0 representing empty squares we can walk over.
 * -1 representing obstacles that we cannot walk over.
 * Return the number of 4-directional walks from the starting square to the ending square,
 * that walk over every non-obstacle square exactly once.
 *
 * Example 1:
 * Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
 * Output: 2
 * Explanation: We have the following two paths:
 * 1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
 * 2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)
 *
 * Example 2:
 * Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
 * Output: 4
 * Explanation: We have the following four paths:
 * 1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
 * 2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
 * 3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
 * 4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)
 *
 * Example 3:
 * Input: grid = [[0,1],[2,0]]
 * Output: 0
 * Explanation: There is no path that walks over every empty square exactly once.
 * Note that the starting and ending square can be anywhere in the grid.
 *
 * Constraints:
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 20
 * 1 <= m * n <= 20
 * -1 <= grid[i][j] <= 2
 * There is exactly one starting cell and one ending cell.
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
  let rows = grid.length;
  let cols = grid[0].length;
  let dp = new Array(rows).fill(-1).map((col) => new Array(cols).fill(-1));
  let nonObs = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] != -1) {
        nonObs++;
      }
    }
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] == 1) {
        return dfs(i, j, grid, dp, nonObs);
      }
    }
  }
};
function dfs(x, y, grid, dp, nonObs) {
  if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || nonObs < 0)
    return 0;

  if (dp[x][y] != -1) return 0;
  if (grid[x][y] == -1) return 0;
  if (grid[x][y] == 2 && nonObs == 1) return 1;

  dp[x][y] = 0;

  let left = dfs(x - 1, y, grid, dp, nonObs - 1);
  let right = dfs(x + 1, y, grid, dp, nonObs - 1);
  let top = dfs(x, y - 1, grid, dp, nonObs - 1);
  let bottom = dfs(x, y + 1, grid, dp, nonObs - 1);

  dp[x][y] = -1;
  return left + right + top + bottom;
}
