var longestConsecutive = function(nums) {
    if(nums.length === 0){
        return 0
    }
    let numSet = new Set(nums)
    let longest = 1
    for(let num of numSet){
        if(!numSet.has(num - 1)){
            let count = 1
            while(numSet.has(num + count)){
                count++;
            }
            longest = Math.max(longest,count)
        }
    }
    return longest;
};

// n - 1 approach
// look for a "start num", one that doesn't have n-1 in the set
// then just go up from there
