import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { switchAuthForm } from "../redux/actions";

class TopBar extends Component {
  render() {
    const { auth } = this.props;
    return (
      <div className="top-bar font2-title1 white-clr">
        <div className="theme-container container">
          <div className="row">
            <div className="col-md-6 col-sm-5">
              <ul className="list-items fs-10">
                <li>
                  <a href="#">sitemap</a>
                </li>
                <li className="active">
                  <a href="#">Privacy</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-7 fs-12">
              <p className="contact-num">
                {" "}
                <i className="fa fa-phone" /> Call us now:{" "}
                <span className="theme-clr"> +639954994168 </span>{" "}
              </p>
            </div>
          </div>
        </div>
        {auth == true ? (
          <Link to="/dashboard" className="sign-in fs-12 theme-clr-bg">
            {" "}
            Dashboard{" "}
          </Link>
        ) : (
          <div
            onClick={() => this.props.switchAuthForm(1)}
            className="sign-in fs-12 theme-clr-bg"
          >
            {" "}
            sign in{" "}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { auth } = state.Auth;
  return { auth };
};

export default connect(mapStateToProps, { switchAuthForm })(TopBar);
