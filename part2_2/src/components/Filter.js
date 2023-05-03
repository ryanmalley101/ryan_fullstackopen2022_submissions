const Filter = ({ filterValue, handleFilterChange }) => {
    return(
        <div>
            filter shown with: <input input = {filterValue} onChange={handleFilterChange}/>
        </div>
    )
}

export default Filter