function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
function findLeftNode(node){
    while(node.left){
        node = node.left
    }
    return node
}
function deleteNode(root, key) {
  if (!root) return null;
  if (root.val > key) {
    root.left = deleteNode(node.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(node.right, key);
  } else {
    if (!root.left && !root.right) {
      return null;
    } else if (!root.right) {
      return root.left;
    } else if (!root.left) {
      return root.right;
    } else {
        let curr = findLeftNode(root.right)
        root.val = curr.val
        root.right = deleteNode(root.right, curr.val)
    }
  }
}
