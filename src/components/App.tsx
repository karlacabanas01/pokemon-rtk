// App.tsx
import React from "react";
import PokemonList from "./PokemonList";
import PokemonDetails from "./PokemonDetails";
import '../index.css'

export function App() {
    const [selectedPokemon, selectPokemon] = React.useState<string | undefined>(
        undefined
    );

    return (
        <>
            <header className="header">
                <h1>My Pokedex</h1>
            </header>
            <main>
                {selectedPokemon ? (
                    <>
                        <PokemonDetails pokemonName={selectedPokemon} />
                        <button className="button-back" onClick={() => selectPokemon(undefined)}>back</button>
                    </>
                ) : (
                    <PokemonList onPokemonSelected={selectPokemon} />
                )}
            </main>
        </>
    );
}