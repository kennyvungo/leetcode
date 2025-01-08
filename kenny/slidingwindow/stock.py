'''
https://neetcode.io/problems/buy-and-sell-crypto

You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

Example 1:

Input: prices = [10,1,5,6,7,1]

Output: 6
Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.

Example 2:

Input: prices = [10,8,7,5,2]

Output: 0
Explanation: No profitable transactions can be made, thus the max profit is 0.

'''

from typing import List

def maxProfit(prices: List[int]) -> int:
    max_profit = 0 # initialize max profit at 0
    i = 0 #pointer at beginning
    j = 1 #pointer at next index
    while j < len(prices): #iterate until j reaches the last index
        if prices[i] < prices[j]:
            current_profit = prices[j] - prices[i] #find current profit if we sold 
            max_profit = max(max_profit,current_profit) #set max profit to current days if profit is greater
        else:
            i = j
        j += 1
    return max_profit


print(maxProfit([10,1,5,6,7,1])) # 6
print(maxProfit([10,8,7,5,2])) # 0
print(maxProfit([5,1,5,6,7,1,10])) # 9
