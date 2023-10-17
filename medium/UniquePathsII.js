/**
 * You are given an m x n integer array grid.
 * There is a robot initially located at the top-left corner (i.e., grid[0][0]).
 * The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]).
 * The robot can only move either down or right at any point in time.
 * An obstacle and space are marked as 1 or 0 respectively in grid.
 * A path that the robot takes cannot include any square that is an obstacle.
 * Return the number of possible unique paths that the robot can take to reach the bottom-right corner.
 * The testcases are generated so that the answer will be less than or equal to 2 * 109.
 *
 * Example 1:
 * Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
 * Output: 2
 * Explanation: There is one obstacle in the middle of the 3x3 grid above.
 * There are two ways to reach the bottom-right corner:
 * 1. Right -> Right -> Down -> Down
 * 2. Down -> Down -> Right -> Right
 *
 * Example 2:
 * Input: obstacleGrid = [[0,1],[0,0]]
 * Output: 1
 *
 * Constraints:
 * m == obstacleGrid.length
 * n == obstacleGrid[i].length
 * 1 <= m, n <= 100
 * obstacleGrid[i][j] is 0 or 1.
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  let dp = new Array(m).fill(-1).map((col) => new Array(n).fill(-1));
  return dfs(0, 0, m, n, obstacleGrid, dp);
};
function dfs(x, y, m, n, obstacleGrid, dp) {
  if (x >= m || y >= n) return 0;
  if (obstacleGrid[x][y] == 1) return 0;
  if (dp[x][y] != -1) return dp[x][y];
  if (x == m - 1 && y == n - 1) return 1;
  let right = dfs(x + 1, y, m, n, obstacleGrid, dp);
  let bottom = dfs(x, y + 1, m, n, obstacleGrid, dp);
  dp[x][y] = right + bottom;
  return dp[x][y];
}
