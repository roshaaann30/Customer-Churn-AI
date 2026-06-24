import {useState} from "react"

function CustomerExplorer(){

const [search,setSearch]=useState("")

return(

<div>

<h1>Customer Explorer</h1>

<input

placeholder="Search Customer"

value={search}

onChange={e=>setSearch(e.target.value)}

/>

</div>

)

}

export default CustomerExplorer