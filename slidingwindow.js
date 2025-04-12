const slidingwindow = [
  {
    "title": "Here arethe optimized Python solutions using the**Sliding Window**techniquefor each problem, alongwith their timeand space complexity.---## **1. Best Timeto Buy and SellStock**### **Problem:**Given anarray where `prices[i]`is theprice of a givenstock onday `i`,find themaximumprofit.### **Optimized Approach:** Use asingle pass (two-pointer slidingwindow) to trackthe minimum priceand maximum profit.```pythondef maxProfit(prices: list[int]) -> int:min_price = float('inf')max_profit =0for price inprices:min_price= min(min_price,price)max_profit = max(max_profit, price -min_price)return max_profit```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(1)\\)1. Best Time to Buy and Sell Stock\u2705One-liner:Track theminimumprice sofar andcomputeprofitat eachstep.\ud83d\udc763-linerfor kids:We watchthe lowest pricewe\u2019ve seen.Then we check howmuch we\u2019d earn if we soldtoday.Weremember thebest profit we ever found.\ud83e\udde0Mnemonics:\"Track min\" \u2192 min_price =min(min_price, price)\"Check profit\" \u2192profit =price-min_price\"Update best\" \u2192 max_profit= max(max_profit, profit)---## **2. Longest SubstringWithoutRepeating Characters**### **Problem:**Find thelength of the longest substringwithoutrepeatingcharacters.### **Optimized Approach:** Use asliding windowwith a hash set.```pythondef lengthOfLongestSubstring(s: str) -> int:char_set = set()left= max_length = 0for right inrange(len(s)):while s[right] inchar_set:char_set.remove(s[left])left+= 1char_set.add(s[right])max_length = max(max_length, right -left + 1)return max_length```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(min(N, 26)) \\)(Limited to 26 lowercaseletters)2. Longest Substring Without Repeating Characters\u2705One-liner:Use a sliding window and aset/mapto trackcharacters.\ud83d\udc763-linerfor kids:We move across the string,addingeach newletter.If we seea repeat, we shrink thestart ofthe window.We keep track ofthe longest cleanstretch.\ud83e\udde0Mnemonics:\"Check char in map\" \u2192 if s[r] in seen: l =max(l, seen[s[r]]+ 1)\"Store index\" \u2192 seen[s[r]]= r\"Track max length\" \u2192 res =max(res, r- l + 1)---## **3. Longest RepeatingCharacter Replacement**### **Problem:**Find thelength of the longest substringwith atmost`k` character replacements.### **Optimized Approach:** Use asliding windowwith a frequencymap.```pythonfrom collectionsimport Counterdef characterReplacement(s: str, k: int) -> int:count= Counter()left= max_length = max_freq =0for right inrange(len(s)):count[s[right]] +=1max_freq= max(max_freq, count[s[right]])if (right- left + 1) - max_freq >k:count[s[left]]-= 1left+= 1max_length = max(max_length, right -left + 1)return max_length```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(26)\\) (Limited to 26 uppercase letters)3. Longest Repeating Character Replacement\u2705One-liner:Use sliding window; replace excesscharacters beyond themost frequentone.\ud83d\udc763-linerfor kids:We builda windowand count letters inside.We make sure we don\u2019t replace morethan k characters.If we do,we shrink the window.\ud83e\udde0Mnemonics:\"Track max freq\"\u2192 max_count = max(counts.values())\"Valid window?\" \u2192if (right- left+ 1) - max_count >k: shrink\"Update max\" \u2192 res = max(res, window length)---## **4. Permutation in String**### **Problem:**Given twostrings`s1` and`s2`,check if `s1`'spermutation is asubstringof `s2`.### **Optimized Approach:** Use asliding windowwith a frequencycounter.```pythonfrom collectionsimport Counterdef checkInclusion(s1: str, s2: str) -> bool:if len(s1) >len(s2):return Falses1_count = Counter(s1)s2_count = Counter(s2[:len(s1)])if s1_count == s2_count:return Trueleft= 0for right inrange(len(s1), len(s2)):s2_count[s2[right]] += 1s2_count[s2[left]]-= 1if s2_count[s2[left]] == 0:del s2_count[s2[left]]left += 1if s1_count == s2_count:return Truereturn False```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(26)\\) (Limited to 26 lowercase letters)4. Permutation inString\u2705One-liner:Use sliding window with frequencycountersand compare with target.\ud83d\udc763-linerfor kids:We countlettersin the small word.Then we move a window overthe bigword andcheck each groupof letters.If one window matches, wefound amatch!\ud83e\udde0Mnemonics:\"Build counters\"\u2192 Counter(s1) ==Counter(window)\"Slide window\" \u2192add s2[i], removes2[i- len(s1)]\"Comparecounters\" \u2192 if match: return True---## **5. Minimum Window Substring**### **Problem:**Given twostrings`s` and`t`, find theminimumsubstringof `s`that contains allcharacters of`t`.### **Optimized Approach:** Use asliding windowwith a frequencycounter.```pythonfrom collectionsimport Counterdef minWindow(s:str, t: str) -> str:if not t or not s:return \"\"t_count = Counter(t)window_count= Counter()left= right= formed= 0required = len(t_count)min_len = float(\"inf\")min_window =\"\"whileright <len(s):window_count[s[right]] +=1if window_count[s[right]]== t_count[s[right]]:formed += 1while formed == required:if right - left+ 1 <min_len:min_len =right -left + 1min_window= s[left:right+1]window_count[s[left]]-= 1if s[left] int_countand window_count[s[left]] <t_count[s[left]]:formed -= 1left+= 1right +=1return min_window```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(26)\\) (Limited to 26 characters)5. Minimum WindowSubstring\u2705One-liner:Use sliding window and hashmap toshrink window once allchars arematched.\ud83d\udc763-linerfor kids:We countthe letters we need.As we move forward, we check if wehave enough ofeach letter.Then we shrink the windowfrom theleft tofind the smallest one.\ud83e\udde0Mnemonics:\"Need map\" \u2192 need= Counter(t)\"Expand window\" \u2192window[s[r]] +=1\"Shrink if valid\"\u2192 whileformed == required: update res,move left---## **6. Sliding Window Maximum**### **Problem:**Given anarray `nums` anda window size`k`, return themaximum element in each window.### **Optimized Approach:** Use adeque tomaintain indices of maximumelements.```pythonfrom collectionsimport dequedef maxSlidingWindow(nums:list[int], k: int) -> list[int]:if not nums:return []deque_window= deque()result = []for iin range(len(nums)):#Removeelementsoutsidethe windowif deque_window and deque_window[0]< i - k +1:deque_window.popleft()#Remove smallerelements in krangewhile deque_windowand nums[deque_window[-1]]< nums[i]:deque_window.pop()deque_window.append(i)#Appendmax valueonce window sizeis reachedif i >= k-1:result.append(nums[deque_window[0]])return result```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(K)\\)6. Sliding WindowMaximum\u2705One-liner:Use a deque to keep trackof max values inthe current window.\ud83d\udc763-linerfor kids:We go through numbers witha window of sizek.We keep only thebiggest numbers inside thewindow.We throwout numbers thatare tooold or too small.\ud83e\udde0Mnemonics:\"Pop smaller\" \u2192 while q and nums[i] > nums[q[-1]]: q.pop()\"Pop out-of-window\" \u2192 ifq[0] <=i- k: q.popleft()\"Append max\" \u2192 ifi >= k- 1: res.append(nums[q[0]])",
    "difficulty": "Here arethe optimized Python solutions using the**Sliding Window**techniquefor each problem, alongwith their timeand space complexity.---## **1. Best Timeto Buy and SellStock**### **Problem:**Given anarray where `prices[i]`is theprice of a givenstock onday `i`,find themaximumprofit.### **Optimized Approach:** Use asingle pass (two-pointer slidingwindow) to trackthe minimum priceand maximum profit.```pythondef maxProfit(prices: list[int]) -> int:min_price = float('inf')max_profit =0for price inprices:min_price= min(min_price,price)max_profit = max(max_profit, price -min_price)return max_profit```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(1)\\)1. Best Time to Buy and Sell Stock\u2705One-liner:Track theminimumprice sofar andcomputeprofitat eachstep.\ud83d\udc763-linerfor kids:We watchthe lowest pricewe\u2019ve seen.Then we check howmuch we\u2019d earn if we soldtoday.Weremember thebest profit we ever found.\ud83e\udde0Mnemonics:\"Track min\" \u2192 min_price =min(min_price, price)\"Check profit\" \u2192profit =price-min_price\"Update best\" \u2192 max_profit= max(max_profit, profit)---## **2. Longest SubstringWithoutRepeating Characters**### **Problem:**Find thelength of the longest substringwithoutrepeatingcharacters.### **Optimized Approach:** Use asliding windowwith a hash set.```pythondef lengthOfLongestSubstring(s: str) -> int:char_set = set()",
    "question": "Here arethe optimized Python solutions using the**Sliding Window**techniquefor each problem, alongwith their timeand space complexity.---## **1. Best Timeto Buy and SellStock**### **Problem:**Given anarray where `prices[i]`is theprice of a givenstock onday `i`,find themaximumprofit.### **Optimized Approach:** Use asingle pass (two-pointer slidingwindow) to trackthe minimum priceand maximum profit.```pythondef maxProfit(prices: list[int]) -> int:min_price = float('inf')max_profit =0for price inprices:min_price= min(min_price,price)max_profit = max(max_profit, price -min_price)return max_profit```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(1)\\)1. Best Time to Buy and Sell Stock\u2705One-liner:Track theminimumprice sofar andcomputeprofitat eachstep.\ud83d\udc763-linerfor kids:We watchthe lowest pricewe\u2019ve seen.Then we check howmuch we\u2019d earn if we soldtoday.Weremember thebest profit we ever found.\ud83e\udde0Mnemonics:\"Track min\" \u2192 min_price =min(min_price, price)\"Check profit\" \u2192profit =price-min_price\"Update best\" \u2192 max_profit= max(max_profit, profit)---## **2. Longest SubstringWithoutRepeating Characters**### **Problem:**Find thelength of the longest substringwithoutrepeatingcharacters.### **Optimized Approach:** Use asliding windowwith a hash set.```pythondef lengthOfLongestSubstring(s: str) -> int:char_set = set()",
    "hint": "Here arethe optimized Python solutions using the**Sliding Window**techniquefor each problem, alongwith their timeand space complexity.---## **1. Best Timeto Buy and SellStock**### **Problem:**Given anarray where `prices[i]`is theprice of a givenstock onday `i`,find themaximumprofit.### **Optimized Approach:** Use asingle pass (two-pointer slidingwindow) to trackthe minimum priceand maximum profit.```pythondef maxProfit(prices: list[int]) -> int:min_price = float('inf')max_profit =0for price inprices:min_price= min(min_price,price)max_profit = max(max_profit, price -min_price)return max_profit```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(1)\\)1. Best Time to Buy and Sell Stock\u2705One-liner:Track theminimumprice sofar andcomputeprofitat eachstep.\ud83d\udc763-linerfor kids:We watchthe lowest pricewe\u2019ve seen.Then we check howmuch we\u2019d earn if we soldtoday.Weremember thebest profit we ever found.\ud83e\udde0Mnemonics:\"Track min\" \u2192 min_price =min(min_price, price)\"Check profit\" \u2192profit =price-min_price\"Update best\" \u2192 max_profit= max(max_profit, profit)---## **2. Longest SubstringWithoutRepeating Characters**### **Problem:**Find thelength of the longest substringwithoutrepeatingcharacters.### **Optimized Approach:** Use asliding windowwith a hash set.```pythondef lengthOfLongestSubstring(s: str) -> int:char_set = set()",
    "oneLiner": "Here arethe optimized Python solutions using the**Sliding Window**",
    "threeLiner": "techniquefor each problem, alongwith their timeand space complexity.",
    "mnemonic": "---",
    "code": "## **1. Best Timeto Buy and SellStock**"
  },
  {
    "title": "### **Problem:**Given anarray where `prices[i]`is theprice of a given",
    "difficulty": "stock onday `i`,find themaximumprofit.",
    "question": "### **Optimized Approach:** Use asingle pass (two-pointer sliding",
    "hint": "window) to trackthe minimum priceand maximum profit.",
    "oneLiner": "```python",
    "threeLiner": "def maxProfit(prices: list[int]) -> int:",
    "mnemonic": "min_price = float('inf')",
    "code": "max_profit =0"
  },
  {
    "title": "for price inprices:",
    "difficulty": "min_price= min(min_price,price)",
    "question": "max_profit = max(max_profit, price -min_price)",
    "hint": "return max_profit",
    "oneLiner": "```",
    "threeLiner": "### **Time Complexity:** \\(O(N) \\)",
    "mnemonic": "### **Space Complexity:** \\(O(1)\\)",
    "code": "1. Best Time to Buy and Sell Stock"
  },
  {
    "title": "\u2705One-liner:",
    "difficulty": "Track theminimumprice sofar andcomputeprofitat eachstep.",
    "question": "\ud83d\udc763-linerfor kids:",
    "hint": "We watchthe lowest pricewe\u2019ve seen.",
    "oneLiner": "Then we check howmuch we\u2019d earn if we soldtoday.",
    "threeLiner": "Weremember thebest profit we ever found.",
    "mnemonic": "\ud83e\udde0Mnemonics:",
    "code": "\"Track min\" \u2192 min_price =min(min_price, price)"
  },
  {
    "title": "\"Check profit\" \u2192profit =price-min_price",
    "difficulty": "\"Update best\" \u2192 max_profit= max(max_profit, profit)",
    "question": "---",
    "hint": "## **2. Longest SubstringWithoutRepeating Characters**",
    "oneLiner": "### **Problem:**Find thelength of the longest substringwithout",
    "threeLiner": "repeatingcharacters.",
    "mnemonic": "### **Optimized Approach:** Use asliding windowwith a hash set.",
    "code": "```python"
  },
  {
    "title": "def lengthOfLongestSubstring(s: str) -> int:",
    "difficulty": "char_set = set()",
    "question": "left= max_length = 0for right inrange(len(s)):while s[right] inchar_set:char_set.remove(s[left])left+= 1char_set.add(s[right])max_length = max(max_length, right -left + 1)return max_length```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(min(N, 26)) \\)(Limited to 26 lowercaseletters)2. Longest Substring Without Repeating Characters\u2705One-liner:Use a sliding window and aset/mapto trackcharacters.\ud83d\udc763-linerfor kids:We move across the string,addingeach newletter.If we seea repeat, we shrink thestart ofthe window.We keep track ofthe longest cleanstretch.\ud83e\udde0Mnemonics:\"Check char in map\" \u2192 if s[r] in seen: l =max(l, seen[s[r]]+ 1)\"Store index\" \u2192 seen[s[r]]= r\"Track max length\" \u2192 res =max(res, r- l + 1)---## **3. Longest RepeatingCharacter Replacement**### **Problem:**Find thelength of the longest substringwith atmost`k` character replacements.### **Optimized Approach:** Use asliding windowwith a frequencymap.```pythonfrom collectionsimport Counterdef characterReplacement(s: str, k: int) -> int:count= Counter()left= max_length = max_freq =0for right inrange(len(s)):count[s[right]] +=1max_freq= max(max_freq, count[s[right]])if (right- left + 1) - max_freq >k:count[s[left]]-= 1",
    "hint": "left= max_length = 0for right inrange(len(s)):while s[right] inchar_set:char_set.remove(s[left])left+= 1char_set.add(s[right])max_length = max(max_length, right -left + 1)return max_length```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(min(N, 26)) \\)(Limited to 26 lowercaseletters)2. Longest Substring Without Repeating Characters\u2705One-liner:Use a sliding window and aset/mapto trackcharacters.\ud83d\udc763-linerfor kids:We move across the string,addingeach newletter.If we seea repeat, we shrink thestart ofthe window.We keep track ofthe longest cleanstretch.\ud83e\udde0Mnemonics:\"Check char in map\" \u2192 if s[r] in seen: l =max(l, seen[s[r]]+ 1)\"Store index\" \u2192 seen[s[r]]= r\"Track max length\" \u2192 res =max(res, r- l + 1)---## **3. Longest RepeatingCharacter Replacement**### **Problem:**Find thelength of the longest substringwith atmost`k` character replacements.### **Optimized Approach:** Use asliding windowwith a frequencymap.```pythonfrom collectionsimport Counterdef characterReplacement(s: str, k: int) -> int:count= Counter()left= max_length = max_freq =0for right inrange(len(s)):count[s[right]] +=1max_freq= max(max_freq, count[s[right]])if (right- left + 1) - max_freq >k:count[s[left]]-= 1",
    "oneLiner": "left= max_length = 0for right inrange(len(s)):while s[right] inchar_set:char_set.remove(s[left])left+= 1char_set.add(s[right])max_length = max(max_length, right -left + 1)return max_length```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(min(N, 26)) \\)(Limited to 26 lowercaseletters)2. Longest Substring Without Repeating Characters\u2705One-liner:Use a sliding window and aset/mapto trackcharacters.\ud83d\udc763-linerfor kids:We move across the string,addingeach newletter.If we seea repeat, we shrink thestart ofthe window.We keep track ofthe longest cleanstretch.\ud83e\udde0Mnemonics:\"Check char in map\" \u2192 if s[r] in seen: l =max(l, seen[s[r]]+ 1)\"Store index\" \u2192 seen[s[r]]= r\"Track max length\" \u2192 res =max(res, r- l + 1)---## **3. Longest RepeatingCharacter Replacement**### **Problem:**Find thelength of the longest substringwith atmost`k` character replacements.### **Optimized Approach:** Use asliding windowwith a frequencymap.```pythonfrom collectionsimport Counterdef characterReplacement(s: str, k: int) -> int:count= Counter()left= max_length = max_freq =0for right inrange(len(s)):count[s[right]] +=1max_freq= max(max_freq, count[s[right]])if (right- left + 1) - max_freq >k:count[s[left]]-= 1",
    "threeLiner": "left= max_length = 0",
    "mnemonic": "for right inrange(len(s)):",
    "code": "while s[right] inchar_set:"
  },
  {
    "title": "char_set.remove(s[left])",
    "difficulty": "left+= 1",
    "question": "char_set.add(s[right])",
    "hint": "max_length = max(max_length, right -left + 1)",
    "oneLiner": "return max_length",
    "threeLiner": "```",
    "mnemonic": "### **Time Complexity:** \\(O(N) \\)",
    "code": "### **Space Complexity:** \\(O(min(N, 26)) \\)(Limited to 26 lowercase"
  },
  {
    "title": "letters)",
    "difficulty": "2. Longest Substring Without Repeating Characters",
    "question": "\u2705One-liner:",
    "hint": "Use a sliding window and aset/mapto trackcharacters.",
    "oneLiner": "\ud83d\udc763-linerfor kids:",
    "threeLiner": "We move across the string,addingeach newletter.",
    "mnemonic": "If we seea repeat, we shrink thestart ofthe window.",
    "code": "We keep track ofthe longest cleanstretch."
  },
  {
    "title": "\ud83e\udde0Mnemonics:",
    "difficulty": "\"Check char in map\" \u2192 if s[r] in seen: l =max(l, seen[s[r]]+ 1)",
    "question": "\"Store index\" \u2192 seen[s[r]]= r",
    "hint": "\"Track max length\" \u2192 res =max(res, r- l + 1)",
    "oneLiner": "---",
    "threeLiner": "## **3. Longest RepeatingCharacter Replacement**",
    "mnemonic": "### **Problem:**Find thelength of the longest substringwith atmost",
    "code": "`k` character replacements."
  },
  {
    "title": "### **Optimized Approach:** Use asliding windowwith a frequencymap.",
    "difficulty": "```python",
    "question": "from collectionsimport Counter",
    "hint": "def characterReplacement(s: str, k: int) -> int:",
    "oneLiner": "count= Counter()",
    "threeLiner": "left= max_length = max_freq =0",
    "mnemonic": "for right inrange(len(s)):",
    "code": "count[s[right]] +=1"
  },
  {
    "title": "max_freq= max(max_freq, count[s[right]])",
    "difficulty": "if (right- left + 1) - max_freq >k:",
    "question": "count[s[left]]-= 1",
    "hint": "left+= 1max_length = max(max_length, right -left + 1)return max_length```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(26)\\) (Limited to 26 uppercase letters)3. Longest Repeating Character Replacement\u2705One-liner:Use sliding window; replace excesscharacters beyond themost frequentone.\ud83d\udc763-linerfor kids:We builda windowand count letters inside.We make sure we don\u2019t replace morethan k characters.If we do,we shrink the window.\ud83e\udde0Mnemonics:\"Track max freq\"\u2192 max_count = max(counts.values())\"Valid window?\" \u2192if (right- left+ 1) - max_count >k: shrink\"Update max\" \u2192 res = max(res, window length)---## **4. Permutation in String**### **Problem:**Given twostrings`s1` and`s2`,check if `s1`'spermutation is asubstringof `s2`.### **Optimized Approach:** Use asliding windowwith a frequencycounter.```pythonfrom collectionsimport Counterdef checkInclusion(s1: str, s2: str) -> bool:if len(s1) >len(s2):return Falses1_count = Counter(s1)s2_count = Counter(s2[:len(s1)])if s1_count == s2_count:return Trueleft= 0for right inrange(len(s1), len(s2)):s2_count[s2[right]] += 1s2_count[s2[left]]-= 1if s2_count[s2[left]] == 0:",
    "oneLiner": "left+= 1max_length = max(max_length, right -left + 1)return max_length```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(26)\\) (Limited to 26 uppercase letters)3. Longest Repeating Character Replacement\u2705One-liner:Use sliding window; replace excesscharacters beyond themost frequentone.\ud83d\udc763-linerfor kids:We builda windowand count letters inside.We make sure we don\u2019t replace morethan k characters.If we do,we shrink the window.\ud83e\udde0Mnemonics:\"Track max freq\"\u2192 max_count = max(counts.values())\"Valid window?\" \u2192if (right- left+ 1) - max_count >k: shrink\"Update max\" \u2192 res = max(res, window length)---## **4. Permutation in String**### **Problem:**Given twostrings`s1` and`s2`,check if `s1`'spermutation is asubstringof `s2`.### **Optimized Approach:** Use asliding windowwith a frequencycounter.```pythonfrom collectionsimport Counterdef checkInclusion(s1: str, s2: str) -> bool:if len(s1) >len(s2):return Falses1_count = Counter(s1)s2_count = Counter(s2[:len(s1)])if s1_count == s2_count:return Trueleft= 0for right inrange(len(s1), len(s2)):s2_count[s2[right]] += 1s2_count[s2[left]]-= 1if s2_count[s2[left]] == 0:",
    "threeLiner": "left+= 1max_length = max(max_length, right -left + 1)return max_length```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(26)\\) (Limited to 26 uppercase letters)3. Longest Repeating Character Replacement\u2705One-liner:Use sliding window; replace excesscharacters beyond themost frequentone.\ud83d\udc763-linerfor kids:We builda windowand count letters inside.We make sure we don\u2019t replace morethan k characters.If we do,we shrink the window.\ud83e\udde0Mnemonics:\"Track max freq\"\u2192 max_count = max(counts.values())\"Valid window?\" \u2192if (right- left+ 1) - max_count >k: shrink\"Update max\" \u2192 res = max(res, window length)---## **4. Permutation in String**### **Problem:**Given twostrings`s1` and`s2`,check if `s1`'spermutation is asubstringof `s2`.### **Optimized Approach:** Use asliding windowwith a frequencycounter.```pythonfrom collectionsimport Counterdef checkInclusion(s1: str, s2: str) -> bool:if len(s1) >len(s2):return Falses1_count = Counter(s1)s2_count = Counter(s2[:len(s1)])if s1_count == s2_count:return Trueleft= 0for right inrange(len(s1), len(s2)):s2_count[s2[right]] += 1s2_count[s2[left]]-= 1if s2_count[s2[left]] == 0:",
    "mnemonic": "left+= 1",
    "code": "max_length = max(max_length, right -left + 1)"
  },
  {
    "title": "return max_length",
    "difficulty": "```",
    "question": "### **Time Complexity:** \\(O(N) \\)",
    "hint": "### **Space Complexity:** \\(O(26)\\) (Limited to 26 uppercase letters)",
    "oneLiner": "3. Longest Repeating Character Replacement",
    "threeLiner": "\u2705One-liner:",
    "mnemonic": "Use sliding window; replace excesscharacters beyond themost frequent",
    "code": "one."
  },
  {
    "title": "\ud83d\udc763-linerfor kids:",
    "difficulty": "We builda windowand count letters inside.",
    "question": "We make sure we don\u2019t replace morethan k characters.",
    "hint": "If we do,we shrink the window.",
    "oneLiner": "\ud83e\udde0Mnemonics:",
    "threeLiner": "\"Track max freq\"\u2192 max_count = max(counts.values())",
    "mnemonic": "\"Valid window?\" \u2192if (right- left+ 1) - max_count >k: shrink",
    "code": "\"Update max\" \u2192 res = max(res, window length)"
  },
  {
    "title": "---",
    "difficulty": "## **4. Permutation in String**",
    "question": "### **Problem:**Given twostrings`s1` and`s2`,check if `s1`'s",
    "hint": "permutation is asubstringof `s2`.",
    "oneLiner": "### **Optimized Approach:** Use asliding windowwith a frequency",
    "threeLiner": "counter.",
    "mnemonic": "```python",
    "code": "from collectionsimport Counter"
  },
  {
    "title": "def checkInclusion(s1: str, s2: str) -> bool:",
    "difficulty": "if len(s1) >len(s2):",
    "question": "return False",
    "hint": "s1_count = Counter(s1)",
    "oneLiner": "s2_count = Counter(s2[:len(s1)])",
    "threeLiner": "if s1_count == s2_count:",
    "mnemonic": "return True",
    "code": "left= 0"
  },
  {
    "title": "for right inrange(len(s1), len(s2)):",
    "difficulty": "s2_count[s2[right]] += 1",
    "question": "s2_count[s2[left]]-= 1",
    "hint": "if s2_count[s2[left]] == 0:",
    "oneLiner": "del s2_count[s2[left]]left += 1if s1_count == s2_count:return Truereturn False```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(26)\\) (Limited to 26 lowercase letters)4. Permutation inString\u2705One-liner:Use sliding window with frequencycountersand compare with target.\ud83d\udc763-linerfor kids:We countlettersin the small word.Then we move a window overthe bigword andcheck each groupof letters.If one window matches, wefound amatch!\ud83e\udde0Mnemonics:\"Build counters\"\u2192 Counter(s1) ==Counter(window)\"Slide window\" \u2192add s2[i], removes2[i- len(s1)]\"Comparecounters\" \u2192 if match: return True---## **5. Minimum Window Substring**### **Problem:**Given twostrings`s` and`t`, find theminimumsubstringof `s`that contains allcharacters of`t`.### **Optimized Approach:** Use asliding windowwith a frequencycounter.```pythonfrom collectionsimport Counterdef minWindow(s:str, t: str) -> str:if not t or not s:return \"\"t_count = Counter(t)window_count= Counter()left= right= formed= 0required = len(t_count)min_len = float(\"inf\")min_window =\"\"whileright <len(s):window_count[s[right]] +=1",
    "threeLiner": "del s2_count[s2[left]]left += 1if s1_count == s2_count:return Truereturn False```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(26)\\) (Limited to 26 lowercase letters)4. Permutation inString\u2705One-liner:Use sliding window with frequencycountersand compare with target.\ud83d\udc763-linerfor kids:We countlettersin the small word.Then we move a window overthe bigword andcheck each groupof letters.If one window matches, wefound amatch!\ud83e\udde0Mnemonics:\"Build counters\"\u2192 Counter(s1) ==Counter(window)\"Slide window\" \u2192add s2[i], removes2[i- len(s1)]\"Comparecounters\" \u2192 if match: return True---## **5. Minimum Window Substring**### **Problem:**Given twostrings`s` and`t`, find theminimumsubstringof `s`that contains allcharacters of`t`.### **Optimized Approach:** Use asliding windowwith a frequencycounter.```pythonfrom collectionsimport Counterdef minWindow(s:str, t: str) -> str:if not t or not s:return \"\"t_count = Counter(t)window_count= Counter()left= right= formed= 0required = len(t_count)min_len = float(\"inf\")min_window =\"\"whileright <len(s):window_count[s[right]] +=1",
    "mnemonic": "del s2_count[s2[left]]left += 1if s1_count == s2_count:return Truereturn False```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(26)\\) (Limited to 26 lowercase letters)4. Permutation inString\u2705One-liner:Use sliding window with frequencycountersand compare with target.\ud83d\udc763-linerfor kids:We countlettersin the small word.Then we move a window overthe bigword andcheck each groupof letters.If one window matches, wefound amatch!\ud83e\udde0Mnemonics:\"Build counters\"\u2192 Counter(s1) ==Counter(window)\"Slide window\" \u2192add s2[i], removes2[i- len(s1)]\"Comparecounters\" \u2192 if match: return True---## **5. Minimum Window Substring**### **Problem:**Given twostrings`s` and`t`, find theminimumsubstringof `s`that contains allcharacters of`t`.### **Optimized Approach:** Use asliding windowwith a frequencycounter.```pythonfrom collectionsimport Counterdef minWindow(s:str, t: str) -> str:if not t or not s:return \"\"t_count = Counter(t)window_count= Counter()left= right= formed= 0required = len(t_count)min_len = float(\"inf\")min_window =\"\"whileright <len(s):window_count[s[right]] +=1",
    "code": "del s2_count[s2[left]]"
  },
  {
    "title": "left += 1",
    "difficulty": "if s1_count == s2_count:",
    "question": "return True",
    "hint": "return False",
    "oneLiner": "```",
    "threeLiner": "### **Time Complexity:** \\(O(N) \\)",
    "mnemonic": "### **Space Complexity:** \\(O(26)\\) (Limited to 26 lowercase letters)",
    "code": "4. Permutation inString"
  },
  {
    "title": "\u2705One-liner:",
    "difficulty": "Use sliding window with frequencycountersand compare with target.",
    "question": "\ud83d\udc763-linerfor kids:",
    "hint": "We countlettersin the small word.",
    "oneLiner": "Then we move a window overthe bigword andcheck each groupof letters.",
    "threeLiner": "If one window matches, wefound amatch!",
    "mnemonic": "\ud83e\udde0Mnemonics:",
    "code": "\"Build counters\"\u2192 Counter(s1) ==Counter(window)"
  },
  {
    "title": "\"Slide window\" \u2192add s2[i], removes2[i- len(s1)]",
    "difficulty": "\"Comparecounters\" \u2192 if match: return True",
    "question": "---",
    "hint": "## **5. Minimum Window Substring**",
    "oneLiner": "### **Problem:**Given twostrings`s` and`t`, find theminimum",
    "threeLiner": "substringof `s`that contains allcharacters of`t`.",
    "mnemonic": "### **Optimized Approach:** Use asliding windowwith a frequency",
    "code": "counter."
  },
  {
    "title": "```python",
    "difficulty": "from collectionsimport Counter",
    "question": "def minWindow(s:str, t: str) -> str:",
    "hint": "if not t or not s:",
    "oneLiner": "return \"\"",
    "threeLiner": "t_count = Counter(t)",
    "mnemonic": "window_count= Counter()",
    "code": "left= right= formed= 0"
  },
  {
    "title": "required = len(t_count)",
    "difficulty": "min_len = float(\"inf\")",
    "question": "min_window =\"\"",
    "hint": "whileright <len(s):",
    "oneLiner": "window_count[s[right]] +=1",
    "threeLiner": "if window_count[s[right]]== t_count[s[right]]:formed += 1while formed == required:if right - left+ 1 <min_len:min_len =right -left + 1min_window= s[left:right+1]window_count[s[left]]-= 1if s[left] int_countand window_count[s[left]] <t_count[s[left]]:formed -= 1left+= 1right +=1return min_window```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(26)\\) (Limited to 26 characters)5. Minimum WindowSubstring\u2705One-liner:Use sliding window and hashmap toshrink window once allchars arematched.\ud83d\udc763-linerfor kids:We countthe letters we need.As we move forward, we check if wehave enough ofeach letter.Then we shrink the windowfrom theleft tofind the smallest one.\ud83e\udde0Mnemonics:\"Need map\" \u2192 need= Counter(t)\"Expand window\" \u2192window[s[r]] +=1\"Shrink if valid\"\u2192 whileformed == required: update res,move left---## **6. Sliding Window Maximum**### **Problem:**Given anarray `nums` anda window size`k`, return themaximum element in each window.### **Optimized Approach:** Use adeque tomaintain indices of maximumelements.```pythonfrom collectionsimport dequedef maxSlidingWindow(nums:list[int], k: int) -> list[int]:",
    "mnemonic": "if window_count[s[right]]== t_count[s[right]]:formed += 1while formed == required:if right - left+ 1 <min_len:min_len =right -left + 1min_window= s[left:right+1]window_count[s[left]]-= 1if s[left] int_countand window_count[s[left]] <t_count[s[left]]:formed -= 1left+= 1right +=1return min_window```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(26)\\) (Limited to 26 characters)5. Minimum WindowSubstring\u2705One-liner:Use sliding window and hashmap toshrink window once allchars arematched.\ud83d\udc763-linerfor kids:We countthe letters we need.As we move forward, we check if wehave enough ofeach letter.Then we shrink the windowfrom theleft tofind the smallest one.\ud83e\udde0Mnemonics:\"Need map\" \u2192 need= Counter(t)\"Expand window\" \u2192window[s[r]] +=1\"Shrink if valid\"\u2192 whileformed == required: update res,move left---## **6. Sliding Window Maximum**### **Problem:**Given anarray `nums` anda window size`k`, return themaximum element in each window.### **Optimized Approach:** Use adeque tomaintain indices of maximumelements.```pythonfrom collectionsimport dequedef maxSlidingWindow(nums:list[int], k: int) -> list[int]:",
    "code": "if window_count[s[right]]== t_count[s[right]]:formed += 1while formed == required:if right - left+ 1 <min_len:min_len =right -left + 1min_window= s[left:right+1]window_count[s[left]]-= 1if s[left] int_countand window_count[s[left]] <t_count[s[left]]:formed -= 1left+= 1right +=1return min_window```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(26)\\) (Limited to 26 characters)5. Minimum WindowSubstring\u2705One-liner:Use sliding window and hashmap toshrink window once allchars arematched.\ud83d\udc763-linerfor kids:We countthe letters we need.As we move forward, we check if wehave enough ofeach letter.Then we shrink the windowfrom theleft tofind the smallest one.\ud83e\udde0Mnemonics:\"Need map\" \u2192 need= Counter(t)\"Expand window\" \u2192window[s[r]] +=1\"Shrink if valid\"\u2192 whileformed == required: update res,move left---## **6. Sliding Window Maximum**### **Problem:**Given anarray `nums` anda window size`k`, return themaximum element in each window.### **Optimized Approach:** Use adeque tomaintain indices of maximumelements.```pythonfrom collectionsimport dequedef maxSlidingWindow(nums:list[int], k: int) -> list[int]:"
  },
  {
    "title": "if window_count[s[right]]== t_count[s[right]]:",
    "difficulty": "formed += 1",
    "question": "while formed == required:",
    "hint": "if right - left+ 1 <min_len:",
    "oneLiner": "min_len =right -left + 1",
    "threeLiner": "min_window= s[left:right+1]",
    "mnemonic": "window_count[s[left]]-= 1",
    "code": "if s[left] int_countand window_count[s[left]] <"
  },
  {
    "title": "t_count[s[left]]:",
    "difficulty": "formed -= 1",
    "question": "left+= 1",
    "hint": "right +=1",
    "oneLiner": "return min_window",
    "threeLiner": "```",
    "mnemonic": "### **Time Complexity:** \\(O(N) \\)",
    "code": "### **Space Complexity:** \\(O(26)\\) (Limited to 26 characters)"
  },
  {
    "title": "5. Minimum WindowSubstring",
    "difficulty": "\u2705One-liner:",
    "question": "Use sliding window and hashmap toshrink window once allchars are",
    "hint": "matched.",
    "oneLiner": "\ud83d\udc763-linerfor kids:",
    "threeLiner": "We countthe letters we need.",
    "mnemonic": "As we move forward, we check if wehave enough ofeach letter.",
    "code": "Then we shrink the windowfrom theleft tofind the smallest one."
  },
  {
    "title": "\ud83e\udde0Mnemonics:",
    "difficulty": "\"Need map\" \u2192 need= Counter(t)",
    "question": "\"Expand window\" \u2192window[s[r]] +=1",
    "hint": "\"Shrink if valid\"\u2192 whileformed == required: update res,move left",
    "oneLiner": "---",
    "threeLiner": "## **6. Sliding Window Maximum**",
    "mnemonic": "### **Problem:**Given anarray `nums` anda window size`k`, return the",
    "code": "maximum element in each window."
  },
  {
    "title": "### **Optimized Approach:** Use adeque tomaintain indices of maximum",
    "difficulty": "elements.",
    "question": "```python",
    "hint": "from collectionsimport deque",
    "oneLiner": "def maxSlidingWindow(nums:list[int], k: int) -> list[int]:",
    "threeLiner": "if not nums:return []deque_window= deque()result = []for iin range(len(nums)):#Removeelementsoutsidethe windowif deque_window and deque_window[0]< i - k +1:deque_window.popleft()#Remove smallerelements in krangewhile deque_windowand nums[deque_window[-1]]< nums[i]:deque_window.pop()deque_window.append(i)#Appendmax valueonce window sizeis reachedif i >= k-1:result.append(nums[deque_window[0]])return result```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(K)\\)6. Sliding WindowMaximum\u2705One-liner:Use a deque to keep trackof max values inthe current window.\ud83d\udc763-linerfor kids:We go through numbers witha window of sizek.We keep only thebiggest numbers inside thewindow.We throwout numbers thatare tooold or too small.\ud83e\udde0Mnemonics:\"Pop smaller\" \u2192 while q and nums[i] > nums[q[-1]]: q.pop()\"Pop out-of-window\" \u2192 ifq[0] <=i- k: q.popleft()\"Append max\" \u2192 ifi >= k- 1: res.append(nums[q[0]])",
    "mnemonic": "if not nums:return []deque_window= deque()result = []for iin range(len(nums)):#Removeelementsoutsidethe windowif deque_window and deque_window[0]< i - k +1:deque_window.popleft()#Remove smallerelements in krangewhile deque_windowand nums[deque_window[-1]]< nums[i]:deque_window.pop()deque_window.append(i)#Appendmax valueonce window sizeis reachedif i >= k-1:result.append(nums[deque_window[0]])return result```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(K)\\)6. Sliding WindowMaximum\u2705One-liner:Use a deque to keep trackof max values inthe current window.\ud83d\udc763-linerfor kids:We go through numbers witha window of sizek.We keep only thebiggest numbers inside thewindow.We throwout numbers thatare tooold or too small.\ud83e\udde0Mnemonics:\"Pop smaller\" \u2192 while q and nums[i] > nums[q[-1]]: q.pop()\"Pop out-of-window\" \u2192 ifq[0] <=i- k: q.popleft()\"Append max\" \u2192 ifi >= k- 1: res.append(nums[q[0]])",
    "code": "if not nums:return []deque_window= deque()result = []for iin range(len(nums)):#Removeelementsoutsidethe windowif deque_window and deque_window[0]< i - k +1:deque_window.popleft()#Remove smallerelements in krangewhile deque_windowand nums[deque_window[-1]]< nums[i]:deque_window.pop()deque_window.append(i)#Appendmax valueonce window sizeis reachedif i >= k-1:result.append(nums[deque_window[0]])return result```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(K)\\)6. Sliding WindowMaximum\u2705One-liner:Use a deque to keep trackof max values inthe current window.\ud83d\udc763-linerfor kids:We go through numbers witha window of sizek.We keep only thebiggest numbers inside thewindow.We throwout numbers thatare tooold or too small.\ud83e\udde0Mnemonics:\"Pop smaller\" \u2192 while q and nums[i] > nums[q[-1]]: q.pop()\"Pop out-of-window\" \u2192 ifq[0] <=i- k: q.popleft()\"Append max\" \u2192 ifi >= k- 1: res.append(nums[q[0]])"
  },
  {
    "title": "if not nums:",
    "difficulty": "return []",
    "question": "deque_window= deque()",
    "hint": "result = []",
    "oneLiner": "for iin range(len(nums)):",
    "threeLiner": "#Removeelementsoutsidethe window",
    "mnemonic": "if deque_window and deque_window[0]< i - k +1:",
    "code": "deque_window.popleft()"
  },
  {
    "title": "#Remove smallerelements in krange",
    "difficulty": "while deque_windowand nums[deque_window[-1]]< nums[i]:",
    "question": "deque_window.pop()",
    "hint": "deque_window.append(i)",
    "oneLiner": "#Appendmax valueonce window sizeis reached",
    "threeLiner": "if i >= k-1:",
    "mnemonic": "result.append(nums[deque_window[0]])",
    "code": "return result"
  },
  {
    "title": "```",
    "difficulty": "### **Time Complexity:** \\(O(N) \\)",
    "question": "### **Space Complexity:** \\(O(K)\\)",
    "hint": "6. Sliding WindowMaximum",
    "oneLiner": "\u2705One-liner:",
    "threeLiner": "Use a deque to keep trackof max values inthe current window.",
    "mnemonic": "\ud83d\udc763-linerfor kids:",
    "code": "We go through numbers witha window of sizek."
  }
];
export default slidingwindow;