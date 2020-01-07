# Loose Set

> ES6 Set with loose type checking

## Install

`yarn add @mothepro/loose-set`

## How to Use

Just like a normal ES6 Set, however object identical literals will match each other.

```typescript
  const set = new LooseSet

  set
    .add({ hello: 'world' })
    .add({ hello: 'world' })

  set.size == 1
  set.has({ hello: 'world' }) == true
```
