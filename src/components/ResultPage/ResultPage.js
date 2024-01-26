import "./ResultPage.scss";
import fondImage from "../../assets/images/myPerfect.svg";
import oasis from "../../assets/images/oases.svg";
import boat from "../../assets/images/boat.svg";

function ResultPAge() {
  return (
    <>
      <div className="result-page">
        <img className="img" src={fondImage} alt="user-img"></img>
        <div className="info">
          <p className="h1">CRUISE YOUR WAY</p>
          <p className="h2">MY PERFECT PLAN</p>
        </div>
        <div className="result-option">
          <img className="option-img" src={oasis}></img>
        </div>
        <div>
          <img className="option-img" src={boat}></img>
        </div>
      </div>
    </>
  );
}

export default ResultPAge;
