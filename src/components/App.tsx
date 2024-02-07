// App.tsx
import React from "react";
import PokemonList from "./PokemonList";
import PokemonDetails from "./PokemonDetails";

export function App() {
    const [selectedPokemon, selectPokemon] = React.useState<string | undefined>(
        undefined
    );

    return (
        <>
            <header>
                <h1>My Pokedex</h1>
            </header>
            <main>
                {selectedPokemon ? (
                    <>
                        <PokemonDetails pokemonName={selectedPokemon} />
                        <button onClick={() => selectPokemon(undefined)}>back</button>
                    </>
                ) : (
                    <PokemonList onPokemonSelected={selectPokemon} />
                )}
            </main>
        </>
    );
}