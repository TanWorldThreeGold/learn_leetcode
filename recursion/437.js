/*
给定一个二叉树，它的每个结点都存放着一个整数值。

找出路径和等于给定数值的路径总数。

路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。
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
 * @param {number} sum
 * @return {number}
 */
// 每个节点只能做一次根节点
// 找到一条路径之后，要沿着这条路径往下走
var pathSum = function(root, sum) {
  let num = 0; // 统计路径数量

  function findRoute(node, currentSum) {
      if (node === null) {
          return
      }
      if (!node.isVisted) {
          // 保证每个节点都会从0往下走
          node.isVisted = true
          node.left && findRoute(node.left, 0)
          node.right && findRoute(node.right, 0)
      }
      let val = node.val + currentSum
      if (val === sum) {
          num++
      }
      node.left && findRoute(node.left, val)
      node.right && findRoute(node.right, val)
  }

  findRoute(root, 0)
  return num
};

// root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8