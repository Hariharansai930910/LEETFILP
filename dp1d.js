const dp1d = [
  {
    "title": "Certainly! Here are optimized Python solutions for each problem, along with their time and space complexities:",
    "difficulty": "---",
    "question": "### 1. **Climbing Stairs**",
    "hint": "**Problem:**",
    "oneLiner": "Given `n` steps, you can climb 1 or 2 steps at a time. Find the number of distinct ways to reach the top.",
    "threeLiner": "**Solution:**",
    "mnemonic": "```python",
    "code": "def climbStairs(n):"
  },
  {
    "title": "if n <= 2:",
    "difficulty": "return n",
    "question": "first, second = 1, 2",
    "hint": "for _ in range(3, n + 1):",
    "oneLiner": "first, second = second, first + second",
    "threeLiner": "return second",
    "mnemonic": "```",
    "code": "**Time Complexity:** O(n) \u2013 We iterate up to `n`."
  },
  {
    "title": "**Space Complexity:** O(1) \u2013 Constant space used.",
    "difficulty": "1. Climbing Stairs",
    "question": "\u2705 One-liner:",
    "hint": "Use Fibonacci-style bottom-up DP to count steps.",
    "oneLiner": "\ud83d\udc76 3-liner for kids:",
    "threeLiner": "You can climb 1 or 2 stairs at a time.",
    "mnemonic": "Count how many ways to get to each stair.",
    "code": "It\u2019s like adding ways from two previous steps."
  },
  {
    "title": "\ud83e\udde0 Mnemonics:",
    "difficulty": "\"Fibonacci step\" \u2192 first, second = second, first + second",
    "question": "\"Start base\" \u2192 first, second = 1, 2",
    "hint": "\"Return top\" \u2192 return second",
    "oneLiner": "---",
    "threeLiner": "### 2. **Min Cost Climbing Stairs**",
    "mnemonic": "**Problem:**",
    "code": "Given an array `cost` where `cost[i]` is the cost of the `i`-th step, find the minimum cost to reach the top."
  },
  {
    "title": "**Solution:**",
    "difficulty": "```python",
    "question": "def minCostClimbingStairs(cost):",
    "hint": "n = len(cost)",
    "oneLiner": "first, second = cost[0], cost[1]",
    "threeLiner": "for i in range(2, n):",
    "mnemonic": "first, second = second, cost[i] + min(first, second)",
    "code": "return min(first, second)"
  },
  {
    "title": "```",
    "difficulty": "**Time Complexity:** O(n) \u2013 We iterate through the `cost` array once.",
    "question": "**Space Complexity:** O(1) \u2013 Constant space used.",
    "hint": "2. Min Cost Climbing Stairs",
    "oneLiner": "\u2705 One-liner:",
    "threeLiner": "Track min cost to reach each stair by choosing the cheaper path.",
    "mnemonic": "\ud83d\udc76 3-liner for kids:",
    "code": "Every stair has a price."
  },
  {
    "title": "You can jump one or two ahead.",
    "difficulty": "Always pay the cheaper way!",
    "question": "\ud83e\udde0 Mnemonics:",
    "hint": "\"Take cheaper path\" \u2192 first, second = second, cost[i] + min(first, second)",
    "oneLiner": "\"Start base\" \u2192 first, second = cost[0], cost[1]",
    "threeLiner": "\"Choose last\" \u2192 return min(first, second)",
    "mnemonic": "---",
    "code": "### 3. **House Robber**"
  },
  {
    "title": "**Problem:**",
    "difficulty": "Given an array `nums` representing the amount of money in each house, find the maximum amount you can rob without robbing adjacent houses.",
    "question": "**Solution:**",
    "hint": "```python",
    "oneLiner": "def rob(nums):",
    "threeLiner": "if not nums:",
    "mnemonic": "return 0",
    "code": "if len(nums) == 1:"
  },
  {
    "title": "return nums[0]",
    "difficulty": "first, second = 0, 0",
    "question": "for num in nums:",
    "hint": "first, second = second, max(second, first + num)",
    "oneLiner": "return second",
    "threeLiner": "```",
    "mnemonic": "**Time Complexity:** O(n) \u2013 We iterate through the `nums` array once.",
    "code": "**Space Complexity:** O(1) \u2013 Constant space used."
  },
  {
    "title": "3. House Robber",
    "difficulty": "\u2705 One-liner:",
    "question": "Use DP to choose max between robbing current or skipping it.",
    "hint": "\ud83d\udc76 3-liner for kids:",
    "oneLiner": "Can\u2019t rob two houses in a row.",
    "threeLiner": "Each time, choose: rob this or skip it.",
    "mnemonic": "Keep track of best steal.",
    "code": "\ud83e\udde0 Mnemonics:"
  },
  {
    "title": "\"Rob or skip\" \u2192 first, second = second, max(second, first + num)",
    "difficulty": "\"Track rolling max\" \u2192 first, second = 0, 0",
    "question": "\"Final loot\" \u2192 return second",
    "hint": "---",
    "oneLiner": "### 4. **House Robber II**",
    "threeLiner": "**Problem:**",
    "mnemonic": "Similar to House Robber, but houses are arranged in a circle. Find the maximum amount you can rob without alerting the police.",
    "code": "**Solution:**"
  },
  {
    "title": "```python",
    "difficulty": "def rob(nums):",
    "question": "def rob_linear(houses):",
    "hint": "first, second = 0, 0",
    "oneLiner": "for num in houses:",
    "threeLiner": "first, second = second, max(second, first + num)",
    "mnemonic": "return second",
    "code": "if len(nums) == 1:"
  },
  {
    "title": "return nums[0]",
    "difficulty": "return max(rob_linear(nums[:-1]), rob_linear(nums[1:]))",
    "question": "```",
    "hint": "**Time Complexity:** O(n) \u2013 We process two linear passes of the houses.",
    "oneLiner": "**Space Complexity:** O(1) \u2013 Constant space used.",
    "threeLiner": "4. House Robber II",
    "mnemonic": "\u2705 One-liner:",
    "code": "Run house robber on both circle-split paths and return the best."
  },
  {
    "title": "\ud83d\udc76 3-liner for kids:",
    "difficulty": "First and last houses are neighbors.",
    "question": "So rob from 0 to n-2 or from 1 to n-1.",
    "hint": "Take the better of the two!",
    "oneLiner": "\ud83e\udde0 Mnemonics:",
    "threeLiner": "\"Rob linearly\" \u2192 rob_linear(nums[:-1]), rob_linear(nums[1:])",
    "mnemonic": "\"Rolling max again\" \u2192 first, second = second, max(second, first + num)",
    "code": "\"Return max plan\" \u2192 return max(...)"
  },
  {
    "title": "---",
    "difficulty": "### 5. **Longest Palindromic Substring**",
    "question": "**Problem:**",
    "hint": "Given a string `s`, find the longest palindromic substring in `s`.",
    "oneLiner": "**Solution:**",
    "threeLiner": "```python",
    "mnemonic": "def longestPalindrome(s):",
    "code": "def expand_around_center(left, right):"
  },
  {
    "title": "while left >= 0 and right < len(s) and s[left] == s[right]:",
    "difficulty": "left -= 1",
    "question": "right += 1",
    "hint": "return s[left + 1:right]",
    "oneLiner": "longest = \"\"",
    "threeLiner": "for i in range(len(s)):",
    "mnemonic": "# Odd length palindrome",
    "code": "temp = expand_around_center(i, i)"
  },
  {
    "title": "if len(temp) > len(longest):",
    "difficulty": "longest = temp",
    "question": "# Even length palindrome",
    "hint": "temp = expand_around_center(i, i + 1)",
    "oneLiner": "if len(temp) > len(longest):",
    "threeLiner": "longest = temp",
    "mnemonic": "return longest",
    "code": "```"
  },
  {
    "title": "**Time Complexity:** O(n\u00b2) \u2013 For each character, we potentially expand to the entire string.",
    "difficulty": "**Space Complexity:** O(1) \u2013 No extra space used beyond variables.",
    "question": "5. Longest Palindromic Substring",
    "hint": "\u2705 One-liner:",
    "oneLiner": "Expand around each center to find longest mirror substring.",
    "threeLiner": "\ud83d\udc76 3-liner for kids:",
    "mnemonic": "A palindrome reads the same both ways.",
    "code": "Try expanding around every letter."
  },
  {
    "title": "Keep the longest one you find!",
    "difficulty": "\ud83e\udde0 Mnemonics:",
    "question": "\"Expand center\" \u2192 while s[left] == s[right]: left--, right++",
    "hint": "\"Two tries\" \u2192 expand(i, i), expand(i, i+1)",
    "oneLiner": "\"Track longest\" \u2192 if len(temp) > len(longest): longest = temp",
    "threeLiner": "---",
    "mnemonic": "### 6. **Palindromic Substrings**",
    "code": "**Problem:**"
  },
  {
    "title": "Given a string `s`, count the number of palindromic substrings in it.",
    "difficulty": "**Solution:**",
    "question": "```python",
    "hint": "def countSubstrings(s):",
    "oneLiner": "def expand_around_center(left, right):",
    "threeLiner": "count = 0",
    "mnemonic": "while left >= 0 and right < len(s) and s[left] == s[right]:",
    "code": "count += 1"
  },
  {
    "title": "left -= 1",
    "difficulty": "right += 1",
    "question": "return count",
    "hint": "count = 0",
    "oneLiner": "for i in range(len(s)):",
    "threeLiner": "count += expand_around_center(i, i)\u00a0\u00a0\u00a0\u00a0 # Odd length palindromes",
    "mnemonic": "count += expand_around_center(i, i + 1) # Even length palindromes",
    "code": "return count"
  },
  {
    "title": "```",
    "difficulty": "**Time Complexity:** O(n\u00b2) \u2013 Similar expansion as above.",
    "question": "**Space Complexity:** O(1) \u2013 No extra space used beyond variables.",
    "hint": "6. Palindromic Substrings",
    "oneLiner": "\u2705 One-liner:",
    "threeLiner": "Count all possible centers and expand to count mirrors.",
    "mnemonic": "\ud83d\udc76 3-liner for kids:",
    "code": "Count how many palindromes live inside the word."
  },
  {
    "title": "Try every letter as the middle.",
    "difficulty": "Add one each time you find one!",
    "question": "\ud83e\udde0 Mnemonics:",
    "hint": "\"Center expand\" \u2192 while s[l] == s[r]: count += 1",
    "oneLiner": "\"Two centers\" \u2192 expand(i, i), expand(i, i+1)",
    "threeLiner": "\"Add up\" \u2192 count += ...",
    "mnemonic": "---",
    "code": "### 7. **Decode Ways**"
  },
  {
    "title": "**Problem:**",
    "difficulty": "A message containing letters from A-Z is encoded to numbers using 'A' = 1, 'B' = 2, ..., 'Z' = 26. Given a string `s`, determine the number of ways to decode it.",
    "question": "**Solution:**",
    "hint": "```python",
    "oneLiner": "def numDecodings(s):",
    "threeLiner": "if not s or s[0] == '0':",
    "mnemonic": "return 0",
    "code": "n = len(s)"
  },
  {
    "title": "dp = [0] * (n + 1)",
    "difficulty": "dp[0], dp[1] = 1, 1",
    "question": "for i in range(2, n + 1):",
    "hint": "if s[i - 1] != '0':",
    "oneLiner": "dp[i] += dp[i - 1]",
    "threeLiner": "if '10' <= s[i - 2:i] <= '26':",
    "mnemonic": "dp[i] += dp[i - 2]",
    "code": "return dp[n]"
  },
  {
    "title": "```",
    "difficulty": "**Time Complexity:** O(n) \u2013 Single pass through the string.",
    "question": "**Space Complexity:** O(n) \u2013 DP array of size `n + 1`.",
    "hint": "7. Decode Ways",
    "oneLiner": "\u2705 One-liner:",
    "threeLiner": "DP counts ways to split string using valid '1'-'26' chunks.",
    "mnemonic": "\ud83d\udc76 3-liner for kids:",
    "code": "Each number becomes a letter."
  },
  {
    "title": "Check one or two digits at a time.",
    "difficulty": "Count how many messages you can make!",
    "question": "\ud83e\udde0 Mnemonics:",
    "hint": "\"Single digit valid\" \u2192 if s[i-1] != '0': dp[i] += dp[i-1]",
    "oneLiner": "\"Double digit valid\" \u2192 if '10' <= s[i-2:i] <= '26': dp[i] += dp[i-2]",
    "threeLiner": "\"Return total\" \u2192 return dp[n]",
    "mnemonic": "---",
    "code": "### 8. **Coin Change**"
  },
  {
    "title": "**Problem:**",
    "difficulty": "Given an array `coins` representing different coin denominations and an integer `amount`, find the fewest number of coins needed to make up that amount.",
    "question": "**Solution:**",
    "hint": "```python",
    "oneLiner": "def coinChange(coins, amount):",
    "threeLiner": "dp = [float('inf')] * (amount + 1)",
    "mnemonic": "dp[0] = 0",
    "code": "for coin in coins:"
  },
  {
    "title": "for x in range(coin, amount + 1):",
    "difficulty": "dp[x] = min(dp[x], dp[x - coin] + 1)",
    "question": "return dp[amount] if dp[amount] != float('inf') else -1",
    "hint": "```",
    "oneLiner": "**Time Complexity:** O(n \u00d7 m) \u2013 `n` is the amount, and `m` is the number of coins.",
    "threeLiner": "**Space Complexity:** O(n) \u2013 DP array of size `amount + 1`.",
    "mnemonic": "8. Coin Change",
    "code": "\u2705 One-liner:"
  },
  {
    "title": "Bottom-up DP to find min coins needed for each amount.",
    "difficulty": "\ud83d\udc76 3-liner for kids:",
    "question": "You need change for an amount.",
    "hint": "Try every coin for every total.",
    "oneLiner": "Keep the smallest number of coins!",
    "threeLiner": "\ud83e\udde0 Mnemonics:",
    "mnemonic": "\"Try each coin\" \u2192 dp[x] = min(dp[x], dp[x - coin] + 1)",
    "code": "\"Init DP table\" \u2192 dp = [inf] * (amount + 1); dp[0] = 0"
  },
  {
    "title": "\"Return answer\" \u2192 return dp[amount] if dp[amount] != inf else -1",
    "difficulty": "---",
    "question": "### 9. **Maximum Product Subarray**",
    "hint": "**Problem:**",
    "oneLiner": "Given an integer array `nums`, find the contiguous subarray with the largest product.",
    "threeLiner": "**Solution:**",
    "mnemonic": "```python",
    "code": "def maxProduct(nums):"
  },
  {
    "title": "if not nums:",
    "difficulty": "return 0",
    "question": "max_prod = min_prod = result = nums[0]",
    "hint": "for num in nums[1:]:",
    "oneLiner": "temp = max",
    "threeLiner": "9. Maximum Product Subarray",
    "mnemonic": "\u2705 One-liner:",
    "code": "Track both max and min at each index to handle negatives."
  },
  {
    "title": "\ud83d\udc76 3-liner for kids:",
    "difficulty": "Product grows fast, but negatives flip things.",
    "question": "Keep track of both biggest and smallest products.",
    "hint": "Update the max each time!",
    "oneLiner": "\ud83e\udde0 Mnemonics:",
    "threeLiner": "\"Swap on negative\" \u2192 if num < 0: max_prod, min_prod = min_prod, max_prod",
    "mnemonic": "\"Update max/min\" \u2192 max_prod = max(num, max_prod * num)",
    "code": "\"Track global max\" \u2192 result = max(result, max_prod)"
  }
];
export default dp1d;