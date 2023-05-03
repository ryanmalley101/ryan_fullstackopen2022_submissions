import personService from '../services/persons'

const Person = ({person, removePerson}) => {
    const deletePerson = (event) => {
        removePerson(person.id)
    }

    return (
        <div>
            <p key={person.id}>{person.name} {person.number}</p>
            <button onClick={deletePerson}>delete</button>
        </div>
    )
}

export default Person