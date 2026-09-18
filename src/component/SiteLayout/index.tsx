import {Outlet} from "react-router";
import {ContactWidget} from "./ContactWidget";
import {MoveTopButton} from "./MoveTopButton";
import {NavBar} from "./NavBar";
import "./index.css";

export const SiteLayout = () => {
    return (
        <div className="site-layout">
            <NavBar />
            <main className="site-layout__content">
                <Outlet />
            </main>
            <MoveTopButton />
            <ContactWidget />
        </div>
    );
};
