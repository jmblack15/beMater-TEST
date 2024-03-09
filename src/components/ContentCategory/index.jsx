import { useLocation } from "react-router-dom"

const ContentCategory = () => {

  const { state } = useLocation()

  console.log(state)

  return (
    <div>
      <p>test</p>
    </div>
  )
}

export { ContentCategory }