import React, { useState } from 'react'

const UseState = () => {

    const [name, setName] = useState('Steven Rogers')

  return (
    <div>
        <h1>{name}</h1>

        <button onClick={() => setName("Captain America")}>Change</button>

        <form action="">
            <input type="text" name="" id="" onChange={(event) => setName(event.target.value)} />
        </form>
    </div>
  )
}

export default UseState