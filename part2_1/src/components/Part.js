const Part = (part) => {
    console.log(part)

    const name = part.name;
    const exercises = part.exercises;
    return (
        <p>{name} {exercises}</p>
    )
}

export default Part