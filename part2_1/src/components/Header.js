const Header = ({ name }) => {
    console.log(name)
    return (
        <h2 key={name}>{name}</h2>
    )
}

export default Header