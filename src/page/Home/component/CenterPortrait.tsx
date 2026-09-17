import React from "react";
import {DOCTOR_SRC} from "../constant";

export const CenterPortrait = React.memo(() => {
    return (
        <div className="home-portrait">
            <img src={DOCTOR_SRC} alt="能量破局師傅樣" className="home-portrait__img" />
        </div>
    );
});
