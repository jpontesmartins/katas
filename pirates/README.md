Pirates
===


## Original source
https://www.codewars.com/kata/59604925a68b04598e00001e



## Description

You are a captain on a pirate ship. You are looking to conquer islands, so that you can do lots of piratey stuff on those islands. Let's take a look at your pirate map of the area:


Map
```
                      y
         0    1    2    3    4    5    6    7

  0    ['p', '~', '~', '~', '~', '~', '~', '~'],
  1    ['~', '~', '~', '~', '~', '~', '~', '~'],
  2    ['~', '~', '~', '~', '~', '~', '~', '~'],
  3    ['~', '~', 'u', '~', '~', '~', '~', '~'],
x 4    ['~', '~', '~', '~', 'm', '~', '~', '~'],
  5    ['~', '~', '~', '~', '~', '~', '~', '~'],
  6    ['~', '~', '~', '~', '~', '~', '~', '~'],
  7    ['~', '~', '~', '~', '~', '~', '~', '~']];
```


Where:

- ``` 'p' ``` = pirate (that's our home island). There will always be one home island, always in the top left corner of the sea.

- ``` 'u' ``` = unoccupied island

- ``` 'm' ``` = island occupied by marines

- ``` '~' ``` = ocean waves


The map size will always be 8 x 8. Each of 'p', 'u', 'm' and '~' can occur in any space of the map.
Coordinates are given as [x,y] (examples from the above map: 'p' at [0, 0], 'u' at [3, 2], 'm' at [4, 4]).


### Input

A see map, formatted as an array of arrays of strings.

### Output

Return an array containing all the best candidates (ordered by lowest x coordinate, then lowest y), or an empty array if no island to conquer.

### Rules (highest priority first)
1. Conquer an unoccupied island.
2. If there are no unoccupied islands, conquer one of the marines' islands.
3. Conquer the island closest to any of our home islands (the p items / distances are computed as Manhattan distances).


### Distance
Pirates can only move vertically and horizontally, not diagonally. Moving one index in the array is one unit of distance.

Example 1: The 'u' island is 2 units away:

```
    ['p', '~', 'u', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ...
```

Example 2: The 'u' island is 3 + 2 = 5 units away.

```
  |  ['p', '~', '~', '~', '~', '~', '~', '~'],
  |  ['~', '~', '~', '~', '~', '~', '~', '~'],
3 |  ['~', '~', '~', '~', '~', '~', '~', '~'],
  |  ['~', '~', 'u', '~', '~', '~', '~', '~'],
  |---------->
      2
```


## Examples


```
  map = [
    ['p', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', 'm', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', 'u', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~']];
```

solution = [[4, 4]]
There is a 'u' and an 'm'. Rules say we conquer a 'u' if possible, so...

```
  map = [
    ['p', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', 'm', '~', '~', '~', '~'],
    ['m', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', 'm', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', 'm', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~']];
```

solution = [[2,0]]

