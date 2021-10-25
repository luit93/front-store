import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PageLayout from "./components/page-layout/PageLayout";
function App() {
  return (
    <div className="App">
      <Router>
        <PageLayout> </PageLayout>
      </Router>
    </div>
  );
}

export default App;
