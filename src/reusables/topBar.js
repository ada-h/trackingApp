import React from 'react'

const TopBar = () => {
    return (
        <div className="top-bar font2-title1 white-clr">
            <div className="theme-container container">
                <div className="row">
                    <div className="col-md-6 col-sm-5">
                        <ul className="list-items fs-10">
                            <li><a href="#">sitemap</a></li>
                            <li className="active"><a href="#">Privacy</a></li>
                           
                        </ul>
                    </div>
                    <div className="col-md-6 col-sm-7 fs-12">
                        <p className="contact-num">  <i className="fa fa-phone" /> Call us now: <span className="theme-clr"> +639954994168 </span> </p>
                    </div>
                </div>
            </div>
            <a data-toggle="modal" href="#login-popup" className="sign-in fs-12 theme-clr-bg"> sign in </a>
        </div>
    )
}

export default TopBar