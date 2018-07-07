
# Benchmarks

function | v2 | v3
---|---|---
space | 199,672 | 367,607
width | 219,851 | 765,141
fontSize | 244,053 | 1,043,508
color | 255,672 | 513,132
style | 513,256 | 873,994
space (array) | 53,116 | 126,077
width (array) | 44,070 | 120,190
fontSize (array) | 51,321 | 155,818
color (array) | 51,643 | 154,033

## v2
```
v2 space x 168,251 ops/sec ±1.81% (80 runs sampled)
v2 width x 219,851 ops/sec ±2.21% (77 runs sampled)
v2 fontSize x 248,880 ops/sec ±1.77% (80 runs sampled)
v2 color x 241,741 ops/sec ±1.91% (80 runs sampled)
v2 style x 481,558 ops/sec ±1.52% (81 runs sampled)
v2 width array x 44,070 ops/sec ±2.74% (80 runs sampled)
v2 space array x 52,138 ops/sec ±1.81% (81 runs sampled)
v2 fontSize array x 48,256 ops/sec ±1.66% (80 runs sampled)
v2 color array x 47,630 ops/sec ±1.78% (78 runs sampled)
```

## v3
```
space x 471,422 ops/sec ±2.06% (79 runs sampled)
width x 765,141 ops/sec ±2.37% (79 runs sampled)
fontSize x 967,604 ops/sec ±2.35% (78 runs sampled)
color x 509,063 ops/sec ±1.45% (82 runs sampled)
style x 813,973 ops/sec ±2.02% (82 runs sampled)
width array x 120,190 ops/sec ±2.35% (81 runs sampled)
space array x 140,242 ops/sec ±2.60% (77 runs sampled)
fontSize array x 170,203 ops/sec ±2.14% (79 runs sampled)
color array x 149,187 ops/sec ±1.72% (79 runs sampled)
```

## v2
```
v2 space x 199,672 ops/sec ±2.39% (83 runs sampled)
v2 width x 229,147 ops/sec ±3.58% (76 runs sampled)
v2 fontSize x 244,053 ops/sec ±2.86% (75 runs sampled)
v2 color x 255,672 ops/sec ±0.97% (84 runs sampled)
v2 style x 513,256 ops/sec ±1.04% (83 runs sampled)
v2 width array x 47,808 ops/sec ±1.81% (81 runs sampled)
v2 space array x 53,116 ops/sec ±1.07% (80 runs sampled)
v2 fontSize array x 51,321 ops/sec ±1.02% (82 runs sampled)
v2 color array x 51,643 ops/sec ±1.23% (83 runs sampled)
```

## v3
```
space x 367,607 ops/sec ±0.90% (81 runs sampled)
width x 715,450 ops/sec ±2.21% (80 runs sampled)
fontSize x 1,043,508 ops/sec ±1.04% (79 runs sampled)
color x 513,132 ops/sec ±0.91% (83 runs sampled)
style x 873,994 ops/sec ±1.30% (86 runs sampled)
width array x 126,244 ops/sec ±1.92% (78 runs sampled)
space array x 126,077 ops/sec ±0.90% (80 runs sampled)
fontSize array x 155,818 ops/sec ±1.20% (83 runs sampled)
color array x 154,033 ops/sec ±1.34% (81 runs sampled)
```

## v2
```
v2 space x 137,599 ops/sec ±15.31% (75 runs sampled)
v2 width x 222,377 ops/sec ±2.47% (73 runs sampled)
v2 fontSize x 239,599 ops/sec ±2.27% (76 runs sampled)
v2 color x 227,601 ops/sec ±3.17% (77 runs sampled)
v2 style x 433,452 ops/sec ±3.75% (74 runs sampled)
v2 width array x 42,690 ops/sec ±3.68% (73 runs sampled)
v2 space array x 49,585 ops/sec ±3.48% (76 runs sampled)
v2 fontSize array x 46,604 ops/sec ±2.25% (76 runs sampled)
v2 color array x 47,424 ops/sec ±2.21% (77 runs sampled)
```

## v3
```
space x 413,494 ops/sec ±3.14% (80 runs sampled)
width x 614,903 ops/sec ±3.28% (72 runs sampled)
fontSize x 945,254 ops/sec ±3.43% (70 runs sampled)
color x 458,363 ops/sec ±4.52% (75 runs sampled)
style x 851,279 ops/sec ±2.48% (80 runs sampled)
width array x 99,877 ops/sec ±5.27% (68 runs sampled)
space array x 117,945 ops/sec ±2.52% (78 runs sampled)
fontSize array x 152,304 ops/sec ±1.93% (75 runs sampled)
color array x 153,113 ops/sec ±2.14% (79 runs sampled)
```


Why are these results so different?

```
width x 192,903 ops/sec ±1.84% (81 runs sampled)
fontSize x 194,581 ops/sec ±9.73% (73 runs sampled)
space x 156,525 ops/sec ±9.69% (68 runs sampled)
color x 155,332 ops/sec ±4.17% (69 runs sampled)
style x 191,389 ops/sec ±3.19% (72 runs sampled)
width array x 12,962 ops/sec ±13.87% (50 runs sampled)
fontSize array x 14,422 ops/sec ±18.07% (47 runs sampled)
space array x 29,086 ops/sec ±29.42% (61 runs sampled)
color array x 11,670 ops/sec ±30.98% (39 runs sampled)

v2 width x 131,669 ops/sec ±11.32% (62 runs sampled)
v2 fontSize x 254,220 ops/sec ±1.78% (78 runs sampled)
v2 space x 169,869 ops/sec ±2.31% (76 runs sampled)
v2 color x 233,793 ops/sec ±2.02% (77 runs sampled)
v2 style:
v2 width array x 43,539 ops/sec ±1.99% (77 runs sampled)
v2 fontSize array x 47,333 ops/sec ±1.89% (79 runs sampled)
v2 space array x 51,077 ops/sec ±1.57% (79 runs sampled)
v2 color array x 49,520 ops/sec ±1.53% (80 runs sampled)
```
