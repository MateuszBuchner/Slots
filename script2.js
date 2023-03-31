(function () {
    "use strict";
  
    const items = [
      "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/4644.png' >",
      "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/6632.png' >",
      "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/6691.png' >",
      "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/6692.png' >",
      "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3001.png' >",
      "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/6656.png' >",
      "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/6671.png' >",
      "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/6630.png' >",
      "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/6630.png' >",
      "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3152.png' >",
      "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/6662.png' >",
      "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/6673.png' >",
      "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/6673.png' >",
      "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/4005.png' >",
      "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/4005.png' >",
      "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/4005.png' >",
      "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/6653.png' >",
      "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3190.png' >",
      "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/6655.png' >",
      "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/6617.png' >",
      "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/4636.png' >",
      "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/6693.png' >",
      "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/6667.png' >",
      "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/4633.png' >",
      "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/6657.png' >",
      "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/2065.png' >",
      "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/2065.png' >",
      "<img src='https://static.bigbrain.gg/assets/lol/riot_static/13.6.1/img/item/3078.png' >",

    ];
    
     function lever_clicked() {
       var leverelement = document.getElementById("lever2");
       leverelement.classList.add("clicked");
      setTimeout(resetlever, 500);
    }
    
    document.querySelector(".info2").innerHTML = items.join(" ");
    var leverelement = document.getElementById("lever2");
    
    let counter = 0;
    
      window.onload = function() {
        lever_clicked(); 
        spin();
      };
    
    const doors2 = document.querySelectorAll(".door2");
    document.querySelector("#spinner2").addEventListener("click", spin);
    document.querySelector("#lever2").addEventListener("click", init);
    document.querySelector("#lever2").addEventListener("click", spin);
    document.querySelector("#reseter2").addEventListener("click", init);
    document.querySelector("#reseter2").addEventListener("click", resetlever);
  
    function resetlever(){
       leverelement.classList.remove("clicked");
    }
    
    async function spin() {
      init(false, 1, 2);
      for (const door2 of doors2) {
        const boxes2 = door2.querySelector(".boxes2");
        boxes2.style.transform = "translateY(0)";
      }
    }
    
    function init(firstInit = true, groups = 1, duration = 1) {
   
      let adjustedPool = [...items];
  
      for (const door2 of doors2) {
        if (firstInit) {
          door2.dataset.spinned = "0";
        } else if (door2.dataset.spinned === "1") {
          return;
        }
  
        const boxes2 = door2.querySelector(".boxes2");
        const boxesClone = boxes2.cloneNode(false);
  
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
          box.style.width = door2.clientWidth + "px";
          box.style.height = door2.clientHeight + "px";
          box.innerHTML = pool[i];
          boxesClone.appendChild(box);
        }
        
        boxesClone.style.transitionDuration = (duration > 0 ? duration : 1) + "s";
        boxesClone.style.transform = `translateY(-${
          door2.clientHeight * (pool.length - 1)
        }px)`;
        door2.replaceChild(boxesClone, boxes2);
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
  