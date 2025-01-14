
const heading2 =  React.createElement('h2',{},'Heading secondary heading')

const heading = React.createElement(
    "div",
    {heading2},
    "First app created heading",
    heading2,

  );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading);