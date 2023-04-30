/*Problem Name: Stack Implementation using js */

//create a Stack class
class Stack {
  constructor() {
    this.items = [];
  }

  //For data insertion, push function is made
  pushData = (data) => {
    this.items.push(data);
  };

  //For data deletion, pop function is made
  pop = () => {
    if (this.items.length === 0) {
      console.log("Stack is Underflow");
      return;
    } else {
      return this.items.pop();
    }
  };

  //For checking the topmost data, this function is made of
  peek = () => {
    if (this.items.length === 0) {
      console.log(
        "Sorry! Stack is empty. That's why no peek data is available"
      );
    } else {
      console.log(this.items[this.items.length - 1]);
    }
  };

  //Doing chack stack is empty or not by this function
  isEmpty = () => {
    if (this.items.length === 0) {
      console.log("Stack is empty.Insert some data");
    } else {
      console.log(`Stack has ${this.items.length} data`);
    }
  };

  //print all data of stack
  printStack = () => {
    let i;
    for (i = 0; i < this.items.length; i++) {
      console.log(this.items[i] + " ");
    }
  };
}

//Driving code
var st = new Stack();

st.pushData(1);
st.pushData(2);
st.pushData(3);
st.pushData(4);

console.log("Stack after data insertion \n");
st.printStack();

st.pop();
st.pop();

console.log("Stack after data deletion \n");
st.printStack();

st.isEmpty();
st.peek();
