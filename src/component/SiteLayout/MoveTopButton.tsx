import React from "react";
import classNames from "classnames";
import {FaChevronUp} from "react-icons/fa";

const SCROLL_THRESHOLD = 300;

export const MoveTopButton = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > SCROLL_THRESHOLD);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, {passive: true});

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    return (
        <button type="button" className={classNames("move-top-btn", {"is-visible": isVisible})} onClick={scrollToTop} aria-label="移至最頂">
            <FaChevronUp />
        </button>
    );
};
