import React from "react";


const heading2 =  React.createElement('h2',{},'Heading secondary heading')
const heading3 =  React.createElement('h4',{},'Heading secondary heading')


const heading_div =  React.createElement('div',{},'Heading secondary heading',heading3)



const heading = React.createElement(
    "div",
    {id : 'heading'},
    "First app created heading",
    heading2,
    heading_div,

  );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading);