/*
斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。
该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
给定 N，计算 F(N)。
*/
/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  // const cache = {
  //     '0': 0,
  //     '1': 1
  // }
  // function helper(N) {
  //     if(N in cache) return cache[N]
  //     const res = helper(N - 1) + helper(N - 2)
  //     cache[N] = res
  //     return res
  // }
  // return helper(N)

  // 动态规划
  if (N <= 1) return N
  const res = [0, 1]
  for (let i = 2; i <= N; i++) {
    res.push(res.shift() + res[0])
  }
  return res[1]
};