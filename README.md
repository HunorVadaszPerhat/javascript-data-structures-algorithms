# javascript-data-structures-algorithms

### Singly Linked List

- Insertion:
  - insertAtHead(value): Inserts a new node with the given value at the beginning of the list.
  - insertAtTail(value): Inserts a new node with the given value at the end of the list.
  - insertAfter(value, afterValue): Inserts a new node with the given value after the node containing afterValue.
  - insertBefore(value, beforeValue): Inserts a new node with the given value before the node containing beforeValue.

- Deletion:
  - deleteAtHead(): Deletes the first node in the list.
  - deleteAtTail(): Deletes the last node in the list.
  - deleteWithValue(value): Deletes the node containing the specified value.
  - deleteAtIndex(index): Deletes the node at the specified index.

- Traversal:
  - printList(): Prints the values of all nodes in the list.
  - getLength(): Returns the number of nodes in the list.

- Searching:
  - search(value): Searches for the node containing the specified value and returns its position or a boolean indicating its existence.
  - getNthNode(index): Returns the node at the specified index.

- Other Operations:
  - isEmpty(): Checks if the list is empty.
  - reverse(): Reverses the order of the nodes in the list.
  - toArray(): Converts the linked list to an array.

### Doubly linked list

- Insertion:
  - insertAtHead(value): Inserts a new node with the given value at the beginning of the list.
  - insertAtTail(value): Inserts a new node with the given value at the end of the list.
  - insertAfter(value, afterValue): Inserts a new node with the given value after the node containing afterValue.
  - insertBefore(value, beforeValue): Inserts a new node with the given value before the node containing beforeValue.

- Deletion:
  - deleteAtHead(): Deletes the first node in the list.
  - deleteAtTail(): Deletes the last node in the list.
  - deleteWithValue(value): Deletes the node containing the specified value.
  - deleteAtIndex(index): Deletes the node at the specified index.

- Traversal:
  - printForward(): Prints the values of all nodes in the list from head to tail.
   -printBackward(): Prints the values of all nodes in the list from tail to head.

- Searching:
  - search(value): Searches for the node containing the specified value and returns its position or a boolean indicating its existence.
  - getNthNode(index): Returns the node at the specified index.

- Other Operations:
  - isEmpty(): Checks if the list is empty.
  - getLength(): Returns the number of nodes in the list.
  - reverse(): Reverses the order of the nodes in the list.
  - toArrayForward(): Converts the doubly linked list to an array in forward order.
  - toArrayBackward(): Converts the doubly linked list to an array in backward order.

### Stack 
- implemented in Array, Linked List and Object
- operations:
  - push(item): Adds an item to the top of the stack.
  - pop(): Removes and returns the item at the top of the stack.
  - peek(): Returns the item at the top of the stack without removing it.
  - isEmpty(): Checks if the stack is empty or not.
  - size(): Returns the number of items currently in the stack.
  - clear(): Removes all items from the stack, making it empty.
