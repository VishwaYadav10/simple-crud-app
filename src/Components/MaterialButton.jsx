import Button from "@material-ui/core/Button";
import '../App.css';

const MaterialButton = props => {

    const { label, variant, width, buttonIcon, type, className, marginTop, marginLeft, marginRight, onClick } = props;

    return (
        <Button
            style=
            {
                {
                    // marginTop: marginTop,
                    // marginLeft: marginLeft,
                    // marginRight: marginRight,
                    // height: "30px",
                    // fontSize: "8px",
                    // fontWeight: "bold",
                    background: variant === undefined ? "#6A62D2" : "#fff",
                    color: variant === undefined ? "#fff" : "#6A62D2",
                    // borderRadius: "15px",
                    // border: "2px solid #6A62D2",
                    width: width === undefined ? "100%" : width,
                }
            }
            variant={variant === undefined ? "contained" : variant}
            startIcon={buttonIcon === undefined ? "" : buttonIcon}
            onClick={onClick}
            type={type === undefined ? null : type}
            class={className}
        >
            {label}
        </Button>
    )
}

export default MaterialButton;