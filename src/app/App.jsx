import { Tribute } from '../features/mainPage/page/Tribute.jsx'
import { jimi } from '../features/mainPage/content/jimi.js'
function App() {
  return (
    <>
      <Tribute 
        artistContent={ jimi }
        url={ jimi.content.foxy_lady.url }
      />
    </>
  )
}

export default App
