export type forVideoListProps = {
    VideoDescription: string,
    title: string,
    children?: React.ReactElement,
    key: string,
    url: string,
   onClick: (title:{desc: string, video: string}) => void,
   video: string
  }