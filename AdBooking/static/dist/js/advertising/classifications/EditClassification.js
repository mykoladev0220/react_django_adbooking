const editClassificationBtns = document.querySelectorAll('.edit-classification-btn');

const editNameInput = document.querySelector('#editName');
const editCodeInput = document.querySelector('#editCode');
const editActiveInput = document.querySelector('#editActive');

const editSaveBtn = document.querySelector('#edit_classification_submit');

let classificationId;
let classificationDetails;

editClassificationBtns.forEach(btn => btn.addEventListener('click', e => {
    let parentRow = e.target.parentElement.parentElement;
    let dataset = parentRow.dataset;

    classificationId = dataset.classificationId;

    fetch(`/advertising/classification/${classificationId}/details/`, {
        method: "GET"
    })
        .then(res => res.json())
        .then(data => {
            if (data.message.includes('Error')) {
                alert(data.message);
                return;
            } else {
                classificationDetails = data.classification;
                $('#edit_classification_modal').modal('show');
            }
        })


}));

$('#edit_classification_modal').on('show.bs.modal', e => {
    editNameInput.value = classificationDetails['name'];
    editCodeInput.value = classificationDetails['code'];

    editActiveInput.checked = classificationDetails['active'];

    editSaveBtn.addEventListener('click', handleSave)
});

const handleSave = e => {
    if ((editNameInput.value == '') || (editCodeInput.value == '')) {
        alert('Cannot save form with missing details. Please try again.');
        return;
    }

    fetch(`/advertising/classification/${classificationId}/edit/`, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "X-CSRFToken": document.querySelector('input[name="csrfmiddlewaretoken"]').value,
        },
        body: JSON.stringify({
            "name": editNameInput.value.trim(),
            "code": editCodeInput.value.trim(),
            "active": editActiveInput.checked
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            $('#edit_classification_modal').modal('show');
            window.location.reload();
        })
}