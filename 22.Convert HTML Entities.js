function convertHTML(str) {
    let res = str.split("");
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "&":
                res[i] = "&amp;";
                break;
            case "<":
                res[i] = "&lt;";
                break;
            case ">":
                res[i] = "&gt;";
                break;
            case '"':
                res[i] = "&quot;";
                break;
            case "'":
                res[i] = "&apos;";
                break;
        }
    }
    return res.join("");
}

console.log(convertHTML("Dolce & Gabbana"));
