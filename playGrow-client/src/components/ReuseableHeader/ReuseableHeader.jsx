import PropTypes from "prop-types";

const ReuseableHeader = ({title, subtitle}) => {
    return (
        <div className="max-w-96">
            <h1 className="text-3xl ">{title}</h1>
            <p className="text-lg text-gray-500">{subtitle}</p>
        </div>
    );
};
ReuseableHeader.propTypes ={
    title: PropTypes.string,
    subtitle: PropTypes.string,
}
export default ReuseableHeader;