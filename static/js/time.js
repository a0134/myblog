function zeroF(n){
    return n >= 10 ? n : '0' + n
}
function getRTime() {
    const StartTime = new Date('2023/01/22 00:00:00'); //开始时间
    const NowTime = new Date();
    const t = NowTime.getTime() - StartTime.getTime();
    const d = Math.floor(t / 1000 / 60 / 60 / 24);
    const h = Math.floor(t / 1000 / 60 / 60 % 24);
    const m = Math.floor(t / 1000 / 60 % 60);
    const s = Math.floor(t / 1000 % 60);

    document.getElementById("t_d").innerHTML = d + " 天";
    document.getElementById("t_h").innerHTML = zeroF(h) + " 时";
    document.getElementById("t_m").innerHTML = zeroF(m) + " 分";
    document.getElementById("t_s").innerHTML = zeroF(s) + " 秒";
}

setInterval(getRTime, 1000);