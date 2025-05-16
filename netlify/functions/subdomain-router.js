// netlify/functions/subdomain-router.js
exports.handler = async (event, context) => {
  const hostname = event.headers.host;
  const path = event.path;
  
  // Extract subdomain
  const subdomain = hostname.split('.')[0];
  
  // Determine which part of the app to serve
  let appPath;
  switch (subdomain) {
    case 'testnet':
      appPath = '/testnet';
      break;
    case 'explorer':
      appPath = '/explorer';
      break;
    case 'status':
      appPath = '/status';
      break;
    default:
      appPath = '/';
  }
  
  // Rewrite the URL to the correct app path
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: `<!DOCTYPE html>
      <html>
        <head>
          <meta http-equiv="refresh" content="0;url=${appPath}${path}" />
        </head>
        <body>
          Redirecting to ${appPath}${path}...
        </body>
      </html>`
  };
}; 