import React, { useContext} from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const Home = props => {

    const { store, actions } = useContext(Context);
   


    return (
        <>
            <div className="container">


                <h1 className="text-danger">Character</h1>
                <div className="row row-cols-1 row-cols-md-3 flex-nowrap overflow-auto">

                    {
                        !!store.people &&
                        store.people.map((people, index) => {
                            const url = people.url.replace("http://swapi.dev/api/people/", "")
                            return (
                                <div className="col mb-4" key={index}>

                                    <div className="card h-100">
                                        <img src="https://picsum.photos/400/200?random=2" className="card-img-top" alt="img-de-muestra" />
                                        <div className="card-body">
                                            <h5 className="card-title">{people.name}</h5>
                                            <p className="card-text">Gender: {people.gender}</p>
                                            <p className="card-text">Hair Color: {people.hair_color}</p>
                                            <p className="card-text">Eye Clor: {people.eye_color}</p>
                                            <div className="row">
                                                <div className="col">
                                                    <Link to={`/personaje/` + url.replace("/", "")} className="btn btn-outline-primary">Learn more!</Link>
                                                </div>
                                                <div className="col-3">
                                                    <a href="/#" className="btn btn-text-warning border border-warning p-2" onClick={() => {
                                                        actions.favorites(people.name);
                                                    }}><i className="far fa-heart p-1"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <h1 className="text-danger">Planets</h1>
                <div className="row row-cols-1 row-cols-md-3 flex-nowrap overflow-auto">

                    {
                        !!store.planets &&
                        store.planets.map((planets, index) => {
                            const url = planets.url.replace("http://swapi.dev/api/planets/", "")
                            return (
                                <div className="col mb-4" key={index}>

                                    <div className="card h-100">
                                        <img src="https://picsum.photos/400/200?random=1" className="card-img-top" alt="img-de-muestra" />
                                        <div className="card-body">
                                            <h5 className="card-title">{planets.name}</h5>
                                            <p className="card-text">Population: {planets.population}</p>
                                            <p className="card-text">Terrain: {planets.terrain}</p>

                                            <div className="row">
                                                <div className="col">
                                                <Link to={`/planeta/` + url.replace("/", "")} className="btn btn-outline-primary">Learn more!</Link>
                                                </div>
                                                <div className="col-3">
                                                <a href="/#" className="btn btn-text-warning border border-warning p-2" onClick={() => {
                                                        actions.favorites(planets.name);
                                                    }}><i className="far fa-heart p-1"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Home;