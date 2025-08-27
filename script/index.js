function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
// ------------❤️❤️❤️---------//

getElement("card-box").addEventListener("click", function (e) {
  if (e.target.className.includes("heart")) {
    const heartCount = getElement("heart-count").innerText;
    let total = Number(heartCount) + 1;
    getElement("heart-count").innerText = total;
  }
});

// ------------call button----------//

getElement("card-box").addEventListener("click", function (e) {
  if (e.target.className.includes("call-btn")) {
    //  alert("clicked")
    const callBtn = e.target;
    console.log(callBtn);

    const helplineHead = callBtn.parentNode.parentNode.children[1].innerText;
    console.log(helplineHead);

    const helplineNum = callBtn.parentNode.parentNode.children[3].innerText;
    console.log(helplineNum);

    const timeNow = new Date().toLocaleTimeString();

    //    ---------------🪙🪙🪙🪙------------//
    const totalCoin = getElement("coin-count").innerText;
    if (totalCoin < 20) {
      alert("Insufficient Coin");
      return;
    }
    console.log(totalCoin);
    const currentCoin = Number(totalCoin) - 20;
    getElement("coin-count").innerText = currentCoin;

    alert(helplineHead + ": " + helplineNum);

    //   --------------history box----------//

    const historyCont = getElement("history-box");
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
          <div
              class="flex items-center justify-between p-4 bg-[#FAFAFA] my-1 rounded-lg"
            >
              <div>
                <h2 class="text-lg">${helplineHead}</h2>
                <p class="text-[#5C5C5C]">${helplineNum}</p>
              </div>
              <!-- time -->
              <div>
                <p>${timeNow}</p>
              </div>
            </div>
            `;
    historyCont.append(newHistory);

    //      const totalPrice = getElement("total-price").innerText;

    //     const currentPrice = Number(productPrice) + Number(totalPrice);
    //     getElement("total-price").innerText = currentPrice;
  }
});

// ------------------clear---------//
document.getElementById("btn-clear").addEventListener("click", function () {
  const cartContainer = getElement("history-box");
  cartContainer.innerHTML = "";
});
