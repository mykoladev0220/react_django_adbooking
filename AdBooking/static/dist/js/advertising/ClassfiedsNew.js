function selectPublications(public_id) {
    var selected_img = document.getElementById("favoriteIcon_" + public_id);

    var visibility = selected_img.style.visibility;

    if (visibility === 'visible') {
        selected_img.style.visibility = 'hidden';
    } else {
        selected_img.style.visibility = 'visible';
    }
}

function selectStar(public_id) {
    var selected_img = document.getElementById("star_" + public_id);

    var source = selected_img.src;

    if (source.includes('Star-white')) {
        selected_img.src = '/static/svg/Star-golden.svg';
    } else {
        selected_img.src = '/static/svg/Star-white.svg';
    }
}

function selectAdjustment(id) {
    var selected_card = document.getElementById("sel_adjustment_" + id);

    var visibility = selected_card.style.visibility;

    if (visibility === "hidden") {
        selected_card.style.visibility = "visible";
        addAdjustment(id);
    } else {
        selected_card.style.visibility = "hidden";
        deleteAdjustment(id);
    }
}

function addAdjustment(id) {
    var parent = document.getElementById("adjustment");

    var insert = `<div id="adjustments_list` + id + `" class="mt-1 flex-row">
                            <h5 class="black">001_COLOR MAIN</h5>
                            <h5 class="black">$$250.00</h5>
                         </div>`;

    parent.insertAdjacentHTML('afterend', insert);
}

function deleteAdjustment(id) {
    // var parent = document.getElementById("adjustment");
    var remove = document.getElementById("adjustments_list" + id);

    remove.remove();
}

//advertiser
function selectedAdvertiser() {
    document.getElementById("advertise_Name").innerText = document.getElementById("search-select").value;
}

function advertiser_next() {
    var advertiser = document.getElementById("search-select").value;
    if (advertiser === "") {
        alert("Please complete the fields.");

        return;
    }

    showSection(2);
}

function campaign_next() {
    var orderName = document.getElementById("orderName").value;

    if (orderName === "") {
        alert("Please complete the fields.");
        return;
    } else {
        document.getElementById("total_orderName").innerText = orderName;
    }

    var seles = document.getElementById("sell").value;

    if (seles === "") {
        alert("Please complete the fields.");
        return;
    } else {
        document.getElementById("total_sales").innerText = seles;
    }

    var startDate = document.getElementById("startDate").value;

    if (startDate === "") {
        alert("Please complete the fields.");
        return;
    } else {
        document.getElementById("total_startDate").innerText = startDate;
    }

    var endDate = document.getElementById("endDate").value;
    document.getElementById("total_endDate").innerText = endDate;

    var brief = document.getElementById("brief").value;
    document.getElementById("total_brief").innerText = brief;

    showSection(3);
}

function publication_next() {
    // var adtype = document.getElementById("adtype").value;
    //
    // if (adtype === "") {
    //     alert("Please complete the fields.");
    //     return;
    // }
    //
    // var adsize = document.getElementById("adsize").value;
    //
    // if (adsize === "") {
    //     alert("Please complete the fields.");
    //     return;
    // }
    //
    // var rate = document.getElementById("rate").value;
    //
    // if (rate === "") {
    //     alert("Please complete the fields.");
    //     return;
    // }

    showSection(5);
}