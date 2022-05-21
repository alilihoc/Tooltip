import React, {useRef, useState} from "react";
import "./Tooltip.css";

const Tooltip = (props) => {
  let timeout;
  const tooltipRef = useRef();
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState(null);

  const showTip = (el) => {
    timeout = setTimeout(() => {
      setVisible(true)
      showPositioned(el);
    }, props.delay || 500);
  };

  const showPositioned = (el) => {
    let elem = el.currentTarget;
    let hoverRect = elem.getBoundingClientRect();

    if (tooltipRef.current) {
      const docWidth = document.documentElement.clientWidth;
      const docHeight = document.documentElement.clientHeight;

      let mostRightX = hoverRect.x + hoverRect.width;
      let mostLeftX = hoverRect.x;
      let rightY = hoverRect.y;
      let bottomY = hoverRect.y + hoverRect.height;

      let tooltipWidth = tooltipRef.current.clientWidth;
      let tooltipHeight = tooltipRef.current.clientHeight;

      let allowRight = (mostRightX + tooltipWidth) <= (window.scrollX + docWidth);
      let allowLeft = (mostLeftX - tooltipWidth) >= 0;

      let allowTop = (rightY - tooltipHeight) >= 0;
      let allowBottom = (bottomY + tooltipHeight) <= (window.scrollY + docHeight);

      let newPosition = null

      if (allowRight) {
        newPosition = "right";
      } else if (allowBottom) {
        newPosition = "bottom";
      } else if (allowLeft) {
        newPosition = "left";
      } else if (allowTop) {
        newPosition = "top";
      }
      setPosition(newPosition);
    }
  }

  const hideTip = () => {
    clearInterval(timeout);
    setVisible(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {props.children}
      <div
        className={`Tooltip-Tip ${visible ? 'visible' : 'visibility_hidden'} ${position}`}
        ref={tooltipRef}
      >
        {props.content}
      </div>
    </div>
  );
};

export default Tooltip;
