import Part from './Part'


const Content = ({parts}) => {
    console.log(parts)
    return (
        <ul>
            {parts.map(part =>
                <Part key={part.id} name={part.name} exercises={part.exercises}/>
            )}
            <b>total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</b>
        </ul>
    )

}

export default Content