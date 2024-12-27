function findMiddleNode(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        console.log(`Before Moving: Slow=${slow.value}, Fast=${fast.value}`);
        slow = slow.next; 
        fast = fast.next.next; 
        console.log(`After Moving: Slow=${slow.value}, Fast=${fast ? fast.value : "null"}`);
    }

    return slow; // Slow pointer o'rtadagi tugunni ko'rsatadi
}

// Misol Linked List: 1 → 2 → 3 → 4 → 5
const linkedList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
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

// O'rtadagi node-ni topamiz
const middleNode = findMiddleNode(linkedList);
console.log("O'rtadagi tugun:", middleNode.value); // Natija: 3
