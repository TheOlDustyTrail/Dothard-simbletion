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





    return finalHTML
}




