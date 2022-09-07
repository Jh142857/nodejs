function dataFormat(dataStr) {
    const dt = new Date(dataStr);
    
    const y = padZero(dt.getFullYear());
    const m = padZero(dt.getMonth() + 1);
    const d = padZero(dt.getDate());
    const h = padZero(dt.getHours());
    const mm = padZero(dt.getMinutes());
    const s = padZero(dt.getSeconds());

    return `${y}-${m}-${d} ${h}:${mm}:${s}`
}

function padZero(x) {
    return x < 10 ? '0' + x : x;
}

module.exports = {
    dataFormat
}