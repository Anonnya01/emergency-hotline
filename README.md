# Emergency Hotline
The project is about a webpage where all the emergrncy hotline numbers are available.

## 1.Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
### getElementById
1.getElementById is designed to retrieve a single, unique element based on its id attribute.
2.Specific id is called with getElementById.
3.Can be directly manipulate with the returned object.

### getElementsByClassName
1.getElementsByClass is designed to retrieve a single or many element based on its class attribute.
2.Specific class or multiple class is called with getElementsByClass.
3.Unlike getElementById the getElementsByClassName can have similar characteristics.
4.Useful when manipulating similar tags.

### querySelector / querySelectorAll
The biggest advantage of these two methods is that they use CSS selectors to find elements.
For id (#) is used and for class (.) is used.

#### querySelectorAll:
returns a NodeList similar to getElementsByClassName.

## 2.Creating and inserting a new element into the DOM

 At first create the element in memory using JavaScript. At this point, it exists as an object but is not yet part of the visible page.
 In this webpage I used the create and inserting a new element to create a (div) to show the call history.
 Using createElement() a new element is created and by using append() one can insert the element.


 ## 3.Event Bubbling 

  Event Bubbling is the process where an event triggered on a specific element first runs on that element and then travels, or bubbles up, to each of its ancestors in the DOM tree, triggering their event listeners along the way.
  It can go to all the childNodes.This bubbling behavior allows you to set a single event listener on a parent element to handle events from all of its children, a technique which is also known as event delegation.

  ##  4.Event Delegation
  Event Delegation is a JavaScript technique where instead of attaching an event listener to every single child element, you attach a single listener to their common parent element.

  Combining with Traverse method the js functioning became easier and the code was cleaner.Array looping is
  not necessary in this way.Its a more efficient way.

  1.Improved Performance and Memory Efficiency.Also easier to maintain multiple similar actions.
  2.The code becomes more cleaner and easy to understand.
  3.Handles dynamically added elements.

  ## 5.difference between preventDefault() and stopPropagation()


  ####  preventDefault()
  Stops the browser's default behavior.
  Let an event happen, but prevent the default outcome.


  #### stopPropagation()
  Stops event bubbling or capturing
  Stops the event from moving to other elements.