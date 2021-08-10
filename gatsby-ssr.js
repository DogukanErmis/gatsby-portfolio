import React from 'react';

function onRenderBody({ setPostBodyComponents }) {
  setPostBodyComponents([
    <script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon='{"token": "e560681283bc4ff99a3edb0633301bf7"}'
    />,
  ]);
}

export default onRenderBody;
