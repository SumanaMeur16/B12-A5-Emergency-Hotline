
function message(){
    let totalCoins = document.getElementById("coins")
    let nowCoins = totalCoins.innerText - 20;
    totalCoins.textContent = nowCoins
    
    if(coins < 20){
        alert("Insufficient Coin Balance")
    }


    // alert ("button clicked");
}
