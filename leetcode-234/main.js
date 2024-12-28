function findMiddle (head){
    let slow = head
    let fast = head
    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}
function reverseHead (head){
    let result = null
    while(head !== null){
        let nextNode = head.next
        head.next = result
        result = head
        head = nextNode
    }
    return result
}   
function isSame(head1, head2){
    while(head1 && head2){
        if(head1.val !== head2.val) return false
        head1 = head1.next
        head2 = head2.next
    }
    return true
}   
var isPalindrome = function(head) {
    let middle = findMiddle(head)
    let reversed = reverseHead(middle)
    return isSame(head, reversed)
};