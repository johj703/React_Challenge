import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route>
                    <Home />
                </Route>
                <Route>
                    <Detail />
                </Route>
            </Switch>  
        </BrowserRouter>
    );
}
export default Router;