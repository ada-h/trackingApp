import React, { Component } from 'react'



class CalculateCost extends Component {
    render() {
        return (
            <section className="calculate pt-100">
                <div className="theme-container container">
                    <span className="bg-text right wow fadeInUp" data-wow-offset={50} data-wow-delay=".20s"> calculate </span>
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <img src="assets/img/block/Courier-Man.png" alt="" className="wow slideInLeft" data-wow-offset={50} data-wow-delay=".20s" />
                        </div>
                        <div className="col-md-6">
                            <div className="pad-10" />
                            <h2 className="section-title pb-10 wow fadeInUp" data-wow-offset={50} data-wow-delay=".20s"> calculate your cost </h2>
                            <p className="fs-16 wow fadeInUp" data-wow-offset={50} data-wow-delay=".25s">Lorem ipsum dolor sit amet, consectetuer adipiscing elit nonummy nibh
                    euismod tincidunt ut laoreet.</p>
                            <div className="calculate-form">
                                <form className="row">
                                    <div className="form-group wow fadeInUp" data-wow-offset={50} data-wow-delay=".20s">
                                        <div className="col-sm-3"> <label className="title-2"> height (cm): </label></div>
                                        <div className="col-sm-9"> <input data-bind="in:value, f: float" data-name="height" type="text" placeholder className="form-control" /> </div>
                                    </div>
                                    <div className="form-group wow fadeInUp" data-wow-offset={50} data-wow-delay=".20s">
                                        <div className="col-sm-3"> <label className="title-2"> width (cm): </label></div>
                                        <div className="col-sm-9"> <input data-bind="in:value, f: float" data-name="width" type="text" placeholder className="form-control" /> </div>
                                    </div>
                                    <div className="form-group wow fadeInUp" data-wow-offset={50} data-wow-delay=".20s">
                                        <div className="col-sm-3"> <label className="title-2"> depth (cm): </label></div>
                                        <div className="col-sm-9"> <input data-bind="in:value, f: float" data-name="depth" type="text" placeholder className="form-control" /> </div>
                                    </div>
                                    <div className="form-group wow fadeInUp" data-wow-offset={50} data-wow-delay=".20s">
                                        <div className="col-sm-3"> <label className="title-2"> weight (kg): </label></div>
                                        <div className="col-sm-9"> <input data-bind="in:value, f: float" data-name="weight" type="text" placeholder className="form-control" /> </div>
                                    </div>
                                    <div className="form-group wow fadeInUp" data-wow-offset={50} data-wow-delay=".20s">
                                        <div className="col-sm-3"> <label className="title-2"> location: </label></div>
                                        <div className="col-sm-9">
                                            <div className="col-sm-6 no-pad">
                                                <input type="text" data-bind="in:value" data-name="locations[from]" placeholder="From" className="form-control from fw-600" />
                                            </div>
                                            <div className="col-sm-6 no-pad">
                                                <input type="text" data-bind="in:value" data-name="locations[to]" placeholder="To" className="form-control to fw-600" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group wow fadeInUp" data-wow-offset={50} data-wow-delay=".20s">
                                        <div className="col-sm-3"> <label className="title-2"> Package: </label></div>
                                        <div className="col-sm-9">
                                            <div className="form-group">
                                                <select data-bind="in:value" data-name="package" className="selectpicker form-control" data-live-search="true" data-width="100%" data-toggle="tooltip" title="select your package">
                                                    <option value="cost">Usual Delivery</option>
                                                    <option value="cost + 25">Fastest Delivery: + $25</option>
                                                    <option value="cost*0.9">Discount Delivery: -10%</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group wow fadeInUp" data-wow-offset={50} data-wow-delay=".20s">
                                        <div className="col-sm-9 col-xs-12 pull-right">
                                            <div className="btn-1"> <span> Total Cost: </span>
                                                <span data-bind="out:price, f:currency" data-name="cost" className="btn-1 dark">
                                                    <span className="pr-sign">-&nbsp;</span> $<span className="pr-wrap" style={{ display: 'none' }}><span className="pr">0</span></span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="pt-80 hidden-lg" />
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default CalculateCost