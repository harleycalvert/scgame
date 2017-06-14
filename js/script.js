

function token_circle(smiley) {
  var smile = document.createElement("img");
  smile.setAttribute('src', smiley);
  smile.setAttribute('alt', 'Smiley face');
  smile.setAttribute('id', i);
  smile.setAttribute('onclick', 'move_c(id)');
  document.getElementById('circle_home').appendChild(smile);
  
}

function token_square(smiley_s) {
  var smile_s = document.createElement('img');
  smile_s.setAttribute('src', smiley_s);
  smile_s.setAttribute('alt', 'Smiley face');
  smile_s.setAttribute('id', j);
  smile_s.setAttribute('onclick', 'move_s(id)');
  document.getElementById('square_home').appendChild(smile_s);
}







function start() {
  //add 4 cloning them, then add number 5, the one we search for
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
  document.getElementById("c1").appendChild(document.getElementById(i));
  document.getElementById(i).style.zIndex = 1;
}

function move_to_c2(i) {
  document.getElementById("c2").appendChild(document.getElementById(i));  
  document.getElementById(i).style.zIndex = 1;
}

function move_to_c3(i) {
  document.getElementById("c3").appendChild(document.getElementById(i));  
  document.getElementById(i).style.zIndex = 1;
}

function move_to_c4(i) {
  document.getElementById("c4").appendChild(document.getElementById(i));  
  document.getElementById(i).style.zIndex = 1;
}

function move_to_c5(i) {
  document.getElementById("c5").appendChild(document.getElementById(i));  
  document.getElementById(i).style.zIndex = 1;
}

function move_to_c6(i) {
  document.getElementById("c6").appendChild(document.getElementById(i));  
  document.getElementById(i).style.zIndex = 1;
}

function move_to_c7(i) {
  document.getElementById("c7").appendChild(document.getElementById(i));  
  document.getElementById(i).style.zIndex = 1;
}

function move_to_c8(i) {
  document.getElementById("c8").appendChild(document.getElementById(i));  
  document.getElementById(i).style.zIndex = 1;
}

function move_to_c9(i) {
  document.getElementById("c9").appendChild(document.getElementById(i));  
  document.getElementById(i).style.zIndex = 1;
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
  document.getElementById("s1").appendChild(document.getElementById(j));
  document.getElementById(j).style.zIndex = 1;
}

function move_to_s2(j) {
  document.getElementById("s2").appendChild(document.getElementById(j));  
  document.getElementById(j).style.zIndex = 1;
}

function move_to_s3(j) {
  document.getElementById("s3").appendChild(document.getElementById(j));  
  document.getElementById(j).style.zIndex = 1;
}

function move_to_s4(j) {
  document.getElementById("s4").appendChild(document.getElementById(j));  
  document.getElementById(j).style.zIndex = 1;
}

function move_to_s5(j) {
  document.getElementById("s5").appendChild(document.getElementById(j));  
  document.getElementById(j).style.zIndex = 1;
}

function move_to_s6(j) {
  document.getElementById("s6").appendChild(document.getElementById(j));  
  document.getElementById(j).style.zIndex = 1;
}

function move_to_s7(j) {
  document.getElementById("s7").appendChild(document.getElementById(j));  
  document.getElementById(j).style.zIndex = 1;
}

function move_to_s8(j) {
  document.getElementById("s8").appendChild(document.getElementById(j));  
  document.getElementById(j).style.zIndex = 1;
}

function move_to_s9(j) {
  document.getElementById("s9").appendChild(document.getElementById(j));  
  document.getElementById(j).style.zIndex = 1;
}







