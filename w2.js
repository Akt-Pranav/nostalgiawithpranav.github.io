var img=["nostalgiawithpranav.github.io/images/im1.jpg","nostalgiawithpranav.github.io/images/hulk.jpg","nostalgiawithpranav.github.io/images/im2.jpg","nostalgiawithpranav.github.io/images/thor1.jpg","nostalgiawithpranav.github.io/images/cap1.jpg","nostalgiawithpranav.github.io/images/avg1.jpg","nostalgiawithpranav.github.io/images/p2.png","nostalgiawithpranav.github.io/images/im3.jpg","nostalgiawithpranav.github.io/images/thor2.jpg","nostalgiawithpranav.github.io/images/cap2.jpg","nostalgiawithpranav.github.io/images/gg1.jpg","nostalgiawithpranav.github.io/images/avg2.jpg","nostalgiawithpranav.github.io/images/ant1.jpg","nostalgiawithpranav.github.io/images/p3.jpg","nostalgiawithpranav.github.io/images/cap3.jpg","nostalgiawithpranav.github.io/images/ds1.jpg","nostalgiawithpranav.github.io/images/gg2.jpg","nostalgiawithpranav.github.io/images/sm1.jpg","nostalgiawithpranav.github.io/images/thor3.jpg","nostalgiawithpranav.github.io/images/bp1.jpg","nostalgiawithpranav.github.io/images/avg3.jpg","nostalgiawithpranav.github.io/images/ant2.jpg","nostalgiawithpranav.github.io/images/cm1.jpg","nostalgiawithpranav.github.io/images/avg4.jpg","nostalgiawithpranav.github.io/images/sm2.jpg","nostalgiawithpranav.github.io/images/p4.jpg","nostalgiawithpranav.github.io/images/bw.jpg","nostalgiawithpranav.github.io/images/sct.jpg","nostalgiawithpranav.github.io/images/etern.jpg","nostalgiawithpranav.github.io/images/sm3.jpg","nostalgiawithpranav.github.io/images/ds2.jpg","nostalgiawithpranav.github.io/images/thor4.jpg","nostalgiawithpranav.github.io/images/bp2.jpg","nostalgiawithpranav.github.io/images/END.png","nostalgiawithpranav.github.io/images/the_end.png"]
var i=0 ,b,id,time=3490;
var audio = new Audio('nostalgiawithpranav.github.io/music/avg_theme.mp3');
function animated() {
    audio.play();
    document.getElementById("logo").src ="/images/p1.jpg";
    id = setInterval("ss()",time);
}
function ss(){
    if (i==img.length-1) {
        document.getElementById("logo").src ="/images/paisa.png";
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
