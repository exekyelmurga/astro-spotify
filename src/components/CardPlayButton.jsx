import { Play, Pause} from './PlayerSection'
import { usePlayerStore } from '@/store/playerStore'


export function CardPlayButton ({ id }) {
    const { 
        currentMusic,
        isPlaying,
        setIsPlaying,
        setCurrentMusic 
    } = usePlayerStore(state => state) 

    
    const handleClick = () => {
        setIsPlaying(!isPlaying)
        setCurrentMusic({ 
            playlist: {id}
        }) 
    }
    
    const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id
    
    return (
        <button onClick={handleClick} className='rounded-full bg-green-500 p-2'>
            {isPlayingPlaylist? <Pause/> :<Play />}
        </button>
    )
}