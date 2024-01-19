function Cat(name, color) {
  this.name = name;
  this.color = color;
}
let cat1 = new Cat("miu", "white");

class Dog {
  // constructor hàm khởi tạo, sẽ tự chạy khi new object
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}
let dog1 = new Dog("lulu", "black");
