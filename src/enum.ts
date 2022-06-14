enum Role {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}

enum Message {
    Success = '恭喜你，成功了',
    Fail = '抱歉，失败了'
}

enum Answer {
    N,
    Y = 'Yes'
}

enum Char {
    // const
    a,
    b = Char.a,
    c = 1 + 3,
    // computed
    d = Math.random(),
    e = '123'.length
}

console.log(Char.a)

// 常量枚举 disappera after compiled
const enum Month {
    Jan,
    Feb,
    Mar
}

let month = [Month.Jan, Month.Feb, Month.Mar]

enum E {a, b}
enum F { a = 0, b = 1}
enum G {a = 'apple', b = 'banana'}

let e: E = 3;
let f: F = 3;

let e1: E.a = 1
let e2: E.b
// e1 === e2
let e3: E.a = 1
e1 === e3

let g1: G = G.b
let g2: G.a = G.a
