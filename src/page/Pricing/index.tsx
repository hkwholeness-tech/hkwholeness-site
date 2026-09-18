import React from "react";
import {Link} from "react-router";
import {CERTIFICATES, CERTIFICATE_IMAGES, ILLUSTRATION_SRC, PRICE_ROWS, WATERMARK_SRC} from "./constant";
import {CertificateLightbox} from "./component/CertificateLightbox";
import type {PricingCssVars} from "./type";
import "./index.css";

export const PricingPage = () => {
    const [activeCert, setActiveCert] = React.useState<number | null>(null);

    const themeStyle: PricingCssVars = {
        "--pricing-watermark": `url("${WATERMARK_SRC}")`,
        "--pricing-illustration": `url("${ILLUSTRATION_SRC}")`,
    };

    return (
        <div className="pricing-page">
            <div className="pricing-page__container" style={themeStyle}>
                <div className="pricing-page__header">
                    <Link to="/" className="pricing-page__top-back">
                        🏠 返回首頁
                    </Link>
                    <h1 className="pricing-page__title">診所服務價目表</h1>
                    <div className="pricing-page__subtitle">金之規範 ｜ 透明收費・專業認證・結構對位</div>
                </div>

                <div className="pricing-page__single-wrap">
                    <div className="pricing-page__card">
                        <div className="pricing-page__card-header">
                            <div className="pricing-page__card-title">◆ 全面照顧計劃</div>
                            <div className="pricing-page__card-target">對象：有明顯痛症，急需真正治療的人</div>
                        </div>

                        <table className="pricing-page__table">
                            <thead>
                                <tr>
                                    <th className="pricing-page__col-item">項目</th>
                                    <th className="pricing-page__col-fee">費用</th>
                                    <th className="pricing-page__col-note">備註</th>
                                </tr>
                            </thead>
                            <tbody>
                                {PRICE_ROWS.map(row => (
                                    <tr key={row.item}>
                                        <td className="pricing-page__col-item">{row.item}</td>
                                        <td className="pricing-page__col-fee">
                                            {row.fee}
                                            {row.suffix ? <span className="pricing-page__fee-suffix">{row.suffix}</span> : null}
                                        </td>
                                        <td className="pricing-page__col-note">{row.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <h4 className="pricing-page__section-title">專業資歷與權威認證</h4>
                <div className="pricing-page__cert-box">
                    <ul className="pricing-page__cert-list">
                        {CERTIFICATES.map(cert => (
                            <li key={cert.num}>
                                <span className="pricing-page__cert-num">{cert.num}</span>
                                {cert.regCode ? <span className="pricing-page__cert-reg">{cert.regCode}</span> : null}
                                <span className="pricing-page__cert-main">{cert.title}</span> ｜ {cert.after}
                            </li>
                        ))}
                    </ul>

                    <div className="pricing-page__cert-gallery">
                        {CERTIFICATE_IMAGES.map((cert, index) => (
                            <div className="pricing-page__cert-item" key={cert.src}>
                                <button
                                    type="button"
                                    className="pricing-page__cert-img-wrap"
                                    aria-label={`放大檢視 ${cert.label}`}
                                    onClick={() => {
                                        setActiveCert(index);
                                    }}
                                >
                                    <img src={cert.src} alt={cert.alt} title={cert.alt} />
                                </button>
                                <div className="pricing-page__cert-label">
                                    {cert.label}
                                    {cert.code ? <span className="pricing-page__cert-label-code">{cert.code}</span> : null}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <Link to="/" className="pricing-page__back">
                    返回網站首頁
                </Link>
            </div>

            <CertificateLightbox images={CERTIFICATE_IMAGES} activeIndex={activeCert} onClose={() => setActiveCert(null)} onChange={setActiveCert} />
        </div>
    );
};
