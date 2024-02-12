import React from "react";
import './Form.css';

const ValidationForm = () => {
    return (
        <>
            <div className="ValidationForm">
                <div className="row mt-4">
                    <div class="col-md-6">
                        <form id="RegisterValidation" class="">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title stacked">Register Form</h4>
                                </div>
                                <div class="card-body">
                                    <div class="has-label  form-group">
                                        <label>Email Address *</label>
                                        <input name="email" type="email" class="form-control" />
                                    </div>
                                    <div class="has-label  form-group">
                                        <label>Password *</label>
                                        <input id="registerPassword" name="password" autocomplete="off" type="password" class="form-control" />
                                    </div>
                                    <div class="has-label  form-group">
                                        <label>Confirm Password *</label>
                                        <input equalto="#registerPassword" id="registerPasswordConfirmation" name="password_confirmation" autocomplete="off" type="password" class="form-control" />
                                    </div>
                                    <div class="category form-category">
                                        * Required fields
                                    </div>
                                </div>
                                <div class="text-right card-footer d-flex">
                                    <div class="pull-left form-check">
                                        <label class="form-check-label ">
                                            <input name="optionCheckboxes" type="checkbox" class="form-check-input" />
                                            <span class="form-check-sign mr-4">&nbsp;
                                            </span>Subscribe to newsletter</label>
                                    </div>
                                    <button type="button" class="btn btn-primary ml-auto">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-6">
                        <form id="LoginValidation" class="">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title stacked">Login Form</h4>
                                </div>
                                <div class="card-body">
                                    <div class="has-label  form-group">
                                        <label>Full Name *</label>
                                        <input name="fullname" type="text" class="form-control" />
                                    </div>
                                    <div class="has-label  form-group">
                                        <label>Email Address *</label>
                                        <input name="email" type="email" class="form-control" />
                                    </div>
                                    <div class="has-label  form-group">
                                        <label>Password *</label>
                                        <input name="password" autocomplete="off" type="password" class="form-control" />
                                    </div>
                                    <div class="category form-category">* Required fields</div>
                                </div>
                                <div class="text-center card-footer">
                                    <button type="button" class="btn btn-primary">Register</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-12 mt-4 mb-4">
                        <form id="TypeValidation" class="form-horizontal">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title stacked">Type Validation</h4>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <label class="col-sm-2 col-form-label">Required Text</label>
                                        <div class="col-sm-7">
                                            <div class="form-group">
                                                <input name="required" type="text" class="form-control" />
                                            </div>
                                        </div>
                                        <label class="label-on-right col-sm-3">
                                            <code>required</code>
                                        </label>
                                    </div>
                                    <div class="row">
                                        <label class="col-sm-2 col-form-label">Email</label>
                                        <div class="col-sm-7">
                                            <div class="form-group">
                                                <input name="email" type="text" class="form-control" />
                                            </div>
                                        </div>
                                        <label class="label-on-right col-sm-3">
                                            <code>email="true"</code>
                                        </label>
                                    </div>
                                    <div class="row">
                                        <label class="col-sm-2 col-form-label">Number</label>
                                        <div class="col-sm-7">
                                            <div class="form-group">
                                                <input name="number" type="text" class="form-control" />
                                            </div>
                                        </div>
                                        <label class="label-on-right col-sm-3">
                                            <code>number="true"</code>
                                        </label>
                                    </div>
                                    <div class="row">
                                        <label class="col-sm-2 col-form-label">Url</label>
                                        <div class="col-sm-7">
                                            <div class="form-group">
                                                <input name="url" type="text" class="form-control" />
                                            </div>
                                        </div>
                                        <label class="label-on-right col-sm-3">
                                            <code>url="true"</code>
                                        </label>
                                    </div>
                                    <div class="row">
                                        <label class="col-sm-2 col-form-label">Equal to</label>
                                        <div class="col-sm-3">
                                            <div class="form-group">
                                                <input id="idSource" placeholder="#idSource" type="text" class="form-control" />
                                            </div>
                                        </div>
                                        <div class="col-sm-3">
                                            <div class="form-group">
                                                <input id="idDestination" placeholder="#idDestination" type="text" class="form-control" />
                                            </div>
                                        </div>
                                        <label class="label-on-right col-sm-4">
                                            <code>equalTo="#idSource"</code>
                                        </label>
                                    </div>
                                </div>
                                <div class="text-center card-footer">
                                    <button type="button" class="btn btn-primary">Validate Inputs</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-12 mb-4">
                        <form id="RangeValidation" class="form-horizontal">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title stacked">Range Validation</h4>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <label class="col-sm-2 col-form-label">Min Length</label>
                                        <div class="col-sm-7">
                                            <div class="form-group">
                                                <input name="min_length" type="text" class="form-control" />
                                            </div>
                                        </div>
                                        <label class="label-on-right col-sm-3">
                                            <code>minLength="5"</code>
                                        </label>
                                    </div>
                                    <div class="row">
                                        <label class="col-sm-2 col-form-label">Max Length</label>
                                        <div class="col-sm-7">
                                            <div class="form-group">
                                                <input name="max_length" type="text" class="form-control" />
                                            </div>
                                        </div>
                                        <label class="label-on-right col-sm-3">
                                            <code>maxLength="5"</code>
                                        </label>
                                    </div>
                                    <div class="row">
                                        <label class="col-sm-2 col-form-label">Range</label>
                                        <div class="col-sm-7">
                                            <div class="form-group">
                                                <input name="range" type="text" class="form-control" />
                                            </div>
                                        </div>
                                        <label class="label-on-right col-sm-3">
                                            <code>range="[6,10]"</code>
                                        </label>
                                    </div>
                                    <div class="row">
                                        <label class="col-sm-2 col-form-label">Min Value</label>
                                        <div class="col-sm-7">
                                            <div class="form-group">
                                                <input name="min" type="text" class="form-control" />
                                            </div>
                                        </div>
                                        <label class="label-on-right col-sm-3">
                                            <code>min="6"</code>
                                        </label>
                                    </div>
                                    <div class="row">
                                        <label class="col-sm-2 col-form-label">Max Value</label>
                                        <div class="col-sm-7">
                                            <div class="form-group">
                                                <input name="max" type="text" class="form-control" />
                                            </div>
                                        </div>
                                        <label class="label-on-right col-sm-3">
                                            <code>max="6"</code>
                                        </label>
                                    </div>
                                </div>
                                <div class="text-center card-footer">
                                    <button type="button" class="btn btn-primary">Validate Inputs</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ValidationForm;