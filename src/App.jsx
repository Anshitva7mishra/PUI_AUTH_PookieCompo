import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp"
import SiginIn from "./pages/SiginIn"
import ForgotPassword from "./pages/ForgotPassword"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/PUI/login" element={<SiginIn />}/>
        <Route path="/PUI/login/forgot-credentials" element={<ForgotPassword />}/>
      </Routes>
    </div>
  )
}

export default App