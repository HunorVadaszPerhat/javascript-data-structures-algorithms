// Define the Node class for the linked list
class Node {
    constructor(value) {
      this.value = value; // Value of the node
      this.next = null; // Pointer to the next node
    }
  }
  
  // Define the Stack class using a linked list
  class StackLinkedList {
    constructor() {
      this.top = null; // Pointer to the top of the stack
      this.size = 0; // Size of the stack
    }
  
    push(item) {
      const newNode = new Node(item); // Create a new node
      newNode.next = this.top; // Set the next pointer to the current top
      this.top = newNode; // Update the top to the new node
      this.size++; // Increment the size
    }
  
    pop() {
      if (this.isEmpty()) {
        return null; // If the stack is empty, return null
      }
      const poppedValue = this.top.value; // Get the value of the top node
      this.top = this.top.next; // Update the top to the next node
      this.size--; // Decrement the size
      return poppedValue; // Return the popped value
    }
  
    peek() {
      if (this.isEmpty()) {
        return null; // If the stack is empty, return null
      }
      return this.top.value; // Return the value of the top node
    }
  
    isEmpty() {
      return this.size === 0; // Return true if the size is 0
    }
  
    size() {
      return this.size; // Return the size of the stack
    }
  
    clear() {
      this.top = null; // Set the top to null to clear all nodes
      this.size = 0; // Reset the size to 0
    }
  }

  module.exports = StackLinkedList;
