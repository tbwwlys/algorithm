// 新建链表改值法

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

var reverseList = function(head) {
    let ans = null;
    for(head; head !== null; head.next) {
        ans = new ListNode(head.val, ans)
    }
    return ans;
};