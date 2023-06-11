// Define the Node class to represent a single node in the linked list
class Node {
    constructor(value) {
      this.value = value; // Store the value of the node
      this.next = null; // Reference to the next node, initially set to null
    }
  }
  
  // Define the SinglyLinkedList class
  class SinglyLinkedList {
    constructor() {
      this.head = null; // Reference to the first node, initially set to null
    }
  
    // Method to insert a new node at the head of the list
    insertAtHead(value) {
      const newNode = new Node(value); // Create a new node with the given value
      newNode.next = this.head; // Set the next pointer of the new node to the current head
      this.head = newNode; // Update the head to point to the new node
    }
  
    // Method to insert a new node at the tail of the list
    insertAtTail(value) {
      const newNode = new Node(value); // Create a new node with the given value
  
      if (!this.head) {
        // If the list is empty, make the new node the head
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          // Traverse to the last node
          current = current.next;
        }
        current.next = newNode; // Set the next pointer of the last node to the new node
      }
    }
  
    // Method to insert a new node after a node with a specific value
    insertAfter(value, afterValue) {
      const newNode = new Node(value); // Create a new node with the given value
  
      let current = this.head;
      while (current) {
        if (current.value === afterValue) {
          // Find the node with the specified value
          newNode.next = current.next; // Set the next pointer of the new node
          current.next = newNode; // Set the next pointer of the current node to the new node
          break;
        }
        current = current.next; // Move to the next node
      }
    }
  
    // Method to insert a new node before a node with a specific value
    insertBefore(value, beforeValue) {
      const newNode = new Node(value); // Create a new node with the given value
  
      if (!this.head) {
        // If the list is empty, make the new node the head
        this.head = newNode;
        return;
      }
  
      if (this.head.value === beforeValue) {
        // If the node to insert before is the head, update the head
        newNode.next = this.head; // Set the next pointer of the new node
        this.head = newNode; // Update the head to point to the new node
        return;
      }
  
      let current = this.head;
      while (current.next) {
        if (current.next.value === beforeValue) {
          // Find the node with the specified value
          newNode.next = current.next; // Set the next pointer of the new node
          current.next = newNode; // Set the next pointer of the current node to the new node
          break;
        }
        current = current.next; // Move to the next node
      }
    }
  
    // Method to delete the node at the head of the list
    deleteAtHead() {
      if (this.head) {
        this.head = this.head.next; // Update the head to the next node
      }
    }
  
    // Method to delete the node at the tail of the list
    deleteAtTail() {
      if (!this.head) {
        return; // If the list is empty, return
      }
  
      if (!this.head.next) {
        this.head = null; // If there is only one node, set the head to null
        return;
      }
  
      let current = this.head;
      while (current.next.next) {
        current = current.next; // Traverse to the second-to-last node
      }
      current.next = null; // Set the next pointer of the second-to-last node to null
    }
  
    // Method to delete the node with a specific value
    deleteWithValue(value) {
      if (!this.head) {
        return; // If the list is empty, return
      }
  
      if (this.head.value === value) {
        this.head = this.head.next; // If the node to delete is the head, update the head
        return;
      }
  
      let current = this.head;
      while (current.next) {
        if (current.next.value === value) {
          // Find the node with the specified value
          current.next = current.next.next; // Skip the node to be deleted
          break;
        }
        current = current.next; // Move to the next node
      }
    }
  
    // Method to print the values of all nodes in the list
    printList() {
      let current = this.head;
      while (current) {
        console.log(current.value); // Print the value of the current node
        current = current.next; // Move to the next node
      }
    }
  
    // Method to get the number of nodes in the list
    getLength() {
      let count = 0;
      let current = this.head;
      while (current) {
        count++; // Increment the count
        current = current.next; // Move to the next node
      }
      return count;
    }
  
    // Method to search for a node with a specific value
    search(value) {
      let current = this.head;
      let index = 0;
  
      while (current) {
        if (current.value === value) {
          return index; // Return the index of the node if found
        }
        current = current.next; // Move to the next node
        index++;
      }
  
      return -1; // Return -1 if the value is not found
    }
  
    // Method to get the node at a specific index
    getNthNode(index) {
      if (index < 0) {
        return null; // If the index is negative, return null
      }
  
      let current = this.head;
      let count = 0;
  
      while (current) {
        if (count === index) {
          return current; // Return the node at the specified index
        }
        current = current.next; // Move to the next node
        count++;
      }
  
      return null; // If the index is out of bounds, return null
    }
  
    // Method to check if the list is empty
    isEmpty() {
      return this.head === null; // Return true if the head is null, indicating an empty list
    }
  
    // Method to reverse the order of the nodes in the list
    reverse() {
      let prev = null;
      let current = this.head;
      let next = null;
  
      while (current) {
        next = current.next; // Store the next node
        current.next = prev; // Reverse the next pointer
        prev = current; // Move the previous pointer
        current = next; // Move the current pointer
      }
  
      this.head = prev; // Update the head to the last node
    }
  
    // Method to convert the linked list to an array
    toArray() {
      const array = [];
      let current = this.head;
  
      while (current) {
        array.push(current.value); // Add the value of the current node to the array
        current = current.next; // Move to the next node
      }
  
      return array;
    }
  }
  

  module.exports = SinglyLinkedList;
