export default function OrderSuccess() {
    return (
        <div className="container container-fluid">

        <div className="row justify-content-center">
            <div className="col-6 mt-5 text-center mb-5">
                <img className="my-5 img-fluid d-block mx-auto" src="/images/success.png" alt="Booking Success" width="200" height="200" />

                <h2>Your Booking has been <b className="pink-text"> successfully.</b></h2>
              
                <a href="/orders">Go to Bookings</a>
                
            </div>

        </div>
        </div>
    )
}