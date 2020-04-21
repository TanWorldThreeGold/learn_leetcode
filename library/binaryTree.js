class TreeNode {
  constructor(val) {
    this.val = val
    this.right = this.left = null
  }
}

class BinaryTree {
  root = null
  // 插入
  insert(val) {
    let newNode = new TreeNode(val)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }
  insertNode(node, newNode) {
    if (node.val > newNode.val) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }
  // 前序遍历
  preOrderTraverse(cb) {
    this.preOrderTraverseNode(this.root, cb)
  }
  preOrderTraverseNode(node, cb) {
    if (node === null) {
      return
    }
    cb(node.val)
    this.preOrderTraverseNode(node.left, cb)
    this.preOrderTraverseNode(node.right, cb)
  }
  // 中序遍历
  inOrderTraverse(cb) {
    this.inOrderTraverseNode(this.root, cb)
  }
  inOrderTraverseNode(node, cb) {
    if (node === null) {
      return
    }
    this.preOrderTraverseNode(node.left, cb)
    cb(node.val)
    this.preOrderTraverseNode(node.right, cb)
  }
  // 后序遍历
  postOrderTraverse(cb) {
    this.postOrderTraverseNode(this.root, cb)
  }
  postOrderTraverseNode(node, cb) {
    if (node === null) {
      return
    }
    this.preOrderTraverseNode(node.left, cb)
    this.preOrderTraverseNode(node.right, cb)
    cb(node.val)
  }
  // 查询最小值
  min() {
    return this.findMin(this.root)
  }
  findMin(node) {
    if (node.left === null) {
      return node.val
    }
    if (node.left) {
      return this.findMin(node.left)
    }
  }
  // 查询最大值
  max() {
    return this.findMax(this.root)
  }
  findMax(node) {
    if (node.right === null) {
      return node.val
    }
    if (node.right) {
      return this.findMax(node.right)
    }
  }
  // 查询对应值所对应的node
  search(target) {
    return this.searchNode(this.root, target)
  }
  searchNode(node, target) {
    if (node === null) {
      return null
    }
    if (node.val > target) {
      return this.searchNode(node.left, target)
    } else if (node.val < target) {
      return this.searchNode(node.right, target)
    } else {
      return node
    }
  }
  // 删除节点
  remove(target) {
    return this.removeNode(this.root, target)
  }
  removeNode(node, target) {
    if (node === null) {
      return null
    }
    if (node.val > target) {
      node.left = this.removeNode(node.left, target)
      return node
    } else if (node.val < target) {
      node.right = this.removeNode(node.right, target)
      return node
    } else {
      // 4种情况需要分别处理
      if (node.left === null && node.right === null) {
        node = null
        return node
      }
      if (node.left === null) {
        node = node.right
        return node
      }
      if (node.right === null) {
        node = node.left
        return node
      }
      let minNode = this.findMinNode(node.right)
      node.val = minNode.val
      node.right = this.removeNode(node.right, minNode.val)
      return node
    }
  }
  findMinNode(node) {
    if (node === null) {
      return null
    }
    if (node.left !== null) {
      return this.findMin(node.left)
    }
    return node
  }
}

module.exports = BinaryTree

let nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13]
let binaryTree = new BinaryTree()

nodes.forEach(val => {
  binaryTree.insert(val)
})
// console.log(binaryTree.root)

var cb = function(val) {
  console.log(val)
}

// binaryTree.inOrderTraverse(cb)
// binaryTree.preOrderTraverse(cb)
// binaryTree.postOrderTraverse(cb)
console.log(binaryTree.min())
console.log(binaryTree.max())
console.log(binaryTree.search(7))

binaryTree.remove(10)
console.log(binaryTree.root)