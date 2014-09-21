/**
 * @author Dmitriy V. Chernysh
 * @version 2014.09.12
 *
 * Библиотека для проверки версии браузера
 *
 */
"use strict";
/*
function Browser () {
    var ua = window.navigator.userAgent.toLowerCase(),
        browserName    = "Unknown",
        browserVersion = "Unknown";


    //набор рег. выражений для каждого браузера
    var browsers = {
        ie      : /(msie) ([\w.]+)/,
        firefox : /(firefox)[\/]([\w.]+)/,
        opera   : /(opera)(?:.*version|)[ \/]([\w.]+)/,
        chrome  : /(chrome)[ \/]([\w.]+)/,
        safary  :  /(safary)[\/]([\w.]+)/
    };

    var match = browsers.ie.exec(ua) || browsers.firefox.exec(ua) || browsers.opera.exec(ua) || browsers.chrome.exec(ua) || browsers.safary.exec(ua) || [];

    if (typeof match[1] !== "undefined") browserName = match[1];
    if (typeof  match[2] !== "undefined") browserVersion = match[2];

    this.name    =  browserName;
    this.version =  browserVersion;
}

(function(){
    window.browser = new Browser();
}());
*/

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

(function(){
    var ua = window.navigator.userAgent;

    /*TODO: не работают регулярные почему то*/
    var fnCheck = function() {
        for (var a in allowedBrowsers) {

            var match = (allowedBrowsers[a].regexp).exec(ua);
            console.log(match);
            if (match !== null) {
                if (match[1] === allowedBrowsers[a].name.toLowerCase()) {
                    console.log(match[1] + " поддерживается!");
                }
                if (parseFloat(match[2]) > parseFloat(allowedBrowsers[a].minVersion)) {
                    console.log("версия " + match[2] + " поддерживается");
                    return true;
                }
                break;
            }
        }
       // return false;

    };

    var setHtml = function() {
        if (allowedBrowsers.length === 0) return;
        var body = window.document.body;
        var msgDiv = document.createElement("div");
        var div = document.createElement("div");
        var subDiv = document.createElement("div");
        var uaDiv = document.createElement("div");

        var p, a, atrrHref, icon, img;

        uaDiv.style.color = "#b8b8b8";
        uaDiv.innerText = ua;

        msgDiv.style.width = "40%";
        msgDiv.style.marginLeft = "auto";
        msgDiv.style.marginRight = "auto";
        msgDiv.style.textAlign = "center";
        msgDiv.style.marginTop = "50px";
        for (var res in locres) {
            p = document.createElement("p");
            p.style.fontSize = "20px";
            p.innerText = locres[res];
            msgDiv.appendChild(p);
        }
        div.appendChild(msgDiv);

        for (var param in allowedBrowsers) {
            p = document.createElement("p");
            a = document.createElement("a");
            atrrHref = allowedBrowsers[param].downloadLink;
            a.setAttribute("href", (atrrHref !== "") ? atrrHref : "#");
            a.style.fontWeight = "700";
            a.style.fontSize = "24px";
            icon = allowedBrowsers[param].iconLink;
            if (icon !== "") {
                img = document.createElement("img");
                img.setAttribute("src", icon);
                img.style.verticalAlign = "middle";
                img.style.paddingRight = "1em";
                a.appendChild(img);
            }
            a.innerHTML = a.innerHTML + allowedBrowsers[param].name + " " + allowedBrowsers[param].minVersion + "+";
            p.appendChild(a);
            subDiv.appendChild(p);
        }

        subDiv.style.marginLeft = "auto";
        subDiv.style.marginRight = "auto";
        subDiv.style.width = "300px";
        div.appendChild(subDiv);
        div.style.width = "100%";

        body.innerHTML = ""; /*<-- TODO: тут ошибка, видимо DOM не успевает загрузиться*/
        body.appendChild(uaDiv);
        body.style.backgroundColor = "#f8f8f8";
        body.appendChild(div);

    };

    if (!fnCheck()) {
        setHtml();
    }
})();