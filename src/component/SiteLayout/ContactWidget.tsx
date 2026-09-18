import React from "react";
import classNames from "classnames";
import {FaCommentDots} from "react-icons/fa";
import {CONTACT_LINKS} from "./constant";

export const ContactWidget = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div className="contact-widget">
            <ul className={classNames("contact-widget__list", {"is-open": isOpen})}>
                {CONTACT_LINKS.map(contact => {
                    const Icon = contact.icon;
                    return (
                        <li key={contact.id}>
                            <a
                                href={contact.href}
                                className={classNames("contact-widget__item", `contact-widget__item--${contact.id}`)}
                                target={contact.newTab ? "_blank" : undefined}
                                rel={contact.newTab ? "noreferrer" : undefined}
                                aria-label={contact.label}
                                title={contact.label}
                            >
                                <Icon />
                            </a>
                        </li>
                    );
                })}
            </ul>
            <button type="button" className="contact-widget__toggle" onClick={toggle} aria-label="聯絡我們" aria-expanded={isOpen}>
                <FaCommentDots />
            </button>
        </div>
    );
};
