import React from 'react'
// import { StringLiteral } from 'typescript'
import '../styles/videoList.css'
import { forVideoListProps } from './Types/forVideoListProps.type'


 export default class VideoList extends React.Component<forVideoListProps>   {



    render() {
        return(
          <div> 
            <div> 
      
              </div>
            <div className="ui unstackable items" >
            <div className="item">
              <div className="image">
                <img className="my-img"alt = "wireframe"src={this.props.url} />
              </div>
              <div className="content">
                <p id ="header"className="header" onClick={() => this.props.onClick({desc: this.props.title, video:this.props.video})}>{this.props.title}</p>
                <div className="meta">
                  <span>{this.props.title}</span>
                </div>
                <div className="description">
                  <p>{this.props.VideoDescription}</p>
                </div>
                <div className="extra">
                  Additional Details
                </div>
              </div>
            </div>
          </div>
</div>
        )
    }
}