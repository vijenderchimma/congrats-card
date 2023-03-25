const element = (
  // Write your code here.
  <div className="container">
    <h1 className="main-heading">Congratulations</h1>
    <div className="sub-container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="card-heading">Kiran V</h1>
      <p className="card-paragraph">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
