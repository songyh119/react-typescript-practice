const sideBar = [
  {
    listsId: 1,
    listsTitle: "MainPage",
    listsUrl: "/",
    listsIcon: "fab fa-creative-commons",
    list: [
      {
        title: "메인으로go",
        url: "/",
      },
      {
        title: "유져스토리",
        url: "/user-stories",
      },
    ],
  },
  {
    listsId: 2,
    listsTitle: "User-stories",
    listsUrl: "/user-stories",
    listsIcon: "fab fa-creative-commons-by",
    list: [
      {
        title: "Invoice Unissued",
        url: "invoiceUnissued",
      },
      {
        title: "Invoice Issued",
        url: "invoiceIssued",
      },
      {
        title: "Invoice Rejectd",
        url: "invoiceRejectd",
      },
    ],
  },
  {
    listsId: 3,
    listsTitle: "ETC",
    listsUrl: "ETC",
    listsIcon: "fab fa-creative-commons-nc",
    list: [
      {
        title: "Fabric Candidate",
        url: "fabricCandidate",
      },
      {
        title: "Subsidiary Candidate",
        url: "subsidiaryCandidate",
      },
      {
        title: "Purchase Order",
        url: "purchaseOrder",
      },
    ],
  },
];

export { sideBar };
