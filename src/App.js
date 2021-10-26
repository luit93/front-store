import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import PageLayout from "./components/page-layout/PageLayout";
import { deepOrange } from "@mui/material/colors";
import HomePage from "./pages/home-page/HomePage";
import StorePage from "./pages/store-page/StorePage";
import Login from "./pages/login/Login";

const theme = createTheme({
  palette: {
    primary: deepOrange,
    secondary: { main: "#212121" },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <PageLayout>
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <Route path="/home">
                <HomePage />
              </Route>
              <Route path="/store">
                <StorePage />
              </Route>
            </Switch>
          </PageLayout>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
