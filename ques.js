function ta() {
    var a = document.getElementById('t1');
    if (a.checked == 1) {
        document.getElementById('t').innerHTML = "True";
        document.getElementById('t').style.color = 'green';
    }else if(a.checked == 0){
        document.getElementById('t').innerHTML="";
    }

}
 document.getElementById('opt').addEventListener('click',Mouse);
 function Mouse(){
    document.getElementById('f1').innerHTML='false'
    document.getElementById('f1').style.color='red'
 }
 document.getElementById('opt2').addEventListener('click',Mouse2);
 function Mouse2(){
    document.getElementById('f2').innerHTML='false'
    document.getElementById('f2').style.color='red'
 }
 document.getElementById('opt3').addEventListener('click',Mouse3);
 function Mouse3(){
    document.getElementById('f3').innerHTML='false'
    document.getElementById('f3').style.color='red'
 }

function ta1(){
    document.getElementById('t2').innerHTML='True'
    document.getElementById('t2').style.color='green'
}
document.getElementById('opt4').addEventListener('click',Mouse4);
function Mouse4(){
   document.getElementById('t3').innerHTML='false'
   document.getElementById('t3').style.color='red'
}
document.getElementById('opt5').addEventListener('click',Mouse5);
function Mouse5(){
   document.getElementById('t4').innerHTML='false'
   document.getElementById('t4').style.color='red'
}
document.getElementById('opt6').addEventListener('click',Mouse6);
function Mouse6(){
   document.getElementById('t5').innerHTML='false'
   document.getElementById('t5').style.color='red'
}

function Amd(){
   document.getElementById('a4').innerText='True';
   document.getElementById('a4').style.color='green';
}
document.getElementById('opt7').addEventListener('click',Mouse7);
function Mouse7(){
   document.getElementById('a1').innerHTML='false';
   document.getElementById('a1').style.color='red';
}
document.getElementById('opt8').addEventListener('click',Mouse8);
function Mouse8(){
   document.getElementById('a2').innerHTML='false';
   document.getElementById('a2').style.color='red';
}
document.getElementById('opt9').addEventListener('click',Mouse9);
function Mouse9(){
   document.getElementById('a3').innerHTML='false';
   document.getElementById('a3').style.color='red';
}

function America(){
   document.getElementById('w1').innerHTML='true'
   document.getElementById('w1').style.color='green'
}
document.getElementById('opt10').addEventListener('click',Mouse10);
function Mouse10(){
   document.getElementById('w2').innerHTML='false'
   document.getElementById('w2').style.color='red'
}
document.getElementById('opt11').addEventListener('click',Mouse11);
function Mouse11(){
   document.getElementById('w3').innerHTML='false'
   document.getElementById('w3').style.color='red'
}
document.getElementById('opt12').addEventListener('click',Mouse12)
function Mouse12(){
   document.getElementById('w4').innerHTML='false'
   document.getElementById('w4').style.color='red'
}

function Bg()
{
   document.getElementById('j1').innerHTML='true'
   document.getElementById('j1').style.color='darkgreen'
}
document.getElementById('opt13').addEventListener('click',Micro)
function Micro(){
   document.getElementById('j2').innerHTML='false'
   document.getElementById('j2').style.color='darkred'
}
document.getElementById('opt14').addEventListener('click',Micro2)
function Micro2(){
   document.getElementById('j3').innerHTML='false'
   document.getElementById('j3').style.color='darkred'
}
document.getElementById('opt15').addEventListener('click',Micro3)
function Micro3(){
   document.getElementById('j4').innerHTML='false'
   document.getElementById('j4').style.color='darkred'
}