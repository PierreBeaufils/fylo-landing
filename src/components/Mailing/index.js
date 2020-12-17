import './mailing.scss';

function Mailing() {
  return (
    <div className="mailing">
      <div className="background-top"></div>
      <div className="mailingBox">
        <h2>Get early access today</h2>
        <p>it only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
        <div className="mailingBox-inputs">
          <input type="text" placeholder="email@example.com" />
          <button className="startedButton">Get Started For Free</button>
        </div>
      </div>
      <div className="background-bottom"></div>
    </div >
  );
}

export default Mailing;
