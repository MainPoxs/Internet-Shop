import "./FirstPage.css";

function FirstPage({ children }) {
  return (
    <div className="firstPage">
      {children}

      <img className="ring" src="./image/ring.svg" />
    </div>
  );
}

export default FirstPage;
