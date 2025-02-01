import React, { useState } from "react";
import "./ExpandingDebtRectangleList.css";


interface ExpandingDebtRectangleListProps {
  items: string[]; // Array of string items
}

const ExpandingDebtRectangleList: React.FC<ExpandingDebtRectangleListProps> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="rectangle-list">
      {items.map((item, index) => (
        <div
          key={index}
          className={`rectangle ${expandedIndex === index ? "expanded" : ""}`}
          onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default ExpandingDebtRectangleList;
