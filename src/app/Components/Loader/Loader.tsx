import './Loader.css'; 

export default function Loader() {
  return (
    <div className="loader-screen">
      <div className="loader-spinner"></div>
      <div className="loader-text">
        <span>Loading</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
      </div>
    </div>
  );
}
