const dp2d = [
  {
    "title": "1.)",
    "difficulty": "class Solution:",
    "question": "def uniquePaths(self, m: int, n: int) -> int:",
    "hint": "row = [1] * n",
    "oneLiner": "for i in range(m - 1):",
    "threeLiner": "newRow = [1] * n",
    "mnemonic": "for j in range(n - 2, -1, -1):",
    "code": "newRow[j] = newRow[j + 1] + row[j]"
  },
  {
    "title": "row = newRow",
    "difficulty": "return row[0]",
    "question": "1. Unique Paths",
    "hint": "\u2705 One-liner:",
    "oneLiner": "Build bottom-up by storing path counts from the bottom row to the top.",
    "threeLiner": "\ud83d\udc76 3-liner for kids:",
    "mnemonic": "You can move right or down in a grid.",
    "code": "Each cell holds total paths from there."
  },
  {
    "title": "Start at the bottom and fill the top!",
    "difficulty": "\ud83e\udde0 Mnemonics:",
    "question": "\"Start with rightmost path as 1s\" \u2192 row = [1] * n",
    "hint": "\"Move bottom-up\" \u2192 newRow[j] = newRow[j+1] + row[j]",
    "oneLiner": "\"Top-left holds the answer\" \u2192 return row[0]",
    "threeLiner": "2.)",
    "mnemonic": "class Solution:",
    "code": "def longestCommonSubsequence(self, text1: str, text2: str) -> int:"
  },
  {
    "title": "if len(text1) < len(text2):",
    "difficulty": "text1, text2 = text2, text1",
    "question": "prev = [0] * (len(text2) + 1)",
    "hint": "curr = [0] * (len(text2) + 1)",
    "oneLiner": "for i in range(len(text1) - 1, -1, -1):",
    "threeLiner": "for j in range(len(text2) - 1, -1, -1):",
    "mnemonic": "if text1[i] == text2[j]:",
    "code": "curr[j] = 1 + prev[j + 1]"
  },
  {
    "title": "else:",
    "difficulty": "curr[j] = max(curr[j + 1], prev[j])",
    "question": "prev, curr = curr, prev",
    "hint": "return prev[0]",
    "oneLiner": "2. Longest Common Subsequence",
    "threeLiner": "\u2705 One-liner:",
    "mnemonic": "Compare characters bottom-up and store best matches.",
    "code": "\ud83d\udc76 3-liner for kids:"
  },
  {
    "title": "Look for common letters in two words.",
    "difficulty": "If letters match, grow your chain.",
    "question": "Remember best paths from the future!",
    "hint": "\ud83e\udde0 Mnemonics:",
    "oneLiner": "\"Match adds 1\" \u2192 curr[j] = 1 + prev[j + 1]",
    "threeLiner": "\"Else take max\" \u2192 curr[j] = max(curr[j + 1], prev[j])",
    "mnemonic": "\"Swap rows\" \u2192 prev, curr = curr, prev",
    "code": "3.)"
  },
  {
    "title": "class Solution:",
    "difficulty": "def maxProfit(self, prices: List[int]) -> int:",
    "question": "n = len(prices)",
    "hint": "dp1_buy, dp1_sell = 0, 0",
    "oneLiner": "dp2_buy = 0",
    "threeLiner": "for i in range(n - 1, -1, -1):",
    "mnemonic": "dp_buy = max(dp1_sell - prices[i], dp1_buy)",
    "code": "dp_sell = max(dp2_buy + prices[i], dp1_sell)"
  },
  {
    "title": "dp2_buy = dp1_buy",
    "difficulty": "dp1_buy, dp1_sell = dp_buy, dp_sell",
    "question": "return dp1_buy",
    "hint": "3. Best Time to Buy/Sell Stock III",
    "oneLiner": "\u2705 One-liner:",
    "threeLiner": "Track two transactions using rolling DP updates from right to left.",
    "mnemonic": "\ud83d\udc76 3-liner for kids:",
    "code": "You can buy and sell twice."
  },
  {
    "title": "Track your best profits in reverse.",
    "difficulty": "Keep updating what to buy/sell!",
    "question": "\ud83e\udde0 Mnemonics:",
    "hint": "\"Buy max profit\" \u2192 dp_buy = max(dp1_sell - price, dp1_buy)",
    "oneLiner": "\"Sell max profit\" \u2192 dp_sell = max(dp2_buy + price, dp1_sell)",
    "threeLiner": "\"Shift state\" \u2192 dp2_buy = dp1_buy",
    "mnemonic": "4.)",
    "code": "class Solution:"
  },
  {
    "title": "def change(self, amount: int, coins: List[int]) -> int:",
    "difficulty": "dp = [0] * (amount + 1)",
    "question": "dp[0] = 1",
    "hint": "for i in range(len(coins) - 1, -1, -1):",
    "oneLiner": "nextDP = [0] * (amount + 1)",
    "threeLiner": "nextDP[0] = 1",
    "mnemonic": "for a in range(1, amount + 1):",
    "code": "nextDP[a] = dp[a]"
  },
  {
    "title": "if a - coins[i] >= 0:",
    "difficulty": "nextDP[a] += nextDP[a - coins[i]]",
    "question": "dp = nextDP",
    "hint": "return dp[amount]",
    "oneLiner": "4. Coin Change II",
    "threeLiner": "\u2705 One-liner:",
    "mnemonic": "Use DP to count all combinations to reach an amount.",
    "code": "\ud83d\udc76 3-liner for kids:"
  },
  {
    "title": "You can use each coin as many times.",
    "difficulty": "Try every way to make the target.",
    "question": "Count how many combos reach it!",
    "hint": "\ud83e\udde0 Mnemonics:",
    "oneLiner": "\"Init base case\" \u2192 dp[0] = 1",
    "threeLiner": "\"Use each coin\" \u2192 nextDP[a] += nextDP[a - coin]",
    "mnemonic": "\"Swap arrays\" \u2192 dp = nextDP",
    "code": "5.)"
  },
  {
    "title": "class Solution:",
    "difficulty": "def findTargetSumWays(self, nums: List[int], target: int) -> int:",
    "question": "dp = defaultdict(int)",
    "hint": "dp[0] = 1",
    "oneLiner": "for num in nums:",
    "threeLiner": "next_dp = defaultdict(int)",
    "mnemonic": "for total, count in dp.items():",
    "code": "next_dp[total + num] += count"
  },
  {
    "title": "next_dp[total - num] += count",
    "difficulty": "dp = next_dp",
    "question": "return dp[target]",
    "hint": "5. Target Sum",
    "oneLiner": "\u2705 One-liner:",
    "threeLiner": "DP maps every possible sum from \u00b1 choices of nums.",
    "mnemonic": "\ud83d\udc76 3-liner for kids:",
    "code": "Each number can be + or \u2013."
  },
  {
    "title": "Try both for every total.",
    "difficulty": "Count all paths to your goal!",
    "question": "\ud83e\udde0 Mnemonics:",
    "hint": "\"Try both signs\" \u2192 next_dp[total \u00b1 num] += count",
    "oneLiner": "\"Loop through totals\" \u2192 for total, count in dp.items():",
    "threeLiner": "\"Final result\" \u2192 return dp[target]",
    "mnemonic": "6.)",
    "code": "class Solution:"
  },
  {
    "title": "def isInterleave(self, s1: str, s2: str, s3: str) -> bool:",
    "difficulty": "m, n = len(s1), len(s2)",
    "question": "if m + n != len(s3):",
    "hint": "return False",
    "oneLiner": "if n < m:",
    "threeLiner": "s1, s2 = s2, s1",
    "mnemonic": "m, n = n, m",
    "code": "dp = [False for _ in range(n + 1)]"
  },
  {
    "title": "dp[n] = True",
    "difficulty": "for i in range(m, -1, -1):",
    "question": "nextDp = True",
    "hint": "for j in range(n - 1, -1, -1):",
    "oneLiner": "res = False",
    "threeLiner": "if i < m and s1[i] == s3[i + j] and dp[j]:",
    "mnemonic": "res = True",
    "code": "if j < n and s2[j] == s3[i + j] and nextDp:"
  },
  {
    "title": "res = True",
    "difficulty": "dp[j] = res",
    "question": "nextDp = dp[j]",
    "hint": "return dp[0]",
    "oneLiner": "6. Interleaving String",
    "threeLiner": "\u2705 One-liner:",
    "mnemonic": "Use 1D DP to check if s3 can be formed by interleaving s1 and s2.",
    "code": "\ud83d\udc76 3-liner for kids:"
  },
  {
    "title": "Mix two strings to make the third.",
    "difficulty": "Check every possible merge.",
    "question": "Don\u2019t lose track of match order!",
    "hint": "\ud83e\udde0 Mnemonics:",
    "oneLiner": "\"Check char match\" \u2192 if s1[i] == s3[i+j] and dp[j]",
    "threeLiner": "\"Also try s2\" \u2192 if s2[j] == s3[i+j] and nextDp",
    "mnemonic": "\"Update DP\" \u2192 dp[j] = res",
    "code": "7.)"
  },
  {
    "title": "class Solution:",
    "difficulty": "def longestIncreasingPath(self, matrix: List[List[int]]) -> int:",
    "question": "ROWS, COLS = len(matrix), len(matrix[0])",
    "hint": "dp = {}\u00a0 # (r, c) -> LIP",
    "oneLiner": "def dfs(r, c, prevVal):",
    "threeLiner": "if (r < 0 or r == ROWS or c < 0 or",
    "mnemonic": "c == COLS or matrix[r][c] <= prevVal",
    "code": "):"
  },
  {
    "title": "return 0",
    "difficulty": "if (r, c) in dp:",
    "question": "return dp[(r, c)]",
    "hint": "res = 1",
    "oneLiner": "res = max(res, 1 + dfs(r + 1, c, matrix[r][c]))",
    "threeLiner": "res = max(res, 1 + dfs(r - 1, c, matrix[r][c]))",
    "mnemonic": "res = max(res, 1 + dfs(r, c + 1, matrix[r][c]))",
    "code": "res = max(res, 1 + dfs(r, c - 1, matrix[r][c]))"
  },
  {
    "title": "dp[(r, c)] = res",
    "difficulty": "return res",
    "question": "for r in range(ROWS):",
    "hint": "for c in range(COLS):",
    "oneLiner": "dfs(r, c, -1)",
    "threeLiner": "return max(dp.values())",
    "mnemonic": "7. Longest Increasing Path in Matrix",
    "code": "\u2705 One-liner:"
  },
  {
    "title": "DFS + memoization to get the longest increasing path from each cell.",
    "difficulty": "\ud83d\udc76 3-liner for kids:",
    "question": "Climb from one number to bigger ones.",
    "hint": "Remember best steps from each point.",
    "oneLiner": "Return the longest trail!",
    "threeLiner": "\ud83e\udde0 Mnemonics:",
    "mnemonic": "\"Cache results\" \u2192 if (r, c) in dp: return dp[(r, c)]",
    "code": "\"Try all 4 dirs\" \u2192 dfs(r \u00b1 1, c), dfs(r, c \u00b1 1)"
  },
  {
    "title": "\"Max of all paths\" \u2192 return max(dp.values())",
    "difficulty": "8.)",
    "question": "class Solution:",
    "hint": "def numDistinct(self, s: str, t: str) -> int:",
    "oneLiner": "m, n = len(s), len(t)",
    "threeLiner": "dp = [0] * (n + 1)",
    "mnemonic": "dp[n] = 1",
    "code": "for i in range(m - 1, -1, -1):"
  },
  {
    "title": "prev = 1",
    "difficulty": "for j in range(n - 1, -1, -1):",
    "question": "res = dp[j]",
    "hint": "if s[i] == t[j]:",
    "oneLiner": "res += prev",
    "threeLiner": "prev = dp[j]",
    "mnemonic": "dp[j] = res",
    "code": "return dp[0]"
  },
  {
    "title": "8. Distinct Subsequences",
    "difficulty": "\u2705 One-liner:",
    "question": "Use DP to count all ways s can form t as a subsequence.",
    "hint": "\ud83d\udc76 3-liner for kids:",
    "oneLiner": "You can skip letters in s to form t.",
    "threeLiner": "Every match gives a new way.",
    "mnemonic": "Add the number of paths together!",
    "code": "\ud83e\udde0 Mnemonics:"
  },
  {
    "title": "\"Base case\" \u2192 dp[n] = 1",
    "difficulty": "\"Match char\" \u2192 if s[i] == t[j]: res += prev",
    "question": "\"Update dp\" \u2192 dp[j] = res",
    "hint": "9.)",
    "oneLiner": "class Solution:",
    "threeLiner": "def minDistance(self, word1: str, word2: str) -> int:",
    "mnemonic": "m, n = len(word1), len(word2)",
    "code": "if m < n:"
  },
  {
    "title": "m, n = n, m",
    "difficulty": "word1, word2 = word2, word1",
    "question": "dp = [n - i for i in range(n + 1)]",
    "hint": "for i in range(m - 1, -1, -1):",
    "oneLiner": "nextDp = dp[n]",
    "threeLiner": "dp[n] = m - i",
    "mnemonic": "for j in range(n - 1, -1, -1):",
    "code": "temp = dp[j]"
  },
  {
    "title": "if word1[i] == word2[j]:",
    "difficulty": "dp[j] = nextDp",
    "question": "else:",
    "hint": "dp[j] = 1 + min(dp[j], dp[j + 1], nextDp)",
    "oneLiner": "nextDp = temp",
    "threeLiner": "return dp[0]",
    "mnemonic": "9. Edit Distance",
    "code": "\u2705 One-liner:"
  },
  {
    "title": "Bottom-up DP tracks minimum ops to convert one string to another.",
    "difficulty": "\ud83d\udc76 3-liner for kids:",
    "question": "To match two words, you can insert, delete, or replace.",
    "hint": "Take the fewest steps possible.",
    "oneLiner": "Try from the end back to the start.",
    "threeLiner": "\ud83e\udde0 Mnemonics:",
    "mnemonic": "\"Match? Skip\" \u2192 if word1[i] == word2[j]: dp[j] = nextDp",
    "code": "\"Else try all\" \u2192 dp[j] = 1 + min(dp[j], dp[j + 1], nextDp)"
  },
  {
    "title": "\"Track next\" \u2192 nextDp = temp",
    "difficulty": "10.)",
    "question": "class Solution:",
    "hint": "def maxCoins(self, nums):",
    "oneLiner": "n = len(nums)",
    "threeLiner": "new_nums = [1] + nums + [1]",
    "mnemonic": "dp = [[0] * (n + 2) for _ in range(n + 2)]",
    "code": "for l in range(n, 0, -1):"
  },
  {
    "title": "for r in range(l, n + 1):",
    "difficulty": "for i in range(l, r + 1):",
    "question": "coins = new_nums[l - 1] * new_nums[i] * new_nums[r + 1]",
    "hint": "coins += dp[l][i - 1] + dp[i + 1][r]",
    "oneLiner": "dp[l][r] = max(dp[l][r], coins)",
    "threeLiner": "return dp[1][n]",
    "mnemonic": "10. Burst Balloons",
    "code": "\u2705 One-liner:"
  },
  {
    "title": "Use interval DP to track max coins from bursting every balloon last in range.",
    "difficulty": "\ud83d\udc76 3-liner for kids:",
    "question": "Pop balloons for coins!",
    "hint": "Try each as the last in range.",
    "oneLiner": "Store the best coins for each section.",
    "threeLiner": "\ud83e\udde0 Mnemonics:",
    "mnemonic": "\"Add padding\" \u2192 new_nums = [1] + nums + [1]",
    "code": "\"Burst last in (l,r)\" \u2192 coins = L * i * R + dp[l][i-1] + dp[i+1][r]"
  },
  {
    "title": "\"Try all i\" \u2192 for i in range(l, r + 1):",
    "difficulty": "11.0",
    "question": "class Solution:",
    "hint": "def isMatch(self, s: str, p: str) -> bool:",
    "oneLiner": "dp = [False] * (len(p) + 1)",
    "threeLiner": "dp[len(p)] = True",
    "mnemonic": "for i in range(len(s), -1, -1):",
    "code": "dp1 = dp[len(p)]"
  },
  {
    "title": "dp[len(p)] = (i == len(s))",
    "difficulty": "for j in range(len(p) - 1, -1, -1):",
    "question": "match = i < len(s) and (s[i] == p[j] or p[j] == \".\")",
    "hint": "res = False",
    "oneLiner": "if (j + 1) < len(p) and p[j + 1] == \"*\":",
    "threeLiner": "res = dp[j + 2]",
    "mnemonic": "if match:",
    "code": "res |= dp[j]"
  },
  {
    "title": "elif match:",
    "difficulty": "res = dp1",
    "question": "dp[j], dp1 = res, dp[j]",
    "hint": "return dp[0]",
    "oneLiner": "11. Regular Expression Matching",
    "threeLiner": "\u2705 One-liner:",
    "mnemonic": "Match s and p with backtracking and support for . and *.",
    "code": "\ud83d\udc76 3-liner for kids:"
  },
  {
    "title": "Match characters step-by-step.",
    "difficulty": "If * shows up, skip or use it.",
    "question": "Use memory to speed up match!",
    "hint": "\ud83e\udde0 Mnemonics:",
    "oneLiner": "\"Check match\" \u2192 s[i] == p[j] or p[j] == '.'",
    "threeLiner": "\"Handle '*'\" \u2192 res = dp[j + 2] or (match and dp[j])",
    "mnemonic": "\"Update DP\" \u2192 dp[j], dp1 = res, dp[j]",
    "code": "Converted to HTML with WordToHTML.net|Email Signature Generator"
  }
];
export default dp2d;