function showTime() {
    var date= new Date();
    var hr= date.getHours();
    var min= date.getMinutes();
    var sec= date.getSeconds();
    var session="AM";
    if(hr==0)
    hr=12;
    if(hr>12){
    hr=hr-12;
    session="PM";
    }
    hr<10?hr="0"+hr:hr;
    min<10?min="0"+min:min;
    sec<10?sec="0"+sec:sec;
    document.getElementById('digital-clock1').innerHTML=hr + ":" + min + ":" + sec +session;
    setTimeout(showTime,1000);
}
showTime();