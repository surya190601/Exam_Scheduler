import React from "react";
import TextComponent from "./TextComponent";
import '../Styles/index.css'
const CreateButton = (props) => {
  const { type, isCreate = false, className, label } = props;
  return (
    <div>
      <button type={type} className= 'create-button'>
        <TextComponent className='create-button-text' label="+   Create New" />
      </button>
    </div>
  );
};

export default CreateButton;
