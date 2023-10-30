/**
 *  Odd Even Linked List - https://leetcode.com/problems/odd-even-linked-list/
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
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  let oddSentinel = new ListNode("a");
  let evenSentinel = new ListNode("b");
  let oddPointer = oddSentinel;
  let evenPointer = evenSentinel;
  let curr = head;
  let i = 1;
  while (curr != null) {
    let temp = curr.next;
    if (i % 2 != 0) {
      oddPointer.next = curr;
      oddPointer = oddPointer.next;
    } else {
      evenPointer.next = curr;
      evenPointer = evenPointer.next;
    }
    curr = temp;
    i++;
  }
  evenPointer.next = null;
  oddPointer.next = evenSentinel.next;
  return oddSentinel.next;
};
