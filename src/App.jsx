import { useRoutes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Topbar from "./components/topbar/topbar";
import routes from "./routes";
function App() {
  let router = useRoutes(routes);
  return (
    <>
      <div className="row overflow-hidden w-100 p-0 m-0">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <Topbar />
          {router}
        </div>
      </div>
    </>
  );
}

export default App;
