var myCredits;
myCredits = Number(localStorage.getItem('credits'));
document.getElementById("myCredits").innerHTML=myCredits;


const creditError = document.getElementById("credit-error-msg");

var r_text = new Array ();
r_text[0] = "You won $3 Voucher at Subway. Code is E259";
r_text[1] = "You won $5 Voucher at Food Club. Code is F763";
r_text[2] = "You won $2 Voucher at any Ngee Ann Poly Location. Code is P094 ";
r_text[3] = "You won $6 Voucher at any Ngee Ann Poly Location. Code is D302 ";
r_text[4] = "You won $4 Voucher at Bookshop. Code is H109 ";
r_text[5] = "You won $3 Voucher at Makan Place. Code is G092 ";
r_text[6] = "You won $3 Voucher at Food Club. Code is X094 ";
r_text[7] = "You won $3 Voucher at Poolside Foodcourt. Code is A922 ";

var i = Math.random();
i = 8 * i;
i = Math.floor(i);
var i = Math.floor(8*Math.random())
document.write(r_text[i]);