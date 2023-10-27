/**
 * Find if Path Exists in Graph - https://leetcode.com/problems/find-if-path-exists-in-graph/description/
 */
class DisjointSet {
  constructor(n) {
    this.parents = new Array(n).fill(-1);
  }
  findParent(x) {
    if (this.parents[x] == -1) {
      return x;
    }
    return this.findParent(this.parents[x]);
  }
  union(x, y) {
    let xRoot = this.findParent(x);
    let yRoot = this.findParent(y);
    if (xRoot != yRoot) {
      this.parents[yRoot] = xRoot;
    }
  }
  findAbsoluteParentCount() {
    let count = 0;
    for (let i = 0; i < this.parents.length; i++) {
      if (this.parents[i] < 0) {
        count++;
      }
    }
    return count;
  }
}
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  let disjoint = new DisjointSet(n);
  edges.forEach((edge) => disjoint.union(edge[0], edge[1]));

  return disjoint.findParent(source) == disjoint.findParent(destination);
};
