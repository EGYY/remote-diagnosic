const item: Element = document.querySelector('.fix-pay__items')!
const balanceInput: Element = document.querySelector('#input-balance')!

item.addEventListener('click', (e: Event) => {
    if(e.target) {
        if (e.target !== item) {
            (<HTMLInputElement>balanceInput).value = (<HTMLElement>e.target).innerText
        }
    }

})