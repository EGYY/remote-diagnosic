var item = document.querySelector('.fix-pay__items');
var balanceInput = document.querySelector('#input-balance');
item.addEventListener('click', function (e) {
    if (e.target) {
        if (e.target !== item) {
            balanceInput.value = e.target.innerText;
        }
    }
});
