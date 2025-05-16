var preorderTraversal = function(root) {
    const data = []
    function traverse(node){
        if(!node) return null;
        data.push(node.val)
        if(node.left) traverse(node.left)
        if(node.right) traverse(node.right)
    }
    traverse(root)
    return data
};