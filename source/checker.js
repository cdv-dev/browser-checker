(function(){
    "use strict";
    var ua = window.navigator.userAgent.toLowerCase();
    var cfg = new PageConfigs();

    var fnCheck = function() {
        var b = false, i, j;
        for (i = 0, j = cfg.allowedBrowsers.length; i < j; i++) {
            var match = cfg.allowedBrowsers[i].regexp.exec(ua);
            if (match !== null) {
                if (parseFloat(match[2]) >= parseFloat(cfg.allowedBrowsers[i].minVersion)) {
                    b = true;
                }
                break;
            }
        }
        return b;
    };

    var setHtml = function() {
        if (cfg.allowedBrowsers.length === 0) return;
        var oBody = window.document.body;
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
        for (var res in cfg.locres) {
            p = document.createElement("p");
            p.style.fontSize = "20px";
            p.innerText = cfg.locres[res];
            msgDiv.appendChild(p);
        }
        div.appendChild(msgDiv);

        for (var param in cfg.allowedBrowsers) {
            p = document.createElement("p");
            a = document.createElement("a");
            atrrHref = cfg.allowedBrowsers[param].downloadLink;
            a.setAttribute("href", (atrrHref !== "") ? atrrHref : "#");
            a.style.fontWeight = "700";
            a.style.fontSize = "24px";
            icon = cfg.allowedBrowsers[param].iconLink;
            if (icon !== "") {
                img = document.createElement("img");
                img.setAttribute("src", icon);
                img.style.verticalAlign = "middle";
                img.style.paddingRight = "1em";
                img.style.border = "none";
                a.appendChild(img);
            }
            a.innerHTML = a.innerHTML + cfg.allowedBrowsers[param].name + " " + cfg.allowedBrowsers[param].minVersion + "+";
            p.appendChild(a);
            subDiv.appendChild(p);
        }

        subDiv.style.marginLeft = "auto";
        subDiv.style.marginRight = "auto";
        subDiv.style.width = "300px";
        div.appendChild(subDiv);
        div.style.width = "100%";
        //Clear body
        oBody.innerHTML = "";
        oBody.appendChild(uaDiv);
        oBody.appendChild(div);
        oBody.style.backgroundColor = "#f8f8f8";
    };

    if (!fnCheck()) {
        window.onload = function() {
            setHtml();
        };
    }
})();