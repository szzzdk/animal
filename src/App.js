import {useState} from "react";
import './App.css';
import AnimalShow from "./AnimalShow";


const getAllAnimals = () => {
    const animals = ['dog', 'cat', 'horse', 'bird'];

    return animals[Math.floor(Math.random() * animals.length)];
}

console.log(getAllAnimals())

const App = () => {
    const [ animals, setAnimals ] = useState([]);

    const handlerClick = () => {
        setAnimals([...animals, getAllAnimals()]);
    }

    const rerenderAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    })


    return (
        <div className="app">
            <button onClick={handlerClick}>Add animal</button>
            <div className='animal-list'>{rerenderAnimals}</div>
        </div>
    )
}

export default App;