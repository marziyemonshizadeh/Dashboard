import { useRoutes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/topBar/topBar";
import routes from "./routers";
function App() {
  let router = useRoutes(routes);
  return (
    <>
      <div className="row overflow-hidden w-100 p-0 m-0">
        <div className="col-md-2 d-md-block d-none">
          <Sidebar />
        </div>
        <div className="col-md-10 col-12 bg-warning">
          <Header />
          {router}
        </div>
      </div>
    </>
  );
}

export default App;
