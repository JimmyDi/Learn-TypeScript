interface A {
    x: number;
    foo(bar: number): number;   //5
    foo(bar: 'a'): number;  //  2
}

interface A {
    y: number;
    foo(bar: string): string;   //3
    foo(bar: number[]): number[];   //4
    foo(bar: 'b'): number;  //  1
}

let a: A = {
    x: 1,
    y: 1,
    foo(bar: any) {
        return bar;
    }
}

function Lib() {}
namespace Lib {
    export let version = '1.0';
}

console.log(Lib.version);

class C {}
namespace C {
    export let state = 1;
}
console.log(C.state);

enum Color {
    Red,
    Yellow,
    Blue
}

namespace Color {
    export function mix() {}
}

console.log(Color);