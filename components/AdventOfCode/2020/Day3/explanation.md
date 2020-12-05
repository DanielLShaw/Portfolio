## Part 1

Sample Input:

```
....#...............##...#...#.
#...#..#.....##.##.#.##....#...
...#.....#...#.................
#..#..#.......#...#.#..........
...##..#.#..........##...#.....
........###.#.##..#............
```

As the question asks for a slot of 1 down 3 right and the pattern repeats horizontally, when you reach the end of one line, you will end up on the next line. This reduces problem to a 1D problem, where for each line you have to choose the tile which is 3 along from the previous one.

The final piece of the puzzle is some remainder logic to detect when you slide into the next horizontal slice.

## Part 2

The only major change to the code from part 1 is the need to descend the slope more rapidly. This is achieved by swapping to a for loop, which can have the incrementation rate updated, so that certain lines are skipped.
