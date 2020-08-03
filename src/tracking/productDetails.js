import React, { Component } from "react";
import { getFormDetails, trackProducts } from "../redux/actions";
import { connect } from "react-redux";
import Loader from "../reusables/formLoader";
import moment from "moment";

class ProductDetail extends Component {
  render() {
    const {
      trackingNo,
      trackingProducts,
      trackedProduct,
      trackingError,
      location
    } = this.props;
    let lastObj = location.slice(-1);

    return (
      <section className="pt-50 pb-120 tracking-wrap">
        <div className="theme-container container ">
          <div className="row pad-10">
            <div
              className="col-md-8 col-md-offset-2 tracking-form wow fadeInUp"
              data-wow-offset={50}
              data-wow-delay=".30s"
            >
              <h2 className="title-1"> track your product </h2>
              <span className="font2-light fs-12">
                Now you can track your product easily
              </span>

              <div className="row">
                <form className>
                  <div className="col-md-7 col-sm-7">
                    <div className="form-group">
                      <input
                        type="text"
                        value={trackingNo}
                        onChange={(e) =>
                          this.props.getFormDetails({
                            props: ["trackingNo"],
                            value: e.target.value,
                          })
                        }
                        placeholder="Enter your Tracking Number"
                        required
                        className="form-control box-shadow"
                      />
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-5">
                    <div className="form-group">
                      <div
                        className="btn-1 pointer"
                        onClick={() => this.props.trackProducts(trackingNo)}
                      >
                        {trackingProducts ? <Loader /> : "track your product"}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <p className="error">{trackingError}</p>
            </div>
          </div>

          {(trackedProduct !== null) &
          (trackedProduct.location !== undefined) ? (
            <div className="row">
              <div
                className="col-md-7 pad-30 wow fadeInLeft"
                data-wow-offset={50}
                data-wow-delay=".30s"
              >
                <img
                  alt=""
                  src="https://www.pngmart.com/files/11/Package-PNG-Pic.png"
                />
              </div>
              <div
                className="col-md-5 pad-30 wow fadeInRight"
                data-wow-offset={50}
                data-wow-delay=".30s"
              >
                <div className="prod-info white-clr">
                  <ul>
                    <li>
                      {" "}
                      <span className="title-2">Description:</span>{" "}
                      <span className="fs-16">
                        {trackedProduct.tracking_description}
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="title-2">Tracking No:</span>{" "}
                      <span className="fs-16">
                        {trackedProduct.tracking_no}
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="title-2">order date:</span>{" "}
                      <span className="fs-16">
                        {moment(trackedProduct.timestamps).format("YYYY-MM-DD")}
                      </span>{" "}
                    </li>
                    {/* <li>
                      {" "}
                      <span className="title-2">order status:</span>{" "}
                      <span className="fs-16 theme-clr">On Process</span>{" "}
                    </li> */}
                    <li>
                      {" "}
                      <span className="title-2">weight (kg):</span>{" "}
                      <span className="fs-16">
                        {trackedProduct.Shipments[0].weight}
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="title-2">location:</span>{" "}
                      <span className="fs-16"> {location.length == 0 ? trackedProduct.ShippingFroms[0].CityJson.name +','+ trackedProduct.ShippingFroms[0].StateJson.name :  lastObj[0].name}</span>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="title-2">shipping type:</span>{" "}
                      <span className="fs-16">
                        {trackedProduct.Shipments[0].shipping_type}
                      </span>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {trackedProduct.location !== undefined ? (
            <div className="progress-wrap">
              <div className="progress-status">
                <span className="border-left" />
                <span className="border-right" />
                <span
                  className="dot dot-left wow fadeIn"
                  data-wow-offset={50}
                  data-wow-delay=".40s"
                />
                <span
                  className="themeclr-border wow fadeIn"
                  data-wow-offset={50}
                  data-wow-delay=".50s"
                >
                  {" "}
                  <span className="dot dot-center theme-clr-bg" />{" "}
                </span>
                <span
                  className="dot dot-right wow fadeIn"
                  data-wow-offset={50}
                  data-wow-delay=".60s"
                />
              </div>
              <div className="row progress-content upper-text">
                <div className="col-md-3 col-xs-8 col-sm-2">
                  <p className="fs-12 no-margin"> FROM </p>
                  <h2 className="title-1 no-margin">{trackedProduct.ShippingFroms[0].CityJson.name +','+ trackedProduct.ShippingFroms[0].StateJson.name}</h2>
                </div>
                <div className="col-md-2 col-xs-8 col-sm-3">
                  <p className="fs-12 no-margin">
                    {" "}
                    {/* [ <b className="black-clr">6 DAYS </b> ]{" "} */}
                  </p>
                </div>
                <div className="col-md-4 col-xs-8 col-sm-4 text-center">
                  <p className="fs-12 no-margin"> currently in </p>
                  <h2 className="title-1 no-margin">
                  {location.length == 0 ? trackedProduct.ShippingFroms[0].CityJson.name +','+ trackedProduct.ShippingFroms[0].StateJson.name :  lastObj[0].name}
                  </h2>
                </div>
                <div className="col-md-1 col-xs-8 col-sm-1 no-pad">
                  <p className="fs-12 no-margin">
                    {" "}
                    {/* [ <b className="black-clr">2 DAYS </b> ]{" "} */}
                  </p>
                </div>
                <div className="col-md-2 col-xs-8 col-sm-2 text-right">
                  <p className="fs-12 no-margin"> to </p>
                  <h2 className="title-1 no-margin">{trackedProduct.ShippingTos[0].CityJson.name +','+ trackedProduct.ShippingTos[0].StateJson.name}</h2>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  const { trackingNo } = state.General;
  const { trackingProducts } = state.Loader;
  const { trackedProduct, trackingError, location } = state.Tracking;

  return {
    trackingNo,
    trackingProducts,
    trackedProduct,
    trackingError,
    location
  };
};

export default connect(mapStateToProps, { trackProducts, getFormDetails })(
  ProductDetail
);
