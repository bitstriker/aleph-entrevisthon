
class Node {
  constructor(element)
  {
    this.element = element;
    this.next = null
  }
}
class List { 
  constructor() 
  { 
    this.head = null; 
    this.size = 0; 
    this.value = 1;
    this.length = 0;
  }
  add(element)
  {
    var node = new Node(element); 
    var current; 
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head; 
      while (current.next) { 
        current = current.next; 
      }
      current.next = node; 
    }
    this.size++;
    this.length++;
  } 
}
class Element {
  constructor()
  {
    this.next = null;
  }
}

module.exports.List = List;  
module.exports.Element = Element;