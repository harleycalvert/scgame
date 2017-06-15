var cp = false;
var cp_count = 0;

var sp = false;
var sp_count = 0;

var smile_c = document.createElement("img");
var smile_s = document.createElement('img');

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

  rb_red_c.setAttribute('onclick', 'choose_first_c()');
  rb_yellow_c.setAttribute('onclick', 'choose_first_c()');

  rb_red_s.setAttribute('onclick', 'choose_first_s()');
  rb_yellow_s.setAttribute('onclick', 'choose_first_s()');

  
  win.setAttribute('onclick', 'close()');

}

function on_win(winner) {
  document.getElementById('win').style.display = 'inline-block';
  document.getElementById('win_center').appendChild(winner);
}

function close() {
  console.log("close");
  document.getElementById('win').style.display = 'none';
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

function red_wins_c() {
  cp_count=0;
  console.log("red wins");
  //window.location.reload(false);
}

function yellow_wins_c() {
  cp_count=0;
  console.log("yellow wins");
  //window.location.reload(false); 
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
  cp_count++;
}

function move_to_c1(i) {
  if (((document.getElementById(i).className == 'red_c') && (cp == true)) || ((document.getElementById(i).className == 'yellow_c') && (cp == false))) {
    if (document.getElementById(i).name == 'c' || document.getElementById(i).name == 'c2' || document.getElementById(i).name == 'c4' || document.getElementById(i).name == 'c5') {
      document.getElementById("c1").appendChild(document.getElementById(i));
      document.getElementById(i).style.zIndex = 1;
      //name c1 is given to the smiley i to keep track of its location which is c1
      document.getElementById(i).setAttribute('name', 'c1');
      cp = !cp;
    }
  }
}

function move_to_c2(i) {
  if (((document.getElementById(i).className == 'red_c') && (cp == true)) || ((document.getElementById(i).className == 'yellow_c') && (cp == false))) {
    if (document.getElementById(i).name == 'c' || document.getElementById(i).name == 'c1' || document.getElementById(i).name == 'c3' || document.getElementById(i).name == 'c5') {
      document.getElementById("c2").appendChild(document.getElementById(i));  
      document.getElementById(i).style.zIndex = 1;
      document.getElementById(i).setAttribute('name', 'c2');
      cp = !cp;
    }
  }
}

function move_to_c3(i) {
  if (((document.getElementById(i).className == 'red_c') && (cp == true)) || ((document.getElementById(i).className == 'yellow_c') && (cp == false))) {
    if (document.getElementById(i).name == 'c' || document.getElementById(i).name == 'c2' || document.getElementById(i).name == 'c6' || document.getElementById(i).name == 'c5') {
      document.getElementById("c3").appendChild(document.getElementById(i));  
      document.getElementById(i).style.zIndex = 1;
      document.getElementById(i).setAttribute('name', 'c3');
      cp = !cp;
    }
  }
}

function move_to_c4(i) {
  if (((document.getElementById(i).className == 'red_c') && (cp == true)) || ((document.getElementById(i).className == 'yellow_c') && (cp == false))) {
    if (document.getElementById(i).name == 'c' || document.getElementById(i).name == 'c1' || document.getElementById(i).name == 'c7' || document.getElementById(i).name == 'c5') {
      document.getElementById("c4").appendChild(document.getElementById(i));  
      document.getElementById(i).style.zIndex = 1;
      document.getElementById(i).setAttribute('name', 'c4');
      cp = !cp;
    }
  }
}

function move_to_c5(i) {
  if (((document.getElementById(i).className == 'red_c') && (cp == true)) || ((document.getElementById(i).className == 'yellow_c') && (cp == false))) {
    if (document.getElementById(i).name == 'c' || document.getElementById(i).name == 'c1' || document.getElementById(i).name == 'c2' || document.getElementById(i).name == 'c3' || document.getElementById(i).name == 'c4' || document.getElementById(i).name == 'c6' || document.getElementById(i).name == 'c7' || document.getElementById(i).name == 'c8' || document.getElementById(i).name == 'c9') {
      document.getElementById("c5").appendChild(document.getElementById(i));  
      document.getElementById(i).style.zIndex = 1;
      document.getElementById(i).setAttribute('name', 'c5');
      cp = !cp;
    }
  }
}

function move_to_c6(i) {
  if (((document.getElementById(i).className == 'red_c') && (cp == true)) || ((document.getElementById(i).className == 'yellow_c') && (cp == false))) {
    if (document.getElementById(i).name == 'c' || document.getElementById(i).name == 'c3' || document.getElementById(i).name == 'c9' || document.getElementById(i).name == 'c5') {
      document.getElementById("c6").appendChild(document.getElementById(i));  
      document.getElementById(i).style.zIndex = 1;
      document.getElementById(i).setAttribute('name', 'c6');
      cp = !cp;
    }
  }
}

function move_to_c7(i) {
  if (((document.getElementById(i).className == 'red_c') && (cp == true)) || ((document.getElementById(i).className == 'yellow_c') && (cp == false))) {
    if (document.getElementById(i).name == 'c' || document.getElementById(i).name == 'c4' || document.getElementById(i).name == 'c8' || document.getElementById(i).name == 'c5') {
      document.getElementById("c7").appendChild(document.getElementById(i));  
      document.getElementById(i).style.zIndex = 1;
      document.getElementById(i).setAttribute('name', 'c7');
      cp = !cp;
    }
  }
}

function move_to_c8(i) {
  if (((document.getElementById(i).className == 'red_c') && (cp == true)) || ((document.getElementById(i).className == 'yellow_c') && (cp == false))) {
    if (document.getElementById(i).name == 'c' || document.getElementById(i).name == 'c7' || document.getElementById(i).name == 'c9' || document.getElementById(i).name == 'c5') {
      document.getElementById("c8").appendChild(document.getElementById(i));  
      document.getElementById(i).style.zIndex = 1;
      document.getElementById(i).setAttribute('name', 'c8');
      cp = !cp;
    }
  }
}

function move_to_c9(i) {
  if (((document.getElementById(i).className == 'red_c') && (cp == true)) || ((document.getElementById(i).className == 'yellow_c') && (cp == false))) {
    if (document.getElementById(i).name == 'c' || document.getElementById(i).name == 'c8' || document.getElementById(i).name == 'c6' || document.getElementById(i).name == 'c5') {
      document.getElementById("c9").appendChild(document.getElementById(i));  
      document.getElementById(i).style.zIndex = 1;
      document.getElementById(i).setAttribute('name', 'c9');
      cp = !cp;
    }
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
  sp_count=0;
  console.log("red wins");
  on_win(winner);

  //window.location.reload(false);
}

function yellow_wins_s(winner) {
  sp_count=0;
  console.log("yellow wins");
  on_win(winner);
  //window.location.reload(false); 
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
  sp_count++;
}

function move_to_s1(j) {
  if (((document.getElementById(j).className == 'red_s') && (sp == true)) || ((document.getElementById(j).className == 'yellow_s') && (sp == false))) {
    if (document.getElementById(j).name == 's' || document.getElementById(j).name == 's2' || document.getElementById(j).name == 's4' || document.getElementById(j).name == 's5') {
      document.getElementById("s1").appendChild(document.getElementById(j));
      document.getElementById(j).style.zIndex = 1;
      document.getElementById(j).setAttribute('name', 's1');
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
  if (((document.getElementById('11').name == 's7') && (document.getElementById('12').name == 's8') && (document.getElementById('13').name == 's9')) 
    || ((document.getElementById('11').name == 's7') && (document.getElementById('13').name == 's8') && (document.getElementById('12').name == 's9')) 
    || ((document.getElementById('12').name == 's7') && (document.getElementById('11').name == 's8') && (document.getElementById('13').name == 's9')) 
    || ((document.getElementById('12').name == 's7') && (document.getElementById('13').name == 's8') && (document.getElementById('11').name == 's9')) 
    || ((document.getElementById('13').name == 's7') && (document.getElementById('12').name == 's8') && (document.getElementById('11').name == 's9')) 
    || ((document.getElementById('13').name == 's7') && (document.getElementById('11').name == 's8') && (document.getElementById('12').name == 's9'))) {
    red_wins_s(document.getElementById('11'));
  }

  //middle row horizontal red wins
  if (((document.getElementById('11').name == 's4') && (document.getElementById('12').name == 's5') && (document.getElementById('13').name == 's6')) 
    || ((document.getElementById('11').name == 's4') && (document.getElementById('13').name == 's5') && (document.getElementById('12').name == 's6')) 
    || ((document.getElementById('12').name == 's4') && (document.getElementById('11').name == 's5') && (document.getElementById('13').name == 's6')) 
    || ((document.getElementById('12').name == 's4') && (document.getElementById('13').name == 's5') && (document.getElementById('11').name == 's6')) 
    || ((document.getElementById('13').name == 's4') && (document.getElementById('12').name == 's5') && (document.getElementById('11').name == 's6')) 
    || ((document.getElementById('13').name == 's4') && (document.getElementById('11').name == 's5') && (document.getElementById('12').name == 's6'))) {
    red_wins_s(document.getElementById('11'));
  }

  //top row red wins
  if (((document.getElementById('11').name == 's1') && (document.getElementById('12').name == 's2') && (document.getElementById('13').name == 's3')) 
    || ((document.getElementById('11').name == 's1') && (document.getElementById('13').name == 's2') && (document.getElementById('12').name == 's3')) 
    || ((document.getElementById('12').name == 's1') && (document.getElementById('11').name == 's2') && (document.getElementById('13').name == 's3')) 
    || ((document.getElementById('12').name == 's1') && (document.getElementById('13').name == 's2') && (document.getElementById('11').name == 's3')) 
    || ((document.getElementById('13').name == 's1') && (document.getElementById('12').name == 's2') && (document.getElementById('11').name == 's3')) 
    || ((document.getElementById('13').name == 's1') && (document.getElementById('11').name == 's2') && (document.getElementById('12').name == 's3'))) {
    red_wins_s(document.getElementById('11'));
  }

  //left row red wins
  if (((document.getElementById('11').name == 's1') && (document.getElementById('12').name == 's4') && (document.getElementById('13').name == 's7')) 
    || ((document.getElementById('11').name == 's1') && (document.getElementById('13').name == 's4') && (document.getElementById('12').name == 's7')) 
    || ((document.getElementById('12').name == 's1') && (document.getElementById('11').name == 's4') && (document.getElementById('13').name == 's7')) 
    || ((document.getElementById('12').name == 's1') && (document.getElementById('13').name == 's4') && (document.getElementById('11').name == 's7')) 
    || ((document.getElementById('13').name == 's1') && (document.getElementById('12').name == 's4') && (document.getElementById('11').name == 's7')) 
    || ((document.getElementById('13').name == 's1') && (document.getElementById('11').name == 's4') && (document.getElementById('12').name == 's7'))) {
    red_wins_s(document.getElementById('11'));
  }

  //middle row vertical red wins
  if (((document.getElementById('11').name == 's2') && (document.getElementById('12').name == 's5') && (document.getElementById('13').name == 's8')) 
    || ((document.getElementById('11').name == 's2') && (document.getElementById('13').name == 's5') && (document.getElementById('12').name == 's8')) 
    || ((document.getElementById('12').name == 's2') && (document.getElementById('11').name == 's5') && (document.getElementById('13').name == 's8')) 
    || ((document.getElementById('12').name == 's2') && (document.getElementById('13').name == 's5') && (document.getElementById('11').name == 's8')) 
    || ((document.getElementById('13').name == 's2') && (document.getElementById('12').name == 's5') && (document.getElementById('11').name == 's8')) 
    || ((document.getElementById('13').name == 's2') && (document.getElementById('11').name == 's5') && (document.getElementById('12').name == 's8'))) {
    red_wins_s(document.getElementById('11'));
  }

  //right row red wins
  if (((document.getElementById('11').name == 's3') && (document.getElementById('12').name == 's6') && (document.getElementById('13').name == 's9')) 
    || ((document.getElementById('11').name == 's3') && (document.getElementById('13').name == 's6') && (document.getElementById('12').name == 's9')) 
    || ((document.getElementById('12').name == 's3') && (document.getElementById('11').name == 's6') && (document.getElementById('13').name == 's9')) 
    || ((document.getElementById('12').name == 's3') && (document.getElementById('13').name == 's6') && (document.getElementById('11').name == 's9')) 
    || ((document.getElementById('13').name == 's3') && (document.getElementById('12').name == 's6') && (document.getElementById('11').name == 's9')) 
    || ((document.getElementById('13').name == 's3') && (document.getElementById('11').name == 's6') && (document.getElementById('12').name == 's9'))) {
    red_wins_s(document.getElementById('11'));
  }

  //diag row from top left red wins
  if (((document.getElementById('11').name == 's1') && (document.getElementById('12').name == 's5') && (document.getElementById('13').name == 's9')) 
    || ((document.getElementById('11').name == 's1') && (document.getElementById('13').name == 's5') && (document.getElementById('12').name == 's9')) 
    || ((document.getElementById('12').name == 's1') && (document.getElementById('11').name == 's5') && (document.getElementById('13').name == 's9')) 
    || ((document.getElementById('12').name == 's1') && (document.getElementById('13').name == 's5') && (document.getElementById('11').name == 's9')) 
    || ((document.getElementById('13').name == 's1') && (document.getElementById('12').name == 's5') && (document.getElementById('11').name == 's9')) 
    || ((document.getElementById('13').name == 's1') && (document.getElementById('11').name == 's5') && (document.getElementById('12').name == 's9'))) {
    red_wins_s(document.getElementById('11'));
  }

  //diag row from top right red wins
  if (((document.getElementById('11').name == 's3') && (document.getElementById('12').name == 's5') && (document.getElementById('13').name == 's7')) 
    || ((document.getElementById('11').name == 's3') && (document.getElementById('13').name == 's5') && (document.getElementById('12').name == 's7')) 
    || ((document.getElementById('12').name == 's3') && (document.getElementById('11').name == 's5') && (document.getElementById('13').name == 's7')) 
    || ((document.getElementById('12').name == 's3') && (document.getElementById('13').name == 's5') && (document.getElementById('11').name == 's7')) 
    || ((document.getElementById('13').name == 's3') && (document.getElementById('12').name == 's5') && (document.getElementById('11').name == 's7')) 
    || ((document.getElementById('13').name == 's3') && (document.getElementById('11').name == 's5') && (document.getElementById('12').name == 's7'))) {
    red_wins_s(document.getElementById('11'));
  }

  ///////////////////////////////////////////////////////////////////////////////////////////

  //bottom row yellow wins
  if (((document.getElementById('14').name == 's7') && (document.getElementById('15').name == 's8') && (document.getElementById('16').name == 's9')) 
    || ((document.getElementById('14').name == 's7') && (document.getElementById('16').name == 's8') && (document.getElementById('15').name == 's9')) 
    || ((document.getElementById('15').name == 's7') && (document.getElementById('14').name == 's8') && (document.getElementById('16').name == 's9')) 
    || ((document.getElementById('15').name == 's7') && (document.getElementById('16').name == 's8') && (document.getElementById('14').name == 's9')) 
    || ((document.getElementById('16').name == 's7') && (document.getElementById('15').name == 's8') && (document.getElementById('14').name == 's9')) 
    || ((document.getElementById('16').name == 's7') && (document.getElementById('14').name == 's8') && (document.getElementById('15').name == 's9'))) {
    yellow_wins_s(document.getElementById('14'));
  }

  //middle row horizontal yellow wins
  if (((document.getElementById('14').name == 's4') && (document.getElementById('15').name == 's5') && (document.getElementById('16').name == 's6')) 
    || ((document.getElementById('14').name == 's4') && (document.getElementById('16').name == 's5') && (document.getElementById('15').name == 's6')) 
    || ((document.getElementById('15').name == 's4') && (document.getElementById('14').name == 's5') && (document.getElementById('16').name == 's6')) 
    || ((document.getElementById('15').name == 's4') && (document.getElementById('16').name == 's5') && (document.getElementById('14').name == 's6')) 
    || ((document.getElementById('16').name == 's4') && (document.getElementById('15').name == 's5') && (document.getElementById('14').name == 's6')) 
    || ((document.getElementById('16').name == 's4') && (document.getElementById('14').name == 's5') && (document.getElementById('15').name == 's6'))) {
    yellow_wins_s(document.getElementById('14'));
  }

  //top row yellow wins
  if (((document.getElementById('14').name == 's1') && (document.getElementById('15').name == 's2') && (document.getElementById('16').name == 's3')) 
    || ((document.getElementById('14').name == 's1') && (document.getElementById('16').name == 's2') && (document.getElementById('15').name == 's3')) 
    || ((document.getElementById('15').name == 's1') && (document.getElementById('14').name == 's2') && (document.getElementById('16').name == 's3')) 
    || ((document.getElementById('15').name == 's1') && (document.getElementById('16').name == 's2') && (document.getElementById('14').name == 's3')) 
    || ((document.getElementById('16').name == 's1') && (document.getElementById('15').name == 's2') && (document.getElementById('14').name == 's3')) 
    || ((document.getElementById('16').name == 's1') && (document.getElementById('14').name == 's2') && (document.getElementById('15').name == 's3'))) {
    yellow_wins_s(document.getElementById('14'));
  }

  //left row yellow wins
  if (((document.getElementById('14').name == 's1') && (document.getElementById('15').name == 's4') && (document.getElementById('16').name == 's7')) 
    || ((document.getElementById('14').name == 's1') && (document.getElementById('16').name == 's4') && (document.getElementById('15').name == 's7')) 
    || ((document.getElementById('15').name == 's1') && (document.getElementById('14').name == 's4') && (document.getElementById('16').name == 's7')) 
    || ((document.getElementById('15').name == 's1') && (document.getElementById('16').name == 's4') && (document.getElementById('14').name == 's7')) 
    || ((document.getElementById('16').name == 's1') && (document.getElementById('15').name == 's4') && (document.getElementById('14').name == 's7')) 
    || ((document.getElementById('16').name == 's1') && (document.getElementById('14').name == 's4') && (document.getElementById('15').name == 's7'))) {
    yellow_wins_s(document.getElementById('14'));
  }

  //middle row vertical yellow wins
  if (((document.getElementById('14').name == 's2') && (document.getElementById('15').name == 's5') && (document.getElementById('16').name == 's8')) 
    || ((document.getElementById('14').name == 's2') && (document.getElementById('16').name == 's5') && (document.getElementById('15').name == 's8')) 
    || ((document.getElementById('15').name == 's2') && (document.getElementById('14').name == 's5') && (document.getElementById('16').name == 's8')) 
    || ((document.getElementById('15').name == 's2') && (document.getElementById('16').name == 's5') && (document.getElementById('14').name == 's8')) 
    || ((document.getElementById('16').name == 's2') && (document.getElementById('15').name == 's5') && (document.getElementById('14').name == 's8')) 
    || ((document.getElementById('16').name == 's2') && (document.getElementById('14').name == 's5') && (document.getElementById('15').name == 's8'))) {
    yellow_wins_s(document.getElementById('14'));
  }

  //right row yellow wins
  if (((document.getElementById('14').name == 's3') && (document.getElementById('15').name == 's6') && (document.getElementById('16').name == 's9')) 
    || ((document.getElementById('14').name == 's3') && (document.getElementById('16').name == 's6') && (document.getElementById('15').name == 's9')) 
    || ((document.getElementById('15').name == 's3') && (document.getElementById('14').name == 's6') && (document.getElementById('16').name == 's9')) 
    || ((document.getElementById('15').name == 's3') && (document.getElementById('16').name == 's6') && (document.getElementById('14').name == 's9')) 
    || ((document.getElementById('16').name == 's3') && (document.getElementById('15').name == 's6') && (document.getElementById('14').name == 's9')) 
    || ((document.getElementById('16').name == 's3') && (document.getElementById('14').name == 's6') && (document.getElementById('15').name == 's9'))) {
    yellow_wins_s(document.getElementById('14'));
  }

  //diag row from top left yellow wins
  if (((document.getElementById('14').name == 's1') && (document.getElementById('15').name == 's5') && (document.getElementById('16').name == 's9')) 
    || ((document.getElementById('14').name == 's1') && (document.getElementById('16').name == 's5') && (document.getElementById('15').name == 's9')) 
    || ((document.getElementById('15').name == 's1') && (document.getElementById('14').name == 's5') && (document.getElementById('16').name == 's9')) 
    || ((document.getElementById('15').name == 's1') && (document.getElementById('16').name == 's5') && (document.getElementById('14').name == 's9')) 
    || ((document.getElementById('16').name == 's1') && (document.getElementById('15').name == 's5') && (document.getElementById('14').name == 's9')) 
    || ((document.getElementById('16').name == 's1') && (document.getElementById('14').name == 's5') && (document.getElementById('15').name == 's9'))) {
    yellow_wins_s(document.getElementById('14'));
  }

  //diag row from top right yellow wins
  if (((document.getElementById('14').name == 's3') && (document.getElementById('15').name == 's5') && (document.getElementById('16').name == 's7')) 
    || ((document.getElementById('14').name == 's3') && (document.getElementById('16').name == 's5') && (document.getElementById('15').name == 's7')) 
    || ((document.getElementById('15').name == 's3') && (document.getElementById('14').name == 's5') && (document.getElementById('16').name == 's7')) 
    || ((document.getElementById('15').name == 's3') && (document.getElementById('16').name == 's5') && (document.getElementById('14').name == 's7')) 
    || ((document.getElementById('16').name == 's3') && (document.getElementById('15').name == 's5') && (document.getElementById('14').name == 's7')) 
    || ((document.getElementById('16').name == 's3') && (document.getElementById('14').name == 's5') && (document.getElementById('15').name == 's7'))) {
    yellow_wins_s(document.getElementById('14'));
  }

}










