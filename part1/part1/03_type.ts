//1.使用字面量进行类型声明
let a2 :10
a2=10   //a2之能是10不能修改

//2.可以使用竖线连接多个类名(联合类型)
let b:'male' | 'female'
b='male',
b='female'
// b='hello'

//3.any类型(任意赋值类型,关闭类型监测相当于js了,不建议使用)

// let d      隐式的any
// let d:any  显示的any 

let d:any;     //等同于let d
d=10;
d='hello';
d=true


//4.unknow表视未知类型的值
let e:unknown;
e=10;
e=true;
e="string"



// 测试1(d的类型是any,它可以赋值给任意变量，d是any影响别人和自己)
let s:string
s=d

//测试2(e的变量unknown是未知的，所以不能赋值给s给定的字符串，这里报错)
e='hello';
// s=e

//unknow类型的变量不能赋值给其他变量会报错s=e
if(typeof e ==="string"){     //e的类型为string的时候就不会报错
    s=e;
}

//5.类型断言(告诉编辑器这个e就是字符串类型，)
s=e as string    //写法1   变量 as 类型
s=<string>e;   //写法2     <类型>变量



//6.void--没有返回值的类型
function fn1() :void {   //void表示为空，表视没有返回值的函数
 }

function fn() :string {
    return 'abc'
 }


//7.never 表视永远不会返回结果(设置报错)
function fn2() :never{
    throw new Error('报错了')
}

