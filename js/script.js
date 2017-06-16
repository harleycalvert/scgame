var cp = false;
var cp_count = 0;

var sp = false;
var sp_count = 0;

var smile_c = document.createElement("img");
var smile_s = document.createElement('img');

var winner_id = null;

var red_c_array = [];
var yellow_c_array = [];

var yellow_smiley_c_id = 3;
var yellow_smiley_c_count = 0;

function start() {
  document.getElementById("rb_circle").checked = true;  
  document.getElementById("rb_2p").checked = true;
  document.getElementById("rb_yellow_c").checked = true;
  document.getElementById("rb_yellow_s").checked = true;

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

  c1.setAttribute('onclick', 'move_to_c1(image_c)');
  c2.setAttribute('onclick', 'move_to_c2(image_c)');
  c3.setAttribute('onclick', 'move_to_c3(image_c)');
  c4.setAttribute('onclick', 'move_to_c4(image_c)');
  c5.setAttribute('onclick', 'move_to_c5(image_c)');
  c6.setAttribute('onclick', 'move_to_c6(image_c)');
  c7.setAttribute('onclick', 'move_to_c7(image_c)');
  c8.setAttribute('onclick', 'move_to_c8(image_c)');
  c9.setAttribute('onclick', 'move_to_c9(image_c)');

  s1.setAttribute('onclick', 'move_to_s1(image_s)');
  s2.setAttribute('onclick', 'move_to_s2(image_s)');
  s3.setAttribute('onclick', 'move_to_s3(image_s)');
  s4.setAttribute('onclick', 'move_to_s4(image_s)');
  s5.setAttribute('onclick', 'move_to_s5(image_s)');
  s6.setAttribute('onclick', 'move_to_s6(image_s)');
  s7.setAttribute('onclick', 'move_to_s7(image_s)');
  s8.setAttribute('onclick', 'move_to_s8(image_s)');
  s9.setAttribute('onclick', 'move_to_s9(image_s)');

  rb_red_c.addEventListener('click', choose_first_c);
  rb_yellow_c.addEventListener('click', choose_first_c);

  rb_red_s.addEventListener('click', choose_first_s);
  rb_yellow_s.addEventListener('click', choose_first_s);
  
  win.addEventListener('click', close);

  //rb_1p.addEventListener('click', random_smiley_c);

}

function on_win(winner) {
  document.getElementById('win').style.display = 'inline-block';
  document.getElementById('win_center').appendChild(winner);
  winner_id = winner.id;
}

function close() {
  console.log("close");
  document.getElementById('win').style.display = 'none'; 

  if (winner_id > 10) {
    for (j=11; j<17; j++) {
      document.getElementById('square_home').appendChild(document.getElementById(j));
      document.getElementById(j).setAttribute('name', 's');
      sp = false;
      sp_count=0;
      document.getElementById("rb_yellow_s").checked = true;
      document.getElementById('s1').name = null;
      document.getElementById('s2').name = null;
      document.getElementById('s3').name = null;
      document.getElementById('s4').name = null;
      document.getElementById('s5').name = null;
      document.getElementById('s6').name = null;
      document.getElementById('s7').name = null;
      document.getElementById('s8').name = null;
      document.getElementById('s9').name = null;
    }
  } else {
    for (i=1; i<7; i++) {
      document.getElementById('circle_home').appendChild(document.getElementById(i));
      document.getElementById(i).setAttribute('name', 'c');
      cp = false;
      cp_count=0;
      yellow_smiley_c_id=3;
      yellow_smiley_c_count=0;
      document.getElementById("rb_yellow_c").checked = true;
      document.getElementById('c1').name = null;
      document.getElementById('c2').name = null;
      document.getElementById('c3').name = null;
      document.getElementById('c4').name = null;
      document.getElementById('c5').name = null;
      document.getElementById('c6').name = null;
      document.getElementById('c7').name = null;
      document.getElementById('c8').name = null;
      document.getElementById('c9').name = null;
    }
  } 

}
//////////////////////////////////////////////////////////////////////////////////////
//1 player

function random_smiley_c() {
  //4,5,6, yellow
  
  var board_c_array = ['c1','c2','c3','c4','c5','c6','c7','c8','c9'];
  var move_c_array = [move_to_c1,move_to_c2,move_to_c3,move_to_c4,move_to_c5,move_to_c6,move_to_c7,move_to_c8,move_to_c9];
  var occupied_c = red_c_array.concat(yellow_c_array);
  //occupied_c.sort();
  var free_c = board_c_array;

  //yellow_c_array;
  //red_c_array;


  //i is the yellow smiley 4, 5 or 6


  if (yellow_smiley_c_count < 3) {
    yellow_smiley_c_id++;
  } else {
    yellow_smiley_c_id = Math.floor(((Math.random() * 3) + 1) + 3);
  }
  yellow_smiley_c_count++;

  
  console.log("yellow_smiley_c_id: " + yellow_smiley_c_id);
  move_c(yellow_smiley_c_id);
  var go  = null;
  //move_to_c5(i);
  //console.log(move_c_array[go]());
  

  for (k=0; k<board_c_array.length; k++) {
    for (j=0; j<occupied_c.length; j++) {
      if (occupied_c[j] == board_c_array[k]) {
        //free_c delete[i]
        free_c[k] = null;
      }
      
    }

  }
 
  var dest = null;
  while (dest == null) {
    go = Math.floor(Math.random() * 9);
    dest = free_c[go];
  }  
  
  console.log("destination: " + dest);
  console.log("go, array index of destination: " + go);
  console.log("occupied: " + occupied_c);
  console.log("free: " + free_c); 
  console.log("yellow_smiley_c_id, the smiley: " + yellow_smiley_c_id);
  //console.log("move_c_array[go]: " + move_c_array[go]); 
  move_c_array[go](yellow_smiley_c_id); 


}


//////////////////////////////////////////////////////////////////////////////////////
//circle

function choose_first_c() {
  if (cp_count==0) {
    if (document.getElementById("rb_yellow_c").checked == true) {
      cp = false;
      console.log('yellow plays first');
    } else {
      cp = true;
      console.log('red plays first');
    }
  }
}

function red_wins_c(winner) {
  console.log("red wins");
  on_win(winner);
}

function yellow_wins_c(winner) {
  console.log("yellow wins");
  on_win(winner);
}

function token_circle(smiley) {
  smile_c = document.createElement("img");
  smile_c.setAttribute('src', smiley);
  smile_c.setAttribute('alt', 'Smiley face');
  smile_c.setAttribute('id', i);
  //name is used to label the location of the smiley c1, c2, c8, etc
  smile_c.setAttribute('name', 'c');
  smile_c.setAttribute('onclick', 'move_c(id)');
  if (i==1 || i==2 || i==3) {
    smile_c.setAttribute('class', 'red_c');
  } else {
    smile_c.setAttribute('class', 'yellow_c');
  }
  document.getElementById('circle_home').appendChild(smile_c); 
}


function move_c(i) {
  console.log(document.getElementById(i).className + " " + cp);
  this.image_c = i;
}

function move_to_c1(i) {
  if (((document.getElementById(i).className == 'red_c') && (cp == true)) || ((document.getElementById(i).className == 'yellow_c') && (cp == false))) {
    if (document.getElementById(i).name == 'c' || document.getElementById(i).name == 'c2' || document.getElementById(i).name == 'c4' || document.getElementById(i).name == 'c5') {
      document.getElementById("c1").appendChild(document.getElementById(i));
      document.getElementById(i).style.zIndex = 1;
      //name c1 is given to the smiley i to keep track of its location which is c1
      document.getElementById(i).setAttribute('name', 'c1');
      document.getElementById('c1').name = document.getElementById(i).className;
      cp_count = 1;
      cp = !cp;
      win_c();
    }
  }


}

function move_to_c2(i) {
  if (((document.getElementById(i).className == 'red_c') && (cp == true)) || ((document.getElementById(i).className == 'yellow_c') && (cp == false))) {
    if (document.getElementById(i).name == 'c' || document.getElementById(i).name == 'c1' || document.getElementById(i).name == 'c3' || document.getElementById(i).name == 'c5') {
      document.getElementById("c2").appendChild(document.getElementById(i));  
      document.getElementById(i).style.zIndex = 1;
      document.getElementById(i).setAttribute('name', 'c2');
      document.getElementById('c2').name = document.getElementById(i).className;
      cp_count = 1;
      cp = !cp;
      win_c();
    }
  }
}

function move_to_c3(i) {
  if (((document.getElementById(i).className == 'red_c') && (cp == true)) || ((document.getElementById(i).className == 'yellow_c') && (cp == false))) {
    if (document.getElementById(i).name == 'c' || document.getElementById(i).name == 'c2' || document.getElementById(i).name == 'c6' || document.getElementById(i).name == 'c5') {
      document.getElementById("c3").appendChild(document.getElementById(i));  
      document.getElementById(i).style.zIndex = 1;
      document.getElementById(i).setAttribute('name', 'c3');
      document.getElementById('c3').name = document.getElementById(i).className;
      cp_count = 1;
      cp = !cp;
      win_c();
    }
  }
}

function move_to_c4(i) {
  if (((document.getElementById(i).className == 'red_c') && (cp == true)) || ((document.getElementById(i).className == 'yellow_c') && (cp == false))) {
    if (document.getElementById(i).name == 'c' || document.getElementById(i).name == 'c1' || document.getElementById(i).name == 'c7' || document.getElementById(i).name == 'c5') {
      document.getElementById("c4").appendChild(document.getElementById(i));  
      document.getElementById(i).style.zIndex = 1;
      document.getElementById(i).setAttribute('name', 'c4');
      document.getElementById('c4').name = document.getElementById(i).className;
      cp_count = 1;
      cp = !cp;
      win_c();
    }
  }
}

function move_to_c5(i) {
  if (((document.getElementById(i).className == 'red_c') && (cp == true)) || ((document.getElementById(i).className == 'yellow_c') && (cp == false))) {
    if (document.getElementById(i).name == 'c' || document.getElementById(i).name == 'c1' || document.getElementById(i).name == 'c2' || document.getElementById(i).name == 'c3' || document.getElementById(i).name == 'c4' || document.getElementById(i).name == 'c6' || document.getElementById(i).name == 'c7' || document.getElementById(i).name == 'c8' || document.getElementById(i).name == 'c9') {
      document.getElementById("c5").appendChild(document.getElementById(i));  
      document.getElementById(i).style.zIndex = 1;
      document.getElementById(i).setAttribute('name', 'c5');
      document.getElementById('c5').name = document.getElementById(i).className;
      cp_count = 1;
      cp = !cp;
      win_c();
    }
  }
}

function move_to_c6(i) {
  if (((document.getElementById(i).className == 'red_c') && (cp == true)) || ((document.getElementById(i).className == 'yellow_c') && (cp == false))) {
    if (document.getElementById(i).name == 'c' || document.getElementById(i).name == 'c3' || document.getElementById(i).name == 'c9' || document.getElementById(i).name == 'c5') {
      document.getElementById("c6").appendChild(document.getElementById(i));  
      document.getElementById(i).style.zIndex = 1;
      document.getElementById(i).setAttribute('name', 'c6');
      document.getElementById('c6').name = document.getElementById(i).className;
      cp_count = 1;
      cp = !cp;
      win_c();
    }
  }
}

function move_to_c7(i) {
  if (((document.getElementById(i).className == 'red_c') && (cp == true)) || ((document.getElementById(i).className == 'yellow_c') && (cp == false))) {
    if (document.getElementById(i).name == 'c' || document.getElementById(i).name == 'c4' || document.getElementById(i).name == 'c8' || document.getElementById(i).name == 'c5') {
      document.getElementById("c7").appendChild(document.getElementById(i));  
      document.getElementById(i).style.zIndex = 1;
      document.getElementById(i).setAttribute('name', 'c7');
      document.getElementById('c7').name = document.getElementById(i).className;
      cp_count = 1;
      cp = !cp;
      win_c();
    }
  }
}

function move_to_c8(i) {
  if (((document.getElementById(i).className == 'red_c') && (cp == true)) || ((document.getElementById(i).className == 'yellow_c') && (cp == false))) {
    if (document.getElementById(i).name == 'c' || document.getElementById(i).name == 'c7' || document.getElementById(i).name == 'c9' || document.getElementById(i).name == 'c5') {
      document.getElementById("c8").appendChild(document.getElementById(i));  
      document.getElementById(i).style.zIndex = 1;
      document.getElementById(i).setAttribute('name', 'c8');
      document.getElementById('c8').name = document.getElementById(i).className;
      cp_count = 1;
      cp = !cp;
      win_c();
    }
  }
}

function move_to_c9(i) {
  if (((document.getElementById(i).className == 'red_c') && (cp == true)) || ((document.getElementById(i).className == 'yellow_c') && (cp == false))) {
    if (document.getElementById(i).name == 'c' || document.getElementById(i).name == 'c8' || document.getElementById(i).name == 'c6' || document.getElementById(i).name == 'c5') {
      document.getElementById("c9").appendChild(document.getElementById(i));  
      document.getElementById(i).style.zIndex = 1;
      document.getElementById(i).setAttribute('name', 'c9');
      document.getElementById('c9').name = document.getElementById(i).className;
      cp_count = 1;
      cp = !cp;
      win_c();
    }
  }
}

function win_c() {
  
  red_c_array = [];
  var rc = document.getElementsByClassName('red_c');
  for (var i = 0; i < rc.length; i++) {
      red_c_array.push(rc[i].name);
  }
  console.log("red smileys located at: " + red_c_array);
  
  yellow_c_array = [];
  var yc = document.getElementsByClassName('yellow_c');
  for (var i = 0; i < yc.length; i++) {
      yellow_c_array.push(yc[i].name);
  }
  console.log("yellow smileys located at: " + yellow_c_array);

  //bottom row red wins
  if ((document.getElementById('c7').name == 'red_c') && (document.getElementById('c8').name == 'red_c') && (document.getElementById('c9').name == 'red_c')) {
    red_wins_c(document.getElementById('1'));
  }

  //middle row horizontal red wins
  if ((document.getElementById('c4').name == 'red_c') && (document.getElementById('c5').name == 'red_c') && (document.getElementById('c6').name == 'red_c')) {
    red_wins_c(document.getElementById('1'));
  }

  //top row red wins
  if ((document.getElementById('c1').name == 'red_c') && (document.getElementById('c2').name == 'red_c') && (document.getElementById('c3').name == 'red_c')) {
    red_wins_c(document.getElementById('1'));
  }

  //left row red wins
  if ((document.getElementById('c1').name == 'red_c') && (document.getElementById('c4').name == 'red_c') && (document.getElementById('c7').name == 'red_c')) {
    red_wins_c(document.getElementById('1'));
  }

  //middle row vertical red wins
  if ((document.getElementById('c2').name == 'red_c') && (document.getElementById('c5').name == 'red_c') && (document.getElementById('c8').name == 'red_c')) {
    red_wins_c(document.getElementById('1'));
  }

  //right row red wins
  if ((document.getElementById('c3').name == 'red_c') && (document.getElementById('c6').name == 'red_c') && (document.getElementById('c9').name == 'red_c')) {
    red_wins_c(document.getElementById('1'));
  }

  //diag row from NW to SE red wins
  if ((document.getElementById('c1').name == 'red_c') && (document.getElementById('c5').name == 'red_c') && (document.getElementById('c9').name == 'red_c')) {
    red_wins_c(document.getElementById('1'));
  }

  //diag row from NE to SW red wins
  if ((document.getElementById('c3').name == 'red_c') && (document.getElementById('c5').name == 'red_c') && (document.getElementById('c7').name == 'red_c')) {
    red_wins_c(document.getElementById('1'));
  }

  //clockwise from N to E red wins
  if ((document.getElementById('c2').name == 'red_c') && (document.getElementById('c3').name == 'red_c') && (document.getElementById('c6').name == 'red_c')) {
    red_wins_c(document.getElementById('1'));
  }

  //clockwise from E to S red wins
  if ((document.getElementById('c6').name == 'red_c') && (document.getElementById('c8').name == 'red_c') && (document.getElementById('c9').name == 'red_c')) {
    red_wins_c(document.getElementById('1'));
  }

  //clockwise from S to W red wins
  if ((document.getElementById('c4').name == 'red_c') && (document.getElementById('c7').name == 'red_c') && (document.getElementById('c8').name == 'red_c')) {
    red_wins_c(document.getElementById('1'));
  }

  //clockwise from W to N red wins
  if ((document.getElementById('c1').name == 'red_c') && (document.getElementById('c2').name == 'red_c') && (document.getElementById('c4').name == 'red_c')) {
    red_wins_c(document.getElementById('1'));
  }

  ///////////////////////////////////////////////////////////////////////////////////////////

  //bottom row yellow wins
  if ((document.getElementById('c7').name == 'yellow_c') && (document.getElementById('c8').name == 'yellow_c') && (document.getElementById('c9').name == 'yellow_c')) {
    yellow_wins_c(document.getElementById('4'));
  }

  //middle row horizontal yellow wins
  if ((document.getElementById('c4').name == 'yellow_c') && (document.getElementById('c5').name == 'yellow_c') && (document.getElementById('c6').name == 'yellow_c')) {
    yellow_wins_c(document.getElementById('4'));
  }

  //top row yellow wins
  if ((document.getElementById('c1').name == 'yellow_c') && (document.getElementById('c2').name == 'yellow_c') && (document.getElementById('c3').name == 'yellow_c')) {
    yellow_wins_c(document.getElementById('4'));
  }

  //left row yellow wins
  if ((document.getElementById('c1').name == 'yellow_c') && (document.getElementById('c4').name == 'yellow_c') && (document.getElementById('c7').name == 'yellow_c')) {
    yellow_wins_c(document.getElementById('4'));
  }

  //middle row vertical yellow wins
  if ((document.getElementById('c2').name == 'yellow_c') && (document.getElementById('c5').name == 'yellow_c') && (document.getElementById('c8').name == 'yellow_c')) {
    yellow_wins_c(document.getElementById('4'));
  }

  //right row yellow wins
  if ((document.getElementById('c3').name == 'yellow_c') && (document.getElementById('c6').name == 'yellow_c') && (document.getElementById('c9').name == 'yellow_c')) {
    yellow_wins_c(document.getElementById('4'));
  }

  //diag row from NW to SE yellow wins
  if ((document.getElementById('c1').name == 'yellow_c') && (document.getElementById('c5').name == 'yellow_c') && (document.getElementById('c9').name == 'yellow_c')) {
    yellow_wins_c(document.getElementById('4'));
  }

  //diag row from NE to SW yellow wins
  if ((document.getElementById('c3').name == 'yellow_c') && (document.getElementById('c5').name == 'yellow_c') && (document.getElementById('c7').name == 'yellow_c')) {
    yellow_wins_c(document.getElementById('4'));
  }

  //clockwise from N to E yellow wins
  if ((document.getElementById('c2').name == 'yellow_c') && (document.getElementById('c3').name == 'yellow_c') && (document.getElementById('c6').name == 'yellow_c')) {
    yellow_wins_c(document.getElementById('4'));
  }

  //clockwise from E to S yellow wins
  if ((document.getElementById('c6').name == 'yellow_c') && (document.getElementById('c8').name == 'yellow_c') && (document.getElementById('c9').name == 'yellow_c')) {
    yellow_wins_c(document.getElementById('4'));
  }

  //clockwise from S to W yellow wins
  if ((document.getElementById('c4').name == 'yellow_c') && (document.getElementById('c7').name == 'yellow_c') && (document.getElementById('c8').name == 'yellow_c')) {
    yellow_wins_c(document.getElementById('4'));
  }

  //clockwise from W to N yellow wins
  if ((document.getElementById('c1').name == 'yellow_c') && (document.getElementById('c2').name == 'yellow_c') && (document.getElementById('c4').name == 'yellow_c')) {
    yellow_wins_c(document.getElementById('4'));
  }

}


//////////////////////////////////////////////////////////////////////////////////////
//square

function choose_first_s() {
  if (sp_count==0) {
    if (document.getElementById("rb_yellow_s").checked == true) {
      sp = false;
      console.log('yellow plays first');
    } else {
      sp = true;
      console.log('red plays first');
    }
  }
}

function red_wins_s(winner) {
  console.log("red wins");
  on_win(winner);
}

function yellow_wins_s(winner) {
  console.log("yellow wins");
  on_win(winner);
}

function token_square(smiley) {
  smile_s = document.createElement('img');
  smile_s.setAttribute('src', smiley);
  smile_s.setAttribute('alt', 'Smiley face');
  smile_s.setAttribute('id', j);
  smile_s.setAttribute('name', 's');
  smile_s.setAttribute('onclick', 'move_s(id)');
  if (j==11 || j==12 || j==13) {
    smile_s.setAttribute('class', 'red_s');
  } else {
    smile_s.setAttribute('class', 'yellow_s');
  }
  document.getElementById('square_home').appendChild(smile_s);
}

function move_s(j) {
  console.log(document.getElementById(j).className + " " + sp);
  this.image_s = j;
}

function move_to_s1(j) {
  if (((document.getElementById(j).className == 'red_s') && (sp == true)) || ((document.getElementById(j).className == 'yellow_s') && (sp == false))) {
    if (document.getElementById(j).name == 's' || document.getElementById(j).name == 's2' || document.getElementById(j).name == 's4' || document.getElementById(j).name == 's5') {
      document.getElementById("s1").appendChild(document.getElementById(j));
      document.getElementById(j).style.zIndex = 1;
      document.getElementById(j).setAttribute('name', 's1');
      document.getElementById('s1').name = document.getElementById(j).className;
      sp_count = 1;
      sp = !sp;
      win_s();
    }
  }
}

function move_to_s2(j) {
  if (((document.getElementById(j).className == 'red_s') && (sp == true)) || ((document.getElementById(j).className == 'yellow_s') && (sp == false))) {
    if (document.getElementById(j).name == 's' || document.getElementById(j).name == 's1' || document.getElementById(j).name == 's3' || document.getElementById(j).name == 's5') {
      document.getElementById("s2").appendChild(document.getElementById(j));  
      document.getElementById(j).style.zIndex = 1;
      document.getElementById(j).setAttribute('name', 's2');
      document.getElementById('s2').name = document.getElementById(j).className;
      sp_count = 1;
      sp = !sp;
      win_s();
    }
  }
}

function move_to_s3(j) {
  if (((document.getElementById(j).className == 'red_s') && (sp == true)) || ((document.getElementById(j).className == 'yellow_s') && (sp == false))) {
    if (document.getElementById(j).name == 's' || document.getElementById(j).name == 's2' || document.getElementById(j).name == 's6' || document.getElementById(j).name == 's5') {
      document.getElementById("s3").appendChild(document.getElementById(j));  
      document.getElementById(j).style.zIndex = 1;
      document.getElementById(j).setAttribute('name', 's3');
      document.getElementById('s3').name = document.getElementById(j).className;
      sp_count = 1;
      sp = !sp;
      win_s();
    }
  }
}

function move_to_s4(j) {
  if (((document.getElementById(j).className == 'red_s') && (sp == true)) || ((document.getElementById(j).className == 'yellow_s') && (sp == false))) {
    if (document.getElementById(j).name == 's' || document.getElementById(j).name == 's1' || document.getElementById(j).name == 's7' || document.getElementById(j).name == 's5') {
      document.getElementById("s4").appendChild(document.getElementById(j));  
      document.getElementById(j).style.zIndex = 1;
      document.getElementById(j).setAttribute('name', 's4');
      document.getElementById('s4').name = document.getElementById(j).className;
      sp_count = 1;
      sp = !sp;
      win_s();
    }
  }
}

function move_to_s5(j) {
  if (((document.getElementById(j).className == 'red_s') && (sp == true)) || ((document.getElementById(j).className == 'yellow_s') && (sp == false))) {
    if (document.getElementById(j).name == 's' || document.getElementById(j).name == 's1' || document.getElementById(j).name == 's2' || document.getElementById(j).name == 's3' || document.getElementById(j).name == 's4' || document.getElementById(j).name == 's6' || document.getElementById(j).name == 's7' || document.getElementById(j).name == 's8' || document.getElementById(j).name == 's9') {
      document.getElementById("s5").appendChild(document.getElementById(j));  
      document.getElementById(j).style.zIndex = 1;
      document.getElementById(j).setAttribute('name', 's5');
      document.getElementById('s5').name = document.getElementById(j).className;
      sp_count = 1;
      sp = !sp;
      win_s();
    }
  }
}

function move_to_s6(j) {
  if (((document.getElementById(j).className == 'red_s') && (sp == true)) || ((document.getElementById(j).className == 'yellow_s') && (sp == false))) {
    if (document.getElementById(j).name == 's' || document.getElementById(j).name == 's3' || document.getElementById(j).name == 's9' || document.getElementById(j).name == 's5') {
      document.getElementById("s6").appendChild(document.getElementById(j));  
      document.getElementById(j).style.zIndex = 1;
      document.getElementById(j).setAttribute('name', 's6');
      document.getElementById('s6').name = document.getElementById(j).className;
      sp_count = 1;
      sp = !sp;
      win_s();
    }
  }
}

function move_to_s7(j) {
  if (((document.getElementById(j).className == 'red_s') && (sp == true)) || ((document.getElementById(j).className == 'yellow_s') && (sp == false))) {
    if (document.getElementById(j).name == 's' || document.getElementById(j).name == 's4' || document.getElementById(j).name == 's8' || document.getElementById(j).name == 's5') {
      document.getElementById("s7").appendChild(document.getElementById(j));  
      document.getElementById(j).style.zIndex = 1;
      document.getElementById(j).setAttribute('name', 's7');
      document.getElementById('s7').name = document.getElementById(j).className;
      sp_count = 1;
      sp = !sp;
      win_s();
    }
  }
}

function move_to_s8(j) {
  if (((document.getElementById(j).className == 'red_s') && (sp == true)) || ((document.getElementById(j).className == 'yellow_s') && (sp == false))) {
    if (document.getElementById(j).name == 's' || document.getElementById(j).name == 's7' || document.getElementById(j).name == 's9' || document.getElementById(j).name == 's5') {
      document.getElementById("s8").appendChild(document.getElementById(j));  
      document.getElementById(j).style.zIndex = 1;
      document.getElementById(j).setAttribute('name', 's8');
      document.getElementById('s8').name = document.getElementById(j).className;
      sp_count = 1;
      sp = !sp;
      win_s();
    }
  }
}

function move_to_s9(j) {
  if (((document.getElementById(j).className == 'red_s') && (sp == true)) || ((document.getElementById(j).className == 'yellow_s') && (sp == false))) {
    if (document.getElementById(j).name == 's' || document.getElementById(j).name == 's8' || document.getElementById(j).name == 's6' || document.getElementById(j).name == 's5') {
      document.getElementById("s9").appendChild(document.getElementById(j));  
      document.getElementById(j).style.zIndex = 1;
      document.getElementById(j).setAttribute('name', 's9');
      document.getElementById('s9').name = document.getElementById(j).className;
      sp_count = 1;
      sp = !sp;
      win_s();
    }
  }
}

function win_s() {

  var rs = document.getElementsByClassName('red_s');
  var red_s_array = [];
  for (var i = 0; i < rs.length; i++) {
      //console.log(x[i].name);
      red_s_array.push(rs[i].name);
  }
  console.log("red smileys located at: " + red_s_array);

  var ys = document.getElementsByClassName('yellow_s');
  var yellow_s_array = [];
  for (var i = 0; i < ys.length; i++) {
      //console.log(x[i].name);
      yellow_s_array.push(ys[i].name);
  }
  console.log("yellow smileys located at: " + yellow_s_array);

  //bottom row red wins
  if ((document.getElementById('s7').name == 'red_s') && (document.getElementById('s8').name == 'red_s') && (document.getElementById('s9').name == 'red_s')) {
    red_wins_s(document.getElementById('11'));
  }

  //middle row horizontal red wins
  if ((document.getElementById('s4').name == 'red_s') && (document.getElementById('s5').name == 'red_s') && (document.getElementById('s6').name == 'red_s')) {
    red_wins_s(document.getElementById('11'));
  }

  //top row red wins
  if ((document.getElementById('s1').name == 'red_s') && (document.getElementById('s2').name == 'red_s') && (document.getElementById('s3').name == 'red_s')) {
    red_wins_s(document.getElementById('11'));
  }

  //left row red wins
  if ((document.getElementById('s1').name == 'red_s') && (document.getElementById('s4').name == 'red_s') && (document.getElementById('s7').name == 'red_s')) {
    red_wins_s(document.getElementById('11'));
  }

  //middle row vertical red wins
  if ((document.getElementById('s2').name == 'red_s') && (document.getElementById('s5').name == 'red_s') && (document.getElementById('s8').name == 'red_s')) {
    red_wins_s(document.getElementById('11'));
  }

  //right row red wins
  if ((document.getElementById('s3').name == 'red_s') && (document.getElementById('s6').name == 'red_s') && (document.getElementById('s9').name == 'red_s')) {
    red_wins_s(document.getElementById('11'));
  }

  //diag row from top left red wins
  if ((document.getElementById('s1').name == 'red_s') && (document.getElementById('s5').name == 'red_s') && (document.getElementById('s9').name == 'red_s')) {
    red_wins_s(document.getElementById('11'));
  }

  //diag row from top right red wins
  if ((document.getElementById('s3').name == 'red_s') && (document.getElementById('s5').name == 'red_s') && (document.getElementById('s7').name == 'red_s')) {
    red_wins_s(document.getElementById('11'));
  }

  ///////////////////////////////////////////////////////////////////////////////////////////

  //bottom row yellow wins
  if ((document.getElementById('s7').name == 'yellow_s') && (document.getElementById('s8').name == 'yellow_s') && (document.getElementById('s9').name == 'yellow_s')) {
    yellow_wins_s(document.getElementById('14'));
  }

  //middle row horizontal yellow wins
  if ((document.getElementById('s4').name == 'yellow_s') && (document.getElementById('s5').name == 'yellow_s') && (document.getElementById('s6').name == 'yellow_s')) {
    yellow_wins_s(document.getElementById('14'));
  }

  //top row yellow wins
  if ((document.getElementById('s1').name == 'yellow_s') && (document.getElementById('s2').name == 'yellow_s') && (document.getElementById('s3').name == 'yellow_s')) {
    yellow_wins_s(document.getElementById('14'));
  }

  //left row yellow wins
  if ((document.getElementById('s1').name == 'yellow_s') && (document.getElementById('s4').name == 'yellow_s') && (document.getElementById('s7').name == 'yellow_s')) {
    yellow_wins_s(document.getElementById('14'));
  }

  //middle row vertical yellow wins
  if ((document.getElementById('s2').name == 'yellow_s') && (document.getElementById('s5').name == 'yellow_s') && (document.getElementById('s8').name == 'yellow_s')) {
    yellow_wins_s(document.getElementById('14'));
  }

  //right row yellow wins
  if ((document.getElementById('s3').name == 'yellow_s') && (document.getElementById('s6').name == 'yellow_s') && (document.getElementById('s9').name == 'yellow_s')) {
    yellow_wins_s(document.getElementById('14'));
  }

  //diag row from top left yellow wins
  if ((document.getElementById('s1').name == 'yellow_s') && (document.getElementById('s5').name == 'yellow_s') && (document.getElementById('s9').name == 'yellow_s')) {
    yellow_wins_s(document.getElementById('14'));
  }

  //diag row from top right yellow wins
  if ((document.getElementById('s3').name == 'yellow_s') && (document.getElementById('s5').name == 'yellow_s') && (document.getElementById('s7').name == 'yellow_s')) {
    yellow_wins_s(document.getElementById('14'));
  }

}










