/**
 * Given the root of a binary tree, each node in the tree has a distinct value.
 * After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).
 * Return the roots of the trees in the remaining forest. You may return the result in any order.
 *
 * Example 1:
 * Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
 * Output: [[1,2,null,4],[6],[7]]
 *
 * Example 2:
 * Input: root = [1,2,4,null,3], to_delete = [3]
 * Output: [[1,2,4]]
 *
 * Constraints:
 * The number of nodes in the given tree is at most 1000.
 * Each node has a distinct value between 1 and 1000.
 * to_delete.length <= 1000
 * to_delete contains distinct values between 1 and 1000.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
  let res = [];
  let toDeleteSet = new Set(to_delete);
  const forest = dfs(root, toDeleteSet, res);
  forest && res.push(forest);
  return res;
};
function dfs(node, toDeleteSet, res) {
  if (!node) return null;
  node.left = dfs(node.left, toDeleteSet, res);
  node.right = dfs(node.right, toDeleteSet, res);

  if (toDeleteSet.has(node.val)) {
    node.left && res.push(node.left);
    node.right && res.push(node.right);
    return null;
  }
  return node;
}