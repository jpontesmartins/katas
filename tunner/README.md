Tunner
===

## Description

Implements a tunner for a guitar.  
You will receive a array of integers. Each cell of the array represents one chord.  

The examplo below represents the standard tunning of a guitar.
The 'e' chord is tuned in 330hz, the B chord is tuned in 247Hz, and so on.
```
const standardTunning = [330, 247, 196, 146, 110, 82]
```

| Chord | Hz    |
|-------|-----  |
| e     | 330   |
| B     | 247   |
| G     | 196   |
| D     | 146   |
| A     | 110   |
| E     | 82    |

## Task

Given an array of frequencies, you should return "Tuned" if is tuned.  
If it's not, you should return the chord untunned followed by the number to correct the guitar tunning.  

Example:
```
tune([310, 247, 190, 146, 110, 82]);
//returns e:20 G:6
```

Explaing:  
To tune the 'e chord', the user has to sum 20Hz to the chord frequency.
To tune the 'G chod', the user has to sum 6Hz to the chord frequency





