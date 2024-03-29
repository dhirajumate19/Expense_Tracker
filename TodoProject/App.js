import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import LoginComponent from "./Components/LoginComponent/LoginComponent";
import Home from "./Components/View/HomeComponent";
import ErrorComponent from "./Components/Error/ErrorComponent";
import TodoList from "./Components/List/TodoList";
import HeaderComponent from "./Components/Header/HeaderComponent";
import FooterComponent from "./Components/Footer/FooterComponent";
import Logout from "./Components/LoginComponent/LogoutComponent.jsx";
import Register from "./Components/Register/Register";
function App() {
  return (
    <Router>
      <>
        <HeaderComponent />
        <Routes>
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route path="register" element={<Register/>}/>
          <Route path="/home" element={<Home />}></Route>
          <Route path="*" element={<ErrorComponent />} />
          <Route  path="/list" element={<TodoList />} />
          <Route path="/logout" element={<Logout/>}/>
        </Routes>
        <FooterComponent />
      </>
    </Router>
  );
}

export default App;
