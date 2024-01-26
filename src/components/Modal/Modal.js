import "./Modal.scss";
import { useState } from "react";

const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        {" "}
        Open
      </button>

      {modal && (
        <section className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <article className="modal-content">
            <img className="logo"></img>
            <p>
              Welcome to the gateway of your next great journey on the seas!{" "}
            </p>
            <h1 className="slogan">Your Journey Begins Here</h1>
            <p className="p-title">Are you charting new waters with us?</p>
            <p>
              {" "}
              Click "New to cruise" to start a tailored journey that simplifies
              the world of cruising, helping you find the ideal cruise tailored
              to your tastes and interests.
            </p>
            <p className="p-title">Already navigated these seas?</p>
            <p>
              Select "I've Cruised Before" to log into your account where your
              preferences, past journeys, and future adventures are stored,
              ready to set sail again.{" "}
            </p>
            <div className="button-container">
              <buttons>I've Cruised Before</buttons>
              <buttons className="close-modal" onClick={toggleModal}>
                New to Cruise
              </buttons>
            </div>
          </article>
        </section>
      )}
    </>
  );
};

export default Modal;
