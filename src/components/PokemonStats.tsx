import { useParams } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'


const PokemonStats = () => {
  const value = useParams()
  console.log(value)
  return (
    <div className='__main-container'>
      <div className='text-white'>rex</div>
    </div>
  )
}

export default PokemonStats