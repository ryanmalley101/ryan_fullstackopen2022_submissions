import {useState, useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons"
import Notification from "./components/Notification";
import personService from './services/persons'

const App = () => {
    const addPerson = (event) => {
        event.preventDefault()
        console.log('button clicked', event.target)
        const newPerson = {name: newName, number: newNumber}
        if (persons.findIndex(p => p.name === newName) === -1) {
            personService.create(newPerson)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')
                    setAddPersonMessage(`Added ${newName}`)
                    setTimeout(() => {
                        setAddPersonMessage(null)
                    }, 5000)
                })
        } else {
            const id = persons[persons.findIndex(p => p.name === newName)].id
            newPerson.id = id
            if (window.confirm(`${newName} is already added to phonebook, replace the old number to confirm the action?`)) {
                personService.update(id, newPerson)
                    .then(response => {
                        console.log(response.data)
                        setPersons(persons.map(person => person.id !== id ? person : newPerson))
                        setAddPersonMessage(`Changed ${newName} number to ${newNumber}`)
                        setTimeout(() => {
                            setAddPersonMessage(null)
                        }, 5000)
                    })
            }
        }
    }

    const removePerson = (id) => {
        if (window.confirm(`\`Delete ${persons.filter(person => person.id === id)[0].name}?`))
            console.log(`removing person ${id}`)
        personService.remove(id)
            .then(setPersons(persons.filter(person => person.id !== id)))
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setFilterValue(event.target.value)
    }

    const [persons, setPersons] = useState([
        {name: 'Ryan', number: '8605029090', id: 1},
    ])

    useEffect(() => {
        console.log('effect')
        personService.getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
                console.log(initialPersons)
            })
    }, [])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filterValue, setFilterValue] = useState('')
    const [addPersonMessage, setAddPersonMessage] = useState(null)

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={addPersonMessage} className={"notification"}/>
            <Filter filterValue={filterValue} handleFilterChange={handleFilterChange}/>
            <h3>Add a new person</h3>
            <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange}
                        newNumber={newNumber} handleNumberChange={handleNumberChange}/>

            <h3>Numbers</h3>
            <Persons persons={persons} filterValue={filterValue} removePerson={removePerson}/>
        </div>
    )
}

export default App