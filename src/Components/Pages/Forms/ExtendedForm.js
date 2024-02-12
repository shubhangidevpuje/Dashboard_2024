import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Select } from 'antd';
import './Form.css';


function valuetext(value) {
    return `${value}°C`;
  }
  
  const minDistance = 10;

  const label = "Some label text"; 
  console.log(label);

export default function ExtendedForm() {
    const [value1, setValue1] = React.useState([20, 37]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const [value2, setValue2] = React.useState([20, 37]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };


    return (
        <>
            <div className="ExtendedForm">
                <div class="row mt-4 mb-4">
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header">
                                <div class="card-title">Datetimepicker</div>
                            </div>
                            <div class="card-body">
                                <div class="form-group">
                                    <div class="rdt">
                                        <input type="date" class="form-control" placeholder="Datetime Picker Here" value="" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header">
                                <div class="card-title">Date Picker</div>
                            </div><div class="card-body">
                                <div class="form-group">
                                    <div class="rdt">
                                        <input type="date" class="form-control" placeholder="Date Picker Here" value="" />
                                        <div class="rdtPicker">
                                            <div class="rdtDays">
                                                {/* <table>
                                                    <thead>
                                                        <tr>
                                                            <th class="rdtPrev">
                                                                <span>‹</span>
                                                            </th>
                                                            <th class="rdtSwitch" colspan="5" data-value="7">August 2023</th>
                                                            <th class="rdtNext">
                                                                <span>›</span>
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <th class="dow">Su</th>
                                                            <th class="dow">Mo</th>
                                                            <th class="dow">Tu</th>
                                                            <th class="dow">We</th>
                                                            <th class="dow">Th</th>
                                                            <th class="dow">Fr</th>
                                                            <th class="dow">Sa</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td data-value="30" data-month="6" data-year="2023" class="rdtDay rdtOld">30</td>
                                                            <td data-value="31" data-month="6" data-year="2023" class="rdtDay rdtOld">31</td>
                                                            <td data-value="1" data-month="7" data-year="2023" class="rdtDay">1</td>
                                                            <td data-value="2" data-month="7" data-year="2023" class="rdtDay">2</td>
                                                            <td data-value="3" data-month="7" data-year="2023" class="rdtDay">3</td>
                                                            <td data-value="4" data-month="7" data-year="2023" class="rdtDay">4</td>
                                                            <td data-value="5" data-month="7" data-year="2023" class="rdtDay">5</td>
                                                        </tr><tr><td data-value="6" data-month="7" data-year="2023" class="rdtDay">6</td>
                                                            <td data-value="7" data-month="7" data-year="2023" class="rdtDay">7</td>
                                                            <td data-value="8" data-month="7" data-year="2023" class="rdtDay">8</td>
                                                            <td data-value="9" data-month="7" data-year="2023" class="rdtDay">9</td>
                                                            <td data-value="10" data-month="7" data-year="2023" class="rdtDay">10</td>
                                                            <td data-value="11" data-month="7" data-year="2023" class="rdtDay">11</td>
                                                            <td data-value="12" data-month="7" data-year="2023" class="rdtDay">12</td>
                                                        </tr>
                                                        <tr>
                                                            <td data-value="13" data-month="7" data-year="2023" class="rdtDay">13</td>
                                                            <td data-value="14" data-month="7" data-year="2023" class="rdtDay">14</td>
                                                            <td data-value="15" data-month="7" data-year="2023" class="rdtDay">15</td>
                                                            <td data-value="16" data-month="7" data-year="2023" class="rdtDay">16</td>
                                                            <td data-value="17" data-month="7" data-year="2023" class="rdtDay rdtToday">17</td>
                                                            <td data-value="18" data-month="7" data-year="2023" class="rdtDay">18</td>
                                                            <td data-value="19" data-month="7" data-year="2023" class="rdtDay">19</td>
                                                        </tr>
                                                        <tr>
                                                            <td data-value="20" data-month="7" data-year="2023" class="rdtDay">20</td>
                                                            <td data-value="21" data-month="7" data-year="2023" class="rdtDay">21</td>
                                                            <td data-value="22" data-month="7" data-year="2023" class="rdtDay">22</td>
                                                            <td data-value="23" data-month="7" data-year="2023" class="rdtDay">23</td>
                                                            <td data-value="24" data-month="7" data-year="2023" class="rdtDay">24</td>
                                                            <td data-value="25" data-month="7" data-year="2023" class="rdtDay">25</td>
                                                            <td data-value="26" data-month="7" data-year="2023" class="rdtDay">26</td>
                                                        </tr>
                                                        <tr>
                                                            <td data-value="27" data-month="7" data-year="2023" class="rdtDay">27</td>
                                                            <td data-value="28" data-month="7" data-year="2023" class="rdtDay">28</td>
                                                            <td data-value="29" data-month="7" data-year="2023" class="rdtDay">29</td>
                                                            <td data-value="30" data-month="7" data-year="2023" class="rdtDay">30</td>
                                                            <td data-value="31" data-month="7" data-year="2023" class="rdtDay">31</td>
                                                            <td data-value="1" data-month="8" data-year="2023" class="rdtDay rdtNew">1</td>
                                                            <td data-value="2" data-month="8" data-year="2023" class="rdtDay rdtNew">2</td>
                                                        </tr>
                                                        <tr>
                                                            <td data-value="3" data-month="8" data-year="2023" class="rdtDay rdtNew">3</td>
                                                            <td data-value="4" data-month="8" data-year="2023" class="rdtDay rdtNew">4</td>
                                                            <td data-value="5" data-month="8" data-year="2023" class="rdtDay rdtNew">5</td>
                                                            <td data-value="6" data-month="8" data-year="2023" class="rdtDay rdtNew">6</td>
                                                            <td data-value="7" data-month="8" data-year="2023" class="rdtDay rdtNew">7</td>
                                                            <td data-value="8" data-month="8" data-year="2023" class="rdtDay rdtNew">8</td>
                                                            <td data-value="9" data-month="8" data-year="2023" class="rdtDay rdtNew">9</td>
                                                        </tr>
                                                    </tbody>
                                                </table> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header">
                                <div class="card-title">Time Picker</div>
                            </div>
                            <div class="card-body">
                                <div class="form-group">
                                    <div class="">
                                        <input type="datetime" class="form-control" placeholder="Time Picker Here" value="" />
                                        <div class="rdtPicker">
                                            <div class="rdtTime">
                                                {/* <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div class="rdtCounters">
                                                                    <div class="rdtCounter">
                                                                        <span class="rdtBtn">▲</span>
                                                                        <div class="rdtCount">12</div>
                                                                        <span class="rdtBtn">▼</span>
                                                                    </div>
                                                                    <div class="rdtCounterSeparator">:</div>
                                                                    <div class="rdtCounter"><span class="rdtBtn">▲</span>
                                                                        <div class="rdtCount">00</div>
                                                                        <span class="rdtBtn">▼</span>
                                                                    </div>
                                                                    <div class="rdtCounter">
                                                                        <span class="rdtBtn">▲</span>
                                                                        <div class="rdtCount">AM</div>
                                                                        <span class="rdtBtn">▼</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="row mt-4">
                                    <div class="col-md-6">
                                        <h4 class="card-title">Toggle Buttons</h4>
                                        <div class="row">
                                            <div class="col-md-4">
                                                <p class="category">Default</p>
                                                <div class=" bootstrap-switch wrapper bootstrap-switch-off bootstrap-switch-animate" tabindex="0" style={{ width: '100px' }}>
                                                    <div class="bootstrap-switch-container" style={{ width: '150px', marginleft: '-50px' }}>
                                                        <Switch {...label} defaultChecked /> <Switch {...label} Checked />
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="col-md-4">
                                                <p class="category">Plain</p>
                                                <div class="bootstrap-switch wrapper bootstrap-switch-on bootstrap-switch-animate" tabindex="0" style={{ width: '100px' }}>
                                                    <div class="bootstrap-switch-container" style={{ width: '150px', marginleft: '0px' }}>
                                                        <Switch {...label} defaultChecked /> <Switch {...label} Checked />
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="col-md-4">
                                                <p class="category">With Icons</p>
                                                <div class="bootstrap-switch wrapper bootstrap-switch-on bootstrap-switch-animate" tabindex="0" style={{ width: '100px' }}>
                                                    <div class="bootstrap-switch-container" style={{ width: '150px', marginleft: '0px' }}>
                                                        <Switch {...label} defaultChecked /> <Switch {...label} Checked />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <h4 class="card-title">Customisable Select</h4>
                                        <div class="row">
                                            <div class="col-sm-3 col-md-6 col-lg-5">
                                                <div class="react-select primary css-2b097c-container">
                                                    <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="css-7pg0cj-a11yText"></span>
                                                    <div class="react-select__control css-yk16xz-control">
                                                        <select id="cars" name="cars" style={{ width: '100%', padding: '10px', paddingLeft: '5px', paddingRight: '10px' }}>
                                                            <option value="volvo">Volvo</option>
                                                            <option value="saab">Saab</option>
                                                            <option value="fiat" selected>Single select</option>
                                                            <option value="audi">Audi</option>
                                                        </select>

                                                    </div>
                                                    <input name="singleSelect" type="hidden" value="" />
                                                </div>
                                            </div>
                                            <div class="col-sm-3 col-md-6 col-lg-5">
                                                <div class="react-select info css-2b097c-container">
                                                    <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="css-7pg0cj-a11yText">
                                                    </span>
                                                    <div class="react-select__control css-yk16xz-control">
                                                        <select id="cars" name="cars" style={{ width: '100%', padding: '10px', paddingLeft: '5px', paddingRight: '10px' }}>
                                                            <option value="volvo">Volvo</option>
                                                            <option value="saab">Saab</option>
                                                            <option value="fiat" selected>Choose City</option>
                                                            <option value="audi">Audi</option>
                                                        </select>

                                                    </div>
                                                    <div>
                                                        <input name="multipleSelect" type="hidden" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-4 mt-4">
                                        <h4 class="card-title">Tags</h4>
                                        <div class="react-tagsinput">
                                            <span>
                                                <span class="react-tagsinput-tag success">Amsterdam<a>
                                                </a>
                                                </span>
                                                <span class="react-tagsinput-tag success">Washington<a>
                                                </a>
                                                </span>
                                                <span class="react-tagsinput-tag success">Sydney<a>
                                                </a>
                                                </span>
                                                <span class="react-tagsinput-tag success">Beijing<a>
                                                </a>
                                                </span>
                                                <input type="text" class="react-tagsinput-input" placeholder="Add a tag" value="" />
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <h4 class="card-title">Dropdown &amp; Dropup</h4>
                                        <div class="row">
                                            <div class="col-sm-3 col-md-6 col-lg-6">
                                                <div class="dropdown">
                                                    <select id="cars" name="cars" style={{ background: '#51cbce', width: '100%', height: '40px', border: 'none', color: '#fff', outline: 'none', textAlign: 'center', borderRadius: '20px' }}>
                                                        <option value="volvo">Volvo</option>
                                                        <option value="saab">Saab</option>
                                                        <option value="fiat" selected>Dropdown</option>
                                                        <option value="audi">Audi</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-sm-3 col-md-6 col-lg-6">
                                                <div class="dropup dropdown">
                                                    <select id="cars" name="cars" style={{ background: '#51cbce', width: '100%', height: '40px', border: 'none', color: '#fff', outline: 'none', textAlign: 'center', borderRadius: '20px' }}>
                                                        <option value="volvo">Volvo</option>
                                                        <option value="saab">Saab</option>
                                                        <option value="fiat" selected>Dropup</option>
                                                        <option value="audi">Audi</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-4 mb-4">
                                    <div class="col-md-6">
                                        <div class="progress" style={{ height: '10px' }}>
                                            <div
                                                class="progress-bar "
                                                role="progressbar"
                                                style={{ width: '25%', background: '#51cbce' }}
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div><br></br>
                                        <div class="progress" style={{ height: '10px' }}>
                                            <div
                                                class="progress-bar "
                                                role="progressbar"
                                                style={{ width: '100%', background: '#ef8157' }}
                                                aria-valuenow="50"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div><br></br>
                                        <div class="progress" style={{ height: '10px' }}>
                                            <div
                                                class="progress-bar"
                                                role="progressbar"
                                                style={{ width: '15%', background: '#6bd098' }}
                                                aria-valuenow="15"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                            <div
                                                class="progress-bar "
                                                role="progressbar"
                                                style={{ width: '30%', background: '#fbc658' }}
                                                aria-valuenow="30"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                            <div
                                                class="progress-bar "
                                                role="progressbar"
                                                style={{ width: '20%', background: '#51cbce' }}
                                                aria-valuenow="20"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>

                                    </div>
                                    <div class="col-md-6">
                                        <h4 class="card-title">Sliders</h4>
                                        <Box width={550}>

                                            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                                            <Slider
                                                getAriaLabel={() => 'Minimum distance'}
                                                value={value1}
                                                onChange={handleChange1}
                                                valueLabelDisplay="auto"
                                                getAriaValueText={valuetext}
                                                disableSwap
                                            />
                                        </Box>
                                        <br />
                                        <div class="slider slider-primary noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr">
                                            <div class="noUi-base">
                                                <div class="noUi-connects">
                                                    <div class="noUi-connect" style={{ transform: 'translate(20%, 0px) scale(0.4, 1)' }}>
                                                    </div>
                                                </div>
                                                <div class="noUi-origin" style={{ transform: ' translate(-800%, 0px); z-index: 5' }}>
                                                    <div class="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="60.0" aria-valuenow="20.0" aria-valuetext="20.00">
                                                        <div class="noUi-touch-area">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="noUi-origin" style={{ transform: 'translate(-400%, 0px); z-index: 4' }}>
                                                    <div class="noUi-handle noUi-handle-upper" data-handle="1" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="20.0" aria-valuemax="100.0" aria-valuenow="60.0" aria-valuetext="60.00">
                                                        <div class="noUi-touch-area">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-4 col-md-4">
                                        <h4 class="card-title">Regular Image</h4>
                                        <div class="fileinput text-center" style={{ position: 'relative',right: '15%'}}>
                                            {/* <input type="file" /> */}
                                            <div class="thumbnail">
                                                <img src="	https://demos.creative-tim.com/paper-dashboard-pro-react/static/media/image_placeholder.61b9ec86.jpg" alt="..." style={{width:'70%'}}/>
                                            </div><br></br>
                                            <div>
                                                <button type="button" class="btn-round btn btn-secondary addpic">Select image</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-4 col-md-3">
                                        <h4 class="card-title">Avatar</h4>
                                        <div class="fileinput text-center" style={{ position: 'relative',right: '30%'}}>
                                        {/* <input type="file" /> */}
                                            <div class="thumbnail img-circle ">

                                                <img src="https://demos.creative-tim.com/paper-dashboard-pro-react/static/media/placeholder.59ffd830.jpg" alt="..." style={{borderRadius:'50%',width:'100px'}}/>
                                                
                                            </div><br></br>
                                            <div>
                                                <button type="button" class="btn-round btn btn-secondary addpic">Add Photo</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// export default ExtendedForm;