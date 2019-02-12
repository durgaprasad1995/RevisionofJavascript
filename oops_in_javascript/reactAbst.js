const Button = (props) => (<button
             onClick={props.onClick}
             className={props.className}
           >
             {props.text}
           </button>);
Button.propTypes = {
      className: React.PropTypes.string.isRequired,
      onClick: React.PropTypes.func
};

const PrimaryButton = (props) =>
    <Button {...props} className="btn btn-primary" />;

const SuccessButton = (props) =>
    <Button {...props} className="btn btn-success" />;