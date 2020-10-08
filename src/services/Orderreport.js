import jsPDF from "jspdf";
import "jspdf-autotable";
import { List } from "antd/lib/form/Form";

const generatePDF = orderlist  => {
    // initialize jsPDF
    const doc = new jsPDF();
  
    const tableColumn = ["Cart ID", "Product ID", "Product Name", "unit price", " Quantity"];
    // define an empty array of rows
    const tableRows = [];

    orderlist((list) => {
       const Listdata = [
        list.cartID,
        list.productID,
        list.unitPrice,
        list.quantity,
         
        ];
        // push each tickcet's info into a row
        tableRows.push(Listdata);
      })

     
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  
  // ticket title. and margin-top + margin-left
  doc.text("Closed tickets within the last one month.", 14, 15);
  // we define the name of our PDF file.
  doc.save(`Report.pdf`);
};

export default generatePDF;