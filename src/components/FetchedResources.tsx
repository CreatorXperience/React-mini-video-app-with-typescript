import React, { ReactElement } from 'react'
import VideoList from './videoList'
import  {obj} from './Types/FetchedResources.type'
import { eachSnippetResourcesParameter } from './Types/eachSnippetResourcesParameter.type'


let eachSnippetResources = (contents:eachSnippetResourcesParameter)=> {
let store = contents.map(content => {

    let {description,title,channelId,thumbnailsURL,set,videoId} = content;
    
    return <VideoList VideoDescription = {description} title={title} key={`${description} ${channelId}`} url={thumbnailsURL} video={videoId} onClick={set}/>
})
return store

}
let storeOfComponent:ReactElement[];
let HandleSnippetResources = ({set,resources}:obj) => {
if(resources != null){
    console.log(resources)
    let newSnippet =  resources.items.map((item) => {
        let {videoId} = item.id
        let {snippet} = item
        let {description,title,channelId} = snippet
      let thumbnailsURL = snippet.thumbnails.high.url
     
       return {description, title, channelId,thumbnailsURL,set,videoId}
}

) 

 storeOfComponent = eachSnippetResources(newSnippet)
}


return(
<div>
    {storeOfComponent}
    </div>
)
}

export default HandleSnippetResources