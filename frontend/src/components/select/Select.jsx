import React, { useId } from "react";
import "./select.css";
const Select = ({ options = [], label, className, ...props }, ref) => {
  const id = useId();
  return (
    <div className="select_container">
      {label && <label htmlFor={id} className="select_label"></label>}
      <select id={id} ref={ref} className="select_box" {...props}>
        {options &&
          options.map((option) => (
            <option key={option} value={option}>
              {" "}
              {option}{" "}
            </option>
          ))}
      </select>
    </div>
  );
};

export default React.forwardRef(Select); //second way
