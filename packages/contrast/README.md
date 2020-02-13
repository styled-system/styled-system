# Contrast

## What is contrast?

Contrast is a function that will automatically take your backgroundColor and use that to work out whether to use black or white as the text color 

## How to use contrast?

Constrast is used the same way as any of the others it just has a few caveats

1. It must be used in conjunction with a function that sets backgroundColor.
2. It cannot be used inside of compose.
3. If you want to be able to override the contrast color you must put the color function after the contrast one. Example below

```js
  Color is overridable.

  const Box = styled.div`
    ${contrast}
    ${color}
  `
  
  Color is not overridable.
  
  const Box = styled.div`
    ${color}
    ${contrast}
  `
```
