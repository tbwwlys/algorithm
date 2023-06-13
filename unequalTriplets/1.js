// 枚举法

var unequalTriplets = function(nums) {
    let count = 0;
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = j + 1; k < len; k++) {
                if (nums[i] !== nums[j] && nums[i] !== nums[k] && nums[k] !== nums[j]) {
                    count++
                }
            }
        }
    }
    return count;
};