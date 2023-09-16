const createClassificationModal = document.querySelector('#create_classification_modal');
const createClassificationForm = document.querySelector('#create_classification_form');

const createClassificationSubmitBtn = document.querySelector('#create_classification_submit');

const nameInput = document.querySelector('input[name="name"]');
const codeInput = document.querySelector('input[name="code"]');
const fileInput = document.querySelector('input[type="file"]');

let fileData;
fileInput.addEventListener('change', e => {
    let file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsText(file);

    reader.onload = function (e) {
        let text = e.target.result;
        fileData = text.split('\n');
    };
});

const handleCreateSubmit = e => {
    fetch('/advertising/classifications/new/', {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "X-CSRFToken": document.querySelector('input[name="csrfmiddlewaretoken"]').value,
        },
        body: JSON.stringify({
            "name": nameInput.value.trim(),
            "code": codeInput.value.trim(),
            "fileData": fileData
        })
    })
        .catch(err => console.error(err))
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.message.includes('Success')) {
                $('#create_classification_modal').modal('hide');
                window.location.reload();
            }
        })
}

createClassificationSubmitBtn.addEventListener('click', handleCreateSubmit);