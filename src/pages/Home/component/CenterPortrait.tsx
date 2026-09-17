import React from "react";
import {DOCTOR_SRC} from "../constant";

export const CenterPortrait = React.memo(() => {
    return (
        <div className="pointer-events-none absolute z-5 flex size-22.5 items-center justify-center rounded-full bg-[radial-gradient(circle,rgba(255,255,255,1)_50%,rgba(255,255,255,0.7)_70%,rgba(255,255,255,0)_100%)] shadow-[0_0_25px_15px_rgba(255,255,255,0.85)] min-[601px]:size-45 min-[851px]:bg-none min-[851px]:shadow-[0_10px_30px_rgba(0,0,0,0.15)] min-[993px]:size-62.5">
            <img
                src={DOCTOR_SRC}
                alt="能量破局師傅樣"
                className="block size-full rounded-full object-cover contrast-[1.02] brightness-[0.98] mask-[radial-gradient(circle,rgba(0,0,0,1)_60%,rgba(0,0,0,0)_95%)] [-webkit-mask-image:radial-gradient(circle,rgba(0,0,0,1)_60%,rgba(0,0,0,0)_95%)] min-[851px]:mask-none min-[851px]:[-webkit-mask-image:none]"
            />
        </div>
    );
});
