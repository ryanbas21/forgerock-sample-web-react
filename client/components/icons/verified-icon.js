/*
 * forgerock-sample-web-react
 *
 * verified-icon.js
 *
 * Copyright (c) 2021 ForgeRock. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import React from 'react';

/**
 * @function VerifiedIcon - Displays the verified checkmark icon representing the validation
 * @param {Object} props - React props object
 * @param {string} props.classes - A string of classnames to be set on component
 * @param {string} props.size - A string representing the intended size of the rendering
 * @returns {Object} - React JSX Object
 */
export default function VerifiedIcon({ classes = '', size = '24px' }) {
  return (
    <svg
      className={classes}
      height={size}
      width={size}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <rect fill="none" height="20" width="20" />
      </g>
      <g>
        <path d="M18,10l-1.77-2.03l0.25-2.69l-2.63-0.6l-1.37-2.32L10,3.43L7.53,2.36L6.15,4.68L3.53,5.28l0.25,2.69L2,10l1.77,2.03 l-0.25,2.69l2.63,0.6l1.37,2.32L10,16.56l2.47,1.07l1.37-2.32l2.63-0.6l-0.25-2.69L18,10z M8.59,13.07l-2.12-2.12l0.71-0.71 l1.41,1.41l4.24-4.24l0.71,0.71L8.59,13.07z" />
      </g>
    </svg>
  );
}
