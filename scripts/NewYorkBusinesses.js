import { getBusinesses } from "./database.js"

const businesses = getBusinesses()
//filter array to only businesses from NY 
const FilteredNewYorkBusinesses = (business) => {
    if (business.addressStateCode === "NY") {
        return business
    }
   

}
export const NewYorkBusinesses = () => {
    const filteredItems = businesses.filter(FilteredNewYorkBusinesses)
    let html = ""
    for(const items of filteredItems){
     html += `<h2 class="businessName">${items.companyName}</h2>
    <div class="businessAddress">
        <div>${items.addressFullStreet} </div>${items.addressCity},${items.addressStateCode}
    </div>`}

    return html
}












































//Create function that returns HTML of the filtered array 
// export const NewYorkBusinesses  = () =>{
//         const filtered = FilteredNewYorkBusinesses()
//     }


// export const NYbusinesses = () => {
//     const filteredBusiness = businesses.filter(NewYorkBusinesses)
//     return filteredBusiness
// }
// const FilteredNewYorkBusinesses = businesses.filter(business => business.addressStateCode === `NY`)



// export const NewYorkBusinesses = () => {
//     let newYorkHTML = `
                
//     <h2 class="NYbusinessName">${FilteredNewYorkBusinesses.companyName}</h2>
//     <div class="NYbusinessAddress">
//         <div>${FilteredNewYorkBusinesses.addressFullStreet} </div>${FilteredNewYorkBusinesses.addressCity},${FilteredNewYorkBusinesses.addressStateCode}
//     </div>
    
// </section>
// `
//     return newYorkHTML
// }