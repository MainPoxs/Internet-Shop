import "./FPLeftPanel.css";

function FPLeftPanel({ children }) {
  return (
    <div className="leftPanel">
      {children}
      {/* <img className="ring" src="./image/ring.svg" /> */}
    </div>
  );
}

export default FPLeftPanel;
