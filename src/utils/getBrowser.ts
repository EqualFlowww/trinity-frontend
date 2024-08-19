export default function getBrowser() {
  const browsers = [
    'Chrome',
    'Opera',
    'WebTV',
    'Whale',
    'Beonex',
    'Chimera',
    'NetPositive',
    'Phoenix',
    'Firefox',
    'Safari',
    'SkipStone',
    'Netscape',
    'Mozilla',
  ];

  const userAgent = window.navigator.userAgent.toLowerCase();

  if (userAgent.includes('edg')) {
    return 'edge';
  }

  if (userAgent.includes('trident') || userAgent.includes('msie')) {
    return 'internet-explorer';
  }

  return (
    browsers.find((browser) => userAgent.includes(browser.toLowerCase())) ||
    'other'
  );
}
