abstract class Animal {
    eat() {
        console.log('eat');
    }

    abstract sleep(): void;
}

// let animal = new Animal();

// class Dog extends Animal {
//     constructor(name: string) {
//         super();
//         this.name = name;
//     }

//     public name?: string;
//     run() {};
//     private pri() {}
//     protected pro() {}
//     readonly legs: number = 4;
//     static food: string = 'bones';
//     sleep(): void {
//         console.log('dog sleep');
//     }
// }

// console.log(Dog.prototype);
// let dog = new Dog('wangwang');
// console.log(dog);
// // dog.pri();
// // dog.pro()
// console.log(Dog.food);
// dog.eat();
// dog.sleep();

// class Husky extends Dog {
//     constructor(name: string, public color: string) {
//         super(name);
//         this.color = color;
//         // this.pri();
//         this.pro();
//     }

//     // color: string;
// }

// console.log(Husky.food);

// class Cat extends Animal {
//     sleep(): void {
//         console.log('Cat sleep');
//     }
// }

// let cat = new Cat();

// let animals: Animal[] = [dog, cat];
// animals.forEach(i => {
//     i.sleep();
// });

class WorkFlow {
    step1() {
        return this;
    }

    step2() {
        return this;
    }
}

new WorkFlow().step1().step2;

class Myflow extends WorkFlow {
    next() {
        return this;
    }
}

new Myflow().next().step1().next().step2();