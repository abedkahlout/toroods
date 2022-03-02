interface ICustomer {
  id: number;
  name: string;
  email: string;
  company: string;
  payment: {
    icon: string;
    ccnumber: string;
    label: string;
  };
  date: string;
}

const customers: Array<ICustomer> = [
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: "احمد السميري",
    email: "90755958985",
    company: "3",
    payment: {
      icon: "media/svg/card-logos/5105181814.svg",
      ccnumber: "1516 " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
      label: "5105181814",
    },
    date: "14 Dec 2020, 8:43 pm",
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: "محمد حمدي",
    email: "984841226",
    company: "1",
    payment: {
      icon: "media/svg/card-logos/3026518149.svg",
      ccnumber: "1516 " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
      label: "3026518149",
    },
    date: "01 Dec 2020, 10:12 am",
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: "احمد سائد",
    email: "9781515168",
    company: "5",
    payment: {
      icon: "media/svg/card-logos/5105181814.svg",
      ccnumber: "6189181" + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
      label: "5105181814",
    },
    date: "12 Nov 2020, 2:01 pm",
  },
 
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: "اسامة اسماعيل",
    email: "987654258",

    company: "5",
    payment: {
      icon: "media/svg/card-logos/american-6.svg",
      ccnumber: "1516 " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
      label: "406015639",
    },
    date: "03 Sep 2020, 1:08 am",
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: "نائل اسماعيل",
    email: "987654258",
    

    company: "5",
    payment: {
      icon: "media/svg/card-logos/3026518149.svg",
      ccnumber: "1516 " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
      label: "3026518149",
    },
    date: "01 Sep 2020, 4:58 pm",
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: "داني مح",
    email: "987654258",
    

    company: "5",
    payment: {
      icon: "media/svg/card-logos/3026518149.svg",
      ccnumber: "1516 " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
      label: "3026518149",
    },
    date: "18 Aug 2020, 3:34 pm",
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: "ايمان ايمان",
    email: "987654258",
    

    company: "7 ",
    payment: {
      icon: "media/svg/card-logos/5105181814.svg",
      ccnumber: "1516 " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
      label: "5105181814",
    },
    date: "14 Aug 2020, 1:21 pm",
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: "انا كراون",
    email: "5484518181",
    company: "2",
    payment: {
      icon: "media/svg/card-logos/american-6.svg",
      ccnumber: "1516 " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
      label: "406015639",
    },
    date: "11 Aug 2020, 5:13 pm",
  },
];

export { ICustomer };

export default customers;
