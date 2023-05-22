//声明定义一个变量a,指定类型为number
// let a1:number;

// //a的类型时number,以后使用的过程中之能时number
// a1=10,
// a1=33,
// a='hello'   //不能将string的类型复制给number类型，有错误，但是能编译成js


// let c1:boolean=false;  //声明类型的同时赋值
// c1=true

//变量的声明和赋值同时进行，ts可以自动对变量的类型检测,let c=false  这里就相当于默认的这是boolean类型




function sum(a:number,b:number){     //这样传的时候之能传只会是数字
    return a+b
}

// function sum(a:number,b:number):number{     //函数返回值的类型
//     return a+b
// }




// sum(3,'string')  //这里就会报错,但是依旧能编译
// sum(1,2)   //正常
// sum(1,2,4)  //会报错，传的多和少都会报错