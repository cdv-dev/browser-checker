var allowedBrowsers = [
  {
      name : "Chrome",
      minVersion : 0,
      downloadLink : "",
      iconLink : "../source/img/chrome.png",
      regexp : /(chrome)[ \/]([\w.]+)/
   },
   {
       name : "Firefox",
       minVersion : 0,
       downloadLink : "",
       iconLink : "../source/img/firefox.png",
       regexp : /(firefox)[\/]([\w.]+)/
   },
    {
        name : "Safari",
        minVersion : 0,
        downloadLink : "",
        iconLink : "../source/img/safari.png",
        regexp : /(safari)[\/]([\w.]+)/
    },
    {
        name : "Opera",
        minVersion : 0,
        downloadLink : "",
        iconLink : "../source/img/opera.png",
        regexp : /(opera)(?:.*version|)[ \/]([\w.]+)/
    },
    {
        name : "IE",
        minVersion : 0,
        downloadLink : "",
        iconLink : "../source/img/ie.png",
        regexp : /(msie) ([\w.]+)/
    }
];


var locres = {
    p1 : "Ваш браузер не поддерживается.",
    p2 : "Для продолжения работы с сайтом используйте любой из указанных браузеров:"
};