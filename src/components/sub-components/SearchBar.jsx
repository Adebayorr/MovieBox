import search from '../../assets/icons/Search.png'
const SearchBar = () => {
    const searchWrapperStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '2px solid #ffffff',
        borderRadius: '0.4rem',
        padding: '0.5rem 0.9rem',
        width: '500px'

    }

    return (
        <>
        <div
        style={searchWrapperStyle}
        >
            <input 
            type="search" 
            className='search-box' 
            placeholder='What do you want to watch'/>
            <img 
            src={search}    
            alt="a search icon" />
        </div>
        </>
    )
}

export default SearchBar