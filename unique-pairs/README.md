Unique Pairs
===

## Available time: 20 min.

## Origin

https://www.codewars.com/kata/unique-pairs

## Description

Mrs. Frizzle is beginning to plan lessons for her science class next semester, and wants to encourage friendship amongst her students. To accomplish her goal, Mrs. Frizzle will ensure **each student has a chance to partner with every other student in the class** in a series of science projects.

Mrs. Frizzle does not know who will be in her class next semester, but she does know she will have n students total in her class.

Specifications
Create the function projectPartners with the parameter n representing the number of students in Mrs. Frizzle's class. The function should return the total number of unique pairs she can make with n students.

```
projectPartners(2)
  --> returns 1

projectPartners(4)
  --> returns 6
```
Remarks
your solution should not contain any arrays or objects that are used similar to an array. Note that Haskell will use rather large numbers, such as 10^40, so any list-based solution will autmatically fail the test.

your function will only recieve a single number that is greater than or equal to 2 -- you do not need to worry about input validation.

## More

Think about different types of returns:  

- Unique pairs in an array, ex: ['(1,2)', '(1,3)', '(2,3)']
```
projectPartners(3)
  --> ['(1,2)', '(1,3)', '(2,3)']
```

- Unique pairs separated by '\n', ex: (1,2)\n (1,3)\n (2,3)\n  
```
projectPartners(3)
  -->
  (1,2)
  (1,3)
  (2,3)
```

