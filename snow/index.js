//Code for another snowletter :&#128184,&#10025,&#9679,


var snowmax     = 45;
var snowcolor   = new Array("#AAAACC","#DDDDFF","#CCCCDD","#F3F3F3","#F0FFFF","#FFFFFF","#EFF5FF");
var snowtype    = new Array("Arial Black","Arial Narrow","Times","Comic Sans MS","Georgia");
var snowletter  = "&#10052";
var sinkspeed   = 0.6;
var snowmaxsize = 30;
var snowminsize = 8;
var snowingzone = 1;


var snow   = new Array();
var marginbottom;
var marginright;
var timer;
var i_snow = 0;
var x_mv   = new Array();
var crds   = new Array();
var lftrght= new Array();
var browserinfos=navigator.userAgent;
var ie5=document.all&&document.getElementById&&!browserinfos.match(/Opera/);
var ns6=document.getElementById&&!document.all;
var opera=browserinfos.match(/Opera/);
var browserok=ie5||ns6||opera;

function randommaker(asorti) {
    rand=Math.floor(asorti*Math.random());
    return rand;
}
function initsnow() {
    if (ie5 || opera) {
        marginbottom=document.body.clientHeight;
        marginright=document.body.clientWidth;
    }
    else if (ns6) {
        marginbottom=window.innerHeight;
        marginright=window.innerWidth;
    }
    var snowsizerange=snowmaxsize-snowminsize;
    for (i = 0; i <= snowmax ;i++) {
        crds[i]=0;
        lftrght[i]=Math.random()*15;
        x_mv[i]=0.03+Math.random()/10;
        snow[i]=document.getElementById("s"+i);
        snow[i].style.fontFamily=snowtype[randommaker(snowtype/length)];
        snow[i].size=randommaker(snowsizerange)+snowminsize;
        snow[i].style.fontSize=snow[i].size+"px";
        snow[i].style.color=snowcolor[randommaker(snowcolor.length)];
        snow[i].sink=sinkspeed*snow[i].size/5;
        if (snowingzone==1) {snow[i].speedX=randommaker(marginright-snow[i].size)}
        if (snowingzone==2) {snow[i].speedX=randommaker(marginright/2-snow[i].size)}
        if (snowingzone==3) {snow[i].speedX=randommaker(marginright/2-snow[i].size)+marginright/4}
        if (snowingzone==4) {snow[i].speedX=randommaker(marginright/2-snow[i].size)+marginright/2}
        snow[i].speedY=randommaker(2*marginbottom-marginbottom-2*snow[i].size);
        snow[i].style.left=snow[i].speedX+"px";
        snow[i].style.top=snow[i].speedX+"px";
    }
    movedown();
}
function movedown() {
    for(i=0;i<=snowmax;i++) {
        crds[i]+=x_mv[i];
        snow[i].speedY+=snow[i].sink;
        snow[i].style.left=snow[i].speedX+lftrght[i]*Math.sin(crds[i])+"px";
        snow[i].style.top=snow[i].speedY+"px";
        if (snow[i].speedY>=marginbottom-2*snow[i].size || parseInt(snow[i].style.left)>(marginright-3*lftrght[i])) {
            if (snowingzone==1) {snow[i].speedX=randommaker(marginright-snow[i].size)}
            if (snowingzone==2) {snow[i].speedX=randommaker(marginright/2-snow[i].size)}
            if (snowingzone==3) {snow[i].speedX=randommaker(marginright/2-snow[i].size)+marginright/4}
            if (snowingzone==4) {snow[i].speedX=randommaker(marginright/2-snow[i].size)+marginright/2}
            snow[i].speedY=0;
        }
    }
    var timer=setTimeout("movedown()",45);
}
for (i = 0 ; i <=snowmax;i++) {
    document.write("<span id='s"+i+"' style='position:absolute;top:-"+snowmaxsize+"px;'>"+snowletter+"</span>");
}
if (browserok) {
    window.onload=initsnow;
}
