import { useNavigate } from "react-router"

const GoBack = ({ children, className }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(-1)
  }
  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  )
}

export default GoBack
