import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { useEffect } from 'react';

const Personaje = props => {

    const { store, actions } = useContext(Context);

    useEffect(() => {

        actions.getPeopleid(props.match.params.id);

    },[])
    // console.log(store.peopleid);

    return (
        <>
            {!!store.peopleid ?

                <div className="container">
                    <div className="card mb-3 p-5">
                        <div className="row no-gutters">

                            <div className="col-md-4">
                                <img src="https://picsum.photos/800/600?random=1" className="card-img" alt="img-personajes" />
                            </div>
                            <div className="col-md-8 text-center">
                                <div className="card-body">
                                    <h1 className="card-title">{store.peopleid.name}</h1>
                                    <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eaque dolores id accusantium pariatur iusto nulla, possimus repudiandae accusamus molestiae vitae impedit ducimus atque quod blanditiis sunt error ab. Incidunt!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="p-1 mb-2 bg-danger text-white" />
                    <div className="container">
                        <div className="row p-3">
                            <div className="col">
                                Name <br /> {store.peopleid.name}
                            </div>
                            <div className="col">
                                Birth Year <br /> {store.peopleid.birth_year}
                            </div>
                            <div className="col">
                                Gender <br /> {store.peopleid.gender}
                            </div>
                            <div className="col">
                                Height <br /> {store.peopleid.height}
                            </div>
                            <div className="col">
                                Skin Color <br /> {store.peopleid.skin_color}
                            </div>
                            <div className="col">
                                Eye Color <br /> {store.peopleid.eye_color}
                            </div>
                        </div>

                    </div>
                </div>

                : <h1>Loading...</h1>
            }

        </>
    )

}

export default Personaje;