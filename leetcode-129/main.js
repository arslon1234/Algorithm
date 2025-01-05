var sumNumbers = function(root) {
   function dfs(node, num){
    if(node == null) return 0;
    let new_num = num * 10 + node.val
    if(node.left == null && node.right == null) return new_num;
    return dfs(node.left, new_num) + dfs(node.right, new_num)
   }
   return dfs(root, 0)
};