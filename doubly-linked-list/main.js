class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}
class DoublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        const newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        }else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop(){
        let poppedNode = this.tail
        if(!this.head) return;
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else {
        this.tail = poppedNode.prev
        this.tail.next = null
        poppedNode.prev = null
        }
        this.length--
        return poppedNode
    }
    shift(){
        let oldHead = this.head
        if(!this.head) return;
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
       this.head = oldHead.next
       this.head.prev = null
       oldHead.next = null
        }
        this.length--
        return oldHead
    }
    unshift(val){
        let newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        }else{
          this.head.prev = newNode
          newNode.next = this.head
          this.head = newNode
        }
        this.length++
        return newNode
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        let mid = Math.floor(this.length / 2)
        if(index > mid){
            let current = this.tail
            let count = this.length - 1
            while(index != count){
                current = current.prev
                count--
            }
            return current
        }else{
            let current = this.head
            let count = 0
            while(index != count){
                current = current.next
                count++
            }
            return current
        }
    }
    set(index,val){
        let foundNode = this.get(index)
        if(foundNode){
            foundNode.data = val
            return true
        }
        return false
    }
    insert(index,val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return this.unshift(val);
        if(index === this.length) return this.push(val);
        let newNode = new Node(val)
        let currentNode = this.get(index)
        let prevNode = this.get(index - 1)
        prevNode.next = newNode
        newNode.next = currentNode
        newNode.prev = prevNode
        currentNode.prev = newNode
        this.length++
        return this
    }
    remove(index){
        if(index < 0 || index >= this.length) return null;
        if(index === 0) return this.shift(index);
        if(index === this.length - 1) return this.unshift(index);
        let currentNode = this.get(index)
        let beforeNode = currentNode.prev
        let afterNode = currentNode.next
        beforeNode.next = afterNode
        afterNode.prev = beforeNode
        currentNode.next = null
        currentNode.prev = null
        this.length--
        return this
    }
}
const list = new DoublyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.remove(3)
console.log(list);
