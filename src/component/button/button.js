import React, { useEffect, useState } from "react";
import { faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./button.css";

const getIcon = id => !!id ? <FontAwesomeIcon className="icon" icon={id === "delete" ? faTrash : faSave} /> : null

function Button(props) {
    const [classes, setClasses] = useState('');
    const { styleType, buttonLabel: label, iconId, disabled } = props;
    useEffect(() => {
        let cls = 'button';
        console.log(arguments)

        if (styleType) {
            cls = `${cls} ${styleType}`;
        }
        setClasses(`${cls}`);
    }, [styleType]);

    return !!label ? <button className={classes} disabled={disabled} aria-label={label} title={label}>
        <span className="label">{label}</span>
        <span className="icon">{getIcon(iconId)}</span>
    </button> : null


}

export default Button;