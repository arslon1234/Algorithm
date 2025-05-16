function isBalanced (root){
    let balance = true
    function dfs(node){
        if(!node) return 0;
        let left = dfs(node.left)
        let right = dfs(node.right)
        if(Math.abs(left - right) > 1){
            balance = false
        }
        return Math.max(left, right) + 1
    }
    let height = dfs(root)
    return balance
}