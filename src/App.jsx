import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Home} from "./pages/Home"
import { NotFound } from "./pages/NotFound"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} /> {/* Default route, equivalent to "/" */}
        <Route path="*" element={<NotFound />} /> {/* "*" means any path not defined above */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
