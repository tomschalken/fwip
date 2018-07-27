const fwip = (function() {
  "use strict";

  const init = function(elements) {
    const elems = elements || false;

    if (!elems) {
      return;
    }

    let elementArray = elementsToArray(elems);
    let childrenArray = whiteVanWithCandyInside(elementArray);

    childrenArray.forEach(function(childObject) {
      childObject.childElement.addEventListener("focus", function() {
        childObject.parentElement.classList.add("focus-within");
      });

      childObject.childElement.addEventListener("blur", function() {
        childObject.parentElement.classList.remove("focus-within");
      });
    });
  };

  // utils
  const elementsToArray = function(elems) {
    let array = [];
    if (elems[0] == undefined) {
      // single element
      array.push(elems);
    } else {
      [].forEach.call(elems, function(elem) {
        array.push(elem);
      });
    }
    return array;
  };

  const whiteVanWithCandyInside = function(parents) {
    // gets all the children
    let children = [];

    parents.forEach(function(parent) {
      elementsToArray(parent.getElementsByTagName("*")).forEach(function(
        child
      ) {
        children.push({
          childElement: child,
          parentElement: parent
        });
      });
    });

    return children;
  };

  return {
    init: init
  };
})();