import '../../../styles/tribute.css'

export const LyricsSubPage = ({ content }) => {
    const songName = content.title
    const lyric = content.lyric
    console.log(lyric)
    return(
        <div className="song">
            <div>
                <span className="song_title">
                    <h1>{songName}</h1>
                </span>
                {lyric && lyric.map((text, i) => (
                    <p key={i}>
                        {text.map((line, j) => (
                            <span key={j}>{line}<br/></span>
                        ))}
                    <br/><br/>
                    </p>
                )
                )}
            </div>
        </div>
    )
}