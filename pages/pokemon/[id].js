import React from "react";
import PropTypes from "prop-types"

export default function Pokemon({ pokemon, pokemon_id }) {
    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemon_id}.gif`} alt="Imagem de um pokemon" />
        </div>
    )
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string,
        sprites: PropTypes.shape({
        front_default: PropTypes.string,
        }),
    }).isRequired,
};

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
            pokemon,
            pokemon_id: params.id
        }
    }
}