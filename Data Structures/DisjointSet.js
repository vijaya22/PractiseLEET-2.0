/**
 * Disjoint Set
 */
class DisjointSet {
  constructor(n) {
    this.parents = new Array(n).fill(-1);
  }
  find(x) {
    if (this.parents[x] == -1) {
      return x;
    }
    return this.find(this.parents[x]);
  }
  union(x, y) {
    let xRoot = this.find(x);
    let yRoot = this.find(y);
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
