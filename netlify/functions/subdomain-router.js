// netlify/functions/subdomain-router.js
// This function handles routing for the subdomains by redirecting to the correct path in the main app
exports.handler = async (event, context) => {
  const hostname = event.headers.host || '';
  const path = event.path || '';
  
  // Extract subdomain from hostname - handle both single and multi-level subdomains
  const hostParts = hostname.split('.');
  const isTestnetSubdomain = hostname.includes('testnet');
  
  // Full request URL for debugging
  console.log(`Request from ${hostname} for path: ${path}`);
  
  // Handle different subdomain patterns
  if (hostname.startsWith('explorer.testnet.') || hostname.startsWith('testnet-explorer.')) {
    // Testnet explorer
    return {
      statusCode: 301,
      headers: {
        'Location': `/testnet/explorer${path}`,
        'Cache-Control': 'no-cache'
      },
      body: ''
    };
  } else if (hostname.startsWith('status.testnet.') || hostname.startsWith('testnet-status.')) {
    // Testnet status
    return {
      statusCode: 301,
      headers: {
        'Location': `/testnet/status${path}`,
        'Cache-Control': 'no-cache'
      },
      body: ''
    };
  } else {
    // Handle regular subdomains
    // Map subdomains to their corresponding paths in the app
    const subdomainMap = {
      'explorer': '/explorer',
      'docs': '/docs',
      'status': '/status',
      'testnet': '/testnet'
    };
    
    // Check if the subdomain is one we're handling
    const subdomain = hostParts[0];
    if (subdomain && subdomainMap[subdomain]) {
      const destPath = subdomainMap[subdomain];
      
      // For docs subdomain, preserve the path structure
      const redirectUrl = subdomain === 'docs' 
        ? `${destPath}${path}` 
        : (path === '/' ? destPath : `${destPath}${path}`);
      
      console.log(`Redirecting to: ${redirectUrl}`);
      
      // Return a redirect response
      return {
        statusCode: 301,
        headers: {
          'Location': redirectUrl,
          'Cache-Control': 'no-cache'
        },
        body: ''
      };
    }
  }
  
  // If not a recognized subdomain, return a general redirect to the main site
  return {
    statusCode: 301,
    headers: {
      'Location': '/',
      'Cache-Control': 'no-cache'
    },
    body: ''
  };
}; 