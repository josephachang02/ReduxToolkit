import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateString } from '../../redux/slices/string';

const StringChanger = () => {
  const currentString = useSelector((state) => state.string);
  const dispatch = useDispatch();
  const [newString, setNewString] = useState('');

  const handleStringChange = () => {
    dispatch(updateString(newString));
    setNewString('');
  };

  return (
    <div>
      <h2>Current String: {currentString}</h2>
      <input
        type="text"
        placeholder="Enter new string"
        value={newString}
        onChange={(e) => setNewString(e.target.value)}
      />
      <button onClick={handleStringChange}>Change String</button>
    </div>
  );
};

export default StringChanger;