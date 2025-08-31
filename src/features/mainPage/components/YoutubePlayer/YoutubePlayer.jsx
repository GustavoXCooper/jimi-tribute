import ReactPlayer from 'react-player'

export const YoutubePlayer = () => {
    const baseURL = 'https://www.youtube.com/watch?v='
    return (
        <>
            <ReactPlayer 
                src= { baseURL + "ODhMdujZeEY"}
                style={{
                    width: '100px',
                    
                }}
            />
        </>
    )
}