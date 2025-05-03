class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stact {
    constructor(){
        this.top = null
        this.size = 0
    }
    push(val){
        const newNode = new Node(val)
        if(this.size === 0){
            this.top = newNode
        }else {
            newNode.next = this.top
            this.top = newNode
        }
        this.size++
        return this

    }
    pop(){
        if(this.size === 0) return null;
        const removed = this.top
        this.top = this.top.next
        this.size--
        return removed.value
    }
    peek(){
        return this.top ? this.top.value : null
    }
    isEmpty(){
        return this.size === 0
    }
}