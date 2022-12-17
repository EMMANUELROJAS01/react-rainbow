import React, { useState } from 'react'
import ColorBlock from './ColorBlock'

function App(){
    let [colors, setColors] = useState([
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ])
    
    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock color={color} />
        )
    })

    const addColor = (newColor) => {
      setColors ([...colors, newColor])
    }

    return(
      <div className='App'>
        {colorMap}
        <colorForm addColor={addColor}/>
      </div>
    )

    return (
        <div className="App">
          {colors.map((color, i) =>
          <ColorBlock  color= {color}/>
          )}
        </div>
    )
}



export default App;
