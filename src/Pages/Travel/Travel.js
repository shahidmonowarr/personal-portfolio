import React from 'react';

const Travel = () => {
    return (
        <div>
            <div className="container p-5">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <img src="https://i.ibb.co/h2ZcTCz/travel-booking-website-header.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <img src="https://i.ibb.co/dBbrZM6/travel-booking-website-offer.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <img src="https://i.ibb.co/C9s38dx/travel-booking-website-packages.png" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <p>Travel Mate is a full-stack and responsive travel booking site for travelers. Users can check their desired travel location, cost of the package and can book their particular package from this website. The authentication system of Travel Mate is firebase google login authentication.</p>
                </div>
            </div>
        </div>
    );
};

export default Travel;