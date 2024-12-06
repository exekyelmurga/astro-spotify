import { useState, useEffect, useRef } from 'react'

export const Play = () => (
    <svg width="24"  height="24"  viewBox="0 0 24 24" class="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>)

export const Pause = () => (
    <svg  width="24"  height="24"  viewBox="0 0 24 24"   class="icon icon-tabler icons-tabler-filled icon-tabler-player-pause"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /><path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /></svg>)

export function Player () {
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef()
    
    useEffect(() => { 
        audioRef.current.src = `/music/1/01.mp3`
    }, []);
    
    const handleClick = () => {
        if ( isPlaying ) {
            audioRef.current.pause()
        }
        else {
            audioRef.current.play()
        }
    setIsPlaying(!isPlaying)    
    }

    return(
        <section className="flex flex-row justify-between px-4 w-full z-50">
            <div>
                Song info...
            </div>
            <div className='grid flex-1 place-content-center'>
                <div className='flex justify-center'>
                    <button className='bg-white p-2 rounded-full' onClick={handleClick}>
                        {isPlaying ? <Pause /> : <Play />}
                    </button>
                </div>
            </div>
            <div>
                volume...
            </div>

            <audio ref={audioRef} />
        </section>
    )
}