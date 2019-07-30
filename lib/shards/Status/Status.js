import React from 'react';
import PropTypes from 'prop-types';
import styles from './Status.css';
import '../../../../lib/shards/css/shards.css';
// import '../../../lib/shards/scss/shards.scss';
// import '../../../lib/shards/css/shards-demo.css';
import '../../../../lib/shards/scss/shards-demo.scss';

const { bool, string } = PropTypes;

export default function Status(props) {
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
        <div id="forms" className="container mb-5">
          <div className="section-title col-lg-8 col-md-10 ml-auto mr-auto mb-5">
            <h3 className="mb-4">Form Controls</h3>
            <p>
              All form controls are improved with micro-transitions and shadows that bring depth and
              improve the overall user experience.
            </p>
          </div>
          <div className="example col-lg-8 col-md-10 ml-auto mr-auto">
            <div className="container">
              <div className="row">
                <h5 className="mb-4 w-100">Custom Controls</h5>
                <p className="mb-5">
                  The default custom form fields are improved and extended. One of the new additions
                  being the
                  <strong>toggle switch</strong> control.
                </p>
              </div>

              <div className="row mb-5">
                <div className="custom-controls-example col-md-4 col-sm-4 col-xs-12 pl-0">
                  <h6 className="text-muted mb-2">Checkboxes</h6>
                  <fieldset>
                    <label className="custom-control custom-checkbox d-block my-2">
                      <input type="checkbox" className="custom-control-input" required />
                      <span className="custom-control-indicator" />
                      <span className="custom-control-description">Pizza</span>
                    </label>
                  </fieldset>

                  <fieldset>
                    <label className="custom-control custom-checkbox d-block my-2">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        required
                        onChange={e => {
                          console.log(e);
                        }}
                        checked
                      />
                      <span className="custom-control-indicator" />
                      <span className="custom-control-description">Pasta</span>
                    </label>
                  </fieldset>

                  <fieldset disabled>
                    <label className="custom-control custom-checkbox d-block my-2">
                      <input type="checkbox" className="custom-control-input" required />
                      <span className="custom-control-indicator" />
                      <span className="custom-control-description">Burgers</span>
                    </label>
                  </fieldset>

                  <fieldset disabled>
                    <label className="custom-control custom-checkbox d-block my-2">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        required
                        onChange={e => {
                          console.log(e);
                        }}
                        checked
                      />
                      <span className="custom-control-indicator" />
                      <span className="custom-control-description">Tacos</span>
                    </label>
                  </fieldset>
                </div>
                <div className="custom-controls-example col-md-4 col-sm-4 col-xs-12">
                  <h6 className="text-muted mb-2">Radio Buttons</h6>
                  <fieldset>
                    <label className="custom-control custom-radio d-block my-2">
                      <input
                        id="radioStacked-1"
                        name="radio-stacked"
                        type="radio"
                        className="custom-control-input"
                        required
                      />
                      <span className="custom-control-indicator" />
                      <span className="custom-control-description">Cookies</span>
                    </label>
                  </fieldset>

                  <fieldset>
                    <label className="custom-control custom-radio d-block my-2">
                      <input
                        id="radioStacked-2"
                        name="radio-stacked"
                        type="radio"
                        className="custom-control-input"
                        required
                        onChange={e => {
                          console.log(e);
                        }}
                        checked
                      />
                      <span className="custom-control-indicator" />
                      <span className="custom-control-description">Pancakes</span>
                    </label>
                  </fieldset>

                  <fieldset disabled>
                    <label className="custom-control custom-radio d-block my-2">
                      <input
                        id="radioStacked-3"
                        name="radio-stacked"
                        type="radio"
                        className="custom-control-input"
                        required
                      />
                      <span className="custom-control-indicator" />
                      <span className="custom-control-description">Chocolate</span>
                    </label>
                  </fieldset>

                  <fieldset disabled>
                    <label className="custom-control custom-radio d-block my-2">
                      <input
                        id="radioStacked-4"
                        name="radio-stacked"
                        type="radio"
                        className="custom-control-input"
                        required
                        onChange={e => {
                          console.log(e);
                        }}
                        checked
                      />
                      <span className="custom-control-indicator" />
                      <span className="custom-control-description">Milkshake</span>
                    </label>
                  </fieldset>
                </div>
                <div className="custom-controls-example col-md-4 col-sm-4 col-xs-12 pl-4">
                  <h6 className="text-muted mb-1">Toggles</h6>
                  <fieldset>
                    <label className="custom-control custom-toggle d-block my-2">
                      <input type="checkbox" className="custom-control-input" required />
                      <span className="custom-control-indicator" />
                      <span className="custom-control-description">Rockets</span>
                    </label>
                  </fieldset>

                  <fieldset>
                    <label className="custom-control custom-toggle d-block my-2">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        required
                        onChange={e => {
                          console.log(e);
                        }}
                        checked
                      />
                      <span className="custom-control-indicator" />
                      <span className="custom-control-description">Lasers</span>
                    </label>
                  </fieldset>

                  <fieldset disabled="disabled">
                    <label className="custom-control custom-toggle d-block my-2">
                      <input type="checkbox" className="custom-control-input" required />
                      <span className="custom-control-indicator" />
                      <span className="custom-control-description">HAL 9K</span>
                    </label>
                  </fieldset>

                  <fieldset disabled="disabled">
                    <label className="custom-control custom-toggle d-block my-2">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        required
                        onChange={e => {
                          console.log(e);
                        }}
                        checked
                      />
                      <span className="custom-control-indicator" />
                      <span className="custom-control-description">Ultron</span>
                    </label>
                  </fieldset>
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-md-6 pl-0 custom-dropdown-example">
                  <h6 className="text-muted mb-3">Custom Dropdown</h6>
                  <fieldset>
                    <select className="custom-select w-100" required>
                      <option value="">Select Favourite Number</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </fieldset>
                </div>

                <div className="col-md-6 pl-0">
                  <h6 className="text-muted mb-3">Custom File Input</h6>
                  <fieldset>
                    <label className="custom-file w-100">
                      <input
                        type="file"
                        id="form-file-3"
                        className="custom-file-input"
                        required=""
                      />
                      <span className="custom-file-control" />
                    </label>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="cards" className="container mb-2" style={cardStyles}>
          <div className="section-title col-lg-8 col-md-10 ml-auto mr-auto mb-5">
            <h3 className="mb-4">Cards</h3>
            <p>
              We wanted cards to stand out and bring depth without changing their original
              structure. All of this while allowing them to play well with the other components.
            </p>
          </div>

          <div className="example col-md-12 ml-auto mr-auto">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="../../../lib/shards/images/demo/stock-photos/3.jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Sample Card Title</h4>
                    <p className="card-text">
                      He seems sinking under the evidence could not only grieve and a visit. The
                      father is to bless and placed in his length hid...
                    </p>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 mb-4 sm-hidden">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="../../../lib/shards/images/demo/stock-photos/1.jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Sample Card Title</h4>
                    <p className="card-text">
                      He seems sinking under the evidence could not only grieve and a visit. The
                      father is to bless and placed in his length hid...
                    </p>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 mb-4 sm-hidden">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="../../../lib/shards/images/demo/stock-photos/2.jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Sample Card Title</h4>
                    <p className="card-text">
                      He seems sinking under the evidence could not only grieve and a visit. The
                      father is to bless and placed in his length hid...
                    </p>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 d-none sm-hidden last">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="../../../lib/shards/images/demo/stock-photos/2.jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Sample Card Title</h4>
                    <p className="card-text">
                      He seems sinking under the evidence could not only grieve and a visit. The
                      father is to bless and placed in his length hid...
                    </p>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="progress-bars" className="container">
          <div className="section-title col-lg-8 col-md-10 mb-5">
            <h3 className="mb-4">Progress Bars</h3>

            <p>
              In addition to the default styles Shards allows you to adjust the width and add labels
              to your progress bars.
            </p>
          </div>

          <div className="example col-lg-9 col-md-12 ml-auto mr-auto px-0">
            <div className="row">
              <div className="col-md-6 pb-widths">
                <h6 className="text-muted">Widths</h6>
                <div className="progress progress-sm mb-4">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={progressBar.seventyFive}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
                <div className="progress mb-4">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={progressBar.seventyFive}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
                <div className="progress progress-lg">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={progressBar.seventyFive}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <h6 className="text-muted">Labels</h6>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={progressBar.twenty}
                    aria-valuenow="20"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    20%
                  </div>
                </div>

                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={progressBar.fifty}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    50%
                  </div>
                </div>

                <div className="progress">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={progressBar.seventy}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    70%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="modals" className="container">
          <div className="section-title col-lg-8 col-md-10 mb-5">
            <h3 className="mb-4">Modals</h3>
            <p>
              Display confirmation messages, forms or any type of content to your users using
              beautiful and non-disruptive modals.
            </p>
          </div>

          <div className="mb-5">
            <button
              type="button"
              className="btn btn-primary btn-lg d-table ml-auto mr-auto"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              ✋ Click Me!
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      🤔 Think about it
                    </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    Triggering this action might affect you later.
                    <strong>Do you still want to continue?</strong>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">
                      Nope
                    </button>
                    <button type="button" className="btn btn-success" data-dismiss="modal">
                      Yep
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="badges" className="container">
          <div className="section-title col-lg-8 col-md-10 mb-5">
            <h3 className="mb-4">Tags</h3>
            <p>
              Tags are similar to buttons and are available in all theme colors with filled and
              outlined modes and also with three variation styles: rounded, pill-shaped and squared.
            </p>
          </div>

          <div className="example col-md-10 ml-auto mr-auto mb-5 pb-4">
            <div className="row mb-3">
              <div className="d-table ml-auto mr-auto">
                <span className="badge mr-3 badge-primary">Primary</span>
                <span className="badge mr-3 badge-outline-secondary">Secondary</span>
                <span className="badge mr-3 badge-pill badge-success">Success</span>
                <span className="badge mr-3 badge-pill badge-outline-danger">Danger</span>
                <span className="badge mr-3 badge-squared badge-warning">Warning</span>
                <span className="badge mr-3 badge-squared badge-outline-info">Info</span>
              </div>
            </div>
          </div>
        </div>

        <div id="popups-popovers" className="container">
          <div className="section-title col-lg-8 col-md-10 mb-5">
            <h3 className="mb-4">Tooltips & Popovers</h3>
            <p>
              Don't let your uses guess by attaching tooltips and popoves to any element. Just make
              sure you enable them first via JavaScript.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-10 col-md-10 ml-auto mr-auto mb-5 pb-4">
              <div className="row ml-auto mr-auto">
                <div className="col-lg-6 col-md-12 mb-">
                  <h5 className="text-muted mb-4 d-block">Tooltips</h5>

                  <button
                    type="button"
                    className="btn btn-primary mr-1"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="I'm on top! 👆"
                  >
                    Top
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary mr-1"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="I'm at the bottom! 👇"
                  >
                    Bottom
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary mr-1"
                    data-toggle="tooltip"
                    data-placement="Left"
                    title="I'm on the left! 👈"
                  >
                    Left
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary mr-1"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="I'm on the right! 👉"
                  >
                    Right
                  </button>
                </div>

                <div className="col-lg-6 col-md-12">
                  <h5 className="text-muted mb-4">Popovers</h5>
                  <button
                    type="button"
                    className="btn btn-secondary mr-1"
                    data-container="body"
                    data-toggle="popover"
                    data-placement="top"
                    data-content="On top of things!"
                  >
                    Top
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary mr-1"
                    data-container="body"
                    data-toggle="popover"
                    data-placement="bottom"
                    data-content="🙃 I'm down here!"
                  >
                    Bottom
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary mr-1"
                    data-container="body"
                    data-toggle="popover"
                    data-placement="left"
                    data-content="Oh! What's left then? 🤔"
                  >
                    Left
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary mr-1"
                    data-container="body"
                    data-toggle="popover"
                    data-placement="right"
                    data-content="I'm always right! 😎"
                  >
                    Right
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="alerts">
          <div className="container">
            <div className="section-title col-lg-8 col-md-10 mb-5">
              <h3 className="mb-4">Alerts</h3>
            </div>
          </div>

          <div className="mb-5">
            <div className="alert alert-info alert-dismissible fade show" role="alert">
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <i className="fa fa-info" />
              <strong>Hey!</strong> I think you should know this.
            </div>

            <div className="alert alert-success alert-dismissible fade show" role="alert">
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <i className="fa fa-check" />
              <strong>Yay!</strong> Everything is fine!
            </div>

            <div className="alert alert-warning alert-dismissible fade show" role="alert">
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <i className="fa fa-warning" />
              <strong>Oops!</strong> Something might be wrong
            </div>

            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <i className="fa fa-exclamation-circle" />
              <strong>On no!</strong> Something really bad happened!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Status.propTypes = {
  /** Description of prop "content". */
  content: string,
  /** Description of prop "primary". */
  primary: bool,
  /** Description of prop "secondary". */
  secondary: bool
};
