let boxs = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");

let turn0 = true;

const winp = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
]


boxs.forEach((box) => {
    box.addEventListener("click", () => {
        

        if(turn0 ){
            box.innerText = "o";
            turn0 = false;

        }
        else{
            box.innerText = "x";
            turn0 = true;
        }
        box.disabled = true;

        wincheck();
    });
});

document.querySelectorAll('.box').forEach(function(box) {
  box.addEventListener('mouseenter', function() {
    if (!box.disabled) {
      box.style.cursor = 'pointer';
    }
  });
  box.addEventListener('mouseleave', function() {
    box.style.cursor = '';
  });
});
document.querySelectorAll('#reset-btn, #new-btn').forEach(function(btn) {
  btn.addEventListener('mouseenter', function() {
    btn.style.cursor = 'pointer';
  });
  btn.addEventListener('mouseleave', function() {
    btn.style.cursor = '';
  });
});

let resetBtn = document.getElementById('reset-btn');
if (resetBtn) {
  resetBtn.addEventListener('click', function() {
    boxs.forEach(function(box) {
      box.innerText = '';
      box.disabled = false;
    });
    turn0 = true;
  });
}

const wincheck = () => {
    for (let p of winp){
         

    

    let p1 = boxs[p[0]].innerText;
    let p2 = boxs[p[1]].innerText;
    let p3 = boxs[p[2]].innerText;

    if( p1 != "" && p2 != "" && p3 != ""){

        if (p1 === p2 && p2 === p3){
            alert("winner is "+p1);
        }
    }
};


};




