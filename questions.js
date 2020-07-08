export const questions = [
  {
    title: "Two Number Sum",
    question: "Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in sorted order. If no two numbers sum up to the target sum, the function should return an empty array. Assume that there will be at most one pair of numbers summing up to the target sum.",
    io: 'Sample input: [3, 5, -4, 8, 11, 1, -1, 6], 10 Sample output: [-1, 11]',
    category: "easy",
  },
  {
    title: "Deapth-First Search",
    question: "You are given a Node class that has a name and an array of optional children Nodes. When put together, Nodes form a simple tree-like structure. Implement the depthFirstSearch method on the Node class, which takes in an empty array, traverses the tree using the Depth-rst Search approach (specically navigating the tree from left to right), stores all the of the Nodes' names in the input array, and returns it.",
    category: "easy",
  },
  {
    title: "Product Sum",
    question: "Write a function that takes in a 'special' array and returns its product sum. A 'special' array is a non-empty array that contains either integers or other 'special' arrays. The product sum of a 'special' array is the sum of its elements, where 'special' arrays inside it should be summed themselves and then multiplied by their level of depth. For example, the product sum of [x, y] is x + y; the product sum of [x, [y, z]] is x + 2y + 2z.",
    category: "easy",
    io: 'Sample input: [5, 2, [7, -1], 3, [6, [-13, 8], 4]] Sample output: 12 (5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4)'
  },
  {
    title: "Three Number Sum",
    question: "Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should nd all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold. If no three numbers sum up to the target sum, the function should return an empty array.",
    category: "medium",
    io: 'Sample input: [12, 3, 1, 2, -6, 5, -8, 6], 0 ; Sample output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]'
  },
  {
    title: "Four Number Sum",
    question: "Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should nd all quadruplets in the array that sum up to the target sum and return a two-dimensional array of all these quadruplets in no particular order. If no four numbers sum up to the target sum, the function should return an empty array.",
    category: "hard",
    io: 'Sample input: [7, 6, 4, -1, 1, 2], 16 ; Sample output: [[7, 6, 4, -1], [7, 6, 1, 2]]'
  },
  {
    title: "Binary Search",
    question: "Write a function that takes in a sorted array of integers as well as a target integer. The function should use the Binary Search algorithm to nd if the target number is contained in the array and should return its index if it is, otherwise -1.",
    category: "easy",
    io: 'Sample input: [0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33 ; Sample output: 3'
  },
  {
    title: "Find Three Largest Numbers",
    question: "Write a function that takes in an array of integers and returns a sorted array of the three largest integers in the input array. Note that the function should return duplicate integers if necessary; for example, it should return [10, 10, 12] for an input array of [10, 5, 9, 10, 12].",
    category: "easy",
    io: 'Sample input: [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7] Sample output: [18, 141, 541]'
  },
  {
    title: "Bubble Sort",
    question: "Write a function that takes in an array of integers and returns a sorted version of that array. Use the Bubble Sort algorithm to sort the array.",
    category: "easy",
    io: ' Sample input: [8, 5, 2, 9, 5, 6, 3] Sample output: [2, 3, 5, 5, 6, 8, 9] '
  },
  {
    title: "Insertion Sort",
    question: "Write a function that takes in an array of integers and returns a sorted version of that array. Use the Insertion Sort algorithm to sort the array.",
    category: "easy",
    io: 'Sample input: [8, 5, 2, 9, 5, 6, 3] Sample output: [2, 3, 5, 5, 6, 8, 9]'
  },
  {
    title: "Selection Sort",
    question: "Write a function that takes in an array of integers and returns a sorted version of that array. Use the Selection Sort algorithm to sort the array.",
    category: "easy",
    io: 'Sample input: [8, 5, 2, 9, 5, 6, 3] Sample output: [2, 3, 5, 5, 6, 8, 9]'
  },
  {
    title: "Palindrome Check",
    question: "Write a function that takes in a non-empty string and that returns a boolean representing whether or not the string is a palindrome. A palindrome is dened as a string that is written the same forward and backward.",
    category: "easy",
    io: 'Sample input:"abcdcba" ; Sample output: True (it is a palindrome)'
  },
  {
    title: "Smallest Difference",
    question: "Write a function that takes in two non-empty arrays of integers. The function should find the pair of numbers (one from the first array, one from the second array) whose absolute difference is closest to zero. The function should return an array containing these two numbers, with the number from the first array in the first position. Assume that there will only be one pair of numbers with the smallest difference.",
    category: "medium",
    io: 'Sample input: [-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17] Sample output: [28, 26]'
  },
  {
    title: "Max Subset Sum",
    question: "Write a function that takes in an array of positive integers and returns an integer representing the maximum sum of non-adjacent elements in the array. If a sum cannot be generated, the function should return 0.",
    category: "medium",
    io: 'Sample input: [75, 105, 120, 75, 90, 135] ; Sample output: 330 (75, 120, 135)'
  },
  {
    title: "Num of ways to make change",
    question: "Given an array of positive integers representing coin denominations and a single non-negative integer representing a target amount of money, implement a function that returns the number of ways to make change for that target amount using the given coin denominations. Note that an unlimited amount of coins is at your disposal.",
    category: "medium",
    io: 'Sample input: 6, [1, 5] ; Sample output: 2 (1x1 + 1x5 and 6x1)'
  },
  {
    title: "Levenshtein Distance",
    question: "Write a function that takes in two strings and returns the minimum number of edit operations that need to be performed on the rst string to obtain the second string. There are three edit operations: insertion of a character, deletion of a character, and substitution of a character for another.",
    category: "medium",
    io: 'Sample input:"abc","yabd" Sample output: 2 (insert"y"; substitute "c"for "d")'
  },
  {
    title: "Kadane's Algorithm",
    question: "Write a function that takes in a non-empty array of integers and returns the maximum sum that can be obtained by summing up all the numbers in a non-empty subarray of the input array. A subarray must only contain adjacent numbers.",
    category: "medium",
    io: 'Sample input: [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4] ; Sample output: 19 ([1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1])'
  },
  {
    title: "Single Cycle Check",
    question: "You are given an array of integers. Each integer represents a jump of its value in the array. For instance, the integer 2 represents a jump of 2 indices forward in the array; the integer -3 represents a jump of 3 indices backward in the array. If a jump spills past the array's bounds, it wraps over to the other side. For instance, a jump of -1 at index 0 brings us to the last index in the array. Similarly, a jump of 1 at the last index in the array brings us to index 0. Write a function that returns a boolean representing whether the jumps in the array form a single cycle. A single cycle occurs if, starting at any index in the array and following the jumps, every element is visited exactly once before landing back on the starting index.",
    category: "medium",
    io: 'Sample input: [2, 3, 1, -4, -4, 2] ; Sample output: True'
  },
  {
    title: "Breadth-First Search",
    question: "You are given a Node class that has a name and an array of optional children Nodes. When put together, Nodes form a simple tree-like structure. Implement the breadthFirstSearch method on the Node class, which takes in an empty array, traverses the tree using the Breadth-rst Search approach (specically navigating the tree from left to right), stores all of the Nodes' names in the input array, and returns it.",
    category: "medium"
  },
  {
    title: "Min Heap Construction",
    question: "Implement a Min Heap class. The class should support insertion, removal (of the minimum / root value), peeking (of the minimum / root value), as well as sifting a value up and down the heap and building the heap from an input array. The heap should be represented in the form of an array.",
    category: "medium",
    io: 'Sample input: [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41] -> buildHeap(array) -> insert(76) -> remove() -> remove() -> insert(87) ; Sample output: -> [-5, 2, 6, 7, 8, 8, 24, 391, 24, 56, 12, 24, 48, 41] -> [-5, 2, 6, 7, 8, 8, 24, 391, 24, 56, 12, 24, 48, 41, 76] -> [2, 7, 6, 24, 8, 8, 24, 391, 76, 56, 12, 24, 48, 41] -> [6, 7, 8, 24, 8, 24, 24, 391, 76, 56, 12, 41, 48] -> [6, 7, 8, 24, 8, 24, 24, 391, 76, 56, 12, 41, 48, 87]'
  },
  {
    title: "Permutations",
    question: "Write a function that takes in an array of unique integers and returns an array of all permutations of those integers. If the input array is empty, your function should return an empty array.",
    category: "medium",
    io: 'Sample input: [1, 2, 3] ; Sample output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]'
  },
  {
    title: "Power Set",
    question: "Write a function that takes in an array of unique integers and returns its powerset. The powerset P(X) of a set X is the set of all subsets of X. For example, the powerset of [1,2] is [[], [1], [2], [1,2]]. Note that the sets in the powerset do not need to be in any particular order.",
    category: "medium",
    io: 'Sample input: [1, 2, 3] ; Sample output: [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]'
  },
  {
    title: "Search in Sorted Matrix",
    question: "You are given a two-dimensional array (matrix) of distinct integers where each row is sorted and each column is also sorted. The matrix does not necessarily have the same height and width. You are also given a target number, and you must write a function that returns an array of the row and column indices of the target number if it is contained in the matrix and [-1, -1] if it is not contained in the matrix.",
    category: "medium",
    io: 'Sample input: [ [1, 4, 7, 12, 15, 1000], [2, 5, 19, 31, 32, 1001], [3, 8, 24, 33, 35, 1002], [40, 41, 42, 44, 45, 1003], [99, 100, 103, 106, 128, 1004], ], 44 ; Sample output: [3, 3]'
  },
  {
    title: "Balanced Brackets",
    question: 'Write a function that takes in a string made up of brackets ("(","[","{",")","]", and "}") and other optional characters. The function should return a boolean representing whether or not the string is balanced in regards to brackets. A string is said to be balanced if it has as many opening brackets of a given type as it has closing brackets of that type and if no bracket is unmatched. Note that a closing bracket cannot match a corresponding opening bracket that comes after it. Similarly, brackets cannot overlap each other as in "[(])".',
    category: "medium",
    io: ' Sample input:"([])(){}(())()()" ; Sample output: True (it is balanced) '
  },
  {
    title: "Longests Palindrome In",
    question: 'Write a function that, given a string, returns its longest palindromic substring. A palindrome is dened as a string that is written the same forward and backward. Assume that there will only be one longest palindromic substring.',
    category: "medium",
    io: 'Sample input:"abaxyzzyxf" Sample output:"xyzzyx"'
  },
  {
    title: "Suffix Trie",
    question: 'Write a class for a sufx-trie-like data structure. The class should have a "root" property set to be the root node of the trie. The class should support creation from a string and the searching of strings. The creation method (called populateSufxTrieFrom()) will be called when the class is instantiated and should populate the "root" property of the class. Note that every string added to the trie should end with the special"endSymbol" character:"*".',
    category: "medium",
    io: 'Sample input (for creation):"babc" ; Sample output (for creation): { "c": {"": True}, "b": { "c": {"": True}, "a": {"b": {"c": {"": True}}}, }, "a": {"b": {"c": {"": True}}}, } Sample input (for searching in the sufx trie above):"abc" Sample output (for searching in the sufx trie above): True'
  },
];

