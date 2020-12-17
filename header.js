// START DATE SCRIPT

var showdate	= "yes"  	// SHOW THE DATE | yes | no |

   if (showdate == "yes") {
document.write('<div id="date-location">');
var d=new Date();
var weekday=new Array('Sun','Mon','Tue','Wed','Thu','Fr','Sat');
var monthname=new Array('January','February','March','April','May','June','July','August','September','October','November','December');
document.write('<span class="date-font">' + weekday[d.getDay()] + ', ');
document.write(d.getDate() + ' ');
document.write(monthname[d.getMonth()] + ' ');
document.write(d.getFullYear())
document.write('<br></span>')
document.write('</div>');
}


function clock() {
   let date = new Date();
   let hrs = date.getHours();
   let mins = date.getMinutes();
   let secs = date.getSeconds();
   let period = "AM";
 
   if (hrs == 0) hrs = 12;
   if (hrs > 12) {
     hrs = hrs - 12;
     period = "PM";
   }
 
   hrs = hrs < 10 ? `0${hrs}` : hrs;
   mins = mins < 10 ? `0${mins}` : mins;
   secs = secs < 10 ? `0${secs}` : secs;
 
   let time = `${hrs}:${mins}:${secs} ${period}`;
   setInterval(clock, 1000);
   document.getElementById("clock").innerText = time;
 }
 
clock();