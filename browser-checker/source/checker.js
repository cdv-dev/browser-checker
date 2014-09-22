/**
 * @author Dmitriy V. Chernysh
 * @version 2014.09.22
 *
 * Библиотека для проверки версии браузера.
 * Если браузер не поддерживается, выводится сообщение со ссылками для загрузки браузера.
 * Текст сообщения, поддерживаемые браузеры и их версии настраиваются в source/config.js .
 *
 */
"use strict";

(function(){
    var ua = window.navigator.userAgent.toLowerCase();

    var fnCheck = function() {
        var b = false, i;
        for (i = 0; i < allowedBrowsers.length; i++) {
            var match = allowedBrowsers[i].regexp.exec(ua);
            if (match !== null) {
                if (match[1] === allowedBrowsers[i].name.toLowerCase()) {
                }
                if (parseFloat(match[2]) > parseFloat(allowedBrowsers[i].minVersion)) {
                    b = true;
                }
                break;
            }
        }
        return b;
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