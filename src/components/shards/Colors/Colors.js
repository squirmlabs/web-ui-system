import React from 'react';
import PropTypes from 'prop-types';
import '../../../../lib/shards/css/shards.css';
// import '../../../lib/shards/scss/shards.scss';
// import '../../../lib/shards/css/shards-demo.css';
import '../../../../lib/shards/scss/shards-demo.scss';

const { bool, string } = PropTypes;

export default function Colors(props) {
  const colors = {
    a: { background: '#202E77' },
    b: { background: '#4864C9' },
    c: { background: '#719FFF' },
    d: { background: '#B9C7F6' },
    e: { background: '#FFE0E6' },
    f: { background: '#FFC1CC' },
    g: { background: '#FF6C77' },
    primary: { background: '#0067f4' },
    secondary: { background: '#5A6169' },
    success: { background: '#17c671' },
    info: { background: '#00b8d8' },
    warning: { background: '#ffb400' },
    danger: { background: '#c4183c' },
    light: { background: '#e9ecef' },
    dark: { background: '#212529' }
  };

  //   $blue-1: #1f3b67;
  // $blue-2: #2e538f;
  // $blue-3: #3467b0;
  // $blue-4: #6598de;
  // $blue-5: #b7cfef;
  // $blue-6: #eaf1fb;
  //
  // $teal-1: #0f6660;
  // $teal-2: #177b66;
  // $teal-3: #30a88f;
  // $teal-4: #3dd2b3;
  // $teal-5: #ebfaf7;
  //
  // $red-1: #99171d;
  // $red-2: #dd0c0c;
  // $red-3: #ff4545;
  // $red-4: #ff9090;
  // $red-5: #fbc8c8;
  //
  // $orange-1: #d06600;
  // $orange-2: #fd891a;
  // $orange-3: #fdb01a;
  // $orange-4: #fed27e;
  // $orange-5: #fff3de;
  //
  // $green-1: #417505;
  // $green-2: #6cb31b;
  // $green-3: #8ae622;
  // $green-4: #b9f277;
  // $green-5: #edffd9;
  //
  // $grey-1: #4A4A4A;
  // $grey-2: #666666;
  // $grey-3: #939393;
  // $grey-4: rgba(34, 36, 38, 0.15);
  // $grey-5: #e8e8e8;
  // $grey-6: #eeeeee;
  // $grey-7: #f4f4f4;

  const blues = [
    { style: { background: '#1f3b67' }, hex: '#1f3b67', name: 'blue100' },
    { style: { background: '#2e538f' }, hex: '#2e538f', name: 'blue200' },
    { style: { background: '#3467b0' }, hex: '#3467b0', name: 'blue300' },
    { style: { background: '#6598de' }, hex: '#6598de', name: 'blue400' },
    { style: { background: '#b7cfef' }, hex: '#b7cfef', name: 'blue500' },
    { style: { background: '#eaf1fb' }, hex: '#eaf1fb', name: 'blue600' }
  ];

  const teals = [
    { style: { background: '#0f6660' }, hex: '#1f3b67', name: 'teal100' },
    { style: { background: '#177b66' }, hex: '#2e538f', name: 'teal200' },
    { style: { background: '#30a88f' }, hex: '#3467b0', name: 'teal300' },
    { style: { background: '#3dd2b3' }, hex: '#6598de', name: 'teal400' },
    { style: { background: '#ebfaf7' }, hex: '#b7cfef', name: 'teal500' }
  ];
  const reds = [
    { style: { background: '#99171d' }, hex: '#99171d', name: 'teal100' },
    { style: { background: '#dd0c0c' }, hex: '#dd0c0c', name: 'teal200' },
    { style: { background: '#ff4545' }, hex: '#ff4545', name: 'teal300' },
    { style: { background: '#ff9090' }, hex: '#ff9090', name: 'teal400' },
    { style: { background: '#fbc8c8' }, hex: '#fbc8c8', name: 'teal500' }
  ];
  const oranges = [
    { style: { background: '#d06600' }, hex: '#d06600', name: 'teal100' },
    { style: { background: '#fd891a' }, hex: '#fd891a', name: 'teal200' },
    { style: { background: '#fdb01a' }, hex: '#fdb01a', name: 'teal300' },
    { style: { background: '#fed27e' }, hex: '#fed27e', name: 'teal400' },
    { style: { background: '#fff3de' }, hex: '#fff3de', name: 'teal500' }
  ];

  const greens = [
    { style: { background: '#417505' }, hex: '#417505', name: 'teal100' },
    { style: { background: '#6cb31b' }, hex: '#6cb31b', name: 'teal200' },
    { style: { background: '#8ae622' }, hex: '#8ae622', name: 'teal300' },
    { style: { background: '#b9f277' }, hex: '#b9f277', name: 'teal400' },
    { style: { background: '#edffd9' }, hex: '#edffd9', name: 'teal500' }
  ];

  const Color = ({ hex, name, style }) => {
    return (
      <div className="color">
        <div className="swatch" style={style} />
        <span className="title">{`${name}`}</span>
        <span className="hex-value">{hex}</span>
      </div>
    );
  };

  const ColorWrapper = ({ color }) => {
    return (
      <div className="color-wrapper col-lg-2 col-md-2 col-sm-2">
        <Color {...color} />
      </div>
    );
  };

  return (
    <div className="page-content">
      <div className="ml-0 container clearfix">
        <div className="mb-5">
          <div className="col-md-12">
            <div className="row">
              {blues.map((color) => {
                return <ColorWrapper color={color} key={color.name} />;
              })}
            </div>
            <div className="row">
              {teals.map((color) => {
                return <ColorWrapper color={color} key={color.name} />;
              })}
            </div>
            <div className="row">
              {reds.map((color) => {
                return <ColorWrapper color={color} key={color.name} />;
              })}
            </div>
            <div className="row">
              {oranges.map((color) => {
                return <ColorWrapper color={color} key={color.name} />;
              })}
            </div>
            <div className="row">
              {greens.map((color) => {
                return <ColorWrapper color={color} key={color.name} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Colors.propTypes = {
  /** Description of prop "content". */
  content: string,
  /** Description of prop "primary". */
  primary: bool,
  /** Description of prop "secondary". */
  secondary: bool
};
