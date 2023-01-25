import { createPortal } from "react-dom";
import { useLayoutEffect, useState } from "react";
import { createWrapperAndAppendToBody } from "../../helper/createWrapperAndAppendToBody";

function ReactProtal({ children, wrapperId = "react-portal-wrapper" }) {

  const [ wrapperElement, setWrapperElement] = useState(null);

  useLayoutEffect(() => {
    let systemCreated = false;
    let element = document.getElementById(wrapperId);
    if(!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      if(systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    }
  },[wrapperId])

  if(wrapperElement === null) return null;
  return createPortal(children, wrapperElement);
}

export default ReactProtal;