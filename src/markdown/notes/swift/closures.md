---
title: "Closures"
date: "2023-01-02"
draft: true
---

Closures allow you to group code together, without creating a named function. These self-contained blocks of functionality can be passed around and used in your code. Closures can capture and store references to variables and constants from the context in which they are defined. This is known as closing over those variables, hence the name "closures".

## Closure Expression Syntax

The basic syntax of a closure expression is:

```swift
{ (parameters) -> returnType in
    // code
}
```

Here is an example of a closure that takes two integers and returns their sum:

```swift
let sumClosure = { (a: Int, b: Int) -> Int in
    return a + b
}

let result = sumClosure(3, 5) // result is 8

```

## Resources

[Closures | Documentation](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/closures)
