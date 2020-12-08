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
