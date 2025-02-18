import PropTypes from "prop-types"
const Button = ({ children, className, type }) => {
  return (
    <div>
      <button type={type} className={` ${className} group`}>
        {children}
        <div className="flex gap-2">
          <span className="h-1 w-1 bg-none bg-orange-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 [animation-delay:3500ms]"></span>
          <span className="h-1 w-1 bg-none bg-orange-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 [animation-delay:3000ms]"></span>
          <span className="h-1 w-1 bg-none bg-orange-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 [animation-delay:2500ms]"></span>
          <span className="h-1 w-1 bg-none bg-orange-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 [animation-delay:2000ms]"></span>
          <span className="h-1 w-1 bg-none bg-orange-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 [animation-delay:1500ms]"></span>
          <span className="h-1 w-1 bg-none bg-orange-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 [animation-delay:1000ms]"></span>
          <span className="h-1 w-1 bg-none bg-orange-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 [animation-delay:500ms]"></span>
          <span className="h-1 w-1 bg-none bg-orange-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 [animation-delay:0ms]"></span>
        </div>
      </button>
    </div>
  );
};


Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(["submit", "button", "reset"]),
};
export default Button;
