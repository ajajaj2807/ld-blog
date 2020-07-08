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
];

