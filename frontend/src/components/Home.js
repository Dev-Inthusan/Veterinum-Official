import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import Loader from "./layouts/Loader";
import MetaData from "./layouts/MetaData";
import Product from "./product/Product";
import { toast } from 'react-toastify';
// import Top from "./layouts/Top";
import Pagination from 'react-js-pagination';
import About from "./layouts/About";
import Contact from "./layouts/Contact";
import AboveFooter from "./layouts/AboveFooter";
// import Top from "./layouts/Top"




export default function Home() {
    const dispatch = useDispatch();
    const { products, loading, error, productsCount, resPerPage } = useSelector((state) => state.productsState)
    const [currentPage, setCurrentPage] = useState(1);

    const setCurrentPageNo = (pageNo) => {

        setCurrentPage(pageNo)

    }

    useEffect(() => {
        if (error) {
            return toast.error(error, {
                position: toast.POSITION.BOTTOM_CENTER
            })
        }
        dispatch(getProducts(null, null, null, null, currentPage))
    }, [error, dispatch, currentPage])


    return (
        <>
         <div class="hero-section">
    <div class="hero-overlay"></div>
    <div class="hero-text mdl-typography--text-center">
        <h1 class="mdl-typography--display-2"><b> Discover outstanding veterinarians here</b> </h1>
        <p class="mdl-typography--headline">
                Connecting you with <b>compassionate veterinarians</b> all around you.
        </p>
        {/* <a href="/product" class="vet-btn">Find Veterinarians</a> */}
    </div>
</div>







            {/* <section className="top" >
                <div className=" d-flex  justify-content-center">

                    <div className="row justify-content-center m-0" >
                        <div className="col-md-12 mt-5 text-center text-white" >
                            <h1 className="display-4 fw-bolder mb-4">Find All around Veterinarians in Here</h1>
                            <p className="lead fs-4 mb-5">Veterinum's main purpose is Save the pets lives immediately</p>
                            <p>We Providing Multy Veterinarians For Your pets</p>
                            <p>One of the Precious Service</p>
                            <p>Choose Your Vet</p>
                            <p>Make Sure</p>
                            <div className="buttons">
                                
                            </div>
                        </div>
                    </div>
                </div>

            </section> */}

            <Fragment>
                {loading ? <Loader /> :
                    <Fragment>
                        <MetaData title={'veterinum'} />
                        <h1 className="d-flex justify-content-center mt-5 container container-fluid">
  <span className="purple-text">Our</span>&nbsp;
  <b className="pink-text">Great Veterinarians</b>
</h1>


                        <section id="products" className="container mt-5">
                            <div className="row">
                                {products && products.map(product => (
                                    <Product col={4} key={product._id} product={product} />
                                ))}

                            </div>
                        </section>
                        {productsCount > 0 && productsCount > resPerPage ?
                            <div className="d-flex justify-content-center mt-5" >
                                <Pagination
                                    activePage={currentPage}
                                    onChange={setCurrentPageNo}
                                    totalItemsCount={productsCount}
                                    itemsCountPerPage={resPerPage}
                                    nextPageText={'Next'}
                                    firstPageText={'First'}
                                    lastPageText={'Last'}
                                    itemClass={'page-item'}
                                    linkClass={'page-link'}
                                />
                            </div> : null}

                    </Fragment>
                }

            </Fragment>

            <About />

            <Contact />
            <AboveFooter />

        </>
    )
}