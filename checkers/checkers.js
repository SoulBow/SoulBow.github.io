function tile (element) {  
if (element.style.background=="deeppink" && document.getElementById("kingButtonOrange").style.background=="orange") {
element.style.background="orange";
element.style.border="solid black"}

else if (element.style.background=="deeppink" && document.getElementById("kingButtonPurple").style.background=="purple"){
element.style.background="purple";
element.style.border="solid black";}

else if (element.style.background=="black" && document.getElementById("kingButtonOrange").style.background=="orange") {
element.style.background="orange";
element.style.border="solid black"}

else if (element.style.background=="red" && document.getElementById("kingButtonPurple").style.background=="purple"){
element.style.background="purple";
element.style.border="solid black";}

else if (element.style.background=="red" || element.style.background=="black") {
element.style.background="deeppink";
element.style.border="deeppink";}

else if (element.style.background=="orange" || element.style.background=="purple") {
element.style.background="deeppink";
element.style.border="deeppink";}

else if (element.style.background=="deeppink" && document.getElementById("button").style.background=="red") {
element.style.background="red";
element.style.border="solid black"}

else if (element.style.background=="deeppink" && document.getElementById("button").style.background=="black"){
element.style.background="black";
element.style.border="solid black";}}

function color() {
if (document.getElementById("kingButtonPurple").style.background=="purple" || document.getElementById("kingButtonOrange").style.background=="orange") {
document.getElementById("kingButtonPurple").style.background="grey";
document.getElementById("kingButtonOrange").style.background="grey";}
else if (document.getElementById("button").style.background=="red") {document.getElementById("button").style.background="black";
  document.getElementById("button").style.color="red";
  document.getElementById("button").innerHTML="Moving Black";}
else {document.getElementById("button").style.background="red";
document.getElementById("button").style.color="black";
document.getElementById("button").innerHTML="Moving Red";}}

function kingOrange() {
if (document.getElementById("kingButtonOrange").style.background=="grey") {
document.getElementById("kingButtonPurple").style.background="grey";
document.getElementById("kingButtonOrange").style.background="orange";}
else {document.getElementById("kingButtonOrange").style.background="grey";}}

function kingPurple() {
if (document.getElementById("kingButtonPurple").style.background=="grey") {
document.getElementById("kingButtonOrange").style.background="grey";
document.getElementById("kingButtonPurple").style.background="purple";}
else {document.getElementById("kingButtonPurple").style.background="grey";}}

function reset() {
document.getElementById("id1").style.background="red";
document.getElementById("id1").style.border="solid black";
document.getElementById("id2").style.background="red";
document.getElementById("id2").style.border="solid black";
document.getElementById("id3").style.background="red";
document.getElementById("id3").style.border="solid black";
document.getElementById("id4").style.background="red";
document.getElementById("id4").style.border="solid black";
document.getElementById("id5").style.background="red";
document.getElementById("id5").style.border="solid black";
document.getElementById("id6").style.background="red";
document.getElementById("id6").style.border="solid black";
document.getElementById("id7").style.background="red";
document.getElementById("id7").style.border="solid black";
document.getElementById("id8").style.background="red";
document.getElementById("id8").style.border="solid black";
document.getElementById("id9").style.background="red";
document.getElementById("id9").style.border="solid black";
document.getElementById("id10").style.background="red";
document.getElementById("id10").style.border="solid black";
document.getElementById("id11").style.background="red";
document.getElementById("id11").style.border="solid black";
document.getElementById("id12").style.background="red";
document.getElementById("id12").style.border="solid black";
document.getElementById("id21").style.background="black";
document.getElementById("id21").style.border="solid black";
document.getElementById("id22").style.background="black";
document.getElementById("id22").style.border="solid black";
document.getElementById("id23").style.background="black";
document.getElementById("id23").style.border="solid black";
document.getElementById("id24").style.background="black";
document.getElementById("id24").style.border="solid black";
document.getElementById("id25").style.background="black";
document.getElementById("id25").style.border="solid black";
document.getElementById("id26").style.background="black";
document.getElementById("id26").style.border="solid black";
document.getElementById("id27").style.background="black";
document.getElementById("id27").style.border="solid black";
document.getElementById("id28").style.background="black";
document.getElementById("id28").style.border="solid black";
document.getElementById("id29").style.background="black";
document.getElementById("id29").style.border="solid black";
document.getElementById("id30").style.background="black";
document.getElementById("id30").style.border="solid black";
document.getElementById("id31").style.background="black";
document.getElementById("id31").style.border="solid black";
document.getElementById("id32").style.background="black";
document.getElementById("id32").style.border="solid black";
document.getElementById("id13").style.background="deeppink";
document.getElementById("id13").style.border="deeppink";
document.getElementById("id14").style.background="deeppink";
document.getElementById("id14").style.border="deeppink";
document.getElementById("id15").style.background="deeppink";
document.getElementById("id15").style.border="deeppink";
document.getElementById("id16").style.background="deeppink";
document.getElementById("id16").style.border="deeppink";
document.getElementById("id17").style.background="deeppink";
document.getElementById("id17").style.border="deeppink";
document.getElementById("id18").style.background="deeppink";
document.getElementById("id18").style.border="deeppink";
document.getElementById("id19").style.background="deeppink";
document.getElementById("id19").style.border="deeppink";
document.getElementById("id20").style.background="deeppink";
document.getElementById("id20").style.border="deeppink";
}