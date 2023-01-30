import React from 'react'

const App = () => {
function handleClick(event) {
  
}

  return (
    <div className='container' onClick={handleClick}>

      <span style={{height: '10px', width: '10px', background: 'white', display: 'block', borderRadius: '50%'}}></span>

    </div>
  )
}

export default App