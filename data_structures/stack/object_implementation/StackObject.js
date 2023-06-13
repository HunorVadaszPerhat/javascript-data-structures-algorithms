// Define the Stack class using an object
class StackObject {
    constructor() {
      this.stack = {}; // Create an empty object to store the stack elements
      this.topIndex = -1; // Index of the top element in the stack
    }
  
    push(item) {
      this.topIndex++; // Increment the top index
      this.stack[this.topIndex] = item; // Add the item to the object using the top index as the key
    }
  
    pop() {
      if (this.isEmpty()) {
        return null; // If the stack is empty, return null
      }
      const poppedItem = this.stack[this.topIndex]; // Get the item at the top index
      delete this.stack[this.topIndex]; // Remove the item from the object
      this.topIndex--; // Decrement the top index
      return poppedItem; // Return the popped item
    }
  
    peek() {
      if (this.isEmpty()) {
        return null; // If the stack is empty, return null
      }
      return this.stack[this.topIndex]; // Return the item at the top index
    }
  
    isEmpty() {
      return this.topIndex === -1; // Return true if the top index is -1
    }
  
    size() {
      return this.topIndex + 1; // Return the size of the stack (top index + 1)
    }
  
    clear() {
      this.stack = {}; // Reset the stack object to an empty object
      this.topIndex = -1; // Reset the top index to -1
    }
  }

  module.exports = StackObject;
