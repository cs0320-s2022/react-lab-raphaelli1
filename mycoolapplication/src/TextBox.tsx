import React from 'react';

function TextBox(props: any) {
  return (
    <div className="TextBox">
        <label htmlFor={props.label}> </label>
        <input type='text' onChange={(event) => props.change(event.target.value)}/>
    </div>
  );
}
export default TextBox;