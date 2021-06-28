export const detectOs = () => {
  let OSName="Unknown OS";

  if (navigator.appVersion.indexOf("Win")!==-1) OSName="Windows";
  if (navigator.appVersion.indexOf("Mac")!==-1) OSName="MacOS";
  if (navigator.appVersion.indexOf("X11")!==-1) OSName="UNIX";
  if (navigator.appVersion.indexOf("Linux")!==-1) OSName="Linux";
  if (navigator.userAgent.match(/Android/i)) OSName="Android";
  if (navigator.userAgent.match(/BlackBerry/i)) OSName="BlackBerry";
  if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) OSName="iOS";
  if (navigator.userAgent.match(/Opera Mini/i)) OSName="Opera Mini";

  return OSName;
}

// export function detectBrowser() {
//    // Get the user-agent string
//    let UA = navigator.userAgent;
//    let browser = 'Unknown Browser';
  
//    // Detect Opera
//    if (UA.indexOf("OP")) browser="Opera";

//   // Detect Chrome
//   if (UA.indexOf("Chrome") > -1) browser="Chrome";

//   // Detect Internet Explorer
//   if (UA.indexOf("MSIE") > -1 || UA.indexOf("rv:") > -1) browser="Internet Explorer";
  
//   // Detect Firefox
//   if (UA.indexOf("Firefox")) browser="Firefox";
  
//   // Detect Safari
//   if (UA.indexOf("Safari")) browser="Safari";

//   // // Discard Safari since it also matches Chrome
//   // if ((chromeAgent) && (safariAgent)) 
//   //   safariAgent = false;
      
//   // // Discard Chrome since it also matches Opera     
//   // if ((chromeAgent) && (operaAgent)) 
//   //   chromeAgent = false;

//   return browser;
// }

export function detectBrowser () {

  let browser = 'unknown browser';
  // Opera 8.0+
  if ((!!window.opr && !!window.opr.addons) ||
  !!window.opera ||
  navigator.userAgent.indexOf(' OPR/') >= 0) browser = 'Opera';

  // Firefox 1.0+
  if (typeof InstallTrigger !== 'undefined') browser = 'firefox';

  // Safari 3.0+ "[object HTMLElementConstructor]"
  if(/constructor/i.test(window.HTMLElement) ||
  (function(p) {
    return p.toString() === '[object SafariRemoteNotification]';
  })(!window['safari'] || (typeof safari !== 'undefined' && window.safari.pushNotification))) browser = 'Safari';

  // Internet Explorer 6-11
  if (/*@cc_on!@*/ false || !!document.documentMode) browser = 'IE';

  // Edge 20+
  if (browser !== 'IE' && !!window.StyleMedia) browser = 'Edge';

  // Chrome 1 - 79
  if (!!window.chrome
    //  && (!!window.chrome.webstore || !!window.chrome.runtime)
     ) browser = 'Chrome';

  // Edge (based on chromium) detection
  if (browser === 'Chrome' && navigator.userAgent.indexOf('Edg') !== -1) browser = 'EdgeChromium';

  // // Blink engine detection
  // var isBlink = (isChrome || isOpera) && !!window.CSS;

  return browser;
  
}