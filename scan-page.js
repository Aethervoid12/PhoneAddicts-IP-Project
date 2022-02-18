const redeemButton = document.getElementById("redeem-code-submit");
var myCredits;
myCredits = Number(localStorage.getItem('credits'));
document.getElementById("myCredits").innerHTML=myCredits;
redeemButton.addEventListener("click", (e) => {
    e.preventDefault();
    const redeemCode = redeemReceipt.receipt.value;
    var totalCredits = document.getElementById("credits");
    if (redeemCode === "5"){
         myCredits += 1;
         localStorage.setItem('credits', myCredits.toString());
         location.reload();
        }
    
    })
totalCredits.innerHTML = myCredits;