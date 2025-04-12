const trees = [
  {
    "title": "Here areoptimized Pythonsolutions for each problem, along with theirtime andspace complexity:---### **1.Invert Binary Tree**```pythonclass TreeNode:def __init__(self, val=0, left=None, right=None):self.val= valself.left = leftself.right = rightdef invertTree(root):if not root:return Noneroot.left, root.right= invertTree(root.right), invertTree(root.left)return root```**Time Complexity:** O(N)**Space Complexity:** O(N) (for recursion stack inworst case)1. InvertBinaryTree\u2705One-liner:Swap leftand right at every noderecursively.\ud83d\udc763-linerfor kids:Flip every branchleft-to-right.Do the same for children too.Keep flipping till the bottom!\ud83e\udde0Mnemonics:\"Flip subtrees\" \u2192root.left, root.right = invertTree(root.right),invertTree(root.left)\"Base case\" \u2192 ifnot root:returnNone\"Return flipped root\" \u2192 return root---### **2.MaximumDepth ofBinary Tree**```pythondef maxDepth(root):if not root:return 0return 1 + max(maxDepth(root.left), maxDepth(root.right))```**Time Complexity:** O(N)**Space Complexity:** O(N)(worstcase, skewed tree)2. Max Depth of Binary Tree\u2705One-liner:Recursively get max depthfrom left and right, add one.\ud83d\udc763-linerfor kids:Go down both leftand right.Find thedeeper one.Add yourself to the count!\ud83e\udde0Mnemonics:\"Check both sides\" \u2192 maxDepth(root.left), maxDepth(root.right)\"Add 1 for current\" \u2192 1 +max(...)\"Stop atnull\" \u2192if not root: return 0---### **3.Diameterof Binary Tree**```pythondef diameterOfBinaryTree(root):diameter = 0def depth(node):nonlocaldiameterif not node:return 0left = depth(node.left)right = depth(node.right)diameter= max(diameter, left + right)return 1+ max(left, right)depth(root)return diameter```**Time Complexity:** O(N)**Space Complexity:** O(N)3. Diameter of Binary Tree\u2705One-liner:Track thelongestpath across anynode viaDFS.\ud83d\udc763-linerfor kids:Find longest pathbetweenany twonodes.At everynode, try left +right path.Update the best as you go.\ud83e\udde0Mnemonics:\"DFS returns depth\" \u2192 return 1 + max(left,right)\"Update diameter\"\u2192 diameter = max(diameter, left+ right)\"Use nonlocal\" \u2192nonlocaldiameter---### **4.BalancedBinary Tree**```pythondef isBalanced(root):def dfs(node):if not node:return 0left = dfs(node.left)right = dfs(node.right)if left == -1 or right ==-1 or abs(left - right) > 1:return -1return 1+ max(left, right)return dfs(root) != -1```**Time Complexity:** O(N)**Space Complexity:** O(N)4. Balanced Binary Tree\u2705One-liner:Use post-order DFS and return -1 if imbalance is detected.\ud83d\udc763-linerfor kids:Check ifboth sides are even.If one side too tall, markbroken.Keep bubbling -1up the tree!\ud83e\udde0Mnemonics:\"Check balance\" \u2192if abs(left- right) > 1:return -1\"Bubble imbalance\" \u2192 if left ==-1or right== -1: return -1\"DFS returns height\" \u2192 return 1 +max(left,right)---### **5.Same Tree**```pythondef isSameTree(p,q):if not p andnot q:return Trueif not p or not q or p.val !=q.val:return Falsereturn isSameTree(p.left, q.left) and isSameTree(p.right, q.right)```**Time Complexity:** O(N)**Space Complexity:** O(N)5. Same Tree\u2705One-liner:DFS bothtrees and match all nodesand values.\ud83d\udc763-linerfor kids:Walk bothtrees together.At everynode, check values.If anything differs, stop!\ud83e\udde0Mnemonics:\"Match value\" \u2192 p.val == q.val\"Match left/right\" \u2192 return isSameTree(p.left, q.left) and ...\"Null base case\"\u2192 if notp and not q: return True---### **6.Subtreeof Another Tree**```pythondef isSubtree(root, subRoot):def isSameTree(p, q):if not pand not q:return Trueif not por not qor p.val!= q.val:return Falsereturn isSameTree(p.left,q.left) and isSameTree(p.right,q.right)if not root:return Falsereturn isSameTree(root, subRoot) or isSubtree(root.left, subRoot) orisSubtree(root.right, subRoot)```**Time Complexity:** O(N*M)**Space Complexity:** O(N)6. Subtree of Another Tree\u2705One-liner:Check current node or itschildrenfor subtree match.\ud83d\udc763-linerfor kids:Is it thesame tree rightnow?If not, check left and right.One matchis allyou need!\ud83e\udde0Mnemonics:\"Check match\" \u2192 isSameTree(root, subRoot)\"Recurseleft/right\" \u2192 isSubtree(root.left,...)or ...\"Reuse sameTree logic\" \u2192 def isSameTree(...)---### **7.Lowest Common Ancestor ofa BinarySearch Tree**```pythondef lowestCommonAncestor(root, p,q):whileroot:if p.val< root.val and q.val < root.val:root= root.leftelif p.val > root.val andq.val > root.val:root= root.rightelse:return root```**Time Complexity:** O(H)\u2248 O(logN) (balanced) /O(N) (skewed)**Space Complexity:** O(1)7. LowestCommonAncestor(BST)\u2705One-liner:Walk downand stop where values split.\ud83d\udc763-linerfor kids:Look leftif bothare smaller.Go rightif bothare bigger.Else, youfound the split!\ud83e\udde0Mnemonics:\"Both left?\" \u2192 ifp.val <root.valand q.val < root.val:\"Both right?\" \u2192 elif p.val> root.val and q.val >root.val:\"Split found\" \u2192 return root---### **8.Binary Tree LevelOrder Traversal**```pythonfrom collectionsimport dequedef levelOrder(root):if not root:return []queue, result= deque([root]),[]whilequeue:level =[]for _ inrange(len(queue)):node= queue.popleft()level.append(node.val)if node.left:queue.append(node.left)if node.right:queue.append(node.right)result.append(level)return result```**Time Complexity:** O(N)**Space Complexity:** O(N)8. LevelOrder Traversal\u2705One-liner:Use a queue to collect node valueslevel bylevel.\ud83d\udc763-linerfor kids:Start atthe root.Visit every level, left toright.Add children to the queue!\ud83e\udde0Mnemonics:\"Loop level size\"\u2192 for _in range(len(queue)):\"Push children\" \u2192if node.left: queue.append(...)\"Save level\" \u2192 result.append(level)---### **9.Binary Tree Right Side View**```pythondef rightSideView(root):if not root:return []queue, result= deque([root]),[]whilequeue:result.append(queue[-1].val)for _ inrange(len(queue)):node= queue.popleft()if node.left:queue.append(node.left)if node.right:queue.append(node.right)return result```**Time Complexity:** O(N)**Space Complexity:** O(N)9. RightSide View\u2705One-liner:Save thelast node of eachlevel from left-to-rightscan.\ud83d\udc763-linerfor kids:You standon theright side.See the last nodeof eachrow.Only those are visible!\ud83e\udde0Mnemonics:\"Peek last\" \u2192 result.append(queue[-1].val)\"BFS as usual\" \u2192for_ in range(len(queue)):\"Push children\" \u2192queue.append(node.left/right)---### **10.Count Good Nodesin Binary Tree**```pythondef goodNodes(root):def dfs(node,maxVal):if not node:return 0count = 1if node.val >= maxVal else 0maxVal =max(maxVal, node.val)return count + dfs(node.left, maxVal) + dfs(node.right, maxVal)return dfs(root, root.val)```**Time Complexity:** O(N)**Space Complexity:** O(N)10. CountGood Nodes\u2705One-liner:DFS downthe treeand count nodes>= max seen sofar.\ud83d\udc763-linerfor kids:Start from root.If you\u2019rebiggerthan allparents,count yourself.Pass themax as you go down.\ud83e\udde0Mnemonics:\"Comparewith max\" \u2192 count= 1 ifnode.val>= maxVal else 0\"Pass down max\" \u2192maxVal =max(maxVal, node.val)\"Sum results\" \u2192 return count + dfs(left) +dfs(right)---### **11.Validate BinarySearch Tree**```pythondef isValidBST(root):def dfs(node,low, high):ifnotnode:return Trueif not (low < node.val < high):return Falsereturn dfs(node.left, low,node.val) anddfs(node.right,node.val,high)return dfs(root, float('-inf'), float('inf'))```**Time Complexity:** O(N)**Space Complexity:** O(N)11. Validate BST\u2705One-liner:Use bounds to check if every nodeis within(min,max).\ud83d\udc763-linerfor kids:Every left shouldbe smaller.Every right should be bigger.Use ranges to check!\ud83e\udde0Mnemonics:\"Check value\" \u2192 if not (low < node.val < high): return False\"Update bounds\" \u2192dfs(node.left, low, node.val)\"Return True forleaf\" \u2192 if not node: return True---### **12.Kth Smallest Element ina BST**```pythondef kthSmallest(root, k):stack= []whileroot orstack:while root:stack.append(root)root= root.leftroot = stack.pop()k-= 1if k == 0:return root.valroot = root.right```**Time Complexity:** O(H +K)**Space Complexity:** O(H)12. Kth Smallestin BST\u2705One-liner:Inorder traversalgives sorted values\u2014return kth.\ud83d\udc763-linerfor kids:Left \u2192 Root \u2192 Right givessorted list.Stop whenyou hitthe kthvalue.Use a stack to godeep.\ud83e\udde0Mnemonics:\"Go left\"\u2192 whileroot: stack.append(root)\"Pop & count\" \u2192 root = stack.pop(); k-= 1\"Found kth\" \u2192 ifk == 0: return root.val---### **13.Construct BinaryTree from Preorder andInorderTraversal**```pythondef buildTree(preorder, inorder):inorder_map ={val: idx for idx, val inenumerate(inorder)}def helper(pre_idx, in_left, in_right):if in_left > in_right:return Noneroot_val= preorder[pre_idx]root = TreeNode(root_val)in_idx =inorder_map[root_val]root.left= helper(pre_idx+ 1, in_left,in_idx -1)root.right = helper(pre_idx + (in_idx - in_left) + 1,in_idx+ 1,in_right)return rootreturn helper(0, 0, len(inorder) -1)```**Time Complexity:** O(N)**Space Complexity:** O(N)13. BuildTree (Preorder +Inorder)\u2705One-liner:Use preorder to pick roots, inorder to split left/right.\ud83d\udc763-linerfor kids:First value is root.Inordertells youwho\u2019s left/right.Recursively buildthe tree!\ud83e\udde0Mnemonics:\"Map inorder index\" \u2192 inorder_map= {val: idx for...}\"Pick root\" \u2192 root_val = preorder[pre_idx]\"Split subtrees\"\u2192 helper(pre_idx+1, ..., in_idx-1)---### **14.BinaryTree Maximum PathSum**```pythondef maxPathSum(root):max_sum = float('-inf')def dfs(node):nonlocalmax_sumif not node:return 0left = max(dfs(node.left),0)right = max(dfs(node.right), 0)max_sum =max(max_sum, left + right+ node.val)return node.val +max(left, right)dfs(root)return max_sum```**Time Complexity:** O(N)**Space Complexity:** O(N)14. Binary Tree Max Path Sum\u2705One-liner:DFS eachnode andtrack best pathgoing through it.\ud83d\udc763-linerfor kids:Try everypath that bendsat a node.Track thebest total sum.Only return max single-leg path upward!\ud83e\udde0Mnemonics:\"Ignore negatives\" \u2192 left= max(dfs(node.left), 0)\"Update globalmax\" \u2192 max_sum =max(max_sum, left+ right + node.val)\"Return one leg\"\u2192 returnnode.val+ max(left, right)---### **15.Serialize and Deserialize BinaryTree**```pythondef serialize(root):return json.dumps([] if not root else [root.val,serialize(root.left), serialize(root.right)])def deserialize(data):lst =json.loads(data)if not lst:return Nonenode= TreeNode(lst[0])node.left = deserialize(lst[1])node.right =deserialize(lst[2])return node```**Time Complexity:** O(N)**Space Complexity:** O(N)---15. Serialize/DeserializeTree\u2705One-liner:Turn thetree into a nested list and JSON it.\ud83d\udc763-linerfor kids:Turn treeinto astring.Send it over thewire.Rebuild it later!\ud83e\udde0Mnemonics:\"Listifytree\" \u2192[val, left, right]\"Use JSON\" \u2192 json.dumps(...) / json.loads(...)\"Recursive decode\" \u2192 deserialize(lst[1]), deserialize(lst[2])",
    "difficulty": "Here areoptimized Pythonsolutions for each problem, along with theirtime andspace complexity:---### **1.Invert Binary Tree**```pythonclass TreeNode:def __init__(self, val=0, left=None, right=None):self.val= valself.left = leftself.right = rightdef invertTree(root):if not root:return Noneroot.left, root.right= invertTree(root.right), invertTree(root.left)return root```**Time Complexity:** O(N)**Space Complexity:** O(N) (for recursion stack inworst case)1. InvertBinaryTree\u2705One-liner:Swap leftand right at every noderecursively.\ud83d\udc763-linerfor kids:Flip every branchleft-to-right.Do the same for children too.Keep flipping till the bottom!\ud83e\udde0Mnemonics:\"Flip subtrees\" \u2192root.left, root.right = invertTree(root.right),invertTree(root.left)\"Base case\" \u2192 ifnot root:returnNone\"Return flipped root\" \u2192 return root---### **2.MaximumDepth ofBinary Tree**```pythondef maxDepth(root):if not root:return 0return 1 + max(maxDepth(root.left), maxDepth(root.right))```**Time Complexity:** O(N)**Space Complexity:** O(N)(worstcase, skewed tree)2. Max Depth of Binary Tree",
    "question": "Here areoptimized Pythonsolutions for each problem, along with theirtime andspace complexity:---### **1.Invert Binary Tree**```pythonclass TreeNode:def __init__(self, val=0, left=None, right=None):self.val= valself.left = leftself.right = rightdef invertTree(root):if not root:return Noneroot.left, root.right= invertTree(root.right), invertTree(root.left)return root```**Time Complexity:** O(N)**Space Complexity:** O(N) (for recursion stack inworst case)1. InvertBinaryTree\u2705One-liner:Swap leftand right at every noderecursively.\ud83d\udc763-linerfor kids:Flip every branchleft-to-right.Do the same for children too.Keep flipping till the bottom!\ud83e\udde0Mnemonics:\"Flip subtrees\" \u2192root.left, root.right = invertTree(root.right),invertTree(root.left)\"Base case\" \u2192 ifnot root:returnNone\"Return flipped root\" \u2192 return root---### **2.MaximumDepth ofBinary Tree**```pythondef maxDepth(root):if not root:return 0return 1 + max(maxDepth(root.left), maxDepth(root.right))```**Time Complexity:** O(N)**Space Complexity:** O(N)(worstcase, skewed tree)2. Max Depth of Binary Tree",
    "hint": "Here areoptimized Pythonsolutions for each problem, along with theirtime andspace complexity:---### **1.Invert Binary Tree**```pythonclass TreeNode:def __init__(self, val=0, left=None, right=None):self.val= valself.left = leftself.right = rightdef invertTree(root):if not root:return Noneroot.left, root.right= invertTree(root.right), invertTree(root.left)return root```**Time Complexity:** O(N)**Space Complexity:** O(N) (for recursion stack inworst case)1. InvertBinaryTree\u2705One-liner:Swap leftand right at every noderecursively.\ud83d\udc763-linerfor kids:Flip every branchleft-to-right.Do the same for children too.Keep flipping till the bottom!\ud83e\udde0Mnemonics:\"Flip subtrees\" \u2192root.left, root.right = invertTree(root.right),invertTree(root.left)\"Base case\" \u2192 ifnot root:returnNone\"Return flipped root\" \u2192 return root---### **2.MaximumDepth ofBinary Tree**```pythondef maxDepth(root):if not root:return 0return 1 + max(maxDepth(root.left), maxDepth(root.right))```**Time Complexity:** O(N)**Space Complexity:** O(N)(worstcase, skewed tree)2. Max Depth of Binary Tree",
    "oneLiner": "Here areoptimized Pythonsolutions for each problem, along with their",
    "threeLiner": "time andspace complexity:",
    "mnemonic": "---",
    "code": "### **1.Invert Binary Tree**"
  },
  {
    "title": "```python",
    "difficulty": "class TreeNode:",
    "question": "def __init__(self, val=0, left=None, right=None):",
    "hint": "self.val= val",
    "oneLiner": "self.left = left",
    "threeLiner": "self.right = right",
    "mnemonic": "def invertTree(root):",
    "code": "if not root:"
  },
  {
    "title": "return None",
    "difficulty": "root.left, root.right= invertTree(root.right), invertTree(root.left)",
    "question": "return root",
    "hint": "```",
    "oneLiner": "**Time Complexity:** O(N)",
    "threeLiner": "**Space Complexity:** O(N) (for recursion stack inworst case)",
    "mnemonic": "1. InvertBinaryTree",
    "code": "\u2705One-liner:"
  },
  {
    "title": "Swap leftand right at every noderecursively.",
    "difficulty": "\ud83d\udc763-linerfor kids:",
    "question": "Flip every branchleft-to-right.",
    "hint": "Do the same for children too.",
    "oneLiner": "Keep flipping till the bottom!",
    "threeLiner": "\ud83e\udde0Mnemonics:",
    "mnemonic": "\"Flip subtrees\" \u2192root.left, root.right = invertTree(root.right),",
    "code": "invertTree(root.left)"
  },
  {
    "title": "\"Base case\" \u2192 ifnot root:returnNone",
    "difficulty": "\"Return flipped root\" \u2192 return root",
    "question": "---",
    "hint": "### **2.MaximumDepth ofBinary Tree**",
    "oneLiner": "```python",
    "threeLiner": "def maxDepth(root):",
    "mnemonic": "if not root:",
    "code": "return 0"
  },
  {
    "title": "return 1 + max(maxDepth(root.left), maxDepth(root.right))",
    "difficulty": "```",
    "question": "**Time Complexity:** O(N)",
    "hint": "**Space Complexity:** O(N)(worstcase, skewed tree)",
    "oneLiner": "2. Max Depth of Binary Tree",
    "threeLiner": "\u2705One-liner:Recursively get max depthfrom left and right, add one.\ud83d\udc763-linerfor kids:Go down both leftand right.Find thedeeper one.Add yourself to the count!\ud83e\udde0Mnemonics:\"Check both sides\" \u2192 maxDepth(root.left), maxDepth(root.right)\"Add 1 for current\" \u2192 1 +max(...)\"Stop atnull\" \u2192if not root: return 0---### **3.Diameterof Binary Tree**```pythondef diameterOfBinaryTree(root):diameter = 0def depth(node):nonlocaldiameterif not node:return 0left = depth(node.left)right = depth(node.right)diameter= max(diameter, left + right)return 1+ max(left, right)depth(root)return diameter```**Time Complexity:** O(N)**Space Complexity:** O(N)3. Diameter of Binary Tree\u2705One-liner:Track thelongestpath across anynode viaDFS.\ud83d\udc763-linerfor kids:Find longest pathbetweenany twonodes.At everynode, try left +right path.Update the best as you go.\ud83e\udde0Mnemonics:\"DFS returns depth\" \u2192 return 1 + max(left,right)\"Update diameter\"\u2192 diameter = max(diameter, left+ right)\"Use nonlocal\" \u2192nonlocaldiameter",
    "mnemonic": "\u2705One-liner:Recursively get max depthfrom left and right, add one.\ud83d\udc763-linerfor kids:Go down both leftand right.Find thedeeper one.Add yourself to the count!\ud83e\udde0Mnemonics:\"Check both sides\" \u2192 maxDepth(root.left), maxDepth(root.right)\"Add 1 for current\" \u2192 1 +max(...)\"Stop atnull\" \u2192if not root: return 0---### **3.Diameterof Binary Tree**```pythondef diameterOfBinaryTree(root):diameter = 0def depth(node):nonlocaldiameterif not node:return 0left = depth(node.left)right = depth(node.right)diameter= max(diameter, left + right)return 1+ max(left, right)depth(root)return diameter```**Time Complexity:** O(N)**Space Complexity:** O(N)3. Diameter of Binary Tree\u2705One-liner:Track thelongestpath across anynode viaDFS.\ud83d\udc763-linerfor kids:Find longest pathbetweenany twonodes.At everynode, try left +right path.Update the best as you go.\ud83e\udde0Mnemonics:\"DFS returns depth\" \u2192 return 1 + max(left,right)\"Update diameter\"\u2192 diameter = max(diameter, left+ right)\"Use nonlocal\" \u2192nonlocaldiameter",
    "code": "\u2705One-liner:Recursively get max depthfrom left and right, add one.\ud83d\udc763-linerfor kids:Go down both leftand right.Find thedeeper one.Add yourself to the count!\ud83e\udde0Mnemonics:\"Check both sides\" \u2192 maxDepth(root.left), maxDepth(root.right)\"Add 1 for current\" \u2192 1 +max(...)\"Stop atnull\" \u2192if not root: return 0---### **3.Diameterof Binary Tree**```pythondef diameterOfBinaryTree(root):diameter = 0def depth(node):nonlocaldiameterif not node:return 0left = depth(node.left)right = depth(node.right)diameter= max(diameter, left + right)return 1+ max(left, right)depth(root)return diameter```**Time Complexity:** O(N)**Space Complexity:** O(N)3. Diameter of Binary Tree\u2705One-liner:Track thelongestpath across anynode viaDFS.\ud83d\udc763-linerfor kids:Find longest pathbetweenany twonodes.At everynode, try left +right path.Update the best as you go.\ud83e\udde0Mnemonics:\"DFS returns depth\" \u2192 return 1 + max(left,right)\"Update diameter\"\u2192 diameter = max(diameter, left+ right)\"Use nonlocal\" \u2192nonlocaldiameter"
  },
  {
    "title": "\u2705One-liner:",
    "difficulty": "Recursively get max depthfrom left and right, add one.",
    "question": "\ud83d\udc763-linerfor kids:",
    "hint": "Go down both leftand right.",
    "oneLiner": "Find thedeeper one.",
    "threeLiner": "Add yourself to the count!",
    "mnemonic": "\ud83e\udde0Mnemonics:",
    "code": "\"Check both sides\" \u2192 maxDepth(root.left), maxDepth(root.right)"
  },
  {
    "title": "\"Add 1 for current\" \u2192 1 +max(...)",
    "difficulty": "\"Stop atnull\" \u2192if not root: return 0",
    "question": "---",
    "hint": "### **3.Diameterof Binary Tree**",
    "oneLiner": "```python",
    "threeLiner": "def diameterOfBinaryTree(root):",
    "mnemonic": "diameter = 0",
    "code": "def depth(node):"
  },
  {
    "title": "nonlocaldiameter",
    "difficulty": "if not node:",
    "question": "return 0",
    "hint": "left = depth(node.left)",
    "oneLiner": "right = depth(node.right)",
    "threeLiner": "diameter= max(diameter, left + right)",
    "mnemonic": "return 1+ max(left, right)",
    "code": "depth(root)"
  },
  {
    "title": "return diameter",
    "difficulty": "```",
    "question": "**Time Complexity:** O(N)",
    "hint": "**Space Complexity:** O(N)",
    "oneLiner": "3. Diameter of Binary Tree",
    "threeLiner": "\u2705One-liner:",
    "mnemonic": "Track thelongestpath across anynode viaDFS.",
    "code": "\ud83d\udc763-linerfor kids:"
  },
  {
    "title": "Find longest pathbetweenany twonodes.",
    "difficulty": "At everynode, try left +right path.",
    "question": "Update the best as you go.",
    "hint": "\ud83e\udde0Mnemonics:",
    "oneLiner": "\"DFS returns depth\" \u2192 return 1 + max(left,right)",
    "threeLiner": "\"Update diameter\"\u2192 diameter = max(diameter, left+ right)",
    "mnemonic": "\"Use nonlocal\" \u2192nonlocaldiameter",
    "code": "---### **4.BalancedBinary Tree**```pythondef isBalanced(root):def dfs(node):if not node:return 0left = dfs(node.left)right = dfs(node.right)if left == -1 or right ==-1 or abs(left - right) > 1:return -1return 1+ max(left, right)return dfs(root) != -1```**Time Complexity:** O(N)**Space Complexity:** O(N)4. Balanced Binary Tree\u2705One-liner:Use post-order DFS and return -1 if imbalance is detected.\ud83d\udc763-linerfor kids:Check ifboth sides are even.If one side too tall, markbroken.Keep bubbling -1up the tree!\ud83e\udde0Mnemonics:\"Check balance\" \u2192if abs(left- right) > 1:return -1\"Bubble imbalance\" \u2192 if left ==-1or right== -1: return -1\"DFS returns height\" \u2192 return 1 +max(left,right)---### **5.Same Tree**```pythondef isSameTree(p,q):if not p andnot q:return Trueif not p or not q or p.val !=q.val:return Falsereturn isSameTree(p.left, q.left) and isSameTree(p.right, q.right)```**Time Complexity:** O(N)**Space Complexity:** O(N)5. Same Tree\u2705One-liner:DFS bothtrees and match all nodesand values."
  },
  {
    "title": "---### **4.BalancedBinary Tree**```pythondef isBalanced(root):def dfs(node):if not node:return 0left = dfs(node.left)right = dfs(node.right)if left == -1 or right ==-1 or abs(left - right) > 1:return -1return 1+ max(left, right)return dfs(root) != -1```**Time Complexity:** O(N)**Space Complexity:** O(N)4. Balanced Binary Tree\u2705One-liner:Use post-order DFS and return -1 if imbalance is detected.\ud83d\udc763-linerfor kids:Check ifboth sides are even.If one side too tall, markbroken.Keep bubbling -1up the tree!\ud83e\udde0Mnemonics:\"Check balance\" \u2192if abs(left- right) > 1:return -1\"Bubble imbalance\" \u2192 if left ==-1or right== -1: return -1\"DFS returns height\" \u2192 return 1 +max(left,right)---### **5.Same Tree**```pythondef isSameTree(p,q):if not p andnot q:return Trueif not p or not q or p.val !=q.val:return Falsereturn isSameTree(p.left, q.left) and isSameTree(p.right, q.right)```**Time Complexity:** O(N)**Space Complexity:** O(N)5. Same Tree\u2705One-liner:DFS bothtrees and match all nodesand values.",
    "difficulty": "---### **4.BalancedBinary Tree**```pythondef isBalanced(root):def dfs(node):if not node:return 0left = dfs(node.left)right = dfs(node.right)if left == -1 or right ==-1 or abs(left - right) > 1:return -1return 1+ max(left, right)return dfs(root) != -1```**Time Complexity:** O(N)**Space Complexity:** O(N)4. Balanced Binary Tree\u2705One-liner:Use post-order DFS and return -1 if imbalance is detected.\ud83d\udc763-linerfor kids:Check ifboth sides are even.If one side too tall, markbroken.Keep bubbling -1up the tree!\ud83e\udde0Mnemonics:\"Check balance\" \u2192if abs(left- right) > 1:return -1\"Bubble imbalance\" \u2192 if left ==-1or right== -1: return -1\"DFS returns height\" \u2192 return 1 +max(left,right)---### **5.Same Tree**```pythondef isSameTree(p,q):if not p andnot q:return Trueif not p or not q or p.val !=q.val:return Falsereturn isSameTree(p.left, q.left) and isSameTree(p.right, q.right)```**Time Complexity:** O(N)**Space Complexity:** O(N)5. Same Tree\u2705One-liner:DFS bothtrees and match all nodesand values.",
    "question": "---",
    "hint": "### **4.BalancedBinary Tree**",
    "oneLiner": "```python",
    "threeLiner": "def isBalanced(root):",
    "mnemonic": "def dfs(node):",
    "code": "if not node:"
  },
  {
    "title": "return 0",
    "difficulty": "left = dfs(node.left)",
    "question": "right = dfs(node.right)",
    "hint": "if left == -1 or right ==-1 or abs(left - right) > 1:",
    "oneLiner": "return -1",
    "threeLiner": "return 1+ max(left, right)",
    "mnemonic": "return dfs(root) != -1",
    "code": "```"
  },
  {
    "title": "**Time Complexity:** O(N)",
    "difficulty": "**Space Complexity:** O(N)",
    "question": "4. Balanced Binary Tree",
    "hint": "\u2705One-liner:",
    "oneLiner": "Use post-order DFS and return -1 if imbalance is detected.",
    "threeLiner": "\ud83d\udc763-linerfor kids:",
    "mnemonic": "Check ifboth sides are even.",
    "code": "If one side too tall, markbroken."
  },
  {
    "title": "Keep bubbling -1up the tree!",
    "difficulty": "\ud83e\udde0Mnemonics:",
    "question": "\"Check balance\" \u2192if abs(left- right) > 1:return -1",
    "hint": "\"Bubble imbalance\" \u2192 if left ==-1or right== -1: return -1",
    "oneLiner": "\"DFS returns height\" \u2192 return 1 +max(left,right)",
    "threeLiner": "---",
    "mnemonic": "### **5.Same Tree**",
    "code": "```python"
  },
  {
    "title": "def isSameTree(p,q):",
    "difficulty": "if not p andnot q:",
    "question": "return True",
    "hint": "if not p or not q or p.val !=q.val:",
    "oneLiner": "return False",
    "threeLiner": "return isSameTree(p.left, q.left) and isSameTree(p.right, q.right)",
    "mnemonic": "```",
    "code": "**Time Complexity:** O(N)"
  },
  {
    "title": "**Space Complexity:** O(N)",
    "difficulty": "5. Same Tree",
    "question": "\u2705One-liner:",
    "hint": "DFS bothtrees and match all nodesand values.",
    "oneLiner": "\ud83d\udc763-linerfor kids:Walk bothtrees together.At everynode, check values.If anything differs, stop!\ud83e\udde0Mnemonics:\"Match value\" \u2192 p.val == q.val\"Match left/right\" \u2192 return isSameTree(p.left, q.left) and ...\"Null base case\"\u2192 if notp and not q: return True---### **6.Subtreeof Another Tree**```pythondef isSubtree(root, subRoot):def isSameTree(p, q):if not pand not q:return Trueif not por not qor p.val!= q.val:return Falsereturn isSameTree(p.left,q.left) and isSameTree(p.right,q.right)if not root:return Falsereturn isSameTree(root, subRoot) or isSubtree(root.left, subRoot) orisSubtree(root.right, subRoot)```**Time Complexity:** O(N*M)**Space Complexity:** O(N)6. Subtree of Another Tree\u2705One-liner:Check current node or itschildrenfor subtree match.\ud83d\udc763-linerfor kids:Is it thesame tree rightnow?If not, check left and right.One matchis allyou need!\ud83e\udde0Mnemonics:\"Check match\" \u2192 isSameTree(root, subRoot)\"Recurseleft/right\" \u2192 isSubtree(root.left,...)or ...\"Reuse sameTree logic\" \u2192 def isSameTree(...)---### **7.Lowest Common Ancestor ofa BinarySearch Tree**```pythondef lowestCommonAncestor(root, p,q):",
    "threeLiner": "\ud83d\udc763-linerfor kids:Walk bothtrees together.At everynode, check values.If anything differs, stop!\ud83e\udde0Mnemonics:\"Match value\" \u2192 p.val == q.val\"Match left/right\" \u2192 return isSameTree(p.left, q.left) and ...\"Null base case\"\u2192 if notp and not q: return True---### **6.Subtreeof Another Tree**```pythondef isSubtree(root, subRoot):def isSameTree(p, q):if not pand not q:return Trueif not por not qor p.val!= q.val:return Falsereturn isSameTree(p.left,q.left) and isSameTree(p.right,q.right)if not root:return Falsereturn isSameTree(root, subRoot) or isSubtree(root.left, subRoot) orisSubtree(root.right, subRoot)```**Time Complexity:** O(N*M)**Space Complexity:** O(N)6. Subtree of Another Tree\u2705One-liner:Check current node or itschildrenfor subtree match.\ud83d\udc763-linerfor kids:Is it thesame tree rightnow?If not, check left and right.One matchis allyou need!\ud83e\udde0Mnemonics:\"Check match\" \u2192 isSameTree(root, subRoot)\"Recurseleft/right\" \u2192 isSubtree(root.left,...)or ...\"Reuse sameTree logic\" \u2192 def isSameTree(...)---### **7.Lowest Common Ancestor ofa BinarySearch Tree**```pythondef lowestCommonAncestor(root, p,q):",
    "mnemonic": "\ud83d\udc763-linerfor kids:Walk bothtrees together.At everynode, check values.If anything differs, stop!\ud83e\udde0Mnemonics:\"Match value\" \u2192 p.val == q.val\"Match left/right\" \u2192 return isSameTree(p.left, q.left) and ...\"Null base case\"\u2192 if notp and not q: return True---### **6.Subtreeof Another Tree**```pythondef isSubtree(root, subRoot):def isSameTree(p, q):if not pand not q:return Trueif not por not qor p.val!= q.val:return Falsereturn isSameTree(p.left,q.left) and isSameTree(p.right,q.right)if not root:return Falsereturn isSameTree(root, subRoot) or isSubtree(root.left, subRoot) orisSubtree(root.right, subRoot)```**Time Complexity:** O(N*M)**Space Complexity:** O(N)6. Subtree of Another Tree\u2705One-liner:Check current node or itschildrenfor subtree match.\ud83d\udc763-linerfor kids:Is it thesame tree rightnow?If not, check left and right.One matchis allyou need!\ud83e\udde0Mnemonics:\"Check match\" \u2192 isSameTree(root, subRoot)\"Recurseleft/right\" \u2192 isSubtree(root.left,...)or ...\"Reuse sameTree logic\" \u2192 def isSameTree(...)---### **7.Lowest Common Ancestor ofa BinarySearch Tree**```pythondef lowestCommonAncestor(root, p,q):",
    "code": "\ud83d\udc763-linerfor kids:"
  },
  {
    "title": "Walk bothtrees together.",
    "difficulty": "At everynode, check values.",
    "question": "If anything differs, stop!",
    "hint": "\ud83e\udde0Mnemonics:",
    "oneLiner": "\"Match value\" \u2192 p.val == q.val",
    "threeLiner": "\"Match left/right\" \u2192 return isSameTree(p.left, q.left) and ...",
    "mnemonic": "\"Null base case\"\u2192 if notp and not q: return True",
    "code": "---"
  },
  {
    "title": "### **6.Subtreeof Another Tree**",
    "difficulty": "```python",
    "question": "def isSubtree(root, subRoot):",
    "hint": "def isSameTree(p, q):",
    "oneLiner": "if not pand not q:",
    "threeLiner": "return True",
    "mnemonic": "if not por not qor p.val!= q.val:",
    "code": "return False"
  },
  {
    "title": "return isSameTree(p.left,q.left) and isSameTree(p.right,",
    "difficulty": "q.right)",
    "question": "if not root:",
    "hint": "return False",
    "oneLiner": "return isSameTree(root, subRoot) or isSubtree(root.left, subRoot) or",
    "threeLiner": "isSubtree(root.right, subRoot)",
    "mnemonic": "```",
    "code": "**Time Complexity:** O(N*M)"
  },
  {
    "title": "**Space Complexity:** O(N)",
    "difficulty": "6. Subtree of Another Tree",
    "question": "\u2705One-liner:",
    "hint": "Check current node or itschildrenfor subtree match.",
    "oneLiner": "\ud83d\udc763-linerfor kids:",
    "threeLiner": "Is it thesame tree rightnow?",
    "mnemonic": "If not, check left and right.",
    "code": "One matchis allyou need!"
  },
  {
    "title": "\ud83e\udde0Mnemonics:",
    "difficulty": "\"Check match\" \u2192 isSameTree(root, subRoot)",
    "question": "\"Recurseleft/right\" \u2192 isSubtree(root.left,...)or ...",
    "hint": "\"Reuse sameTree logic\" \u2192 def isSameTree(...)",
    "oneLiner": "---",
    "threeLiner": "### **7.Lowest Common Ancestor ofa BinarySearch Tree**",
    "mnemonic": "```python",
    "code": "def lowestCommonAncestor(root, p,q):"
  },
  {
    "title": "whileroot:if p.val< root.val and q.val < root.val:root= root.leftelif p.val > root.val andq.val > root.val:root= root.rightelse:return root```**Time Complexity:** O(H)\u2248 O(logN) (balanced) /O(N) (skewed)**Space Complexity:** O(1)7. LowestCommonAncestor(BST)\u2705One-liner:Walk downand stop where values split.\ud83d\udc763-linerfor kids:Look leftif bothare smaller.Go rightif bothare bigger.Else, youfound the split!\ud83e\udde0Mnemonics:\"Both left?\" \u2192 ifp.val <root.valand q.val < root.val:\"Both right?\" \u2192 elif p.val> root.val and q.val >root.val:\"Split found\" \u2192 return root---### **8.Binary Tree LevelOrder Traversal**```pythonfrom collectionsimport dequedef levelOrder(root):if not root:return []queue, result= deque([root]),[]whilequeue:level =[]for _ inrange(len(queue)):node= queue.popleft()level.append(node.val)if node.left:queue.append(node.left)if node.right:queue.append(node.right)result.append(level)return result```**Time Complexity:** O(N)**Space Complexity:** O(N)8. LevelOrder Traversal",
    "difficulty": "whileroot:if p.val< root.val and q.val < root.val:root= root.leftelif p.val > root.val andq.val > root.val:root= root.rightelse:return root```**Time Complexity:** O(H)\u2248 O(logN) (balanced) /O(N) (skewed)**Space Complexity:** O(1)7. LowestCommonAncestor(BST)\u2705One-liner:Walk downand stop where values split.\ud83d\udc763-linerfor kids:Look leftif bothare smaller.Go rightif bothare bigger.Else, youfound the split!\ud83e\udde0Mnemonics:\"Both left?\" \u2192 ifp.val <root.valand q.val < root.val:\"Both right?\" \u2192 elif p.val> root.val and q.val >root.val:\"Split found\" \u2192 return root---### **8.Binary Tree LevelOrder Traversal**```pythonfrom collectionsimport dequedef levelOrder(root):if not root:return []queue, result= deque([root]),[]whilequeue:level =[]for _ inrange(len(queue)):node= queue.popleft()level.append(node.val)if node.left:queue.append(node.left)if node.right:queue.append(node.right)result.append(level)return result```**Time Complexity:** O(N)**Space Complexity:** O(N)8. LevelOrder Traversal",
    "question": "whileroot:if p.val< root.val and q.val < root.val:root= root.leftelif p.val > root.val andq.val > root.val:root= root.rightelse:return root```**Time Complexity:** O(H)\u2248 O(logN) (balanced) /O(N) (skewed)**Space Complexity:** O(1)7. LowestCommonAncestor(BST)\u2705One-liner:Walk downand stop where values split.\ud83d\udc763-linerfor kids:Look leftif bothare smaller.Go rightif bothare bigger.Else, youfound the split!\ud83e\udde0Mnemonics:\"Both left?\" \u2192 ifp.val <root.valand q.val < root.val:\"Both right?\" \u2192 elif p.val> root.val and q.val >root.val:\"Split found\" \u2192 return root---### **8.Binary Tree LevelOrder Traversal**```pythonfrom collectionsimport dequedef levelOrder(root):if not root:return []queue, result= deque([root]),[]whilequeue:level =[]for _ inrange(len(queue)):node= queue.popleft()level.append(node.val)if node.left:queue.append(node.left)if node.right:queue.append(node.right)result.append(level)return result```**Time Complexity:** O(N)**Space Complexity:** O(N)8. LevelOrder Traversal",
    "hint": "whileroot:",
    "oneLiner": "if p.val< root.val and q.val < root.val:",
    "threeLiner": "root= root.left",
    "mnemonic": "elif p.val > root.val andq.val > root.val:",
    "code": "root= root.right"
  },
  {
    "title": "else:",
    "difficulty": "return root",
    "question": "```",
    "hint": "**Time Complexity:** O(H)\u2248 O(logN) (balanced) /O(N) (skewed)",
    "oneLiner": "**Space Complexity:** O(1)",
    "threeLiner": "7. LowestCommonAncestor(BST)",
    "mnemonic": "\u2705One-liner:",
    "code": "Walk downand stop where values split."
  },
  {
    "title": "\ud83d\udc763-linerfor kids:",
    "difficulty": "Look leftif bothare smaller.",
    "question": "Go rightif bothare bigger.",
    "hint": "Else, youfound the split!",
    "oneLiner": "\ud83e\udde0Mnemonics:",
    "threeLiner": "\"Both left?\" \u2192 ifp.val <root.valand q.val < root.val:",
    "mnemonic": "\"Both right?\" \u2192 elif p.val> root.val and q.val >root.val:",
    "code": "\"Split found\" \u2192 return root"
  },
  {
    "title": "---",
    "difficulty": "### **8.Binary Tree LevelOrder Traversal**",
    "question": "```python",
    "hint": "from collectionsimport deque",
    "oneLiner": "def levelOrder(root):",
    "threeLiner": "if not root:",
    "mnemonic": "return []",
    "code": "queue, result= deque([root]),[]"
  },
  {
    "title": "whilequeue:",
    "difficulty": "level =[]",
    "question": "for _ inrange(len(queue)):",
    "hint": "node= queue.popleft()",
    "oneLiner": "level.append(node.val)",
    "threeLiner": "if node.left:",
    "mnemonic": "queue.append(node.left)",
    "code": "if node.right:"
  },
  {
    "title": "queue.append(node.right)",
    "difficulty": "result.append(level)",
    "question": "return result",
    "hint": "```",
    "oneLiner": "**Time Complexity:** O(N)",
    "threeLiner": "**Space Complexity:** O(N)",
    "mnemonic": "8. LevelOrder Traversal",
    "code": "\u2705One-liner:Use a queue to collect node valueslevel bylevel.\ud83d\udc763-linerfor kids:Start atthe root.Visit every level, left toright.Add children to the queue!\ud83e\udde0Mnemonics:\"Loop level size\"\u2192 for _in range(len(queue)):\"Push children\" \u2192if node.left: queue.append(...)\"Save level\" \u2192 result.append(level)---### **9.Binary Tree Right Side View**```pythondef rightSideView(root):if not root:return []queue, result= deque([root]),[]whilequeue:result.append(queue[-1].val)for _ inrange(len(queue)):node= queue.popleft()if node.left:queue.append(node.left)if node.right:queue.append(node.right)return result```**Time Complexity:** O(N)**Space Complexity:** O(N)9. RightSide View\u2705One-liner:Save thelast node of eachlevel from left-to-rightscan.\ud83d\udc763-linerfor kids:You standon theright side.See the last nodeof eachrow.Only those are visible!\ud83e\udde0Mnemonics:\"Peek last\" \u2192 result.append(queue[-1].val)\"BFS as usual\" \u2192for_ in range(len(queue)):\"Push children\" \u2192queue.append(node.left/right)---"
  },
  {
    "title": "\u2705One-liner:Use a queue to collect node valueslevel bylevel.\ud83d\udc763-linerfor kids:Start atthe root.Visit every level, left toright.Add children to the queue!\ud83e\udde0Mnemonics:\"Loop level size\"\u2192 for _in range(len(queue)):\"Push children\" \u2192if node.left: queue.append(...)\"Save level\" \u2192 result.append(level)---### **9.Binary Tree Right Side View**```pythondef rightSideView(root):if not root:return []queue, result= deque([root]),[]whilequeue:result.append(queue[-1].val)for _ inrange(len(queue)):node= queue.popleft()if node.left:queue.append(node.left)if node.right:queue.append(node.right)return result```**Time Complexity:** O(N)**Space Complexity:** O(N)9. RightSide View\u2705One-liner:Save thelast node of eachlevel from left-to-rightscan.\ud83d\udc763-linerfor kids:You standon theright side.See the last nodeof eachrow.Only those are visible!\ud83e\udde0Mnemonics:\"Peek last\" \u2192 result.append(queue[-1].val)\"BFS as usual\" \u2192for_ in range(len(queue)):\"Push children\" \u2192queue.append(node.left/right)---",
    "difficulty": "\u2705One-liner:Use a queue to collect node valueslevel bylevel.\ud83d\udc763-linerfor kids:Start atthe root.Visit every level, left toright.Add children to the queue!\ud83e\udde0Mnemonics:\"Loop level size\"\u2192 for _in range(len(queue)):\"Push children\" \u2192if node.left: queue.append(...)\"Save level\" \u2192 result.append(level)---### **9.Binary Tree Right Side View**```pythondef rightSideView(root):if not root:return []queue, result= deque([root]),[]whilequeue:result.append(queue[-1].val)for _ inrange(len(queue)):node= queue.popleft()if node.left:queue.append(node.left)if node.right:queue.append(node.right)return result```**Time Complexity:** O(N)**Space Complexity:** O(N)9. RightSide View\u2705One-liner:Save thelast node of eachlevel from left-to-rightscan.\ud83d\udc763-linerfor kids:You standon theright side.See the last nodeof eachrow.Only those are visible!\ud83e\udde0Mnemonics:\"Peek last\" \u2192 result.append(queue[-1].val)\"BFS as usual\" \u2192for_ in range(len(queue)):\"Push children\" \u2192queue.append(node.left/right)---",
    "question": "\u2705One-liner:",
    "hint": "Use a queue to collect node valueslevel bylevel.",
    "oneLiner": "\ud83d\udc763-linerfor kids:",
    "threeLiner": "Start atthe root.",
    "mnemonic": "Visit every level, left toright.",
    "code": "Add children to the queue!"
  },
  {
    "title": "\ud83e\udde0Mnemonics:",
    "difficulty": "\"Loop level size\"\u2192 for _in range(len(queue)):",
    "question": "\"Push children\" \u2192if node.left: queue.append(...)",
    "hint": "\"Save level\" \u2192 result.append(level)",
    "oneLiner": "---",
    "threeLiner": "### **9.Binary Tree Right Side View**",
    "mnemonic": "```python",
    "code": "def rightSideView(root):"
  },
  {
    "title": "if not root:",
    "difficulty": "return []",
    "question": "queue, result= deque([root]),[]",
    "hint": "whilequeue:",
    "oneLiner": "result.append(queue[-1].val)",
    "threeLiner": "for _ inrange(len(queue)):",
    "mnemonic": "node= queue.popleft()",
    "code": "if node.left:"
  },
  {
    "title": "queue.append(node.left)",
    "difficulty": "if node.right:",
    "question": "queue.append(node.right)",
    "hint": "return result",
    "oneLiner": "```",
    "threeLiner": "**Time Complexity:** O(N)",
    "mnemonic": "**Space Complexity:** O(N)",
    "code": "9. RightSide View"
  },
  {
    "title": "\u2705One-liner:",
    "difficulty": "Save thelast node of eachlevel from left-to-rightscan.",
    "question": "\ud83d\udc763-linerfor kids:",
    "hint": "You standon theright side.",
    "oneLiner": "See the last nodeof eachrow.",
    "threeLiner": "Only those are visible!",
    "mnemonic": "\ud83e\udde0Mnemonics:",
    "code": "\"Peek last\" \u2192 result.append(queue[-1].val)"
  },
  {
    "title": "\"BFS as usual\" \u2192for_ in range(len(queue)):",
    "difficulty": "\"Push children\" \u2192queue.append(node.left/right)",
    "question": "---",
    "hint": "### **10.Count Good Nodesin Binary Tree**```pythondef goodNodes(root):def dfs(node,maxVal):if not node:return 0count = 1if node.val >= maxVal else 0maxVal =max(maxVal, node.val)return count + dfs(node.left, maxVal) + dfs(node.right, maxVal)return dfs(root, root.val)```**Time Complexity:** O(N)**Space Complexity:** O(N)10. CountGood Nodes\u2705One-liner:DFS downthe treeand count nodes>= max seen sofar.\ud83d\udc763-linerfor kids:Start from root.If you\u2019rebiggerthan allparents,count yourself.Pass themax as you go down.\ud83e\udde0Mnemonics:\"Comparewith max\" \u2192 count= 1 ifnode.val>= maxVal else 0\"Pass down max\" \u2192maxVal =max(maxVal, node.val)\"Sum results\" \u2192 return count + dfs(left) +dfs(right)---### **11.Validate BinarySearch Tree**```pythondef isValidBST(root):def dfs(node,low, high):ifnotnode:return Trueif not (low < node.val < high):return Falsereturn dfs(node.left, low,node.val) anddfs(node.right,node.val,high)return dfs(root, float('-inf'), float('inf'))```**Time Complexity:** O(N)**Space Complexity:** O(N)11. Validate BST\u2705One-liner:Use bounds to check if every nodeis within(min,max).",
    "oneLiner": "### **10.Count Good Nodesin Binary Tree**```pythondef goodNodes(root):def dfs(node,maxVal):if not node:return 0count = 1if node.val >= maxVal else 0maxVal =max(maxVal, node.val)return count + dfs(node.left, maxVal) + dfs(node.right, maxVal)return dfs(root, root.val)```**Time Complexity:** O(N)**Space Complexity:** O(N)10. CountGood Nodes\u2705One-liner:DFS downthe treeand count nodes>= max seen sofar.\ud83d\udc763-linerfor kids:Start from root.If you\u2019rebiggerthan allparents,count yourself.Pass themax as you go down.\ud83e\udde0Mnemonics:\"Comparewith max\" \u2192 count= 1 ifnode.val>= maxVal else 0\"Pass down max\" \u2192maxVal =max(maxVal, node.val)\"Sum results\" \u2192 return count + dfs(left) +dfs(right)---### **11.Validate BinarySearch Tree**```pythondef isValidBST(root):def dfs(node,low, high):ifnotnode:return Trueif not (low < node.val < high):return Falsereturn dfs(node.left, low,node.val) anddfs(node.right,node.val,high)return dfs(root, float('-inf'), float('inf'))```**Time Complexity:** O(N)**Space Complexity:** O(N)11. Validate BST\u2705One-liner:Use bounds to check if every nodeis within(min,max).",
    "threeLiner": "### **10.Count Good Nodesin Binary Tree**```pythondef goodNodes(root):def dfs(node,maxVal):if not node:return 0count = 1if node.val >= maxVal else 0maxVal =max(maxVal, node.val)return count + dfs(node.left, maxVal) + dfs(node.right, maxVal)return dfs(root, root.val)```**Time Complexity:** O(N)**Space Complexity:** O(N)10. CountGood Nodes\u2705One-liner:DFS downthe treeand count nodes>= max seen sofar.\ud83d\udc763-linerfor kids:Start from root.If you\u2019rebiggerthan allparents,count yourself.Pass themax as you go down.\ud83e\udde0Mnemonics:\"Comparewith max\" \u2192 count= 1 ifnode.val>= maxVal else 0\"Pass down max\" \u2192maxVal =max(maxVal, node.val)\"Sum results\" \u2192 return count + dfs(left) +dfs(right)---### **11.Validate BinarySearch Tree**```pythondef isValidBST(root):def dfs(node,low, high):ifnotnode:return Trueif not (low < node.val < high):return Falsereturn dfs(node.left, low,node.val) anddfs(node.right,node.val,high)return dfs(root, float('-inf'), float('inf'))```**Time Complexity:** O(N)**Space Complexity:** O(N)11. Validate BST\u2705One-liner:Use bounds to check if every nodeis within(min,max).",
    "mnemonic": "### **10.Count Good Nodesin Binary Tree**",
    "code": "```python"
  },
  {
    "title": "def goodNodes(root):",
    "difficulty": "def dfs(node,maxVal):",
    "question": "if not node:",
    "hint": "return 0",
    "oneLiner": "count = 1if node.val >= maxVal else 0",
    "threeLiner": "maxVal =max(maxVal, node.val)",
    "mnemonic": "return count + dfs(node.left, maxVal) + dfs(node.right, maxVal)",
    "code": "return dfs(root, root.val)"
  },
  {
    "title": "```",
    "difficulty": "**Time Complexity:** O(N)",
    "question": "**Space Complexity:** O(N)",
    "hint": "10. CountGood Nodes",
    "oneLiner": "\u2705One-liner:",
    "threeLiner": "DFS downthe treeand count nodes>= max seen sofar.",
    "mnemonic": "\ud83d\udc763-linerfor kids:",
    "code": "Start from root."
  },
  {
    "title": "If you\u2019rebiggerthan allparents,count yourself.",
    "difficulty": "Pass themax as you go down.",
    "question": "\ud83e\udde0Mnemonics:",
    "hint": "\"Comparewith max\" \u2192 count= 1 ifnode.val>= maxVal else 0",
    "oneLiner": "\"Pass down max\" \u2192maxVal =max(maxVal, node.val)",
    "threeLiner": "\"Sum results\" \u2192 return count + dfs(left) +dfs(right)",
    "mnemonic": "---",
    "code": "### **11.Validate BinarySearch Tree**"
  },
  {
    "title": "```python",
    "difficulty": "def isValidBST(root):",
    "question": "def dfs(node,low, high):",
    "hint": "ifnotnode:",
    "oneLiner": "return True",
    "threeLiner": "if not (low < node.val < high):",
    "mnemonic": "return False",
    "code": "return dfs(node.left, low,node.val) anddfs(node.right,"
  },
  {
    "title": "node.val,high)",
    "difficulty": "return dfs(root, float('-inf'), float('inf'))",
    "question": "```",
    "hint": "**Time Complexity:** O(N)",
    "oneLiner": "**Space Complexity:** O(N)",
    "threeLiner": "11. Validate BST",
    "mnemonic": "\u2705One-liner:",
    "code": "Use bounds to check if every nodeis within(min,max)."
  },
  {
    "title": "\ud83d\udc763-linerfor kids:Every left shouldbe smaller.Every right should be bigger.Use ranges to check!\ud83e\udde0Mnemonics:\"Check value\" \u2192 if not (low < node.val < high): return False\"Update bounds\" \u2192dfs(node.left, low, node.val)\"Return True forleaf\" \u2192 if not node: return True---### **12.Kth Smallest Element ina BST**```pythondef kthSmallest(root, k):stack= []whileroot orstack:while root:stack.append(root)root= root.leftroot = stack.pop()k-= 1if k == 0:return root.valroot = root.right```**Time Complexity:** O(H +K)**Space Complexity:** O(H)12. Kth Smallestin BST\u2705One-liner:Inorder traversalgives sorted values\u2014return kth.\ud83d\udc763-linerfor kids:Left \u2192 Root \u2192 Right givessorted list.Stop whenyou hitthe kthvalue.Use a stack to godeep.\ud83e\udde0Mnemonics:\"Go left\"\u2192 whileroot: stack.append(root)\"Pop & count\" \u2192 root = stack.pop(); k-= 1\"Found kth\" \u2192 ifk == 0: return root.val---### **13.Construct BinaryTree from Preorder andInorderTraversal**```pythondef buildTree(preorder, inorder):inorder_map ={val: idx for idx, val inenumerate(inorder)}def helper(pre_idx, in_left, in_right):",
    "difficulty": "\ud83d\udc763-linerfor kids:Every left shouldbe smaller.Every right should be bigger.Use ranges to check!\ud83e\udde0Mnemonics:\"Check value\" \u2192 if not (low < node.val < high): return False\"Update bounds\" \u2192dfs(node.left, low, node.val)\"Return True forleaf\" \u2192 if not node: return True---### **12.Kth Smallest Element ina BST**```pythondef kthSmallest(root, k):stack= []whileroot orstack:while root:stack.append(root)root= root.leftroot = stack.pop()k-= 1if k == 0:return root.valroot = root.right```**Time Complexity:** O(H +K)**Space Complexity:** O(H)12. Kth Smallestin BST\u2705One-liner:Inorder traversalgives sorted values\u2014return kth.\ud83d\udc763-linerfor kids:Left \u2192 Root \u2192 Right givessorted list.Stop whenyou hitthe kthvalue.Use a stack to godeep.\ud83e\udde0Mnemonics:\"Go left\"\u2192 whileroot: stack.append(root)\"Pop & count\" \u2192 root = stack.pop(); k-= 1\"Found kth\" \u2192 ifk == 0: return root.val---### **13.Construct BinaryTree from Preorder andInorderTraversal**```pythondef buildTree(preorder, inorder):inorder_map ={val: idx for idx, val inenumerate(inorder)}def helper(pre_idx, in_left, in_right):",
    "question": "\ud83d\udc763-linerfor kids:Every left shouldbe smaller.Every right should be bigger.Use ranges to check!\ud83e\udde0Mnemonics:\"Check value\" \u2192 if not (low < node.val < high): return False\"Update bounds\" \u2192dfs(node.left, low, node.val)\"Return True forleaf\" \u2192 if not node: return True---### **12.Kth Smallest Element ina BST**```pythondef kthSmallest(root, k):stack= []whileroot orstack:while root:stack.append(root)root= root.leftroot = stack.pop()k-= 1if k == 0:return root.valroot = root.right```**Time Complexity:** O(H +K)**Space Complexity:** O(H)12. Kth Smallestin BST\u2705One-liner:Inorder traversalgives sorted values\u2014return kth.\ud83d\udc763-linerfor kids:Left \u2192 Root \u2192 Right givessorted list.Stop whenyou hitthe kthvalue.Use a stack to godeep.\ud83e\udde0Mnemonics:\"Go left\"\u2192 whileroot: stack.append(root)\"Pop & count\" \u2192 root = stack.pop(); k-= 1\"Found kth\" \u2192 ifk == 0: return root.val---### **13.Construct BinaryTree from Preorder andInorderTraversal**```pythondef buildTree(preorder, inorder):inorder_map ={val: idx for idx, val inenumerate(inorder)}def helper(pre_idx, in_left, in_right):",
    "hint": "\ud83d\udc763-linerfor kids:",
    "oneLiner": "Every left shouldbe smaller.",
    "threeLiner": "Every right should be bigger.",
    "mnemonic": "Use ranges to check!",
    "code": "\ud83e\udde0Mnemonics:"
  },
  {
    "title": "\"Check value\" \u2192 if not (low < node.val < high): return False",
    "difficulty": "\"Update bounds\" \u2192dfs(node.left, low, node.val)",
    "question": "\"Return True forleaf\" \u2192 if not node: return True",
    "hint": "---",
    "oneLiner": "### **12.Kth Smallest Element ina BST**",
    "threeLiner": "```python",
    "mnemonic": "def kthSmallest(root, k):",
    "code": "stack= []"
  },
  {
    "title": "whileroot orstack:",
    "difficulty": "while root:",
    "question": "stack.append(root)",
    "hint": "root= root.left",
    "oneLiner": "root = stack.pop()",
    "threeLiner": "k-= 1",
    "mnemonic": "if k == 0:",
    "code": "return root.val"
  },
  {
    "title": "root = root.right",
    "difficulty": "```",
    "question": "**Time Complexity:** O(H +K)",
    "hint": "**Space Complexity:** O(H)",
    "oneLiner": "12. Kth Smallestin BST",
    "threeLiner": "\u2705One-liner:",
    "mnemonic": "Inorder traversalgives sorted values\u2014return kth.",
    "code": "\ud83d\udc763-linerfor kids:"
  },
  {
    "title": "Left \u2192 Root \u2192 Right givessorted list.",
    "difficulty": "Stop whenyou hitthe kthvalue.",
    "question": "Use a stack to godeep.",
    "hint": "\ud83e\udde0Mnemonics:",
    "oneLiner": "\"Go left\"\u2192 whileroot: stack.append(root)",
    "threeLiner": "\"Pop & count\" \u2192 root = stack.pop(); k-= 1",
    "mnemonic": "\"Found kth\" \u2192 ifk == 0: return root.val",
    "code": "---"
  },
  {
    "title": "### **13.Construct BinaryTree from Preorder andInorderTraversal**",
    "difficulty": "```python",
    "question": "def buildTree(preorder, inorder):",
    "hint": "inorder_map ={val: idx for idx, val inenumerate(inorder)}",
    "oneLiner": "def helper(pre_idx, in_left, in_right):",
    "threeLiner": "if in_left > in_right:return Noneroot_val= preorder[pre_idx]root = TreeNode(root_val)in_idx =inorder_map[root_val]root.left= helper(pre_idx+ 1, in_left,in_idx -1)root.right = helper(pre_idx + (in_idx - in_left) + 1,in_idx+ 1,in_right)return rootreturn helper(0, 0, len(inorder) -1)```**Time Complexity:** O(N)**Space Complexity:** O(N)13. BuildTree (Preorder +Inorder)\u2705One-liner:Use preorder to pick roots, inorder to split left/right.\ud83d\udc763-linerfor kids:First value is root.Inordertells youwho\u2019s left/right.Recursively buildthe tree!\ud83e\udde0Mnemonics:\"Map inorder index\" \u2192 inorder_map= {val: idx for...}\"Pick root\" \u2192 root_val = preorder[pre_idx]\"Split subtrees\"\u2192 helper(pre_idx+1, ..., in_idx-1)---### **14.BinaryTree Maximum PathSum**```pythondef maxPathSum(root):max_sum = float('-inf')def dfs(node):nonlocalmax_sumif not node:return 0left = max(dfs(node.left),0)right = max(dfs(node.right), 0)max_sum =max(max_sum, left + right+ node.val)return node.val +max(left, right)dfs(root)return max_sum```**Time Complexity:** O(N)**Space Complexity:** O(N)",
    "mnemonic": "if in_left > in_right:return Noneroot_val= preorder[pre_idx]root = TreeNode(root_val)in_idx =inorder_map[root_val]root.left= helper(pre_idx+ 1, in_left,in_idx -1)root.right = helper(pre_idx + (in_idx - in_left) + 1,in_idx+ 1,in_right)return rootreturn helper(0, 0, len(inorder) -1)```**Time Complexity:** O(N)**Space Complexity:** O(N)13. BuildTree (Preorder +Inorder)\u2705One-liner:Use preorder to pick roots, inorder to split left/right.\ud83d\udc763-linerfor kids:First value is root.Inordertells youwho\u2019s left/right.Recursively buildthe tree!\ud83e\udde0Mnemonics:\"Map inorder index\" \u2192 inorder_map= {val: idx for...}\"Pick root\" \u2192 root_val = preorder[pre_idx]\"Split subtrees\"\u2192 helper(pre_idx+1, ..., in_idx-1)---### **14.BinaryTree Maximum PathSum**```pythondef maxPathSum(root):max_sum = float('-inf')def dfs(node):nonlocalmax_sumif not node:return 0left = max(dfs(node.left),0)right = max(dfs(node.right), 0)max_sum =max(max_sum, left + right+ node.val)return node.val +max(left, right)dfs(root)return max_sum```**Time Complexity:** O(N)**Space Complexity:** O(N)",
    "code": "if in_left > in_right:return Noneroot_val= preorder[pre_idx]root = TreeNode(root_val)in_idx =inorder_map[root_val]root.left= helper(pre_idx+ 1, in_left,in_idx -1)root.right = helper(pre_idx + (in_idx - in_left) + 1,in_idx+ 1,in_right)return rootreturn helper(0, 0, len(inorder) -1)```**Time Complexity:** O(N)**Space Complexity:** O(N)13. BuildTree (Preorder +Inorder)\u2705One-liner:Use preorder to pick roots, inorder to split left/right.\ud83d\udc763-linerfor kids:First value is root.Inordertells youwho\u2019s left/right.Recursively buildthe tree!\ud83e\udde0Mnemonics:\"Map inorder index\" \u2192 inorder_map= {val: idx for...}\"Pick root\" \u2192 root_val = preorder[pre_idx]\"Split subtrees\"\u2192 helper(pre_idx+1, ..., in_idx-1)---### **14.BinaryTree Maximum PathSum**```pythondef maxPathSum(root):max_sum = float('-inf')def dfs(node):nonlocalmax_sumif not node:return 0left = max(dfs(node.left),0)right = max(dfs(node.right), 0)max_sum =max(max_sum, left + right+ node.val)return node.val +max(left, right)dfs(root)return max_sum```**Time Complexity:** O(N)**Space Complexity:** O(N)"
  },
  {
    "title": "if in_left > in_right:",
    "difficulty": "return None",
    "question": "root_val= preorder[pre_idx]",
    "hint": "root = TreeNode(root_val)",
    "oneLiner": "in_idx =inorder_map[root_val]",
    "threeLiner": "root.left= helper(pre_idx+ 1, in_left,in_idx -1)",
    "mnemonic": "root.right = helper(pre_idx + (in_idx - in_left) + 1,in_idx+ 1,",
    "code": "in_right)"
  },
  {
    "title": "return root",
    "difficulty": "return helper(0, 0, len(inorder) -1)",
    "question": "```",
    "hint": "**Time Complexity:** O(N)",
    "oneLiner": "**Space Complexity:** O(N)",
    "threeLiner": "13. BuildTree (Preorder +Inorder)",
    "mnemonic": "\u2705One-liner:",
    "code": "Use preorder to pick roots, inorder to split left/right."
  },
  {
    "title": "\ud83d\udc763-linerfor kids:",
    "difficulty": "First value is root.",
    "question": "Inordertells youwho\u2019s left/right.",
    "hint": "Recursively buildthe tree!",
    "oneLiner": "\ud83e\udde0Mnemonics:",
    "threeLiner": "\"Map inorder index\" \u2192 inorder_map= {val: idx for...}",
    "mnemonic": "\"Pick root\" \u2192 root_val = preorder[pre_idx]",
    "code": "\"Split subtrees\"\u2192 helper(pre_idx+1, ..., in_idx-1)"
  },
  {
    "title": "---",
    "difficulty": "### **14.BinaryTree Maximum PathSum**",
    "question": "```python",
    "hint": "def maxPathSum(root):",
    "oneLiner": "max_sum = float('-inf')",
    "threeLiner": "def dfs(node):",
    "mnemonic": "nonlocalmax_sum",
    "code": "if not node:"
  },
  {
    "title": "return 0",
    "difficulty": "left = max(dfs(node.left),0)",
    "question": "right = max(dfs(node.right), 0)",
    "hint": "max_sum =max(max_sum, left + right+ node.val)",
    "oneLiner": "return node.val +max(left, right)",
    "threeLiner": "dfs(root)",
    "mnemonic": "return max_sum",
    "code": "```"
  },
  {
    "title": "**Time Complexity:** O(N)",
    "difficulty": "**Space Complexity:** O(N)",
    "question": "14. Binary Tree Max Path Sum\u2705One-liner:DFS eachnode andtrack best pathgoing through it.\ud83d\udc763-linerfor kids:Try everypath that bendsat a node.Track thebest total sum.Only return max single-leg path upward!\ud83e\udde0Mnemonics:\"Ignore negatives\" \u2192 left= max(dfs(node.left), 0)\"Update globalmax\" \u2192 max_sum =max(max_sum, left+ right + node.val)\"Return one leg\"\u2192 returnnode.val+ max(left, right)---### **15.Serialize and Deserialize BinaryTree**```pythondef serialize(root):return json.dumps([] if not root else [root.val,serialize(root.left), serialize(root.right)])def deserialize(data):lst =json.loads(data)if not lst:return Nonenode= TreeNode(lst[0])node.left = deserialize(lst[1])node.right =deserialize(lst[2])return node```**Time Complexity:** O(N)**Space Complexity:** O(N)---15. Serialize/DeserializeTree\u2705One-liner:Turn thetree into a nested list and JSON it.\ud83d\udc763-linerfor kids:Turn treeinto astring.Send it over thewire.Rebuild it later!\ud83e\udde0Mnemonics:\"Listifytree\" \u2192[val, left, right]\"Use JSON\" \u2192 json.dumps(...) / json.loads(...)\"Recursive decode\" \u2192 deserialize(lst[1]), deserialize(lst[2])",
    "hint": "14. Binary Tree Max Path Sum\u2705One-liner:DFS eachnode andtrack best pathgoing through it.\ud83d\udc763-linerfor kids:Try everypath that bendsat a node.Track thebest total sum.Only return max single-leg path upward!\ud83e\udde0Mnemonics:\"Ignore negatives\" \u2192 left= max(dfs(node.left), 0)\"Update globalmax\" \u2192 max_sum =max(max_sum, left+ right + node.val)\"Return one leg\"\u2192 returnnode.val+ max(left, right)---### **15.Serialize and Deserialize BinaryTree**```pythondef serialize(root):return json.dumps([] if not root else [root.val,serialize(root.left), serialize(root.right)])def deserialize(data):lst =json.loads(data)if not lst:return Nonenode= TreeNode(lst[0])node.left = deserialize(lst[1])node.right =deserialize(lst[2])return node```**Time Complexity:** O(N)**Space Complexity:** O(N)---15. Serialize/DeserializeTree\u2705One-liner:Turn thetree into a nested list and JSON it.\ud83d\udc763-linerfor kids:Turn treeinto astring.Send it over thewire.Rebuild it later!\ud83e\udde0Mnemonics:\"Listifytree\" \u2192[val, left, right]\"Use JSON\" \u2192 json.dumps(...) / json.loads(...)\"Recursive decode\" \u2192 deserialize(lst[1]), deserialize(lst[2])",
    "oneLiner": "14. Binary Tree Max Path Sum\u2705One-liner:DFS eachnode andtrack best pathgoing through it.\ud83d\udc763-linerfor kids:Try everypath that bendsat a node.Track thebest total sum.Only return max single-leg path upward!\ud83e\udde0Mnemonics:\"Ignore negatives\" \u2192 left= max(dfs(node.left), 0)\"Update globalmax\" \u2192 max_sum =max(max_sum, left+ right + node.val)\"Return one leg\"\u2192 returnnode.val+ max(left, right)---### **15.Serialize and Deserialize BinaryTree**```pythondef serialize(root):return json.dumps([] if not root else [root.val,serialize(root.left), serialize(root.right)])def deserialize(data):lst =json.loads(data)if not lst:return Nonenode= TreeNode(lst[0])node.left = deserialize(lst[1])node.right =deserialize(lst[2])return node```**Time Complexity:** O(N)**Space Complexity:** O(N)---15. Serialize/DeserializeTree\u2705One-liner:Turn thetree into a nested list and JSON it.\ud83d\udc763-linerfor kids:Turn treeinto astring.Send it over thewire.Rebuild it later!\ud83e\udde0Mnemonics:\"Listifytree\" \u2192[val, left, right]\"Use JSON\" \u2192 json.dumps(...) / json.loads(...)\"Recursive decode\" \u2192 deserialize(lst[1]), deserialize(lst[2])",
    "threeLiner": "14. Binary Tree Max Path Sum",
    "mnemonic": "\u2705One-liner:",
    "code": "DFS eachnode andtrack best pathgoing through it."
  },
  {
    "title": "\ud83d\udc763-linerfor kids:",
    "difficulty": "Try everypath that bendsat a node.",
    "question": "Track thebest total sum.",
    "hint": "Only return max single-leg path upward!",
    "oneLiner": "\ud83e\udde0Mnemonics:",
    "threeLiner": "\"Ignore negatives\" \u2192 left= max(dfs(node.left), 0)",
    "mnemonic": "\"Update globalmax\" \u2192 max_sum =max(max_sum, left+ right + node.val)",
    "code": "\"Return one leg\"\u2192 returnnode.val+ max(left, right)"
  },
  {
    "title": "---",
    "difficulty": "### **15.Serialize and Deserialize BinaryTree**",
    "question": "```python",
    "hint": "def serialize(root):",
    "oneLiner": "return json.dumps([] if not root else [root.val,",
    "threeLiner": "serialize(root.left), serialize(root.right)])",
    "mnemonic": "def deserialize(data):",
    "code": "lst =json.loads(data)"
  },
  {
    "title": "if not lst:",
    "difficulty": "return None",
    "question": "node= TreeNode(lst[0])",
    "hint": "node.left = deserialize(lst[1])",
    "oneLiner": "node.right =deserialize(lst[2])",
    "threeLiner": "return node",
    "mnemonic": "```",
    "code": "**Time Complexity:** O(N)"
  },
  {
    "title": "**Space Complexity:** O(N)",
    "difficulty": "---",
    "question": "15. Serialize/DeserializeTree",
    "hint": "\u2705One-liner:",
    "oneLiner": "Turn thetree into a nested list and JSON it.",
    "threeLiner": "\ud83d\udc763-linerfor kids:",
    "mnemonic": "Turn treeinto astring.",
    "code": "Send it over thewire."
  }
];
export default trees;