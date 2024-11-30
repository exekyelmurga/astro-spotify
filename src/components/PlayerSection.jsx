import { useState, useEffect, useRef } from 'react'

export function Player () {
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef()
    
    useEffect(() => { 
        audioRef.current.src = `/music/1/01.mp3`
    }, []);
    
    let playing = 'Playing...'
    let pause = 'Pause'
    
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
        <section className="flex flex-row justify-between w-full">
            <div>
                Song info...
            </div>
            <div>
                <button onClick={handleClick}>
                   {isPlaying? playing : pause}
                </button>
            </div>
            <div>
                volume...
            </div>

            <audio ref={audioRef} />
        </section>
    )
}