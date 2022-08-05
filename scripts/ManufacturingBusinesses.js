import { getBusinesses } from "./database.js"

const businesses = getBusinesses()

//filter array to only businesses in the manufacturing industry 
const FilteredManufacturingBusinesses = (business) => {
    if (business.companyIndustry === "Manufacturing") {
        return business
    }
}

export const manufacturingBusinesses = () => {
    const filteredItems = businesses.filter(FilteredManufacturingBusinesses)
    let html = ""
    for (const items of filteredItems) {
        html += `<h2 class="businessName">${items.companyName}</h2>
    <div class="businessAddress">
        <div>${items.addressFullStreet} </div>${items.addressCity},${items.addressStateCode}
    </div>`}

    return html
}


