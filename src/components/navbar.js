import React, { useContext} from 'react';
import { withRouter } from 'react-router-dom';
import { Context } from '../store/appContext';


const Navbar = ({ location }) => {

    const {store, actions} = useContext(Context);

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <div className="nav-item">
                            <a className="navbar-brand" href="/">StarWars</a>
                        </div>

                    </ul>
                    <div className="col-3">
                        <div className="input-group">

                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Favorites </button>
                                <div className="dropdown-menu">
                                    {
                                        store.favorites.length > 0 ?
                                            store.favorites.map((elem, index) => {

                                            return <a href="/#"className="dropdown-item" key={index}>{elem} <i className="fas fa-trash-alt" onClick={()=> {actions.deleteFavorites(elem)}}></i></a>

                                            })
                                            : (
                                                <a href="/#" className="dropdown-item" >(Empty)</a>

                                            )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>



        </>
    )
}

export default withRouter(Navbar);

