import React from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

const PokemonStats = (props: Props) => {
  const value = useParams()
  console.log(value)
  return (
    <div>{value.pokemonId}</div>
  )
}

export default PokemonStats