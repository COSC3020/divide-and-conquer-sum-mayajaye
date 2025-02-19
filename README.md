# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

#### I've deduced that $T(n)$ is an element of $\Theta(n log n)$ by this reasoning:

###### The steps of this algorithm are:

1. If the array has 0 or 1 elements, stop (base case). This step has a time complexity of $T(1)=1$
2. Split the array into 3 sub arrays. This has a constant time complexity of $T(n)=1$.
3. Add each sub array recursively. This step has a time complexity of $T(n)=3T(\frac{n}{3})$, because we are making 3 recursive calls on a third of the input size with each call.
4. Add the summed up arrays. This has a linear time complexity of $T(n)=n$


###### RECURRENCE RELATION:

$T(n)=1$ if $n<=1$, and $3T(\frac{n}{3})+n$ if $n>1$

To find the theta complexity of $T(n)$, we must repeatedly substitute $T(n)$ into itself, find how $T(n)$ changes with each substitution, identify how many times we can substitute before hitting the base case, and simplify $T(n)$ so that it does not depend on itself.

$T(n)$ changes with each substitution by $3^iT(\frac{n}{3^i})+i(n)$, where $i$ is the number of iterations before reaching the base case. Because we are dividing the input size by 3 with each iteration, there should be $log_{3}n$ iterations before reaching the base case. substituting $log_{3}n$ for $i$, we can simplify $T(n)$ to $n+log_{3}n(n)$, because $T(\frac{n}{log_{3}n})=1$ since substituting $T(n)$ into itself $\frac{n}{log_{3}n}$ times will reach the base case of 1. When analyzing the time complexity, we can ignore the addend n and the log base, so $T(n)$ is an element of $\Theta(n log n)$.

#### Sources

I asked Microsoft Copilot to check my runtime analysis using the Master Theorem that was mentioned in the merge sort lecture, and it confirmed that it was accurate.

"I certify that I have listed all sources used to complete this exercise,
including the use of any Large Language Models. All of the work is my own, except
where stated otherwise. I am aware that plagiarism carries severe penalties and
that if plagiarism is suspected, charges may be filed against me without prior
notice."
