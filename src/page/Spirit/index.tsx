import React from "react";
import {Link} from "react-router";
import FireImage from "./asset/fire.webp";
import type {SpiritCssVars} from "./type";
import "./index.css";

const FLOW_NODES = [
    {modifier: "fire", label: "【火】溫通循環"},
    {modifier: "earth", label: "【土】實體落地"},
    {modifier: "metal", label: "【金】結構防線"},
    {modifier: "water", label: "【水】潤澤清理"},
    {modifier: "wood", label: "【木】組織修復"},
    {modifier: "fire", label: "【火】本體進化"},
];

const CODE_SECTIONS = [
    {
        color: "#c62828",
        title: "1. 【火】—— 一切能量的源頭（精神、主權、溫通循環）",
        body: "火，是你的本我，是信念，也是不容置疑的核心主權。在萬事萬物中，它是定下戰略的發起者；在人體結構中，它代表著維持生命溫度的核心火種與血液循環。沒有火的推動，生命與氣血都會淪為一潭死水，退化便隨之而來。",
    },
    {
        color: "#6d4c41",
        title: "2. 【土】—— 價值的現實顯化（產品、服務、實體落地）",
        body: "火生土。當內心與機體有了充足的能量（火），必然會向外輸出，在物理世界留下實體的痕跡。你的技術、產品是土；在身體上，肌肉、脾胃與實體的診所空間亦是土。土是承載一切的根基，但若缺乏背後「火」的頻率引導，屬土的肉身與產品再厚實，也只是缺乏生命力的工具。",
    },
    {
        color: "#e65100",
        title: "3. 【金】—— 利益與結構的規矩（財富、法律、骨骼關節）",
        body: "土生金。當持續輸出極致的價值（土），必然會迎來回報。金，是財富與合約規矩；在身體幾何學中，金則死鎖著支撐我們肉身的骨骼與關節。金的天性是肅殺與規範。不論是治理公司還是調理關節，都必須將利益與結構「放對位置」，立下鐵一樣的邊界與對位。缺乏金的規矩，利益會流失；缺乏金的端正，關節就會錯位。",
    },
    {
        color: "#1565c0",
        title: "4. 【水】—— 資源派生的流動面（風險、是非、潤澤清理）",
        body: "金生水。水是液態的，具備「滲透」與「清理」的特性。在世俗中，名利（金）越多，是非與風險（水）就越旺；在人體中，關節結構（金）周圍必然伴隨著體液與微循環（水）。水既能成為滋潤關節、清洗堵塞物物的甘露，也能在代謝失控時，演變成淹沒機體、引發炎症與內耗的洪水。智者與醫者從不恐懼水，而是建立好洩洪的管道。",
    },
    {
        color: "#2e7d32",
        title: "5. 【木】—— 危機與退化的終極變壓器（智慧、思考、組織修復）",
        body: "水生木。這是逆天改命與對抗退化性病變的核心樞紐。當是非與病痛（水）砸向你時，庸者在委屈與發炎中自我燒毀，而智者與細胞則會動用大腦與自發律動，將危機轉化為滋養智慧與修復組織的頂級肥料。木代表著生長與修復。不怕水大，只怕木枯。身體的退化問題，本質上就是木氣乾枯、對外界刺激失去了反饋。唯有透過特定波形的共振，重新激活這股生長的元素（木），破壞的組織才能開始修復，並重新引燃機體的生命之火（木生火），完成生命與健康的躍遷。",
    },
];

const STRATEGIES = [
    {
        title: "一、 守火（調節生物頻率，保持核心穩定）",
        body: "精神內核是帝國的中央指揮部，亦是人體輸出信號的源頭。當外界遇到攻擊，或者身體遇到退化瓶頸時，停止盲目的情緒反彈與藥物刺激。醫者與強者會靜下心來，調節自己的生物頻率與周圍共振。心火越冷靜、頻率越對齊，信號的輸出就越精準，身體與現實的修復韻律就必須按照你的意志強制坍塌。",
    },
    {
        title: "二、 厚土（狠狠編譯，在物理世界落針）",
        body: "一切道理與理論，如果沒有經歷物質世界的物理煉獄，皆為虛妄。去踐行、去開創，正如醫師為每一個關節設計專屬的頻率手法一樣，需要實實在在地在肌肉、關節與現實項目上「精準落針」。你的肉身在物理世界裡承受了多少精準的磨練，你的現實結構就能承載多大的財富與健康帝國。",
    },
    {
        title: "三、 固金控水（用鐵幕與規矩劃清界限，滋潤清理）",
        body: "容許利益與機體派生出水分，但絕不給貪婪與濕毒留出滲透的縫隙。用最清晰的合約鎖死資產，用正確的關節位置支撐肉身（固金）；同時，利用自發的波動頻率，引導體液去潤澤關節、清理體內的局部堵塞（控水）。將所有撲過來的是非與疾病，通過智慧與生物波形的研究，全部強制轉化為反哺自身格局與健康的核燃料。",
    },
];

export const SpiritPage = () => {
    const watermarkStyle: SpiritCssVars = {
        "--spirit-watermark": `url("${FireImage}")`,
    };

    return (
        <div className="spirit-page">
            <div className="spirit-page__container" style={watermarkStyle}>
                <div className="spirit-page__header">
                    <Link to="/" className="spirit-page__top-back">
                        🏠 返回首頁
                    </Link>
                    <h1 className="spirit-page__title">善用五行破解人生逆境大論</h1>
                </div>

                <div className="spirit-page__intro">
                    <p>
                        每個人來到這個世界上，都在面對屬於自己的風暴，這世上從來沒有密不透風的絕路，也沒有絕對無法逆轉的退化。人類的身體與這台世俗的社會引擎一樣，或許不懂得聆聽言語，但它們完全可以閱讀特定的能量波形。
                    </p>
                    <p>
                        當你將這套五行流體的生物波形與能量循環輸入進大腦與生活，世間所有人性博弈、事業起落、氣血流轉，在你眼裡都會退化成清晰可見、完全可預判的軌跡。看懂這五個底層代碼，我們就能在迷茫的紅塵與病痛中，一把奪回生命與健康的主權。
                    </p>
                </div>

                <h4 className="spirit-page__subtitle">核心診斷：世間所有痛苦與病痛的兩大根源</h4>
                <p className="spirit-page__text">在看清規律之前，先看清痛苦與疾病為什麼會發生。人體與人生的困頓，剝離掉所有表面藉口，本質上只有兩個：</p>

                <div className="spirit-page__root-list">
                    <div className="spirit-page__root-item">
                        <strong className="spirit-page__root-strong-fire">1. 你的「火」太弱（核心失穩）</strong>
                        ：在人生中，是自身核心不穩，被別人的情緒牽著走；在身體上，則是心火與元氣無法推動血液循環，導致機體失去了自發的自我修正動力，新症拖成舊疾。
                    </div>
                    <div className="spirit-page__root-item">
                        <strong className="spirit-page__root-strong-water">2. 你的「水」失控（邊界滲透）</strong>
                        ：在世俗中，是任由隨之而來的嫉妒與是非反噬精神；在生理上，則是體內的體液與病理產物無法代謝，任由濕毒與堵塞滲透關節與內臟，引發慢性的退化性病變。
                    </div>
                </div>
                <p className="spirit-page__text">要破這個局，我們必須學會調節自身的頻率，在內心與肉體中運轉這套完整的五行修復循環鏈。</p>

                <h4 className="spirit-page__subtitle">第一章：五個代碼，看穿世間所有人事物與肉身律動</h4>
                <p className="spirit-page__text">宇宙的流體力學與人體的生物波形，永遠遵循這五個步驟的循環推進：火 → 土 → 金 → 水 → 木 → 火。</p>

                <div className="spirit-page__flow">
                    {FLOW_NODES.map((node, index) => (
                        <React.Fragment key={index}>
                            <div className={`spirit-page__node spirit-page__node--${node.modifier}`}>{node.label}</div>
                            {index < FLOW_NODES.length - 1 ? <div className="spirit-page__arrow">➔</div> : null}
                        </React.Fragment>
                    ))}
                </div>

                {CODE_SECTIONS.map(section => (
                    <React.Fragment key={section.title}>
                        <h5 className="spirit-page__heading" style={{color: section.color}}>
                            {section.title}
                        </h5>
                        <p className="spirit-page__text">{section.body}</p>
                    </React.Fragment>
                ))}

                <h4 className="spirit-page__subtitle">第二章：萬事萬物的終極控局與健康調頻之道</h4>
                <p className="spirit-page__text">如果你想在這個複雜的紅塵中活得通透、取得大勝，並讓肉身遠離退化，我們只需要死鎖住三件事：</p>

                {STRATEGIES.map(strategy => (
                    <div className="spirit-page__strategy" key={strategy.title}>
                        <strong>{strategy.title}</strong>
                        <br />
                        {strategy.body}
                    </div>
                ))}

                <div className="spirit-page__manifesto">
                    <h5 className="spirit-page__manifesto-title">告世人書</h5>
                    <p className="spirit-page__manifesto-text">守住你的火，厚實你的土，藉由水木的共振修復組織。跨越這場物理的煉獄，拉高視角俯瞰紅塵，這台生命與宇宙引擎的控制權，就在你的股掌之中。</p>
                </div>

                <Link to="/" className="spirit-page__back">
                    返回網站首頁
                </Link>
            </div>
        </div>
    );
};
