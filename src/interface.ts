interface List {
    readonly id: number;
    name: string;
    // [x: string]: any;
    age?: number;
}

interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach((value) => {
        console.log(value.id, value.name);
        if(value.age) {
            console.log(value.age)
        }
    })
}

let result = {
    data: [
        {id: 1, name: 'A', sex: 'male'},
        {id: 2, name: 'B', age: 10}
    ]
}

render(result);

interface StringArray {
    [index: number]: string
}

let chars: StringArray = ['A', 'B'];

interface Names {
    [x: string]: any;
    [z: number]: number;
}


