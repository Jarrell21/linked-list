const Node = (value) => {
    const nextNode = null;
    return { value, nextNode}
}

const LinkedList = () => {
    let HEAD = null;
    let length = 0;
    // adds a new node containing value to the end of the list
    const append = (value) => {
        const newNode = Node(value);
        length++;
        if(HEAD === null) return (HEAD = newNode);

        let currentNode = HEAD;
        while(currentNode.nextNode !== null){
            currentNode = currentNode.nextNode
        }

        currentNode.nextNode = newNode;
    }

    // adds a new node containing value to the start of the list
    const prepend = (value) => {
        const newNode = Node(value);
        length++;
        if(HEAD === null) return (HEAD = newNode);

        newNode.nextNode = HEAD;
        HEAD = newNode;
    }

    // returns the total number of nodes in the list
    const size = () =>{
        if(HEAD === null) return 0;
        return length;
    }

    // returns the first node in the list
    const head = () => {
        if(HEAD === null) return null;
        return HEAD.value;
    }

    // returns the last node in the list
    const tail = () => {
        if(HEAD === null) return null;
        if(HEAD.nextNode === null) return HEAD.value;

        let currentNode = HEAD;
        while(currentNode.nextNode !== null){
            currentNode = currentNode.nextNode
        }

        return currentNode.value;
    }

    // returns the node at the given index
    const atIndex = (index) => {
        if(HEAD === null) return null;
        if(index+1 > length) return null;
        if(index === 0) return HEAD.value;

        let currentNode = HEAD;
        let i = 0;
        while(currentNode.nextNode !== null){
            currentNode = currentNode.nextNode;
            i++;
            if(index === i) return currentNode.value;
        }
    }

    // removes the last element from the list
    const pop = () => {
        if(HEAD === null) return null;
        if(HEAD.nextNode === null) return (HEAD = null);

        let currentNode = HEAD;
        let previousNode = null;
        while(currentNode.nextNode !== null){
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
            if(currentNode.nextNode === null){
                length--;
                return (previousNode.nextNode = null);
            }
        }
        
    }

    // returns true if the passed in value is in the list and otherwise returns false.
    const contains = (value) => {
        if(HEAD === null) return null;
        if(HEAD.value === value) return true;

        let currentNode = HEAD;
        while(currentNode.nextNode !== null){
            currentNode = currentNode.nextNode;
            if(currentNode.value === value) return true;
        }

        return false;
    }

    // returns the index of the node containing value, or null if not found.
    const find = (value) => {
        if(HEAD === null) return null;
        if(HEAD.value === value) return 0;

        let currentNode = HEAD;
        let index =  0;
        while(currentNode.nextNode !== null){
            currentNode = currentNode.nextNode;
            index++
            if(currentNode.value === value) return index;
        }
    }

    // represents your LinkedList objects as strings, so you can print them out and preview them in the console
    const toString = () => {
        if(HEAD === null) return null;
        
        let currentNode = HEAD;
        let string = `(${currentNode.value}) --> `;
        if(currentNode.nextNode === null) {
            string = `(${currentNode.value}) --> null`;
        }

        while(currentNode.nextNode !== null){
            currentNode = currentNode.nextNode;
            if(currentNode.nextNode === null) return string += `(${currentNode.value}) --> null`;
            string += `(${currentNode.value}) --> `
        }

        return string;
    }

    const insertAt = (value, index) => {
        if(HEAD === null && index > 0) return null;

        const newNode = Node(value);
        let currentNode = HEAD;
        let previousNode = null;
        let indexCount = 0;
        length++

        // if inserted at first when list is empty
        if(HEAD === null && index === indexCount) return (HEAD = newNode);

        // if inserted at first when list is not empty
        if(index === indexCount){
            newNode.nextNode = HEAD;
            HEAD = newNode;
            return;
        }

        while (currentNode.nextNode !== null) {
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
            indexCount++;
            if(index === indexCount){
                previousNode.nextNode = newNode;
                newNode.nextNode = currentNode;
                return;
            }

        }

        // if inserted at last
        if(index === indexCount+1){
            currentNode.nextNode = newNode;
        }
    };

    const removeAt = (index) => {
        if(HEAD === null) return null;

        let currentNode = HEAD;
        let previousNode = null;
        let indexCount = 0;

        if(HEAD.nextNode === null && index === indexCount) return (HEAD = null);

        if(index === indexCount){
            HEAD = HEAD.nextNode;
        }

        while (currentNode.nextNode !== null) {
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
            indexCount++;
            if(index === indexCount){
                previousNode.nextNode = currentNode.nextNode; 
            }
        }
    }

    return {
        append,
        prepend,
        size,
        head,
        tail,
        atIndex,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt
    }
}

// Driver code
const myList = LinkedList();
const sampleList = [1, 3, 5, 7, 9];

sampleList.forEach((element) => {
    myList.append(element);
})

myList.prepend(0)
myList.pop()
console.log(myList.toString());
console.log('Head of the list: ', myList.head());
console.log('Tail of the list: ', myList.tail());
console.log('list size: ',myList.size());
console.log('This is the value at index 3: ', myList.atIndex(3));
console.log('The list contains "3": ', myList.contains(3));