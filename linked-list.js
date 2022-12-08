const Node = (value = null) => {
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

        let pointer = HEAD;
        while(pointer.nextNode !== null){
            pointer = pointer.nextNode
        }

        pointer.nextNode = newNode;
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

        let pointer = HEAD;
        while(pointer.nextNode !== null){
            pointer = pointer.nextNode
        }

        return pointer.value;
    }

    // returns the node at the given index
    const atIndex = (index) => {
        if(HEAD === null) return null;
        if(index > (length+1)) return null;

        let pointer = HEAD;
        let i = 0;
        while(pointer.nextNode !== null){
            pointer = pointer.nextNode;
            i++;
            if(index === i) return pointer;
        }
    }

    // removes the last element from the list
    const pop = () => {
        if(HEAD === null) return null;
        if(HEAD.nextNode === null) return (HEAD = null);

        let pointer = HEAD;
        pointer = pointer.nextNode;
        
    }

    // returns true if the passed in value is in the list and otherwise returns false.
    const contains = (value) => {}

    // returns the index of the node containing value, or null if not found.
    const find = (value) => {}

    // represents your LinkedList objects as strings, so you can print them out and preview them in the console
    const toString = () => {}

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
    }
}