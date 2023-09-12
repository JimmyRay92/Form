import thankYou from "../assets/icon-thank-you.svg";

const ThankYou = () => {
  return (
    <>
      <div className="thankyou">
        <img className="thankyou__image" src={thankYou} alt="Thank You" />
        <h2 className="thankyou__heading">Thank you !</h2>
        <p className="thankyou__text">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </p>
      </div>
    </>
  );
};

export default ThankYou;
