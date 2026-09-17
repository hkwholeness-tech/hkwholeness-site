import React from "react";
import {ADDRESS_LINE_1, ADDRESS_LINE_2, APPOINTMENT_ACTIVE_SRC, APPOINTMENT_SRC, PHONE_LINE, WHATSAPP_URL} from "../constant";

export const BottomInfoBar = React.memo(() => {
    return (
        <div className="home-bottom">
            <div className="home-bottom__group">
                <a href={WHATSAPP_URL} className="home-appointment" target="_blank" rel="noreferrer" title="專人預約">
                    <div className="home-appointment__frame">
                        <img src={APPOINTMENT_SRC} className="home-appointment__img home-appointment__img--idle" alt="專人預約-白字" />
                        <img src={APPOINTMENT_ACTIVE_SRC} className="home-appointment__img home-appointment__img--glow" alt="專人預約-金字" />
                    </div>
                </a>
                <div className="home-address">
                    {ADDRESS_LINE_1}
                    <br className="home-address__break" />
                    {ADDRESS_LINE_2}
                    <br />
                    {PHONE_LINE}
                </div>
            </div>
        </div>
    );
});
