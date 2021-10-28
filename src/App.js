import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import PageLayout from "./components/page-layout/PageLayout";
import CatNav from "./components/CatNav/CatNav";

import { deepOrange } from "@mui/material/colors";
import HomePage from "./pages/home-page/HomePage";
import StorePage from "./pages/store-page/StorePage";
import ShoppingCartPage from "./pages/shopping-cart/ShoppingCartPage";
import ProfilePage from "./pages/profile/ProfilePage";
import Login from "./pages/login/Login";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});
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
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme} sx={{ display: "flex" }}>
      <div className="App">
        <Router>
          <PageLayout sx={{ display: "flex" }} classeName={classes.root}>
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <Route path="/home">
                <HomePage />
              </Route>
              <Route path="/store">
                {/* <StorePage /> */}
                <CatNav />
              </Route>
              <Route path="/cart">
                <ShoppingCartPage />
              </Route>
              <Route path="/profile">
                <ProfilePage />
              </Route>
            </Switch>
          </PageLayout>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
