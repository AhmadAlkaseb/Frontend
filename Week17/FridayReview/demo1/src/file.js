function Person(fullname, age) {
    this.fullname = fullname;
    this.age = age;
}

Person.prototype.greet = function() {
    return "Hello, my name is " + this.fullname + " and I am " + this.age + " years old.";
};

export default Person;