const node=document.getElementById("node");
const king=document.getElementById("imgKing");
const queen=document.getElementById("imgQueen");
const rook=document.getElementById("imgRook");
const bishop=document.getElementById("imgBishop");
const knight=document.getElementById("imgKnight");
const pawn=document.getElementById("imgPawn");
const one=document.getElementById("1");
const two=document.getElementById("2");
const three=document.getElementById("3");
const four=document.getElementById("4");
const five=document.getElementById("5");
const six=document.getElementById("6");
const seven=document.getElementById("7");
const eight=document.getElementById("8");
const nine=document.getElementById("9");
const ten=document.getElementById("10");
const eleven=document.getElementById("11");
const twelve=document.getElementById("12");
const thirteen=document.getElementById("13");
const fourteen=document.getElementById("14");
const fifteen=document.getElementById("15");
const sixteen=document.getElementById("16");
const seventeen=document.getElementById("17");
const eighteen=document.getElementById("18");
const nineteen=document.getElementById("19");
const twenty=document.getElementById("20");
const twentyone=document.getElementById("21");
const twentytwo=document.getElementById("22");
const twentythree=document.getElementById("23");
const twentyfour=document.getElementById("24");
const twentyfive=document.getElementById("25");
const twentysix=document.getElementById("26");
const twentyseven=document.getElementById("27");
const twentyeight=document.getElementById("28");
const twentynine=document.getElementById("29");
const thirdy=document.getElementById("30");
const thirdyone=document.getElementById("31");
const thirdytwo=document.getElementById("32");
const thirdythree=document.getElementById("33");
const thirdyfour=document.getElementById("34");
const thirdyfive=document.getElementById("35");
const thirdysix=document.getElementById("36");
const thirdyseven=document.getElementById("37");
const thirdyeight=document.getElementById("38");
const thirdynine=document.getElementById("39");
const fourty=document.getElementById("40");
const fourtyone=document.getElementById("41");
const fourtytwo=document.getElementById("42");
const fourtythree=document.getElementById("43");
const fourtyfour=document.getElementById("44");
const fourtyfive=document.getElementById("45");
const fourtysix=document.getElementById("46");
const fourtyseven=document.getElementById("47");
const fourtyeight=document.getElementById("48");
const fourtynine=document.getElementById("49");
const fifty=document.getElementById("50");
const fiftyone=document.getElementById("51");
const fiftytwo=document.getElementById("52");
const fiftythree=document.getElementById("53");
const fiftyfour=document.getElementById("54");
const fiftyfive=document.getElementById("55");
const fiftysix=document.getElementById("56");
const fiftyseven=document.getElementById("57");
const fiftyeight=document.getElementById("58");
const fiftynine=document.getElementById("59");
const sixty=document.getElementById("60");
const sixtyone=document.getElementById("61");
const sixtytwo=document.getElementById("62");
const sixtythree=document.getElementById("63");
const sixtyfour=document.getElementById("64");
function graveYard() {
if (node.style.background=="linear-gradient(90deg, black, black, white)") 
{node.style.background="linear-gradient(90deg, white, white, black)";
king.innerHTML="White King";
queen.innerHTML="White Queen";
rook.innerHTML="White Rook";
bishop.innerHTML="White Bishop";
knight.innerHTML="White Knight";
pawn.innerHTML="White Pawn";}
else {
node.style.background="linear-gradient(90deg, black, black, white)";
king.innerHTML="Black King";
queen.innerHTML="Black Queen";
rook.innerHTML="Black Rook";
bishop.innerHTML="Black Bishop";
knight.innerHTML="Black Knight";
pawn.innerHTML="Black Pawn";
}}
function selectKing() {
if
(king.style.background=="yellow") 
{king.style.background="";}
else  {
king.style.background="yellow";
king.style.border="solid 1px";
queen.style.background="";
rook.style.background="";
bishop.style.background="";
knight.style.background="";
pawn.style.background="";}}
function selectQueen() {
if
(queen.style.background=="yellow") 
{queen.style.background="";}
else {
queen.style.background="yellow";
queen.style.border="solid 1px";
king.style.background="";
rook.style.background="";
bishop.style.background="";
knight.style.background="";
pawn.style.background="";}}
function selectRook() {
if
(rook.style.background=="yellow") 
{rook.style.background="";}
else {
rook.style.background="yellow";
rook.style.border="solid 1px";
king.style.background="";
queen.style.background="";
bishop.style.background="";
knight.style.background="";
pawn.style.background="";}}
function selectBishop() {
if
(bishop.style.background=="yellow") 
{bishop.style.background="";}
else {
bishop.style.background="yellow";
bishop.style.border="solid 1px";
king.style.background="";
queen .style.background="";
rook.style.background="";
knight.style.background="";
pawn.style.background="";}}
function selectKnight() {
if
(knight.style.background=="yellow") 
{knight.style.background="";}
else {
knight.style.background="yellow";
knight.style.border="solid 1px";
king.style.background="";
queen.style.background="";
rook.style.background="";
bishop.style.background="";
pawn.style.background="";}}
function selectPawn() {
if
(pawn.style.background=="yellow") 
{pawn.style.background="";}
else {
pawn.style.background="yellow";
pawn.style.border="solid 1px";
king.style.background="";
queen.style.background="";
rook.style.background="";
bishop.style.background="";
knight.style.background="";}}
function placement(element) {
if 
(king.style.background=="yellow" && king.innerHTML=="Black King") 
{element.innerHTML="White King";
king.style.background=""; 
element.style.color="green";}
else if
(queen.style.background=="yellow" && queen.innerHTML=="Black Queen") 
{element.innerHTML="White Queen";
queen.style.background=""; 
element.style.color="green";}
else if
(rook.style.background=="yellow" && rook.innerHTML=="Black Rook") 
{element.innerHTML="White Rook";
rook.style.background=""; 
element.style.color="green";}
else if
(bishop.style.background=="yellow" && bishop.innerHTML=="Black Bishop") 
{element.innerHTML="White Bishop";
bishop.style.background=""; 
element.style.color="green";}
else if
(knight.style.background=="yellow" && knight.innerHTML=="Black Knight") 
{element.innerHTML="White Knight";
knight.style.background=""; 
element.style.color="green";}
else if
(pawn.style.background=="yellow" && pawn.innerHTML=="Black Pawn")
{element.innerHTML="White Pawn";
pawn.style.background=""; 
element.style.color="green";}
else if 
(king.style.background=="yellow") 
{element.innerHTML="Black King";
king.style.background=""; 
element.style.color="blue";}
else if
(queen.style.background=="yellow")
{element.innerHTML="Black Queen";
queen.style.background=""; 
element.style.color="blue";}
else if
(rook.style.background=="yellow") 
{element.innerHTML="Black Rook";
rook.style.background=""; 
element.style.color="blue";}
else if
(bishop.style.background=="yellow") 
{element.innerHTML="Black Bishop";
bishop.style.background=""; 
element.style.color="blue";}
else if
(knight.style.background=="yellow") 
{element.innerHTML="Black Knight";
knight.style.background=""; 
element.style.color="blue";}
else if
(pawn.style.background=="yellow")
{element.innerHTML="Black pawn";
pawn.style.background="";element.style.color="blue";}
else if (element.style.background=="" && node.style.background=="linear-gradient(90deg, black, black, white)") {node.style.background="linear-gradient(90deg, white, white, black)";
element.innerHTML=".";
king.innerHTML="White King"
queen.innerHTML="White Queen";
rook.innerHTML="White Rook";
bishop.innerHTML="White Bishop";
knight.innerHTML="White Knight";
pawn.innerHTML="White Pawn";}
else if (element.style.background=="" && node.style.background=="linear-gradient(90deg, white, white, black)")
{node.style.background="linear-gradient(90deg, black, black, white)";
element.innerHTML=".";
king.innerHTML="Black King";
queen.innerHTML="Black Queen";
rook.innerHTML="Black Rook";
bishop.innerHTML="Black Bishop";
knight.innerHTML="Black Knight";
pawn.innerHTML="Black Pawn";}}
function boardSet() {
one.innerHTML="Black Rook";
one.style.color="blue";
two.innerHTML="Black Knight";
two.style.color="blue";
three.innerHTML="Black Bishop";
three.style.color="blue";
four.innerHTML="Black Queen";
four.style.color="blue";
five.innerHTML="Black King";
five.style.color="blue";
six.innerHTML="Black Bishop";
six.style.color="blue";
seven.innerHTML="Black Knight";
seven.style.color="blue";
eight.innerHTML="Black Rook";
eight.style.color="blue";
nine.innerHTML="Black Pawn";
nine.style.color="blue";
ten.innerHTML="Black Pawn";
ten.style.color="blue";
eleven.innerHTML="Black Pawn";
eleven.style.color="blue";
twelve.innerHTML="Black Pawn";
twelve.style.color="blue";
thirteen.innerHTML="Black Pawn";
thirteen.style.color="blue";
fourteen.innerHTML="Black Pawn";
fourteen.style.color="blue";
fifteen.innerHTML="Black Pawn";
fifteen.style.color="blue";
sixteen.innerHTML="Black Pawn";
sixteen.style.color="blue";
seventeen.innerHTML=".";
eighteen.innerHTML=".";
nineteen.innerHTML=".";
twenty.innerHTML=".";
twentyone.innerHTML=".";
twentytwo.innerHTML=".";
twentythree.innerHTML=".";
twentyfour.innerHTML=".";
twentyfive.innerHTML=".";
twentysix.innerHTML=".";
twentyseven.innerHTML=".";
twentyeight.innerHTML=".";
twentynine.innerHTML=".";
thirdy.innerHTML=".";
thirdyone.innerHTML=".";
thirdytwo.innerHTML=".";
thirdythree.innerHTML=".";
thirdyfour.innerHTML=".";
thirdyfive.innerHTML=".";
thirdysix.innerHTML=".";
thirdyseven.innerHTML=".";
thirdyeight.innerHTML=".";
thirdynine.innerHTML=".";
fourty.innerHTML=".";
fourtyone.innerHTML=".";
fourtytwo.innerHTML=".";
fourtythree.innerHTML=".";
fourtyfour.innerHTML=".";
fourtyfive.innerHTML=".";
fourtysix.innerHTML=".";
fourtyseven.innerHTML=".";
fourtyeight.innerHTML=".";
fourtynine.style.color="green"
fourtynine.innerHTML="White Pawn";
fifty.style.color="green"
fifty.innerHTML="White Pawn";
fiftyone.style.color="green"
fiftyone.innerHTML="White Pawn";
fiftytwo.style.color="green"
fiftytwo.innerHTML="White Pawn";
fiftythree.style.color="green"
fiftythree.innerHTML="White Pawn";
fiftyfour.style.color="green"
fiftyfour.innerHTML="White Pawn";
fiftyfive.style.color="green"
fiftyfive.innerHTML="White Pawn";
fiftysix.style.color="green"
fiftysix.innerHTML="White Pawn";
fiftyseven.style.color="green"
fiftyseven.innerHTML="White Rook";
fiftyeight.style.color="green"
fiftyeight.innerHTML="White Knight";
fiftynine.style.color="green"
fiftynine.innerHTML="White Bishop";
sixty.style.color="green"
sixty.innerHTML="White Queen";
sixtyone.style.color="green"
sixtyone.innerHTML="White King";
sixtytwo.style.color="green"
sixtytwo.innerHTML="White Bishop";
sixtythree.style.color="green"
sixtythree.innerHTML="White Knight";
sixtyfour.style.color="green"
sixtyfour.innerHTML="White Rook";}
node.addEventListener("touchstart", graveYard);
king.addEventListener("touchstart", selectKing);
queen.addEventListener("touchstart", selectQueen);
rook.addEventListener("touchstart", selectRook);
bishop.addEventListener("touchstart", selectBishop);
knight.addEventListener("touchstart", selectKnight);
pawn.addEventListener("touchstart", selectPawn);
one.addEventListener("touchstart", graveYard);
two.addEventListener("touchstart", graveYard);
three.addEventListener("touchstart", graveYard);
four.addEventListener("touchstart", graveYard);
five.addEventListener("touchstart", graveYard);
six.addEventListener("touchstart", graveYard);
seven.addEventListener("touchstart", graveYard);
eight.addEventListener("touchstart", graveYard);
nine.addEventListener("touchstart", graveYard);
ten.addEventListener("touchstart", graveYard);
eleven.addEventListener("touchstart", graveYard);
twelve.addEventListener("touchstart", graveYard);
thirteen.addEventListener("touchstart", graveYard);
fourteen.addEventListener("touchstart", graveYard);
fifteen.addEventListener("touchstart", graveYard);
sixteen.addEventListener("touchstart", graveYard);
seventeen.addEventListener("touchstart", graveYard);
eighteen.addEventListener("touchstart", graveYard);
nineteen.addEventListener("touchstart", graveYard);
twenty.addEventListener("touchstart", graveYard);
twentyone.addEventListener("touchstart", graveYard);
twentytwo.addEventListener("touchstart", graveYard);
twentythree.addEventListener("touchstart", graveYard);
twentyfour.addEventListener("touchstart", graveYard);
twentyfive.addEventListener("touchstart", graveYard);
twentysix.addEventListener("touchstart", graveYard);
twentyseven.addEventListener("touchstart", graveYard);
twentyeight.addEventListener("touchstart", graveYard);
twentynine.addEventListener("touchstart", graveYard);
thirdy.addEventListener("touchstart", graveYard);
thirdyone.addEventListener("touchstart", graveYard);
thirdytwo.addEventListener("touchstart", graveYard);
thirdythree.addEventListener("touchstart", graveYard);
thirdyfour.addEventListener("touchstart", graveYard);
thirdyfive.addEventListener("touchstart", graveYard);
thirdysix.addEventListener("touchstart", graveYard);
thirdyseven.addEventListener("touchstart", graveYard);
thirdyeight.addEventListener("touchstart", graveYard);
thirdynine.addEventListener("touchstart", graveYard);
fourty.addEventListener("touchstart", graveYard);
fourtyone.addEventListener("touchstart", graveYard);
fourtytwo.addEventListener("touchstart", graveYard);
fourtythree.addEventListener("touchstart", graveYard);
fourtyfour.addEventListener("touchstart", graveYard);
fourtyfive.addEventListener("touchstart", graveYard);
fourtysix.addEventListener("touchstart", graveYard);
fourtyseven.addEventListener("touchstart", graveYard);
fourtyeight.addEventListener("touchstart", graveYard);
fourtynine.addEventListener("touchstart", graveYard);
fifty.addEventListener("touchstart", graveYard);
fiftyone.addEventListener("touchstart", graveYard);
fiftytwo.addEventListener("touchstart", graveYard);
fiftythree.addEventListener("touchstart", graveYard);
fiftyfour.addEventListener("touchstart", graveYard);
fiftyfive.addEventListener("touchstart", graveYard);
fiftysix.addEventListener("touchstart", graveYard);
fiftyseven.addEventListener("touchstart", graveYard);
fiftyeight.addEventListener("touchstart", graveYard);
fiftynine.addEventListener("touchstart", graveYard);
sixty.addEventListener("touchstart", graveYard);
sixtyone.addEventListener("touchstart", graveYard);
sixtytwo.addEventListener("touchstart", graveYard);
sixtythree.addEventListener("touchstart", graveYard);
sixtyfour.addEventListener("touchstart", graveYard);