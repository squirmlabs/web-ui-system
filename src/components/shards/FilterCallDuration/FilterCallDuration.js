import React from 'react';
import PropTypes from 'prop-types';
// import '../../../lib/shards/css/shards.css';
import '../../../lib/shards/scss/shards.scss';
// import '../../../lib/shards/css/shards-demo.css';
import '../../../lib/shards/scss/shards-demo.scss';

const { bool, string } = PropTypes;

export default function FilterCallDuration(props) {
  const { content, primary, secondary } = props;
  const colorStyles = {
    primary: { background: '#0067f4' },
    secondary: { background: '#5A6169' },
    success: { background: '#17c671' },
    info: { background: '#00b8d8' },
    warning: { background: '#ffb400' },
    danger: { background: '#c4183c' },
    light: { background: '#e9ecef' },
    dark: { background: '#212529' }
  };
  const cardStyles = { paddingBottom: '1px' };
  const progressBar = {
    twenty: { width: '20%' },
    fifty: { width: '50%' },
    seventy: { width: '70%' },
    seventyFive: { width: '75%' }
  };

  return (
    <div className="page-content">
      <div className="content clearfix">
        <div id="sliders" className="container mb-5" style={cardStyles}>
          <div className="my-5">
            <div className="section-title col-lg-8 col-md-10 ml-auto mr-auto mb-5">
              <h3 className="mb-4">Filter - CallDuration</h3>
              <p>Description</p>
            </div>

            <div className="example col-lg-8 col-md-10 ml-auto mr-auto mb-0">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div id="slider-example-1">
                    <input type="text" className="custom-slider-input" />
                    <input type="text" className="custom-slider-input" />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div id="slider-example-2">
                    <input type="text" className="custom-slider-input" />
                    <input type="text" className="custom-slider-input" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div id="slider-example-3">
                    <input type="text" className="custom-slider-input" />
                    <input type="text" className="custom-slider-input" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

FilterCallDuration.propTypes = {
  /** Description of prop "content". */
  content: string,
  /** Description of prop "primary". */
  primary: bool,
  /** Description of prop "secondary". */
  secondary: bool
};
