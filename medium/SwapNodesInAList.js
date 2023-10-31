/**
 * 1721. Swapping Nodes in a Linked List - https://leetcode.com/problems/swapping-nodes-in-a-linked-list/description/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  if (!head) return null;
  let numberOfNodes = 0;
  let curr = head;
  let kNode = null;
  while (curr != null) {
    numberOfNodes++;
    if (numberOfNodes == k) kNode = curr;
    curr = curr.next;
  }
  let newCurr = head;
  let count = 0;
  let lastKnode = null;
  while (newCurr != null) {
    count++;
    if (count == numberOfNodes - k + 1) {
      lastKnode = newCurr;
      break;
    }
    newCurr = newCurr.next;
  }

  let temp = kNode.val;
  kNode.val = lastKnode.val;
  lastKnode.val = temp;

  return head;
};
