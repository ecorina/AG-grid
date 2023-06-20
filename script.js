const eGridDiv = document.getElementById("myGrid");
const gridOptions = {
  columnDefs: [
    { field: "Product" },
    { field: "Category" },
    { field: "Brand" },
    { field: "Price" },
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
