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
    // console.log(callBtn);

    const helplineHead =
      callBtn.parentNode.parentNode.children[1].children[0].innerText;
    // console.log(helplineHead);

    const helplineNum =
      callBtn.parentNode.parentNode.children[1].children[2].innerText;
    // console.log(helplineNum);

    const timeNow = new Date().toLocaleTimeString();

    //    ---------------🪙🪙🪙🪙------------//
    const totalCoin = getElement("coin-count").innerText;
    if (totalCoin < 20) {
      alert("❌Insufficient Coins");
      return;
    }
    // console.log(totalCoin);
    const currentCoin = Number(totalCoin) - 20;
    getElement("coin-count").innerText = currentCoin;

    alert("📞 Calling " + helplineHead + ": " + helplineNum);

    //   --------------history box----------//

    const historyCont = getElement("history-box");
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
          <div
              class="flex items-center justify-between p-4 bg-[#FAFAFA] my-2 rounded-lg"
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
  }
});

// ------------------clear---------//
document.getElementById("btn-clear").addEventListener("click", function () {
  const cartContainer = getElement("history-box");
  cartContainer.innerHTML = "";
});

// ---------------------------end-----------------------//

// ------------------copy count-------------------//

getElement("card-box").addEventListener("click", function (e) {
  if (e.target.className.includes("copy-btn")) {
    const copyCount = getElement("copy-count").innerText;
    let total = Number(copyCount) + 1;
    getElement("copy-count").innerText = total;
  }
});
// -----------copy number---------------//

getElement("card-box").addEventListener("click", function (e) {
  if (e.target.className.includes("copy-btn")) {
    //  alert("clicked")
    const copyBtn = e.target;
    // console.log(copyBtn);

    const helplineHead =
      copyBtn.parentNode.parentNode.children[1].children[0].innerText;
    // console.log(helplineHead);

    const copyNum =
      copyBtn.parentNode.parentNode.children[1].children[2].innerText;
    // console.log(copyNum);

    navigator.clipboard.writeText(copyNum);
    alert(helplineHead + " Copied: " + copyNum);
  }
});
