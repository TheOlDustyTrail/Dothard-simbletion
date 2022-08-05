import { getBusinesses } from "./database.js"


export const businessList = () => {
    const businesArray = getBusinesses()
    let businessListHTML = ""

    businesArray.forEach(
        (businessObject) => {
            businessListHTML += `
                
                    <h2 class="businessName">${businessObject.companyName}</h2>
                    <div class="businessAddress">
                        <div>${businessObject.addressFullStreet} </div>${businessObject.addressCity},${businessObject.addressStateCode}
                    </div>
                    
                </section>
            `
        }
    )

    return businessListHTML
}



document
    .querySelector("#content")
    .addEventListener(
        "keypress",
        (keyPressEvent) => {
            const companySearchResultArticle = document.querySelector(".foundBusinesses")

            if (keyPressEvent.charCode === 13) {
                /*
                    When the user presses 'Enter', find the matching business.


                    You can use the `.includes()` string method to
                    see if a smaller string is part of a larger string.

                    Example:
                        if (business.companyName.includes(keyPressEvent.target.value)) {

                        }
                */
                const businesses = getBusinesses()

                const foundBusiness = businesses.find(
                    business => business.companyName.startsWith(keyPressEvent.target.value)
                )

                companySearchResultArticle.innerHTML = ` <h2 class="businessName">${foundBusiness.companyName}</h2>
                    <div class="businessAddress">
                        <div>${foundBusiness.addressFullStreet} </div>${foundBusiness.addressCity},${foundBusiness.addressStateCode}
                    </div>
                    
                </section>`
            }
        });