import React, { useState, ReactNode } from "react";
import "./ExpandingDebtRectangleList.css";

interface Item {
  label: string;
  content: ReactNode; // React component or JSX
}

interface ExpandingDebtRectangleListProps {
  items: Item[]; // Array of items containing label and content
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
          {expandedIndex !== index && <div className="rectangle-label">
            {item.label}
          </div>}
          <div className="rectangle-content">
            {expandedIndex === index && <div className="graph-1">
              {item.content}
            </div>}

            {expandedIndex === index && <div className="graph-2">
              {item.content}
            </div>}
          </div>

            

        </div>
      ))}
    </div>
  );
};

export default ExpandingDebtRectangleList;
