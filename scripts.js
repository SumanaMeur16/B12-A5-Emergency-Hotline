
function message(Data){
    let totalCoins = document.getElementById("coins")
    let nowCoins = totalCoins.innerText - 20;
    

    if(totalCoins.innerText < 20){
        alert("Insufficient Coin Balance")
    }
    else{
       let serviceName = document.getElementById(Data).querySelector("h2").innerText;
       let serviceNumber = document.getElementById(Data).querySelector("h3").innerText;
       alert(`Calling ${serviceName} at ${serviceNumber}`)
        totalCoins.textContent = nowCoins
    }
}

function makeACall(Data){
    message(Data)
    let serviceName = document.getElementById(Data).querySelector("h2").innerText;
    let serviceNumber = document.getElementById(Data).querySelector("h3").innerText;
    const now = new Date();
    const myTime = now.toLocaleTimeString();

    let newCallHistory = document.getElementById("callHistory")
    newCallHistory.innerHTML += `<div class="bg-slate-100 rounded-lg w-full flex items-center px-4 py-3 my-2">
                        <div class="w-2/3 text-start">
                            <p class="font-bold">${serviceName}</p>
                            <p>${serviceNumber}</p>
                        </div>
                        <div class="w-1/3 text-center">
                           ${myTime}
                        </div>
                    </div>`   
   
    
}

function clearHistory(){
    let clearCallHistory = document.getElementById("callHistory")
    clearCallHistory.innerHTML = "";

}

function heart(){
    let heartCountIncrease = document.getElementById("heart-count");
    let increase = Number(heartCountIncrease.innerText) +1;
    heartCountIncrease.textContent = increase
}

function copybtn(copyB){
    let copyButton = document.getElementById(copyB).querySelector("h3").innerText;
    let cB = String(copyButton);
    navigator.clipboard.writeText(cB);
    alert(`Copied Number ${copyButton}`)
}
