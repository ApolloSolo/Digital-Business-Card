import "../styles/ButtonGroup.css"
const EmailImg = <i className="fa-solid fa-envelope"></i>
const LinkedIn = <i className="fa-brands fa-linkedin"></i>

const ButtonGroup = () => {
  return (
    <div className="btn-contain">
      <a className="button email" href="mailto: appsolo.tech@gmail.com">{EmailImg} Email</a>
      <a className="button linkedin" href="www.linkedin.com/in/matthew-teixeira-dev">{LinkedIn} LinkedIn</a>
    </div>
  );
};

export default ButtonGroup