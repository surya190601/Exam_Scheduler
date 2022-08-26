import React from "react";

const TextComponent = (props) => {
  const { label, className, children } = props;
  return (
    <div className={className}>
      {label}
      {children}
    </div>
  );
};

export default TextComponent;
