import React, { useId } from "react";
import "./input.css";
const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="input_container">
      {label && (
        <label className="input_label" htmlFor={id}>
          {label}
        </label>
      )}
      <input type={type} className="input_box" ref={ref} {...props} id={id} />

    </div>
  );
});

export default Input;
