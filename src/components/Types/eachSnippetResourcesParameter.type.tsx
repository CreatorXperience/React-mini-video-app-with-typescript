export type eachSnippetResourcesParameter = {
    description: string,
    title:string,
    channelId: string,
    thumbnailsURL: string,
    set: (value:{desc:string,video:string}) => void,
     videoId: string
}[]