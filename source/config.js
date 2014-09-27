var PageConfigs = function () {
    this.allowedBrowsers = [
        {
            name: "Opera",                          //имя браузера, которое будет отображать пользователю на странице загрузки
            minVersion: 10.5,                       //минимальная версия, ниже которой будет выводится страница загрузки браузера
            downloadLink: "https://www.opera.com/", //откуда загружать браузер
            iconLink: "./img/opera.png",            //иконка к ссылке для загрузки (путь относительно страницы, к которой будет подключена библиотека)
            regexp: /(opera|opr)(?:.*version|)[ \/]([\w.]+)/i //регулярное выражение, по которому определяется наименование и версия браузера
        },
        {
            name: "Safari",
            minVersion: 5,
            downloadLink: "https://www.apple.com/safari/",
            iconLink: "./img/safari.png",
            regexp: /(safari)[\/]([\w.]+)/i
        },
        {
            name: "Chrome",
            minVersion: 10,
            downloadLink: "https://www.google.com/chrome/browser/",
            iconLink: "./img/chrome.png",
            regexp: /(chrome)[ \/]([\w.]+)/i
        },
        {
            name: "Firefox",
            minVersion: 4,
            downloadLink: "https://www.mozilla.org/ru/firefox/",
            iconLink: "./img/firefox.png",
            regexp: /(firefox)[\/]([\w.]+)/i
        },
        {
            name: "IE",
            minVersion: 8,
            downloadLink: "https://windows.microsoft.com/ru-ru/internet-explorer/download-ie",
            iconLink: "./img/ie.png",
            regexp: /(msie|rv:)([\w.]+|[\s\w.]+)/i
        }
    ];

    this.locres = {
        p1: "Ваш браузер не поддерживается.",
        p2: "Для продолжения работы с сайтом используйте любой из указанных браузеров:"
    };
};