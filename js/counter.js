
function basketDescr() {
  let count = 0;
  let sum = 0;
  let counts = document.querySelectorAll('.count-body');
  let prices = document.querySelectorAll('.price');
  for (let i = 0; i < counts.length; i++) {
      count += +counts[i].innerHTML;
      sum += +counts[i].innerHTML * +prices[i].innerHTML;
  }
  document.querySelectorAll('.basket__description')[0].innerHTML = count + ' шт.';
  document.querySelectorAll('.basket__description')[1].innerHTML = sum + ' грн.';
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