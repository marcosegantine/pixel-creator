import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [createDot, setCreateDot] = useState([]);
  const [undidList, setUndidList] = useState([]);
  const [dotColor, setDotColor] = useState('#000');

  function handleClick(event) {
    const newDot = {
      clientX: event.clientX,
      clientY: event.clientY,
      color: dotColor,
    };
    setCreateDot([...createDot, newDot]);
    setUndidList([]);
  }

  function handleUndo(event) {
    event.stopPropagation();

    const gettingLastDot = createDot[createDot.length - 1];

    setUndidList([...undidList, gettingLastDot]);
    setCreateDot(createDot.slice(0, -1));
  }

  function handleRedo(event) {
    event.stopPropagation();

    const gettingLastDot = undidList[undidList.length - 1];

    setCreateDot([...createDot, gettingLastDot]);
    setUndidList(undidList.slice(0, -1));
  }

  function clearWindow(event) {
    event.stopPropagation();
    setCreateDot([]);
  }

  function handleDotColor(event) {
    event.stopPropagation();
    setDotColor(event.target.value);
  }

  return (
    <>
    <div id='commands-container'>

      <form id="colorSelector">
        <label htmlFor="color">Selecione uma cor</label>
        <select
          style={{ backgroundColor: dotColor, color: 'white' }}
          id="color"
          type="color"
          onChange={handleDotColor}
        >
          <option value="#000000" style={{ background: '#000000' }}>
            Preto
          </option>
          <option value="#11B1EA" style={{ background: '#11B1EA' }}>
            Azul
          </option>
          <option value="#f608f6" style={{ background: '#e113e1' }}>
            Rosa
          </option>
          <option value="#5fee12" style={{ background: '#5fee12' }}>
            Verde
          </option>
          <option value="#e30a47" style={{ background: '#e30a47' }}>
            Vermelho
          </option>
          <option value="#9233be" style={{ background: '#9233be' }}>
            Roxo
          </option>
        </select>
      </form>

      <div className="pixels-container" onClick={handleClick}>
        <form id="btns">
          <button
            type="button"
            onClick={handleUndo}
            disabled={createDot.length === 0 ? true : false}
          >
            Desfazer
          </button>

          <button
            type="button"
            onClick={handleRedo}
            disabled={undidList.length === 0 ? true : false}
          >
            Refazer
          </button>

          <button
            type="button"
            onClick={clearWindow}
            disabled={createDot.length === 0 ? true : false}
          >
            Limpar
          </button>
        </form>
    </div>


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
