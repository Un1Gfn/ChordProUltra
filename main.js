
let req = new XMLHttpRequest();
req.open("GET", "tmp.cho", async=false);
req.send(null);

const parser = new ChordSheetJS.ChordProParser();
const obj = parser.parse(req.responseText);

const formatter = new ChordSheetJS.HtmlDivFormatter();
document.body.innerHTML = formatter.format(obj);
