import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Services = ({ history, location, match }, ...props) => {

    useEffect(() => {
        //history.push("/");
        console.log(match.params)
        
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Services</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Link to="/services/programming">Programming</Link>
                        <ul>
                            <li><Link to="/services/programming/php">PHP</Link></li>
                            <li><Link to="/services/programming/javascript">Javascript</Link></li>
                            <li><Link to="/services/programming/python">Python</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <Link to="/services/design">Design</Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/services/seo">SEO</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;