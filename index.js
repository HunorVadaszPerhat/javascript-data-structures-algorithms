const SinglyLinkedList = require('./data_structures/singly_linked_list/SinglyLinkedList');
const DoublyLinkedList = require('./data_structures/doubly_linked_list/DoublyLinkedList');

// Create a new linked list
const list = new SinglyLinkedList();

// Perform operations on the list
//list.insertAtTail(5);
//list.insertAtTail(6);
//list.insertAtTail(9);
//list.printList();

// Create a new doubly linked list
const doublyList = new DoublyLinkedList();  

// Perform operations on the doubly linked list
doublyList.insertAtTail(5);
doublyList.insertAtTail(6);
doublyList.insertAtTail(9);
doublyList.display();