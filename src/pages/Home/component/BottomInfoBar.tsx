import React from "react";
import classNames from "classnames";
import {ADDRESS_LINE_1, ADDRESS_LINE_2, APPOINTMENT_ACTIVE_SRC, APPOINTMENT_SRC, PHONE_LINE, WHATSAPP_URL} from "../constant";

const WHATSAPP_BTN_CLASS = classNames(
    "group/wa absolute top-auto -bottom-7.5 left-1/2 z-40 m-0 block size-20 -translate-x-1/2 cursor-pointer border-none bg-transparent p-0 no-underline outline-none shrink-0",
    "transition-transform duration-300 ease-in-out hover:scale-[1.06]",
    "min-[851px]:relative min-[851px]:bottom-auto min-[851px]:-left-3.75 min-[851px]:z-auto min-[851px]:h-auto min-[851px]:w-47.5 min-[851px]:translate-x-0 min-[851px]:-translate-y-15",
    "min-[851px]:hover:translate-x-0 min-[851px]:hover:-translate-y-15 min-[851px]:hover:scale-[1.06]"
);

export const BottomInfoBar = React.memo(() => {
    return (
        <div className="pointer-events-auto absolute inset-x-0 bottom-42.5 z-30 flex w-full items-center justify-center min-[851px]:inset-x-3.75 min-[851px]:bottom-3.25 min-[851px]:z-20 min-[1401px]:inset-x-0 min-[1401px]:pointer-events-none">
            <div className="pointer-events-auto relative flex w-full items-center justify-center gap-5 p-0 min-[851px]:justify-between min-[1401px]:justify-center min-[1401px]:-translate-x-8 min-[1401px]:px-26">
                <a href={WHATSAPP_URL} className={WHATSAPP_BTN_CLASS} target="_blank" rel="noreferrer" title="專人預約">
                    <div className="relative size-full min-[851px]:h-auto">
                        <img
                            src={APPOINTMENT_SRC}
                            className="relative size-full object-cover opacity-100 transition-opacity duration-400 ease-in-out group-hover/wa:opacity-0 min-[851px]:h-auto"
                            alt="專人預約-白字"
                        />
                        <img
                            src={APPOINTMENT_ACTIVE_SRC}
                            className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-400 ease-in-out group-hover/wa:opacity-100 group-hover/wa:drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]"
                            alt="專人預約-金字"
                        />
                    </div>
                </a>
                <div className="font-calligraphy relative m-0 box-border w-[96%] rounded-xl border border-[rgba(218,208,192,0.6)] bg-[rgba(255,253,250,0.92)] pt-4.5 pr-px pb-11.25 pl-1.25 text-center text-lg/normal font-semibold tracking-[0.8px] whitespace-normal text-[#3d2a14] shadow-[0_4px_15px_rgba(0,0,0,0.08)] backdrop-blur-[6px] min-[851px]:min-w-0 min-[851px]:flex-1 min-[851px]:rounded-lg min-[851px]:bg-[rgba(255,253,250,0.88)] min-[851px]:px-5 min-[851px]:py-3 min-[851px]:shadow-[0_3px_10px_rgba(44,37,30,0.05)] min-[1401px]:w-auto min-[1401px]:flex-none min-[1401px]:px-7 min-[1401px]:text-[22px] min-[1401px]:leading-[1.6] min-[1401px]:whitespace-nowrap">
                    {ADDRESS_LINE_1}
                    <br className="block min-[1401px]:hidden" />
                    {ADDRESS_LINE_2}
                    <br />
                    {PHONE_LINE}
                </div>
            </div>
        </div>
    );
});
