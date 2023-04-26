import React, { useEffect, useState } from "react";
import Link from "next/link";

export async function getStaticProps(context) {
    const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
    .then((response) => {
        if (response.ok) {
            return response.json()
        }
    })
    .then((response) => {
        console.log(response)
        return response.pokemon_entries
    })

    return {
        props: {
            pokemons
        }
    }
}

export default function Home(props) {
    const { pokemons } = props

    return (
        <div>
            <h1>Pokedex - JoaoVitorChaves-05 </h1>
            <Link href="/sobre">
                <a>Sobre o projeto</a>
            </Link>
            <ul>
                {pokemons.map((pokemon) => (
                    <li key={pokemon.entry_number}>
                        <Link href={`/pokemon/${pokemon.entry_number}`}>
                            <a>{pokemon.pokemon_species.name}</a>
                        </Link>
                        
                    </li>
                ))}
            </ul>
        </div>
    )
}