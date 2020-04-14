// 给定一个二叉树，找到最长的路径，这个路径中的每个节点具有相同值。 这条路径可以经过也可以不经过根节点。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 /**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
  let res = 0;
  function bst(node) {
      if (node === null) {
          return
      }
      // 二叉树中序遍历
      bst(node.left)
      res = Math.max(res, parse(node.left, node.val) + parse(node.right, node.val))
      bst(node.right)
  }

  function parse(node, val) {
      if(node === null || node.val !== val) {
          return 0
      }
      let left = parse(node.left, val) + 1
      let right = parse(node.right, val) + 1
      return Math.max(left, right)
  }

  bst(root)
  return res
};