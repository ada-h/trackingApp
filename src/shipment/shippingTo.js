import React, { Component } from "react";
import { connect } from "react-redux";
import { shippingto, getFormDetails, getCountries } from "../redux/actions";
import Loader from "../reusables/formLoader";

class ShippingTo extends Component {
  componentWillMount() {
    this.props.getCountries();
  }
  render() {
    const {
      receiverName,
      receiverEmail,
      receiverPhone,
      receiverCompany,
      receiverCountry,
      creatingShippingTo,
      receiverAddress1,
      receiverAddress2,
      receiverAddress3,
      postal_code,
      receiverState,
      city,
    } = this.props;
    return (
      <div className="theme-container container">
        <span
          className="bg-text right wow fadeInUp"
          data-wow-offset={50}
          data-wow-delay=".20s"
        >
          {" "}
          Shipment Booking
        </span>
        <div className="row">
          <div className="col-md-12">
            <div className="pad-10" />
            <h2
              className="section-title pb-10 wow fadeInUp"
              data-wow-offset={50}
              data-wow-delay=".20s"
            >
              {" "}
              Shipment Booking
            </h2>
            <p
              className="fs-16 wow fadeInUp"
              data-wow-offset={50}
              data-wow-delay=".25s"
            >
              {" "}
              Shipping To
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
                    <label className="title-2"> Receiver Name: </label>
                  </div>
                  <div className="col-sm-9">
                    {" "}
                    <input
                      value={receiverName}
                      onChange={(e) =>
                        this.props.getFormDetails({
                          props: ["receiverName"],
                          value: e.target.value,
                        })
                      }
                      data-name="height"
                      type="text"
                      placeholder
                      className="form-control"
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
                    <label className="title-2"> Receiver Email: </label>
                  </div>
                  <div className="col-sm-9">
                    <input
                      value={receiverEmail}
                      onChange={(e) =>
                        this.props.getFormDetails({
                          props: ["receiverEmail"],
                          value: e.target.value,
                        })
                      }
                      type="text"
                      className="form-control"
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
                    <label className="title-2"> Receiver Phone: </label>
                  </div>
                  <div className="col-sm-9">
                    <input
                      value={receiverPhone}
                      onChange={(e) =>
                        this.props.getFormDetails({
                          props: ["receiverPhone"],
                          value: e.target.value,
                        })
                      }
                      type="text"
                      className="form-control"
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
                    <label className="title-2"> Receiver Company: </label>
                  </div>
                  <div className="col-sm-9">
                    {" "}
                    <input
                      value={receiverCompany}
                      onChange={(e) =>
                        this.props.getFormDetails({
                          props: ["receiverCompany"],
                          value: e.target.value,
                        })
                      }
                      type="text"
                      placeholder
                      className="form-control"
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
                    <label className="title-2">Receiver's Country: </label>
                  </div>
                  <div className="col-sm-9">
                    <div className="form-group">
                      <select
                        onChange={(e) =>
                          this.props.getFormDetails({
                            props: ["receiverCountry"],
                            value: e.target.value,
                          })
                        }
                        className="form-control"
                        data-live-search="true"
                      >
                        <option>Select Country</option>
                        <option value="Nigeria">Nigeria</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div
                  className="form-group wow fadeInUp"
                  data-wow-offset={50}
                  data-wow-delay=".20s"
                >
                  <div className="col-sm-3">
                    {" "}
                    <label className="title-2"> location: </label>
                  </div>
                  <div className="col-sm-9">
                    <div className="col-sm-6 no-pad">
                      <input
                        type="text"
                        data-bind="in:value"
                        placeholder="City"
                        value={receiverState}
                        onChange={(e) =>
                          this.props.getFormDetails({
                            props: ["receiverState"],
                            value: e.target.value,
                          })
                        }
                        className="form-control from fw-600"
                      />
                    </div>
                    <div className="col-sm-6 no-pad">
                      <input
                        type="text"
                        data-bind="in:value"
                        data-name="locations[to]"
                        value={city}
                        onChange={(e) =>
                          this.props.getFormDetails({
                            props: ["city"],
                            value: e.target.value,
                          })
                        }
                        placeholder="State"
                        className="form-control to fw-600"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="form-group wow fadeInUp"
                  data-wow-offset={50}
                  data-wow-delay=".20s"
                >
                  <div className="col-sm-3">
                    {" "}
                    <label className="title-2">Receiver Address : </label>
                  </div>
                  <div className="col-sm-9">
                    {" "}
                    <input
                      value={receiverAddress1}
                      onChange={(e) =>
                        this.props.getFormDetails({
                          props: ["receiverAddress1"],
                          value: e.target.value,
                        })
                      }
                      type="text"
                      placeholder
                      className="form-control"
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
                    <label className="title-2"> Receiver Address 2: </label>
                  </div>
                  <div className="col-sm-9">
                    {" "}
                    <input
                      value={receiverAddress2}
                      onChange={(e) =>
                        this.props.getFormDetails({
                          props: ["receiverAddress2"],
                          value: e.target.value,
                        })
                      }
                      type="text"
                      placeholder
                      className="form-control"
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
                    <label className="title-2"> Receiver Address 3: </label>
                  </div>
                  <div className="col-sm-9">
                    {" "}
                    <input
                      value={receiverAddress3}
                      onChange={(e) =>
                        this.props.getFormDetails({
                          props: ["receiverAddress3"],
                          value: e.target.value,
                        })
                      }
                      type="text"
                      placeholder
                      className="form-control"
                    />{" "}
                  </div>
                </div>
                <div
                  className="form-group wow fadeInUp"
                  data-wow-offset={50}
                  data-wow-delay=".20s"
                >
                  <div className="col-sm-9 col-xs-12 pull-right">
                    <div
                      className="btn-1 t-center"
                      onClick={() =>
                        this.props.shippingto(
                          receiverName,
                          receiverEmail,
                          receiverPhone,
                          receiverCompany,
                          receiverCountry,
                          receiverAddress1,
                          receiverAddress2,
                          receiverAddress3,
                          postal_code,
                          receiverState,
                          city
                        )
                      }
                    >
                      {creatingShippingTo ? <Loader /> : "Next"}
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="pt-80 hidden-lg" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    receiverName,
    receiverEmail,
    receiverPhone,
    receiverCompany,
    receiverCountry,
    receiverAddress1,
    receiverAddress2,
    receiverAddress3,
    postal_code,
    receiverState,
    city,
  } = state.General;
  const { creatingShippingTo } = state.Loader;
  return {
    receiverName,
    receiverEmail,
    receiverPhone,
    receiverCompany,
    receiverCountry,
    creatingShippingTo,
    receiverAddress1,
    receiverAddress2,
    receiverAddress3,
    postal_code,
    receiverState,
    city,
  };
};

export default connect(mapStateToProps, { shippingto, getFormDetails, getCountries })(
  ShippingTo
);
