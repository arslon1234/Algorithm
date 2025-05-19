function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
function sortedListToBST(head) {
    if(!head) return null;
    if(!head.next) return new TreeNode(head.val)
    let slow = head
    let fast = head
    prev = null
    while(fast && fast.next){
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }     
    prev.next = null
    let root = new TreeNode(slow.val)
    root.left = sortedListToBST(head)
    root.right = sortedListToBST(slow.next)
    return root
}
