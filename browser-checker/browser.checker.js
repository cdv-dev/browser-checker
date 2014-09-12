/**
 * @author Dmitriy V. Chernysh
 * @version 2014.09.12
 *
 * Скрипт расширяющий свойства объекта window для получение названия и версии браузера.
 *
 * window.browser.name    - имя браузера
 * window.browser.version - версия браузера
 *
 */
"use strict";

function Browser () {
    var ua = window.navigator.userAgent.toLowerCase();

    //набор рег. выражений для каждого браузера
    var browsers = {
        ie      : /(msie) ([\w.]+)/,
        firefox : /(firefox)[\/]([\w.]+)/,
        opera   : /(opera)(?:.*version|)[ \/]([\w.]+)/,
        chrome  : /(chrome)[ \/]([\w.]+)/,
        safary  :  /(safary)[\/]([\w.]+)/
    };

    var match = browsers.ie.exec(ua) || browsers.firefox.exec(ua) || browsers.opera.exec(ua) || browsers.chrome.exec(ua) || browsers.safary.exec(ua);

    this.name    = match[1];
    this.version = match[2];
}

(function(){
    window.browser = new Browser();
}());

/*
 Chrome      : Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.103 Safari/537.36
 FF          : Mozilla/5.0 (Windows NT 6.1; rv:26.0) Gecko/20100101 Firefox/26.0
 IE8         : Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; InfoPath.3)
 IE11        : Mozilla/5.0 (Windows NT 6.1; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; InfoPath.3; Tablet PC 2.0; rv:11.0) like Gecko
 Opera 24.0  : mozilla/5.0 (windows nt 6.1) applewebkit/537.36 (khtml, like gecko) chrome/37.0.2062.94 safari/537.36 opr/24.0.1558.53
 Opera 11.10 : opera/9.80 (windows nt 5.2; u; ru) presto/2.8.131 version/11.10
 Opera 12.16 : opera/9.80 (windows nt 6.1) presto/2.12.388 version/12.16
 Safari      : mozilla/5.0 (windows nt 6.1) applewebkit/534.57.2 (khtml, like gecko) version/5.1.7 safari/534.57.2
 */
