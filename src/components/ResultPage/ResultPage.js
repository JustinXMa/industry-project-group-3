import "./ResultPage.scss";
import fondImage from "../../assets/images/myPerfect.svg";

function ResultPAge() {
  return (
    <>
      <div className="result-page">
        <img className="img" src={fondImage} alt="user-img"></img>
        <div className="info">
          <p className="h1">CRUISE YOUR WAY</p>
          <p className="h2">MY PERFECT PLAN</p>
        </div>
      </div>
    </>
  );
}

export default ResultPAge;
