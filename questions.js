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
];

