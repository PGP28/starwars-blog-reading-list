// import React from 'react';


const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            name: "Paul",
            people: null,
            planets: null,
            favorites: [],
            peopleid: null,
            planetsid: null,

        },
        actions: {

            favorites: (name)=> {
                setStore({
                    favorites: getStore().favorites.concat(name)
                })
            }, 

            deleteFavorites: (eliminado) => {
                setStore({
                    favorites: getStore().favorites.filter(favoritos=> favoritos !== eliminado)
                })
            },
            
            getPeople: () => {

                fetch('https://swapi.dev/api/people/')
                .then((response) => {
                    // console.log(response);
                    return response.json();
                })
                .then((data) => {
                    // console.log(data);
                    setStore({
                        people: data.results
                    })
                })
                .catch((error) => {
                    console.log(error);
                });
                

            },
            
            getPlanets: () => {
                fetch('https://swapi.dev/api/planets/')
                    .then((response) => {
                        // console.log(response);
                        return response.json();
                    })
                    .then((data) => {
                        // console.log(data);
                        setStore({
                            planets: data.results
                        })
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                    
            },
            getPeopleid: (id) => {

                fetch(`https://swapi.dev/api/people/${id}`)
                .then((response) => {
                    // console.log(response);
                    return response.json();
                })
                .then((data) => {
                    // console.log(data);
                    setStore({
                        peopleid: data
                    })
                })
                .catch((error) => {
                    console.log(error);
                });
                

            },
            getPlanetsid: (id) => {
                fetch(`https://swapi.dev/api/planets/${id}`)
                    .then((response) => {
                        // console.log(response);
                        return response.json();
                    })
                    .then((data) => {
                        // console.log(data);
                        setStore({
                            planetsid: data
                        })
                    })
                    
                    
            },

        }
    }
}

export default getState;