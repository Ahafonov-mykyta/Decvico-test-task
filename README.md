Practical task:

1. Make a function that displays the number of times it has been called Example:
   foo() // 1 foo() // 2 foo() // 3
2. Write a function that replaces all ones with zeros and vice versa for the
   object Example: const d = { left: { left: { left: 1, right: { left: 0, right:
   1, }, }, right: { left: 0, right: 1, }, }, right: 1, } foo(d) console.log(d)
   / _ { left: { left: { left: 0, right: { left: 1, right: 0, }, }, right: {
   left: 1, right: 0, }, }, right: 0, } _/
3. Make a function that takes a number n, and returns a two-dimensional array
   with length n*n, with 2 on the diagonal and 1 on the top and bottom of the
   resulting segment Examples: console.log(bar(5)) /*[ [2,1,1,1,2], [0,2,1,2,0],
   [0,0,2,0,0], [0,2,1,2,0], [2,1,1,1,2], ] _/ console.log(bar(4)) /_[
   [2,1,1,2], [0,2,2,0], [0,2,2,0], [2,1,1,2], ] \*/
4. Create a similar element, when you click on any of the blocks it should
   change own color
