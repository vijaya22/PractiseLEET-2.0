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
    // dfs
    let rows = board.length;
    let cols = board[0].length;
    
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(word[0] == board[i][j]){
                let visited = new Array(rows).fill(-1).map(col => new Array(cols).fill(-1));
                const res = dfs(i, j, board, word, 0, visited);
                if(res) return true;
            }
        }
    }
    return false;
};

function dfs(i, j, board, word, wordIndex, visited) {
    if(i >= board.length || j >= board[0].length || i<0 || j<0) return false;
    if(visited[i][j] != -1) return false
    if(board[i][j] != word[wordIndex]) return false;
    if(board[i][j] == word[wordIndex] && wordIndex == word.length-1){
       return true;
    }

    visited[i][j] = 1

    if(i+1 < board.length  && board[i+1][j] == word[wordIndex+1]){
        const bottom =  dfs(i+1, j, board, word, wordIndex+1, visited)
        if(bottom) return true;
    }
    if(i-1 >=0  && board[i-1][j] == word[wordIndex+1]){
        const top =  dfs(i-1, j, board, word, wordIndex+1, visited)
        if(top) return true;
    }
    if(j+1 < board[0].length  && board[i][j+1] == word[wordIndex+1]){
        const right =  dfs(i, j+1, board, word, wordIndex+1, visited)
        if(right) return true;
    }
    if(j-1 >=0  && board[i][j-1] == word[wordIndex+1]){
        const left =  dfs(i, j-1, board, word, wordIndex+1, visited)
        if(left) return true;
    }
    visited[i][j] = -1;
    return  false
}