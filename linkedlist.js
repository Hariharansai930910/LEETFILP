const linkedlist = [
  {
    "title": "1. Reverse LinkedListProblem:Reversea singlylinked list.OptimizedApproach: Use iterativetwo-pointer technique.pythonCopyEditclass ListNode:def __init__(self, val=0, next=None):self.val= valself.next= nextdef reverseList(head: ListNode) ->ListNode:prev,curr =None, headwhilecurr:nxt = curr.nextcurr.next= prevprev = currcurr = nxtreturn prevTime Complexity:\ud835\udc42(\ud835\udc41)O(N)Space Complexity:\ud835\udc42(1)O(1)1. Reverse LinkedList\u2705One-liner:Iteratively reverse pointers one node at atime.\ud83d\udc763-linerfor kids:We go through thelist oneby one.We turn each pointer backward instead of forward.When we finish, the list isflipped!\ud83e\udde0Mnemonics:\"Track previous\"\u2192 prev =None\"Flip pointer\" \u2192curr.next= prev\"Move forward\" \u2192prev, curr = curr, curr.next-------------------------------------------------------------------2. MergeTwo Sorted ListsProblem:Merge two sortedlinked lists intoone sorted list.OptimizedApproach: Use adummy node and iterative merging.pythonCopyEditdef mergeTwoLists(l1: ListNode, l2: ListNode) -> ListNode:dummy= ListNode()tail= dummywhile l1 and l2:if l1.val< l2.val:tail.next = l1l1 =l1.nextelse:tail.next = l2l2 =l2.nexttail = tail.nexttail.next = l1 if l1 else l2return dummy.nextTime Complexity:\ud835\udc42(\ud835\udc41+\ud835\udc40)O(N+M)Space Complexity:\ud835\udc42(1)O(1)2. MergeTwo Sorted Lists\u2705One-liner:Use two pointersto weavenodes into a sorted list.\ud83d\udc763-linerfor kids:We compare headsof both lists.We alwayspick the smaller one andkeep going.We attachleftover nodes at the end.\ud83e\udde0Mnemonics:\"Dummy node start\" \u2192 dummy= ListNode()\"Pick smaller\" \u2192if l1.val< l2.val: attachl1\"Link remainder\"\u2192 tail.next = l1or l2------------------------------------------------------------------------3. LinkedList CycleProblem:Detect if a linked list has a cycle.OptimizedApproach: Use Floyd\u2019s Cycle Detection (slow & fast pointers).pythonCopyEditdef hasCycle(head: ListNode) -> bool:slow,fast =head, headwhilefast and fast.next:slow = slow.nextfast = fast.next.nextif slow == fast:return Truereturn FalseTime Complexity:\ud835\udc42(\ud835\udc41)O(N)Space Complexity:\ud835\udc42(1)O(1)3. LinkedList Cycle\u2705One-liner:Use two pointers(slow andfast) to detecta loop.\ud83d\udc763-linerfor kids:One pointer movesfast, the othermoves slow.If they ever meet, there\u2019sa loop.If the fast one finishes,there\u2019sno cycle.\ud83e\udde0Mnemonics:\"Initialize pointers\" \u2192 slow, fast= head,head\"Move fast x2\" \u2192fast = fast.next.next\"Check meeting point\" \u2192 ifslow ==fast: return True--------------------------------------------------------------------4. Reorder ListProblem:Reordera linkedlist in-place asL0 \u2192 Ln\u2192 L1 \u2192 Ln-1\u2192 L2 \u2192Ln-2 \u2192 ...OptimizedApproach: Find the middle, reverse second half,and merge.pythonCopyEditdef reorderList(head: ListNode) ->None:if not head or not head.next:return# Find middleslow,fast =head, headwhilefast and fast.next:slow = slow.nextfast = fast.next.next# Reverse second halfprev,curr =None, slow.nextslow.next = None  # Split listwhilecurr:nxt = curr.nextcurr.next= prevprev = currcurr = nxt# Merge two halvesfirst, second= head,prevwhilesecond:tmp1, tmp2 = first.next, second.nextfirst.next = secondsecond.next = tmp1first, second = tmp1, tmp2Time Complexity:\ud835\udc42(\ud835\udc41)O(N)Space Complexity:\ud835\udc42(1)O(1)4. Reorder List\u2705One-liner:Split thelist, reverse the secondhalf, and merge both.\ud83d\udc763-linerfor kids:We find the middle of thelist.We reverse the second half.Then we zig-zag merge thetwo parts.\ud83e\udde0Mnemonics:\"Find mid\" \u2192 slow= slow.next, fast = fast.next.next\"Reversehalf\" \u2192second =reverse(middle)\"Merge halves\" \u2192while first and second: alternate attach----------------------------------------------------------------------------5. RemoveNth Node From End of ListProblem:Remove the nth node fromthe end of thelist.OptimizedApproach: Use two-pointer technique.pythonCopyEditdef removeNthFromEnd(head:ListNode, n: int) -> ListNode:dummy= ListNode(0, head)fast,slow =dummy, dummyfor _in range(n + 1):fast = fast.nextwhilefast:fast = fast.nextslow = slow.nextslow.next = slow.next.nextreturn dummy.nextTime Complexity:\ud835\udc42(\ud835\udc41)O(N)Space Complexity:\ud835\udc42(1)O(1)5. RemoveNth Node From End of List\u2705One-liner:Use two pointerswith n distance apart.\ud83d\udc763-linerfor kids:We move one pointer n steps ahead.Then we move bothtogetheruntil the fast one ends.The slowone is right before the node to remove.\ud83e\udde0Mnemonics:\"Advancefast\" \u2192for _ inrange(n): fast =fast.next\"Move both\" \u2192 while fast.next: slow = slow.next\"Remove node\" \u2192 slow.next= slow.next.next------------------------------------------------------------------------------6. Copy List withRandom PointerProblem:Clone alinked list witha randompointer.OptimizedApproach: Use interleaving nodes.pythonCopyEditdef copyRandomList(head: 'Node') -> 'Node':if not head:return None# Step 1: Create new nodes interleavedwith the old nodescurr= headwhilecurr:nxt = curr.nextcurr.next= Node(curr.val,nxt, None)curr = nxt# Step 2: Assign random pointerscurr= headwhilecurr:if curr.random:curr.next.random = curr.random.nextcurr = curr.next.next# Step 3: Separate the two listsold,new = head, head.nextnew_head = head.nextwhileold:old.next= old.next.nextnew.next= new.next.next if new.next elseNoneold, new= old.next, new.nextreturn new_headTime Complexity:\ud835\udc42(\ud835\udc41)O(N)Space Complexity:\ud835\udc42(1)O(1)6. Copy List withRandom Pointer\u2705One-liner:Interleave original and copied nodes, fix randoms, then split.\ud83d\udc763-linerfor kids:We copy each nodeand putit rightnext tothe original.Then we fix the random pointers.Last, wesplit them into two separate lists.\ud83e\udde0Mnemonics:\"Clone nodes\" \u2192 curr.next= Node(curr.val)\"Fix random\" \u2192 curr.next.random =curr.random.next\"Separatelists\"\u2192 original.next =clone.next; clone.next =clone.next.next-----------------------------------7. Add Two NumbersProblem:Add twolinked lists representingnumbers.OptimizedApproach: Use dummy nodeand carry.pythonCopyEditdef addTwoNumbers(l1: ListNode, l2: ListNode) -> ListNode:dummy= ListNode()curr,carry =dummy, 0whilel1 or l2 or carry:val1 = l1.val if l1 else 0val2 = l2.val if l2 else 0carry, sum_val = divmod(val1 + val2+ carry, 10)curr.next= ListNode(sum_val)curr = curr.nextl1 = l1.next if l1else Nonel2 = l2.next if l2else Nonereturn dummy.nextTime Complexity:\ud835\udc42(max\u2061(\ud835\udc41,\ud835\udc40))O(max(N,M))Space Complexity:\ud835\udc42(1)O(1)7. Add Two Numbers\u2705One-liner:Add digits from each listnode bynode withcarry.\ud83d\udc763-linerfor kids:We add the numbers digit by digit.If the sum is toobig, wecarry tothe nextone.We builda new list as wego.\ud83e\udde0Mnemonics:\"Add values + carry\" \u2192 total= l1.val + l2.val + carry\"Carry forward\" \u2192carry =total //10\"Create node\" \u2192 current.next = ListNode(total % 10)=------------------------------------------------------------------8. Find The Duplicate NumberProblem:Find theduplicatenumberin an array.OptimizedApproach: Use Floyd's Cycle Detection.pythonCopyEditdef findDuplicate(nums: list[int])-> int:slow,fast =nums[0],nums[0]whileTrue:slow = nums[slow]fast = nums[nums[fast]]if slow == fast:breakslow= nums[0]whileslow !=fast:slow = nums[slow]fast = nums[fast]return slowTime Complexity:\ud835\udc42(\ud835\udc41)O(N)Space Complexity:\ud835\udc42(1)O(1)8. Find the Duplicate Number\u2705One-liner:Use Floyd's CycleDetection (likeLinked List Cycle) on index mapping.\ud83d\udc763-linerfor kids:We pretend the numbers arepointers in a list.We find acycle using slowand fast.Then we find where the cycle begins\u2014that'sthe duplicate.\ud83e\udde0Mnemonics:\"Find meeting\" \u2192slow = nums[slow]; fast =nums[nums[fast]]\"Find entrance\" \u2192slow = 0; move both tillthey meet\"Return dup\" \u2192 return slow----------------------------------------------------------------------------------9. LRU CacheProblem:Implement an LRU(Least Recently Used) Cache.OptimizedApproach: Use OrderedDict.pythonCopyEditfrom collectionsimport OrderedDictclass LRUCache:def __init__(self, capacity: int):self.cache = OrderedDict()self.capacity = capacitydef get(self,key: int) -> int:if key inself.cache:self.cache.move_to_end(key)return self.cache[key]return -1def put(self,key: int, value:int) -> None:if key inself.cache:self.cache.move_to_end(key)self.cache[key] =valueif len(self.cache)> self.capacity:self.cache.popitem(last=False)Time Complexity:\ud835\udc42(1)O(1)Space Complexity:\ud835\udc42(\ud835\udc36)O(C) (Cache size)9. LRU Cache\u2705One-liner:Use a hash map +doubly linked list to track usage orderand values.\ud83d\udc763-linerfor kids:We keep alist ofrecentlyused items.When something isused, wemove itto the front.If the cache is full, we remove the oldestfrom the back.\ud83e\udde0Mnemonics:\"Get/moveto front\" \u2192 move_to_front(node)\"Insert new\" \u2192 add node tohead\"Evict old\" \u2192 remove tailnode ifover capacity-------------------------------------------------------10. MergeK Sorted ListsOptimizedApproach: Use Min-Heap.pythonCopyEditfrom heapq importheappush, heappopdef mergeKLists(lists: list[ListNode]) -> ListNode:heap= []dummy= ListNode()curr= dummyfor i, lst inenumerate(lists):if lst:heappush(heap,(lst.val, i, lst))whileheap:val, i, node = heappop(heap)curr.next= nodecurr = nodeif node.next:heappush(heap,(node.next.val,i, node.next))return dummy.nextTime Complexity:\ud835\udc42(\ud835\udc41log\u2061\ud835\udc3e)O(NlogK)Space Complexity:\ud835\udc42(\ud835\udc3e)O(K)10. MergeK Sorted Lists\u2705One-liner:Use a min-heap toalways pick thesmallestnode among lists.\ud83d\udc763-linerfor kids:We look at the first nodefrom each list.We alwayspick the smallest and move forward in that list.We keep buildinga new sorted list.\ud83e\udde0Mnemonics:\"Push allheads\"\u2192 heapq.heappush(heap, (node.val, i, node))\"Pop smallest\" \u2192val, i, node = heapq.heappop(heap)\"Advancelist\" \u2192heapq.heappush(heap, (node.next.val, i,node.next))-----------------------------------------------------11. Reverse Nodesin K-Group\u2705One-liner:Group nodes in k,reversein-place, and connect recursively oriteratively.\ud83d\udc763-linerfor kids:We take chunks ofk nodes.We flip the orderof eachgroup.We connect the reversed parts backtogether.\ud83e\udde0Mnemonics:\"Count nodes\" \u2192 for _ in range(k):if not curr: return head\"Reversek\" \u2192reverse segment between headand k-th\"Link next group\"\u2192 head.next = recurse/iterate with nextgroupclass Solution:def reverseKGroup(self, head:ListNode,k: int) -> ListNode:def get_kth(curr,k):whilecurr andk > 0:curr = curr.nextk-= 1return currdummy = ListNode(0)dummy.next = headgroup_prev = dummywhile True:kth =get_kth(group_prev, k)if not kth:breakgroup_next = kth.next# Reverse groupprev,curr = kth.next,group_prev.nextwhilecurr !=group_next:temp = curr.nextcurr.next= prevprev = currcurr = temptemp= group_prev.nextgroup_prev.next = kthgroup_prev = tempreturn dummy.next",
    "difficulty": "1. Reverse LinkedListProblem:Reversea singlylinked list.OptimizedApproach: Use iterativetwo-pointer technique.pythonCopyEditclass ListNode:def __init__(self, val=0, next=None):self.val= valself.next= nextdef reverseList(head: ListNode) ->ListNode:prev,curr =None, headwhilecurr:nxt = curr.nextcurr.next= prevprev = currcurr = nxtreturn prevTime Complexity:\ud835\udc42(\ud835\udc41)O(N)Space Complexity:\ud835\udc42(1)O(1)1. Reverse LinkedList\u2705One-liner:Iteratively reverse pointers one node at atime.\ud83d\udc763-linerfor kids:We go through thelist oneby one.We turn each pointer backward instead of forward.When we finish, the list isflipped!\ud83e\udde0Mnemonics:\"Track previous\"\u2192 prev =None\"Flip pointer\" \u2192curr.next= prev\"Move forward\" \u2192prev, curr = curr, curr.next",
    "question": "1. Reverse LinkedListProblem:Reversea singlylinked list.OptimizedApproach: Use iterativetwo-pointer technique.pythonCopyEditclass ListNode:def __init__(self, val=0, next=None):self.val= valself.next= nextdef reverseList(head: ListNode) ->ListNode:prev,curr =None, headwhilecurr:nxt = curr.nextcurr.next= prevprev = currcurr = nxtreturn prevTime Complexity:\ud835\udc42(\ud835\udc41)O(N)Space Complexity:\ud835\udc42(1)O(1)1. Reverse LinkedList\u2705One-liner:Iteratively reverse pointers one node at atime.\ud83d\udc763-linerfor kids:We go through thelist oneby one.We turn each pointer backward instead of forward.When we finish, the list isflipped!\ud83e\udde0Mnemonics:\"Track previous\"\u2192 prev =None\"Flip pointer\" \u2192curr.next= prev\"Move forward\" \u2192prev, curr = curr, curr.next",
    "hint": "1. Reverse LinkedListProblem:Reversea singlylinked list.OptimizedApproach: Use iterativetwo-pointer technique.pythonCopyEditclass ListNode:def __init__(self, val=0, next=None):self.val= valself.next= nextdef reverseList(head: ListNode) ->ListNode:prev,curr =None, headwhilecurr:nxt = curr.nextcurr.next= prevprev = currcurr = nxtreturn prevTime Complexity:\ud835\udc42(\ud835\udc41)O(N)Space Complexity:\ud835\udc42(1)O(1)1. Reverse LinkedList\u2705One-liner:Iteratively reverse pointers one node at atime.\ud83d\udc763-linerfor kids:We go through thelist oneby one.We turn each pointer backward instead of forward.When we finish, the list isflipped!\ud83e\udde0Mnemonics:\"Track previous\"\u2192 prev =None\"Flip pointer\" \u2192curr.next= prev\"Move forward\" \u2192prev, curr = curr, curr.next",
    "oneLiner": "1. Reverse LinkedList",
    "threeLiner": "Problem:Reversea singlylinked list.",
    "mnemonic": "OptimizedApproach: Use iterativetwo-pointer technique.",
    "code": "python"
  },
  {
    "title": "Copy",
    "difficulty": "Edit",
    "question": "class ListNode:",
    "hint": "def __init__(self, val=0, next=None):",
    "oneLiner": "self.val= val",
    "threeLiner": "self.next= next",
    "mnemonic": "def reverseList(head: ListNode) ->ListNode:",
    "code": "prev,curr =None, head"
  },
  {
    "title": "whilecurr:",
    "difficulty": "nxt = curr.next",
    "question": "curr.next= prev",
    "hint": "prev = curr",
    "oneLiner": "curr = nxt",
    "threeLiner": "return prev",
    "mnemonic": "Time Complexity:",
    "code": "\ud835\udc42"
  },
  {
    "title": "(",
    "difficulty": "\ud835\udc41",
    "question": ")",
    "hint": "O(N)",
    "oneLiner": "Space Complexity:",
    "threeLiner": "\ud835\udc42",
    "mnemonic": "(",
    "code": "1"
  },
  {
    "title": ")",
    "difficulty": "O(1)",
    "question": "1. Reverse LinkedList",
    "hint": "\u2705One-liner:",
    "oneLiner": "Iteratively reverse pointers one node at atime.",
    "threeLiner": "\ud83d\udc763-linerfor kids:",
    "mnemonic": "We go through thelist oneby one.",
    "code": "We turn each pointer backward instead of forward."
  },
  {
    "title": "When we finish, the list isflipped!",
    "difficulty": "\ud83e\udde0Mnemonics:",
    "question": "\"Track previous\"\u2192 prev =None",
    "hint": "\"Flip pointer\" \u2192curr.next= prev",
    "oneLiner": "\"Move forward\" \u2192prev, curr = curr, curr.next",
    "threeLiner": "-------------------------------------------------------------------2. MergeTwo Sorted ListsProblem:Merge two sortedlinked lists intoone sorted list.OptimizedApproach: Use adummy node and iterative merging.pythonCopyEditdef mergeTwoLists(l1: ListNode, l2: ListNode) -> ListNode:dummy= ListNode()tail= dummywhile l1 and l2:if l1.val< l2.val:tail.next = l1l1 =l1.nextelse:tail.next = l2l2 =l2.nexttail = tail.nexttail.next = l1 if l1 else l2return dummy.nextTime Complexity:\ud835\udc42(\ud835\udc41+\ud835\udc40)O(N+M)Space Complexity:\ud835\udc42(1)O(1)2. MergeTwo Sorted Lists\u2705One-liner:Use two pointersto weavenodes into a sorted list.\ud83d\udc763-linerfor kids:We compare headsof both lists.We alwayspick the smaller one andkeep going.We attachleftover nodes at the end.\ud83e\udde0Mnemonics:\"Dummy node start\" \u2192 dummy= ListNode()\"Pick smaller\" \u2192if l1.val< l2.val: attachl1\"Link remainder\"\u2192 tail.next = l1or l2",
    "mnemonic": "-------------------------------------------------------------------2. MergeTwo Sorted ListsProblem:Merge two sortedlinked lists intoone sorted list.OptimizedApproach: Use adummy node and iterative merging.pythonCopyEditdef mergeTwoLists(l1: ListNode, l2: ListNode) -> ListNode:dummy= ListNode()tail= dummywhile l1 and l2:if l1.val< l2.val:tail.next = l1l1 =l1.nextelse:tail.next = l2l2 =l2.nexttail = tail.nexttail.next = l1 if l1 else l2return dummy.nextTime Complexity:\ud835\udc42(\ud835\udc41+\ud835\udc40)O(N+M)Space Complexity:\ud835\udc42(1)O(1)2. MergeTwo Sorted Lists\u2705One-liner:Use two pointersto weavenodes into a sorted list.\ud83d\udc763-linerfor kids:We compare headsof both lists.We alwayspick the smaller one andkeep going.We attachleftover nodes at the end.\ud83e\udde0Mnemonics:\"Dummy node start\" \u2192 dummy= ListNode()\"Pick smaller\" \u2192if l1.val< l2.val: attachl1\"Link remainder\"\u2192 tail.next = l1or l2",
    "code": "-------------------------------------------------------------------2. MergeTwo Sorted ListsProblem:Merge two sortedlinked lists intoone sorted list.OptimizedApproach: Use adummy node and iterative merging.pythonCopyEditdef mergeTwoLists(l1: ListNode, l2: ListNode) -> ListNode:dummy= ListNode()tail= dummywhile l1 and l2:if l1.val< l2.val:tail.next = l1l1 =l1.nextelse:tail.next = l2l2 =l2.nexttail = tail.nexttail.next = l1 if l1 else l2return dummy.nextTime Complexity:\ud835\udc42(\ud835\udc41+\ud835\udc40)O(N+M)Space Complexity:\ud835\udc42(1)O(1)2. MergeTwo Sorted Lists\u2705One-liner:Use two pointersto weavenodes into a sorted list.\ud83d\udc763-linerfor kids:We compare headsof both lists.We alwayspick the smaller one andkeep going.We attachleftover nodes at the end.\ud83e\udde0Mnemonics:\"Dummy node start\" \u2192 dummy= ListNode()\"Pick smaller\" \u2192if l1.val< l2.val: attachl1\"Link remainder\"\u2192 tail.next = l1or l2"
  },
  {
    "title": "-------------------------------------------------------------------",
    "difficulty": "2. MergeTwo Sorted Lists",
    "question": "Problem:Merge two sortedlinked lists intoone sorted list.",
    "hint": "OptimizedApproach: Use adummy node and iterative merging.",
    "oneLiner": "python",
    "threeLiner": "Copy",
    "mnemonic": "Edit",
    "code": "def mergeTwoLists(l1: ListNode, l2: ListNode) -> ListNode:"
  },
  {
    "title": "dummy= ListNode()",
    "difficulty": "tail= dummy",
    "question": "while l1 and l2:",
    "hint": "if l1.val< l2.val:",
    "oneLiner": "tail.next = l1",
    "threeLiner": "l1 =l1.next",
    "mnemonic": "else:",
    "code": "tail.next = l2"
  },
  {
    "title": "l2 =l2.next",
    "difficulty": "tail = tail.next",
    "question": "tail.next = l1 if l1 else l2",
    "hint": "return dummy.next",
    "oneLiner": "Time Complexity:",
    "threeLiner": "\ud835\udc42",
    "mnemonic": "(",
    "code": "\ud835\udc41"
  },
  {
    "title": "+",
    "difficulty": "\ud835\udc40",
    "question": ")",
    "hint": "O(N+M)",
    "oneLiner": "Space Complexity:",
    "threeLiner": "\ud835\udc42",
    "mnemonic": "(",
    "code": "1"
  },
  {
    "title": ")",
    "difficulty": "O(1)",
    "question": "2. MergeTwo Sorted Lists",
    "hint": "\u2705One-liner:",
    "oneLiner": "Use two pointersto weavenodes into a sorted list.",
    "threeLiner": "\ud83d\udc763-linerfor kids:",
    "mnemonic": "We compare headsof both lists.",
    "code": "We alwayspick the smaller one andkeep going."
  },
  {
    "title": "We attachleftover nodes at the end.",
    "difficulty": "\ud83e\udde0Mnemonics:",
    "question": "\"Dummy node start\" \u2192 dummy= ListNode()",
    "hint": "\"Pick smaller\" \u2192if l1.val< l2.val: attachl1",
    "oneLiner": "\"Link remainder\"\u2192 tail.next = l1or l2",
    "threeLiner": "------------------------------------------------------------------------3. LinkedList CycleProblem:Detect if a linked list has a cycle.OptimizedApproach: Use Floyd\u2019s Cycle Detection (slow & fast pointers).pythonCopyEditdef hasCycle(head: ListNode) -> bool:slow,fast =head, headwhilefast and fast.next:slow = slow.nextfast = fast.next.nextif slow == fast:return Truereturn FalseTime Complexity:\ud835\udc42(\ud835\udc41)O(N)Space Complexity:\ud835\udc42(1)O(1)3. LinkedList Cycle\u2705One-liner:Use two pointers(slow andfast) to detecta loop.\ud83d\udc763-linerfor kids:One pointer movesfast, the othermoves slow.If they ever meet, there\u2019sa loop.If the fast one finishes,there\u2019sno cycle.\ud83e\udde0Mnemonics:\"Initialize pointers\" \u2192 slow, fast= head,head\"Move fast x2\" \u2192fast = fast.next.next\"Check meeting point\" \u2192 ifslow ==fast: return True--------------------------------------------------------------------4. Reorder ListProblem:Reordera linkedlist in-place asL0 \u2192 Ln\u2192 L1 \u2192 Ln-1\u2192 L2 \u2192Ln-2 \u2192 ...OptimizedApproach: Find the middle, reverse second half,and merge.python",
    "mnemonic": "------------------------------------------------------------------------3. LinkedList CycleProblem:Detect if a linked list has a cycle.OptimizedApproach: Use Floyd\u2019s Cycle Detection (slow & fast pointers).pythonCopyEditdef hasCycle(head: ListNode) -> bool:slow,fast =head, headwhilefast and fast.next:slow = slow.nextfast = fast.next.nextif slow == fast:return Truereturn FalseTime Complexity:\ud835\udc42(\ud835\udc41)O(N)Space Complexity:\ud835\udc42(1)O(1)3. LinkedList Cycle\u2705One-liner:Use two pointers(slow andfast) to detecta loop.\ud83d\udc763-linerfor kids:One pointer movesfast, the othermoves slow.If they ever meet, there\u2019sa loop.If the fast one finishes,there\u2019sno cycle.\ud83e\udde0Mnemonics:\"Initialize pointers\" \u2192 slow, fast= head,head\"Move fast x2\" \u2192fast = fast.next.next\"Check meeting point\" \u2192 ifslow ==fast: return True--------------------------------------------------------------------4. Reorder ListProblem:Reordera linkedlist in-place asL0 \u2192 Ln\u2192 L1 \u2192 Ln-1\u2192 L2 \u2192Ln-2 \u2192 ...OptimizedApproach: Find the middle, reverse second half,and merge.python",
    "code": "------------------------------------------------------------------------3. LinkedList CycleProblem:Detect if a linked list has a cycle.OptimizedApproach: Use Floyd\u2019s Cycle Detection (slow & fast pointers).pythonCopyEditdef hasCycle(head: ListNode) -> bool:slow,fast =head, headwhilefast and fast.next:slow = slow.nextfast = fast.next.nextif slow == fast:return Truereturn FalseTime Complexity:\ud835\udc42(\ud835\udc41)O(N)Space Complexity:\ud835\udc42(1)O(1)3. LinkedList Cycle\u2705One-liner:Use two pointers(slow andfast) to detecta loop.\ud83d\udc763-linerfor kids:One pointer movesfast, the othermoves slow.If they ever meet, there\u2019sa loop.If the fast one finishes,there\u2019sno cycle.\ud83e\udde0Mnemonics:\"Initialize pointers\" \u2192 slow, fast= head,head\"Move fast x2\" \u2192fast = fast.next.next\"Check meeting point\" \u2192 ifslow ==fast: return True--------------------------------------------------------------------4. Reorder ListProblem:Reordera linkedlist in-place asL0 \u2192 Ln\u2192 L1 \u2192 Ln-1\u2192 L2 \u2192Ln-2 \u2192 ...OptimizedApproach: Find the middle, reverse second half,and merge.python"
  },
  {
    "title": "------------------------------------------------------------------------",
    "difficulty": "3. LinkedList Cycle",
    "question": "Problem:Detect if a linked list has a cycle.",
    "hint": "OptimizedApproach: Use Floyd\u2019s Cycle Detection (slow & fast pointers).",
    "oneLiner": "python",
    "threeLiner": "Copy",
    "mnemonic": "Edit",
    "code": "def hasCycle(head: ListNode) -> bool:"
  },
  {
    "title": "slow,fast =head, head",
    "difficulty": "whilefast and fast.next:",
    "question": "slow = slow.next",
    "hint": "fast = fast.next.next",
    "oneLiner": "if slow == fast:",
    "threeLiner": "return True",
    "mnemonic": "return False",
    "code": "Time Complexity:"
  },
  {
    "title": "\ud835\udc42",
    "difficulty": "(",
    "question": "\ud835\udc41",
    "hint": ")",
    "oneLiner": "O(N)",
    "threeLiner": "Space Complexity:",
    "mnemonic": "\ud835\udc42",
    "code": "("
  },
  {
    "title": "1",
    "difficulty": ")",
    "question": "O(1)",
    "hint": "3. LinkedList Cycle",
    "oneLiner": "\u2705One-liner:",
    "threeLiner": "Use two pointers(slow andfast) to detecta loop.",
    "mnemonic": "\ud83d\udc763-linerfor kids:",
    "code": "One pointer movesfast, the othermoves slow."
  },
  {
    "title": "If they ever meet, there\u2019sa loop.",
    "difficulty": "If the fast one finishes,there\u2019sno cycle.",
    "question": "\ud83e\udde0Mnemonics:",
    "hint": "\"Initialize pointers\" \u2192 slow, fast= head,head",
    "oneLiner": "\"Move fast x2\" \u2192fast = fast.next.next",
    "threeLiner": "\"Check meeting point\" \u2192 ifslow ==fast: return True",
    "mnemonic": "--------------------------------------------------------------------",
    "code": "4. Reorder List"
  },
  {
    "title": "Problem:Reordera linkedlist in-place asL0 \u2192 Ln\u2192 L1 \u2192 Ln-1\u2192 L2 \u2192Ln-",
    "difficulty": "2 \u2192 ...",
    "question": "OptimizedApproach: Find the middle, reverse second half,and merge.",
    "hint": "python",
    "oneLiner": "CopyEditdef reorderList(head: ListNode) ->None:if not head or not head.next:return# Find middleslow,fast =head, headwhilefast and fast.next:slow = slow.nextfast = fast.next.next# Reverse second halfprev,curr =None, slow.nextslow.next = None  # Split listwhilecurr:nxt = curr.nextcurr.next= prevprev = currcurr = nxt# Merge two halvesfirst, second= head,prevwhilesecond:tmp1, tmp2 = first.next, second.nextfirst.next = secondsecond.next = tmp1first, second = tmp1, tmp2Time Complexity:\ud835\udc42(\ud835\udc41)O(N)Space Complexity:\ud835\udc42(1)O(1)4. Reorder List\u2705One-liner:Split thelist, reverse the secondhalf, and merge both.\ud83d\udc763-linerfor kids:We find the middle of thelist.We reverse the second half.Then we zig-zag merge thetwo parts.\ud83e\udde0Mnemonics:\"Find mid\" \u2192 slow= slow.next, fast = fast.next.next",
    "threeLiner": "CopyEditdef reorderList(head: ListNode) ->None:if not head or not head.next:return# Find middleslow,fast =head, headwhilefast and fast.next:slow = slow.nextfast = fast.next.next# Reverse second halfprev,curr =None, slow.nextslow.next = None  # Split listwhilecurr:nxt = curr.nextcurr.next= prevprev = currcurr = nxt# Merge two halvesfirst, second= head,prevwhilesecond:tmp1, tmp2 = first.next, second.nextfirst.next = secondsecond.next = tmp1first, second = tmp1, tmp2Time Complexity:\ud835\udc42(\ud835\udc41)O(N)Space Complexity:\ud835\udc42(1)O(1)4. Reorder List\u2705One-liner:Split thelist, reverse the secondhalf, and merge both.\ud83d\udc763-linerfor kids:We find the middle of thelist.We reverse the second half.Then we zig-zag merge thetwo parts.\ud83e\udde0Mnemonics:\"Find mid\" \u2192 slow= slow.next, fast = fast.next.next",
    "mnemonic": "CopyEditdef reorderList(head: ListNode) ->None:if not head or not head.next:return# Find middleslow,fast =head, headwhilefast and fast.next:slow = slow.nextfast = fast.next.next# Reverse second halfprev,curr =None, slow.nextslow.next = None  # Split listwhilecurr:nxt = curr.nextcurr.next= prevprev = currcurr = nxt# Merge two halvesfirst, second= head,prevwhilesecond:tmp1, tmp2 = first.next, second.nextfirst.next = secondsecond.next = tmp1first, second = tmp1, tmp2Time Complexity:\ud835\udc42(\ud835\udc41)O(N)Space Complexity:\ud835\udc42(1)O(1)4. Reorder List\u2705One-liner:Split thelist, reverse the secondhalf, and merge both.\ud83d\udc763-linerfor kids:We find the middle of thelist.We reverse the second half.Then we zig-zag merge thetwo parts.\ud83e\udde0Mnemonics:\"Find mid\" \u2192 slow= slow.next, fast = fast.next.next",
    "code": "Copy"
  },
  {
    "title": "Edit",
    "difficulty": "def reorderList(head: ListNode) ->None:",
    "question": "if not head or not head.next:",
    "hint": "return",
    "oneLiner": "# Find middle",
    "threeLiner": "slow,fast =head, head",
    "mnemonic": "whilefast and fast.next:",
    "code": "slow = slow.next"
  },
  {
    "title": "fast = fast.next.next",
    "difficulty": "# Reverse second half",
    "question": "prev,curr =None, slow.next",
    "hint": "slow.next = None  # Split list",
    "oneLiner": "whilecurr:",
    "threeLiner": "nxt = curr.next",
    "mnemonic": "curr.next= prev",
    "code": "prev = curr"
  },
  {
    "title": "curr = nxt",
    "difficulty": "# Merge two halves",
    "question": "first, second= head,prev",
    "hint": "whilesecond:",
    "oneLiner": "tmp1, tmp2 = first.next, second.next",
    "threeLiner": "first.next = second",
    "mnemonic": "second.next = tmp1",
    "code": "first, second = tmp1, tmp2"
  },
  {
    "title": "Time Complexity:",
    "difficulty": "\ud835\udc42",
    "question": "(",
    "hint": "\ud835\udc41",
    "oneLiner": ")",
    "threeLiner": "O(N)",
    "mnemonic": "Space Complexity:",
    "code": "\ud835\udc42"
  },
  {
    "title": "(",
    "difficulty": "1",
    "question": ")",
    "hint": "O(1)",
    "oneLiner": "4. Reorder List",
    "threeLiner": "\u2705One-liner:",
    "mnemonic": "Split thelist, reverse the secondhalf, and merge both.",
    "code": "\ud83d\udc763-linerfor kids:"
  },
  {
    "title": "We find the middle of thelist.",
    "difficulty": "We reverse the second half.",
    "question": "Then we zig-zag merge thetwo parts.",
    "hint": "\ud83e\udde0Mnemonics:",
    "oneLiner": "\"Find mid\" \u2192 slow= slow.next, fast = fast.next.next",
    "threeLiner": "\"Reversehalf\" \u2192second =reverse(middle)\"Merge halves\" \u2192while first and second: alternate attach----------------------------------------------------------------------------5. RemoveNth Node From End of ListProblem:Remove the nth node fromthe end of thelist.OptimizedApproach: Use two-pointer technique.pythonCopyEditdef removeNthFromEnd(head:ListNode, n: int) -> ListNode:dummy= ListNode(0, head)fast,slow =dummy, dummyfor _in range(n + 1):fast = fast.nextwhilefast:fast = fast.nextslow = slow.nextslow.next = slow.next.nextreturn dummy.nextTime Complexity:\ud835\udc42(\ud835\udc41)O(N)Space Complexity:\ud835\udc42(1)O(1)5. RemoveNth Node From End of List\u2705One-liner:Use two pointerswith n distance apart.\ud83d\udc763-linerfor kids:We move one pointer n steps ahead.Then we move bothtogetheruntil the fast one ends.The slowone is right before the node to remove.\ud83e\udde0Mnemonics:\"Advancefast\" \u2192for _ inrange(n): fast =fast.next\"Move both\" \u2192 while fast.next: slow = slow.next",
    "mnemonic": "\"Reversehalf\" \u2192second =reverse(middle)\"Merge halves\" \u2192while first and second: alternate attach----------------------------------------------------------------------------5. RemoveNth Node From End of ListProblem:Remove the nth node fromthe end of thelist.OptimizedApproach: Use two-pointer technique.pythonCopyEditdef removeNthFromEnd(head:ListNode, n: int) -> ListNode:dummy= ListNode(0, head)fast,slow =dummy, dummyfor _in range(n + 1):fast = fast.nextwhilefast:fast = fast.nextslow = slow.nextslow.next = slow.next.nextreturn dummy.nextTime Complexity:\ud835\udc42(\ud835\udc41)O(N)Space Complexity:\ud835\udc42(1)O(1)5. RemoveNth Node From End of List\u2705One-liner:Use two pointerswith n distance apart.\ud83d\udc763-linerfor kids:We move one pointer n steps ahead.Then we move bothtogetheruntil the fast one ends.The slowone is right before the node to remove.\ud83e\udde0Mnemonics:\"Advancefast\" \u2192for _ inrange(n): fast =fast.next\"Move both\" \u2192 while fast.next: slow = slow.next",
    "code": "\"Reversehalf\" \u2192second =reverse(middle)\"Merge halves\" \u2192while first and second: alternate attach----------------------------------------------------------------------------5. RemoveNth Node From End of ListProblem:Remove the nth node fromthe end of thelist.OptimizedApproach: Use two-pointer technique.pythonCopyEditdef removeNthFromEnd(head:ListNode, n: int) -> ListNode:dummy= ListNode(0, head)fast,slow =dummy, dummyfor _in range(n + 1):fast = fast.nextwhilefast:fast = fast.nextslow = slow.nextslow.next = slow.next.nextreturn dummy.nextTime Complexity:\ud835\udc42(\ud835\udc41)O(N)Space Complexity:\ud835\udc42(1)O(1)5. RemoveNth Node From End of List\u2705One-liner:Use two pointerswith n distance apart.\ud83d\udc763-linerfor kids:We move one pointer n steps ahead.Then we move bothtogetheruntil the fast one ends.The slowone is right before the node to remove.\ud83e\udde0Mnemonics:\"Advancefast\" \u2192for _ inrange(n): fast =fast.next\"Move both\" \u2192 while fast.next: slow = slow.next"
  },
  {
    "title": "\"Reversehalf\" \u2192second =reverse(middle)",
    "difficulty": "\"Merge halves\" \u2192while first and second: alternate attach",
    "question": "-------------------------------------------------------------------------",
    "hint": "---",
    "oneLiner": "5. RemoveNth Node From End of List",
    "threeLiner": "Problem:Remove the nth node fromthe end of thelist.",
    "mnemonic": "OptimizedApproach: Use two-pointer technique.",
    "code": "python"
  },
  {
    "title": "Copy",
    "difficulty": "Edit",
    "question": "def removeNthFromEnd(head:ListNode, n: int) -> ListNode:",
    "hint": "dummy= ListNode(0, head)",
    "oneLiner": "fast,slow =dummy, dummy",
    "threeLiner": "for _in range(n + 1):",
    "mnemonic": "fast = fast.next",
    "code": "whilefast:"
  },
  {
    "title": "fast = fast.next",
    "difficulty": "slow = slow.next",
    "question": "slow.next = slow.next.next",
    "hint": "return dummy.next",
    "oneLiner": "Time Complexity:",
    "threeLiner": "\ud835\udc42",
    "mnemonic": "(",
    "code": "\ud835\udc41"
  },
  {
    "title": ")",
    "difficulty": "O(N)",
    "question": "Space Complexity:",
    "hint": "\ud835\udc42",
    "oneLiner": "(",
    "threeLiner": "1",
    "mnemonic": ")",
    "code": "O(1)"
  },
  {
    "title": "5. RemoveNth Node From End of List",
    "difficulty": "\u2705One-liner:",
    "question": "Use two pointerswith n distance apart.",
    "hint": "\ud83d\udc763-linerfor kids:",
    "oneLiner": "We move one pointer n steps ahead.",
    "threeLiner": "Then we move bothtogetheruntil the fast one ends.",
    "mnemonic": "The slowone is right before the node to remove.",
    "code": "\ud83e\udde0Mnemonics:"
  },
  {
    "title": "\"Advancefast\" \u2192for _ inrange(n): fast =fast.next",
    "difficulty": "\"Move both\" \u2192 while fast.next: slow = slow.next",
    "question": "\"Remove node\" \u2192 slow.next= slow.next.next------------------------------------------------------------------------------6. Copy List withRandom PointerProblem:Clone alinked list witha randompointer.OptimizedApproach: Use interleaving nodes.pythonCopyEditdef copyRandomList(head: 'Node') -> 'Node':if not head:return None# Step 1: Create new nodes interleavedwith the old nodescurr= headwhilecurr:nxt = curr.nextcurr.next= Node(curr.val,nxt, None)curr = nxt# Step 2: Assign random pointerscurr= headwhilecurr:if curr.random:curr.next.random = curr.random.nextcurr = curr.next.next# Step 3: Separate the two listsold,new = head, head.nextnew_head = head.nextwhileold:old.next= old.next.nextnew.next= new.next.next if new.next elseNoneold, new= old.next, new.nextreturn new_headTime Complexity:\ud835\udc42(\ud835\udc41)O(N)Space Complexity:\ud835\udc42(1)O(1)6. Copy List withRandom Pointer\u2705One-liner:Interleave original and copied nodes, fix randoms, then split.",
    "hint": "\"Remove node\" \u2192 slow.next= slow.next.next------------------------------------------------------------------------------6. Copy List withRandom PointerProblem:Clone alinked list witha randompointer.OptimizedApproach: Use interleaving nodes.pythonCopyEditdef copyRandomList(head: 'Node') -> 'Node':if not head:return None# Step 1: Create new nodes interleavedwith the old nodescurr= headwhilecurr:nxt = curr.nextcurr.next= Node(curr.val,nxt, None)curr = nxt# Step 2: Assign random pointerscurr= headwhilecurr:if curr.random:curr.next.random = curr.random.nextcurr = curr.next.next# Step 3: Separate the two listsold,new = head, head.nextnew_head = head.nextwhileold:old.next= old.next.nextnew.next= new.next.next if new.next elseNoneold, new= old.next, new.nextreturn new_headTime Complexity:\ud835\udc42(\ud835\udc41)O(N)Space Complexity:\ud835\udc42(1)O(1)6. Copy List withRandom Pointer\u2705One-liner:Interleave original and copied nodes, fix randoms, then split.",
    "oneLiner": "\"Remove node\" \u2192 slow.next= slow.next.next------------------------------------------------------------------------------6. Copy List withRandom PointerProblem:Clone alinked list witha randompointer.OptimizedApproach: Use interleaving nodes.pythonCopyEditdef copyRandomList(head: 'Node') -> 'Node':if not head:return None# Step 1: Create new nodes interleavedwith the old nodescurr= headwhilecurr:nxt = curr.nextcurr.next= Node(curr.val,nxt, None)curr = nxt# Step 2: Assign random pointerscurr= headwhilecurr:if curr.random:curr.next.random = curr.random.nextcurr = curr.next.next# Step 3: Separate the two listsold,new = head, head.nextnew_head = head.nextwhileold:old.next= old.next.nextnew.next= new.next.next if new.next elseNoneold, new= old.next, new.nextreturn new_headTime Complexity:\ud835\udc42(\ud835\udc41)O(N)Space Complexity:\ud835\udc42(1)O(1)6. Copy List withRandom Pointer\u2705One-liner:Interleave original and copied nodes, fix randoms, then split.",
    "threeLiner": "\"Remove node\" \u2192 slow.next= slow.next.next",
    "mnemonic": "-------------------------------------------------------------------------",
    "code": "-----"
  },
  {
    "title": "6. Copy List withRandom Pointer",
    "difficulty": "Problem:Clone alinked list witha randompointer.",
    "question": "OptimizedApproach: Use interleaving nodes.",
    "hint": "python",
    "oneLiner": "Copy",
    "threeLiner": "Edit",
    "mnemonic": "def copyRandomList(head: 'Node') -> 'Node':",
    "code": "if not head:"
  },
  {
    "title": "return None",
    "difficulty": "# Step 1: Create new nodes interleavedwith the old nodes",
    "question": "curr= head",
    "hint": "whilecurr:",
    "oneLiner": "nxt = curr.next",
    "threeLiner": "curr.next= Node(curr.val,nxt, None)",
    "mnemonic": "curr = nxt",
    "code": "# Step 2: Assign random pointers"
  },
  {
    "title": "curr= head",
    "difficulty": "whilecurr:",
    "question": "if curr.random:",
    "hint": "curr.next.random = curr.random.next",
    "oneLiner": "curr = curr.next.next",
    "threeLiner": "# Step 3: Separate the two lists",
    "mnemonic": "old,new = head, head.next",
    "code": "new_head = head.next"
  },
  {
    "title": "whileold:",
    "difficulty": "old.next= old.next.next",
    "question": "new.next= new.next.next if new.next elseNone",
    "hint": "old, new= old.next, new.next",
    "oneLiner": "return new_head",
    "threeLiner": "Time Complexity:",
    "mnemonic": "\ud835\udc42",
    "code": "("
  },
  {
    "title": "\ud835\udc41",
    "difficulty": ")",
    "question": "O(N)",
    "hint": "Space Complexity:",
    "oneLiner": "\ud835\udc42",
    "threeLiner": "(",
    "mnemonic": "1",
    "code": ")"
  },
  {
    "title": "O(1)",
    "difficulty": "6. Copy List withRandom Pointer",
    "question": "\u2705One-liner:",
    "hint": "Interleave original and copied nodes, fix randoms, then split.",
    "oneLiner": "\ud83d\udc763-linerfor kids:We copy each nodeand putit rightnext tothe original.Then we fix the random pointers.Last, wesplit them into two separate lists.\ud83e\udde0Mnemonics:\"Clone nodes\" \u2192 curr.next= Node(curr.val)\"Fix random\" \u2192 curr.next.random =curr.random.next\"Separatelists\"\u2192 original.next =clone.next; clone.next =clone.next.next-----------------------------------7. Add Two NumbersProblem:Add twolinked lists representingnumbers.OptimizedApproach: Use dummy nodeand carry.pythonCopyEditdef addTwoNumbers(l1: ListNode, l2: ListNode) -> ListNode:dummy= ListNode()curr,carry =dummy, 0whilel1 or l2 or carry:val1 = l1.val if l1 else 0val2 = l2.val if l2 else 0carry, sum_val = divmod(val1 + val2+ carry, 10)curr.next= ListNode(sum_val)curr = curr.nextl1 = l1.next if l1else Nonel2 = l2.next if l2else Nonereturn dummy.nextTime Complexity:\ud835\udc42(max\u2061(\ud835\udc41,\ud835\udc40))O(max(N,M))Space Complexity:\ud835\udc42(1)",
    "threeLiner": "\ud83d\udc763-linerfor kids:We copy each nodeand putit rightnext tothe original.Then we fix the random pointers.Last, wesplit them into two separate lists.\ud83e\udde0Mnemonics:\"Clone nodes\" \u2192 curr.next= Node(curr.val)\"Fix random\" \u2192 curr.next.random =curr.random.next\"Separatelists\"\u2192 original.next =clone.next; clone.next =clone.next.next-----------------------------------7. Add Two NumbersProblem:Add twolinked lists representingnumbers.OptimizedApproach: Use dummy nodeand carry.pythonCopyEditdef addTwoNumbers(l1: ListNode, l2: ListNode) -> ListNode:dummy= ListNode()curr,carry =dummy, 0whilel1 or l2 or carry:val1 = l1.val if l1 else 0val2 = l2.val if l2 else 0carry, sum_val = divmod(val1 + val2+ carry, 10)curr.next= ListNode(sum_val)curr = curr.nextl1 = l1.next if l1else Nonel2 = l2.next if l2else Nonereturn dummy.nextTime Complexity:\ud835\udc42(max\u2061(\ud835\udc41,\ud835\udc40))O(max(N,M))Space Complexity:\ud835\udc42(1)",
    "mnemonic": "\ud83d\udc763-linerfor kids:We copy each nodeand putit rightnext tothe original.Then we fix the random pointers.Last, wesplit them into two separate lists.\ud83e\udde0Mnemonics:\"Clone nodes\" \u2192 curr.next= Node(curr.val)\"Fix random\" \u2192 curr.next.random =curr.random.next\"Separatelists\"\u2192 original.next =clone.next; clone.next =clone.next.next-----------------------------------7. Add Two NumbersProblem:Add twolinked lists representingnumbers.OptimizedApproach: Use dummy nodeand carry.pythonCopyEditdef addTwoNumbers(l1: ListNode, l2: ListNode) -> ListNode:dummy= ListNode()curr,carry =dummy, 0whilel1 or l2 or carry:val1 = l1.val if l1 else 0val2 = l2.val if l2 else 0carry, sum_val = divmod(val1 + val2+ carry, 10)curr.next= ListNode(sum_val)curr = curr.nextl1 = l1.next if l1else Nonel2 = l2.next if l2else Nonereturn dummy.nextTime Complexity:\ud835\udc42(max\u2061(\ud835\udc41,\ud835\udc40))O(max(N,M))Space Complexity:\ud835\udc42(1)",
    "code": "\ud83d\udc763-linerfor kids:"
  },
  {
    "title": "We copy each nodeand putit rightnext tothe original.",
    "difficulty": "Then we fix the random pointers.",
    "question": "Last, wesplit them into two separate lists.",
    "hint": "\ud83e\udde0Mnemonics:",
    "oneLiner": "\"Clone nodes\" \u2192 curr.next= Node(curr.val)",
    "threeLiner": "\"Fix random\" \u2192 curr.next.random =curr.random.next",
    "mnemonic": "\"Separatelists\"\u2192 original.next =clone.next; clone.next =",
    "code": "clone.next.next"
  },
  {
    "title": "-----------------------------------",
    "difficulty": "7. Add Two Numbers",
    "question": "Problem:Add twolinked lists representingnumbers.",
    "hint": "OptimizedApproach: Use dummy nodeand carry.",
    "oneLiner": "python",
    "threeLiner": "Copy",
    "mnemonic": "Edit",
    "code": "def addTwoNumbers(l1: ListNode, l2: ListNode) -> ListNode:"
  },
  {
    "title": "dummy= ListNode()",
    "difficulty": "curr,carry =dummy, 0",
    "question": "whilel1 or l2 or carry:",
    "hint": "val1 = l1.val if l1 else 0",
    "oneLiner": "val2 = l2.val if l2 else 0",
    "threeLiner": "carry, sum_val = divmod(val1 + val2+ carry, 10)",
    "mnemonic": "curr.next= ListNode(sum_val)",
    "code": "curr = curr.next"
  },
  {
    "title": "l1 = l1.next if l1else None",
    "difficulty": "l2 = l2.next if l2else None",
    "question": "return dummy.next",
    "hint": "Time Complexity:",
    "oneLiner": "\ud835\udc42",
    "threeLiner": "(",
    "mnemonic": "max",
    "code": "\u2061"
  },
  {
    "title": "(",
    "difficulty": "\ud835\udc41",
    "question": ",",
    "hint": "\ud835\udc40",
    "oneLiner": ")",
    "threeLiner": ")",
    "mnemonic": "O(max(N,M))",
    "code": "Space Complexity:"
  },
  {
    "title": "\ud835\udc42",
    "difficulty": "(",
    "question": "1",
    "hint": ")",
    "oneLiner": "O(1)7. Add Two Numbers\u2705One-liner:Add digits from each listnode bynode withcarry.\ud83d\udc763-linerfor kids:We add the numbers digit by digit.If the sum is toobig, wecarry tothe nextone.We builda new list as wego.\ud83e\udde0Mnemonics:\"Add values + carry\" \u2192 total= l1.val + l2.val + carry\"Carry forward\" \u2192carry =total //10\"Create node\" \u2192 current.next = ListNode(total % 10)=------------------------------------------------------------------8. Find The Duplicate NumberProblem:Find theduplicatenumberin an array.OptimizedApproach: Use Floyd's Cycle Detection.pythonCopyEditdef findDuplicate(nums: list[int])-> int:slow,fast =nums[0],nums[0]whileTrue:slow = nums[slow]fast = nums[nums[fast]]if slow == fast:breakslow= nums[0]whileslow !=fast:slow = nums[slow]fast = nums[fast]return slowTime Complexity:\ud835\udc42(\ud835\udc41)O(N)Space Complexity:\ud835\udc42(1)O(1)8. Find the Duplicate Number\u2705One-liner:",
    "threeLiner": "O(1)7. Add Two Numbers\u2705One-liner:Add digits from each listnode bynode withcarry.\ud83d\udc763-linerfor kids:We add the numbers digit by digit.If the sum is toobig, wecarry tothe nextone.We builda new list as wego.\ud83e\udde0Mnemonics:\"Add values + carry\" \u2192 total= l1.val + l2.val + carry\"Carry forward\" \u2192carry =total //10\"Create node\" \u2192 current.next = ListNode(total % 10)=------------------------------------------------------------------8. Find The Duplicate NumberProblem:Find theduplicatenumberin an array.OptimizedApproach: Use Floyd's Cycle Detection.pythonCopyEditdef findDuplicate(nums: list[int])-> int:slow,fast =nums[0],nums[0]whileTrue:slow = nums[slow]fast = nums[nums[fast]]if slow == fast:breakslow= nums[0]whileslow !=fast:slow = nums[slow]fast = nums[fast]return slowTime Complexity:\ud835\udc42(\ud835\udc41)O(N)Space Complexity:\ud835\udc42(1)O(1)8. Find the Duplicate Number\u2705One-liner:",
    "mnemonic": "O(1)7. Add Two Numbers\u2705One-liner:Add digits from each listnode bynode withcarry.\ud83d\udc763-linerfor kids:We add the numbers digit by digit.If the sum is toobig, wecarry tothe nextone.We builda new list as wego.\ud83e\udde0Mnemonics:\"Add values + carry\" \u2192 total= l1.val + l2.val + carry\"Carry forward\" \u2192carry =total //10\"Create node\" \u2192 current.next = ListNode(total % 10)=------------------------------------------------------------------8. Find The Duplicate NumberProblem:Find theduplicatenumberin an array.OptimizedApproach: Use Floyd's Cycle Detection.pythonCopyEditdef findDuplicate(nums: list[int])-> int:slow,fast =nums[0],nums[0]whileTrue:slow = nums[slow]fast = nums[nums[fast]]if slow == fast:breakslow= nums[0]whileslow !=fast:slow = nums[slow]fast = nums[fast]return slowTime Complexity:\ud835\udc42(\ud835\udc41)O(N)Space Complexity:\ud835\udc42(1)O(1)8. Find the Duplicate Number\u2705One-liner:",
    "code": "O(1)"
  },
  {
    "title": "7. Add Two Numbers",
    "difficulty": "\u2705One-liner:",
    "question": "Add digits from each listnode bynode withcarry.",
    "hint": "\ud83d\udc763-linerfor kids:",
    "oneLiner": "We add the numbers digit by digit.",
    "threeLiner": "If the sum is toobig, wecarry tothe nextone.",
    "mnemonic": "We builda new list as wego.",
    "code": "\ud83e\udde0Mnemonics:"
  },
  {
    "title": "\"Add values + carry\" \u2192 total= l1.val + l2.val + carry",
    "difficulty": "\"Carry forward\" \u2192carry =total //10",
    "question": "\"Create node\" \u2192 current.next = ListNode(total % 10)",
    "hint": "=------------------------------------------------------------------",
    "oneLiner": "8. Find The Duplicate Number",
    "threeLiner": "Problem:Find theduplicatenumberin an array.",
    "mnemonic": "OptimizedApproach: Use Floyd's Cycle Detection.",
    "code": "python"
  },
  {
    "title": "Copy",
    "difficulty": "Edit",
    "question": "def findDuplicate(nums: list[int])-> int:",
    "hint": "slow,fast =nums[0],nums[0]",
    "oneLiner": "whileTrue:",
    "threeLiner": "slow = nums[slow]",
    "mnemonic": "fast = nums[nums[fast]]",
    "code": "if slow == fast:"
  },
  {
    "title": "break",
    "difficulty": "slow= nums[0]",
    "question": "whileslow !=fast:",
    "hint": "slow = nums[slow]",
    "oneLiner": "fast = nums[fast]",
    "threeLiner": "return slow",
    "mnemonic": "Time Complexity:",
    "code": "\ud835\udc42"
  },
  {
    "title": "(",
    "difficulty": "\ud835\udc41",
    "question": ")",
    "hint": "O(N)",
    "oneLiner": "Space Complexity:",
    "threeLiner": "\ud835\udc42",
    "mnemonic": "(",
    "code": "1"
  },
  {
    "title": ")",
    "difficulty": "O(1)",
    "question": "8. Find the Duplicate Number",
    "hint": "\u2705One-liner:",
    "oneLiner": "Use Floyd's CycleDetection (likeLinked List Cycle) on index mapping.\ud83d\udc763-linerfor kids:We pretend the numbers arepointers in a list.We find acycle using slowand fast.Then we find where the cycle begins\u2014that'sthe duplicate.\ud83e\udde0Mnemonics:\"Find meeting\" \u2192slow = nums[slow]; fast =nums[nums[fast]]\"Find entrance\" \u2192slow = 0; move both tillthey meet\"Return dup\" \u2192 return slow----------------------------------------------------------------------------------9. LRU CacheProblem:Implement an LRU(Least Recently Used) Cache.OptimizedApproach: Use OrderedDict.pythonCopyEditfrom collectionsimport OrderedDictclass LRUCache:def __init__(self, capacity: int):self.cache = OrderedDict()self.capacity = capacitydef get(self,key: int) -> int:if key inself.cache:self.cache.move_to_end(key)return self.cache[key]return -1def put(self,key: int, value:int) -> None:if key inself.cache:self.cache.move_to_end(key)self.cache[key] =valueif len(self.cache)> self.capacity:self.cache.popitem(last=False)Time Complexity:\ud835\udc42(1)O(1)Space Complexity:\ud835\udc42(\ud835\udc36)O(C) (Cache size)",
    "threeLiner": "Use Floyd's CycleDetection (likeLinked List Cycle) on index mapping.\ud83d\udc763-linerfor kids:We pretend the numbers arepointers in a list.We find acycle using slowand fast.Then we find where the cycle begins\u2014that'sthe duplicate.\ud83e\udde0Mnemonics:\"Find meeting\" \u2192slow = nums[slow]; fast =nums[nums[fast]]\"Find entrance\" \u2192slow = 0; move both tillthey meet\"Return dup\" \u2192 return slow----------------------------------------------------------------------------------9. LRU CacheProblem:Implement an LRU(Least Recently Used) Cache.OptimizedApproach: Use OrderedDict.pythonCopyEditfrom collectionsimport OrderedDictclass LRUCache:def __init__(self, capacity: int):self.cache = OrderedDict()self.capacity = capacitydef get(self,key: int) -> int:if key inself.cache:self.cache.move_to_end(key)return self.cache[key]return -1def put(self,key: int, value:int) -> None:if key inself.cache:self.cache.move_to_end(key)self.cache[key] =valueif len(self.cache)> self.capacity:self.cache.popitem(last=False)Time Complexity:\ud835\udc42(1)O(1)Space Complexity:\ud835\udc42(\ud835\udc36)O(C) (Cache size)",
    "mnemonic": "Use Floyd's CycleDetection (likeLinked List Cycle) on index mapping.\ud83d\udc763-linerfor kids:We pretend the numbers arepointers in a list.We find acycle using slowand fast.Then we find where the cycle begins\u2014that'sthe duplicate.\ud83e\udde0Mnemonics:\"Find meeting\" \u2192slow = nums[slow]; fast =nums[nums[fast]]\"Find entrance\" \u2192slow = 0; move both tillthey meet\"Return dup\" \u2192 return slow----------------------------------------------------------------------------------9. LRU CacheProblem:Implement an LRU(Least Recently Used) Cache.OptimizedApproach: Use OrderedDict.pythonCopyEditfrom collectionsimport OrderedDictclass LRUCache:def __init__(self, capacity: int):self.cache = OrderedDict()self.capacity = capacitydef get(self,key: int) -> int:if key inself.cache:self.cache.move_to_end(key)return self.cache[key]return -1def put(self,key: int, value:int) -> None:if key inself.cache:self.cache.move_to_end(key)self.cache[key] =valueif len(self.cache)> self.capacity:self.cache.popitem(last=False)Time Complexity:\ud835\udc42(1)O(1)Space Complexity:\ud835\udc42(\ud835\udc36)O(C) (Cache size)",
    "code": "Use Floyd's CycleDetection (likeLinked List Cycle) on index mapping."
  },
  {
    "title": "\ud83d\udc763-linerfor kids:",
    "difficulty": "We pretend the numbers arepointers in a list.",
    "question": "We find acycle using slowand fast.",
    "hint": "Then we find where the cycle begins\u2014that'sthe duplicate.",
    "oneLiner": "\ud83e\udde0Mnemonics:",
    "threeLiner": "\"Find meeting\" \u2192slow = nums[slow]; fast =nums[nums[fast]]",
    "mnemonic": "\"Find entrance\" \u2192slow = 0; move both tillthey meet",
    "code": "\"Return dup\" \u2192 return slow"
  },
  {
    "title": "-------------------------------------------------------------------------",
    "difficulty": "---------",
    "question": "9. LRU Cache",
    "hint": "Problem:Implement an LRU(Least Recently Used) Cache.",
    "oneLiner": "OptimizedApproach: Use OrderedDict.",
    "threeLiner": "python",
    "mnemonic": "Copy",
    "code": "Edit"
  },
  {
    "title": "from collectionsimport OrderedDict",
    "difficulty": "class LRUCache:",
    "question": "def __init__(self, capacity: int):",
    "hint": "self.cache = OrderedDict()",
    "oneLiner": "self.capacity = capacity",
    "threeLiner": "def get(self,key: int) -> int:",
    "mnemonic": "if key inself.cache:",
    "code": "self.cache.move_to_end(key)"
  },
  {
    "title": "return self.cache[key]",
    "difficulty": "return -1",
    "question": "def put(self,key: int, value:int) -> None:",
    "hint": "if key inself.cache:",
    "oneLiner": "self.cache.move_to_end(key)",
    "threeLiner": "self.cache[key] =value",
    "mnemonic": "if len(self.cache)> self.capacity:",
    "code": "self.cache.popitem(last=False)"
  },
  {
    "title": "Time Complexity:",
    "difficulty": "\ud835\udc42",
    "question": "(",
    "hint": "1",
    "oneLiner": ")",
    "threeLiner": "O(1)",
    "mnemonic": "Space Complexity:",
    "code": "\ud835\udc42"
  },
  {
    "title": "(",
    "difficulty": "\ud835\udc36",
    "question": ")",
    "hint": "O(C) (Cache size)",
    "oneLiner": "9. LRU Cache\u2705One-liner:Use a hash map +doubly linked list to track usage orderand values.\ud83d\udc763-linerfor kids:We keep alist ofrecentlyused items.When something isused, wemove itto the front.If the cache is full, we remove the oldestfrom the back.\ud83e\udde0Mnemonics:\"Get/moveto front\" \u2192 move_to_front(node)\"Insert new\" \u2192 add node tohead\"Evict old\" \u2192 remove tailnode ifover capacity-------------------------------------------------------10. MergeK Sorted ListsOptimizedApproach: Use Min-Heap.pythonCopyEditfrom heapq importheappush, heappopdef mergeKLists(lists: list[ListNode]) -> ListNode:heap= []dummy= ListNode()curr= dummyfor i, lst inenumerate(lists):if lst:heappush(heap,(lst.val, i, lst))whileheap:val, i, node = heappop(heap)curr.next= nodecurr = nodeif node.next:heappush(heap,(node.next.val,i, node.next))return dummy.nextTime Complexity:\ud835\udc42(\ud835\udc41log\u2061\ud835\udc3e)O(NlogK)Space Complexity:\ud835\udc42",
    "threeLiner": "9. LRU Cache\u2705One-liner:Use a hash map +doubly linked list to track usage orderand values.\ud83d\udc763-linerfor kids:We keep alist ofrecentlyused items.When something isused, wemove itto the front.If the cache is full, we remove the oldestfrom the back.\ud83e\udde0Mnemonics:\"Get/moveto front\" \u2192 move_to_front(node)\"Insert new\" \u2192 add node tohead\"Evict old\" \u2192 remove tailnode ifover capacity-------------------------------------------------------10. MergeK Sorted ListsOptimizedApproach: Use Min-Heap.pythonCopyEditfrom heapq importheappush, heappopdef mergeKLists(lists: list[ListNode]) -> ListNode:heap= []dummy= ListNode()curr= dummyfor i, lst inenumerate(lists):if lst:heappush(heap,(lst.val, i, lst))whileheap:val, i, node = heappop(heap)curr.next= nodecurr = nodeif node.next:heappush(heap,(node.next.val,i, node.next))return dummy.nextTime Complexity:\ud835\udc42(\ud835\udc41log\u2061\ud835\udc3e)O(NlogK)Space Complexity:\ud835\udc42",
    "mnemonic": "9. LRU Cache\u2705One-liner:Use a hash map +doubly linked list to track usage orderand values.\ud83d\udc763-linerfor kids:We keep alist ofrecentlyused items.When something isused, wemove itto the front.If the cache is full, we remove the oldestfrom the back.\ud83e\udde0Mnemonics:\"Get/moveto front\" \u2192 move_to_front(node)\"Insert new\" \u2192 add node tohead\"Evict old\" \u2192 remove tailnode ifover capacity-------------------------------------------------------10. MergeK Sorted ListsOptimizedApproach: Use Min-Heap.pythonCopyEditfrom heapq importheappush, heappopdef mergeKLists(lists: list[ListNode]) -> ListNode:heap= []dummy= ListNode()curr= dummyfor i, lst inenumerate(lists):if lst:heappush(heap,(lst.val, i, lst))whileheap:val, i, node = heappop(heap)curr.next= nodecurr = nodeif node.next:heappush(heap,(node.next.val,i, node.next))return dummy.nextTime Complexity:\ud835\udc42(\ud835\udc41log\u2061\ud835\udc3e)O(NlogK)Space Complexity:\ud835\udc42",
    "code": "9. LRU Cache"
  },
  {
    "title": "\u2705One-liner:",
    "difficulty": "Use a hash map +doubly linked list to track usage orderand values.",
    "question": "\ud83d\udc763-linerfor kids:",
    "hint": "We keep alist ofrecentlyused items.",
    "oneLiner": "When something isused, wemove itto the front.",
    "threeLiner": "If the cache is full, we remove the oldestfrom the back.",
    "mnemonic": "\ud83e\udde0Mnemonics:",
    "code": "\"Get/moveto front\" \u2192 move_to_front(node)"
  },
  {
    "title": "\"Insert new\" \u2192 add node tohead",
    "difficulty": "\"Evict old\" \u2192 remove tailnode ifover capacity",
    "question": "-------------------------------------------------------",
    "hint": "10. MergeK Sorted Lists",
    "oneLiner": "OptimizedApproach: Use Min-Heap.",
    "threeLiner": "python",
    "mnemonic": "Copy",
    "code": "Edit"
  },
  {
    "title": "from heapq importheappush, heappop",
    "difficulty": "def mergeKLists(lists: list[ListNode]) -> ListNode:",
    "question": "heap= []",
    "hint": "dummy= ListNode()",
    "oneLiner": "curr= dummy",
    "threeLiner": "for i, lst inenumerate(lists):",
    "mnemonic": "if lst:",
    "code": "heappush(heap,(lst.val, i, lst))"
  },
  {
    "title": "whileheap:",
    "difficulty": "val, i, node = heappop(heap)",
    "question": "curr.next= node",
    "hint": "curr = node",
    "oneLiner": "if node.next:",
    "threeLiner": "heappush(heap,(node.next.val,i, node.next))",
    "mnemonic": "return dummy.next",
    "code": "Time Complexity:"
  },
  {
    "title": "\ud835\udc42",
    "difficulty": "(",
    "question": "\ud835\udc41",
    "hint": "log",
    "oneLiner": "\u2061",
    "threeLiner": "\ud835\udc3e",
    "mnemonic": ")",
    "code": "O(NlogK)"
  },
  {
    "title": "Space Complexity:",
    "difficulty": "\ud835\udc42",
    "question": "(\ud835\udc3e)O(K)10. MergeK Sorted Lists\u2705One-liner:Use a min-heap toalways pick thesmallestnode among lists.\ud83d\udc763-linerfor kids:We look at the first nodefrom each list.We alwayspick the smallest and move forward in that list.We keep buildinga new sorted list.\ud83e\udde0Mnemonics:\"Push allheads\"\u2192 heapq.heappush(heap, (node.val, i, node))\"Pop smallest\" \u2192val, i, node = heapq.heappop(heap)\"Advancelist\" \u2192heapq.heappush(heap, (node.next.val, i,node.next))-----------------------------------------------------11. Reverse Nodesin K-Group\u2705One-liner:Group nodes in k,reversein-place, and connect recursively oriteratively.\ud83d\udc763-linerfor kids:We take chunks ofk nodes.We flip the orderof eachgroup.We connect the reversed parts backtogether.\ud83e\udde0Mnemonics:\"Count nodes\" \u2192 for _ in range(k):if not curr: return head\"Reversek\" \u2192reverse segment between headand k-th\"Link next group\"\u2192 head.next = recurse/iterate with nextgroupclass Solution:def reverseKGroup(self, head:ListNode,k: int) -> ListNode:def get_kth(curr,k):whilecurr andk > 0:curr = curr.nextk-= 1return currdummy = ListNode(0)dummy.next = headgroup_prev = dummywhile True:",
    "hint": "(\ud835\udc3e)O(K)10. MergeK Sorted Lists\u2705One-liner:Use a min-heap toalways pick thesmallestnode among lists.\ud83d\udc763-linerfor kids:We look at the first nodefrom each list.We alwayspick the smallest and move forward in that list.We keep buildinga new sorted list.\ud83e\udde0Mnemonics:\"Push allheads\"\u2192 heapq.heappush(heap, (node.val, i, node))\"Pop smallest\" \u2192val, i, node = heapq.heappop(heap)\"Advancelist\" \u2192heapq.heappush(heap, (node.next.val, i,node.next))-----------------------------------------------------11. Reverse Nodesin K-Group\u2705One-liner:Group nodes in k,reversein-place, and connect recursively oriteratively.\ud83d\udc763-linerfor kids:We take chunks ofk nodes.We flip the orderof eachgroup.We connect the reversed parts backtogether.\ud83e\udde0Mnemonics:\"Count nodes\" \u2192 for _ in range(k):if not curr: return head\"Reversek\" \u2192reverse segment between headand k-th\"Link next group\"\u2192 head.next = recurse/iterate with nextgroupclass Solution:def reverseKGroup(self, head:ListNode,k: int) -> ListNode:def get_kth(curr,k):whilecurr andk > 0:curr = curr.nextk-= 1return currdummy = ListNode(0)dummy.next = headgroup_prev = dummywhile True:",
    "oneLiner": "(\ud835\udc3e)O(K)10. MergeK Sorted Lists\u2705One-liner:Use a min-heap toalways pick thesmallestnode among lists.\ud83d\udc763-linerfor kids:We look at the first nodefrom each list.We alwayspick the smallest and move forward in that list.We keep buildinga new sorted list.\ud83e\udde0Mnemonics:\"Push allheads\"\u2192 heapq.heappush(heap, (node.val, i, node))\"Pop smallest\" \u2192val, i, node = heapq.heappop(heap)\"Advancelist\" \u2192heapq.heappush(heap, (node.next.val, i,node.next))-----------------------------------------------------11. Reverse Nodesin K-Group\u2705One-liner:Group nodes in k,reversein-place, and connect recursively oriteratively.\ud83d\udc763-linerfor kids:We take chunks ofk nodes.We flip the orderof eachgroup.We connect the reversed parts backtogether.\ud83e\udde0Mnemonics:\"Count nodes\" \u2192 for _ in range(k):if not curr: return head\"Reversek\" \u2192reverse segment between headand k-th\"Link next group\"\u2192 head.next = recurse/iterate with nextgroupclass Solution:def reverseKGroup(self, head:ListNode,k: int) -> ListNode:def get_kth(curr,k):whilecurr andk > 0:curr = curr.nextk-= 1return currdummy = ListNode(0)dummy.next = headgroup_prev = dummywhile True:",
    "threeLiner": "(",
    "mnemonic": "\ud835\udc3e",
    "code": ")"
  },
  {
    "title": "O(K)",
    "difficulty": "10. MergeK Sorted Lists",
    "question": "\u2705One-liner:",
    "hint": "Use a min-heap toalways pick thesmallestnode among lists.",
    "oneLiner": "\ud83d\udc763-linerfor kids:",
    "threeLiner": "We look at the first nodefrom each list.",
    "mnemonic": "We alwayspick the smallest and move forward in that list.",
    "code": "We keep buildinga new sorted list."
  },
  {
    "title": "\ud83e\udde0Mnemonics:",
    "difficulty": "\"Push allheads\"\u2192 heapq.heappush(heap, (node.val, i, node))",
    "question": "\"Pop smallest\" \u2192val, i, node = heapq.heappop(heap)",
    "hint": "\"Advancelist\" \u2192heapq.heappush(heap, (node.next.val, i,node.next))",
    "oneLiner": "-----------------------------------------------------",
    "threeLiner": "11. Reverse Nodesin K-Group",
    "mnemonic": "\u2705One-liner:",
    "code": "Group nodes in k,reversein-place, and connect recursively or"
  },
  {
    "title": "iteratively.",
    "difficulty": "\ud83d\udc763-linerfor kids:",
    "question": "We take chunks ofk nodes.",
    "hint": "We flip the orderof eachgroup.",
    "oneLiner": "We connect the reversed parts backtogether.",
    "threeLiner": "\ud83e\udde0Mnemonics:",
    "mnemonic": "\"Count nodes\" \u2192 for _ in range(k):if not curr: return head",
    "code": "\"Reversek\" \u2192reverse segment between headand k-th"
  },
  {
    "title": "\"Link next group\"\u2192 head.next = recurse/iterate with nextgroup",
    "difficulty": "class Solution:",
    "question": "def reverseKGroup(self, head:ListNode,k: int) -> ListNode:",
    "hint": "def get_kth(curr,k):",
    "oneLiner": "whilecurr andk > 0:",
    "threeLiner": "curr = curr.next",
    "mnemonic": "k-= 1",
    "code": "return curr"
  },
  {
    "title": "dummy = ListNode(0)",
    "difficulty": "dummy.next = head",
    "question": "group_prev = dummy",
    "hint": "while True:",
    "oneLiner": "kth =get_kth(group_prev, k)if not kth:breakgroup_next = kth.next# Reverse groupprev,curr = kth.next,group_prev.nextwhilecurr !=group_next:temp = curr.nextcurr.next= prevprev = currcurr = temptemp= group_prev.nextgroup_prev.next = kthgroup_prev = tempreturn dummy.next",
    "threeLiner": "kth =get_kth(group_prev, k)if not kth:breakgroup_next = kth.next# Reverse groupprev,curr = kth.next,group_prev.nextwhilecurr !=group_next:temp = curr.nextcurr.next= prevprev = currcurr = temptemp= group_prev.nextgroup_prev.next = kthgroup_prev = tempreturn dummy.next",
    "mnemonic": "kth =get_kth(group_prev, k)if not kth:breakgroup_next = kth.next# Reverse groupprev,curr = kth.next,group_prev.nextwhilecurr !=group_next:temp = curr.nextcurr.next= prevprev = currcurr = temptemp= group_prev.nextgroup_prev.next = kthgroup_prev = tempreturn dummy.next",
    "code": "kth =get_kth(group_prev, k)"
  },
  {
    "title": "if not kth:",
    "difficulty": "break",
    "question": "group_next = kth.next",
    "hint": "# Reverse group",
    "oneLiner": "prev,curr = kth.next,group_prev.next",
    "threeLiner": "whilecurr !=group_next:",
    "mnemonic": "temp = curr.next",
    "code": "curr.next= prev"
  }
];
export default linkedlist;