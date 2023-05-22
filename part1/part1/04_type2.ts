//1.object表示一个js对象
let a3:object
  a3={

  }
  a3 = function(){

  }

//和上面的区别,上面就是纯粹的定义一个类型,这里是给这个对象指定的类型为string
//语法  变量:{属性名1:属性类型1,属性名2:属性类型2},结构必须一样
//属性名后面加个?表示属性可选，有这个行，没这个也行
let b1: {name:string,age?:number}

// b1={}  //   error
b1={name:'hello'}  //这里就可以直接


//测试2[propName:string]:any   [propName:string]属性名是字符串，   :any任意类型的的属性  如果改成:string，表示值之能是字符型
let c :{name:string,[propName:string]:any};
c={name:'著白洁',a:1,gender:'男'}



// 测试3:两个参数是number,返回值也是number,函数结构的类型声明
let d1: (a:number,b:number,)=>number
d1=function(n1,n2) :number{
    return n1+n2
}

//2.array数组string[]:表示字符串数组 
let e1:string[]   
// e1=['a','b','c',1]   数组之能放字符串类型的放1会报错

let e2:number[]
// e2=[1,2,3,4,5,'eee']    //数组中只能传规定的类型的值

//写法2:
let g:Array<number>;   

//数组的类型声明
// 类型[]
// Array<类型>


//3.元组(tuple)  元组就是固定长度的数组---数组的长度是变的
let h:[string,string]
h=['hello','world']



//4.enum枚举类型
enum Gender{
   male=0,
   Female=1
}

let i:{name:string,gender:Gender}
i={
    name:'孙悟空',
    gender:Gender.male  //'male'
}

console.log(i.gender===Gender.male)


//测试3,&表示
// let j:string & number;   错误写法，既是string又是number
let j:{name:string} & {age:number};
// j={name:'孙悟空',age:18}


//类型的别名
type myType= 1|2|3|4|5;  //创建一个类型别名

let k: myType;
let l: myType;

k=1
// k=6   报错