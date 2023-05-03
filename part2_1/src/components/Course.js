import Content from './Content'
import Header from './Header'

const Course = ({course}) => {
    const id = course.id
    const name = course.name
    const parts = course.parts

    console.log(id, name, parts)
    return (
        <div key={id}>
            <Header name={name}/>
            <Content parts={parts}/>
        </div>
    )
}

export default Course