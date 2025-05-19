function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
function sortedArrayToBST(nums) {
  function createTree(arr) {
    if (arr.length === 0) return null;
    let mid = Math.floor(arr.length / 2);
    let root = new TreeNode(arr[mid]);
    root.left = createTree(arr.slice(0, mid))
    root.right = createTree(arr.slice(mid + 1))
    return root
  }
  const root = createTree(nums);
  return root
}
