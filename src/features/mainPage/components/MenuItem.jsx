import '../../../styles/tribute.css'

export const MenuItem = ({ name, active, onClick }) => {
  return (
    <li 
      className={`sub-menu-item ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {name}
    </li>
  )
}