

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
  one_c.setAttribute('onclick', 'move_to_one_c(image_c)');
  two_c.setAttribute('onclick', 'move_to_two_c(image_c)');
  three_c.setAttribute('onclick', 'move_to_three_c(imag_c)');
  four_c.setAttribute('onclick', 'move_to_four_c(image_c)');
  five_c.setAttribute('onclick', 'move_to_five_c(image_c)');
  six_c.setAttribute('onclick', 'move_to_six_c(image_c)');
  seven_c.setAttribute('onclick', 'move_to_seven_c(image_c)');
  eight_c.setAttribute('onclick', 'move_to_eight_c(image_c)');
  nine_c.setAttribute('onclick', 'move_to_nine_c(image_c)');
}

function move_to_one_c(i) {
  document.getElementById("one_c").appendChild(document.getElementById(i));
  document.getElementById(i).style.zIndex = 1;
}

function move_to_two_c(i) {
  document.getElementById("two_c").appendChild(document.getElementById(i));  
  document.getElementById(i).style.zIndex = 1;
}

function move_to_three_c(i) {
  document.getElementById("three_c").appendChild(document.getElementById(i));  
  document.getElementById(i).style.zIndex = 1;
}

function move_to_four_c(i) {
  document.getElementById("four_c").appendChild(document.getElementById(i));  
  document.getElementById(i).style.zIndex = 1;
}

function move_to_five_c(i) {
  document.getElementById("five_c").appendChild(document.getElementById(i));  
  document.getElementById(i).style.zIndex = 1;
}

function move_to_six_c(i) {
  document.getElementById("six_c").appendChild(document.getElementById(i));  
  document.getElementById(i).style.zIndex = 1;
}

function move_to_seven_c(i) {
  document.getElementById("seven_c").appendChild(document.getElementById(i));  
  document.getElementById(i).style.zIndex = 1;
}

function move_to_eight_c(i) {
  document.getElementById("eight_c").appendChild(document.getElementById(i));  
  document.getElementById(i).style.zIndex = 1;
}

function move_to_nine_c(i) {
  document.getElementById("nine_c").appendChild(document.getElementById(i));  
  document.getElementById(i).style.zIndex = 1;
}




function move_s(j) {
  this.image_s = j;
  one_s.setAttribute('onclick', 'move_to_one_s(image_s)');
  two_s.setAttribute('onclick', 'move_to_two_s(image_s)');
  three_s.setAttribute('onclick', 'move_to_three_s(image_s)');
  four_s.setAttribute('onclick', 'move_to_four_s(image_s)');
  five_s.setAttribute('onclick', 'move_to_five_s(image_s)');
  six_s.setAttribute('onclick', 'move_to_six_s(image_s)');
  seven_s.setAttribute('onclick', 'move_to_seven_s(image_s)');
  eight_s.setAttribute('onclick', 'move_to_eight_s(image_s)');
  nine_s.setAttribute('onclick', 'move_to_nine_s(image_s)');
}

function move_to_one_s(j) {
  document.getElementById("one_s").appendChild(document.getElementById(j));
  document.getElementById(j).style.zIndex = 1;
}

function move_to_two_s(j) {
  document.getElementById("two_s").appendChild(document.getElementById(j));  
  document.getElementById(j).style.zIndex = 1;
}

function move_to_three_s(j) {
  document.getElementById("three_s").appendChild(document.getElementById(j));  
  document.getElementById(j).style.zIndex = 1;
}

function move_to_four_s(j) {
  document.getElementById("four_s").appendChild(document.getElementById(j));  

  document.getElementById(j).style.zIndex = 1;
}

function move_to_five_s(j) {
  document.getElementById("five_s").appendChild(document.getElementById(j));  
  document.getElementById(j).style.zIndex = 1;
}

function move_to_six_s(j) {
  document.getElementById("six_s").appendChild(document.getElementById(j));  
  document.getElementById(j).style.zIndex = 1;
}

function move_to_seven_s(j) {
  document.getElementById("seven_s").appendChild(document.getElementById(j));  
  document.getElementById(j).style.zIndex = 1;
}

function move_to_eight_s(j) {
  document.getElementById("eight_s").appendChild(document.getElementById(j));  
  document.getElementById(j).style.zIndex = 1;
}

function move_to_nine_s(j) {
  document.getElementById("nine_s").appendChild(document.getElementById(j));  
  document.getElementById(j).style.zIndex = 1;
}







