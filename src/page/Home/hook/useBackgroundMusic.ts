import React from "react";

let hasAutoPlayed = false;

export function useBackgroundMusic() {
    const audioRef = React.useRef<HTMLAudioElement>(null);
    const fadeTimerRef = React.useRef<number | null>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [lyricsActive, setLyricsActive] = React.useState(false);

    const clearFadeTimer = () => {
        if (fadeTimerRef.current !== null) {
            window.clearInterval(fadeTimerRef.current);
            fadeTimerRef.current = null;
        }
    };

    const restartLyrics = () => {
        setLyricsActive(false);
        window.requestAnimationFrame(() => {
            setLyricsActive(true);
        });
    };

    const play = async () => {
        const audio = audioRef.current;
        if (!audio) {
            return;
        }
        audio.volume = 1;
        try {
            await audio.play();
            setIsPlaying(true);
            restartLyrics();
        } catch {
            setIsPlaying(false);
        }
    };

    const pause = () => {
        const audio = audioRef.current;
        if (!audio) {
            return;
        }
        audio.pause();
        setIsPlaying(false);
    };

    const toggle = () => {
        const audio = audioRef.current;
        if (!audio) {
            return;
        }
        if (audio.paused) {
            play();
        } else {
            pause();
        }
    };

    const fadeOut = (duration = 1000) => {
        const audio = audioRef.current;
        if (!audio) {
            return;
        }
        clearFadeTimer();
        const step = 50;
        const iterations = duration / step;
        const volumeStep = audio.volume / iterations;
        fadeTimerRef.current = window.setInterval(() => {
            const current = audioRef.current;
            if (!current) {
                clearFadeTimer();
                return;
            }
            if (current.volume > volumeStep) {
                current.volume -= volumeStep;
                return;
            }
            current.volume = 0;
            current.pause();
            setIsPlaying(false);
            clearFadeTimer();
        }, step);
    };

    React.useEffect(() => {
        const audio = audioRef.current;
        if (!audio) {
            return;
        }

        const unlock = async () => {
            audio.volume = 1;
            try {
                await audio.play();
                setIsPlaying(true);
                restartLyrics();
            } catch {
                setIsPlaying(false);
            }
            document.removeEventListener("click", unlock);
            document.removeEventListener("touchstart", unlock);
        };

        if (!hasAutoPlayed) {
            hasAutoPlayed = true;
            (async () => {
                try {
                    await audio.play();
                    setIsPlaying(true);
                    restartLyrics();
                } catch {
                    setIsPlaying(false);
                    document.addEventListener("click", unlock);
                    document.addEventListener("touchstart", unlock);
                }
            })();
        }

        return () => {
            document.removeEventListener("click", unlock);
            document.removeEventListener("touchstart", unlock);
            if (fadeTimerRef.current !== null) {
                window.clearInterval(fadeTimerRef.current);
                fadeTimerRef.current = null;
            }
            audio.pause();
        };
    }, []);

    return {audioRef, isPlaying, lyricsActive, toggle, fadeOut};
}
