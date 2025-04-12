const mathgeometry = [
  {
    "title": "---### **1.Rotate Image**\u2705**One-liner**:Transposethe matrix and reverse each row.\ud83d\udc76**3-liner for kids**:We flip the square along the slanty diagonal.Then we flip eachrow liketurninga page.Now it looks rotated!\ud83e\udde0**Mnemonics**:-\"Flip +Transpose\" \u2192 `matrix[:] = list(zip(*matrix[::-1]))`-\"Turn insideout\" \u2192 Transposefirst, reverse next- \"In-place magic\" \u2192 Modify the same matrixclass Solution:def rotate(self, matrix: List[List[int]]) -> None:# Reverse the matrix verticallymatrix.reverse()#Transpose the matrixfor i inrange(len(matrix)):for jin range(i + 1,len(matrix)):matrix[i][j], matrix[j][i]= matrix[j][i], matrix[i][j]---### **2.Spiral Matrix**\u2705**One-liner**:Peel outer layersone by one in spiral order.\ud83d\udc76**3-liner for kids**:We grab the top row, thengo downthe side.Then we go backwards alongthe bottom, thenup.Repeat this spiral till everything\u2019s picked.\ud83e\udde0**Mnemonics**:-\"Peel &Rotate\" \u2192 `res+= matrix.pop(0); matrix=list(zip(*matrix))[::-1]`- \"Right-Down-Left-Up\" \u2192 Classic spiral movement-\"Shrinkthe box\" \u2192 Matrix getssmallerevery loopclass Solution:def spiralOrder(self,matrix:List[List[int]]) -> List[int]:res = []directions = [(0,1), (1,0), (0, -1), (-1, 0)]steps = [len(matrix[0]), len(matrix) -1]r, c, d =0, -1, 0while steps[d & 1]:for iin range(steps[d& 1]):r+= directions[d][0]c+= directions[d][1]res.append(matrix[r][c])steps[d & 1] -=1d +=1d %=4return res---### **3.Set Matrix Zeroes**\u2705**One-liner**:Use firstrow andcolumn to mark zeros to be setlater.\ud83d\udc76**3-liner for kids**:If something is zero, we rememberits row and column.We use the firstrow and column assticky notes.Later weturn whole rows and columns to zeros.\ud83e\udde0**Mnemonics**:-\"Mark for zero\" \u2192 `matrix[i][0] = matrix[0][j]= 0`- \"Firstrow/col= hint board\"-\"Wipe after scan\" \u2192 Dochangesonly after scanningclass Solution:def setZeroes(self, matrix: List[List[int]]) -> None:ROWS, COLS = len(matrix),len(matrix[0])rowZero =Falsefor r inrange(ROWS):for cin range(COLS):if matrix[r][c] ==0:matrix[0][c] =0if r > 0:matrix[r][0] = 0else:rowZero =Truefor r inrange(1,ROWS):for cin range(1, COLS):if matrix[0][c] ==0 or matrix[r][0] == 0:matrix[r][c] =0if matrix[0][0] ==0:for rin range(ROWS):matrix[r][0] = 0if rowZero:for cin range(COLS):matrix[0][c] = 0---### **4.Happy Number**\u2705**One-liner**:Loop sumof squares of digits until 1 or repeat.\ud83d\udc76**3-liner for kids**:We squareand addeach digit.If we reach 1, it's a happy number!If we loop, it'sstuck andunhappy.\ud83e\udde0**Mnemonics**:- \"Sum ofdigit squares\" \u2192`n = sum(int(c)**2 forc in str(n))`-\"Loop with memory\" \u2192 `seen = set()`-\"Stop at 1 orcycle\" \u2192`whilen != 1 and n notin seen: ...`class Solution:def isHappy(self, n: int) -> bool:slow, fast = n, self.sumOfSquares(n)power = lam = 1while slow != fast:if power == lam:slow = fastpower *= 2lam = 0fast= self.sumOfSquares(fast)lam += 1returnTrue if fast == 1elseFalsedef sumOfSquares(self,n: int)-> int:output =0while n:digit= n % 10digit= digit** 2output += digitn = n// 10returnoutput---### **5.Plus One**\u2705**One-liner**:Add fromthe back, handlecarry, insert ifneeded.\ud83d\udc76**3-liner for kids**:We add 1to the last digit.If it turns into10, we carry the1.If it carries allthe way,we adda new digit!\ud83e\udde0**Mnemonics**:-\"Go backward\"\u2192 `for iin reversed(range(len(digits)))`- \"Breakearly ifno carry\"-\"Insert1 ifoverflow\"\u2192 `digits.insert(0, 1)`class Solution:def plusOne(self, digits: List[int]) -> List[int]:one = 1i= 0digits.reverse()while one:if i< len(digits):if digits[i] == 9:digits[i] = 0else:digits[i] += 1one = 0else:digits.append(one)one = 0i +=1digits.reverse()return digits---### **6.Pow(x, n)**\u2705**One-liner**:Use divide and conquer toreduce power fast.\ud83d\udc76**3-liner for kids**:Split theprobleminto twosmallerones.Use the result tobuild the big one back.Repeat until tinyand fast.\ud83e\udde0**Mnemonics**:-\"Halveand square\" \u2192 `pow(x *x, n // 2)`-\"Odd nneedsextra x\"\u2192 `x * pow(...) ifn % 2 else pow(...)`- \"Fast power = Binary Exponentiation\"class Solution:def myPow(self, x: float, n: int) -> float:if x == 0:return 0if n == 0:return 1res = 1power = abs(n)while power:if power & 1:res *= xx *=xpower>>= 1return res if n >=0 else1 / res---### **7.MultiplyStrings**\u2705**One-liner**:Simulategrade-school multiplication usingarrays.\ud83d\udc76**3-liner for kids**:We multiply eachdigit like on paper.Add to the rightplace using carry.At the end, remove leadingzeroes.\ud83e\udde0**Mnemonics**:-\"Multiply andplace\" \u2192`res[i +j + 1] +=d1 *d2`-\"Add carry\" \u2192`res[i +j] += res[i + j+ 1] //10`-\"Join digits\"\u2192 `''.join(map(str, res)).lstrip('0')`class Solution:def multiply(self, num1: str,num2: str) -> str:if \"0\" in[num1, num2]:return \"0\"res = [0]* (len(num1) + len(num2))num1, num2 = num1[::-1], num2[::-1]for i1 inrange(len(num1)):for i2 in range(len(num2)):digit = int(num1[i1]) * int(num2[i2])res[i1 + i2] += digitres[i1 + i2 + 1] += res[i1+ i2] //10res[i1 + i2] = res[i1 + i2]% 10res, beg= res[::-1], 0while beg< len(res) and res[beg] == 0:beg += 1res = map(str, res[beg:])return \"\".join(res)---### **8.Detect Squares**\u2705**One-liner**:For eachnew point, checkother 3corners neededto makea square.\ud83d\udc76**3-liner for kids**:When we add a point, we remember it.To countsquares,we try using that point as one corner.We find 3other points that make asquare with it!\ud83e\udde0**Mnemonics**:-\"Storecountof all points\" \u2192`self.points = defaultdict(int)`-\"Same y= square start\" \u2192 Loopall points withsame y- \"Checkdistance& match\"\u2192 `count += self.points[...] *...`---class CountSquares:def __init__(self):self.ptsCount = defaultdict(lambda:defaultdict(int))def add(self,point: List[int]) -> None:self.ptsCount[point[0]][point[1]] += 1def count(self, point:List[int]) -> int:res = 0x1, y1 =pointfor y2 inself.ptsCount[x1]:side= y2 -y1if side == 0:continuex3, x4 = x1 +side, x1- sideres += (self.ptsCount[x1][y2] *self.ptsCount[x3][y1]*self.ptsCount[x3][y2])res += (self.ptsCount[x1][y2] *self.ptsCount[x4][y1]*self.ptsCount[x4][y2])return res",
    "difficulty": "---### **1.Rotate Image**\u2705**One-liner**:Transposethe matrix and reverse each row.\ud83d\udc76**3-liner for kids**:We flip the square along the slanty diagonal.Then we flip eachrow liketurninga page.Now it looks rotated!\ud83e\udde0**Mnemonics**:-\"Flip +Transpose\" \u2192 `matrix[:] = list(zip(*matrix[::-1]))`-\"Turn insideout\" \u2192 Transposefirst, reverse next- \"In-place magic\" \u2192 Modify the same matrixclass Solution:def rotate(self, matrix: List[List[int]]) -> None:# Reverse the matrix verticallymatrix.reverse()#Transpose the matrixfor i inrange(len(matrix)):for jin range(i + 1,len(matrix)):matrix[i][j], matrix[j][i]= matrix[j][i], matrix[i][j]---### **2.Spiral Matrix**\u2705**One-liner**:Peel outer layersone by one in spiral order.\ud83d\udc76**3-liner for kids**:We grab the top row, thengo downthe side.Then we go backwards alongthe bottom, thenup.Repeat this spiral till everything\u2019s picked.\ud83e\udde0**Mnemonics**:-\"Peel &Rotate\" \u2192 `res+= matrix.pop(0); matrix=list(zip(*matrix))[::-1]`- \"Right-Down-Left-Up\" \u2192 Classic spiral movement-\"Shrinkthe box\" \u2192 Matrix getssmallerevery loopclass Solution:def spiralOrder(self,matrix:List[List[int]]) -> List[int]:res = []directions = [(0,1), (1,0), (0, -1), (-1, 0)]steps = [len(matrix[0]), len(matrix) -1]r, c, d =0, -1, 0while steps[d & 1]:",
    "question": "---### **1.Rotate Image**\u2705**One-liner**:Transposethe matrix and reverse each row.\ud83d\udc76**3-liner for kids**:We flip the square along the slanty diagonal.Then we flip eachrow liketurninga page.Now it looks rotated!\ud83e\udde0**Mnemonics**:-\"Flip +Transpose\" \u2192 `matrix[:] = list(zip(*matrix[::-1]))`-\"Turn insideout\" \u2192 Transposefirst, reverse next- \"In-place magic\" \u2192 Modify the same matrixclass Solution:def rotate(self, matrix: List[List[int]]) -> None:# Reverse the matrix verticallymatrix.reverse()#Transpose the matrixfor i inrange(len(matrix)):for jin range(i + 1,len(matrix)):matrix[i][j], matrix[j][i]= matrix[j][i], matrix[i][j]---### **2.Spiral Matrix**\u2705**One-liner**:Peel outer layersone by one in spiral order.\ud83d\udc76**3-liner for kids**:We grab the top row, thengo downthe side.Then we go backwards alongthe bottom, thenup.Repeat this spiral till everything\u2019s picked.\ud83e\udde0**Mnemonics**:-\"Peel &Rotate\" \u2192 `res+= matrix.pop(0); matrix=list(zip(*matrix))[::-1]`- \"Right-Down-Left-Up\" \u2192 Classic spiral movement-\"Shrinkthe box\" \u2192 Matrix getssmallerevery loopclass Solution:def spiralOrder(self,matrix:List[List[int]]) -> List[int]:res = []directions = [(0,1), (1,0), (0, -1), (-1, 0)]steps = [len(matrix[0]), len(matrix) -1]r, c, d =0, -1, 0while steps[d & 1]:",
    "hint": "---### **1.Rotate Image**\u2705**One-liner**:Transposethe matrix and reverse each row.\ud83d\udc76**3-liner for kids**:We flip the square along the slanty diagonal.Then we flip eachrow liketurninga page.Now it looks rotated!\ud83e\udde0**Mnemonics**:-\"Flip +Transpose\" \u2192 `matrix[:] = list(zip(*matrix[::-1]))`-\"Turn insideout\" \u2192 Transposefirst, reverse next- \"In-place magic\" \u2192 Modify the same matrixclass Solution:def rotate(self, matrix: List[List[int]]) -> None:# Reverse the matrix verticallymatrix.reverse()#Transpose the matrixfor i inrange(len(matrix)):for jin range(i + 1,len(matrix)):matrix[i][j], matrix[j][i]= matrix[j][i], matrix[i][j]---### **2.Spiral Matrix**\u2705**One-liner**:Peel outer layersone by one in spiral order.\ud83d\udc76**3-liner for kids**:We grab the top row, thengo downthe side.Then we go backwards alongthe bottom, thenup.Repeat this spiral till everything\u2019s picked.\ud83e\udde0**Mnemonics**:-\"Peel &Rotate\" \u2192 `res+= matrix.pop(0); matrix=list(zip(*matrix))[::-1]`- \"Right-Down-Left-Up\" \u2192 Classic spiral movement-\"Shrinkthe box\" \u2192 Matrix getssmallerevery loopclass Solution:def spiralOrder(self,matrix:List[List[int]]) -> List[int]:res = []directions = [(0,1), (1,0), (0, -1), (-1, 0)]steps = [len(matrix[0]), len(matrix) -1]r, c, d =0, -1, 0while steps[d & 1]:",
    "oneLiner": "---",
    "threeLiner": "### **1.Rotate Image**",
    "mnemonic": "\u2705**One-liner**:",
    "code": "Transposethe matrix and reverse each row."
  },
  {
    "title": "\ud83d\udc76**3-liner for kids**:",
    "difficulty": "We flip the square along the slanty diagonal.",
    "question": "Then we flip eachrow liketurninga page.",
    "hint": "Now it looks rotated!",
    "oneLiner": "\ud83e\udde0**Mnemonics**:",
    "threeLiner": "-\"Flip +Transpose\" \u2192 `matrix[:] = list(zip(*matrix[::-1]))`",
    "mnemonic": "-\"Turn insideout\" \u2192 Transposefirst, reverse next",
    "code": "- \"In-place magic\" \u2192 Modify the same matrix"
  },
  {
    "title": "class Solution:",
    "difficulty": "def rotate(self, matrix: List[List[int]]) -> None:",
    "question": "# Reverse the matrix vertically",
    "hint": "matrix.reverse()",
    "oneLiner": "#Transpose the matrix",
    "threeLiner": "for i inrange(len(matrix)):",
    "mnemonic": "for jin range(i + 1,len(matrix)):",
    "code": "matrix[i][j], matrix[j][i]= matrix[j][i], matrix[i][j]"
  },
  {
    "title": "---",
    "difficulty": "### **2.Spiral Matrix**",
    "question": "\u2705**One-liner**:",
    "hint": "Peel outer layersone by one in spiral order.",
    "oneLiner": "\ud83d\udc76**3-liner for kids**:",
    "threeLiner": "We grab the top row, thengo downthe side.",
    "mnemonic": "Then we go backwards alongthe bottom, thenup.",
    "code": "Repeat this spiral till everything\u2019s picked."
  },
  {
    "title": "\ud83e\udde0**Mnemonics**:",
    "difficulty": "-\"Peel &Rotate\" \u2192 `res+= matrix.pop(0); matrix=",
    "question": "list(zip(*matrix))[::-1]`",
    "hint": "- \"Right-Down-Left-Up\" \u2192 Classic spiral movement",
    "oneLiner": "-\"Shrinkthe box\" \u2192 Matrix getssmallerevery loop",
    "threeLiner": "class Solution:",
    "mnemonic": "def spiralOrder(self,matrix:List[List[int]]) -> List[int]:",
    "code": "res = []"
  },
  {
    "title": "directions = [(0,1), (1,0), (0, -1), (-1, 0)]",
    "difficulty": "steps = [len(matrix[0]), len(matrix) -1]",
    "question": "r, c, d =0, -1, 0",
    "hint": "while steps[d & 1]:",
    "oneLiner": "for iin range(steps[d& 1]):r+= directions[d][0]c+= directions[d][1]res.append(matrix[r][c])steps[d & 1] -=1d +=1d %=4return res---### **3.Set Matrix Zeroes**\u2705**One-liner**:Use firstrow andcolumn to mark zeros to be setlater.\ud83d\udc76**3-liner for kids**:If something is zero, we rememberits row and column.We use the firstrow and column assticky notes.Later weturn whole rows and columns to zeros.\ud83e\udde0**Mnemonics**:-\"Mark for zero\" \u2192 `matrix[i][0] = matrix[0][j]= 0`- \"Firstrow/col= hint board\"-\"Wipe after scan\" \u2192 Dochangesonly after scanningclass Solution:def setZeroes(self, matrix: List[List[int]]) -> None:ROWS, COLS = len(matrix),len(matrix[0])rowZero =Falsefor r inrange(ROWS):for cin range(COLS):if matrix[r][c] ==0:matrix[0][c] =0if r > 0:matrix[r][0] = 0else:rowZero =Truefor r inrange(1,ROWS):for cin range(1, COLS):if matrix[0][c] ==0 or matrix[r][0] == 0:matrix[r][c] =0if matrix[0][0] ==0:for rin range(ROWS):matrix[r][0] = 0if rowZero:for cin range(COLS):matrix[0][c] = 0---### **4.Happy Number**",
    "threeLiner": "for iin range(steps[d& 1]):r+= directions[d][0]c+= directions[d][1]res.append(matrix[r][c])steps[d & 1] -=1d +=1d %=4return res---### **3.Set Matrix Zeroes**\u2705**One-liner**:Use firstrow andcolumn to mark zeros to be setlater.\ud83d\udc76**3-liner for kids**:If something is zero, we rememberits row and column.We use the firstrow and column assticky notes.Later weturn whole rows and columns to zeros.\ud83e\udde0**Mnemonics**:-\"Mark for zero\" \u2192 `matrix[i][0] = matrix[0][j]= 0`- \"Firstrow/col= hint board\"-\"Wipe after scan\" \u2192 Dochangesonly after scanningclass Solution:def setZeroes(self, matrix: List[List[int]]) -> None:ROWS, COLS = len(matrix),len(matrix[0])rowZero =Falsefor r inrange(ROWS):for cin range(COLS):if matrix[r][c] ==0:matrix[0][c] =0if r > 0:matrix[r][0] = 0else:rowZero =Truefor r inrange(1,ROWS):for cin range(1, COLS):if matrix[0][c] ==0 or matrix[r][0] == 0:matrix[r][c] =0if matrix[0][0] ==0:for rin range(ROWS):matrix[r][0] = 0if rowZero:for cin range(COLS):matrix[0][c] = 0---### **4.Happy Number**",
    "mnemonic": "for iin range(steps[d& 1]):r+= directions[d][0]c+= directions[d][1]res.append(matrix[r][c])steps[d & 1] -=1d +=1d %=4return res---### **3.Set Matrix Zeroes**\u2705**One-liner**:Use firstrow andcolumn to mark zeros to be setlater.\ud83d\udc76**3-liner for kids**:If something is zero, we rememberits row and column.We use the firstrow and column assticky notes.Later weturn whole rows and columns to zeros.\ud83e\udde0**Mnemonics**:-\"Mark for zero\" \u2192 `matrix[i][0] = matrix[0][j]= 0`- \"Firstrow/col= hint board\"-\"Wipe after scan\" \u2192 Dochangesonly after scanningclass Solution:def setZeroes(self, matrix: List[List[int]]) -> None:ROWS, COLS = len(matrix),len(matrix[0])rowZero =Falsefor r inrange(ROWS):for cin range(COLS):if matrix[r][c] ==0:matrix[0][c] =0if r > 0:matrix[r][0] = 0else:rowZero =Truefor r inrange(1,ROWS):for cin range(1, COLS):if matrix[0][c] ==0 or matrix[r][0] == 0:matrix[r][c] =0if matrix[0][0] ==0:for rin range(ROWS):matrix[r][0] = 0if rowZero:for cin range(COLS):matrix[0][c] = 0---### **4.Happy Number**",
    "code": "for iin range(steps[d& 1]):"
  },
  {
    "title": "r+= directions[d][0]",
    "difficulty": "c+= directions[d][1]",
    "question": "res.append(matrix[r][c])",
    "hint": "steps[d & 1] -=1",
    "oneLiner": "d +=1",
    "threeLiner": "d %=4",
    "mnemonic": "return res",
    "code": "---"
  },
  {
    "title": "### **3.Set Matrix Zeroes**",
    "difficulty": "\u2705**One-liner**:",
    "question": "Use firstrow andcolumn to mark zeros to be setlater.",
    "hint": "\ud83d\udc76**3-liner for kids**:",
    "oneLiner": "If something is zero, we rememberits row and column.",
    "threeLiner": "We use the firstrow and column assticky notes.",
    "mnemonic": "Later weturn whole rows and columns to zeros.",
    "code": "\ud83e\udde0**Mnemonics**:"
  },
  {
    "title": "-\"Mark for zero\" \u2192 `matrix[i][0] = matrix[0][j]= 0`",
    "difficulty": "- \"Firstrow/col= hint board\"",
    "question": "-\"Wipe after scan\" \u2192 Dochangesonly after scanning",
    "hint": "class Solution:",
    "oneLiner": "def setZeroes(self, matrix: List[List[int]]) -> None:",
    "threeLiner": "ROWS, COLS = len(matrix),len(matrix[0])",
    "mnemonic": "rowZero =False",
    "code": "for r inrange(ROWS):"
  },
  {
    "title": "for cin range(COLS):",
    "difficulty": "if matrix[r][c] ==0:",
    "question": "matrix[0][c] =0",
    "hint": "if r > 0:",
    "oneLiner": "matrix[r][0] = 0",
    "threeLiner": "else:",
    "mnemonic": "rowZero =True",
    "code": "for r inrange(1,ROWS):"
  },
  {
    "title": "for cin range(1, COLS):",
    "difficulty": "if matrix[0][c] ==0 or matrix[r][0] == 0:",
    "question": "matrix[r][c] =0",
    "hint": "if matrix[0][0] ==0:",
    "oneLiner": "for rin range(ROWS):",
    "threeLiner": "matrix[r][0] = 0",
    "mnemonic": "if rowZero:",
    "code": "for cin range(COLS):"
  },
  {
    "title": "matrix[0][c] = 0",
    "difficulty": "---",
    "question": "### **4.Happy Number**",
    "hint": "\u2705**One-liner**:Loop sumof squares of digits until 1 or repeat.\ud83d\udc76**3-liner for kids**:We squareand addeach digit.If we reach 1, it's a happy number!If we loop, it'sstuck andunhappy.\ud83e\udde0**Mnemonics**:- \"Sum ofdigit squares\" \u2192`n = sum(int(c)**2 forc in str(n))`-\"Loop with memory\" \u2192 `seen = set()`-\"Stop at 1 orcycle\" \u2192`whilen != 1 and n notin seen: ...`class Solution:def isHappy(self, n: int) -> bool:slow, fast = n, self.sumOfSquares(n)power = lam = 1while slow != fast:if power == lam:slow = fastpower *= 2lam = 0fast= self.sumOfSquares(fast)lam += 1returnTrue if fast == 1elseFalsedef sumOfSquares(self,n: int)-> int:output =0while n:digit= n % 10digit= digit** 2output += digitn = n// 10returnoutput---### **5.Plus One**\u2705**One-liner**:Add fromthe back, handlecarry, insert ifneeded.\ud83d\udc76**3-liner for kids**:We add 1to the last digit.If it turns into10, we carry the1.If it carries allthe way,we adda new digit!\ud83e\udde0**Mnemonics**:-\"Go backward\"\u2192 `for iin reversed(range(len(digits)))`- \"Breakearly ifno carry\"-\"Insert1 ifoverflow\"\u2192 `digits.insert(0, 1)`",
    "oneLiner": "\u2705**One-liner**:Loop sumof squares of digits until 1 or repeat.\ud83d\udc76**3-liner for kids**:We squareand addeach digit.If we reach 1, it's a happy number!If we loop, it'sstuck andunhappy.\ud83e\udde0**Mnemonics**:- \"Sum ofdigit squares\" \u2192`n = sum(int(c)**2 forc in str(n))`-\"Loop with memory\" \u2192 `seen = set()`-\"Stop at 1 orcycle\" \u2192`whilen != 1 and n notin seen: ...`class Solution:def isHappy(self, n: int) -> bool:slow, fast = n, self.sumOfSquares(n)power = lam = 1while slow != fast:if power == lam:slow = fastpower *= 2lam = 0fast= self.sumOfSquares(fast)lam += 1returnTrue if fast == 1elseFalsedef sumOfSquares(self,n: int)-> int:output =0while n:digit= n % 10digit= digit** 2output += digitn = n// 10returnoutput---### **5.Plus One**\u2705**One-liner**:Add fromthe back, handlecarry, insert ifneeded.\ud83d\udc76**3-liner for kids**:We add 1to the last digit.If it turns into10, we carry the1.If it carries allthe way,we adda new digit!\ud83e\udde0**Mnemonics**:-\"Go backward\"\u2192 `for iin reversed(range(len(digits)))`- \"Breakearly ifno carry\"-\"Insert1 ifoverflow\"\u2192 `digits.insert(0, 1)`",
    "threeLiner": "\u2705**One-liner**:Loop sumof squares of digits until 1 or repeat.\ud83d\udc76**3-liner for kids**:We squareand addeach digit.If we reach 1, it's a happy number!If we loop, it'sstuck andunhappy.\ud83e\udde0**Mnemonics**:- \"Sum ofdigit squares\" \u2192`n = sum(int(c)**2 forc in str(n))`-\"Loop with memory\" \u2192 `seen = set()`-\"Stop at 1 orcycle\" \u2192`whilen != 1 and n notin seen: ...`class Solution:def isHappy(self, n: int) -> bool:slow, fast = n, self.sumOfSquares(n)power = lam = 1while slow != fast:if power == lam:slow = fastpower *= 2lam = 0fast= self.sumOfSquares(fast)lam += 1returnTrue if fast == 1elseFalsedef sumOfSquares(self,n: int)-> int:output =0while n:digit= n % 10digit= digit** 2output += digitn = n// 10returnoutput---### **5.Plus One**\u2705**One-liner**:Add fromthe back, handlecarry, insert ifneeded.\ud83d\udc76**3-liner for kids**:We add 1to the last digit.If it turns into10, we carry the1.If it carries allthe way,we adda new digit!\ud83e\udde0**Mnemonics**:-\"Go backward\"\u2192 `for iin reversed(range(len(digits)))`- \"Breakearly ifno carry\"-\"Insert1 ifoverflow\"\u2192 `digits.insert(0, 1)`",
    "mnemonic": "\u2705**One-liner**:",
    "code": "Loop sumof squares of digits until 1 or repeat."
  },
  {
    "title": "\ud83d\udc76**3-liner for kids**:",
    "difficulty": "We squareand addeach digit.",
    "question": "If we reach 1, it's a happy number!",
    "hint": "If we loop, it'sstuck andunhappy.",
    "oneLiner": "\ud83e\udde0**Mnemonics**:",
    "threeLiner": "- \"Sum ofdigit squares\" \u2192`n = sum(int(c)**2 forc in str(n))`",
    "mnemonic": "-\"Loop with memory\" \u2192 `seen = set()`",
    "code": "-\"Stop at 1 orcycle\" \u2192`whilen != 1 and n notin seen: ...`"
  },
  {
    "title": "class Solution:",
    "difficulty": "def isHappy(self, n: int) -> bool:",
    "question": "slow, fast = n, self.sumOfSquares(n)",
    "hint": "power = lam = 1",
    "oneLiner": "while slow != fast:",
    "threeLiner": "if power == lam:",
    "mnemonic": "slow = fast",
    "code": "power *= 2"
  },
  {
    "title": "lam = 0",
    "difficulty": "fast= self.sumOfSquares(fast)",
    "question": "lam += 1",
    "hint": "returnTrue if fast == 1elseFalse",
    "oneLiner": "def sumOfSquares(self,n: int)-> int:",
    "threeLiner": "output =0",
    "mnemonic": "while n:",
    "code": "digit= n % 10"
  },
  {
    "title": "digit= digit** 2",
    "difficulty": "output += digit",
    "question": "n = n// 10",
    "hint": "returnoutput",
    "oneLiner": "---",
    "threeLiner": "### **5.Plus One**",
    "mnemonic": "\u2705**One-liner**:",
    "code": "Add fromthe back, handlecarry, insert ifneeded."
  },
  {
    "title": "\ud83d\udc76**3-liner for kids**:",
    "difficulty": "We add 1to the last digit.",
    "question": "If it turns into10, we carry the1.",
    "hint": "If it carries allthe way,we adda new digit!",
    "oneLiner": "\ud83e\udde0**Mnemonics**:",
    "threeLiner": "-\"Go backward\"\u2192 `for iin reversed(range(len(digits)))`",
    "mnemonic": "- \"Breakearly ifno carry\"",
    "code": "-\"Insert1 ifoverflow\"\u2192 `digits.insert(0, 1)`"
  },
  {
    "title": "class Solution:def plusOne(self, digits: List[int]) -> List[int]:one = 1i= 0digits.reverse()while one:if i< len(digits):if digits[i] == 9:digits[i] = 0else:digits[i] += 1one = 0else:digits.append(one)one = 0i +=1digits.reverse()return digits---### **6.Pow(x, n)**\u2705**One-liner**:Use divide and conquer toreduce power fast.\ud83d\udc76**3-liner for kids**:Split theprobleminto twosmallerones.Use the result tobuild the big one back.Repeat until tinyand fast.\ud83e\udde0**Mnemonics**:-\"Halveand square\" \u2192 `pow(x *x, n // 2)`-\"Odd nneedsextra x\"\u2192 `x * pow(...) ifn % 2 else pow(...)`- \"Fast power = Binary Exponentiation\"class Solution:def myPow(self, x: float, n: int) -> float:if x == 0:return 0if n == 0:return 1res = 1power = abs(n)while power:if power & 1:res *= xx *=xpower>>= 1",
    "difficulty": "class Solution:def plusOne(self, digits: List[int]) -> List[int]:one = 1i= 0digits.reverse()while one:if i< len(digits):if digits[i] == 9:digits[i] = 0else:digits[i] += 1one = 0else:digits.append(one)one = 0i +=1digits.reverse()return digits---### **6.Pow(x, n)**\u2705**One-liner**:Use divide and conquer toreduce power fast.\ud83d\udc76**3-liner for kids**:Split theprobleminto twosmallerones.Use the result tobuild the big one back.Repeat until tinyand fast.\ud83e\udde0**Mnemonics**:-\"Halveand square\" \u2192 `pow(x *x, n // 2)`-\"Odd nneedsextra x\"\u2192 `x * pow(...) ifn % 2 else pow(...)`- \"Fast power = Binary Exponentiation\"class Solution:def myPow(self, x: float, n: int) -> float:if x == 0:return 0if n == 0:return 1res = 1power = abs(n)while power:if power & 1:res *= xx *=xpower>>= 1",
    "question": "class Solution:def plusOne(self, digits: List[int]) -> List[int]:one = 1i= 0digits.reverse()while one:if i< len(digits):if digits[i] == 9:digits[i] = 0else:digits[i] += 1one = 0else:digits.append(one)one = 0i +=1digits.reverse()return digits---### **6.Pow(x, n)**\u2705**One-liner**:Use divide and conquer toreduce power fast.\ud83d\udc76**3-liner for kids**:Split theprobleminto twosmallerones.Use the result tobuild the big one back.Repeat until tinyand fast.\ud83e\udde0**Mnemonics**:-\"Halveand square\" \u2192 `pow(x *x, n // 2)`-\"Odd nneedsextra x\"\u2192 `x * pow(...) ifn % 2 else pow(...)`- \"Fast power = Binary Exponentiation\"class Solution:def myPow(self, x: float, n: int) -> float:if x == 0:return 0if n == 0:return 1res = 1power = abs(n)while power:if power & 1:res *= xx *=xpower>>= 1",
    "hint": "class Solution:",
    "oneLiner": "def plusOne(self, digits: List[int]) -> List[int]:",
    "threeLiner": "one = 1",
    "mnemonic": "i= 0",
    "code": "digits.reverse()"
  },
  {
    "title": "while one:",
    "difficulty": "if i< len(digits):",
    "question": "if digits[i] == 9:",
    "hint": "digits[i] = 0",
    "oneLiner": "else:",
    "threeLiner": "digits[i] += 1",
    "mnemonic": "one = 0",
    "code": "else:"
  },
  {
    "title": "digits.append(one)",
    "difficulty": "one = 0",
    "question": "i +=1",
    "hint": "digits.reverse()",
    "oneLiner": "return digits",
    "threeLiner": "---",
    "mnemonic": "### **6.Pow(x, n)**",
    "code": "\u2705**One-liner**:"
  },
  {
    "title": "Use divide and conquer toreduce power fast.",
    "difficulty": "\ud83d\udc76**3-liner for kids**:",
    "question": "Split theprobleminto twosmallerones.",
    "hint": "Use the result tobuild the big one back.",
    "oneLiner": "Repeat until tinyand fast.",
    "threeLiner": "\ud83e\udde0**Mnemonics**:",
    "mnemonic": "-\"Halveand square\" \u2192 `pow(x *x, n // 2)`",
    "code": "-\"Odd nneedsextra x\"\u2192 `x * pow(...) ifn % 2 else pow(...)`"
  },
  {
    "title": "- \"Fast power = Binary Exponentiation\"",
    "difficulty": "class Solution:",
    "question": "def myPow(self, x: float, n: int) -> float:",
    "hint": "if x == 0:",
    "oneLiner": "return 0",
    "threeLiner": "if n == 0:",
    "mnemonic": "return 1",
    "code": "res = 1"
  },
  {
    "title": "power = abs(n)",
    "difficulty": "while power:",
    "question": "if power & 1:",
    "hint": "res *= x",
    "oneLiner": "x *=x",
    "threeLiner": "power>>= 1",
    "mnemonic": "return res if n >=0 else1 / res---### **7.MultiplyStrings**\u2705**One-liner**:Simulategrade-school multiplication usingarrays.\ud83d\udc76**3-liner for kids**:We multiply eachdigit like on paper.Add to the rightplace using carry.At the end, remove leadingzeroes.\ud83e\udde0**Mnemonics**:-\"Multiply andplace\" \u2192`res[i +j + 1] +=d1 *d2`-\"Add carry\" \u2192`res[i +j] += res[i + j+ 1] //10`-\"Join digits\"\u2192 `''.join(map(str, res)).lstrip('0')`class Solution:def multiply(self, num1: str,num2: str) -> str:if \"0\" in[num1, num2]:return \"0\"res = [0]* (len(num1) + len(num2))num1, num2 = num1[::-1], num2[::-1]for i1 inrange(len(num1)):for i2 in range(len(num2)):digit = int(num1[i1]) * int(num2[i2])res[i1 + i2] += digitres[i1 + i2 + 1] += res[i1+ i2] //10res[i1 + i2] = res[i1 + i2]% 10res, beg= res[::-1], 0while beg< len(res) and res[beg] == 0:beg += 1res = map(str, res[beg:])return \"\".join(res)---### **8.Detect Squares**\u2705**One-liner**:For eachnew point, checkother 3corners neededto makea square.\ud83d\udc76**3-liner for kids**:When we add a point, we remember it.To countsquares,we try using that point as one corner.We find 3other points that make asquare with it!\ud83e\udde0**Mnemonics**:",
    "code": "return res if n >=0 else1 / res---### **7.MultiplyStrings**\u2705**One-liner**:Simulategrade-school multiplication usingarrays.\ud83d\udc76**3-liner for kids**:We multiply eachdigit like on paper.Add to the rightplace using carry.At the end, remove leadingzeroes.\ud83e\udde0**Mnemonics**:-\"Multiply andplace\" \u2192`res[i +j + 1] +=d1 *d2`-\"Add carry\" \u2192`res[i +j] += res[i + j+ 1] //10`-\"Join digits\"\u2192 `''.join(map(str, res)).lstrip('0')`class Solution:def multiply(self, num1: str,num2: str) -> str:if \"0\" in[num1, num2]:return \"0\"res = [0]* (len(num1) + len(num2))num1, num2 = num1[::-1], num2[::-1]for i1 inrange(len(num1)):for i2 in range(len(num2)):digit = int(num1[i1]) * int(num2[i2])res[i1 + i2] += digitres[i1 + i2 + 1] += res[i1+ i2] //10res[i1 + i2] = res[i1 + i2]% 10res, beg= res[::-1], 0while beg< len(res) and res[beg] == 0:beg += 1res = map(str, res[beg:])return \"\".join(res)---### **8.Detect Squares**\u2705**One-liner**:For eachnew point, checkother 3corners neededto makea square.\ud83d\udc76**3-liner for kids**:When we add a point, we remember it.To countsquares,we try using that point as one corner.We find 3other points that make asquare with it!\ud83e\udde0**Mnemonics**:"
  },
  {
    "title": "return res if n >=0 else1 / res---### **7.MultiplyStrings**\u2705**One-liner**:Simulategrade-school multiplication usingarrays.\ud83d\udc76**3-liner for kids**:We multiply eachdigit like on paper.Add to the rightplace using carry.At the end, remove leadingzeroes.\ud83e\udde0**Mnemonics**:-\"Multiply andplace\" \u2192`res[i +j + 1] +=d1 *d2`-\"Add carry\" \u2192`res[i +j] += res[i + j+ 1] //10`-\"Join digits\"\u2192 `''.join(map(str, res)).lstrip('0')`class Solution:def multiply(self, num1: str,num2: str) -> str:if \"0\" in[num1, num2]:return \"0\"res = [0]* (len(num1) + len(num2))num1, num2 = num1[::-1], num2[::-1]for i1 inrange(len(num1)):for i2 in range(len(num2)):digit = int(num1[i1]) * int(num2[i2])res[i1 + i2] += digitres[i1 + i2 + 1] += res[i1+ i2] //10res[i1 + i2] = res[i1 + i2]% 10res, beg= res[::-1], 0while beg< len(res) and res[beg] == 0:beg += 1res = map(str, res[beg:])return \"\".join(res)---### **8.Detect Squares**\u2705**One-liner**:For eachnew point, checkother 3corners neededto makea square.\ud83d\udc76**3-liner for kids**:When we add a point, we remember it.To countsquares,we try using that point as one corner.We find 3other points that make asquare with it!\ud83e\udde0**Mnemonics**:",
    "difficulty": "return res if n >=0 else1 / res",
    "question": "---",
    "hint": "### **7.MultiplyStrings**",
    "oneLiner": "\u2705**One-liner**:",
    "threeLiner": "Simulategrade-school multiplication usingarrays.",
    "mnemonic": "\ud83d\udc76**3-liner for kids**:",
    "code": "We multiply eachdigit like on paper."
  },
  {
    "title": "Add to the rightplace using carry.",
    "difficulty": "At the end, remove leadingzeroes.",
    "question": "\ud83e\udde0**Mnemonics**:",
    "hint": "-\"Multiply andplace\" \u2192`res[i +j + 1] +=d1 *d2`",
    "oneLiner": "-\"Add carry\" \u2192`res[i +j] += res[i + j+ 1] //10`",
    "threeLiner": "-\"Join digits\"\u2192 `''.join(map(str, res)).lstrip('0')`",
    "mnemonic": "class Solution:",
    "code": "def multiply(self, num1: str,num2: str) -> str:"
  },
  {
    "title": "if \"0\" in[num1, num2]:",
    "difficulty": "return \"0\"",
    "question": "res = [0]* (len(num1) + len(num2))",
    "hint": "num1, num2 = num1[::-1], num2[::-1]",
    "oneLiner": "for i1 inrange(len(num1)):",
    "threeLiner": "for i2 in range(len(num2)):",
    "mnemonic": "digit = int(num1[i1]) * int(num2[i2])",
    "code": "res[i1 + i2] += digit"
  },
  {
    "title": "res[i1 + i2 + 1] += res[i1+ i2] //10",
    "difficulty": "res[i1 + i2] = res[i1 + i2]% 10",
    "question": "res, beg= res[::-1], 0",
    "hint": "while beg< len(res) and res[beg] == 0:",
    "oneLiner": "beg += 1",
    "threeLiner": "res = map(str, res[beg:])",
    "mnemonic": "return \"\".join(res)",
    "code": "---"
  },
  {
    "title": "### **8.Detect Squares**",
    "difficulty": "\u2705**One-liner**:",
    "question": "For eachnew point, checkother 3corners neededto makea square.",
    "hint": "\ud83d\udc76**3-liner for kids**:",
    "oneLiner": "When we add a point, we remember it.",
    "threeLiner": "To countsquares,we try using that point as one corner.",
    "mnemonic": "We find 3other points that make asquare with it!",
    "code": "\ud83e\udde0**Mnemonics**:"
  },
  {
    "title": "-\"Storecountof all points\" \u2192`self.points = defaultdict(int)`-\"Same y= square start\" \u2192 Loopall points withsame y- \"Checkdistance& match\"\u2192 `count += self.points[...] *...`---class CountSquares:def __init__(self):self.ptsCount = defaultdict(lambda:defaultdict(int))def add(self,point: List[int]) -> None:self.ptsCount[point[0]][point[1]] += 1def count(self, point:List[int]) -> int:res = 0x1, y1 =pointfor y2 inself.ptsCount[x1]:side= y2 -y1if side == 0:continuex3, x4 = x1 +side, x1- sideres += (self.ptsCount[x1][y2] *self.ptsCount[x3][y1]*self.ptsCount[x3][y2])res += (self.ptsCount[x1][y2] *self.ptsCount[x4][y1]*self.ptsCount[x4][y2])return res",
    "difficulty": "-\"Storecountof all points\" \u2192`self.points = defaultdict(int)`-\"Same y= square start\" \u2192 Loopall points withsame y- \"Checkdistance& match\"\u2192 `count += self.points[...] *...`---class CountSquares:def __init__(self):self.ptsCount = defaultdict(lambda:defaultdict(int))def add(self,point: List[int]) -> None:self.ptsCount[point[0]][point[1]] += 1def count(self, point:List[int]) -> int:res = 0x1, y1 =pointfor y2 inself.ptsCount[x1]:side= y2 -y1if side == 0:continuex3, x4 = x1 +side, x1- sideres += (self.ptsCount[x1][y2] *self.ptsCount[x3][y1]*self.ptsCount[x3][y2])res += (self.ptsCount[x1][y2] *self.ptsCount[x4][y1]*self.ptsCount[x4][y2])return res",
    "question": "-\"Storecountof all points\" \u2192`self.points = defaultdict(int)`-\"Same y= square start\" \u2192 Loopall points withsame y- \"Checkdistance& match\"\u2192 `count += self.points[...] *...`---class CountSquares:def __init__(self):self.ptsCount = defaultdict(lambda:defaultdict(int))def add(self,point: List[int]) -> None:self.ptsCount[point[0]][point[1]] += 1def count(self, point:List[int]) -> int:res = 0x1, y1 =pointfor y2 inself.ptsCount[x1]:side= y2 -y1if side == 0:continuex3, x4 = x1 +side, x1- sideres += (self.ptsCount[x1][y2] *self.ptsCount[x3][y1]*self.ptsCount[x3][y2])res += (self.ptsCount[x1][y2] *self.ptsCount[x4][y1]*self.ptsCount[x4][y2])return res",
    "hint": "-\"Storecountof all points\" \u2192`self.points = defaultdict(int)`",
    "oneLiner": "-\"Same y= square start\" \u2192 Loopall points withsame y",
    "threeLiner": "- \"Checkdistance& match\"\u2192 `count += self.points[...] *...`",
    "mnemonic": "---",
    "code": "class CountSquares:"
  },
  {
    "title": "def __init__(self):",
    "difficulty": "self.ptsCount = defaultdict(lambda:defaultdict(int))",
    "question": "def add(self,point: List[int]) -> None:",
    "hint": "self.ptsCount[point[0]][point[1]] += 1",
    "oneLiner": "def count(self, point:List[int]) -> int:",
    "threeLiner": "res = 0",
    "mnemonic": "x1, y1 =point",
    "code": "for y2 inself.ptsCount[x1]:"
  },
  {
    "title": "side= y2 -y1",
    "difficulty": "if side == 0:",
    "question": "continue",
    "hint": "x3, x4 = x1 +side, x1- side",
    "oneLiner": "res += (self.ptsCount[x1][y2] *self.ptsCount[x3][y1]*",
    "threeLiner": "self.ptsCount[x3][y2])",
    "mnemonic": "res += (self.ptsCount[x1][y2] *self.ptsCount[x4][y1]*",
    "code": "self.ptsCount[x4][y2])"
  }
];
export default mathgeometry;