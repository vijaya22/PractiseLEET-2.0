/**
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cells,
 * where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
 * 
 * Example 1:
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 * Output: true
 * 
 * Example 2:
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
 * Output: true
 * 
 * Example 3:
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
 * Output: false
 * 
 * Constraints:
 * m == board.length
 * n = board[i].length
 * 1 <= m, n <= 6
 * 1 <= word.length <= 15 
 * board and word consists of only lowercase and uppercase English letters.
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rows = board.length;
    let cols = board[0].length;

    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(board[i][j] == word[0]){
                let visited = new Array(rows).fill(-1).map(col => new Array(cols).fill(-1))
                let res =  dfs(i, j, board, 0, word, visited)
                if(res) return res;
            }
        }
    }
    return false;

};
function dfs(x, y, board, wordIndex, word, visited){
    if(x<0 || y<0 || x>=board.length || y>= board[0].length) return false;
    if(visited[x][y] != -1) return false;
    if(board[x][y] != word[wordIndex]) return false;
    if(board[x][y] == word[wordIndex] && wordIndex == word.length-1){
        return true;
    }
    visited[x][y] = 1;

    let res = dfs(x+1, y, board, wordIndex+1,word, visited) ||
    dfs(x-1, y, board, wordIndex+1, word, visited) ||
    dfs(x, y+1, board, wordIndex+1, word, visited) ||
    dfs(x, y-1, board, wordIndex+1, word, visited);

    visited[x][y] = -1;
    return res;
}