// import PokemonItem from "./PokemonItem";
const SearchBar = ({ infos2, setSearchResults }) => {
  const handleSubmit = (event) => event.preventDefault();

  const handleSearchChange = (event) => {
    if (event.target.value !== "") return setSearchResults(infos2);

    const resutlsArray = infos2.filter((info) =>
      info.name.includes(event.target.value)
    );
    setSearchResults(resutlsArray);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        placeholder="Search Pokemon"
        className="search__input"
        type="text"
        id="search"
        onChange={handleSearchChange}
      />
    </form>
  );
};

export default SearchBar;
