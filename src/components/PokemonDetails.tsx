import React, { useRef } from 'react';
import { usePokemonDetailQuery } from "../api/api";
import './styles.css';

function PokemonDetails({ pokemonName }: { pokemonName: string }) {
    const { isUninitialized, isLoading, isError, data } = usePokemonDetailQuery({ name: pokemonName, });

    const typeColor = {
        bug: "#26de81",
        dragon: "#ffeaa7",
        electric: "#fed330",
        fairy: "#FF0069",
        fighting: "#30336b",
        fire: "#f0932b",
        flying: "#81ecec",
        grass: "#00b894",
        ground: "#EFB549",
        ghost: "#a55eea",
        ice: "#74b9ff",
        normal: "#95afc0",
        poison: "#6c5ce7",
        psychic: "#a29bfe",
        rock: "#2d3436",
        water: "#0190FF",
    };

    let firsType: keyof typeof typeColor | undefined;

    if (data && data.types && data.types.length > 0) {
        firsType = data.types[0].type.name as keyof typeof typeColor;

        if (firsType) {
            const colorType = typeColor[firsType];

            const elementHTML = document.querySelector('article') as HTMLElement;
            if (elementHTML) {
                elementHTML.style.backgroundColor = colorType;
            }
        }
    }

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

    const listFormatter = new Intl.ListFormat("en-GB", {
        style: "short",
        type: "conjunction",
    });
    const primerStat = data.stats && data.stats.length > 0 ? data.stats[0].base_stat : null;

    return (
        <article className="pokemon-card">
            <div className='pokemon-pill'>
                <>Hp: {primerStat}</>
            </div>
            <div className='text-container'>
                <img src={data.sprites.other.dream_world.front_default} alt={data.name} />
                <h2>{data.name}</h2>
            </div>

            <div className="pokemon-details">
                <p className='pokemon-pill-type'>
                    {listFormatter.format(data.types.length > 0 ? [data.types[0].type.name] : [])}
                </p>
                <div className="poke-text">
                    <h2>{data.height}</h2>
                    <p>height: </p>
                </div>
                <div className="poke-text">
                    <h2>{data.weight}</h2>
                    <p>weight: </p>
                </div>
            </div>
        </article>

    );
}
export default PokemonDetails;