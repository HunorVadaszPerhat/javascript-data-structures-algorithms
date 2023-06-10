# javascript-data-structures-algorithms

### Single Linked List

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
