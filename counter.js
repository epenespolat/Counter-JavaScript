let increase = document.getElementById('btn_inc');
let reset = document.getElementById('btn_res');
let decrease = document.getElementById('btn_dec');
let counter = document.getElementById('counter')
let count=0;


increase.addEventListener('click', function() {
  count++;
  counter.innerHTML = count;
  if(count > 0){
    counter.style.color='rgb(10, 109, 55)';
  }
})
reset.addEventListener('click', function() {
  count = 0;
  counter.innerHTML = count;
  if(count == 0){
    counter.style.color='gray';
  }
})
decrease.addEventListener('click', function() {
  count--;
  counter.innerHTML = count;
  if(count < 0){
    counter.style.color='rgb(197, 67, 67)';
  }
})