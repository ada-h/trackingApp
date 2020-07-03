import React, { Component } from 'react'
import Footer from '../reusables/footer';
import MainNav from '../reusables/mainNav'
import TopBar from '../reusables/topBar';
import Login from '../auth';



class index extends Component {
    render() {
        return (

            <div>
                {/* Main Wrapper */}
                <main className="wrapper">
                    {/* Header */}
                    <header className="header-main">
                        {/* Header Topbar */}
                        <TopBar/>
                        {/* /.Header Topbar */}
                        {/* Header Logo & Navigation */}
                        <MainNav/>
                        {/* /.Header Logo & Navigation */}
                    </header>
                    {/* /.Header */}
                    {/* Content Wrapper */}
                    <article className="about-page">
                        {/* Breadcrumb */}
                        <section className="theme-breadcrumb pad-50">
                            <div className="theme-container container ">
                                <div className="row">
                                    <div className="col-sm-8 pull-left">
                                        <div className="title-wrap">
                                            <h2 className="section-title no-margin">Dashboard</h2>
                                            <p className="fs-16 no-margin">User</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <ol className="breadcrumb-menubar list-inline">
                                            <li><a href="#" className="gray-clr">Home</a></li>
                                            <li className="active">Dashboard</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* /.Breadcrumb */}
                        
                        {/* More About Us */}
                        <section className="pad-30 more-about-wrap">
                            <div className="theme-container container pb-100">
                                <div className="row">
                                   'write code here'
                                </div>
                            </div>
                        </section>
                        {/* /.More About Us */}
                    </article>
                    {/* /.Content Wrapper */}
                    {/* Footer */}
                   <Footer/>
                    {/* /.Footer */}
                </main>
                {/* / Main Wrapper */}
                {/* Top */}
                <div className="to-top theme-clr-bg transition"> <i className="fa fa-angle-up" /> </div>
                {/* Popup: Login */}
                <Login/>
                {/* /Popup: Login */}
                {/* Search Popup */}
                <div className="search-popup">
                    <div>
                        <div className="popup-box-inner">
                            <form>
                                <input className="search-query" type="text" placeholder="Search and hit enter" />
                            </form>
                        </div>
                    </div>
                    <a href="javascript:void(0)" className="close-search"><i className="fa fa-close" /></a>
                </div>
            </div>

        )
    }
}

export default index