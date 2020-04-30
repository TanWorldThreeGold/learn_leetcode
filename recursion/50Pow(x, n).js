/*
实现 pow(x, n) ，即计算 x 的 n 次幂函数。
输入: 2.00000, 10
输出: 1024.00000
输入: 2.10000, 3
输出: 9.26100
输入: 2.00000, -2
输出: 0.25000
解释: 2-2 = 1/22 = 1/4 = 0.25
说明:
-100.0 < x < 100.0
n 是 32 位有符号整数，其数值范围是 [−231, 231 − 1] 。
*/
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) return 1
  if (n === 1) return x
  if (n < 0) {
    x = 1 / x
    n = Math.abs(n)
  }
  let val = myPow(x, Math.floor(n / 2))
  let res = val * val
  if (n % 2 !== 0) res *= x
  return res

  // if (n === 0) return 1
  // if (x === 0) return 0
  // if (n < 0) {
  //     x = 1 / x
  //     n = Math.abs(n)
  // }
  // let res = 1
  // while(n !== 1) {
  //     if (n % 2 !== 0) res *= x
  //     x *= x
  //     n = Math.floor(n / 2)
  // }
  // return res * x
};