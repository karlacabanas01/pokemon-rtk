import React from 'react';
import { usePokemonListQuery } from "../api/api";
import './styles.css';

function PokemonList({ onPokemonSelected, }: { onPokemonSelected: (pokemonName: string) => void; }) {
    const { isUninitialized, isLoading, isError, isSuccess, data } =
        usePokemonListQuery();

    if (isLoading || isUninitialized) {
        return (
            <div className="loading-container" >
                <div className="loading-circle"></div>
            </div >
        )

    }

    if (isError) {
        return <p>something went wrong</p>;
    }

    return (
        <div className='container'>
            <h2>Overview</h2>
            <div className='containerButton'>

                {data.results.map((pokemon) => (
                    <button key={pokemon.name} className='button' onClick={() => onPokemonSelected(pokemon.name)}>
                        {pokemon.name}
                    </button>
                ))}
            </div>
        </div >
    );
}

export default PokemonList;