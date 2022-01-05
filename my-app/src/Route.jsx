import { Route, Switch } from "react-router-dom"
import { Login } from "./Pages/Login"
import { Home } from "./Pages/Home"
import { Search } from "./Pages/Search"

export const Route = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/search">
                <Search/>
            </Route>
            <Route exact path="/login">
                <Login/>
            </Route>
        </Switch>
    )
}