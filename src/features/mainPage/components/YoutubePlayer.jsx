import ReactPlayer from 'react-player'

export const YoutubePlayer = ({ url }) => {
    const baseURL = 'https://www.youtube.com/watch?v='
    return (
        <>
            <ReactPlayer 
                src= { baseURL + url}
                style={{
                    width: '40vw',
                    height: '350px'
                }}
            />
        </>
    )
}