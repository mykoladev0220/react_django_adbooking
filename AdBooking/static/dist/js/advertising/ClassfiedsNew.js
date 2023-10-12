let selectedPublicationNames = [];

let demo_index = 0;
let pub_index = 0;

let pub_option_list = document.getElementById("publication_data").innerHTML

let sel_adjustment = -1;

function selectPublications(public_id) {
    const selected_img = document.getElementById("favoriteIcon_" + public_id);
    const selected_name = document.getElementById("adTypeName_" + public_id).innerText;

    const visibility = selected_img.style.visibility;

    if (visibility === 'visible') {
        selected_img.style.visibility = 'hidden';
        const index = selectedPublicationNames.indexOf(selected_name);
        if (index !== -1)
            selectedPublicationNames.splice(index, 1);
    } else {
        selected_img.style.visibility = 'visible';
        selectedPublicationNames.push(selected_name);
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

function addAdjustment() {
    let parent = document.getElementById("adjustment-value");
    let innerHtml = "";

    let code = document.getElementById("adjustment-code-" + sel_adjustment).innerHTML;
    let amount = document.getElementById("adjustment-amount-" + sel_adjustment).innerHTML;

    innerHtml += `<div id="adjustments_list-` + sel_adjustment + `" class="mt-1 flex-row sel-adjustment">
                    <h5 id="ad-adj-code" class="black">` + code + `</h5>
                    <h5 id="ad-adj-amount" class="black">` + amount + `</h5>
                  </div>`;

    parent.innerHTML = innerHtml;
}

function advertiser_next() {
    var advertiser_id = document.getElementById("search-select").value;
    var advertiser = document.getElementById("select2-search-select-container").innerText;
    if (advertiser_id === "") {
        alert("Please complete the fields.");

        return;
    }

    document.getElementById("sum-advertiser-id").innerHTML = advertiser_id;
    document.getElementById("sum-advertiser-name").innerHTML = advertiser;

    showSection(2);
}

function campaign_next() {
    var orderName = document.getElementById("order-name").value;

    if (orderName === "") {
        alert("Please complete the fields.");
        return;
    } else {
        document.getElementById("sum-campaign-name").innerText = orderName;
    }

    let salesContact_id = document.getElementById("sales-contact").value;

    if (salesContact_id === "") {
        alert("Please complete the fields.");
        return;
    } else {
        let salesContact_name = '';

        for (let item in salesPersonList) {
            if (salesPersonList[item].pk == salesContact_id) {
                salesContact_name = salesPersonList[item].fields['first_name'] + salesPersonList[item].fields['last_name'];
            }
        }
        document.getElementById("sum-sales-id").innerText = salesContact_id;
        document.getElementById("sum-sales-name").innerText = salesContact_name;
    }

    var startDate = document.getElementById("start-date").value;

    if (startDate === "") {
        alert("Please complete the fields.");
        return;
    } else {
        document.getElementById("sum-start-date").innerText = startDate;
    }

    document.getElementById("sum-end-date").innerText = document.getElementById("end-date").value;

    document.getElementById("sum-brief").innerText = document.getElementById("brief").value;

    showSection(3);
}

function publication_next() {
    let summaryEle = document.getElementById("sum-ad-details");
    let sumPrintTotal = document.getElementById("sum-print-total");
    let sumAdjTotal = document.getElementById("sum-adj-total");
    let sumCampaignTotal = document.getElementById("sum-campaign-total");

    let sumDemoItemListEle = "";
    let sumPrintTotalValue = "0.00";
    let sumAdjTotalValue = "0.00";
    for (let demo_idx = 0; demo_idx < selectedPublicationNames.length; demo_idx ++) {
        let pubEle = document.getElementById("spec-item-" + demo_idx);
        let pubItemList = getChildNodeList(pubEle);

        let sumPubItemListEle = "";
        for (let pub_idx = 0; pub_idx < pubItemList.length; pub_idx ++) {
            let adEle = document.getElementById("edit-ad-" + demo_idx + "-" + pub_idx);
            let adItemList = getChildNodeList(adEle);

            let sumAdItemListEle = "";
            for (let ad_idx = 0; ad_idx < adItemList.length; ad_idx ++) {
                let adName = document.getElementById("ad-name-" + demo_idx + "-" + pub_idx + "-" + ad_idx).innerHTML;
                let adCount = document.getElementById("ad-count-" + demo_idx + "-" + pub_idx + "-" + ad_idx).value;
                let adUnitPrice = document.getElementById("ad-unit-price-" + demo_idx + "-" + pub_idx + "-" + ad_idx).innerHTML;
                let adType = document.getElementById("ad-type-" + demo_idx + "-" + pub_idx + "-" + ad_idx).innerHTML;
                let adSize = document.getElementById("ad-size-" + demo_idx + "-" + pub_idx + "-" + ad_idx).innerHTML;
                let adRate = document.getElementById("ad-rate-" + demo_idx + "-" + pub_idx + "-" + ad_idx).innerHTML;
                let adjName = document.getElementById("adj-name-" + demo_idx + "-" + pub_idx + "-" + ad_idx).innerHTML;
                let adjAmount = document.getElementById("adj-amount-" + demo_idx + "-" + pub_idx + "-" + ad_idx).innerHTML;
                let adBrief = document.getElementById("ad-brief-" + demo_idx + "-" + pub_idx + "-" + ad_idx).innerHTML;

                sumAdItemListEle += `<div id="sum-edit-ad-item-` + demo_idx + `-` + pub_idx + `-` + ad_idx + `" class="edit-ad-item">
                                            <div class="edit-ad-item-title">
                                                <span id="sum-ad-name-` + demo_idx + `-` + pub_idx + `-` + ad_idx + `">` + adName + `</span>
            
                                                <h6>Qty:</h6>
                                                    
                                                <h6 style="margin-left: 5px">` + adCount + `</h6>
            
                                                <h4 class="black">$<span id="sum-ad-unit-price-` + demo_idx + `-` + pub_idx + `-` + ad_idx + `">` + adUnitPrice + `</span></h4>
                                            </div>
            
                                            <div class="value-items">
                                                <div class="value-items-half">
                                                    <div class="ad-type">
                                                        <div class="ad-type-label">Ad Type:</div>
            
                                                        <div id="sum-ad-type-` + demo_idx + `-` + pub_idx + `-` + ad_idx + `" class="ad-type-value">` + adType + `</div>
                                                    </div>
            
                                                    <div class="ad-date">
                                                        <div class="ad-type-label">Dates:</div>
            
                                                        <div class="ad-type-value">9/12/2023,</div>
                                                        <div class="ad-type-value">9/17/2023,</div>
                                                        <div class="ad-type-value">10/13/2023,</div>
                                                    </div>
                                                </div>
            
                                                <div class="value-items-half">
                                                    <div class="ad-type">
                                                        <div class="ad-type-label">Size:</div>
            
                                                        <div id="sum-ad-size-` + demo_idx + `-` + pub_idx + `-` + ad_idx + `" class="ad-type-value">` + adSize + `</div>
                                                    </div>
            
                                                    <div class="ad-date">
                                                        <div class="ad-type-label">Rates:</div>
            
                                                        <div id="sum-ad-rate-` + demo_idx + `-` + pub_idx + `-` + ad_idx + `" class="ad-type-value">` + adRate + `</div>
                                                    </div>
                                                </div>
                                            </div>
            
                                            <div class="c-calendar">See Calendar</div>
            
                                            <div class="adjustment-label">Adjustments:</div>
            
                                            <div class="adjustment-value">
                                                <div id="sum-adj-name-` + demo_idx + `-` + pub_idx + `-` + ad_idx + `">` + adjName + `</div>
            
                                                <div id="sum-adj-amount-` + demo_idx + `-` + pub_idx + `-` + ad_idx + `">` + adjAmount + `</div>
                                            </div>
            
                                            <div class="c-ad-value-description">
                                                <div class="adjustment-label">Description:</div>
            
                                                <div id="sum-ad-brief-` + demo_idx + `-` + pub_idx + `-` + ad_idx + `" class="ad-type-value">
                                                    ` + adBrief + `
                                                </div>
                                            </div>
            
                                            <div class="collapse-icon" onclick="collapseEditSpecItem(this, ` + demo_idx + `, ` + pub_idx + `, ` + ad_idx + `, 1)">
                                                <svg class="c-svg-active" xmlns="http://www.w3.org/2000/svg"
                                                     width="16" height="9" viewBox="0 0 16 9" fill="none">
                                                    <path d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 6V8H9V6H7Z"
                                                          fill="#F26722"/>
                                                </svg>
            
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9"
                                                     viewBox="0 0 16 9" fill="none">
                                                    <path d="M8.70711 0.292893C8.31658 -0.097631 7.68342 -0.097631 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 3V1H7V3H9Z"
                                                          fill="#F26722"/>
                                                </svg>
                                            </div>
                                        </div>`;
            }

            let selectedPubId = document.getElementById("select-pub-" + demo_idx + "-" + pub_idx).value;
            let selectedPubName = "";
            let selectedPubPrice = document.getElementById("pub-price-" + demo_idx + "-" + pub_idx).innerHTML;

            for (let item in publicationsList) {
                if (publicationsList[item].pk == selectedPubId) {
                    selectedPubName = publicationsList[item].fields['name']
                }
            }

            sumPubItemListEle += `<div id="sum-ad-spec-item-` + demo_idx + `-` + pub_idx + `" class="c-ad-spec-item">
                                        <div class="c-ad-spec-label">Select Your Publication:</div>
                                        
                                        <div class="select-publication">
                                            <span id="sum-select-pub-` + demo_idx + `-` + pub_idx + `">` + selectedPubName + `</span>
            
                                            <h4 class="black">$<span id="sum-pub-price-` + demo_idx + `-` + pub_idx + `">` + selectedPubPrice + `</span></h4>
                                        </div>
            
                                        <hr class="black">
            
                                        <div id="sum-edit-ad-` + demo_idx + `-` + pub_idx + `" class="edit-ad">
                                            ` + sumAdItemListEle + `
                                        </div>
                                    </div>`;
        }

        let printAdPrice = document.getElementById("print-ad-price-" + demo_idx).innerHTML;
        let printAdjPrice = document.getElementById("print-adj-price-" + demo_idx).innerHTML;
        let printTotalPrice = document.getElementById("print-total-price-" + demo_idx).innerHTML;

        sumPrintTotalValue = parseFloat(sumPrintTotalValue) + parseFloat(printAdPrice);
        sumAdjTotalValue = parseFloat(sumAdjTotalValue) + parseFloat(printAdjPrice);

        sumDemoItemListEle += `<div class="c-m-panel">
                                    <div class="btn secondary c-section" data-toggle="collapse" data-target="#sum-demo` + demo_idx + `"
                                         onclick="collapseEditSpec(this)">
                                        ` + selectedPublicationNames[demo_idx] + `
                                        <svg class="c-svg-active" xmlns="http://www.w3.org/2000/svg" width="24" height="14"
                                             viewBox="0 0 24 14" fill="none">
                                            <path d="M10.9393 13.0607C11.5251 13.6464 12.4749 13.6464 13.0607 13.0607L22.6066 3.51472C23.1924 2.92893 23.1924 1.97919 22.6066 1.3934C22.0208 0.807611 21.0711 0.807611 20.4853 1.3934L12 9.87868L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 3.51472L10.9393 13.0607ZM10.5 11V12H13.5V11H10.5Z"
                                                  fill="#666666"/>
                                        </svg>
        
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14"
                                             fill="none">
                                            <path d="M13.0607 0.93934C12.4749 0.353553 11.5251 0.353553 10.9393 0.93934L1.3934 10.4853C0.807611 11.0711 0.807611 12.0208 1.3934 12.6066C1.97919 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.93934ZM13.5 3V2L10.5 2V3L13.5 3Z"
                                                  fill="#666666"/>
                                        </svg>
                                    </div>
        
                                    <div id="sum-demo` + demo_idx + `" class="collapse secondary p-2 c-ad-spec">
                                        <div id="sum-spec-item-` + demo_idx + `">
                                           ` + sumPubItemListEle + `
                                        </div>
        
                                        <hr class="black mt-1" style="color: #666">
        
                                        <div class="price-label" style="margin-top: 6px">
                                            <h5>Print Ad Subtotal:</h5>
        
                                            <h5 class="c-mr-50">$<span id="sum-print-ad-price-` + demo_idx + `" >` + printAdPrice + `</span></h5>
                                        </div>
        
                                        <div class="price-label">
                                            <h5>Adjustment Total:</h5>
        
                                            <h5 class="c-mr-50">$<span id="sum-print-adj-price-` + demo_idx + `">` + printAdjPrice + `</span></h5>
                                        </div>
        
                                        <div class="price-label">
                                            <h4>Print Ad(s) Total:</h4>
        
                                            <h4 class="c-mr-50">$<span id="sum-print-total-price-` + demo_idx + `">` + printTotalPrice + `</span></h4>
                                        </div>
                                    </div>
                                </div>`;
    }

    summaryEle.innerHTML = sumDemoItemListEle;
    sumPrintTotal.innerHTML = sumPrintTotalValue;
    sumAdjTotal.innerHTML = sumAdjTotalValue;
    sumCampaignTotal.innerHTML = (parseFloat(sumPrintTotalValue) + parseFloat(sumAdjTotalValue)).toString();

    showSection(5);
}

function getChildNodeList(element) {
    let elementList = element.childNodes;

    for (let index = 0; index < elementList.length; index ++) {
        if (elementList[index].tagName !== "DIV") {
            element.removeChild(elementList[index]);
        }
    }

    return element.childNodes;
}

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

    let elementId = type === 0 ? "edit-ad-item-" : "sum-edit-ad-item-";

    const specItem = document.getElementById(elementId + demo + "-" + publication + "-" + ad);
    const maxHeight = specItem.style.maxHeight;

    if (maxHeight === "inherit") {
        specItem.style.maxHeight = "55px";
    } else {
        specItem.style.maxHeight = "inherit";
    }
}

function adjustment_select(selectedItem, index) {
    sel_adjustment = index;

    const adjustment_items = document.querySelector(".adjustment-row").childNodes;

    for (let i = 0; i < adjustment_items.length; i++) {
        if (adjustment_items[i].tagName === 'DIV') {
            if (adjustment_items[i] === selectedItem) {
                adjustment_items[i].classList.add("adjustment-select-active");
            } else {
                adjustment_items[i].classList.remove("adjustment-select-active");
            }
        }
    }
}

function adFormat_next() {
    const spec_item = document.getElementById("spec-area");
    let innerHtml = "";

    for (let index = 0; index < selectedPublicationNames.length; index++) {
        let temp = `<div class="c-m-panel">
                            <div class="btn secondary c-section" data-toggle="collapse" data-target="#demo` + index + `"
                                 onclick="collapseEditSpec(this)">
                                ` + selectedPublicationNames[index] + `
                                <svg class="c-svg-active" xmlns="http://www.w3.org/2000/svg" width="24" height="14"
                                     viewBox="0 0 24 14" fill="none">
                                    <path d="M10.9393 13.0607C11.5251 13.6464 12.4749 13.6464 13.0607 13.0607L22.6066 3.51472C23.1924 2.92893 23.1924 1.97919 22.6066 1.3934C22.0208 0.807611 21.0711 0.807611 20.4853 1.3934L12 9.87868L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 3.51472L10.9393 13.0607ZM10.5 11V12H13.5V11H10.5Z"
                                          fill="#666666"/>
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14"
                                     fill="none">
                                    <path d="M13.0607 0.93934C12.4749 0.353553 11.5251 0.353553 10.9393 0.93934L1.3934 10.4853C0.807611 11.0711 0.807611 12.0208 1.3934 12.6066C1.97919 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.93934ZM13.5 3V2L10.5 2V3L13.5 3Z"
                                          fill="#666666"/>
                                </svg>
                            </div>

                            <div id="demo` + index + `" class="collapse secondary p-2 c-ad-spec">
                                <div id="spec-item-` + index + `">
                                    <div id="ad-spec-item-` + index + `-0" class="c-ad-spec-item">
                                        <div class="c-ad-spec-label">Select Your Publication:</div>
                                        
                                        <div class="select-publication">
                                            <select class="form-control" id="select-pub-` + index + `-0">
                                                ` + pub_option_list + `
                                            </select>

                                            <button onclick="showAdItemModal(` + index + `, 0)" data-target="#create-ad" data-toggle="modal">
                                                + Start An Ad For This Publication
                                            </button>

                                            <h4 class="black">$<span id="pub-price-` + index + `-0">0.00</span></h4>
                                        </div>

                                        <hr class="black">

                                        <div id="edit-ad-` + index + `-0" class="edit-ad">
                                            
                                        </div>
                                    </div>
                                </div>

                                <div class="ad-option-button">
                                    <div id="new-pub-` + index + `" class="ad-option-button-item" onclick="createNewPub(` + index + `)">
                                        + Start A New Publication Ad
                                    </div>

                                    <div class="ad-option-button-item update-button" onclick="updateTotal(` + index + `)">Update Total</div>
                                </div>

                                <hr class="black mt-1" style="color: #666">

                                <div class="price-label" style="margin-top: 6px">
                                    <h5>Print Ad Subtotal:</h5>

                                    <h5 class="c-mr-50">$<span id="print-ad-price-` + index + `" >0.00</span></h5>
                                </div>

                                <div class="price-label">
                                    <h5>Adjustment Total:</h5>

                                    <h5 class="c-mr-50">$<span id="print-adj-price-` + index + `">0.00</span></h5>
                                </div>

                                <div class="price-label">
                                    <h4>Print Ad(s) Total:</h4>

                                    <h4 class="c-mr-50">$<span id="print-total-price-` + index + `">0.00</span></h4>
                                </div>
                            </div>
                        </div>`;

        innerHtml += temp;
    }
    spec_item.innerHTML = innerHtml;

    showSection(4);
}

function createAdItem() {
    let editAdItem = document.getElementById("edit-ad-" + demo_index + "-" + pub_index);
    let innerHtml = editAdItem.innerHTML;

    let editAdItemChild = document.querySelector("#edit-ad-" + demo_index + "-" + pub_index).childNodes;
    let editAdItemCount = 0;
    for (let i = 0; i < editAdItemChild.length; i ++) {
        if (editAdItemChild[i].tagName === "DIV") {
            editAdItemCount ++;
        }
    }

    let eleAdName = document.getElementById("ad-name");
    let eleAdType = document.getElementById("ad-type");
    let eleAdSize = document.getElementById("ad-size");
    let eleAdRate = document.getElementById("ad-rate");
    let eleBrief = document.getElementById("ad-brief");
    let eleAdjCode = document.getElementById("ad-adj-code");
    let eleAdjAmount = document.getElementById("ad-adj-amount");

    let adName = eleAdName.value;
    let adType = eleAdType.value;
    let adSize = eleAdSize.value;
    let adRate_id = eleAdRate.value;
    let adbrief = eleBrief.value;
    let adjCode = eleAdjCode != undefined ? eleAdjCode.innerText : '';
    let adjAmount = eleAdjAmount != undefined ? eleAdjAmount.innerText : '';

    let adUnitPrice = '';
    let adRate = "";
    for (let i = 0; i < ratingList.length; i ++) {
        let item = ratingList[i];

        if (item.pk == adRate_id) {
            adUnitPrice = item.fields['unit_price'];
            adRate = item.fields['name'];
        }
    }

    let elePubPrice = document.getElementById("pub-price-" + demo_index + "-" + pub_index);
    let pubPrice = elePubPrice.innerHTML;
    pubPrice = parseFloat(pubPrice) + parseFloat(adUnitPrice);
    elePubPrice.innerHTML = pubPrice;

    innerHtml += `<div id="edit-ad-item-` + demo_index + `-` + pub_index + `-` + editAdItemCount + `" class="edit-ad-item">
                                <div class="edit-ad-item-title">
                                    <span id="ad-name-` + demo_index + `-` + pub_index + `-` + editAdItemCount + `">` + adName + `</span>

                                    <h6>Qty:</h6>

                                    <input type="text" id="ad-count-` + demo_index + `-` + pub_index + `-` + editAdItemCount + `" value="1" 
                                        onkeydown="updatePublicationPrice(event, ` + demo_index + `, ` + pub_index + `, ` + editAdItemCount + `)">

                                    <h4 class="black">$<span id="ad-unit-price-` + demo_index + `-` + pub_index + `-` + editAdItemCount + `">` + adUnitPrice + `</span></h4>
                                </div>

                                <div class="value-items">
                                    <div class="value-items-half">
                                        <div class="ad-type">
                                            <div class="ad-type-label">Ad Type:</div>

                                            <div id="ad-type-` + demo_index + `-` + pub_index + `-` + editAdItemCount + `" class="ad-type-value">` + adType + `</div>
                                        </div>

                                        <div class="ad-date">
                                            <div class="ad-type-label">Dates:</div>

                                            <div class="ad-type-value">9/12/2023,</div>
                                            <div class="ad-type-value">9/17/2023,</div>
                                            <div class="ad-type-value">10/13/2023,</div>
                                        </div>
                                    </div>

                                    <div class="value-items-half">
                                        <div class="ad-type">
                                            <div class="ad-type-label">Size:</div>

                                            <div id="ad-size-` + demo_index + `-` + pub_index + `-` + editAdItemCount + `" class="ad-type-value">` + adSize + `</div>
                                        </div>

                                        <div class="ad-date">
                                            <div class="ad-type-label">Rates:</div>

                                            <div id="ad-rate-` + demo_index + `-` + pub_index + `-` + editAdItemCount + `" class="ad-type-value">` + adRate + `</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="c-calendar">See Calendar</div>

                                <div class="adjustment-label">Adjustments:</div>

                                <div class="adjustment-value">
                                    <div id="adj-name-` + demo_index + `-` + pub_index + `-` + editAdItemCount + `">` + adjCode + `</div>

                                    <div id="adj-amount-` + demo_index + `-` + pub_index + `-` + editAdItemCount + `">` + adjAmount + `</div>
                                </div>

                                <div class="c-ad-value-description">
                                    <div class="adjustment-label">Description:</div>

                                    <div id="ad-brief-` + demo_index + `-` + pub_index + `-` + editAdItemCount + `" class="ad-type-value">
                                        ` + adbrief + `
                                    </div>
                                </div>

                                <div class="collapse-icon" onclick="collapseEditSpecItem(this, ` + demo_index + `, ` + pub_index + `, ` + editAdItemCount + `, 0)">
                                    <svg class="c-svg-active" xmlns="http://www.w3.org/2000/svg"
                                         width="16" height="9" viewBox="0 0 16 9" fill="none">
                                        <path d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 6V8H9V6H7Z"
                                              fill="#F26722"/>
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9"
                                         viewBox="0 0 16 9" fill="none">
                                        <path d="M8.70711 0.292893C8.31658 -0.097631 7.68342 -0.097631 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 3V1H7V3H9Z"
                                              fill="#F26722"/>
                                    </svg>
                                </div>
                            </div>`;

    editAdItem.innerHTML = innerHtml;

    eleAdName.value = "";
    eleAdType.value = "";
    eleAdSize.value = "";
    eleAdRate.value = "";
    eleBrief.value = "";

    document.getElementById("adjustment-value").innerHTML = "";
    sel_adjustment = -1;
}

function createNewPub(index) {
    let specItemArea = document.getElementById("spec-item-" + index);
    let innerHtml = document.getElementById("spec-item-" + index).innerHTML;

    let specItems = document.querySelector("#spec-item-" + index).childNodes;
    let specItemCount = 0;
    for (let i = 0; i < specItems.length; i ++) {
        if (specItems[i].tagName === "DIV") {
            specItemCount ++;
        }
    }

    innerHtml += `<div id="ad-spec-item-` + index + `-` + specItemCount + `" class="c-ad-spec-item">
                            <div class="c-ad-spec-label">Select Your Publication:</div>
                            
                            <div class="select-publication">
                                <select class="form-control" id="select-pub-` + index + `-` + specItemCount + `">
                                    ` + pub_option_list +`
                                </select>

                                <button onclick="showAdItemModal(` + index + `, ` + specItemCount + `)" data-target="#create-ad" data-toggle="modal">
                                    + Start An Ad For This Publication
                                </button>

                                <h4 class="black">$<span id="pub-price-` + index + `-` + specItemCount + `">0.00</span></h4>
                            </div>

                            <hr class="black">

                            <div id="edit-ad-` + index + `-` + specItemCount + `" class="edit-ad">
                                
                            </div>
                        </div>`;

    specItemArea.innerHTML = innerHtml;
}

function showAdItemModal(demo, pub) {
    demo_index = demo;
    pub_index = pub;
}

function updatePublicationPrice (event, demo, pub, ad) {
    const key = event.key;

    if (key !== "Enter")
        return;

    let count = document.getElementById("ad-count-" + demo + "-" + pub + "-" + ad).value

    if (isNaN(count))
        return;

    let elePubPrice = document.getElementById("pub-price-" + demo + "-" + pub);
    let pubPrice = "0.00";

    let adList = document.getElementById("edit-ad-" + demo + "-" + pub).childNodes;
    for (let j = 0; j < adList.length; j ++) {
        if (adList[j].tagName !== "DIV") {
            document.getElementById("edit-ad-" + demo + "-" + pub).removeChild(adList[j]);
        }
    }

    for (let i = 0; i < adList.length; i ++) {
        let unitPrice = document.getElementById("ad-unit-price-" + demo + "-" + pub + "-" + i).innerText;
        let count = document.getElementById("ad-count-" + demo + "-" + pub + "-" + i).value;

        pubPrice = parseFloat(pubPrice) + parseFloat(count) * parseFloat(unitPrice);
    }

    elePubPrice.innerHTML = pubPrice;
}

function updateTotal(demo_index) {
    let specEle = document.getElementById("spec-item-" + demo_index);
    let specList = specEle.childNodes;

    let printAdPriceEle = document.getElementById("print-ad-price-" + demo_index);
    let printAdjPriceEle = document.getElementById("print-adj-price-" + demo_index);

    let printAdPrice = 0;
    let printAdjPrice = 0;

    for (let k = 0; k < specList.length; k++) {
        if (specList[k].tagName !== "DIV") {
            specEle.removeChild(specList[k]);
        }
    }
    specList = specEle.childNodes;
    for (let i = 0; i < specList.length; i ++) {
        // calculate the print ad price
        let pubPrice = document.getElementById("pub-price-" + demo_index + "-" + i).innerText;
        printAdPrice += parseFloat(pubPrice);

        // calculate the adjustments price
        let pubItem = document.getElementById("edit-ad-" + demo_index + "-" + i);
        let pubItemList = pubItem.childNodes;
        let adjAmount = 0;

        for (let m = 0; m < pubItemList.length; m++) {
            if (pubItemList[m].tagName !== "DIV") {
                pubItem.removeChild(pubItemList[m]);
            }
        }

        pubItemList = pubItem.childNodes;
        for (let j = 0; j < pubItemList.length; j ++) {
          adjAmount = adjAmount + parseFloat(document.getElementById("adj-amount-" + demo_index + "-" + i + "-" + j).innerText.replace(/\$/g, ""));
        }

        printAdjPrice += adjAmount;
    }

    printAdPriceEle.innerText = printAdPrice.toString();
    printAdjPriceEle.innerText = printAdjPrice.toString();
    document.getElementById("print-total-price-" + demo_index).innerText = (printAdPrice + printAdjPrice).toString();
}