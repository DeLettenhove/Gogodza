
function basketDescr() {
  let count = 0;
  let sum = 0;
  let prices = [256, 180, 90];
  let counts = document.querySelectorAll('.count-body');
  for (let i = 0; i < counts.length; i++) {
      count += +counts[i].innerHTML;
      sum += +counts[i].innerHTML * prices[i];
  }
  document.querySelector("#total-price").innerHTML = sum + ' грн.';
  document.querySelector('#total-count').innerHTML = count + ' шт.';
}

document.addEventListener('click', function(event) {
  if (event.target.dataset.countAfter != undefined) {
    event.target.previousElementSibling.innerHTML++;
  } else if (event.target.dataset.countPre != undefined) {
    if (event.target.nextElementSibling.innerHTML !== '0') {
      event.target.nextElementSibling.innerHTML--;
    }
  }
  basketDescr();
}
);