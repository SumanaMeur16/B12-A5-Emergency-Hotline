1. **What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**
-> The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll are:
getElementById - It selects a single element based on it's unique id attribute. Also. it returns a single DOM element.
getElementsByClassName - It selects all the elements that have a specific class attribute. Also, it returns a live HTML Collection like an array which show the new updates if the DOM was changed.
querySelector - It selects the 1st element that matches with the specific css selectors. Also, it returns a single DOM element. 
querySelectorAll - It selects all the elements that matches with the specific css selectors. it returns a Nodelist of elements which doesn't show the new updates if the DOM was changed.

2. **How do you create and insert a new element into the DOM?**
-> First, need to create a new element with .createElement(which element need to create("div",/ "li"/ "p"/ "h2" and more)) - document.createElement()
Secondly - need to append it to an existing DOM Element with .appendChild(), it adds as a last child of the parent node.

3. **What is Event Bubbling and how does it work?**
-> It is a technique that triggered an event directly to the specific child element where the event was attached and then move up to the parent elements until reaches to root of the DOM.                                                                                                                  When click on a button, event bubbling will start from the child element and move to the parent.

4. **What is Event Delegation in JavaScript? Why is it useful?**
-> It is a technique that handles events for multiple child elements of a parent element with a single event listener.
It is more efficient to handle events with a single event listener attached to a parent element than multiple event listeners to individual child elements of a parent element.

5. **What is the difference between preventDefault() and stopPropagation() methods?**
-> preventDefault() - It used to stop when performing the default action of a HTML Element.
stopPropagation() - It used to stop the propagation of an event in the capturing or bubbling phase.