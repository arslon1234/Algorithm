function sortList(head){
    if(!head || !head.next){
        return head
    }
    let left = head
    let right = getMiddle(head)
    let temp = right.next
    right.next = null
    right = temp
    let list1 = sortList(left)
    let list2 = sortList(right)
    return merge(list1, list2)
}
function getMiddle(head){
    let slow = head
    let fast = head.next
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next
    }
    return slow
}
function merge(list1, list2){
    let dummy = new ListNode(0)
    let temp = dummy
    while(list1 && list2){
        if(list1.val > list2.val){
            temp.next = list2
            list2 = list2.next
        }else{
            temp.next = list1
            list1 = list1.next
        }
        temp = temp.next
    }
    temp.next = list1 || list2
    return dummy.next
}