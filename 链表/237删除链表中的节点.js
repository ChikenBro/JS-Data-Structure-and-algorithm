/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
//时间复杂度O(1) 空间复杂度O(1)
var deleteNode = function(node) { 
    node.val = node.next.val; //变相删除下个结点 将下个结点的值和指针赋值给当前结点
    node.next = node.next.next;
};