import React, {
    useState
} from 'react';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("")

    const handleSearchInputChange = (e) => {
        setSearchValue(e.target.value)
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault()
        props.search(searchValue)
        resetInputField()
    }

    return (<form className="search" >
        <input type="text"
            value={searchValue}
            onChange={
                handleSearchInputChange
            }

        />

        <input onClick={
            callSearchFunction
        }
            type="submit"
            value="搜索" />
    </form>
    )
}

export default Search