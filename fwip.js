const fwip = (function() {
  "use strict";

  const init = function(elements) {
    const elems = elements || false;

    if (!elems) {
      return;
    }

    const childObjectsArray = getChildObjects(elems);

    childObjectsArray.forEach(function(childObject) {
      const child = childObject.childElement;
      const parent = childObject.parentElement;
      child.addEventListener("focus", function() {
        parent.classList.add("focus-within");
      });

      child.addEventListener("blur", function() {
        parent.classList.remove("focus-within");
      });
    });
  };

  // utils
  getChildObjects(elems) {
    const parentElementsArray = elementArray(elems);
    let childObjects = [];

    parentElementsArray.forEach(function(parent) {
      elementsToArray(parent.getElementsByTagName("*"))
      .forEach(function(child) {
        childObjects.push({
          childElement: child,
          parentElement: parent
        });
      });
    });

    return childObjects;
  }

  const elementsToArray = function(elems) {
    let elementArray = [];
    if (elems[0] == undefined) {
      // single element
      elementArray.push(elems);
    } else {
      [].forEach.call(elems, function(elem) {
        elementArray.push(elem);
      });
    }
    return elementArray;
  };

  return {
    init: init
  };
})();
