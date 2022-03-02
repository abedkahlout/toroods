const DocMenuConfig = [
  {
    pages: [
      {
        heading: "الرئيسية",
        route: "/dashboard",
        svgIcon: "media/icons/duotune/art/art002.svg",
        fontIcon: "bi-app-indicator",
      },
      {
        heading: "الزبائن",
        route: "/details",
        svgIcon: "media/icons/duotune/art/art002.svg",
        fontIcon: "bi-app-indicator",
      },
      {
        heading: "الموظفين",
        route: "/mozaf",
        svgIcon: "media/icons/duotune/art/art002.svg",
        fontIcon: "bi-app-indicator",
      },
    
      {
        sectionTitle: "الطرود",
        svgIcon: "media/icons/duotune/art/art002.svg",

        route: "/torood",
        sub: [
          {
            heading: "فرع الطرود ",
            route: "/torood",
          },
          {
            heading: "فرع الطرود 2 ",
            route: "/torood1",
          },
        ],
      },
      
      {
        
        heading: "الرسائل",
        route: "/masge",
        svgIcon: "media/icons/duotune/art/art002.svg",
        fontIcon: "bi-app-indicator",
      },
      {
        heading: "الاشعارات",
        route: "/notificat",
        svgIcon: "media/icons/duotune/art/art002.svg",
        fontIcon: "bi-app-indicator",
      },
    
      
    ],
  },
];

export default DocMenuConfig;
