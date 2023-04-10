import React from 'react'
import "../styles/style.css"
interface onsubmitProps {
onSubmit: (value: string) => void
}
 export default function Search({onSubmit}:onsubmitProps){
   let [SearchState, setSearchState] = React.useState({value: ""})
    
let handleChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
    setSearchState({value: event.target.value})
}

let handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
   e.preventDefault()
   onSubmit(SearchState.value)
 
}




    return(
        <form className= "Input_cont" onSubmit={handleFormSubmit}> 
        <div className="ui input focus">
        <input type="text" placeholder="Search..." onChange={handleChange}/>
      </div>
      </form> 
    )


}