function collapseEditSpec(clickedButton) {
    const childElements = clickedButton.childNodes;

    for (var i = 0; i < childElements.length; i++) {
        var item = childElements[i];
        if (item.nodeName === "svg") {
            if (item.classList.contains("c-svg-active")) {
                item.classList.remove("c-svg-active");
            } else {
                item.classList.add("c-svg-active");
            }
        }
    }
}

function collapseEditSpecItem(clickedButton, demo, publication, ad, type) {
    collapseEditSpec(clickedButton);

    let elementId = type === 0 ? "ad-content-" : "sum-ad-content-";

    const specItem = document.getElementById(elementId + demo + "-" + publication + "-" + ad);
    const display = specItem.style.display;

    if (display === "none") {
        specItem.style.display = "block";
    } else {
        specItem.style.display = "none";
    }

    let adElementId = type === 0 ? "edit-ad-item-" : "sum-edit-ad-item-";

    const adSpecItem = document.getElementById(adElementId + demo + "-" + publication + "-" + ad);
    const maxHeight = adSpecItem.style.maxHeight;

    if (maxHeight === "inherit") {
        adSpecItem.style.maxHeight = "55px";
    } else {
        adSpecItem.style.maxHeight = "inherit";
    }
}

function EditCampaign() {
    var campaignName = document.getElementById("campaign-name").value;

    if (campaignName === "") {
        $.toastr.warning("Please complete the fields");
        return;
    }

    let salesContact_id = document.getElementById("sales-contact").value;

    if (salesContact_id === "") {
        $.toastr.warning("Please complete the fields");
        return;
    }

    var startDate = document.getElementById("start-date").value;

    if (startDate === "") {
        $.toastr.warning("Please complete the fields");
        return;
    }

    const data = {
        campaignName: campaignName,
        salesContact: salesContact_id,
        startDate: startDate,
        endDate: document.getElementById("end-date").value,
        brief: document.getElementById("brief").value,
    }

    // fetch('/advertising/classifieds/editCampaign', {
    //     method: 'POST',
    //     headers: {
    //         "X-CSRFToken": getCookie('csrftoken'),
    //         "Accept": "application/json",
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data),
    // })
    // .then(response => response.json())
    // .then(data => {
    //     $.toastr.success('Saved Success');
    // })
    // .catch(error => {
    //     $.toastr.error("Saved failure");
    // });
}

const getCookie = name => {
    let cookie = {};
    document.cookie.split(';').forEach(function (el) {
        let [k, v] = el.split('=');
        cookie[k.trim()] = v;
    })
    return cookie[name];
}