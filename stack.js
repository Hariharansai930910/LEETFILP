const stack = [
  {
    "title": "Here arethe optimized Python solutions using the**Stack** technique foreach problem, along with their time and space complexity.---## **1. Valid Parentheses**### **Problem:**Given a string containingonly `()[]{}`,determine if itis valid.### **Optimized Approach:** Use astack tokeep track ofopeningbrackets.When encountering a closing bracket, check if it matchesthetop of the stack.```pythondef isValid(s: str) -> bool:stack= []mapping = {')': '(', '}': '{',']': '['}for char in s:if char in mapping:top =stack.pop() if stack else'#'if mapping[char] != top:return Falseelse:stack.append(char)return not stack```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(N)\\)1. ValidParentheses\u2705One-liner:Use a stack to match everyclosingbracketwith the latest openingone.\ud83d\udc763-linerfor kids:Open brackets gointo a bag.If you see a closer, matchit withthe lastopener.If the bag is empty at theend, it\u2019s valid!\ud83e\udde0Mnemonics:\"Push opener\" \u2192 stack.append(char)\"Pop andmatch\" \u2192top = stack.pop() if stack else'#'\"Check match\" \u2192 if mapping[char] != top: return False---## **2. Min Stack**### **Problem:**Implementa stackthat supportspush, pop, top, andretrieving the minimum element inconstanttime.### **Optimized Approach:** Maintain an auxiliarystack to keep track ofthe minimum values.```pythonclass MinStack:def __init__(self):self.stack = []self.min_stack = []def push(self, val: int) -> None:self.stack.append(val)if not self.min_stack or val <= self.min_stack[-1]:self.min_stack.append(val)def pop(self)-> None:if self.stack.pop() == self.min_stack[-1]:self.min_stack.pop()def top(self)-> int:return self.stack[-1]def getMin(self) -> int:return self.min_stack[-1]```### **Time Complexity:** \\(O(1) \\) for alloperations### **Space Complexity:** \\(O(N)\\)2. Min Stack\u2705One-liner:Keep a second stack that always holds the currentminimum.\ud83d\udc763-linerfor kids:One stackis forreal items.Anotherstack is for thesmallest so far.Peek thesmall stack to get the min anytime!\ud83e\udde0Mnemonics:\"Push min\" \u2192 if not min_stack or val <= min_stack[-1]:min_stack.append(val)\"Pop mintoo\" \u2192 if popped== min_stack[-1]: min_stack.pop()\"Get min\"\u2192return min_stack[-1]---## **3. EvaluateReverse Polish Notation**### **Problem:**Evaluatean arithmetic expression in Reverse PolishNotation.### **Optimized Approach:** Use astack toprocess the numbers andoperators.```pythondef evalRPN(tokens: list[str]) ->int:stack= []for token intokens:if tokenin {'+','-', '*', '/'}:b, a= stack.pop(), stack.pop()if token == '+':stack.append(a + b)eliftoken =='-':stack.append(a -b)eliftoken =='*':stack.append(a * b)eliftoken =='/':stack.append(int(a/ b))  #Ensuretruncation towardszeroelse:stack.append(int(token))return stack[0]```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(N)\\)3. Evaluate Reverse PolishNotation\u2705One-liner:Use a stack to apply operators topreviousnumbers.\ud83d\udc763-linerfor kids:Read numbers andput themin a stack.When yousee a symbol, domath onthe top two numbers.Put the result back and keep going!\ud83e\udde0Mnemonics:\"Pop two,compute\" \u2192 a = stack.pop(); b = stack.pop()\"Divide carefully\" \u2192 stack.append(int(a / b))\"Push number\" \u2192 stack.append(int(token))---## **4. GenerateParentheses**### **Problem:**Generateall valid combinationsof `n` pairs ofparentheses.### **Optimized Approach:** Use astack andbacktracking.```pythondef generateParenthesis(n: int) ->list[str]:res =[]def backtrack(s, left,right):if len(s)== 2 * n:res.append(s)returnif left <n:backtrack(s +\"(\", left + 1, right)if right< left:backtrack(s +\")\", left, right+ 1)backtrack(\"\",0, 0)return res```### **Time Complexity:** \\(O(4^n/ \\sqrt{n})\\)### **Space Complexity:** \\(O(N)\\)4. Generate Parentheses\u2705One-liner:Use backtrackingwith openand close counters to build validcombinations.\ud83d\udc763-linerfor kids:You can only close if you\u2019ve opened one.Keep adding ( or) if it\u2019sallowed.Add to the list when it\u2019sfull andbalanced!\ud83e\udde0Mnemonics:\"Base case full\"\u2192 if len(s)== 2* n: res.append(s)\"Try opening\" \u2192 if left <n: backtrack(s +\"(\", ...)\"Try closing\" \u2192 if right <left: backtrack(s + \")\", ...)---## **5. Daily Temperatures**### **Problem:**Given anarray oftemperatures,return an array where`ans[i]`is the number ofdays until a warmer temperature.### **Optimized Approach:** Use amonotonicdecreasing stack to storeindices.```pythondef dailyTemperatures(temperatures: list[int]) -> list[int]:stack= []res =[0] * len(temperatures)for i, temp in enumerate(temperatures):while stack and temperatures[stack[-1]] < temp:idx =stack.pop()res[idx] = i - idxstack.append(i)return res```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(N)\\)5. DailyTemperatures\u2705One-liner:Use a monotonic stack to find thenext warmer day.\ud83d\udc763-linerfor kids:Keep daysin a stack untila warmer one shows up.Then popand markhow longthey waited.Repeat until allare checked.\ud83e\udde0Mnemonics:\"Pop whenwarmer\"\u2192 whilestack and temperatures[stack[-1]] <temp:\"Set waitdays\" \u2192res[idx]= i- idx\"Track index\" \u2192 stack.append(i)---## **6. Car Fleet**### **Problem:**Given `position`and `speed` arrays of cars, returnthenumber offleetsthat arrive at the destination.### **Optimized Approach:** Sort cars by positionin descending order anduse a stack to track fleets.```pythondef carFleet(target: int,position: list[int], speed:list[int]) -> int:cars= sorted(zip(position, speed), reverse=True)stack= []for pos, spdin cars:time = (target - pos) / spdif not stack or time > stack[-1]:stack.append(time)return len(stack)```### **Time Complexity:** \\(O(N \\log N) \\)### **Space Complexity:** \\(O(N)\\)6. Car Fleet\u2705One-liner:Sort carsby position anduse a stack to track merging fleets.\ud83d\udc763-linerfor kids:Sort carsfrom back to front.See how long eachtakes toreach the end.If one catches another, they become a team!\ud83e\udde0Mnemonics:\"Sort byposition\" \u2192 cars= sorted(zip(position,speed),reverse=True)\"Calc time to end\" \u2192 time= (target- pos)/ spd\"Stack only new fleets\" \u2192 ifnot stack or time > stack[-1]:stack.append(time)---## **7. Largest Rectanglein Histogram**### **Problem:**Find thelargestrectangular area in a histogram.### **Optimized Approach:** Use amonotonicincreasing stack to trackheights.```pythondef largestRectangleArea(heights:list[int]) -> int:stack= []max_area = 0heights.append(0)  # Sentinelvaluefor i, h in enumerate(heights):while stack and heights[stack[-1]] >h:height = heights[stack.pop()]width= i if not stackelse i - stack[-1]- 1max_area = max(max_area, height* width)stack.append(i)return max_area```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(N)\\)7. Largest Rectangle in Histogram\u2705One-liner:Use a monotonic stack to compute max area rectangle at each drop.\ud83d\udc763-linerfor kids:Go bar bybar, stack up when taller.If a lower one comes, popand measure.Always track thebiggest area!\ud83e\udde0Mnemonics:\"Push height index\" \u2192 stack.append(i)\"Pop andcalc area\" \u2192 width = i ifnot stack elsei- stack[-1] - 1\"Update max area\"\u2192 max_area = max(max_area, height * width)",
    "difficulty": "Here arethe optimized Python solutions using the**Stack** technique foreach problem, along with their time and space complexity.---## **1. Valid Parentheses**### **Problem:**Given a string containingonly `()[]{}`,determine if itis valid.### **Optimized Approach:** Use astack tokeep track ofopeningbrackets.When encountering a closing bracket, check if it matchesthetop of the stack.```pythondef isValid(s: str) -> bool:stack= []mapping = {')': '(', '}': '{',']': '['}for char in s:if char in mapping:top =stack.pop() if stack else'#'if mapping[char] != top:return Falseelse:stack.append(char)return not stack```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(N)\\)1. ValidParentheses\u2705One-liner:Use a stack to match everyclosingbracketwith the latest openingone.\ud83d\udc763-linerfor kids:Open brackets gointo a bag.If you see a closer, matchit withthe lastopener.If the bag is empty at theend, it\u2019s valid!\ud83e\udde0Mnemonics:\"Push opener\" \u2192 stack.append(char)\"Pop andmatch\" \u2192top = stack.pop() if stack else'#'\"Check match\" \u2192 if mapping[char] != top: return False---## **2. Min Stack**### **Problem:**Implementa stackthat supportspush, pop, top, andretrieving the minimum element inconstanttime.",
    "question": "Here arethe optimized Python solutions using the**Stack** technique foreach problem, along with their time and space complexity.---## **1. Valid Parentheses**### **Problem:**Given a string containingonly `()[]{}`,determine if itis valid.### **Optimized Approach:** Use astack tokeep track ofopeningbrackets.When encountering a closing bracket, check if it matchesthetop of the stack.```pythondef isValid(s: str) -> bool:stack= []mapping = {')': '(', '}': '{',']': '['}for char in s:if char in mapping:top =stack.pop() if stack else'#'if mapping[char] != top:return Falseelse:stack.append(char)return not stack```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(N)\\)1. ValidParentheses\u2705One-liner:Use a stack to match everyclosingbracketwith the latest openingone.\ud83d\udc763-linerfor kids:Open brackets gointo a bag.If you see a closer, matchit withthe lastopener.If the bag is empty at theend, it\u2019s valid!\ud83e\udde0Mnemonics:\"Push opener\" \u2192 stack.append(char)\"Pop andmatch\" \u2192top = stack.pop() if stack else'#'\"Check match\" \u2192 if mapping[char] != top: return False---## **2. Min Stack**### **Problem:**Implementa stackthat supportspush, pop, top, andretrieving the minimum element inconstanttime.",
    "hint": "Here arethe optimized Python solutions using the**Stack** technique foreach problem, along with their time and space complexity.---## **1. Valid Parentheses**### **Problem:**Given a string containingonly `()[]{}`,determine if itis valid.### **Optimized Approach:** Use astack tokeep track ofopeningbrackets.When encountering a closing bracket, check if it matchesthetop of the stack.```pythondef isValid(s: str) -> bool:stack= []mapping = {')': '(', '}': '{',']': '['}for char in s:if char in mapping:top =stack.pop() if stack else'#'if mapping[char] != top:return Falseelse:stack.append(char)return not stack```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(N)\\)1. ValidParentheses\u2705One-liner:Use a stack to match everyclosingbracketwith the latest openingone.\ud83d\udc763-linerfor kids:Open brackets gointo a bag.If you see a closer, matchit withthe lastopener.If the bag is empty at theend, it\u2019s valid!\ud83e\udde0Mnemonics:\"Push opener\" \u2192 stack.append(char)\"Pop andmatch\" \u2192top = stack.pop() if stack else'#'\"Check match\" \u2192 if mapping[char] != top: return False---## **2. Min Stack**### **Problem:**Implementa stackthat supportspush, pop, top, andretrieving the minimum element inconstanttime.",
    "oneLiner": "Here arethe optimized Python solutions using the**Stack** technique for",
    "threeLiner": "each problem, along with their time and space complexity.",
    "mnemonic": "---",
    "code": "## **1. Valid Parentheses**"
  },
  {
    "title": "### **Problem:**Given a string containingonly `()[]{}`,determine if it",
    "difficulty": "is valid.",
    "question": "### **Optimized Approach:** Use astack tokeep track ofopening",
    "hint": "brackets.When encountering a closing bracket, check if it matchesthe",
    "oneLiner": "top of the stack.",
    "threeLiner": "```python",
    "mnemonic": "def isValid(s: str) -> bool:",
    "code": "stack= []"
  },
  {
    "title": "mapping = {')': '(', '}': '{',']': '['}",
    "difficulty": "for char in s:",
    "question": "if char in mapping:",
    "hint": "top =stack.pop() if stack else'#'",
    "oneLiner": "if mapping[char] != top:",
    "threeLiner": "return False",
    "mnemonic": "else:",
    "code": "stack.append(char)"
  },
  {
    "title": "return not stack",
    "difficulty": "```",
    "question": "### **Time Complexity:** \\(O(N) \\)",
    "hint": "### **Space Complexity:** \\(O(N)\\)",
    "oneLiner": "1. ValidParentheses",
    "threeLiner": "\u2705One-liner:",
    "mnemonic": "Use a stack to match everyclosingbracketwith the latest openingone.",
    "code": "\ud83d\udc763-linerfor kids:"
  },
  {
    "title": "Open brackets gointo a bag.",
    "difficulty": "If you see a closer, matchit withthe lastopener.",
    "question": "If the bag is empty at theend, it\u2019s valid!",
    "hint": "\ud83e\udde0Mnemonics:",
    "oneLiner": "\"Push opener\" \u2192 stack.append(char)",
    "threeLiner": "\"Pop andmatch\" \u2192top = stack.pop() if stack else'#'",
    "mnemonic": "\"Check match\" \u2192 if mapping[char] != top: return False",
    "code": "---"
  },
  {
    "title": "## **2. Min Stack**",
    "difficulty": "### **Problem:**Implementa stackthat supportspush, pop, top, and",
    "question": "retrieving the minimum element inconstanttime.",
    "hint": "### **Optimized Approach:** Maintain an auxiliarystack to keep track ofthe minimum values.```pythonclass MinStack:def __init__(self):self.stack = []self.min_stack = []def push(self, val: int) -> None:self.stack.append(val)if not self.min_stack or val <= self.min_stack[-1]:self.min_stack.append(val)def pop(self)-> None:if self.stack.pop() == self.min_stack[-1]:self.min_stack.pop()def top(self)-> int:return self.stack[-1]def getMin(self) -> int:return self.min_stack[-1]```### **Time Complexity:** \\(O(1) \\) for alloperations### **Space Complexity:** \\(O(N)\\)2. Min Stack\u2705One-liner:Keep a second stack that always holds the currentminimum.\ud83d\udc763-linerfor kids:One stackis forreal items.Anotherstack is for thesmallest so far.Peek thesmall stack to get the min anytime!\ud83e\udde0Mnemonics:\"Push min\" \u2192 if not min_stack or val <= min_stack[-1]:min_stack.append(val)\"Pop mintoo\" \u2192 if popped== min_stack[-1]: min_stack.pop()\"Get min\"\u2192return min_stack[-1]---## **3. EvaluateReverse Polish Notation**### **Problem:**Evaluatean arithmetic expression in Reverse PolishNotation.### **Optimized Approach:** Use astack toprocess the numbers andoperators.```pythondef evalRPN(tokens: list[str]) ->int:",
    "oneLiner": "### **Optimized Approach:** Maintain an auxiliarystack to keep track ofthe minimum values.```pythonclass MinStack:def __init__(self):self.stack = []self.min_stack = []def push(self, val: int) -> None:self.stack.append(val)if not self.min_stack or val <= self.min_stack[-1]:self.min_stack.append(val)def pop(self)-> None:if self.stack.pop() == self.min_stack[-1]:self.min_stack.pop()def top(self)-> int:return self.stack[-1]def getMin(self) -> int:return self.min_stack[-1]```### **Time Complexity:** \\(O(1) \\) for alloperations### **Space Complexity:** \\(O(N)\\)2. Min Stack\u2705One-liner:Keep a second stack that always holds the currentminimum.\ud83d\udc763-linerfor kids:One stackis forreal items.Anotherstack is for thesmallest so far.Peek thesmall stack to get the min anytime!\ud83e\udde0Mnemonics:\"Push min\" \u2192 if not min_stack or val <= min_stack[-1]:min_stack.append(val)\"Pop mintoo\" \u2192 if popped== min_stack[-1]: min_stack.pop()\"Get min\"\u2192return min_stack[-1]---## **3. EvaluateReverse Polish Notation**### **Problem:**Evaluatean arithmetic expression in Reverse PolishNotation.### **Optimized Approach:** Use astack toprocess the numbers andoperators.```pythondef evalRPN(tokens: list[str]) ->int:",
    "threeLiner": "### **Optimized Approach:** Maintain an auxiliarystack to keep track ofthe minimum values.```pythonclass MinStack:def __init__(self):self.stack = []self.min_stack = []def push(self, val: int) -> None:self.stack.append(val)if not self.min_stack or val <= self.min_stack[-1]:self.min_stack.append(val)def pop(self)-> None:if self.stack.pop() == self.min_stack[-1]:self.min_stack.pop()def top(self)-> int:return self.stack[-1]def getMin(self) -> int:return self.min_stack[-1]```### **Time Complexity:** \\(O(1) \\) for alloperations### **Space Complexity:** \\(O(N)\\)2. Min Stack\u2705One-liner:Keep a second stack that always holds the currentminimum.\ud83d\udc763-linerfor kids:One stackis forreal items.Anotherstack is for thesmallest so far.Peek thesmall stack to get the min anytime!\ud83e\udde0Mnemonics:\"Push min\" \u2192 if not min_stack or val <= min_stack[-1]:min_stack.append(val)\"Pop mintoo\" \u2192 if popped== min_stack[-1]: min_stack.pop()\"Get min\"\u2192return min_stack[-1]---## **3. EvaluateReverse Polish Notation**### **Problem:**Evaluatean arithmetic expression in Reverse PolishNotation.### **Optimized Approach:** Use astack toprocess the numbers andoperators.```pythondef evalRPN(tokens: list[str]) ->int:",
    "mnemonic": "### **Optimized Approach:** Maintain an auxiliarystack to keep track of",
    "code": "the minimum values."
  },
  {
    "title": "```python",
    "difficulty": "class MinStack:",
    "question": "def __init__(self):",
    "hint": "self.stack = []",
    "oneLiner": "self.min_stack = []",
    "threeLiner": "def push(self, val: int) -> None:",
    "mnemonic": "self.stack.append(val)",
    "code": "if not self.min_stack or val <= self.min_stack[-1]:"
  },
  {
    "title": "self.min_stack.append(val)",
    "difficulty": "def pop(self)-> None:",
    "question": "if self.stack.pop() == self.min_stack[-1]:",
    "hint": "self.min_stack.pop()",
    "oneLiner": "def top(self)-> int:",
    "threeLiner": "return self.stack[-1]",
    "mnemonic": "def getMin(self) -> int:",
    "code": "return self.min_stack[-1]"
  },
  {
    "title": "```",
    "difficulty": "### **Time Complexity:** \\(O(1) \\) for alloperations",
    "question": "### **Space Complexity:** \\(O(N)\\)",
    "hint": "2. Min Stack",
    "oneLiner": "\u2705One-liner:",
    "threeLiner": "Keep a second stack that always holds the currentminimum.",
    "mnemonic": "\ud83d\udc763-linerfor kids:",
    "code": "One stackis forreal items."
  },
  {
    "title": "Anotherstack is for thesmallest so far.",
    "difficulty": "Peek thesmall stack to get the min anytime!",
    "question": "\ud83e\udde0Mnemonics:",
    "hint": "\"Push min\" \u2192 if not min_stack or val <= min_stack[-1]:",
    "oneLiner": "min_stack.append(val)",
    "threeLiner": "\"Pop mintoo\" \u2192 if popped== min_stack[-1]: min_stack.pop()",
    "mnemonic": "\"Get min\"\u2192return min_stack[-1]",
    "code": "---"
  },
  {
    "title": "## **3. EvaluateReverse Polish Notation**",
    "difficulty": "### **Problem:**Evaluatean arithmetic expression in Reverse Polish",
    "question": "Notation.",
    "hint": "### **Optimized Approach:** Use astack toprocess the numbers and",
    "oneLiner": "operators.",
    "threeLiner": "```python",
    "mnemonic": "def evalRPN(tokens: list[str]) ->int:",
    "code": "stack= []for token intokens:if tokenin {'+','-', '*', '/'}:b, a= stack.pop(), stack.pop()if token == '+':stack.append(a + b)eliftoken =='-':stack.append(a -b)eliftoken =='*':stack.append(a * b)eliftoken =='/':stack.append(int(a/ b))  #Ensuretruncation towardszeroelse:stack.append(int(token))return stack[0]```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(N)\\)3. Evaluate Reverse PolishNotation\u2705One-liner:Use a stack to apply operators topreviousnumbers.\ud83d\udc763-linerfor kids:Read numbers andput themin a stack.When yousee a symbol, domath onthe top two numbers.Put the result back and keep going!\ud83e\udde0Mnemonics:\"Pop two,compute\" \u2192 a = stack.pop(); b = stack.pop()\"Divide carefully\" \u2192 stack.append(int(a / b))\"Push number\" \u2192 stack.append(int(token))---## **4. GenerateParentheses**### **Problem:**Generateall valid combinationsof `n` pairs ofparentheses.### **Optimized Approach:** Use astack andbacktracking.```pythondef generateParenthesis(n: int) ->list[str]:res =[]def backtrack(s, left,right):if len(s)== 2 * n:res.append(s)return"
  },
  {
    "title": "stack= []for token intokens:if tokenin {'+','-', '*', '/'}:b, a= stack.pop(), stack.pop()if token == '+':stack.append(a + b)eliftoken =='-':stack.append(a -b)eliftoken =='*':stack.append(a * b)eliftoken =='/':stack.append(int(a/ b))  #Ensuretruncation towardszeroelse:stack.append(int(token))return stack[0]```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(N)\\)3. Evaluate Reverse PolishNotation\u2705One-liner:Use a stack to apply operators topreviousnumbers.\ud83d\udc763-linerfor kids:Read numbers andput themin a stack.When yousee a symbol, domath onthe top two numbers.Put the result back and keep going!\ud83e\udde0Mnemonics:\"Pop two,compute\" \u2192 a = stack.pop(); b = stack.pop()\"Divide carefully\" \u2192 stack.append(int(a / b))\"Push number\" \u2192 stack.append(int(token))---## **4. GenerateParentheses**### **Problem:**Generateall valid combinationsof `n` pairs ofparentheses.### **Optimized Approach:** Use astack andbacktracking.```pythondef generateParenthesis(n: int) ->list[str]:res =[]def backtrack(s, left,right):if len(s)== 2 * n:res.append(s)return",
    "difficulty": "stack= []for token intokens:if tokenin {'+','-', '*', '/'}:b, a= stack.pop(), stack.pop()if token == '+':stack.append(a + b)eliftoken =='-':stack.append(a -b)eliftoken =='*':stack.append(a * b)eliftoken =='/':stack.append(int(a/ b))  #Ensuretruncation towardszeroelse:stack.append(int(token))return stack[0]```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(N)\\)3. Evaluate Reverse PolishNotation\u2705One-liner:Use a stack to apply operators topreviousnumbers.\ud83d\udc763-linerfor kids:Read numbers andput themin a stack.When yousee a symbol, domath onthe top two numbers.Put the result back and keep going!\ud83e\udde0Mnemonics:\"Pop two,compute\" \u2192 a = stack.pop(); b = stack.pop()\"Divide carefully\" \u2192 stack.append(int(a / b))\"Push number\" \u2192 stack.append(int(token))---## **4. GenerateParentheses**### **Problem:**Generateall valid combinationsof `n` pairs ofparentheses.### **Optimized Approach:** Use astack andbacktracking.```pythondef generateParenthesis(n: int) ->list[str]:res =[]def backtrack(s, left,right):if len(s)== 2 * n:res.append(s)return",
    "question": "stack= []",
    "hint": "for token intokens:",
    "oneLiner": "if tokenin {'+','-', '*', '/'}:",
    "threeLiner": "b, a= stack.pop(), stack.pop()",
    "mnemonic": "if token == '+':",
    "code": "stack.append(a + b)"
  },
  {
    "title": "eliftoken =='-':",
    "difficulty": "stack.append(a -b)",
    "question": "eliftoken =='*':",
    "hint": "stack.append(a * b)",
    "oneLiner": "eliftoken =='/':",
    "threeLiner": "stack.append(int(a/ b))  #Ensuretruncation towards",
    "mnemonic": "zero",
    "code": "else:"
  },
  {
    "title": "stack.append(int(token))",
    "difficulty": "return stack[0]",
    "question": "```",
    "hint": "### **Time Complexity:** \\(O(N) \\)",
    "oneLiner": "### **Space Complexity:** \\(O(N)\\)",
    "threeLiner": "3. Evaluate Reverse PolishNotation",
    "mnemonic": "\u2705One-liner:",
    "code": "Use a stack to apply operators topreviousnumbers."
  },
  {
    "title": "\ud83d\udc763-linerfor kids:",
    "difficulty": "Read numbers andput themin a stack.",
    "question": "When yousee a symbol, domath onthe top two numbers.",
    "hint": "Put the result back and keep going!",
    "oneLiner": "\ud83e\udde0Mnemonics:",
    "threeLiner": "\"Pop two,compute\" \u2192 a = stack.pop(); b = stack.pop()",
    "mnemonic": "\"Divide carefully\" \u2192 stack.append(int(a / b))",
    "code": "\"Push number\" \u2192 stack.append(int(token))"
  },
  {
    "title": "---",
    "difficulty": "## **4. GenerateParentheses**",
    "question": "### **Problem:**Generateall valid combinationsof `n` pairs of",
    "hint": "parentheses.",
    "oneLiner": "### **Optimized Approach:** Use astack andbacktracking.",
    "threeLiner": "```python",
    "mnemonic": "def generateParenthesis(n: int) ->list[str]:",
    "code": "res =[]"
  },
  {
    "title": "def backtrack(s, left,right):",
    "difficulty": "if len(s)== 2 * n:",
    "question": "res.append(s)",
    "hint": "return",
    "oneLiner": "if left <n:backtrack(s +\"(\", left + 1, right)if right< left:backtrack(s +\")\", left, right+ 1)backtrack(\"\",0, 0)return res```### **Time Complexity:** \\(O(4^n/ \\sqrt{n})\\)### **Space Complexity:** \\(O(N)\\)4. Generate Parentheses\u2705One-liner:Use backtrackingwith openand close counters to build validcombinations.\ud83d\udc763-linerfor kids:You can only close if you\u2019ve opened one.Keep adding ( or) if it\u2019sallowed.Add to the list when it\u2019sfull andbalanced!\ud83e\udde0Mnemonics:\"Base case full\"\u2192 if len(s)== 2* n: res.append(s)\"Try opening\" \u2192 if left <n: backtrack(s +\"(\", ...)\"Try closing\" \u2192 if right <left: backtrack(s + \")\", ...)---## **5. Daily Temperatures**### **Problem:**Given anarray oftemperatures,return an array where`ans[i]`is the number ofdays until a warmer temperature.### **Optimized Approach:** Use amonotonicdecreasing stack to storeindices.```pythondef dailyTemperatures(temperatures: list[int]) -> list[int]:stack= []res =[0] * len(temperatures)for i, temp in enumerate(temperatures):while stack and temperatures[stack[-1]] < temp:idx =stack.pop()res[idx] = i - idxstack.append(i)return res```### **Time Complexity:** \\(O(N) \\)",
    "threeLiner": "if left <n:backtrack(s +\"(\", left + 1, right)if right< left:backtrack(s +\")\", left, right+ 1)backtrack(\"\",0, 0)return res```### **Time Complexity:** \\(O(4^n/ \\sqrt{n})\\)### **Space Complexity:** \\(O(N)\\)4. Generate Parentheses\u2705One-liner:Use backtrackingwith openand close counters to build validcombinations.\ud83d\udc763-linerfor kids:You can only close if you\u2019ve opened one.Keep adding ( or) if it\u2019sallowed.Add to the list when it\u2019sfull andbalanced!\ud83e\udde0Mnemonics:\"Base case full\"\u2192 if len(s)== 2* n: res.append(s)\"Try opening\" \u2192 if left <n: backtrack(s +\"(\", ...)\"Try closing\" \u2192 if right <left: backtrack(s + \")\", ...)---## **5. Daily Temperatures**### **Problem:**Given anarray oftemperatures,return an array where`ans[i]`is the number ofdays until a warmer temperature.### **Optimized Approach:** Use amonotonicdecreasing stack to storeindices.```pythondef dailyTemperatures(temperatures: list[int]) -> list[int]:stack= []res =[0] * len(temperatures)for i, temp in enumerate(temperatures):while stack and temperatures[stack[-1]] < temp:idx =stack.pop()res[idx] = i - idxstack.append(i)return res```### **Time Complexity:** \\(O(N) \\)",
    "mnemonic": "if left <n:backtrack(s +\"(\", left + 1, right)if right< left:backtrack(s +\")\", left, right+ 1)backtrack(\"\",0, 0)return res```### **Time Complexity:** \\(O(4^n/ \\sqrt{n})\\)### **Space Complexity:** \\(O(N)\\)4. Generate Parentheses\u2705One-liner:Use backtrackingwith openand close counters to build validcombinations.\ud83d\udc763-linerfor kids:You can only close if you\u2019ve opened one.Keep adding ( or) if it\u2019sallowed.Add to the list when it\u2019sfull andbalanced!\ud83e\udde0Mnemonics:\"Base case full\"\u2192 if len(s)== 2* n: res.append(s)\"Try opening\" \u2192 if left <n: backtrack(s +\"(\", ...)\"Try closing\" \u2192 if right <left: backtrack(s + \")\", ...)---## **5. Daily Temperatures**### **Problem:**Given anarray oftemperatures,return an array where`ans[i]`is the number ofdays until a warmer temperature.### **Optimized Approach:** Use amonotonicdecreasing stack to storeindices.```pythondef dailyTemperatures(temperatures: list[int]) -> list[int]:stack= []res =[0] * len(temperatures)for i, temp in enumerate(temperatures):while stack and temperatures[stack[-1]] < temp:idx =stack.pop()res[idx] = i - idxstack.append(i)return res```### **Time Complexity:** \\(O(N) \\)",
    "code": "if left <n:"
  },
  {
    "title": "backtrack(s +\"(\", left + 1, right)",
    "difficulty": "if right< left:",
    "question": "backtrack(s +\")\", left, right+ 1)",
    "hint": "backtrack(\"\",0, 0)",
    "oneLiner": "return res",
    "threeLiner": "```",
    "mnemonic": "### **Time Complexity:** \\(O(4^n/ \\sqrt{n})\\)",
    "code": "### **Space Complexity:** \\(O(N)\\)"
  },
  {
    "title": "4. Generate Parentheses",
    "difficulty": "\u2705One-liner:",
    "question": "Use backtrackingwith openand close counters to build valid",
    "hint": "combinations.",
    "oneLiner": "\ud83d\udc763-linerfor kids:",
    "threeLiner": "You can only close if you\u2019ve opened one.",
    "mnemonic": "Keep adding ( or) if it\u2019sallowed.",
    "code": "Add to the list when it\u2019sfull andbalanced!"
  },
  {
    "title": "\ud83e\udde0Mnemonics:",
    "difficulty": "\"Base case full\"\u2192 if len(s)== 2* n: res.append(s)",
    "question": "\"Try opening\" \u2192 if left <n: backtrack(s +\"(\", ...)",
    "hint": "\"Try closing\" \u2192 if right <left: backtrack(s + \")\", ...)",
    "oneLiner": "---",
    "threeLiner": "## **5. Daily Temperatures**",
    "mnemonic": "### **Problem:**Given anarray oftemperatures,return an array where",
    "code": "`ans[i]`is the number ofdays until a warmer temperature."
  },
  {
    "title": "### **Optimized Approach:** Use amonotonicdecreasing stack to store",
    "difficulty": "indices.",
    "question": "```python",
    "hint": "def dailyTemperatures(temperatures: list[int]) -> list[int]:",
    "oneLiner": "stack= []",
    "threeLiner": "res =[0] * len(temperatures)",
    "mnemonic": "for i, temp in enumerate(temperatures):",
    "code": "while stack and temperatures[stack[-1]] < temp:"
  },
  {
    "title": "idx =stack.pop()",
    "difficulty": "res[idx] = i - idx",
    "question": "stack.append(i)",
    "hint": "return res",
    "oneLiner": "```",
    "threeLiner": "### **Time Complexity:** \\(O(N) \\)",
    "mnemonic": "### **Space Complexity:** \\(O(N)\\)5. DailyTemperatures\u2705One-liner:Use a monotonic stack to find thenext warmer day.\ud83d\udc763-linerfor kids:Keep daysin a stack untila warmer one shows up.Then popand markhow longthey waited.Repeat until allare checked.\ud83e\udde0Mnemonics:\"Pop whenwarmer\"\u2192 whilestack and temperatures[stack[-1]] <temp:\"Set waitdays\" \u2192res[idx]= i- idx\"Track index\" \u2192 stack.append(i)---## **6. Car Fleet**### **Problem:**Given `position`and `speed` arrays of cars, returnthenumber offleetsthat arrive at the destination.### **Optimized Approach:** Sort cars by positionin descending order anduse a stack to track fleets.```pythondef carFleet(target: int,position: list[int], speed:list[int]) -> int:cars= sorted(zip(position, speed), reverse=True)stack= []for pos, spdin cars:time = (target - pos) / spdif not stack or time > stack[-1]:stack.append(time)return len(stack)```### **Time Complexity:** \\(O(N \\log N) \\)### **Space Complexity:** \\(O(N)\\)6. Car Fleet\u2705One-liner:Sort carsby position anduse a stack to track merging fleets.\ud83d\udc763-linerfor kids:Sort carsfrom back to front.See how long eachtakes toreach the end.If one catches another, they become a team!\ud83e\udde0Mnemonics:",
    "code": "### **Space Complexity:** \\(O(N)\\)5. DailyTemperatures\u2705One-liner:Use a monotonic stack to find thenext warmer day.\ud83d\udc763-linerfor kids:Keep daysin a stack untila warmer one shows up.Then popand markhow longthey waited.Repeat until allare checked.\ud83e\udde0Mnemonics:\"Pop whenwarmer\"\u2192 whilestack and temperatures[stack[-1]] <temp:\"Set waitdays\" \u2192res[idx]= i- idx\"Track index\" \u2192 stack.append(i)---## **6. Car Fleet**### **Problem:**Given `position`and `speed` arrays of cars, returnthenumber offleetsthat arrive at the destination.### **Optimized Approach:** Sort cars by positionin descending order anduse a stack to track fleets.```pythondef carFleet(target: int,position: list[int], speed:list[int]) -> int:cars= sorted(zip(position, speed), reverse=True)stack= []for pos, spdin cars:time = (target - pos) / spdif not stack or time > stack[-1]:stack.append(time)return len(stack)```### **Time Complexity:** \\(O(N \\log N) \\)### **Space Complexity:** \\(O(N)\\)6. Car Fleet\u2705One-liner:Sort carsby position anduse a stack to track merging fleets.\ud83d\udc763-linerfor kids:Sort carsfrom back to front.See how long eachtakes toreach the end.If one catches another, they become a team!\ud83e\udde0Mnemonics:"
  },
  {
    "title": "### **Space Complexity:** \\(O(N)\\)5. DailyTemperatures\u2705One-liner:Use a monotonic stack to find thenext warmer day.\ud83d\udc763-linerfor kids:Keep daysin a stack untila warmer one shows up.Then popand markhow longthey waited.Repeat until allare checked.\ud83e\udde0Mnemonics:\"Pop whenwarmer\"\u2192 whilestack and temperatures[stack[-1]] <temp:\"Set waitdays\" \u2192res[idx]= i- idx\"Track index\" \u2192 stack.append(i)---## **6. Car Fleet**### **Problem:**Given `position`and `speed` arrays of cars, returnthenumber offleetsthat arrive at the destination.### **Optimized Approach:** Sort cars by positionin descending order anduse a stack to track fleets.```pythondef carFleet(target: int,position: list[int], speed:list[int]) -> int:cars= sorted(zip(position, speed), reverse=True)stack= []for pos, spdin cars:time = (target - pos) / spdif not stack or time > stack[-1]:stack.append(time)return len(stack)```### **Time Complexity:** \\(O(N \\log N) \\)### **Space Complexity:** \\(O(N)\\)6. Car Fleet\u2705One-liner:Sort carsby position anduse a stack to track merging fleets.\ud83d\udc763-linerfor kids:Sort carsfrom back to front.See how long eachtakes toreach the end.If one catches another, they become a team!\ud83e\udde0Mnemonics:",
    "difficulty": "### **Space Complexity:** \\(O(N)\\)",
    "question": "5. DailyTemperatures",
    "hint": "\u2705One-liner:",
    "oneLiner": "Use a monotonic stack to find thenext warmer day.",
    "threeLiner": "\ud83d\udc763-linerfor kids:",
    "mnemonic": "Keep daysin a stack untila warmer one shows up.",
    "code": "Then popand markhow longthey waited."
  },
  {
    "title": "Repeat until allare checked.",
    "difficulty": "\ud83e\udde0Mnemonics:",
    "question": "\"Pop whenwarmer\"\u2192 whilestack and temperatures[stack[-1]] <temp:",
    "hint": "\"Set waitdays\" \u2192res[idx]= i- idx",
    "oneLiner": "\"Track index\" \u2192 stack.append(i)",
    "threeLiner": "---",
    "mnemonic": "## **6. Car Fleet**",
    "code": "### **Problem:**Given `position`and `speed` arrays of cars, returnthe"
  },
  {
    "title": "number offleetsthat arrive at the destination.",
    "difficulty": "### **Optimized Approach:** Sort cars by positionin descending order and",
    "question": "use a stack to track fleets.",
    "hint": "```python",
    "oneLiner": "def carFleet(target: int,position: list[int], speed:list[int]) -> int:",
    "threeLiner": "cars= sorted(zip(position, speed), reverse=True)",
    "mnemonic": "stack= []",
    "code": "for pos, spdin cars:"
  },
  {
    "title": "time = (target - pos) / spd",
    "difficulty": "if not stack or time > stack[-1]:",
    "question": "stack.append(time)",
    "hint": "return len(stack)",
    "oneLiner": "```",
    "threeLiner": "### **Time Complexity:** \\(O(N \\log N) \\)",
    "mnemonic": "### **Space Complexity:** \\(O(N)\\)",
    "code": "6. Car Fleet"
  },
  {
    "title": "\u2705One-liner:",
    "difficulty": "Sort carsby position anduse a stack to track merging fleets.",
    "question": "\ud83d\udc763-linerfor kids:",
    "hint": "Sort carsfrom back to front.",
    "oneLiner": "See how long eachtakes toreach the end.",
    "threeLiner": "If one catches another, they become a team!",
    "mnemonic": "\ud83e\udde0Mnemonics:",
    "code": "\"Sort byposition\" \u2192 cars= sorted(zip(position,speed),reverse=True)\"Calc time to end\" \u2192 time= (target- pos)/ spd\"Stack only new fleets\" \u2192 ifnot stack or time > stack[-1]:stack.append(time)---## **7. Largest Rectanglein Histogram**### **Problem:**Find thelargestrectangular area in a histogram.### **Optimized Approach:** Use amonotonicincreasing stack to trackheights.```pythondef largestRectangleArea(heights:list[int]) -> int:stack= []max_area = 0heights.append(0)  # Sentinelvaluefor i, h in enumerate(heights):while stack and heights[stack[-1]] >h:height = heights[stack.pop()]width= i if not stackelse i - stack[-1]- 1max_area = max(max_area, height* width)stack.append(i)return max_area```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(N)\\)7. Largest Rectangle in Histogram\u2705One-liner:Use a monotonic stack to compute max area rectangle at each drop.\ud83d\udc763-linerfor kids:Go bar bybar, stack up when taller.If a lower one comes, popand measure.Always track thebiggest area!\ud83e\udde0Mnemonics:\"Push height index\" \u2192 stack.append(i)\"Pop andcalc area\" \u2192 width = i ifnot stack elsei- stack[-1] - 1\"Update max area\"\u2192 max_area = max(max_area, height * width)"
  },
  {
    "title": "\"Sort byposition\" \u2192 cars= sorted(zip(position,speed),reverse=True)\"Calc time to end\" \u2192 time= (target- pos)/ spd\"Stack only new fleets\" \u2192 ifnot stack or time > stack[-1]:stack.append(time)---## **7. Largest Rectanglein Histogram**### **Problem:**Find thelargestrectangular area in a histogram.### **Optimized Approach:** Use amonotonicincreasing stack to trackheights.```pythondef largestRectangleArea(heights:list[int]) -> int:stack= []max_area = 0heights.append(0)  # Sentinelvaluefor i, h in enumerate(heights):while stack and heights[stack[-1]] >h:height = heights[stack.pop()]width= i if not stackelse i - stack[-1]- 1max_area = max(max_area, height* width)stack.append(i)return max_area```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(N)\\)7. Largest Rectangle in Histogram\u2705One-liner:Use a monotonic stack to compute max area rectangle at each drop.\ud83d\udc763-linerfor kids:Go bar bybar, stack up when taller.If a lower one comes, popand measure.Always track thebiggest area!\ud83e\udde0Mnemonics:\"Push height index\" \u2192 stack.append(i)\"Pop andcalc area\" \u2192 width = i ifnot stack elsei- stack[-1] - 1\"Update max area\"\u2192 max_area = max(max_area, height * width)",
    "difficulty": "\"Sort byposition\" \u2192 cars= sorted(zip(position,speed),reverse=True)\"Calc time to end\" \u2192 time= (target- pos)/ spd\"Stack only new fleets\" \u2192 ifnot stack or time > stack[-1]:stack.append(time)---## **7. Largest Rectanglein Histogram**### **Problem:**Find thelargestrectangular area in a histogram.### **Optimized Approach:** Use amonotonicincreasing stack to trackheights.```pythondef largestRectangleArea(heights:list[int]) -> int:stack= []max_area = 0heights.append(0)  # Sentinelvaluefor i, h in enumerate(heights):while stack and heights[stack[-1]] >h:height = heights[stack.pop()]width= i if not stackelse i - stack[-1]- 1max_area = max(max_area, height* width)stack.append(i)return max_area```### **Time Complexity:** \\(O(N) \\)### **Space Complexity:** \\(O(N)\\)7. Largest Rectangle in Histogram\u2705One-liner:Use a monotonic stack to compute max area rectangle at each drop.\ud83d\udc763-linerfor kids:Go bar bybar, stack up when taller.If a lower one comes, popand measure.Always track thebiggest area!\ud83e\udde0Mnemonics:\"Push height index\" \u2192 stack.append(i)\"Pop andcalc area\" \u2192 width = i ifnot stack elsei- stack[-1] - 1\"Update max area\"\u2192 max_area = max(max_area, height * width)",
    "question": "\"Sort byposition\" \u2192 cars= sorted(zip(position,speed),reverse=True)",
    "hint": "\"Calc time to end\" \u2192 time= (target- pos)/ spd",
    "oneLiner": "\"Stack only new fleets\" \u2192 ifnot stack or time > stack[-1]:",
    "threeLiner": "stack.append(time)",
    "mnemonic": "---",
    "code": "## **7. Largest Rectanglein Histogram**"
  },
  {
    "title": "### **Problem:**Find thelargestrectangular area in a histogram.",
    "difficulty": "### **Optimized Approach:** Use amonotonicincreasing stack to track",
    "question": "heights.",
    "hint": "```python",
    "oneLiner": "def largestRectangleArea(heights:list[int]) -> int:",
    "threeLiner": "stack= []",
    "mnemonic": "max_area = 0",
    "code": "heights.append(0)  # Sentinelvalue"
  },
  {
    "title": "for i, h in enumerate(heights):",
    "difficulty": "while stack and heights[stack[-1]] >h:",
    "question": "height = heights[stack.pop()]",
    "hint": "width= i if not stackelse i - stack[-1]- 1",
    "oneLiner": "max_area = max(max_area, height* width)",
    "threeLiner": "stack.append(i)",
    "mnemonic": "return max_area",
    "code": "```"
  },
  {
    "title": "### **Time Complexity:** \\(O(N) \\)",
    "difficulty": "### **Space Complexity:** \\(O(N)\\)",
    "question": "7. Largest Rectangle in Histogram",
    "hint": "\u2705One-liner:",
    "oneLiner": "Use a monotonic stack to compute max area rectangle at each drop.",
    "threeLiner": "\ud83d\udc763-linerfor kids:",
    "mnemonic": "Go bar bybar, stack up when taller.",
    "code": "If a lower one comes, popand measure."
  }
];
export default stack;