import React from 'react';

const Bike = () => {
    return (
        <div>
            <div className="container p-5">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <img src="https://i.ibb.co/fD7WSf5/bike-store-bikes.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <img src="https://i.ibb.co/LkBC4Y1/bike-store-cover.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <img src="https://i.ibb.co/Jd1GcRx/bike-store-customer-review.png" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <p>Bike Zone is a full-stack and responsive website for bike lovers. Users can order different types of bikes and also can see detailed info on bikes from the website. The dashboard is available for both the User and Admin. Users can see their own order list and also can cancel an order. Admin can add an admin, manage product delete or update and can confirm an order</p>
                </div>
            </div>
        </div>
    );
};

export default Bike;