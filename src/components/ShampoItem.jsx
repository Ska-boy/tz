import Select from './../components/Select';
import Checkbox from './../components/Checkbox';
import React, { useState, useEffect } from 'react';
import vector from './../assets/img/Vector.svg';
import vectorComplite from './../assets/img/VectorComplite.svg';

const ShampoItem = ({ images }) => {
  const [count, setCount] = useState(1);
  const addCount = () => {
    setCount(count + 1);
  };
  const removeCount = () => {
    if (count > 1) setCount(count - 1);
  };

  const [size, setSize] = useState(0);

  const startPrice = 200;
  const [price, setPrice] = useState(startPrice);

  useEffect(() => {
    setPrice(startPrice * (size + 1) * count);
  }, [count, size]);

  const [equalBtn, setEqualBtn] = useState(false);

  const [imgState, setImgState] = useState(false);

  return (
    <div className="shampo-items__item">
      <div className="shampo-img">
        <img
          onMouseOver={() => setImgState(true)}
          onMouseLeave={() => setImgState(false)}
          src={!imgState ? images[0] : images[1]}
          alt="firstImg"
        />
      </div>
      <div className="shampo-name">Шампунь</div>
      <p className="shampo-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
      </p>
      <div className="shampo-color">
        <div className="shampo-color__item">
          <Select />
        </div>
        <div className="shampo-price">{price} грн</div>
      </div>
      <div className="shampo-ml">
        <Checkbox setSize={setSize} size={size} />
      </div>
      <div className="shampo-bottom">
        <div className="add">
          <div onClick={() => removeCount()} className="minus">
            -
          </div>
          <div>{count}</div>
          <div onClick={() => addCount()} className="plus">
            +
          </div>
        </div>
        <div className="buy-btn">
          <button className="buy-btn__item">КУПИТЬ</button>
        </div>
      </div>
      <div className="new-label">
        <span>NEW</span>
      </div>
      <div onClick={() => setEqualBtn(!equalBtn)} className="equal-btn">
        <img src={!equalBtn ? vector : vectorComplite} alt="vector" />
      </div>
    </div>
  );
};

export default ShampoItem;
