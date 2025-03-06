function a(){
    function c(){
        console.log(b)
    }
    c()
} 
var b=25;
a();

//closure

function parent(){
    var a=10;
    function child(){
        var b=20;
        console.log(a)
        function child2(){ //child2 create the closure with parent and child function
            console.log(a+b)
        }
        return child2
    }
    // child() //instead of calling function return it
    return child
}
let childFn=parent() //means child function is returned outside
console.log(childFn)
let child2Fn=childFn()
child2Fn()