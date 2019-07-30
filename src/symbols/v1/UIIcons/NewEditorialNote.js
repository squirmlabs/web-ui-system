import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

const SvgIconCustom = global.__UI_SvgIcon__ || SvgIcon;

let NewEditorialNote = props =>
  <SvgIconCustom {...props}>
      <g id="Round-6" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Story-Detail---Editorial" transform="translate(-352.000000, -321.000000)" fill="#30A88F">
              <g id="Group-9" transform="translate(352.000000, 320.000000)">
                  <g id="Icons-/-Box_pencil/dark" transform="translate(0.000000, 1.000000)">
                      <polygon id="Shape" points="12.3208805 13.5125355 2.4633543 13.5125355 2.4633543 3.59369346 6.98121593 3.59369346 9.44662474 1.11243215 0 1.11243215 0 15.9917291 14.7842348 15.9917291 14.7842348 6.4864306 12.3208805 8.96562419"></polygon>
                      <path d="M15.9903653,0.865466541 L15.8166403,0.691741505 C14.8943183,-0.230580502 13.3908071,-0.230580502 12.4653264,0.691741505 C11.5430044,1.61406351 11.5430044,3.11757473 12.4653264,4.04305537 L12.6390514,4.21678041 L15.9903653,0.865466541 L15.9903653,0.865466541 Z" id="Shape" transform="translate(13.881975, 2.108390) scale(-1, 1) translate(-13.881975, -2.108390) "></path>
                      <polygon id="Shape" transform="translate(9.196030, 6.805701) scale(-1, 1) translate(-9.196030, -6.805701) " points="3.9246171 5.01627666 10.9838121 12.0754717 14.4674428 12.0754717 14.4674428 8.59184103 7.40824776 1.53592935"></polygon>
                  </g>
              </g>
          </g>
      </g>
  </SvgIconCustom>;

NewEditorialNote = pure(NewEditorialNote);
NewEditorialNote.uiName = 'SvgIcon';

export default NewEditorialNote;
