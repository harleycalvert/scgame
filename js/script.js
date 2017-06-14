
function start() {
  document.getElementById("rb_2p").checked = true;
  document.getElementById("rb_circle").checked = true;  

  for (i=1; i<4; i++) {
    token_circle('images/red.png');
  } 
  for (i=4; i<7; i++) {
    token_circle('images/yellow.png');
  } 

  for (j=11; j<14; j++) {
    token_square('images/red.png');
  } 
  for (j=14; j<17; j++) {
    token_square('images/yellow.png');
  } 
}

function token_circle(smiley) {
  var smile_c = document.createElement("img");
  smile_c.setAttribute('src', smiley);
  smile_c.setAttribute('alt', 'Smiley face');
  smile_c.setAttribute('id', i);
  smile_c.setAttribute('name', 'c');
  smile_c.setAttribute('onclick', 'move_c(id)');
  document.getElementById('circle_home').appendChild(smile_c);
  
}

function token_square(smiley) {
  var smile_s = document.createElement('img');
  smile_s.setAttribute('src', smiley);
  smile_s.setAttribute('alt', 'Smiley face');
  smile_s.setAttribute('id', j);
  smile_s.setAttribute('name', 's');
  smile_s.setAttribute('onclick', 'move_s(id)');
  document.getElementById('square_home').appendChild(smile_s);
}

function move_c(i) {
  //alert(i);
  this.image_c = i;
  c1.setAttribute('onclick', 'move_to_c1(image_c)');
  c2.setAttribute('onclick', 'move_to_c2(image_c)');
  c3.setAttribute('onclick', 'move_to_c3(image_c)');
  c4.setAttribute('onclick', 'move_to_c4(image_c)');
  c5.setAttribute('onclick', 'move_to_c5(image_c)');
  c6.setAttribute('onclick', 'move_to_c6(image_c)');
  c7.setAttribute('onclick', 'move_to_c7(image_c)');
  c8.setAttribute('onclick', 'move_to_c8(image_c)');
  c9.setAttribute('onclick', 'move_to_c9(image_c)');
}

function move_to_c1(i) {
  if (document.getElementById(i).name == 'c' || document.getElementById(i).name == 'c2' || document.getElementById(i).name == 'c4' || document.getElementById(i).name == 'c5') {
    document.getElementById("c1").appendChild(document.getElementById(i));
    document.getElementById(i).style.zIndex = 1;
    document.getElementById(i).setAttribute('name', 'c1');
  }
}

function move_to_c2(i) {
  if (document.getElementById(i).name == 'c' || document.getElementById(i).name == 'c1' || document.getElementById(i).name == 'c3' || document.getElementById(i).name == 'c5') {
    document.getElementById("c2").appendChild(document.getElementById(i));  
    document.getElementById(i).style.zIndex = 1;
    document.getElementById(i).setAttribute('name', 'c2');
  }
}

function move_to_c3(i) {
  if (document.getElementById(i).name == 'c' || document.getElementById(i).name == 'c2' || document.getElementById(i).name == 'c6' || document.getElementById(i).name == 'c5') {
    document.getElementById("c3").appendChild(document.getElementById(i));  
    document.getElementById(i).style.zIndex = 1;
    document.getElementById(i).setAttribute('name', 'c3');
  }
}

function move_to_c4(i) {
  if (document.getElementById(i).name == 'c' || document.getElementById(i).name == 'c1' || document.getElementById(i).name == 'c7' || document.getElementById(i).name == 'c5') {
    document.getElementById("c4").appendChild(document.getElementById(i));  
    document.getElementById(i).style.zIndex = 1;
    document.getElementById(i).setAttribute('name', 'c4');
  }
}

function move_to_c5(i) {
  if (document.getElementById(i).name == 'c' || document.getElementById(i).name == 'c1' || document.getElementById(i).name == 'c2' || document.getElementById(i).name == 'c3' || document.getElementById(i).name == 'c4' || document.getElementById(i).name == 'c6' || document.getElementById(i).name == 'c7' || document.getElementById(i).name == 'c8' || document.getElementById(i).name == 'c9') {
    document.getElementById("c5").appendChild(document.getElementById(i));  
    document.getElementById(i).style.zIndex = 1;
    document.getElementById(i).setAttribute('name', 'c5');
  }
}

function move_to_c6(i) {
  if (document.getElementById(i).name == 'c' || document.getElementById(i).name == 'c3' || document.getElementById(i).name == 'c9' || document.getElementById(i).name == 'c5') {
    document.getElementById("c6").appendChild(document.getElementById(i));  
    document.getElementById(i).style.zIndex = 1;
    document.getElementById(i).setAttribute('name', 'c6');
  }
}

function move_to_c7(i) {
  if (document.getElementById(i).name == 'c' || document.getElementById(i).name == 'c4' || document.getElementById(i).name == 'c8' || document.getElementById(i).name == 'c5') {
    document.getElementById("c7").appendChild(document.getElementById(i));  
    document.getElementById(i).style.zIndex = 1;
    document.getElementById(i).setAttribute('name', 'c7');
  }
}

function move_to_c8(i) {
  if (document.getElementById(i).name == 'c' || document.getElementById(i).name == 'c7' || document.getElementById(i).name == 'c9' || document.getElementById(i).name == 'c5') {
    document.getElementById("c8").appendChild(document.getElementById(i));  
    document.getElementById(i).style.zIndex = 1;
    document.getElementById(i).setAttribute('name', 'c8');
  }
}

function move_to_c9(i) {
  if (document.getElementById(i).name == 'c' || document.getElementById(i).name == 'c8' || document.getElementById(i).name == 'c6' || document.getElementById(i).name == 'c5') {
    document.getElementById("c9").appendChild(document.getElementById(i));  
    document.getElementById(i).style.zIndex = 1;
    document.getElementById(i).setAttribute('name', 'c9');
  }
}




function move_s(j) {
  this.image_s = j;
  s1.setAttribute('onclick', 'move_to_s1(image_s)');
  s2.setAttribute('onclick', 'move_to_s2(image_s)');
  s3.setAttribute('onclick', 'move_to_s3(image_s)');
  s4.setAttribute('onclick', 'move_to_s4(image_s)');
  s5.setAttribute('onclick', 'move_to_s5(image_s)');
  s6.setAttribute('onclick', 'move_to_s6(image_s)');
  s7.setAttribute('onclick', 'move_to_s7(image_s)');
  s8.setAttribute('onclick', 'move_to_s8(image_s)');
  s9.setAttribute('onclick', 'move_to_s9(image_s)');
}

function move_to_s1(j) {
  if (document.getElementById(j).name == 's' || document.getElementById(j).name == 's2' || document.getElementById(j).name == 's4' || document.getElementById(j).name == 's5') {
    document.getElementById("s1").appendChild(document.getElementById(j));
    document.getElementById(j).style.zIndex = 1;
    document.getElementById(j).setAttribute('name', 's1');
  }
}

function move_to_s2(j) {
  if (document.getElementById(j).name == 's' || document.getElementById(j).name == 's1' || document.getElementById(j).name == 's3' || document.getElementById(j).name == 's5') {
    document.getElementById("s2").appendChild(document.getElementById(j));  
    document.getElementById(j).style.zIndex = 1;
    document.getElementById(j).setAttribute('name', 's2');
  }
}

function move_to_s3(j) {
  if (document.getElementById(j).name == 's' || document.getElementById(j).name == 's2' || document.getElementById(j).name == 's6' || document.getElementById(j).name == 's5') {
    document.getElementById("s3").appendChild(document.getElementById(j));  
    document.getElementById(j).style.zIndex = 1;
    document.getElementById(j).setAttribute('name', 's3');
  }
}

function move_to_s4(j) {
  if (document.getElementById(j).name == 's' || document.getElementById(j).name == 's1' || document.getElementById(j).name == 's7' || document.getElementById(j).name == 's5') {
    document.getElementById("s4").appendChild(document.getElementById(j));  
    document.getElementById(j).style.zIndex = 1;
    document.getElementById(j).setAttribute('name', 's4');
  }
}

function move_to_s5(j) {
  if (document.getElementById(j).name == 's' || document.getElementById(j).name == 's1' || document.getElementById(j).name == 's2' || document.getElementById(j).name == 's3' || document.getElementById(j).name == 's4' || document.getElementById(j).name == 's6' || document.getElementById(j).name == 's7' || document.getElementById(j).name == 's8' || document.getElementById(j).name == 's9') {
    document.getElementById("s5").appendChild(document.getElementById(j));  
    document.getElementById(j).style.zIndex = 1;
    document.getElementById(j).setAttribute('name', 's5');
  }
}

function move_to_s6(j) {
  if (document.getElementById(j).name == 's' || document.getElementById(j).name == 's3' || document.getElementById(j).name == 's9' || document.getElementById(j).name == 's5') {
    document.getElementById("s6").appendChild(document.getElementById(j));  
    document.getElementById(j).style.zIndex = 1;
    document.getElementById(j).setAttribute('name', 's6');
  }
}

function move_to_s7(j) {
  if (document.getElementById(j).name == 's' || document.getElementById(j).name == 's4' || document.getElementById(j).name == 's8' || document.getElementById(j).name == 's5') {
    document.getElementById("s7").appendChild(document.getElementById(j));  
    document.getElementById(j).style.zIndex = 1;
    document.getElementById(j).setAttribute('name', 's7');
  }
}

function move_to_s8(j) {
  if (document.getElementById(j).name == 's' || document.getElementById(j).name == 's7' || document.getElementById(j).name == 's9' || document.getElementById(j).name == 's5') {
    document.getElementById("s8").appendChild(document.getElementById(j));  
    document.getElementById(j).style.zIndex = 1;
    document.getElementById(j).setAttribute('name', 's8');
  }
}

function move_to_s9(j) {
  if (document.getElementById(j).name == 's' || document.getElementById(j).name == 's8' || document.getElementById(j).name == 's6' || document.getElementById(j).name == 's5') {
    document.getElementById("s9").appendChild(document.getElementById(j));  
    document.getElementById(j).style.zIndex = 1;
    document.getElementById(j).setAttribute('name', 's9');
  }
}







