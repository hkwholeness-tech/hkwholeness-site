import {Link} from "react-router";
import {EMAIL, MAP_EMBED_SRC, REMOTE_CASES, SCHEDULE, SPINE_CASES, WATERMARK_SRC, WHATSAPP_URL, XRAY_CASES} from "./constant";
import type {ContactCssVars, ScheduleRow, VideoCase} from "./type";
import "./index.css";

export const ContactPage = () => {
    const watermarkStyle: ContactCssVars = {
        "--contact-watermark": `url("${WATERMARK_SRC}")`,
    };

    const renderScheduleRow = (row: ScheduleRow) => {
        const hasMorning = Boolean(row.morning);
        const hasAfternoon = Boolean(row.afternoon);

        if (!hasMorning && !hasAfternoon) {
            return (
                <tr key={row.day}>
                    <td className="contact-page__schedule-day">{row.day}</td>
                    <td colSpan={3}>
                        <span className="contact-page__rest-tag">休息</span>
                    </td>
                </tr>
            );
        }

        return (
            <tr key={row.day}>
                <td className="contact-page__schedule-day">{row.day}</td>
                <td className="contact-page__schedule-time">{hasMorning ? row.morning : <span className="contact-page__rest-tag">休息</span>}</td>
                <td className="contact-page__schedule-divider">|</td>
                <td className="contact-page__schedule-time">{hasAfternoon ? row.afternoon : <span className="contact-page__rest-tag">休息</span>}</td>
            </tr>
        );
    };

    const renderCaseCard = (item: VideoCase) => (
        <div className="contact-page__case-card" key={item.videoId}>
            <div className="contact-page__video">
                <iframe src={`https://www.youtube.com/embed/${item.videoId}`} title={item.title} allowFullScreen />
            </div>
            <div className="contact-page__case-body">
                <div className="contact-page__case-tag">{item.tag}</div>
                <div className="contact-page__case-title">{item.title}</div>
                <div className="contact-page__case-details">
                    {item.details.map(detail => (
                        <p key={detail.label}>
                            <strong>{detail.label}：</strong>
                            {detail.value}
                        </p>
                    ))}
                </div>
                {item.date ? (
                    <div className="contact-page__case-footer">
                        <span>治療日期：{item.date}</span>
                    </div>
                ) : null}
            </div>
        </div>
    );

    return (
        <div className="contact-page">
            <div className="contact-page__container" style={watermarkStyle}>
                <div className="contact-page__actions">
                    <a href="#success-cases" className="contact-page__quick-btn">
                        💬 好轉個案
                    </a>
                    <Link to="/" className="contact-page__home-btn">
                        🏠 返回首頁
                    </Link>
                </div>

                <h1 className="contact-page__title">聯絡我們與好轉見證</h1>
                <div className="contact-page__tagline">土之厚德 ｜ 承載萬物・扎根落實・真實見證</div>

                <h4 className="contact-page__section-title">診所地址與聯絡資訊</h4>
                <div className="contact-page__grid">
                    <div className="contact-page__map">
                        <iframe src={MAP_EMBED_SRC} title="診所位置地圖" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>

                    <div className="contact-page__card">
                        <ul className="contact-page__info-list">
                            <li>
                                <span className="contact-page__icon">📍</span>
                                <div>
                                    <strong>診所地址：</strong>
                                    <br />
                                    荔枝角長沙灣青山道 489-491 號 香港工業中心 A 座 904 室
                                    <br />
                                    <span className="contact-page__note">(荔枝角地鐵站 C 出口)</span>
                                </div>
                            </li>
                            <li>
                                <span className="contact-page__icon">📞</span>
                                <div>
                                    <strong>聯絡電話 / WhatsApp：</strong>
                                    <br />
                                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                                        +852 6499 9199
                                    </a>
                                </div>
                            </li>
                            <li>
                                <span className="contact-page__icon">✉️</span>
                                <div>
                                    <strong>電郵：</strong>
                                    {EMAIL}
                                </div>
                            </li>
                        </ul>

                        <div>
                            <strong className="contact-page__schedule-title">🕒 工作時間：</strong>
                            <div className="contact-page__schedule-box">
                                <table className="contact-page__schedule-table">
                                    <tbody>{SCHEDULE.map(renderScheduleRow)}</tbody>
                                </table>
                            </div>
                            <div className="contact-page__schedule-note">📌 星期日及公眾假期（紅日）休息</div>
                            <i className="contact-page__schedule-hint">（敬請提前預約，不設即時門診）</i>
                        </div>
                    </div>
                </div>

                <h4 id="success-cases" className="contact-page__section-title">
                    遙距治癒與影音個案分享
                </h4>
                <div className="contact-page__cases">{REMOTE_CASES.map(renderCaseCard)}</div>

                <h4 className="contact-page__section-title">脊椎矯正個案分享</h4>
                <div className="contact-page__cases">{SPINE_CASES.map(renderCaseCard)}</div>

                <h4 className="contact-page__section-title">脊椎矯正影像對比記錄</h4>

                {XRAY_CASES.map(item => (
                    <div className="contact-page__xray-card" key={item.badge}>
                        <div className="contact-page__xray-badge">{item.badge}</div>
                        <div className="contact-page__xray-intro">
                            <strong>{item.patient}</strong> — {item.summary}
                        </div>

                        <div className="contact-page__xray-grid">
                            {item.stages.map(stage => (
                                <div className="contact-page__xray-item" key={stage.image}>
                                    <img className="contact-page__xray-img" src={stage.image} alt={stage.label} />
                                    <div className="contact-page__stage-title">{stage.label}</div>
                                    <div className="contact-page__stage-desc">{stage.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <Link to="/" className="contact-page__back">
                    返回網站首頁
                </Link>
            </div>
        </div>
    );
};
