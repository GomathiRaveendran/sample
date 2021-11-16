function onein(el) {
  el.innerHTML = "About Me";
}
function oneout(el) {
  el.innerHTML = "Gomathi Raveendran";
}

function twoin(el) {
  el.innerHTML = "Blogs, Github and more..";
}
function twoout(el) {
  el.innerHTML = "Aspirations";
}
function threein(el) {
  var d = new Date();
  el.innerHTML =
    "As of " +
    d.getDate() +
    " / " +
    month[d.getMonth()+1] +
    " / " +
    d.getFullYear();
}
function threeout(el) {
  el.innerHTML = "Accomplishments";
}

function frin(el)
{
  document.getElementsByClassName('peek')[0].src=el.href;
  document.getElementsByClassName('peek')[1].src=el.href;
}
function frout() {document.getElementsByClassName('peek')[0].src=''; document.getElementsByClassName('peek')[1].src='';}

var month = [
  "-",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];
