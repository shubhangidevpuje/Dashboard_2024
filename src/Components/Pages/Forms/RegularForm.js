import React from "react";
import './Form.css';

const RegularForm = () => {
    return (
        <>
            <div className="RegularForm pt-4">
                <div className="row">
                    <div className="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title stacked">Stacked Form</h4>
                            </div>
                            <div class="card-body">
                                <form action="#" method="#" class="">
                                    <label>Email address</label>
                                    <div class="form-group">
                                        <input placeholder="Enter email" type="email" class="form-control" /></div>
                                    <label>Password</label>
                                    <div class="form-group">
                                        <input placeholder="Password" autocomplete="off" type="password" class="form-control" />
                                    </div>
                                    <div class=" mt-3 ">
                                        <div class="form-check ">
                                            <label class="d-flex">
                                                <input type="checkbox" class="form-check-input" value="" />&nbsp;&nbsp;&nbsp;Subscribe to newsletter <span class="form-check-sign"></span></label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="card-footer">
                                <button type="submit" class="btn-round btn btn-info">SUBMIT</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title stacked">Horizontal Form</h4>
                            </div>
                            <div class="card-body">
                                <form class="form-horizontal">
                                    <div class="row">
                                        <label class="col-md-3 col-form-label">Username</label>
                                        <div class="col-md-9"><div class="form-group">
                                            <input placeholder="Username" type="text" class="form-control" />
                                        </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <label class="col-md-3 col-form-label">Email</label>
                                        <div class="col-md-9">
                                            <div class="form-group">
                                                <input placeholder="Email" type="email" class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <label class="col-md-3 col-form-label">Password</label>
                                        <div class="col-md-9">
                                            <div class="form-group">
                                                <input placeholder="Password" autocomplete="off" type="password" class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-3">
                                        </div>
                                        <div class="col-md-9">
                                            <div class="form-check">
                                                <label class="form-check-label">
                                                    <input type="checkbox" class="form-check-input" />
                                                    <span class="form-check-sign"></span>&nbsp;&nbsp;Remember me</label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="card-footer">
                                <div class="row">
                                    <div class="col-md-3">
                                    </div>
                                    <div class="col-md-9">
                                        <button type="submit" class="btn-round btn btn-info">Sign in</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 mt-4 mb-4">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title stacked">Form Elements</h4>
                            </div>
                            <div class="card-body">
                                <form action="/" method="get" class="form-horizontal">
                                    <div class="row">
                                        <label class="col-sm-2 col-form-label">With help</label>
                                        <div class="col-sm-10"><div class="form-group">
                                            <input type="text" class="form-control" />
                                            <span class="form-text text-default">A block of help text that breaks onto a new line.</span>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <label class="col-sm-2 col-form-label">Password</label>
                                        <div class="col-sm-10">
                                            <div class="form-group">
                                                <input autocomplete="off" type="password" class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <label class="col-sm-2 col-form-label">Placeholder</label>
                                        <div class="col-sm-10">
                                            <div class="form-group">
                                                <input placeholder="placeholder" type="text" class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <label class="col-sm-2 col-form-label">Disabled</label>
                                        <div class="col-sm-10">
                                            <div class="form-group">
                                                <input disabled="" type="text" class="form-control" value="Disabled input here.." style={{ background: '#e3e3e3' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <label class="col-sm-2 col-form-label">Static control</label>
                                        <div class="col-sm-10">
                                            <div class="form-group">
                                                <p class="form-control-static">hello@expertdigital.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <label class="col-sm-2 col-form-label">Checkboxes and radios</label>
                                        <div class="checkbox-radios col-sm-10">
                                            <div class="form-check">
                                                <label class="form-check-label">
                                                    <input type="checkbox" class="form-check-input" />
                                                    <span class="form-check-sign"></span>&nbsp;&nbsp;First Checkbox</label>
                                            </div>
                                            <div class="form-check">
                                                <label class="form-check-label">
                                                    <input type="checkbox" class="form-check-input" />
                                                    <span class="form-check-sign"></span>&nbsp;&nbsp;Second Checkbox</label>
                                            </div>
                                            <div class="form-check-radio">
                                                <label class="form-check-label">
                                                    <input id="exampleRadios11" name="exampleRadioz" type="radio" class="form-check-input" value="option1" />First Radio <span class="form-check-sign"></span></label>
                                            </div>
                                            <div class="form-check-radio">
                                                <label class="form-check-label">
                                                    <input id="exampleRadios12" name="exampleRadioz" type="radio" class="form-check-input" value="option2" checked="" />
                                                    Second Radio
                                                    <span class="form-check-sign"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <label class="col-sm-2 col-form-label">Inline checkboxes</label>
                                        <div class="col-sm-10 d-flex">
                                            <div class="form-check form-check-inline">
                                                <label class="form-check-label">
                                                    <input type="checkbox" class="form-check-input" checked="" />
                                                    <span class="form-check-sign">&nbsp;&nbsp;
                                                    </span>a</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <label class="form-check-label">
                                                    <input type="checkbox" class="form-check-input" />
                                                    <span class="form-check-sign">&nbsp;&nbsp;
                                                    </span>b</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <label class="form-check-label">
                                                    <input type="checkbox" class="form-check-input" />
                                                    <span class="form-check-sign">&nbsp;&nbsp;
                                                    </span>c</label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 mb-4">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title stacked">Input Variants</h4>
                            </div><div class="card-body">
                                <form action="/" method="get" class="form-horizontal" data-gtm-form-interact-id="0">
                                    <div class="row">
                                        <label class="col-sm-2 col-form-label">Custom Checkboxes &amp; radios</label>
                                        <div class="checkbox-radios col-sm-4">
                                            <div class="form-check">
                                                <label class="form-check-label">
                                                    <input type="checkbox" class="form-check-input" data-gtm-form-interact-field-id="1" />
                                                    <span class="form-check-sign">&nbsp;&nbsp;
                                                    </span>Unchecked</label>
                                            </div>
                                            <div class="form-check">
                                                <label class="form-check-label">
                                                    <input type="checkbox" class="form-check-input" checked="" data-gtm-form-interact-field-id="0" />
                                                    <span class="form-check-sign">&nbsp;&nbsp;
                                                    </span>Checked</label>
                                            </div>
                                            <div class="form-check disabled">
                                                <label class="form-check-label">
                                                    <input disabled="" type="checkbox" class="form-check-input" />
                                                    <span class="form-check-sign">&nbsp;&nbsp;
                                                    </span>Disabled Unchecked</label>
                                            </div>
                                            <div class="form-check disabled">
                                                <label class="form-check-label">
                                                    <input disabled="" type="checkbox" class="form-check-input" />
                                                    <span class="form-check-sign">&nbsp;&nbsp;
                                                    </span>Disabled Checked</label>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3">
                                            <div class="form-check-radio">
                                                <label class="form-check-label">
                                                    <input id="exampleRadios1" name="exampleRadios" type="radio" class="form-check-input" value="option1" data-gtm-form-interact-field-id="2" />
                                                    Radio is off
                                                    <span class="form-check-sign">
                                                    </span>
                                                </label>
                                            </div>
                                            <div class="form-check-radio">
                                                <label class="form-check-label">
                                                    <input id="exampleRadios2" name="exampleRadios" type="radio" class="form-check-input" value="option2" checked="" data-gtm-form-interact-field-id="3" />
                                                    Radio is on
                                                    <span class="form-check-sign">
                                                    </span>
                                                </label>
                                            </div>
                                            <div class="form-check-radio disabled">
                                                <label class="form-check-label">
                                                    <input disabled="" id="exampleRadios3" name="exampleRadios" type="radio" class="form-check-input" value="option3" />
                                                    Disabled radio is off
                                                    <span class="form-check-sign"></span>
                                                </label>
                                            </div>
                                            <div class="form-check-radio disabled">
                                                <label class="form-check-label">
                                                    <input disabled="" id="exampleRadios4" name="exampleRadioz" type="radio" class="form-check-input" value="option4" checked="" />
                                                    Disabled radio is on
                                                    <span class="form-check-sign"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <label class="col-sm-2 col-form-label">Input with success</label>
                                        <div class="col-sm-10">
                                            <div class="has-success form-group">
                                                <input type="text" class="form-control" value="Success" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <label class="col-sm-2 col-form-label">
                                            Input with error
                                        </label>
                                        <div class="col-sm-10">
                                            <div class="has-danger form-group">
                                                <input type="text" class="form-control" value="Error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <label class="col-sm-2 col-form-label">
                                            Column sizing
                                        </label>
                                        <div class="col-sm-10">
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <input placeholder=".col-md-3" type="text" class="form-control" />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <input placeholder=".col-md-4" type="text" class="form-control" />
                                                    </div>
                                                </div>
                                                <div class="col-md-5">
                                                    <div class="form-group">
                                                        <input placeholder=".col-md-5" type="text" class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegularForm;