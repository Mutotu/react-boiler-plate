import React, { useState } from 'react';
import Display from './Form';

const Form = (props) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    <Display seachTerm={input} />;
    // console.log(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder=""
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default Form;
