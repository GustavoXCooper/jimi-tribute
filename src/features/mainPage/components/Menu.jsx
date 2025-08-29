import '../../../styles/tribute.css'
import { MenuItem } from './MenuItem'

export const Menu = () => {
    const items = ['teste1', 'teste2', 'teste3']
    const listItems = items.map( (item, index) => (
         <MenuItem key={index} name={item}></MenuItem>
    ))

    return (

            <ul className='sub-menu'>
                {listItems}
            </ul>

    )
}