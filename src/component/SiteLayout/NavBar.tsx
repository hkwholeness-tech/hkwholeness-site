import {Link} from "react-router";
import LogoImage from "./asset/logo.png";

export const NavBar = () => {
    return (
        <header className="site-nav">
            <div className="site-nav__inner">
                <Link to="/" className="site-nav__logo-link" aria-label="返回全治氣針首頁">
                    <img src={LogoImage} alt="全治氣針 WE Acupuncture" className="site-nav__logo" />
                </Link>
            </div>
        </header>
    );
};
