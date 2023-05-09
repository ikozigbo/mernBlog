//import logo from "./logo.svg";
import "./App.css";
import Post from "./post";
//import Header from "./header";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path={"/login"} element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
