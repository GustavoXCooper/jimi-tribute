import '../../../styles/tribute.css'
import { MenuItem } from './MenuItem'

export const Menu = ({ items, selected, onSelect }) => {
    return (
        <ul className="sub-menu">
        {items.map((item, index) => (
            <MenuItem 
            key={index} 
            name={item} 
            active={item === selected}
            onClick={() => onSelect(item)} 
            />
        ))}
        </ul>
    )
}