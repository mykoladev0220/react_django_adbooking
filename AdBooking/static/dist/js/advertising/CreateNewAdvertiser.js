let typeItems = document.querySelectorAll(".advertiser-type-item");

Array.from(typeItems).forEach(typeItem => {
    typeItem.addEventListener('click', () => {
        addAddressClass(typeItem);
    })
})

function addAddressClass(item) {
    Array.from(typeItems).forEach(typeItem => {
        typeItem.classList.remove('selected-radio');
    })

    item.classList.add('selected-radio');
}
