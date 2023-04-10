import React from  'react'
import '../styles/description.css'
import {forDescriptionParameter} from './Types/forDescriptionParameter.type'

export default class Description extends React.Component<forDescriptionParameter> {
  
    render(){
        let url = `https://www.youtube.com/embed/${this.props.content.video}`
        return (
            <div className="youtube_package">
            <div className= "ui embed"> 
     <iframe src={url} title='movie'/>
            </div>
            <div className="ui stacked segment">
            <p className="desc"> {this.props.content.desc} </p>
          </div>
           
          </div>
        )
    }
}