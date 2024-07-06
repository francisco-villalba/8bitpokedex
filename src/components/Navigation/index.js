import { useContext, useRef } from "react";
import { AppContext } from "../../context";
import { Wrapper, Input, Button } from "./Navigation.styles";

const Navigation = () => {
  const randomNum = () => Math.round(Math.random() * 898).toString();
  const {fetchPokemon} = useContext(AppContext)
  const inputRef = useRef()

  const handleSearch = (e, query) => {
    e.preventDefault()

    query = query.trim().toLowerCase()
    
    fetchPokemon(query)

    inputRef.current.value = ''
  }

  return (
    <Wrapper>
      <Input ref={inputRef} required={true} />
      <Button color="#4CAF50" onClick={ (e) => { handleSearch(e, inputRef.current.value) }}>Search</Button>
      <Button color="#008CBA" onClick={ (e) => { handleSearch(e, randomNum()) }}>Random</Button>
    </Wrapper>
  );
};

export default Navigation;
