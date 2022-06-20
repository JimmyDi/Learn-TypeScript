// let a = 1;
let b = [1, null];

// let c = (x = 1) => x + 1;

window.onkeydown = (event) => {
    // console.log(event);
}

interface Foo {
    bar: number;
}

// let foo = {} as Foo;
let foo: Foo = {
    bar: 1,
};

// foo.bar = 1;

// let s: string = 's';
// s = null;

interface X {
    a: any;
    b: any;
}
 interface Y {
     a: any;
     b: any;
     c: any;
 }

 let x: X = {a: 1, b: 2};
 let y: Y = {a: 1, b: 2, c: 3};
//  y = x;
x = y;

type Handler = (a: number, b: number) => void;

function hof(handler: Handler) {
    return handler;
}

// 1) 参数个数
let handler1 = (a: number) => {};
hof(handler1);

let handler2 = (a: number, b: number, c: number) => {};
// hof(handler2);

// let a1 = (p1: number, p2: number) => {};
// let b1 = (p1?: number, p2?: number) => {};
// let c1 = (...args: number[]) => {};

// a1 = b1;
// a1 = c1;

// b1 = c1;
// b1 = a1;

// c1 = a1;
// c1 = b1;

// 2) 参数类型　
let handler3 = (a: string) => {

}

// hof(handler3);

interface Point3D {
    x: number;
    y: number;
    z: number;
}

interface Point2D {
    x: number;
    y: number;
}

// let p3d = (point: Point3D) => {};
// let p2d = (point: Point2D) => {};

// p3d = p2d;
// p2d = p3d;

//3) 返回值类型
let f1 = () => ({name: 'Alice'});
let g = () => ({name: 'Alice', location: 'Beijing'});

f1 = g;
// g = f1;

function overload(a: number, b: number): number;
function overload(a: string, b: string): string;
function overload(a: any, b: any): any {};

// 枚举兼容性
enum Fruit { Apple, Banana };
enum Color { Red, Yellow };
let fruit: Fruit.Apple = 3;
let no: number = Fruit.Apple;

// let color: Color.Red = Fruit.Apple;

// 类兼容性

class A {
    constructor(p: number, q: number) {};
    id: number = 1;
    private name: string = '';
}

class B {
    static s = 1;
    constructor(p: number) {};
    id: number = 2;
    private name: string = '';
}

let aa = new A(1, 2);
let bb = new B(1);

// aa = bb;
// bb = aa;

class C extends A {}
let cc = new C(1, 2);
aa = cc;
cc = aa;

// 泛型兼容性
interface Empty<T> {
    // value: T
}

let obj1: Empty<number> = {};
let obj2: Empty<string> = {};

obj1 = obj2;

let log12 = <T>(x: T): T => {
    console.log('x');
    return x;
}

let log22 = <U>(y: U): U => {
    console.log('y');
    return y;
}

log12 = log22;

enum Type { Strong, Week };

class Java {
    helloJava() {
        console.log("Hello Java");
    }
    java: any;
}

class JavaScript {
    helloJavaScript() {
        console.log("Hello JavaScript");
    }
    javascript: any;
}

function isJava(lang: Java | JavaScript): lang is Java {
    return (lang as Java).helloJava !== undefined
}

function getLanguage(type: Type, x?: string | number) {
    let lang = type === Type.Strong ? new Java() : new JavaScript();
    
    if(isJava(lang)) {
        lang.helloJava();
    } else {
        lang.helloJavaScript();
    }

    // if((lang as Java).helloJava) {
    //     (lang as Java).helloJava();
    // } else {
    //     (lang as JavaScript).helloJavaScript();
    // }
    
    // instanceof
    // if ( lang instanceof Java ) {
    //     lang.helloJava();
    // } else {
    //     lang.helloJavaScript();
    // }

    // in
    // if('java' in lang) {
    //     lang.helloJava();
    // } else {
    //     lang.helloJavaScript();
    // }

    // typeof
    // if (typeof x === 'string') {
    //     x.length;
    // } else {
    //     x.toFixed(2);
    // }

    return lang;
}

getLanguage(Type.Strong);



interface DogInterface {
    run(): void;
}

interface CatInterface {
    jump(): void;
}

let pet: DogInterface & CatInterface = {
    run() {},
    jump() {}
}

let a2: number | string = 'a';
let b2: 'a' | 'b' | 'c';
// let c2: 1 | 2 | 3;

class Dog implements DogInterface {
    run() {};
    eat() {};
}

class Cat implements CatInterface {
    jump() {};
    eat() {};
}

enum Master { Boy, Girl };
function getPet(master: Master) {
    let pet = master === Master.Boy ? new Dog() : new Cat();
    pet.eat();
    // pet.run();
    return pet;
}

interface Square {
    kind: "square";
    size: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

interface Circle {
    kind: 'circle';
    r: number;
}

type Shape = Square | Rectangle | Circle;
function area(s: Shape) {
    switch(s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.height * s.width;
        case "circle":
            return Math.PI * s.r ** 2;
        default:
            return ((e: never) => {throw new Error(e)})(s)
    }
}

console.log(area({kind: 'circle', r: 1}));


let obj = {
    a: 1,
    b: 2,
    c: 3
}

function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map(key => obj[key]);
}

console.log(getValues(obj, ['a', 'b']));
// console.log(getValues(obj, ['e', 'f']));

// keyof T
// interface Obj {
//     a: number,
//     b: string
// }

let key: keyof Obj;

// T[k]
let value: Obj['a']

// T extends U


interface Obj {
    a: string;
    b: number;
    c: boolean; 
}

type ReadonlyObj  = Readonly<Obj>;

type PartialObj = Partial<Obj>;

type PickObj = Pick<Obj, 'a' | 'b'>;

type RecordObj = Record<'x' | 'y', Obj>

// T extends U ? X : Y
type TypeName<T> =
    T extends string ? "string" : 
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined":
    T extends Function ? "function":
    "object";

type T1 = TypeName<string>;
type T2 = TypeName<string[]>;

// (A | B) textends U ? X : Y
// (A extends U ? X : Y) | (B extends U ? X : Y)

type T3 = TypeName<string | string[]>

type Diff<T, U> = T extends U ? never : T;

type T4 = Diff<"a" | "b" | "c", "a" | "e">;
// Diff<"a", "a" | "e"> | Diff<"b", "a" | "e"> | Diff<"c", "a" | "e">
// nver | "b" | "c"
// "b" | "c"

type NotNull<T> = Diff<T, undefined | null>
type T5 = NotNull<string | number | undefined | null>

// Exclude<T, U>
// NonNullable<T>
// Extract<T, U>

type T6 = Extract<"a" | "b" | "c", "a" | "e">

// ReturnType

type T7 = ReturnType<() => string>