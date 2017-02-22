var forEachLine = function (text, handler) {
    var n = text.indexOf('\n');
    while (n > -1) {
        handler(text.substring(0, n));
        text = text.substring(n + 1);
        n = text.indexOf('\n');
    }

    return text;
};


exports.parseLines = function (source) {
    var lines = [];
    var r = forEachLine(source.toString(), lines.push.bind(lines));
    if (r.length) {
        lines.push(r);
    }

    return lines;
};
