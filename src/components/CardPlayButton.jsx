import { Play, Pause} from './PlayerSection'

export function CardPlayButton ({ id }) {
    return (
        <div className='rounded-full bg-green-500 p-2'>
            <Play />
        </div>
    )
}