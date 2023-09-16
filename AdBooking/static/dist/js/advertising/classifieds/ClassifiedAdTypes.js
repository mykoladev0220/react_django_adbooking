/* 
    Create New Classified Ad Type
*/
const createNameInput = document.querySelector('#name');
const createCodeInput = document.querySelector('#code');

const createSubmit = document.querySelector('#create_ad_type_submit');

createSubmit.addEventListener('click', e => {
    e.preventDefault();

    fetch('/advertising/classifieds/ad-types/', {
        method: "POST",
        headers: {
            "X-CSRFToken": getCookie('csrftoken'),
            "Accept": "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": createNameInput.value,
            "code": createCodeInput.value,
            "type": 'create'
        })
    })
        .then(res => res.json())
        .then(data => {
            $('#create_ad_type_modal').modal('hide');
            window.location.reload();
        })
});

/*
    Edit Classified Ad Type
*/

const editBtns = document.querySelectorAll('.edit-btn');

const editNameInput = document.querySelector('#editName');
const editCodeInput = document.querySelector('#editCode');
const editSubmitBtn = document.querySelector('#edit_ad_type_submit');

let typeId;
let adType;

editBtns.forEach(btn => btn.addEventListener('click', e => {
    typeId = e.target.parentElement.dataset.id;

    fetch(`/advertising/classifieds/ad-types/details/?typeId=${typeId}`, {
        method: 'GET'
    })
        .then(res => res.json())
        .then(data => {
            if (data.message.includes('Error.')) {
                alert(data.message);
                return;
            } else {
                adType = data.adType;
                $('#edit_ad_type_modal').modal('show');
            }
        });
}));

$('#edit_ad_type_modal').on('show.bs.modal', e => {
    editNameInput.value = adType.name;
    editCodeInput.value = adType.code;
});

editSubmitBtn.addEventListener('click', e => {
    e.preventDefault();

    fetch('/advertising/classifieds/ad-types/', {
        method: "POST",
        headers: {
            "X-CSRFToken": getCookie('csrftoken'),
            "Accept": "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": adType.id,
            "name": editNameInput.value,
            "code": editCodeInput.value,
            "type": 'edit'
        })
    })
        .then(res => res.json())
        .then(data => {
            if (data.message.includes('Error.')) {
                alert(data.message);
                return;
            } else {
                $('#edit_ad_type_modal').modal('hide');
                window.location.reload();
            }
        })
});