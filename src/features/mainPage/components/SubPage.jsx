import '../../../styles/tribute.css'

export const SubPage = ({ content }) => {
    return ( 
    <>
        <div className='sub-page'>
            <p>{content.text}</p>
        </div>
    </>
    )
}