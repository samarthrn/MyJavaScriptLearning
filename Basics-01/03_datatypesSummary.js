/* 
Data types are divided into two categories based upon how they are stored in memory and how can we access them: 

    1) Primitive (Call by value i.e value is given after coyping)
        String, Number, Boolean, null, undefined, Symbol, BigInt

    2) Non-Primitive (Reference type)
    the values whose reference is directly given in the memory
        Array, Object, Functions

*/


// primitive data-types are stored in Stack
// non-primitive data-types are stored in heap

const Age    =20n
const Marks = 100.0000101001001
const MyFunc = function () {
    console.log("Hello world this is m function")
}
MyFunc()
console.log(Age,Marks)

console.log(typeof MyFunc);



