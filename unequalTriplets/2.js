// 排序算法
var unequalTriplets = function(nums) {
    // 将数组进行排序 按照的是值第一位字符的大小排序
    let arr = nums.sort();
    for (let j = 0, i = 0; i < nums.length; i = j) {
        while (j < nums.length && nums[i] === nums[j]) {
            j++;      
        }
        res += i * (j - i) * (n - j)
    }
    return res;
};

