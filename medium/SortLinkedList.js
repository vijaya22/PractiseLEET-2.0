/** 148. Sort List - https://leetcode.com/problems/sort-list/ */
/**
 * Given the head of a linked list, return the list after sorting it in ascending order.
 * 
 * Example 1:
 * Input: head = [4,2,1,3]
 * Output: [1,2,3,4]
 * 
 * Example 2:
 * Input: head = [-1,5,3,4,0]
 * Output: [-1,0,3,4,5]
 * 
 * Example 3:
 * Input: head = []
 * Output: []
 * 
 * Constraints:
 * The number of nodes in the list is in the range [0, 5 * 104].
 * -105 <= Node.val <= 105
 * Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?
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
var sortList = function (head) {
  if (!head || !head.next) return head;
  let mid = getMidOfList(head);
  let left = sortList(head);
  let right = sortList(mid);

  return mergeList(left, right);
};

function getMidOfList(head) {
  let slow = head;
  let fast = head.next;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let mid = slow.next;
  slow.next = null;
  return mid;
}

function mergeList(list1, list2) {
  if (!list1 && !list2) return null;
  if (!list1) return list2;
  if (!list2) return list1;

  let sentinel = new ListNode("a");
  let curr = sentinel;

  while (list1 != null && list2 != null) {
    if (list1.val <= list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }
  // if(list1 == null && list2 == null) return sentinel.next;
  if (list1 == null) curr.next = list2;
  if (list2 == null) curr.next = list1;
  return sentinel.next;
}
