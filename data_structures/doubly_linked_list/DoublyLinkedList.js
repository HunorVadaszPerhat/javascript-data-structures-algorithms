// Define the Node class to represent a single node in the doubly linked list
class Node {
    constructor(value) {
      this.value = value; // Store the value of the node
      this.prev = null; // Reference to the previous node, initially set to null
      this.next = null; // Reference to the next node, initially set to null
    }
  }
  
  // Define the DoublyLinkedList class
  class DoublyLinkedList {
    constructor() {
      this.head = null; // Reference to the first node, initially set to null
      this.tail = null; // Reference to the last node, initially set to null
    }
  
    // Method to insert a new node at the head of the list
    insertAtHead(value) {
      const newNode = new Node(value); // Create a new node with the given value
  
      if (!this.head) {
        // If the list is empty, make the new node both the head and the tail
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head; // Set the next pointer of the new node to the current head
        this.head.prev = newNode; // Set the prev pointer of the current head to the new node
        this.head = newNode; // Update the head to point to the new node
      }
    }
  
    // Method to insert a new node at the tail of the list
    insertAtTail(value) {
      const newNode = new Node(value); // Create a new node with the given value
  
      if (!this.tail) {
        // If the list is empty, make the new node both the head and the tail
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail; // Set the prev pointer of the new node to the current tail
        this.tail.next = newNode; // Set the next pointer of the current tail to the new node
        this.tail = newNode; // Update the tail to point to the new node
      }
    }
  
    // Method to insert a new node after a node with a specific value
    insertAfter(value, afterValue) {
      const newNode = new Node(value); // Create a new node with the given value
  
      let current = this.head;
      while (current) {
        if (current.value === afterValue) {
          // Find the node with the specified value
          newNode.prev = current; // Set the prev pointer of the new node to the current node
          newNode.next = current.next; // Set the next pointer of the new node to the next node
          if (current.next) {
            current.next.prev = newNode; // Set the prev pointer of the next node to the new node
          } else {
            this.tail = newNode; // If the current node is the tail, update the tail to point to the new node
          }
          current.next = newNode; // Set the next pointer of the current node to the new node
          break;
        }
        current = current.next; // Move to the next node
      }
    }
  
    // Method to insert a new node before a node with a specific value
    insertBefore(value, beforeValue) {
      const newNode = new Node(value); // Create a new node with the given value
  
      let current = this.head;
      while (current) {
        if (current.value === beforeValue) {
          // Find the node with the specified value
          newNode.prev = current.prev; // Set the prev pointer of the new node to the prev node
          newNode.next = current; // Set the next pointer of the new node to the current node
          if (current.prev) {
            current.prev.next = newNode; // Set the next pointer of the prev node to the new node
          } else {
            this.head = newNode; // If the current node is the head, update the head to point to the new node
          }
          current.prev = newNode; // Set the prev pointer of the current node to the new node
          break;
        }
        current = current.next; // Move to the next node
      }
    }
  
    // Method to delete the node at the head of the list
    deleteAtHead() {
      if (this.head) {
        this.head = this.head.next; // Update the head to the next node
        if (this.head) {
          this.head.prev = null; // Set the prev pointer of the new head to null
        } else {
          this.tail = null; // If the list becomes empty, update the tail to null
        }
      }
    }
  
    // Method to delete the node at the tail of the list
    deleteAtTail() {
      if (this.tail) {
        this.tail = this.tail.prev; // Update the tail to the previous node
        if (this.tail) {
          this.tail.next = null; // Set the next pointer of the new tail to null
        } else {
          this.head = null; // If the list becomes empty, update the head to null
        }
      }
    }
  
    // Method to delete the node with a specific value
    deleteWithValue(value) {
      let current = this.head;
      while (current) {
        if (current.value === value) {
          // Find the node with the specified value
          if (current.prev) {
            current.prev.next = current.next; // Set the next pointer of the prev node to the next node
          } else {
            this.head = current.next; // If the current node is the head, update the head to the next node
          }
          if (current.next) {
            current.next.prev = current.prev; // Set the prev pointer of the next node to the prev node
          } else {
            this.tail = current.prev; // If the current node is the tail, update the tail to the prev node
          }
          break;
        }
        current = current.next; // Move to the next node
      }
    }
  
    // Method to print the values of all nodes in the list from head to tail
    printForward() {
      let current = this.head;
      while (current) {
        console.log(current.value); // Print the value of the current node
        current = current.next; // Move to the next node
      }
    }
  
    // Method to print the values of all nodes in the list from tail to head
    printBackward() {
      let current = this.tail;
      while (current) {
        console.log(current.value); // Print the value of the current node
        current = current.prev; // Move to the previous node
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
      let current = this.head;
      while (current) {
        // Swap the prev and next pointers of the current node
        const temp = current.prev;
        current.prev = current.next;
        current.next = temp;
  
        if (!current.prev) {
          // If the prev pointer is null, update the head to the current node
          this.head = current;
        }
  
        current = current.prev; // Move to the next node (previously the prev node)
      }
    }
  
    // Method to convert the doubly linked list to an array in forward order
    toArrayForward() {
      const array = [];
      let current = this.head;
      while (current) {
        array.push(current.value); // Add the value of the current node to the array
        current = current.next; // Move to the next node
      }
      return array;
    }
  
    // Method to convert the doubly linked list to an array in backward order
    toArrayBackward() {
      const array = [];
      let current = this.tail;
      while (current) {
        array.push(current.value); // Add the value of the current node to the array
        current = current.prev; // Move to the previous node
      }
      return array;
    }

    // Method to display the values of all nodes in the list
    display() {
        let current = this.head;
        while (current) {
        console.log(current.value); // Print the value of the current node
        current = current.next; // Move to the next node
        }
    }
  }
  
  module.exports = DoublyLinkedList;
