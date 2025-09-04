import '../../../styles/tribute.css'
import { Menu } from '../components/Menu.jsx'
import { YoutubePlayer } from '../components/YoutubePlayer.jsx'

export const Tribute = () => {
    return (
        <>
        <div className="body">
            <div className="top">
                <YoutubePlayer></YoutubePlayer>
            </div>
            <Menu></Menu>
            <div className="bottom">

            </div>
        </div>
        </>
    )
}