// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function(s) {
    if(s.length === 0 || s.length === 1){
        return s.length
     }
     if(s.length === 2){
        return new Set(s).size
     }

    let longest = 0;
    i = 0;
    j = 0;
    let strSet = new Set()
    while(j < s.length){
        if(strSet.has(s[j])){
            while(strSet.has(s[j])){
                strSet.delete(s[i])
                i++
            }
        }
        strSet.add(s[j])
        if(strSet.size > longest){
            longest = strSet.size;
        }
        j++
    }
    return longest;
};

// Key line is on line 15, s[j] is the dupe value, while set has the dupe, keep delete left pointer and incrementing until you no longer see dupe value in set

