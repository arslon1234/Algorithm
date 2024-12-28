var reverseList = function(head) {
    let result = null
    while(head !== null){
      let nextNode = head.next
      head.next = result
      result = head
      head = nextNode
    }
    return result
};
const linkedList = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: null,
        next: {
          value: 4,
          next: {
            value: 5,
            next: null
          }
        }
      }
    }
  };
console.log(reverseList(linkedList))