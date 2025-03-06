import "./FPLeftPanel.css";

function FPLeftPanel({ children }) {
  return (
    <dev className="leftPanel">
      {children}
      <img className="ring" src="./image/ring.svg" />
    </dev>
  );
}

export default FPLeftPanel;
