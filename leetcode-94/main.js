function inorderTraversal (root){
    let data = []
    function treverse(node){
        if(!node) return null;
        if(node.left) treverse(node.left)
        if(node.right) treverse(node.right)
        data.push(node.val)    
    }
    treverse(root)
    return data
}