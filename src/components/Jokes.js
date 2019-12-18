import React from 'react'
import '../App.css'


const Jokes = (props) => {
    console.log('props', props)
    return(
        <div className='joke' onDoubleClick={() => props.deleteJoke(props.data.id)} onClick={() => props.getSpecific(props.data.id)}>
            <h2>Joke:{props.data.joke}</h2>
            <input onChange={(e) => props.input(e)} type="text"/>
            <button onClick={() => props.update(props.data.id)}>Edit</button>
        </div>
    )
}
export default Jokes