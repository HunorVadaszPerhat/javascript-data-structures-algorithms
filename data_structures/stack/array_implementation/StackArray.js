// Define the Stack class using an array
class StackArray {
    constructor() {
      this.items = []; // Create an empty array to store the stack elements
    }
  
    push(item) {
      this.items.push(item); // Add the item to the end of the array
    }
  
    pop() {
      if (this.isEmpty()) {
        return null; // If the stack is empty, return null
      }
      return this.items.pop(); // Remove and return the last item in the array
    }
  
    peek() {
      if (this.isEmpty()) {
        return null; // If the stack is empty, return null
      }
      return this.items[this.items.length - 1]; // Return the last item in the array
    }
  
    isEmpty() {
      return this.items.length === 0; // Return true if the length of the array is 0
    }
  
    size() {
      return this.items.length; // Return the length of the array
    }
  
    clear() {
      this.items = []; // Assign an empty array to clear all items
    }
  }

  module.exports = StackArray;
