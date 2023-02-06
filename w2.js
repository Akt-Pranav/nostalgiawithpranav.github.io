var img=["https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/im1.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/hulk.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/im2.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/thor1.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/cap1.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/avg1.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/p2.png","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/im3.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/thor2.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/cap2.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/gg1.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/avg2.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/ant1.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/p3.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/cap3.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/ds1.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/gg2.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/sm1.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/thor3.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/bp1.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/avg3.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/ant2.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/cm1.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/avg4.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/sm2.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/p4.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/bw.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/sct.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/etern.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/sm3.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/ds2.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/thor4.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/bp2.jpg","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/END.png","https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/the_end.png"]
var i=0,id,time=3490;
var audio = new Audio('https://akt-pranav.github.io/nostalgiawithpranav.github.io/music/avg_theme.mp3');
function animated() {
    audio.play();
    document.getElementById("logo").src ="https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/p1.jpg";
    id = setInterval("ss()",time);
}
function ss(){
    if (i==img.length-1) {
        document.getElementById("logo").src ="https://akt-pranav.github.io/nostalgiawithpranav.github.io/images/paisa.png";
        clearInterval(id);
    } 
    else {
        document.getElementById("logo").src = img[i];
        i=(i < img.length - 1)? i+1 : 0;  
        console.log(i); 
    }
    document.getElementById("button").style.display="none"; 
    console.log(i);
}
