class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }
    insert(value){
        const newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
        }else {
            let current = this.root
            while(true){
                if(value === current.value) return undefined;
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode
                        return this
                    }else {
                        current = current.left
                    }
                }else {
                    if(current.right === null){
                        current.right = newNode
                        return this
                    }else{
                        current = current.right
                    }
                }
            }
        }
    }
    find(value){
        if(this.root === null) return undefined;
        let current = this.root
        let found = false
        while(current && !found){
            if(value < current.value){
                current = current.left
            }else if(value > current.value){
                current = current.right
            }else {
                found = true
            }
        }
        return found
    }
    findNode(node){
        while(node.left){
            node = node.left
        }
        return node
    }
    remove(value){
        let removedNode = null
        const removeNode=(node, key)=>{
            if(!node) return null;
            if(key < node.value){
                node.left = removeNode(node.left, key)
                return node
            }else if(key > node.value){
                node.right = removeNode(node.right, key)
                return node
            }else {
                removedNode = new Node(node.value)
                if(!node.left && !node.right){
                    return null
                }else if(!node.left){
                    return node.right
                }else if(!node.right){
                    return node.left
                }else {
                    let curr = this.findNode(node.right)
                    node.value = curr.value
                    node.right = removeNode(node.right, curr.value)
                }
                return node
            }
        }
        this.root = removeNode(this.root, value)
        return removedNode
    }

}
