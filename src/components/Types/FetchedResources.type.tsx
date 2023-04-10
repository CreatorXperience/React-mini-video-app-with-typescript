export  type obj = {
    set: (value: {desc: string, video:string}) =>  void,
    resources: {
        etag: string,
        items: {
id: {
    videoId: string
},
snippet: {
channelId: string,
channelTitle: string,
description: string,
liveBroadcastContent: string,
publishTime: string,
publishedAt: string,
thumbnails:{
    high: {
url: string
    }
},
title: string,
    }
}[]

    } | null 
}
