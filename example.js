bark = function() {
  console.log(this.name + ' says Woof!')
};
() {
  console.log(this.name + ' says Woof!')
}
bark()
VM157:3  says Woof!
undefined
function Cat(name) {this.name = name}
Cat(name) {this.name = name}
function Dog(name) {this.name = name}
Dog(name) {this.name = name}
Dog.prototype.bark = function() {
  console.log(this.name + ' says Woof!')
};
() {
  console.log(this.name + ' says Woof!')
}
cat = new Cat('Wiskers')
Cat {name: "Wiskers"}
Cat.bark()
VM387:2 Uncaught TypeError: Cat.bark is not a function(…)(anonymous function) @ VM387:2InjectedScript._evaluateOn @ VM151:878InjectedScript._evaluateAndWrap @ VM151:811InjectedScript.evaluate @ VM151:667
name = "Joe"
"Joe"
bark
() {
  console.log(this.name + ' says Woof!')
}
bark()
VM157:3 Joe says Woof!
undefined
dog = new Dog('fido')
Dog {name: "fido"}
dog.bark
() {
  console.log(this.name + ' says Woof!')
}
dog.bark()
VM306:3 fido says Woof!
undefined
Cat.prototype.bark = dog.bark
() {
  console.log(this.name + ' says Woof!')
}
cat.bark()
VM306:3 Wiskers says Woof!
undefined
bark = function() {
  console.log(name + ' says Woof!')
};
() {
  console.log(name + ' says Woof!')
}
bark()
VM561:3 Joe says Woof!
undefined
Dog.prototype.bark = function() {
  console.log(name + ' says Woof!')
};
() {
  console.log(name + ' says Woof!')
}
dog.bark()
VM566:3 Joe says Woof!
undefined
Dog.prototype.test
undefined
dog.test
undefined
dog.hello
undefined
Dog.prototype.test = "John"
"John"
dog.test
"John"
dog.hello
undefined
Dog.hello = "hi"
"hi"
dog.hello
undefined
Dog.hello
"hi"
dog.test()
VM740:2 Uncaught TypeError: dog.test is not a function(…)(anonymous function) @ VM740:2InjectedScript._evaluateOn @ VM151:878InjectedScript._evaluateAndWrap @ VM151:811InjectedScript.evaluate @ VM151:667
Dog
Dog(name) {this.name = name}
hello
VM777:2 Uncaught ReferenceError: hello is not defined(…)(anonymous function) @ VM777:2InjectedScript._evaluateOn @ VM151:878InjectedScript._evaluateAndWrap @ VM151:811InjectedScript.evaluate @ VM151:667
function Lib() {}
Lib() {}
Lib.prototype.woof = function() { return this.name + ' woof'; }
() { return this.name + ' woof'; }
Lib.prototype.bark = function() { return 'bark!'; }
() { return 'bark!'; }
Lib.prototype.meow = function() { return this.name + ' meow'; }
() { return this.name + ' meow'; }
Cat.prototype.lib = new Lib()
Lib {}
cat.lib.meow
() { return this.name + ' meow'; }
cat.lib.meow()
"undefined meow"
cat.lib.bark
() { return 'bark!'; }
cat.lib.bark()
"bark!"
Lib.prototype.meow = function(name) { return name + ' meow'; }
(name) { return name + ' meow'; }
cat.lib.meow()
"undefined meow"
cat.lib.meow("mittens")
"mittens meow"
