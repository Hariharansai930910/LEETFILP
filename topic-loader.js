// Topic configuration
const topicConfig = [
  { id: 'advancedgraphs', name: 'Advanced Graphs', module: './advancedgraphs.js' },
  { id: 'arraysandstrings', name: 'Arrays and Strings', module: './arraysandstrings.js' },
  { id: 'backtracking', name: 'Backtracking', module: './backtracking.js' },
  { id: 'binarysearch', name: 'Binary Search', module: './binarysearch.js' },
  { id: 'bitmanipulation', name: 'Bit Manipulation', module: './bitmanipulation.js' },
  { id: 'dp1d', name: '1-D Dynamic Programming', module: './dp1d.js' },
  { id: 'dp2d', name: '2-D Dynamic Programming', module: './dp2d.js' },
  { id: 'graphs', name: 'Graphs', module: './graphs.js' },
  { id: 'greedy', name: 'Greedy', module: './greedy.js' },
  { id: 'heap', name: 'Heap/Priority Queue', module: './heap.js' },
  { id: 'intervals', name: 'Intervals', module: './intervals.js' },
  { id: 'linkedlist', name: 'Linked List', module: './linkedlist.js' },
  { id: 'mathgeometry', name: 'Math & Geometry', module: './mathgeometry.js' },
  { id: 'slidingwindow', name: 'Sliding Window', module: './slidingwindow.js' },
  { id: 'stack', name: 'Stack', module: './stack.js' },
  { id: 'trees', name: 'Trees', module: './trees.js' },
  { id: 'trie', name: 'Trie', module: './trie.js' },
  { id: 'twopointers', name: 'Two Pointers', module: './twopointers.js' },
];

// Cache for loaded topics
const topicCache = {};

/**
 * Load a topic's problems from the corresponding JS module
 * @param {string} topicId - The ID of the topic to load
 * @returns {Promise<Array>} - Array of problem objects
 */
async function loadTopicProblems(topicId) {
  // If already cached, return from cache
  if (topicCache[topicId]) {
    return topicCache[topicId];
  }

  // Find the topic configuration
  const topic = topicConfig.find(t => t.id === topicId);
  if (!topic) {
    throw new Error(`Topic not found: ${topicId}`);
  }

  try {
    // Dynamically import the JS module
    const module = await import(topic.module);
    const problems = module.problems || [];
    
    // Cache the results
    topicCache[topicId] = problems;
    return problems;
  } catch (error) {
    console.error(`Error loading topic ${topicId}:`, error);
    return [];
  }
}

/**
 * Check if a topic module exists and has problems
 * @param {string} topicId - The ID of the topic to check
 * @returns {Promise<boolean>} - Whether the topic exists and has problems
 */
async function checkTopicExists(topicId) {
  try {
    const problems = await loadTopicProblems(topicId);
    return problems.length > 0;
  } catch (error) {
    return false;
  }
}

// Export the functions and config
export { loadTopicProblems, checkTopicExists, topicConfig };