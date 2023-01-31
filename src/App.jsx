import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [createDot, setCreateDot] = useState([]);
  const [dotColor, setDotColor] = useState('#000');

  function handleClick(event) {
    const newDot = {
      clientX: event.clientX,
      clientY: event.clientY,
      color: dotColor,
    };
    setCreateDot((prev) => [...prev, newDot]);
  }

  function handleUndo(event) {
    event.preventDefault();
    event.stopPropagation();
    setCreateDot(createDot.slice(0, -1));
  }

  function handleRedo(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  function clearWindow(event) {
    event.preventDefault();
    event.stopPropagation();
    setCreateDot([]);
  }

  function handleDotColor(event) {
    event.preventDefault();
    event.stopPropagation();
    setDotColor(event.target.value);
  }

  return (
    <>
      <form id="colorSelector">
        <label htmlFor="color">Selecione uma cor</label>
        <select
          id="color"
          type="color"
          placeholder="escolha a cor"
          onChange={handleDotColor}
        >
          <option value="black">Preto</option>
          <option value="blue">Azul</option>
          <option value="yellow">Amarelo</option>
          <option value="#e113e1">Rosa</option>
          <option value="red">Vermelho</option>
          <option value="green">Verde</option>
          <option value="purple">Roxo</option>
          <option value="tomato">tomato</option>
        </select>
      </form>

      <div className="container" onClick={handleClick}>
        <form id="btns">
          <button
            onClick={handleUndo}
            disabled={createDot.length === 0 ? true : false}
          >
            Desfazer
          </button>
          <button onClick={handleRedo}>Refazer</button>
          <button onClick={clearWindow}>Clear</button>
        </form>

        {createDot.map((item, index) => (
          <span
            key={index}
            className="dot"
            style={{
              left: item.clientX,
              top: item.clientY,
              backgroundColor: item.color,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default App;
