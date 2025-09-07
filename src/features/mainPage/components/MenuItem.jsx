import '../../../styles/tribute.css'
import { formatNameForMenu } from '../../../utils/formatNameForMenu'

export const MenuItem = ({ name, active, onClick }) => {
  return (
    <li 
      className={`sub-menu-item ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {formatNameForMenu(name)}
    </li>
  )
}