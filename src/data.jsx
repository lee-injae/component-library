const data = {
    badgeColors: [
        "gray", 
        "red", 
        "yellow",
         "green", 
         "blue", 
         "indigo", 
         "purple", 
         "pink"
    ],
    bannerData: [
        {
            "status" : "success",
            "imgUrl" : "/assets/check-circle.png",
            "alt" : "icon",
            "msg": "Congratulations!",
            "subtitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
          },
          {
            "status" : "warning",
            "imgUrl" : "/assets/warning-exclamation.png",
            "alt" : "icon",
            "msg": "Attention",
            "subtitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
          }, 
          {
            "status" : "error",
            "imgUrl" : "/assets/x-circle.png",
            "alt" : "icon",
            "msg": "There is a prioblem with your application",
            "subtitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
        
          }, 
          {
            "status" : "neutral",
            "imgUrl" : "/assets/blue-info.png",
            "alt" : "icon",
            "msg": "Update available",
            "subtitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
          }
    ],
    cardData: [
        {
          title: "Easy Deployment",
          text: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
        }
    ],
    testimonialWithPicData: [
      {
        profileImage: "/assets/image.png",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. ",
        name: "May Anderson",
        company: "Workcation",
        role: "CTO",
        companyLogo: ""
      }, 
    ],
    testimonialWithoutPicData: [
      {
        profileImage: "",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. ",
        name: "May Anderson",
        company: "Workcation",
        role: "CTO",
        companyLogo: "/assets/workcation-logo.png"
      }
    ]


}

export { data }



