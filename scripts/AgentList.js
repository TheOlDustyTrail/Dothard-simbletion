import { getBusinesses } from "./database.js"
const businesses = getBusinesses()

export const agents = () => {
    const agentBusinesses = businesses.map(
        (agent) => {
            return `<h2>${agent.purchasingAgent.nameFirst} ${agent.purchasingAgent.nameLast}</h2>
            <div>${agent.companyName}</div>
             <div>${agent.phoneWork}</div>`
             
        }
    )
    
    const finalHTML = agentBusinesses.join(" ")
    
    let html = ""
    
    // businesses.forEach((businessObject)=>{
    //     html += `
    //     <h2>${finalHTML}</h2>
    //     <div>${businessObject.companyName}</div>
    //     <div>${businessObject.phoneWork}</div>

        
    //     `}
    

    return finalHTML
}






// const Agents = () => {
//     const agentNames = agents()
//     let html = ""

//     businesses.forEach((businessObject){
//         html += `
//         <h2>${agentNames}</h2>
//         <div>${businessObject.companyName}</div>
//         <div>${businessObject.phoneWork}</div>

        
//         `}
//     )

  
// }

