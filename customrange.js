let fromUserInputEl = document.getElementById("fromUserInput");
let toUserInputEl = document.getElementById("toUserInput");
let counterTextEl = document.getElementById("counterText");
let startBtnEl = document.getElementById("startBtn");

startBtnEl.onclick = function () {
    if (fromUserInputEl.value === "") {
        alert("Enter the from value");
    } else if (toUserInputEl.value === "") {
        alert("Enter the to value");
    } else {
        let fromUserInputNo = parseInt(fromUserInputEl.value);
        let toUserInputNo = parseInt(toUserInputEl.value);
        if (fromUserInputNo < toUserInputNo) {
            counterTextEl.textContent = fromUserInputNo;
            let intervalId = setInterval(function () {
                if (fromUserInputNo > toUserInputNo) {
                    clearInterval(intervalId);
                } else {

                    counterTextEl.textContent = fromUserInputNo;
                    fromUserInputNo += 1;
                }
            }, 1000);
        }
    }
}