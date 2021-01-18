import React from 'react';

const options = [
  { value: 0, label: '100 мл' },
  { value: 1, label: '200 мл' },
  { value: 2, label: '300 мл' },
];

const Checkbox = ({ setSize, size }) => {
  const handleOnClick = (item) => {
    setSize(item);
  };

  return (
    <div className="checkbox">
      {options.map((a, key) => (
        <div onClick={() => handleOnClick(a.value)} className="checkbox-wrap">
          <div className="checkbox-checked">{size == a.value ? <div></div> : <span></span>}</div>
          <div className="checkbox-value">
            <span>{a.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
