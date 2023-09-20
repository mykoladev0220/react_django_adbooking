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