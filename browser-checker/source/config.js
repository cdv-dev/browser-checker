var allowedBrowsers = [
  {
      name : "Chrome",
      minVersion : 38,
      downloadLink : "//www.google.com/chrome/browser/",
      iconLink : "../source/img/chrome.png",
      regexp : /(chrome)[ \/]([\w.]+)/i
   },
   {
       name : "Firefox",
       minVersion : 0,
       downloadLink : "//www.mozilla.org/ru/firefox/",
       iconLink : "../source/img/firefox.png",
       regexp : /(firefox)[\/]([\w.]+)/i
   },
    {
        name : "Safari",
        minVersion : 0,
        downloadLink : "//www.apple.com/safari/",
        iconLink : "../source/img/safari.png",
        regexp : /(safari)[\/]([\w.]+)/i
    },
    {
        name : "Opera",
        minVersion : 0,
        downloadLink : "//www.opera.com/",
        iconLink : "../source/img/opera.png",
        regexp : /(opera)(?:.*version|)[ \/]([\w.]+)/i
    },
    {
        name : "IE",
        minVersion : 9,
        downloadLink : "//windows.microsoft.com/ru-ru/internet-explorer/download-ie",
        iconLink : "../source/img/ie.png",
        regexp : /(msie)|(?:rv:)([\s][\w.]+|[\w.]+)/i  ///(msie|rv:)([\s][\w.]+|[\w.]+)/i  ///(msie) ([\w.]+)/
    }
];


var locres = {
    p1 : "Ваш браузер не поддерживается.",
    p2 : "Для продолжения работы с сайтом используйте любой из указанных браузеров:"
};