import React from "react";
import {Link} from "react-router";
import {CLINIC_MAP_SRC, CLINIC_SESSIONS, CLINIC_VIDEOS, TEACHING_CARDS, TIANYI_IMAGE_SRC, TIANYI_ROWS, WATERMARK_SRC} from "./constant";
import type {CharityCssVars, RichSegment} from "./type";
import "./index.css";

export const CharityPage = () => {
    const watermarkStyle: CharityCssVars = {
        "--charity-watermark": `url("${WATERMARK_SRC}")`,
    };

    const renderSegments = (segments: RichSegment[]) =>
        segments.map((segment, index) => (typeof segment === "string" ? <React.Fragment key={index}>{segment}</React.Fragment> : <strong key={index}>{segment.strong}</strong>));

    return (
        <div className="charity-page">
            <div className="charity-page__container" style={watermarkStyle}>
                <div className="charity-page__header">
                    <Link to="/" className="charity-page__top-back">
                        🏠 返回首頁
                    </Link>
                    <h1 className="charity-page__title">臨床教學與慈善施醫</h1>
                    <div className="charity-page__subtitle">水之潤物 ｜ 上善若水・技術傳承・慈悲濟世</div>
                </div>

                <div className="charity-page__intro">
                    「水善利萬物而不爭。」水象徵著智慧的傳承與無私的滋養。我們致力於將傳統氣針與自然醫學技術推廣傳承，於工聯會及明愛等機構開班教學；同時秉持醫者仁心，推行街頭義診與天醫濟世計畫，回饋社會有需要的大眾。
                </div>

                <h4 className="charity-page__section-title">臨床技術教學與講座</h4>
                <div className="charity-page__teaching-grid">
                    {TEACHING_CARDS.map(card => (
                        <div className="charity-page__teaching-card" key={card.title}>
                            <div className="charity-page__photo">
                                <img src={card.image} alt={card.alt} />
                            </div>
                            <div className="charity-page__teaching-content">
                                <span className="charity-page__teaching-tag">{card.tag}</span>
                                <div className="charity-page__teaching-title">{card.title}</div>
                                <div className="charity-page__teaching-desc">{renderSegments(card.desc)}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <h4 className="charity-page__section-title">慈善關懷與義診計畫</h4>

                <div className="charity-page__card-full">
                    <span className="charity-page__badge">每週定期慈善活動</span>
                    <div className="charity-page__card-title">全治街頭公開義診</div>
                    <div className="charity-page__card-intro">慈悲施醫，針對脊椎修正與痛症治療，走入社區為廣大市民及基層大眾提供免費檢查與優惠治療。</div>

                    <div className="charity-page__clinic-grid">
                        <div>
                            <ul className="charity-page__list">
                                <li>
                                    <span>⏱️</span>
                                    <div>
                                        <span className="charity-page__label">服務時間：</span>逢星期日 12:00pm 開始至無客為止
                                    </div>
                                </li>
                                <li>
                                    <span>📍</span>
                                    <div>
                                        <span className="charity-page__label">義診地點：</span>荔枝角長沙灣道匯豐銀行附近（街頭）
                                    </div>
                                </li>
                                <li>
                                    <span>🔍</span>
                                    <div>
                                        <span className="charity-page__label">檢查費用：</span>
                                        <strong>全免</strong>
                                    </div>
                                </li>
                                <li>
                                    <span>💉</span>
                                    <div>
                                        <span className="charity-page__label">治療收費：</span>
                                        <strong>首針免費</strong>，其後續針每針 $100
                                    </div>
                                </li>
                            </ul>

                            <div className="charity-page__notice">
                                💡 歡迎 WhatsApp <strong>+852 6499 9199</strong> 查詢最新義診動態！
                            </div>
                        </div>

                        <div className="charity-page__map">
                            <div className="charity-page__map-title">📍 義診現場位置地圖</div>
                            <img src={CLINIC_MAP_SRC} alt="荔枝角街頭義診位置地圖" />
                        </div>
                    </div>

                    <div className="charity-page__gallery-title">📅 近期義診場次與現場花絮</div>
                    <div className="charity-page__schedule-grid">
                        {CLINIC_SESSIONS.map(session => (
                            <div className="charity-page__schedule-card" key={session.date}>
                                <img className="charity-page__schedule-img" src={session.image} alt={session.alt} />
                                <div className="charity-page__schedule-body">
                                    <div className="charity-page__schedule-date">{session.date}</div>
                                    <div className="charity-page__schedule-loc">{session.location}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="charity-page__gallery-title">🎬 義診精華片段</div>
                    <div className="charity-page__video-grid">
                        {CLINIC_VIDEOS.map(src => (
                            <div className="charity-page__video-wrap" key={src}>
                                <video controls preload="metadata">
                                    <source src={src} type="video/mp4" />
                                    你的瀏覽器不支援影片播放。
                                </video>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="charity-page__card-tianyi">
                    <div className="charity-page__tianyi-top">
                        <div className="charity-page__tianyi-text">
                            <span className="charity-page__badge">貧苦大眾特惠安排</span>
                            <div className="charity-page__card-title">天醫濟世計畫</div>
                            <div className="charity-page__card-intro">專為預算有限、需要偶然保健或經濟有困難的求診者而設，提供輕量化的座位治療服務，讓醫療資源能真正幫助有需要的人。</div>
                        </div>

                        <div className="charity-page__tianyi-img">
                            <img src={TIANYI_IMAGE_SRC} alt="天醫濟世計畫插圖" />
                        </div>
                    </div>

                    <div className="charity-page__table-box">
                        <table className="charity-page__table">
                            <thead>
                                <tr>
                                    <th style={{width: "25%"}}>項目</th>
                                    <th style={{width: "25%"}}>費用</th>
                                    <th style={{width: "50%"}}>備註</th>
                                </tr>
                            </thead>
                            <tbody>
                                {TIANYI_ROWS.map(row => (
                                    <tr key={row.item}>
                                        <td>
                                            <strong>{row.item}</strong>
                                        </td>
                                        <td>
                                            <strong>{row.fee}</strong>
                                        </td>
                                        <td>{row.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="charity-page__tianyi-note">（提供座位治療）</div>

                    <div className="charity-page__notice">
                        ⚠️ 預約須知：
                        <br />
                        1. 本安排只限預約上午時段進行。
                        <br />
                        2. 預約時請事先聲明經濟有困難。
                    </div>
                </div>

                <Link to="/" className="charity-page__back">
                    返回網站首頁
                </Link>
            </div>
        </div>
    );
};
