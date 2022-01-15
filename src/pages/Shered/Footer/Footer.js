import React from 'react';

const Footer = () => {
    return (
        <div className='overflow-hidden p-5 bg-dark text-white mt-5'>
            <div className='row'>
            <div className='col-lg-4 col-md-4 col-sm-12'>
                <h4>Travel Day</h4>
                <p>You can dream, create, design, and build <br /> the most wonderful place.</p>
                <p>phone: +0123 456 987</p>
                <p>email: travelDay@gmail.com</p>
                <p>closeing: Mon-Fri: 8 AM – 7 PM</p>

            </div>
            <div  className='col-lg-4 col-md-4 col-sm-12'>
                <h4>Latest News</h4>
                <p>Surrounded by the peaceful waters of <br /> Lake Victoria.</p>
                <p className='text-secondary'>October 05, 2021</p>
                <p>Morning came very early today. The alarm went off at 4 am</p>
                <p className='text-secondary'>October 05, 2021</p>
            </div>
            <div  className='col-lg-4 col-md-4 col-sm-12'>
                <h4>Quick Links</h4>
                <p>About us</p>
                <p>Destinations</p>
                <p>Latest Blogs</p>
                <p>Out Team</p>
                <p>Contact us</p>
            </div>
        </div>
        <div className=' border border-start-0 border-end-0 border-bottom-0'>
            <p className='text-center mt-5'>Copyright @2022 January . Developed And Designe By Sheikh Sadi</p>
        </div>
        </div>
    );
};

export default Footer;