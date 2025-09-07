import { useState } from 'react'
import '../../../styles/tribute.css'
import { Menu } from '../components/Menu.jsx'
import { YoutubePlayer } from '../components/YoutubePlayer.jsx'
import { SubPage } from '../components/SubPage.jsx'
import { LyricsSubPage } from '../components/LyricsSubPage.jsx'

export const Tribute = ({artistContent, url}) => {
    const [selected, setSelected] = useState(null)
    const content = selected ? artistContent.content[selected] : null

    return (
        <>
        <div className="body">
            <div className="top">
                <YoutubePlayer url={ url }/>
            </div>

            <Menu 
                items={artistContent.menu}
                selected={selected}
                onSelect={setSelected}
            />

           <div className="bottom">
            {content ? (
                    content.type === "lyrics" ? (
                        <LyricsSubPage content={content} />
                    ) : (
                        <SubPage content={content} />
                    )
                ) : (
                    <p>Selecione uma opção do menu</p>
                )}
            </div>
        </div>
        </>
    )
}