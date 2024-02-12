import React from "react";
import './Form.css';
import $ from 'jquery';

const WizardSection = () => {

    

    return (
        <>
            {/* <div class="mr-auto ml-auto col-md-10">
                <div class="wizard-container">
                    <div data-color="primary" class="card card-wizard active card">
                        <div data-background-color="primary" class="text-center card-header">
                            <h3 class="card-title">Build Your Profile</h3>
                            <h3 class="description">This information will let us know more about you.</h3>
                            
                            <div class="wizard-navigation">
                                <div class="progress-with-circle">
                                    <div class="progress-bar" role="progressbar" style={{width: '163.833px'}}>
                                    </div>
                                </div>
                                <ul class="nav nav-pills">
                                    <li class="nav-item" style={{width:' 33.3333%'}}>
                                        <a class="active checked nav-link">
                                            <i class="nc-icon nc-single-02"></i>About</a></li>
                                    <li class="nav-item" style={{width: '33.3333%'}}>
                                        <a class="nav-link">
                                            <i class="nc-icon nc-touch-id"></i>Account</a></li>
                                    <li class="nav-item" style={{width: '33.3333%'}}>
                                        <a class="nav-link"><i class="nc-icon nc-pin-3"></i>Address</a></li>
                                </ul>
                                <div class="moving-tab movingstab" >
                                    <i class="nc-icon nc-single-02"></i>About
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="tab-content">
                                <div class="tab-pane fade show active">
                                    <h5 class="info-text">Let's start with the basic information (with validation)</h5>
                                    <div class="justify-content-center row">
                                        <div class="col-sm-4">
                                            <div class="picture-container">
                                                <div class="picture">
                                                    <img src="./wizard.png" class="picture-src" alt="..." />
                                                    <input type="file" />
                                                </div>
                                                <h6 class="description">Choose Picture</h6>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="nc-icon nc-single-02"></i>
                                                    </span>
                                                </div>
                                                <input name="firstname" placeholder="First Name (required)" type="text" class="form-control" />
                                            </div>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="nc-icon nc-circle-10"></i>
                                                    </span>
                                                </div>
                                                <input name="lastname" placeholder="Last Name (required)" type="text" class="form-control" />
                                            </div>
                                        </div>
                                        <div class="mt-3 col-lg-10">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="nc-icon nc-send"></i>
                                                    </span>
                                                </div>
                                                <input name="email" placeholder="Email (required)" type="email" class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade">
                                    <h5 class="info-text">What are you doing? (checkboxes)</h5>
                                    <div class="justify-content-center row">
                                        <div class="col-lg-10">
                                            <div class="row">
                                                <div class="col-sm-4">
                                                    <div class="choice" data-toggle="wizard-checkbox">
                                                        <input name="jobb" type="checkbox" value="Design" />
                                                        <div class="icon">
                                                            <i class="nc-icon nc-ruler-pencil"></i>
                                                        </div>
                                                        <h6>Design</h6>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="choice" data-toggle="wizard-checkbox">
                                                        <input name="jobb" type="checkbox" value="Code" />
                                                        <div class="icon">
                                                            <i class="nc-icon nc-laptop"></i>
                                                        </div>
                                                        <h6>Code</h6>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="choice" data-toggle="wizard-checkbox">
                                                        <input name="jobb" type="checkbox" value="Develop" />
                                                        <div class="icon">
                                                            <i class="nc-icon nc-atom"></i>
                                                        </div>
                                                        <h6>Develop</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade">
                                    <div class="justify-content-center row">
                                        <div class="col-sm-12">
                                            <h5 class="info-text">Are you living in a nice area?</h5>
                                        </div>
                                        <div class="col-sm-7">
                                            <div class="form-group">
                                                <label>Street Name</label>
                                                <input type="text" class="form-control" />
                                            </div>
                                        </div>
                                        <div class="col-sm-3">
                                            <div class="form-group">
                                                <label>Street No.</label>
                                                <input type="text" class="form-control" />
                                            </div>
                                        </div>
                                        <div class="col-sm-5">
                                            <div class="form-group">
                                                <label>City</label>
                                                <input type="text" class="form-control" />
                                            </div>
                                        </div>
                                        <div class="col-sm-5">
                                            <div class="form-group">
                                                <label>Country</label>
                                                <div class="react-select css-2b097c-container">
                                                    <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="css-7pg0cj-a11yText">
                                                    </span>
                                                    <div class="react-select__control css-yk16xz-control">
                                                        <div class="react-select__value-container css-1hwfws3">
                                                            <div class="react-select__placeholder css-1wa3eu0-placeholder">Single Select</div>
                                                            <div class="css-1g6gooi">
                                                                <div class="react-select__input" style={{display: 'inline-block'}}>
                                                                    <input className="inputautocapitalize" autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-2-input" spellcheck="false" tabindex="0" type="text" aria-autocomplete="list" value=""  />
                                                                    <div className="styleshet">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="react-select__indicators css-1wy0on6">
                                                            <span class="react-select__indicator-separator css-1okebmr-indicatorSeparator">
                                                            </span>
                                                            <div class="react-select__indicator react-select__dropdown-indicator css-tlfecz-indicatorContainer" aria-hidden="true">
                                                                <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg">
                                                                    <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z">
                                                                    </path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div style={{float: 'right'}}>
                                <button type="button" class="btn-next btn-wd btn btn-secondary">Next</button>
                            </div>
                            <div style={{float: 'left'}}>
                            </div>
                            <div class="clearfix">
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default WizardSection;