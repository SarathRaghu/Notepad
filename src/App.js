import { React } from "react";
import "./components/css/App.css";
import Header from "./components/Notecomponents/Header";
import Notes from "./components/Notecomponents/Notes";
function App() {
  return (
    <div className="main">
      <Header />
      <Notes />
    </div>
  );
}
export default App;