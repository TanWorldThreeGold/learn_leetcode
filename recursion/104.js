/*
给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]
返回它的最大深度 3 。
*/

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
// 两种实现方式
var maxDepth = function(root) {
  // 迭代
  // if (!root) return 0
  // let depth = 1
  // return depth + Math.max(maxDepth(root.left), maxDepth(root.right))

  // 广度优先遍历
  if (!root) return 0
  let depth = 1
  let queue = [root, null]
  let node
  while ((node = queue.shift()) !== undefined) {
      if (node === null) {
          if (!queue.length) return depth
          depth++
          queue.push(null)
          continue
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
  }
  return depth
};