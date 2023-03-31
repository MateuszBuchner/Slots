(function () {
  "use strict";

  const items = [
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/8020.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/8001.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3003.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3504.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/6696.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3102.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3071.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3071.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3153.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3072.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/6609.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/4629.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3742.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/6333.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/4637.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3814.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3508.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3121.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/4401.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3110.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3110.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3026.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3124.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/4628.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/4628.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3181.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3031.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3031.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3100.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3100.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3004.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3156.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3041.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3139.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3222.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3165.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3033.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3115.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/6675.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3046.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3089.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3143.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3094.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3074.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3107.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3085.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3116.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3040.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/6695.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/6694.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/4645.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/6035.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3161.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3065.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/6616.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3053.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3095.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3068.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/6676.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3075.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3748.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/6664.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3179.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3135.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3083.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3119.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3091.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3142.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3050.png' >",
    "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3157.png' >",
  ];
  
   function lever_clicked() {
     var leverelement = document.getElementById("lever");
     leverelement.classList.add("clicked");
    setTimeout(resetlever, 500);
  }
  
  document.querySelector(".info").innerHTML = items.join(" ");
  var leverelement = document.getElementById("lever");
  
  let counter = 0;
  
    window.onload = function() {
      lever_clicked(); 
      spin();
    };
  
  const doors = document.querySelectorAll(".door");
  document.querySelector("#spinner").addEventListener("click", spin);
  document.querySelector("#lever").addEventListener("click", init);
  document.querySelector("#lever").addEventListener("click", spin);
  document.querySelector("#reseter").addEventListener("click", init);
  document.querySelector("#reseter").addEventListener("click", resetlever);

  function resetlever(){
     leverelement.classList.remove("clicked");
  }
  
  async function spin() {
    init(false, 1, 2);
    for (const door of doors) {
      const boxes = door.querySelector(".boxes");
      boxes.style.transform = "translateY(0)";
    }
  }
  
  function init(firstInit = true, groups = 1, duration = 1) {
 
    let adjustedPool = [...items];

    for (const door of doors) {
      if (firstInit) {
        door.dataset.spinned = "0";
      } else if (door.dataset.spinned === "1") {
        return;
      }

      const boxes = door.querySelector(".boxes");
      const boxesClone = boxes.cloneNode(false);

      let pool = ["❓"];
      if (!firstInit) {
        const arr = [];
        for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
          arr.push(...items);
        }
        pool.push(...shuffle(arr));
      }

      for (let i = pool.length - 1; i >= 0; i--) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = door.clientWidth + "px";
        box.style.height = door.clientHeight + "px";
        box.innerHTML = pool[i];
        boxesClone.appendChild(box);
      }
      
      boxesClone.style.transitionDuration = (duration > 0 ? duration : 1) + "s";
      boxesClone.style.transform = `translateY(-${
        door.clientHeight * (pool.length - 1)
      }px)`;
      door.replaceChild(boxesClone, boxes);
    }
  }

  function shuffle([...arr]) {
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  }
})();
