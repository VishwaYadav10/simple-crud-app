// import { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
// import { IconButton, InputAdornment } from '@material-ui/core';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const useOutlinedInputStyles = makeStyles(theme => ({
    root: {
        '&$focused $notchedOutline': {
            borderColor: '#6A62D2',
        },
        fontFamily: "Helvetica",
        fontSize: '12px',
        color: "black",
        border: "0px",
        top: "2px",
    },
    focusedInputStyle: {
        fontFamily: "Helvetica",
        fontSize: "12px",
        color: "grey",

        "&.Mui-focused": {
            color: "black",
        }
    },
    inputLabelStyle: {
        fontFamily: "Helvetica",
        fontSize: "12px",
        color: "grey",
        paddingLeft: "1px",
        paddingRight: "2px",
        "&.Mui-focused": {
            color: "black",
        },
    },
    focused: {},
    notchedOutline: {}
}));

const MaterialTextField = props => {

    const outlinedInputClasses = useOutlinedInputStyles();

    // const [showPassword, setShowPassword] = useState(false);

    const { label, type, onChange } = props;

    // const handleShowPassword = () => {
    //     setShowPassword(!showPassword);
    // }

    return (
        <TextField
            style=
            {
                {
                    width: "70%",
                    marginTop: "8%"
                }
            }
            size="small"
            label={label}
            required
            InputLabelProps=
            {
                {
                    classes:
                    {
                        root: outlinedInputClasses.inputLabelStyle,
                        focused: outlinedInputClasses.focusedInputStyle,
                    },
                    style:
                    {
                        backgroundColor: 'white',
                        fontSize: '12px'
                    }
                }
            }
            InputProps=
            {
                {
                    classes:
                    {
                        root: outlinedInputClasses.root,
                        focused: outlinedInputClasses.focused,
                        notchedOutline: outlinedInputClasses.notchedOutline
                    },

                    // endAdornment:
                    //     type === "password" ? (
                    //         <InputAdornment position="end">
                    //             <IconButton
                    //                 aria-label="toggle password visibility"
                    //                 onClick={handleShowPassword}
                    //             >
                    //                 {showPassword ?
                    //                     <FontAwesomeIcon icon={faEye} style={{ fontSize: 13 }} /> :
                    //                     <FontAwesomeIcon icon={faEyeSlash} style={{ fontSize: 13 }} />}
                    //             </IconButton>
                    //         </InputAdornment>
                    //     ) : null
                }
            }
            variant="outlined"
            id="outlined-input"
            type={type === undefined ? "" : type}
            // type={showPassword ? "text" : "password"}
            // type={type !== "password" ? "text" : "password"}
            onChange={onChange}
        />
    );
}

export default MaterialTextField;