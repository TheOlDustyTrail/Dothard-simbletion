import { businessList } from "./BusinessList.js"
import { NewYorkBusinesses } from "./NewYorkBusinesses.js"
import { manufacturingBusinesses } from "./ManufacturingBusinesses.js"
import { agents } from "./AgentList.js"

const mainContainer = document.querySelector("#content")


const applicationHTML = `
  <input type="text" placeholder="Enter business name..." id="companySearch" />

  <article class="foundBusinesses"></article>

  <article class="businesses">
      <h2>All Businesses</h2>
      ${businessList()}
  </article>
  <article class="businesses--manufacturing">
      <h2>Manufacturing Businesses</h2>
      ${manufacturingBusinesses()}
  </article>
  
    <article class="businesses--newYork">
        <h2>New York Businesses</h2>
        ${NewYorkBusinesses()}
    </article>
    <article class="agents">
    <h2>Purchasing Agents</h2>
    ${agents()}
</article>
`




mainContainer.innerHTML = applicationHTML




