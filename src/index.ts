export const getColorByExtention = (extention: string) => {
  switch (extention.toLowerCase()) {
    case "psd":
      return "#467faf"
    case "jpg":
      return "#73ba96"
    case "ai":
      return "#cf8b47"
    case "png":
      return "#df7971"
    case "bmp":
      return "#c2c859"
    case "dwg":
      return "#526f88"
    case "gif":
      return "#6e784a"
    case "eps":
      return "#ed9669"
    case "tiff":
      return "#84a284"
      
    case "ots":
      return "#8e9d3a"
    case "php":
      return "#3d5d8e"
    case "py":
      return "#5d9451"
    case "c":
      return "#ca394f"
    case "sql":
      return "#527ca1"
    case "rb":
      return "#0e7580"
    case "cpp":
      return "#0b6994"
    case "css":
      return "#aaac79"
    case "java":
      return "#ed4f24"
      
    case "tga":
      return "#e9b334"
    case "dxf":
      return "#c77c81"
    case "doc":
      return "#51add4"
    case "pdf":
      return "#e93f5e"
    case "key":
      return "#669887"
    case "odt":
      return "#5a8090"
    case "xls":
      return "#96c03e"
    case "docx":
      return "#4494b5"
    case "ppt":
      return "#e0682b"
      
    case "asp":
      return "#516288"
    case "ics":
      return "#05465b"
    case "dat":
      return "#b9cd2d"
    case "xml":
      return "#d88726"
    case "yml":
      return "#9b5a2b"
    case "h":
      return "#bc3127"
    case "exe":
      return "#ddaf1e"
    case "avi":
      return "#f8bc80"
    case "mp4":
      return "#982948"
      
    case "odp":
      return "#8e476a"
    case "dotx":
      return "#356853"
    case "xlsx":
      return "#80a430"
    case "ods":
      return "#80a430"
    case "pps":
      return "#f5b73f"
    case "otp":
      return "#179d7b"
    case "dot":
      return "#396b57"
    case "txt":
      return "#18a196"
    case "rtf":
      return "#788b73"
      
    case "mov":
      return "#306e8e"
    case "m4v":
      return "#7ac348"
    case "flv":
      return "#af3d2c"
    case "mpg":
      return "#462e54"
    case "qt":
      return "#44748e"
    case "mp3":
      return "#b3d543"
    case "mid":
      return "#dd7441"
    case "3g2":
      return "#45e9eb"
    case "3gp":
      return "#2cd3d5"
      
    case "aiff":
      return "#c65f8e"
    case "aac":
      return "#799ea5"
    case "wav":
      return "#9dc990"
    case "zip":
      return "#efc41a"
    case "ott":
      return "#666d87"
    case "tgz":
      return "#ba6f3b"
    case "dmg":
      return "#d35128"
    case "iso":
      return "#abb8b5"
    case "rar":
      return "#3f6ea5"

    default:
      return "#5E6B7E"
  }
}