//class for creating a node
class Node {
	constructor(value, nextNode){
  	this.value = value
		this.nextNode = null
		}
}

//class for functionality of list
class LinkedList {
	constructor(headNode) {
		this.HEAD = headNode
		this.HEAD.nextNode = null
	}
	
	//add new node to end of the list
	append(value) {
		let newNode = new Node(value)
		let head = this.HEAD
		
		while(head.nextNode !== null) {
			head = head.nextNode
		}
		head.nextNode = newNode
	}

	//add new node to the start of the list
	prepend(value) {
		let newHeadNode = new Node(value);
		
		newHeadNode.nextNode = this.HEAD;
		this.HEAD = newHeadNode;
	}
	
	//return size of the linked list
	size() {
		let count = 0
		let head = this.HEAD
		
		while(head !== null) {
			head = head.nextNode
			count++
		}
		return count
	}
	
	//return head of the list
	head() {
		return this.HEAD.value
	}
	
	//return tail of the list
	tail() {
		let head = this.HEAD
		
		while(head.nextNode !== null) {
			head = head.nextNode
		}
		return head.value
	}
	
	//find node at a specific index
	at(index) {
		let head = this.HEAD
		let count = 0
		
		while(head !== null) { 
			if(count == index) {
				return head.value
			}
			count++
			head = head.nextNode
		}
	}
	
	//remove node from the end of the list
	pop() {
		let head = this.HEAD
	
		while(head.nextNode.nextNode != null) {
			head = head.nextNode
		}
		head.nextNode = null
	}
	
	contains(value) {
		let head = this.HEAD
		
		while(head !== null) {
			if(head.value == value) {
				return true
			} 
			head = head.nextNode
		}
		return false //if value not found return false
	}
	
	find(value) {
		let head = this.HEAD
		let index = 0
		
		while(head !== null) {
			if(head.value == value) {
				return index
			}
			index++
			head = head.nextNode
		}
		return null
	}
	
	toString() {
		let head = this.HEAD
		let string = ""
		
		while(head !== null) {
			string += `[${head.value}] -> `
			head = head.nextNode
		}
		string += `null`
		return string
	}
	
	insertAt(value, index) {
		let head = this.HEAD
		let newNode = new Node(value)
		let count = 1
		let tempNextNode
		
		if(index == 0) {
			newNode.nextNode = head
			head = newNode 
			return
		}
		
		while(head != null) {
			if(count == index) {
				tempNextNode = head.nextNode
				head.nextNode = newNode
				newNode.nextNode = tempNextNode
				return
			}
			count++
			head = head.nextNode
		}
	}
}

export {Node, LinkedList}

