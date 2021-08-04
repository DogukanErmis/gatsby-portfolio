import React from 'react';

function onRenderBody({ setPostBodyComponents }) {
  setPostBodyComponents([
    <script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon='{"token": "4a3ff1fbfc4c45fb8f89616a4e3e44c3"}'
    />,
  ]);
}

export default onRenderBody;
