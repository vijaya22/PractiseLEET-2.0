/**
 * Rotate List - https://leetcode.com/problems/rotate-list/description/
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
var rotateRight = function(head, k) {
    if(!head) return null;
    if(k == 0) return head;
    let curr = head;
    let numOfNodes = 1;
    while(curr.next != null){
        curr = curr.next;
        numOfNodes++;
    }
    k = k % numOfNodes;
    // reached end of list
    curr.next = head;
   let newCurr = head;
   let count = 1;
   while(count != numOfNodes - k){
       newCurr = newCurr.next;
       count++;
   }
   let newHead = newCurr.next;
   newCurr.next = null
   return newHead;

};