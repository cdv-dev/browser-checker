(function(){
    "use strict";
    var ua = window.navigator.userAgent.toLowerCase();
    var cfg = new PageConfigs();

    var fnCheck = function() {
        var b = false, i, j;
        for (i = 0, j = cfg.allowedBrowsers.length; i < j; i++) {
            var match = cfg.allowedBrowsers[i].regexp.exec(ua);
            if (match !== null) {
                b = (parseFloat(match[2]) >= parseFloat(cfg.allowedBrowsers[i].minVersion));
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

        var p, a, atrrHref, icon, img, span;

        uaDiv.style.color = "#b8b8b8";
        uaDiv.innerHTML = ua;

        msgDiv.style.width = "40%";
        msgDiv.style.position = "relative";
        msgDiv.style.left = "50%";
        msgDiv.style.marginLeft = "-20%";
        msgDiv.style.textAlign = "center";
        msgDiv.style.marginTop = "50px";
        msgDiv.style.paddingBottom = "25px";
        for (var res in cfg.locres) {
            p = document.createElement("p");
            p.style.fontSize = "20px";
            p.innerHTML = cfg.locres[res];
            msgDiv.appendChild(p);
        }
        div.appendChild(msgDiv);

        for (var param in cfg.allowedBrowsers) {
            p = document.createElement("p");
            p.style.padding = "10px";
            a = document.createElement("a");
            a.style.fontSize = "24px"; //для FF
            span = document.createElement("span");
            atrrHref = cfg.allowedBrowsers[param].downloadLink;
            a.setAttribute("href", (atrrHref !== "") ? atrrHref : "#");
            span.style.fontWeight = "700";
            span.style.fontSize = "24px";
            span.style.paddingLeft = "0.5em";
            icon = cfg.allowedBrowsers[param].iconLink;
            if (icon !== "") {
                img = document.createElement("img");
                img.setAttribute("src", icon);
                img.style.verticalAlign = "middle";
                img.style.border = "none";
                a.appendChild(img);
            }
            span.innerHTML = span.innerHTML + cfg.allowedBrowsers[param].name + " " + cfg.allowedBrowsers[param].minVersion + "+";
            a.appendChild(span);
            p.appendChild(a);
            subDiv.appendChild(p);
        }

        subDiv.style.position = "relative";
        subDiv.style.left = "50%";
        subDiv.style.marginLeft = "-150px";
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