import React from "react";
import Search from './Search'
import youtube from "../api/youtube";
import HandleSnippetResources from "./FetchedResources";
import Desc from './description'
import "../styles/flexible.css"



export default class App extends React.Component{

       
state = {
       CurrentState: null,
        content: null
    }

 
 set = (value:{desc:string, video: string})=>{
this.setState({content: value})
}
handleVideoSearch = async (value:string) =>  {
  
    try{
        const KEY = "AIzaSyCpNmNYU13D2J9Q-D4D7ZaF_vuPq9ICjBA"
        const {data} = await youtube.get("/search",{
            params: {
                part: 'snippet' ,
                maxResults: 5, 
                key: KEY,
                q: value
            }
        }
        
       
        )
        this.setState({CurrentState: data})
    }
    catch(err){
        console.log(err)
    }
   
    

    }

  
    render(){
     
    return (
        <div> 
{/* onSubmit= {this.handleVideoSearch} */}
        <Search  onSubmit = {this.handleVideoSearch}  />
<div className="beFlex"> 
{this.state.content?<Desc content={this.state.content}/>:""}
     {this.state.CurrentState? <HandleSnippetResources set={this.set} resources={this.state.CurrentState}/>: ""} 
             </div>
             </div>
    )
    }
}