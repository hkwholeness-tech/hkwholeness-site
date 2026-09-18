import React from "react";
import {FaChevronLeft, FaChevronRight, FaTimes} from "react-icons/fa";
import type {CertificateImage} from "../type";

interface Props {
    images: CertificateImage[];
    activeIndex: number | null;
    onClose: () => void;
    onChange: (index: number) => void;
}

export const CertificateLightbox = React.memo((props: Props) => {
    const activeIndex = props.activeIndex;
    const isOpen = activeIndex !== null;
    const active = activeIndex !== null ? props.images[activeIndex] : undefined;

    const handlePrev = () => {
        if (activeIndex === null) {
            return;
        }
        props.onChange((activeIndex - 1 + props.images.length) % props.images.length);
    };

    const handleNext = () => {
        if (activeIndex === null) {
            return;
        }
        props.onChange((activeIndex + 1) % props.images.length);
    };

    React.useEffect(() => {
        if (!isOpen) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                props.onClose();
                return;
            }
            if (activeIndex === null) {
                return;
            }
            if (event.key === "ArrowLeft") {
                props.onChange((activeIndex - 1 + props.images.length) % props.images.length);
            } else if (event.key === "ArrowRight") {
                props.onChange((activeIndex + 1) % props.images.length);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, activeIndex, props.images.length]);

    React.useEffect(() => {
        if (!isOpen) {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    if (!isOpen || !active) {
        return null;
    }

    return (
        <div className="cert-lightbox" role="dialog" aria-modal="true" aria-label="證書放大檢視" onClick={props.onClose}>
            <button type="button" className="cert-lightbox__close" aria-label="關閉" onClick={props.onClose}>
                <FaTimes />
            </button>

            {props.images.length > 1 ? (
                <React.Fragment>
                    <button
                        type="button"
                        className="cert-lightbox__nav cert-lightbox__nav--prev"
                        aria-label="上一張"
                        onClick={event => {
                            event.stopPropagation();
                            handlePrev();
                        }}
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        type="button"
                        className="cert-lightbox__nav cert-lightbox__nav--next"
                        aria-label="下一張"
                        onClick={event => {
                            event.stopPropagation();
                            handleNext();
                        }}
                    >
                        <FaChevronRight />
                    </button>
                </React.Fragment>
            ) : null}

            <figure
                className="cert-lightbox__figure"
                onClick={event => {
                    event.stopPropagation();
                }}
            >
                <img className="cert-lightbox__img" src={active.src} alt={active.alt} />
                <figcaption className="cert-lightbox__caption">
                    {active.label}
                    {active.code ? <span className="cert-lightbox__code">{active.code}</span> : null}
                </figcaption>
            </figure>

            <div className="cert-lightbox__counter">
                {activeIndex + 1} / {props.images.length}
            </div>
        </div>
    );
});
