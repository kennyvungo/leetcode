'''
https://neetcode.io/problems/longest-substring-without-duplicates
Given a string s, find the length of the longest substring without duplicate characters.

A substring is a contiguous sequence of characters within a string.

Example 1:

Input: s = "zxyzxyz"

Output: 3
Explanation: The string "xyz" is the longest without duplicate characters.

Example 2:

Input: s = "xxxx"

Output: 1

'''


def lengthOfLongestSubstring(s: str) -> int:
    if len(s) == 1:
        return 1
    current_length = 0
    max_length = 0
    substr = set()
    # two pointers
    # i is start of our substr
    i = 0
    # j is end of our substr
    j = 0
    # move up j pointer until it reaches the end, each time we will be adding it to a set, for easy access
    while j < len(s):
        # dupe condition where j has hit a char already in the substring
        if s[j] in substr:
            # if we hit a dupe, we know that currently that is a substr, so we should check length
            current_length = len(substr)
            if current_length > max_length:
                max_length = current_length
            # we should now move up i until we reach the dupe letter, so we know where to start the next substr
            # we will also remove each char from our set as we do so
            while s[i] != s[j]:
                substr.remove(s[i])
                i += 1
            # once we are here that means i is on the matching dupe letter with j, so we will remove it one more time and then move i up one to start the new substr
            substr.remove(s[i])
            i += 1
        # always add a char every loop and move up j pointer
        substr.add(s[j])
        j += 1
    # final check if the longest happens to be the last possible substr
    current_length = len(substr)
    if current_length > max_length:
        max_length = current_length
    return max_length


print(lengthOfLongestSubstring("zxyzxyz")) # 3
print(lengthOfLongestSubstring("xxx")) # 1
print(lengthOfLongestSubstring("abcabcbb")) # 3

