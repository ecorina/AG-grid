const eGridDiv = document.getElementById("myGrid");
const gridOptions = {
  columnDefs: [
    { headerName: "Product", field: "Product", sortable: true, filter: true },
    { headerName: "Category", field: "Category", sortable: true, filter: true },
    { headerName: "Brand", field: "Brand", sortable: true, filter: true },
    { headerName: "Price", field: "Price", sortable: true, filter: true },
  ],
  rowData: [
    {
      Product: "Tenis Racquet",
      Category: "Tenis",
      Brand: "Wilson",
      Price: "99£",
    },
    {
      Product: "Soccer Ball",
      Category: "Soccer",
      Brand: "Adidas",
      Price: "25£",
    },
    {
      Product: "Yoga Mat",
      Category: "Yoga",
      Brand: "Liforme",
      Price: "80£",
    },
    {
      Product: "Surfboard",
      Category: "Surfing",
      Brand: "Channel Islands",
      Price: "99£",
    },
  ],
};

new agGrid.Grid(eGridDiv, gridOptions);
