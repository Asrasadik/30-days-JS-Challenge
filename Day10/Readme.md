### difference between keyup and key down
### Form Handling
- new FormData(this):
  - The new FormData(this) statement creates a new FormData object, which is a representation of the     
    form's data.Here, this refers to the form element that triggered the submit event. The FormData constructor extracts all the name/value pairs from the form and stores them in the FormData object
  - The keys are the names of the form fields, and the values are their corresponding input values.

- Ensure that the this context within the event listener refers to the form element.
- why eventlistener callback written in arrow this points to window but anonymous function points to form element ?
  - Arrow Functions: Inherit this from the lexical context. Use them when you need this to refer to the surrounding context.
  - Anonymous Functions (Traditional Functions): Have their own this context. Use them when you need this to refer to the element that the event listener is attached to.
  - In the context of event listeners, using traditional anonymous functions is generally preferred if you need this to refer to the element that triggered the event.
### Event Delegation 
- Event delegation is a technique in JavaScript where you add a single event listener to a parent element instead of adding multiple event listeners to individual child elements. This technique leverages the event bubbling phase of the DOM event flow to handle events more efficiently and simplify the management of event listeners.

- How Event Delegation Works
  - Event Bubbling: When an event is triggered on an element, it first runs the handlers on the target element, then on its parent, then on its parent’s parent, and so on, up to the root of the document. This is known as event bubbling.

  - Single Event Listener: By adding a single event listener to a common parent element, you can manage events for multiple child elements. The event listener on the parent element can detect which child element triggered the event and handle it accordingly.
- what if I do event.target.value instead of   event.target.textContent?
- Using event.target.value instead of event.target.textContent in the context of a click event on a list item (li) will not work as expected because li elements do not have a value property. The value property is typically used with form elements like input, select, and textarea.
- Event delegation is useful here because it allows you to handle clicks on any list item without needing to attach individual event listeners to each li element. This is more efficient and easier to manage, especially if the list items are dynamically added or removed.
- 
