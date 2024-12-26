import React from "react";
import { useSelector } from "react-redux";

const ExpandableLineSvg = () => {
  const isExpanded = useSelector(
    (store) => store.shipmentView.isDetailsExpanded
  );
  return (
    <div style={{ textAlign: "center" }}>
      <svg
        width="20"
        height={isExpanded ? "120" : "50"}
        style={{ transition: "height 0.5s ease-out" }}
      >
        {/* Top Dot */}
        <circle
          cx="10"
          cy="10"
          r="4"
          fill="#ffffff"
          stroke="#515151"
          strokeWidth="1"
        />
        {/* Line */}
        <line
          x1="10"
          y1="15"
          x2="10"
          y2={isExpanded ? "114" : "35"}
          stroke="#0076DD"
          strokeWidth="2"
          style={{ transition: "y2 0.5s ease-out" }}
        />
        {/* Bottom Dot */}

        <circle
          cx="10"
          cy={isExpanded ? "110" : "40"}
          r="4"
          fill="#ffffff"
          stroke="#515151"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default ExpandableLineSvg;
