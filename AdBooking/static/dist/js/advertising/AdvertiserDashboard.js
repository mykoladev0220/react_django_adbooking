let typeItems = document.querySelectorAll(".advertiser-type-item");
let advertiser_new_address=document.getElementById("advertiser_new_address");
let advertiser_same_address=document.getElementById("advertiser_same_address");
let bilAddressEle = document.getElementById("billing-address");
let bilCityEle = document.getElementById("billing-city");
let bilStateEle = document.getElementById("billing-state");
let bilZipCodeEle = document.getElementById("billing-zip-code");

let addressFlag = 0;


function changeAddress(index) {
    addressFlag = index;

    Array.from(typeItems).forEach(typeItem => {
        typeItem.classList.remove('selected-radio');
    })

    document.getElementById("address-" + index).classList.add("selected-radio");

    if (index == 0) {
        document.getElementById("advertiser_new_address").style.display = 'block'
        document.getElementById("advertiser_same_address").style.display = 'none'
        bilAddressEle.disabled = false;
        bilCityEle.disabled = false;
        bilStateEle.disabled = false;
        bilZipCodeEle.disabled = false;
    } else {
        document.getElementById("advertiser_new_address").style.display = 'none'
        document.getElementById("advertiser_same_address").style.display = 'block'
    }
}

const getCookie = name => {
    let cookie = {};
    document.cookie.split(';').forEach(function (el) {
        let [k, v] = el.split('=');
        cookie[k.trim()] = v;
    })
    return cookie[name];
}
$('#id_edit_info').click(e => {
    $('#modal-info').modal('show')
})

function selSearch() {
    let ele = document.getElementById("contact-section");
    ele.classList.remove('filter-active');
    ele.classList.add('search-active');
}

function selFilter() {
    let ele = document.getElementById("contact-section");
    ele.classList.remove('search-active');
    ele.classList.add('filter-active');
}