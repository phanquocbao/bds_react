import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.js";
import Contact from "./Pages/Contact/Contact.js";
import { publicRoutes } from "./routes/index.js";
import DefaultLayout from "./components/Layout/DefaultLayout/index";

function App() {
  return (
    <Router>
        <div className="App">
      <Routes>
         {publicRoutes.map((route,index) => {
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;
           return (<Route key={index} path={route.path} element={<Layout><Page/></Layout>} />);
         })}
      </Routes>
        </div>
    </Router>
  );
}

export default App;
