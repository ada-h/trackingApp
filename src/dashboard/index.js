import React, { Component } from "react";
import Footer from "../reusables/footer";
import MainNav from "../reusables/mainNav";
import TopBar from "../reusables/topBar";
import Login from "../auth";
import { getFormDetails, updateTracking, switchAuthForm} from "../redux/actions";
import { connect } from "react-redux";
import Loader from "../reusables/formLoader";
import Modal from "../reusables/modal";

class index extends Component {
  render() {
      const {updatingPackage,
        trackingNo, presentlocation, locationdescription, calcweight,
        updateerr, authForm, user} = this.props
    return (
      <div>
        {/* Main Wrapper */}
        {/* Popup: Login */}
        <Login />
        {/* /Popup: Login */}
        {authForm == 5 ? (
          <Modal
            closeModal={() => this.props.switchAuthForm(0)}
            modalDetail={
              <div className="">
                <div className="login-wrap text-center">
                  <img src="../assets/img/icons/success.png" alt="success" />
                  <h5> Updated Successfully</h5>
                </div>
                <div className="create-accnt">
                 <h2 className=""> </h2>
                </div>
              </div>
            }
          />
        ) : (
          ""
        )}
        <main className="wrapper">
          {/* Header */}
          <header className="header-main">
            {/* Header Topbar */}
            <TopBar />
            {/* /.Header Topbar */}
            {/* Header Logo & Navigation */}
            <MainNav />
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
                      <p className="fs-16 no-margin">{user.name == undefined ? "User" : user.name}</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <ol className="breadcrumb-menubar list-inline">
                      <li>
                        <a href="#" className="gray-clr">
                          Home
                        </a>
                      </li>
                      <li className="active">Dashboard</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            {/* /.Breadcrumb */}

            {/* More About Us */}
            {/* <section className="pad-30 more-about-wrap">
              <div className="theme-container container pb-100">
                <div className="row">

                </div>
              </div>
            </section> */}
            <section className="pad-30 more-about-wrap">
              <div className="theme-container container pb-100">
                <div className="row">
                  <section className="calculate pt-100">
                    <div className="theme-container container">
                      <span
                        className="bg-text right wow fadeInUp"
                        data-wow-offset={50}
                        data-wow-delay=".20s"
                      >
                        {" "}
                        update{" "}
                      </span>
                      <div className="row">
                        <div className="col-md-6 text-center">
                          <img
                            src="https://www.pngmart.com/files/11/Package-PNG-Pic.png"
                            alt=""
                            className="wow slideInLeft"
                            data-wow-offset={50}
                            data-wow-delay=".20s"
                          />
                        </div>
                        <div className="col-md-6">
                          <div className="pad-10" />
                          <h2
                            className="section-title pb-10 wow fadeInUp"
                            data-wow-offset={50}
                            data-wow-delay=".20s"
                          >
                            {" "}
                            Update Tracking Info{" "}
                          </h2>
                          <p
                            className="fs-16 wow fadeInUp"
                            data-wow-offset={50}
                            data-wow-delay=".25s"
                          >
                            Update a package's tracking information
                          </p>
                          <div className="calculate-form">
                            <form className="row">
                              <div
                                className="form-group wow fadeInUp"
                                data-wow-offset={50}
                                data-wow-delay=".20s"
                              >
                                <div className="col-sm-3">
                                  {" "}
                                  <label className="title-2">
                                    {" "}
                                    Tracking No:{" "}
                                  </label>
                                </div>
                                <div className="col-sm-9">
                                  {" "}
                                  <input
                                    data-bind="in:value, f: float"
                                    data-name="height"
                                    type="text"
                                    placeholder
                                    className="form-control"
                                    value={trackingNo}
                                    onChange={(e) =>
                                      this.props.getFormDetails({
                                        props: ["trackingNo"],
                                        value: e.target.value,
                                      })
                                    }
                                  />{" "}
                                </div>
                              </div>
                              <div
                                className="form-group wow fadeInUp"
                                data-wow-offset={50}
                                data-wow-delay=".20s"
                              >
                                <div className="col-sm-3">
                                  {" "}
                                  <label className="title-2">
                                    {" "}
                                    location:{" "}
                                  </label>
                                </div>
                                <div className="col-sm-9">
                                  {" "}
                                  <input
                                    data-bind="in:value, f: float"
                                    data-name="width"
                                    type="text"
                                    placeholder
                                    className="form-control"
                                    value={presentlocation}
                                    onChange={(e) =>
                                      this.props.getFormDetails({
                                        props: ["presentlocation"],
                                        value: e.target.value,
                                      })
                                    }
                                  />{" "}
                                </div>
                              </div>
                              <div
                                className="form-group wow fadeInUp"
                                data-wow-offset={50}
                                data-wow-delay=".20s"
                              >
                                <div className="col-sm-3">
                                  {" "}
                                  <label className="title-2">
                                    {" "}
                                    description:{" "}
                                  </label>
                                </div>
                                <div className="col-sm-9">
                                  {" "}
                                  <textarea
                                    data-bind="in:value, f: float"
                                    data-name="depth"
                                    type="text"
                                    placeholder
                                    className="form-control"
                                    value={locationdescription}
                                    onChange={(e) =>
                                      this.props.getFormDetails({
                                        props: ["locationdescription"],
                                        value: e.target.value,
                                      })
                                    }
                                  />{" "}
                                </div>
                              </div>
                                <p className='error'> {updateerr}</p>
                              <div
                                className="form-group wow fadeInUp"
                                data-wow-offset={50}
                                data-wow-delay=".20s"
                              >
                                <div className="col-sm-9 col-xs-12 pull-right">
                                  {updatingPackage ? (
                                    <div className="btn-1 t-center">
                                      {" "}
                                      <Loader />{" "}
                                    </div>
                                  ) : (
                                    <div
                                      className="btn-1 t-center"
                                      onClick={() =>
                                        this.props.updateTracking(
                                          trackingNo,
                                          locationdescription,
                                          presentlocation,        
                                        )
                                      }
                                    >
                                     Submit
                                    </div>
                                  )}
                                </div>
                              </div>
                            </form>
                          </div>
                          <div className="pt-80 hidden-lg" />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </section>
            {/* /.More About Us */}
          </article>
          {/* /.Content Wrapper */}
          {/* Footer */}
          <Footer />
          {/* /.Footer */}
        </main>
        {/* / Main Wrapper */}
        {/* Top */}
        <div className="to-top theme-clr-bg transition">
          {" "}
          <i className="fa fa-angle-up" />{" "}
        </div>
        {/* Search Popup */}
        <div className="search-popup">
          <div>
            <div className="popup-box-inner">
              <form>
                <input
                  className="search-query"
                  type="text"
                  placeholder="Search and hit enter"
                />
              </form>
            </div>
          </div>
          <a href="javascript:void(0)" className="close-search">
            <i className="fa fa-close" />
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    const {updatingPackage} = state.Loader
    const {trackingNo, presentlocation, locationdescription, authForm , calcweight} = state.General
    const {updateerr} = state.Tracking
    const {user} = state.Auth
  return {
    updatingPackage,
    trackingNo, presentlocation,
    locationdescription, calcweight,
    updateerr, authForm, user
  };
};

export default connect(mapStateToProps, { getFormDetails, updateTracking, switchAuthForm})(index);
