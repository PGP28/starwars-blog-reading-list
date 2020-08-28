import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { useEffect } from 'react';

const Planeta = props => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPlanetsid(props.match.params.id);
    }, [])
    // console.log(store.planetsid);

    return (
        <>
            {!!store.planetsid ?
                <div className="container">
                    <div className="card mb-3">
                        <div className="row no-gutters">

                            <div className="col-md-4">
                                <img src="https://picsum.photos/800/600?random=3" className="card-img" alt="img-planetas" />
                            </div>
                            <div className="col-md-8 text-center">
                                <div className="card-body">
                                    <h5 className="card-title">{store.planetsid.name}</h5>
                                    <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eaque dolores id accusantium pariatur iusto nulla, possimus repudiandae accusamus molestiae vitae impedit ducimus atque quod blanditiis sunt error ab. Incidunt!</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="p-1 mb-2 bg-danger text-white" />
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                Name <br /> {store.planetsid.name}
                            </div>
                            <div className="col">
                                Climate <br /> {store.planetsid.climate}
                            </div>
                            <div className="col">
                                Population <br /> {store.planetsid.population}
                            </div>
                            <div className="col">
                                Orbital Period <br /> {store.planetsid.orbital_period}
                            </div>
                            <div className="col">
                                Rotator Period <br /> {store.planetsid.rotation_period}
                            </div>
                            <div className="col">
                                Diameter <br /> {store.planetsid.diameter}
                            </div>
                        </div>

                    </div>
                </div>
                : <h1>Loading...</h1>
            }
        </>
    )

}

export default Planeta;