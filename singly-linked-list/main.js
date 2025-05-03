class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}
class SinglyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
           this.tail.next = newNode 
           this.tail = newNode
        }
        this.length++
        return this
    }
    unshift(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }else {
            let currentHead = this.head
            this.head = newNode
            newNode.next = currentHead
        }
        this.length++
        return this
    }
    pop(){
       if(!this.head) return;
       let current = this.head
       let newTail = current
       while(current.next){
           newTail = current
           current = current.next
       }
       newTail.next = null
       this.tail = newTail
       this.length--
       if(this.length === 0){
           this.head = null
           this.tail = null
       }
       return current.data
    }
    shift(){
      if(!this.head) return;  
      let currentHead = this.head
      this.head = currentHead.next
      this.length--
      return currentHead
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        let count = 0
        let current = this.head
        while(index !== count){
            current = current.next
            count++
        }
        return current
    }
    set(index,data){
        let foundNode = this.get(index)
        if(foundNode){
            foundNode.data = data
            return true
        }
        return false
    }
    insert(index, data){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return this.push(data);
        if(index === 0) return this.unshift(data);
        let prev = this.get(index - 1)
        let temp = prev.next
        let newNode = new Node(data)
        prev.next = newNode
        newNode.next = temp
        this.length++
        return true
    }
    remove(index){
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        let current = this.get(index)
        let temp = current.next
        let prev = this.get(index - 1)
        prev.next = temp
        this.length--
        return current
    }
    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        let temp = this.head
        this.head = prev
        this.tail = temp
        return this
    }
    print(){
        let arr = []
        let current = this.head
        while(current){
            arr.push(current.data)
            current = current.next
        }
        console.log(arr)
    }
    rotateByN(num){
        if(!this.head || num >= this.length || num === 0){
            return this
        }
        num = num % this.length;
        if(num < 0) num += this.length;
        if(num === 0) return this;
        let current = this.head
        for(let i = 0; i < num; i++){
            current = current.next
        }
        let newTail = this.head
        for(let i = 0; i < num - 1; i++){
            newTail = newTail.next
        }
        this.tail.next = this.head
        this.head = current
        this.tail = newTail
        this.tail.next = null
        return this
    }
}
const list = new SinglyLinkedList()
list.push('hello')
list.push('world')
list.push('end')
list.rotateByN(1)
// list.reverse()
// list.remove(1)
// list.insert(2, 'salom')
// list.insert(0, 'first')
// list.insert(1, 'second')
console.log(list);