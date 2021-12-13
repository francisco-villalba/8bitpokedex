import { useContext, useRef } from "react";
import { AppContext } from "../../context";
import { Wrapper, Input, Button } from "./Navigation.styles";

const Navigation = () => {
  const randomNum = () => Math.round(Math.random() * 898);
  const {fetchPokemon} = useContext(AppContext)
  const inputRef = useRef()

  const handleSearch = (query) => {
    if(query === '') { query = 'asdassd'}
    fetchPokemon(query)
    inputRef.current.value = ''
  }

  return (
    <Wrapper>
      <Input ref={inputRef} />
      <Button color="#4CAF50" onClick={ () => { handleSearch(inputRef.current.value.toLowerCase()) }}>Search</Button>
      <Button color="#008CBA" onClick={ () => { handleSearch(randomNum()) }}>Random</Button>
    </Wrapper>
  );
};

export default Navigation;
