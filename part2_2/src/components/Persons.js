import Person from './Person'

const Persons = ({persons, filterValue, removePerson}) => {
    console.log(persons)
    return (
        persons.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase()))
            .map(person => <Person key={person.id} person={person} removePerson={removePerson}/>)
    )

}

export default Persons