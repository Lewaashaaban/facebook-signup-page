const dayElt = document.getElementById("day");
const monthElt = document.getElementById("month");
const yearElt = document.getElementById("year");

/**
 * Creates an HTML Element from html string.
 * @param {String} htmlString
 * @returns {HTMLElement}
 */
function createElt(htmlString) {
    const tmp = document.createElement("div");
    tmp.innerHTML = htmlString;
    return tmp.firstElementChild;
}

/**
 * Fills day, month, and year select HTMLElements.
 */
function fillDates() {
    const current_date = new Date();
    const current_day = current_date.getDate();
    const current_month = current_date.getMonth();
    const current_year = current_date.getFullYear();

    dayElt.innerHTML = "";
    for (let i = 1; i <= 31; i++) {
        const option = createElt(`<option value="${i}">${i}</option>`);
        if (i === current_day) option.selected = true;
        dayElt.appendChild(option);
    }

    monthElt.innerHTML = "";
    // prettier-ignore
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    months.forEach((month, i) => {
        const option = createElt(`<option value="${i + 1}">${month}</option>`);
        if (i + 1 === current_month) option.selected = true;
        monthElt.appendChild(option);
    });

    yearElt.innerHTML = "";
    for (let i = 1970; i <= current_year; i++) {
        const option = createElt(`<option value="${i}">${i}</option>`);
        if (i === current_year) option.selected = true;
        yearElt.appendChild(option);
    }
}

fillDates();
