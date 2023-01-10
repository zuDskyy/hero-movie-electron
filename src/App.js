
import { Fragment } from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/lib/integration/react";
import Content from "./components/body/content/Content";
import { MovieProvider } from "./context/MovieTvchangeContext";
import Home from "./pages/home/Home";
import Allmovie from "./pages/moviepage/Allmovie";
import Pagenotfound from "./pages/pagenotfound/Pagenotfound";
import SingleIdPage from "./pages/singleidpage/SingleIdPage";
import TVserials from "./pages/tvserials/TVserials";
import './styles/App.css'

import { persister, store } from "./redux/store";

function App() {
  return (
    <div className="App">
     
      <Provider store={store}>
        <PersistGate loading={"loading..."} persistor={persister}>
          <Fragment>
          <MovieProvider>
            <Routes>
              <Route path="/" element={<Home />}>
                <Route index element={<Content/>} />
                <Route path="/allmovie" element={<Allmovie />} >
                  <Route path=":genre" element/>
                </Route>
                <Route path="/tvserials" element={<TVserials />} >
                <Route path=":genre" element/>
                </Route>
                <Route path="/php_movie/:id" element={<SingleIdPage />} />
              </Route>
              <Route path="*" element={<Pagenotfound />} />
            </Routes>
           </MovieProvider>
          </Fragment>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
