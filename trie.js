const trie = [
  {
    "title": "Here arethe optimized Python implementations for:1. **Implement Trie (Prefix Tree)**2. **Design Add and SearchWords Data Structure**3. **WordSearchII**Each comes with time and space complexity analysis.---### **1.Implement Trie (Prefix Tree)**```pythonclass TrieNode:def __init__(self):self.children = {}self.isWord = Falseclass Trie:def __init__(self):self.root= TrieNode()def insert(self, word):node = self.rootfor ch inword:if chnot in node.children:node.children[ch]= TrieNode()node= node.children[ch]node.isWord = Truedef search(self, word):node = self._find(word)return node is notNone and node.isWorddef startsWith(self, prefix):return self._find(prefix)is not Nonedef _find(self, word):node = self.rootfor ch inword:if chnot in node.children:return Nonenode= node.children[ch]return node```**Time Complexity:**- `insert`: O(L)- `search`: O(L)- `startsWith`: O(L)Where **L** is the lengthof the word.**Space Complexity:** O(N)Where **N** is the total number ofcharacters inserted.### 1. **Implement Trie (Prefix Tree)****\u2705One-liner:**Use a nested dictionary where eachnode isa character map, endingwith aspecial end marker.**\ud83d\udc763-liner forkids:**We builda tree where each letterhas its own branch.We followeach letter stepby stepwhen adding aword.A specialsymboltells uswhen a word ends.**\ud83e\udde0Mnemonics:**-\"Startroot\"\u2192 `self.root = {}`-\"Insertcharby char\"\u2192 `node= node.setdefault(char,{})`-\"Mark end ofword\" \u2192 `node['#'] = True`---### **2.Design Add and Search Words Data Structure**```pythonclass WordDictionary:def __init__(self):self.root= {}def addWord(self, word):node = self.rootfor ch inword:node= node.setdefault(ch, {})node['#']= True# End ofworddef search(self, word):def dfs(node, i):if i== len(word):return '#'in nodeif word[i] == '.':return any(dfs(child, i + 1) for child innode ifchild!= '#')return word[i]in nodeand dfs(node[word[i]],i + 1)return dfs(self.root, 0)```**Time Complexity:**- `addWord`: O(L)- `search`: Worstcase O(26^L) ifall charactersare `.`Where **L** is the lengthof the word.**Space Complexity:** O(N)Where **N** is the total number ofcharacters inserted.### 2. **Design Add and Search Words Data Structure****\u2705One-liner:**ExtendTrie with DFS tohandle wildcards (`.`)during search.**\ud83d\udc763-liner forkids:**We storewords ina special tree (Trie).When searching, we can use`.` tomean anyletter.We checkall possible paths for matches.**\ud83e\udde0Mnemonics:**- \"Dot means explore\" \u2192 `if char == '.': try allchildren`-\"End match\" \u2192`if at end and '#' in node: return True`-\"DFS search\"\u2192 `searchHelper(word, index, node)`---### **3.Word Search II**```pythonclass TrieNode:def __init__(self):self.children = {}self.word= None# Storeword at the endclass Solution:def findWords(self, board, words):root = TrieNode()#Build Triefor wordin words:node= rootfor ch in word:if ch notin node.children:node.children[ch] = TrieNode()node = node.children[ch]node.word = wordres = []rows, cols = len(board), len(board[0])def dfs(r, c, node):char= board[r][c]if char not innode.children:returnnxt_node = node.children[char]if nxt_node.word:res.append(nxt_node.word)nxt_node.word = None  # Avoid duplicatesboard[r][c] ='#'for dr, dc in[(-1,0),(1,0), (0,-1), (0,1)]:nr, nc = r+ dr, c+ dcif 0 <= nr< rowsand 0 <=nc < cols andboard[nr][nc] !='#':dfs(nr,nc, nxt_node)board[r][c] =charfor r inrange(rows):for cin range(cols):dfs(r, c,root)return res```**Time Complexity:**- Building Trie:O(W * L)- DFS Search: O(M* N * 4^L)- WhereM \u00d7 Nis boardsize, Lis max word length, Wis numberof words**Space Complexity:** O(W* L) forTrie + O(L) recursiondepth### 3. **Word Search II****\u2705One-liner:**Build a Trie of words, thenDFS through board to match prefixes.**\ud83d\udc763-liner forkids:**We put all wordsinto a search tree (Trie).Then we walk around the board letter by letter.If we match a word path, we add itto our answers.**\ud83e\udde0Mnemonics:**- \"BuildTrie first\" \u2192 `for word in words:insert(word)`-\"Explore neighbors\" \u2192`dfs(i,j, node)`-\"Foundword\"\u2192 `if '#'in node: add toresult`---",
    "difficulty": "Here arethe optimized Python implementations for:1. **Implement Trie (Prefix Tree)**2. **Design Add and SearchWords Data Structure**3. **WordSearchII**Each comes with time and space complexity analysis.---### **1.Implement Trie (Prefix Tree)**```pythonclass TrieNode:def __init__(self):self.children = {}self.isWord = Falseclass Trie:def __init__(self):self.root= TrieNode()def insert(self, word):node = self.rootfor ch inword:if chnot in node.children:node.children[ch]= TrieNode()node= node.children[ch]node.isWord = Truedef search(self, word):node = self._find(word)return node is notNone and node.isWorddef startsWith(self, prefix):return self._find(prefix)is not Nonedef _find(self, word):node = self.rootfor ch inword:if chnot in node.children:return Nonenode= node.children[ch]return node```**Time Complexity:**- `insert`: O(L)- `search`: O(L)- `startsWith`: O(L)Where **L** is the lengthof the word.**Space Complexity:** O(N)Where **N** is the total number ofcharacters inserted.",
    "question": "Here arethe optimized Python implementations for:1. **Implement Trie (Prefix Tree)**2. **Design Add and SearchWords Data Structure**3. **WordSearchII**Each comes with time and space complexity analysis.---### **1.Implement Trie (Prefix Tree)**```pythonclass TrieNode:def __init__(self):self.children = {}self.isWord = Falseclass Trie:def __init__(self):self.root= TrieNode()def insert(self, word):node = self.rootfor ch inword:if chnot in node.children:node.children[ch]= TrieNode()node= node.children[ch]node.isWord = Truedef search(self, word):node = self._find(word)return node is notNone and node.isWorddef startsWith(self, prefix):return self._find(prefix)is not Nonedef _find(self, word):node = self.rootfor ch inword:if chnot in node.children:return Nonenode= node.children[ch]return node```**Time Complexity:**- `insert`: O(L)- `search`: O(L)- `startsWith`: O(L)Where **L** is the lengthof the word.**Space Complexity:** O(N)Where **N** is the total number ofcharacters inserted.",
    "hint": "Here arethe optimized Python implementations for:1. **Implement Trie (Prefix Tree)**2. **Design Add and SearchWords Data Structure**3. **WordSearchII**Each comes with time and space complexity analysis.---### **1.Implement Trie (Prefix Tree)**```pythonclass TrieNode:def __init__(self):self.children = {}self.isWord = Falseclass Trie:def __init__(self):self.root= TrieNode()def insert(self, word):node = self.rootfor ch inword:if chnot in node.children:node.children[ch]= TrieNode()node= node.children[ch]node.isWord = Truedef search(self, word):node = self._find(word)return node is notNone and node.isWorddef startsWith(self, prefix):return self._find(prefix)is not Nonedef _find(self, word):node = self.rootfor ch inword:if chnot in node.children:return Nonenode= node.children[ch]return node```**Time Complexity:**- `insert`: O(L)- `search`: O(L)- `startsWith`: O(L)Where **L** is the lengthof the word.**Space Complexity:** O(N)Where **N** is the total number ofcharacters inserted.",
    "oneLiner": "Here arethe optimized Python implementations for:",
    "threeLiner": "1. **Implement Trie (Prefix Tree)**",
    "mnemonic": "2. **Design Add and SearchWords Data Structure**",
    "code": "3. **WordSearchII**"
  },
  {
    "title": "Each comes with time and space complexity analysis.",
    "difficulty": "---",
    "question": "### **1.Implement Trie (Prefix Tree)**",
    "hint": "```python",
    "oneLiner": "class TrieNode:",
    "threeLiner": "def __init__(self):",
    "mnemonic": "self.children = {}",
    "code": "self.isWord = False"
  },
  {
    "title": "class Trie:",
    "difficulty": "def __init__(self):",
    "question": "self.root= TrieNode()",
    "hint": "def insert(self, word):",
    "oneLiner": "node = self.root",
    "threeLiner": "for ch inword:",
    "mnemonic": "if chnot in node.children:",
    "code": "node.children[ch]= TrieNode()"
  },
  {
    "title": "node= node.children[ch]",
    "difficulty": "node.isWord = True",
    "question": "def search(self, word):",
    "hint": "node = self._find(word)",
    "oneLiner": "return node is notNone and node.isWord",
    "threeLiner": "def startsWith(self, prefix):",
    "mnemonic": "return self._find(prefix)is not None",
    "code": "def _find(self, word):"
  },
  {
    "title": "node = self.root",
    "difficulty": "for ch inword:",
    "question": "if chnot in node.children:",
    "hint": "return None",
    "oneLiner": "node= node.children[ch]",
    "threeLiner": "return node",
    "mnemonic": "```",
    "code": "**Time Complexity:**"
  },
  {
    "title": "- `insert`: O(L)",
    "difficulty": "- `search`: O(L)",
    "question": "- `startsWith`: O(L)",
    "hint": "Where **L** is the lengthof the word.",
    "oneLiner": "**Space Complexity:** O(N)",
    "threeLiner": "Where **N** is the total number ofcharacters inserted.",
    "mnemonic": "### 1. **Implement Trie (Prefix Tree)****\u2705One-liner:**Use a nested dictionary where eachnode isa character map, endingwith aspecial end marker.**\ud83d\udc763-liner forkids:**We builda tree where each letterhas its own branch.We followeach letter stepby stepwhen adding aword.A specialsymboltells uswhen a word ends.**\ud83e\udde0Mnemonics:**-\"Startroot\"\u2192 `self.root = {}`-\"Insertcharby char\"\u2192 `node= node.setdefault(char,{})`-\"Mark end ofword\" \u2192 `node['#'] = True`---### **2.Design Add and Search Words Data Structure**```pythonclass WordDictionary:def __init__(self):self.root= {}def addWord(self, word):node = self.rootfor ch inword:node= node.setdefault(ch, {})node['#']= True# End ofworddef search(self, word):def dfs(node, i):if i== len(word):return '#'in nodeif word[i] == '.':return any(dfs(child, i + 1) for child innode ifchild!= '#')return word[i]in nodeand dfs(node[word[i]],i + 1)return dfs(self.root, 0)```**Time Complexity:**- `addWord`: O(L)- `search`: Worstcase O(26^L) ifall charactersare `.`Where **L** is the lengthof the word.**Space Complexity:** O(N)Where **N** is the total number ofcharacters inserted.### 2. **Design Add and Search Words Data Structure**",
    "code": "### 1. **Implement Trie (Prefix Tree)****\u2705One-liner:**Use a nested dictionary where eachnode isa character map, endingwith aspecial end marker.**\ud83d\udc763-liner forkids:**We builda tree where each letterhas its own branch.We followeach letter stepby stepwhen adding aword.A specialsymboltells uswhen a word ends.**\ud83e\udde0Mnemonics:**-\"Startroot\"\u2192 `self.root = {}`-\"Insertcharby char\"\u2192 `node= node.setdefault(char,{})`-\"Mark end ofword\" \u2192 `node['#'] = True`---### **2.Design Add and Search Words Data Structure**```pythonclass WordDictionary:def __init__(self):self.root= {}def addWord(self, word):node = self.rootfor ch inword:node= node.setdefault(ch, {})node['#']= True# End ofworddef search(self, word):def dfs(node, i):if i== len(word):return '#'in nodeif word[i] == '.':return any(dfs(child, i + 1) for child innode ifchild!= '#')return word[i]in nodeand dfs(node[word[i]],i + 1)return dfs(self.root, 0)```**Time Complexity:**- `addWord`: O(L)- `search`: Worstcase O(26^L) ifall charactersare `.`Where **L** is the lengthof the word.**Space Complexity:** O(N)Where **N** is the total number ofcharacters inserted.### 2. **Design Add and Search Words Data Structure**"
  },
  {
    "title": "### 1. **Implement Trie (Prefix Tree)****\u2705One-liner:**Use a nested dictionary where eachnode isa character map, endingwith aspecial end marker.**\ud83d\udc763-liner forkids:**We builda tree where each letterhas its own branch.We followeach letter stepby stepwhen adding aword.A specialsymboltells uswhen a word ends.**\ud83e\udde0Mnemonics:**-\"Startroot\"\u2192 `self.root = {}`-\"Insertcharby char\"\u2192 `node= node.setdefault(char,{})`-\"Mark end ofword\" \u2192 `node['#'] = True`---### **2.Design Add and Search Words Data Structure**```pythonclass WordDictionary:def __init__(self):self.root= {}def addWord(self, word):node = self.rootfor ch inword:node= node.setdefault(ch, {})node['#']= True# End ofworddef search(self, word):def dfs(node, i):if i== len(word):return '#'in nodeif word[i] == '.':return any(dfs(child, i + 1) for child innode ifchild!= '#')return word[i]in nodeand dfs(node[word[i]],i + 1)return dfs(self.root, 0)```**Time Complexity:**- `addWord`: O(L)- `search`: Worstcase O(26^L) ifall charactersare `.`Where **L** is the lengthof the word.**Space Complexity:** O(N)Where **N** is the total number ofcharacters inserted.### 2. **Design Add and Search Words Data Structure**",
    "difficulty": "### 1. **Implement Trie (Prefix Tree)**",
    "question": "**\u2705One-liner:**",
    "hint": "Use a nested dictionary where eachnode isa character map, endingwith a",
    "oneLiner": "special end marker.",
    "threeLiner": "**\ud83d\udc763-liner forkids:**",
    "mnemonic": "We builda tree where each letterhas its own branch.",
    "code": "We followeach letter stepby stepwhen adding aword."
  },
  {
    "title": "A specialsymboltells uswhen a word ends.",
    "difficulty": "**\ud83e\udde0Mnemonics:**",
    "question": "-\"Startroot\"\u2192 `self.root = {}`",
    "hint": "-\"Insertcharby char\"\u2192 `node= node.setdefault(char,{})`",
    "oneLiner": "-\"Mark end ofword\" \u2192 `node['#'] = True`",
    "threeLiner": "---",
    "mnemonic": "### **2.Design Add and Search Words Data Structure**",
    "code": "```python"
  },
  {
    "title": "class WordDictionary:",
    "difficulty": "def __init__(self):",
    "question": "self.root= {}",
    "hint": "def addWord(self, word):",
    "oneLiner": "node = self.root",
    "threeLiner": "for ch inword:",
    "mnemonic": "node= node.setdefault(ch, {})",
    "code": "node['#']= True# End ofword"
  },
  {
    "title": "def search(self, word):",
    "difficulty": "def dfs(node, i):",
    "question": "if i== len(word):",
    "hint": "return '#'in node",
    "oneLiner": "if word[i] == '.':",
    "threeLiner": "return any(dfs(child, i + 1) for child innode ifchild",
    "mnemonic": "!= '#')",
    "code": "return word[i]in nodeand dfs(node[word[i]],i + 1)"
  },
  {
    "title": "return dfs(self.root, 0)",
    "difficulty": "```",
    "question": "**Time Complexity:**",
    "hint": "- `addWord`: O(L)",
    "oneLiner": "- `search`: Worstcase O(26^L) ifall charactersare `.`",
    "threeLiner": "Where **L** is the lengthof the word.",
    "mnemonic": "**Space Complexity:** O(N)",
    "code": "Where **N** is the total number ofcharacters inserted."
  },
  {
    "title": "### 2. **Design Add and Search Words Data Structure**",
    "difficulty": "**\u2705One-liner:**ExtendTrie with DFS tohandle wildcards (`.`)during search.**\ud83d\udc763-liner forkids:**We storewords ina special tree (Trie).When searching, we can use`.` tomean anyletter.We checkall possible paths for matches.**\ud83e\udde0Mnemonics:**- \"Dot means explore\" \u2192 `if char == '.': try allchildren`-\"End match\" \u2192`if at end and '#' in node: return True`-\"DFS search\"\u2192 `searchHelper(word, index, node)`---### **3.Word Search II**```pythonclass TrieNode:def __init__(self):self.children = {}self.word= None# Storeword at the endclass Solution:def findWords(self, board, words):root = TrieNode()#Build Triefor wordin words:node= rootfor ch in word:if ch notin node.children:node.children[ch] = TrieNode()node = node.children[ch]node.word = wordres = []rows, cols = len(board), len(board[0])def dfs(r, c, node):char= board[r][c]if char not innode.children:returnnxt_node = node.children[char]if nxt_node.word:res.append(nxt_node.word)nxt_node.word = None  # Avoid duplicatesboard[r][c] ='#'for dr, dc in[(-1,0),(1,0), (0,-1), (0,1)]:nr, nc = r+ dr, c+ dcif 0 <= nr< rowsand 0 <=nc < cols andboard[nr][nc] !='#':",
    "question": "**\u2705One-liner:**ExtendTrie with DFS tohandle wildcards (`.`)during search.**\ud83d\udc763-liner forkids:**We storewords ina special tree (Trie).When searching, we can use`.` tomean anyletter.We checkall possible paths for matches.**\ud83e\udde0Mnemonics:**- \"Dot means explore\" \u2192 `if char == '.': try allchildren`-\"End match\" \u2192`if at end and '#' in node: return True`-\"DFS search\"\u2192 `searchHelper(word, index, node)`---### **3.Word Search II**```pythonclass TrieNode:def __init__(self):self.children = {}self.word= None# Storeword at the endclass Solution:def findWords(self, board, words):root = TrieNode()#Build Triefor wordin words:node= rootfor ch in word:if ch notin node.children:node.children[ch] = TrieNode()node = node.children[ch]node.word = wordres = []rows, cols = len(board), len(board[0])def dfs(r, c, node):char= board[r][c]if char not innode.children:returnnxt_node = node.children[char]if nxt_node.word:res.append(nxt_node.word)nxt_node.word = None  # Avoid duplicatesboard[r][c] ='#'for dr, dc in[(-1,0),(1,0), (0,-1), (0,1)]:nr, nc = r+ dr, c+ dcif 0 <= nr< rowsand 0 <=nc < cols andboard[nr][nc] !='#':",
    "hint": "**\u2705One-liner:**ExtendTrie with DFS tohandle wildcards (`.`)during search.**\ud83d\udc763-liner forkids:**We storewords ina special tree (Trie).When searching, we can use`.` tomean anyletter.We checkall possible paths for matches.**\ud83e\udde0Mnemonics:**- \"Dot means explore\" \u2192 `if char == '.': try allchildren`-\"End match\" \u2192`if at end and '#' in node: return True`-\"DFS search\"\u2192 `searchHelper(word, index, node)`---### **3.Word Search II**```pythonclass TrieNode:def __init__(self):self.children = {}self.word= None# Storeword at the endclass Solution:def findWords(self, board, words):root = TrieNode()#Build Triefor wordin words:node= rootfor ch in word:if ch notin node.children:node.children[ch] = TrieNode()node = node.children[ch]node.word = wordres = []rows, cols = len(board), len(board[0])def dfs(r, c, node):char= board[r][c]if char not innode.children:returnnxt_node = node.children[char]if nxt_node.word:res.append(nxt_node.word)nxt_node.word = None  # Avoid duplicatesboard[r][c] ='#'for dr, dc in[(-1,0),(1,0), (0,-1), (0,1)]:nr, nc = r+ dr, c+ dcif 0 <= nr< rowsand 0 <=nc < cols andboard[nr][nc] !='#':",
    "oneLiner": "**\u2705One-liner:**",
    "threeLiner": "ExtendTrie with DFS tohandle wildcards (`.`)during search.",
    "mnemonic": "**\ud83d\udc763-liner forkids:**",
    "code": "We storewords ina special tree (Trie)."
  },
  {
    "title": "When searching, we can use`.` tomean anyletter.",
    "difficulty": "We checkall possible paths for matches.",
    "question": "**\ud83e\udde0Mnemonics:**",
    "hint": "- \"Dot means explore\" \u2192 `if char == '.': try allchildren`",
    "oneLiner": "-\"End match\" \u2192`if at end and '#' in node: return True`",
    "threeLiner": "-\"DFS search\"\u2192 `searchHelper(word, index, node)`",
    "mnemonic": "---",
    "code": "### **3.Word Search II**"
  },
  {
    "title": "```python",
    "difficulty": "class TrieNode:",
    "question": "def __init__(self):",
    "hint": "self.children = {}",
    "oneLiner": "self.word= None# Storeword at the end",
    "threeLiner": "class Solution:",
    "mnemonic": "def findWords(self, board, words):",
    "code": "root = TrieNode()"
  },
  {
    "title": "#Build Trie",
    "difficulty": "for wordin words:",
    "question": "node= root",
    "hint": "for ch in word:",
    "oneLiner": "if ch notin node.children:",
    "threeLiner": "node.children[ch] = TrieNode()",
    "mnemonic": "node = node.children[ch]",
    "code": "node.word = word"
  },
  {
    "title": "res = []",
    "difficulty": "rows, cols = len(board), len(board[0])",
    "question": "def dfs(r, c, node):",
    "hint": "char= board[r][c]",
    "oneLiner": "if char not innode.children:",
    "threeLiner": "return",
    "mnemonic": "nxt_node = node.children[char]",
    "code": "if nxt_node.word:"
  },
  {
    "title": "res.append(nxt_node.word)",
    "difficulty": "nxt_node.word = None  # Avoid duplicates",
    "question": "board[r][c] ='#'",
    "hint": "for dr, dc in[(-1,0),(1,0), (0,-1), (0,1)]:",
    "oneLiner": "nr, nc = r+ dr, c+ dc",
    "threeLiner": "if 0 <= nr< rowsand 0 <=nc < cols andboard[nr][nc] !=",
    "mnemonic": "'#':",
    "code": "dfs(nr,nc, nxt_node)board[r][c] =charfor r inrange(rows):for cin range(cols):dfs(r, c,root)return res```**Time Complexity:**- Building Trie:O(W * L)- DFS Search: O(M* N * 4^L)- WhereM \u00d7 Nis boardsize, Lis max word length, Wis numberof words**Space Complexity:** O(W* L) forTrie + O(L) recursiondepth### 3. **Word Search II****\u2705One-liner:**Build a Trie of words, thenDFS through board to match prefixes.**\ud83d\udc763-liner forkids:**We put all wordsinto a search tree (Trie).Then we walk around the board letter by letter.If we match a word path, we add itto our answers.**\ud83e\udde0Mnemonics:**- \"BuildTrie first\" \u2192 `for word in words:insert(word)`-\"Explore neighbors\" \u2192`dfs(i,j, node)`-\"Foundword\"\u2192 `if '#'in node: add toresult`---"
  },
  {
    "title": "dfs(nr,nc, nxt_node)board[r][c] =charfor r inrange(rows):for cin range(cols):dfs(r, c,root)return res```**Time Complexity:**- Building Trie:O(W * L)- DFS Search: O(M* N * 4^L)- WhereM \u00d7 Nis boardsize, Lis max word length, Wis numberof words**Space Complexity:** O(W* L) forTrie + O(L) recursiondepth### 3. **Word Search II****\u2705One-liner:**Build a Trie of words, thenDFS through board to match prefixes.**\ud83d\udc763-liner forkids:**We put all wordsinto a search tree (Trie).Then we walk around the board letter by letter.If we match a word path, we add itto our answers.**\ud83e\udde0Mnemonics:**- \"BuildTrie first\" \u2192 `for word in words:insert(word)`-\"Explore neighbors\" \u2192`dfs(i,j, node)`-\"Foundword\"\u2192 `if '#'in node: add toresult`---",
    "difficulty": "dfs(nr,nc, nxt_node)board[r][c] =charfor r inrange(rows):for cin range(cols):dfs(r, c,root)return res```**Time Complexity:**- Building Trie:O(W * L)- DFS Search: O(M* N * 4^L)- WhereM \u00d7 Nis boardsize, Lis max word length, Wis numberof words**Space Complexity:** O(W* L) forTrie + O(L) recursiondepth### 3. **Word Search II****\u2705One-liner:**Build a Trie of words, thenDFS through board to match prefixes.**\ud83d\udc763-liner forkids:**We put all wordsinto a search tree (Trie).Then we walk around the board letter by letter.If we match a word path, we add itto our answers.**\ud83e\udde0Mnemonics:**- \"BuildTrie first\" \u2192 `for word in words:insert(word)`-\"Explore neighbors\" \u2192`dfs(i,j, node)`-\"Foundword\"\u2192 `if '#'in node: add toresult`---",
    "question": "dfs(nr,nc, nxt_node)",
    "hint": "board[r][c] =char",
    "oneLiner": "for r inrange(rows):",
    "threeLiner": "for cin range(cols):",
    "mnemonic": "dfs(r, c,root)",
    "code": "return res"
  },
  {
    "title": "```",
    "difficulty": "**Time Complexity:**",
    "question": "- Building Trie:O(W * L)",
    "hint": "- DFS Search: O(M* N * 4^L)",
    "oneLiner": "- WhereM \u00d7 Nis boardsize, Lis max word length, Wis numberof words",
    "threeLiner": "**Space Complexity:** O(W* L) forTrie + O(L) recursiondepth",
    "mnemonic": "### 3. **Word Search II**",
    "code": "**\u2705One-liner:**"
  },
  {
    "title": "Build a Trie of words, thenDFS through board to match prefixes.",
    "difficulty": "**\ud83d\udc763-liner forkids:**",
    "question": "We put all wordsinto a search tree (Trie).",
    "hint": "Then we walk around the board letter by letter.",
    "oneLiner": "If we match a word path, we add itto our answers.",
    "threeLiner": "**\ud83e\udde0Mnemonics:**",
    "mnemonic": "- \"BuildTrie first\" \u2192 `for word in words:insert(word)`",
    "code": "-\"Explore neighbors\" \u2192`dfs(i,j, node)`"
  }
];
export default trie;