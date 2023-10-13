import React from 'react';


function FormRow({type, value, name, getLabel, onChange}) {
  return (
    <div className="form-row">
      <label htmlFor="name" className="form-label">{getLabel(name)}</label>
      <input type={type} name={name} value={value} className="form-input" onChange={onChange}></input>
    </div>
  );
}


export default FormRow;
