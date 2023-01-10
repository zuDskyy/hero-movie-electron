import { useEffect } from 'react';
import { useState, createContext, useMemo } from 'react';

const MovieContext = createContext(); 

const MovieProvider = ({children}) => {
    const userInitialState = localStorage.getItem("movie") || localStorage.getItem("tv")   ;
    const [moviename, setMoviename] = useState(userInitialState);
    useEffect(() => {
        localStorage.setItem("movie", moviename);
      }, [moviename]);

const value = useMemo(
   () => ({moviename, setMoviename}),[moviename])


    return (
        <MovieContext.Provider
            value={value}
        >
            {children}
        </MovieContext.Provider>
    );
}
export { MovieContext, MovieProvider };