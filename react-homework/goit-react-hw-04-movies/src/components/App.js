import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "react-loader-spinner";
import Header from "./Header/Header";
import "./App.css";

const AsyncHome = lazy(() => import("../pages/Home"));

const AsyncMovies = lazy(() => import("../pages/Movies"));

const AsyncMovieDetails = lazy(() => import("../pages/MovieDetails"));

const AsyncNotFound = lazy(() => import("../pages/NotFound"));

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Suspense
          fallback={
            <Loader
              type="Hearts"
              color="rgba(218,209,77,.836)"
              height={80}
              width={100}
              timeout={10000}
              className="Loader"
            />
          }
        >
          {/* <Switch>
            <Route path="/" exact component={AsyncHome} />
            <Route path="/movies/:movieId" component={AsyncMovieDetails} />
            <Route path="/movies" component={AsyncMovies} />
            <Route component={AsyncNotFound} />
          </Switch>
        </Suspense> */}

        <Switch>
            <Route path="/" exact component={AsyncHome} />
            <Route path="/movies/:movieId" component={AsyncMovieDetails} />
            <Route path="/movies" component={AsyncMovies} />
            <Route component={AsyncNotFound} />
            <Route component={AsyncHome} />
          </Switch>
        </Suspense>


      </div>
    </div>
  );
}

export default App;
