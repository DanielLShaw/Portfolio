# [Advent Of Code 2020](https://adventofcode.com/2020)

## Summary

This is the first year that I have attempted to complete all the Advent of Code challenges within December.
Other years I have failed horribly, either by trying to learn a new language during the challenge, or I simply got stumped and gave up.

### Days 1 - 3

Pretty simple challenges (thankfully!). Regular Expressions, loops and lots of adding!

### Day 4

This one was again pretty simple, lots of RegExps to write and check. But a simple oversight on what this RegExp matches caused me to bang my head on the table on why my answer was off by one...:

```
/\d{9}/
```

Now I know, and will never forget, is that the above RegExp will match on a number with 9 _or more_ digits..._whoops_

### Day 5

This day way a breeze as soon as I figured out that it was all just binary :D

### Day 6

Loops and logic, a pretty simple day.

### Day 7

This was the first that took me 2 days to solve (admittedly I wasn't feeling great on Day 7 anyways). This day relies on recursion, which I haven't had much exposure to (as it doesn't really come up in your usual front end work). After lots of scribbles of bags within bags within bags I finally cracked it.

### Day 8

This was a fun task. Knowing how to dodge infinite loops would have been useful intel for Day 7, but Day 8 drills it home. Probably not the most performant answer for part 2, as it loops from top to bottom for all possible inputs synchronously. I'd make this solution better by introducing Promises to it some how to speed it up.

### Day 9 - Encoding Error

Lots of loops and array slicing in this one. Overall not too tricky.

### Day 10 - Adapter Array

Part one wasnt too bad, but Part 2 required knowledge of Big-O notation and tribonaci squences to solve without doing some recursion which lasted 40 years. What I have learnt from reading other solutions is the concept of function caching or memoization, where you record the input and output to a function, so you return previously computed results to functions.

Because I don't really understand the maths, I might return to solve Day 10 part 2 later.

### Day 13 -

Another case of part 1 not being too bad, but part 2 requiring prior knowledge of a maths theorem... After searching for help on r/adventofcode I found that JS doesn't handle very large numbers, and that I would have to research `BigInt`, but alas, I don't have time today to do it.

### Day 14 - Docking Data

Part 2 made me learn how updating large `Object`s is really slow! Enter `Map`. By simply using a `Map` it cut my execution time from minutes to milliseconds!

### Day 15 - Rambunctious Recitation

This day was made a whole lot easier and quicker using `Map`! I was pleased to see that my part 1 answer scaled into part 2 with some very minor tweaks.

### Day 16 - Ticket Translation

Once again `Maps` were here to save the day. Day 16 built upon the knowledge I'd gained from Days 14 and 15, but there were a whole lot more `Map` manipulations and sudoku logic!

## Day 19

I struggled with wrapping my head around the data in this one. I got the data into a map but then didn't know where to go from there. Resorting to checking other peoples answers on the sub reddit, I saw a common solution was to generate a RegExp from the map I had already successfully created.

After recieving that hint, I managed to scrap together an odd looking RegExp, but it worked!

```
^(a)(((a)(a)|(b)(b))((a)(b)|(b)(a))|((a)(b)|(b)(a))((a)(a)|(b)(b)))(b)$
```

## Day 21

Another puzzle where I struggled to see where to start, so once again getting a hint from Reddit I was on my way and steamed through parts 1 and 2.
