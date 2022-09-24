import { Node, LinkedList } from "./linked-list";

let HEAD = new Node(1); //this will be the head node
const newList = new LinkedList(HEAD);

describe('linked list methods', () => {
    it('append(value) adds new nodes to the end of the list', () => {
        newList.append(2);
        expect(newList.tail()).toBe(2);
    });

    it('append 3 to the end of the list', () => {
        newList.append(3);
        expect(newList.tail()).toBe(3);
    });

    it('append 4 to the end of the list', () => {
        newList.append(4);
        expect(newList.tail()).toBe(4);
    });

    it('append 5 to the end of the list', () => {
        newList.append(5);
        expect(newList.tail()).toBe(5);
    });

    it('prepend(value) adds new node to the head of the linked list', () => {
        newList.prepend(`I am the new HEAD`);
        expect(newList.head()).toBe(`I am the new HEAD`);
    });

    it('size() displays the size of the linked list', () => {
        newList.size();
        expect(newList.size()).toBe(6);
    });

    it('at(index) returns the node at a specific index', () => {
        newList.at(2);
        expect(newList.at(2)).toBe(2);
    });

    it('pop() removes a node from the end of the list', () => {
        newList.pop();
        expect(newList.tail()).toBe(4);
    });

    it('contains() tells you whether a node exists in the list', () => {
        newList.contains(3);
        expect(newList.contains(3)).toBeTruthy();
    });

    it('contains() recheck', () => {
        newList.contains(8);
        expect(newList.contains(8)).toBeFalsy();
    }); 

    it('find(value) returns the index of a certain value', () => {
        newList.find(`I am the new HEAD`);
        expect(newList.find(`I am the new HEAD`)).toBe(0);
    });

    it('toString() displays all the nodes in the linked list as a continuous string', () => {
        newList.toString();
        expect(newList.toString()).toBe('[I am the new HEAD] -> [1] -> [2] -> [3] -> [4] -> null');
    });

    it('insertAt(value, index) inserts a new node at a specific index', () => {
        newList.insertAt(1.5, 2);
        expect(newList.toString()).toBe('[I am the new HEAD] -> [1] -> [1.5] -> [2] -> [3] -> [4] -> null');
    });
});