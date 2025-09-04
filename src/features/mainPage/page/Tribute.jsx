import { useState } from 'react'
import '../../../styles/tribute.css'
import { Menu } from '../components/Menu.jsx'
import { YoutubePlayer } from '../components/YoutubePlayer.jsx'

export const Tribute = ({artistContent}) => {
    const [selected, setSelected] = useState(null)

    const content = selected ? artistContent.content[selected] : null

    return (
        <>
        <div className="body">
            <div className="top">
                <YoutubePlayer></YoutubePlayer>
            </div>

            <Menu 
                items={artistContent.menu}
                selected={selected}
                onSelect={setSelected}
            />
            
            <div className="bottom">
                {content ? (
                    <>
                    <h2>{content.title}</h2>
                    <p>{content.text}</p>
                    </>
                ) : (
                    <p>Selecione uma opção do menu</p>
                )}
            </div>
        </div>
        </>
    )
}