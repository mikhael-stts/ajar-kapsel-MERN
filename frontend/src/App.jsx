import "./App.css";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import Movie from "./pages/Admin/Movie";
import { loader as MovieLoader } from "./components/Movie/MovieData";
import { MovieFormAction } from "./components/Movie/MovieForm";
import Home from "./pages/Home";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
            <Route index element={<Home />} />
            <Route path="admin">
                <Route
                    path="movie"
                    element={<Movie />}
                    loader={MovieLoader}
                    action={MovieFormAction}
                ></Route>
            </Route>
        </Route>
    )
);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
