import React from 'react';
import './CreateStrategy.css';

function CreateStrategy() {
  return (
    <div className="createstrategy">
      <div className="cs-header">
        <h1>Create New Strategy</h1>
      </div>
      <div className="cs-sn-create">
        <input
          className="sn-create-input-field"
          type="text"
          required
          placeholder="Name of Strategy"
        />
      </div>
      <div className="cs-selectstrategy">
        <div className="cs-ss-column1">
          <div className="cs-ss-c1-selectstrategy">
            <h4>Select strategy</h4>
          </div>
          <div className="cs-ss-c1-btn">
            <button>Raise Capital</button>
            <button>Buy Back Capital</button>
          </div>
          <div className="cs-ss-c1-capitalbaseissueance">
            <div className="cs-ss-c1-header">
              <h2>Est. Capital Base Issuance</h2>
            </div>
            <input classname="cs-ss-c1-%" placeholder="%" />
            <div classname="cs-ss-c1-remaining">
              <h5>$XXX.XXm remaining</h5>
            </div>
          </div>
        </div>
        <div className="cs-ss-column2">
          <div className="cs-ss-c2-r1">
            <h4>Amount</h4>
            <input className="input-field" placeholder="$XXX.XXm"></input>
          </div>
          <div className="cs-ss-c2-r2">
            <h4>Start-End</h4>
            <div className="cs-ss-c2-r2-date">
              <input type="date"></input>
              <input type="date"></input>
            </div>
          </div>
          <div className="cs-ss-c2-r3">
            <div className="cs-ss-c2-r3-header">
              <h2> Peak Market Impact</h2>
            </div>
            <input classname="cs-ss-c2-r3-%" placeholder="Low" />
            <div classname="cs-ss-c2-r3-remaining">
              <h5>Occurs during XXX, YYY, ZZZ months</h5>
            </div>
          </div>
        </div>
        <div className="cs-ss-column3">
          <div className="cs-ss-c3-r1">
            <h4>Calendar</h4>
            <div class="calendar-container">
              <button>
                <input
                  type="radio"
                  name="calendar"
                  value="forthnightly"
                ></input>
                <span class="checkmark"></span>
                <label for="forthnightly">Forthnightly</label>
              </button>
            </div>
            <div class="calendar-container">
              <button>
                <input type="radio" name="calendar" value="monthly"></input>
                <span class="checkmark"></span>
                <label for="monthly">Monthly</label>
              </button>
            </div>
          </div>
          <div className="cs-ss-c3-r2">
            <div className="cs-ss-c3-r2-c1">
              <div className="cs-ss-c3-r2-c1-floorPrice">
                <h5>Floor Price</h5>
              </div>
              <input className="input-field" placeholder="$XXX.XXm" />
            </div>
            <div className="cs-ss-c3-r2-2">
              <div className="cs-ss-c3-r2-c2-floorPrice">
                <h5>Ceilling Price</h5>
              </div>
              <input className="input-field" placeholder="$XXX.XXm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateStrategy;