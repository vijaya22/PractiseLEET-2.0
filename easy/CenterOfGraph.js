/**
 * 1791. Find Center of Star Graph - https://leetcode.com/problems/find-center-of-star-graph/
 */
/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  let numberOfNodes = 0;
  edges.forEach(
    (edge) => (numberOfNodes = Math.max(numberOfNodes, edge[0], edge[1]))
  );

  // calculate edgeCount for every node
  // calculate number of nodes as well
  let edgeCount = new Array(numberOfNodes + 1).fill(0);
  edges.forEach((edge) => {
    edgeCount[edge[0]]++;
    edgeCount[edge[1]]++;
  });
  for (let i = 1; i <= numberOfNodes; i++) {
    if (edgeCount[i] == numberOfNodes - 1) return i;
  }
  return -1;
};
