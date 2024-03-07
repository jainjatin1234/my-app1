import React from 'react';

const Category = ({categorydata}) => {
    return (


        <>


        
            {/* <!-- Categories Start --> */}
        
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href="">
                            <div className="cat-item d-flex align-items-center mb-4">
                                <div className="overflow-hidden" style={{width: "100px", height: "100px"}}>
                                    <img className="img-fluid w-200" src={categorydata.image.url} alt="" />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>{categorydata.name}</h6>
                                    <small className="text-body">100 products</small>
                                </div>
                            </div>
                        </a>
                    </div>
            {/* <!-- Categories End --> */}

        
        </>
    );
}

export default Category;
