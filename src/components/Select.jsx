import React from 'react';
import { useState } from 'react';
import Arrow from './../assets/img/arrow.svg';

const options = [
  { value: 'yellow', label: 'Желтый' },
  { value: 'red', label: 'Красный' },
  { value: 'green', label: 'Зеленый' },
  { value: 'yellow', label: 'Желтый' },
  { value: 'red', label: 'Красный' },
  { value: 'green', label: 'Зеленый' },
];
const Select = () => {
  const [selectedOption, setSelectedOption] = useState('Цвет');
  const [openFlag, setOpenFlag] = useState(false);

  const handleOnClick = (item) => {
    setSelectedOption(item);
    setOpenFlag(false);
  };

  return (
    <div
      onMouseOver={() => setOpenFlag(true)}
      onMouseLeave={() => setOpenFlag(false)}
      className="select">
      <div className="select-control">
        <div className="select-control-value select-text">{selectedOption}</div>
        <div className="select-control-arrow">
          {!openFlag ? <img src={Arrow} /> : <img src={Arrow} className="open" />}
        </div>
      </div>
      {openFlag && (
        <div className="select-menu">
          {options.map((a, key) => (
            <div
              onClick={() => handleOnClick(a.label)}
              className="option select-text"
              key={a.value}>
              {a.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
