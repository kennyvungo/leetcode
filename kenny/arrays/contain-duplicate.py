'''
https://neetcode.io/problems/duplicate-integer
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]

Output: true

Example 2:

Input: nums = [1, 2, 3, 4]

Output: false

'''
from typing import List

def hasDuplicate(nums: List[int]) -> bool:
    return len(set(nums)) < len(nums)
   



print(hasDuplicate([1,2,3,4])) #false
print(hasDuplicate([1,2,3,3])) #true
print(hasDuplicate([1,2,3,4,7,8,9,0,1,3,5])) #true
print(hasDuplicate([1,1])) #true
