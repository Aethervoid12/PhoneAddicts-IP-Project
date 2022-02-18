const formSubmit = document.getElementById("daily-form-submit")
var myCredits;
myCredits = Number(localStorage.getItem('credits'));
document.getElementById("myCredits").innerHTML=myCredits;

formSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    if(document.getElementById('omurice').checked) {
        myCredits += 1;
         localStorage.setItem('credits', myCredits.toString());
         location.reload();
      }else {

      }
})