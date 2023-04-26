import React from "react";

export default function Pokemon({ pokemon }) {
    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt="Imagem de um pokemon" />
        </div>
    )
}

export async function getStaticPaths() {
    const paths = []

    for (let i = 1; i <= 151; i++) {
        paths.push({
            params: {
                id: i + ''
            }
        })
    }

    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.log(err))

    return {
        props: {
            pokemon
        }
    }
}