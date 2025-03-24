console.log("Hello")
const alice={
    name:"Alice",
    age:"30",
    introduce:function(){
        console.log(`Hi my name is ${this.name} and age is ${this.age}`)
    }
}
const introduceAlice=alice.introduce.bind(alice)
introduceAlice()
introduceAlice()