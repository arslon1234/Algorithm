var reverseList = function(head) {
    let prev = null
    let current = head
    // console.log(current)
    while(current !== null){
       let next = current.next
       current.next = prev
       prev = current
       current = next
    }
};
const linkedList = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: null
        // next: {
        //   value: 4,
        //   next: {
        //     value: 5,
        //     next: null
        //   }
        // }
      }
    }
  };
  reverseList(linkedList)