import React from "react";

export function useBackgroundMusic() {
    const audioRef = React.useRef<HTMLAudioElement>(null);
    const fadeTimerRef = React.useRef<number | null>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [lyricsActive, setLyricsActive] = React.useState(false);

    function clearFadeTimer() {
        if (fadeTimerRef.current !== null) {
            window.clearInterval(fadeTimerRef.current);
            fadeTimerRef.current = null;
        }
    }

    function restartLyrics() {
        setLyricsActive(false);
        window.requestAnimationFrame(() => {
            setLyricsActive(true);
        });
    }

    function play() {
        const audio = audioRef.current;
        if (!audio) {
            return;
        }
        audio.volume = 1;
        audio
            .play()
            .then(() => {
                setIsPlaying(true);
                restartLyrics();
            })
            .catch(() => {
                setIsPlaying(false);
            });
    }

    function pause() {
        const audio = audioRef.current;
        if (!audio) {
            return;
        }
        audio.pause();
        setIsPlaying(false);
    }

    function toggle() {
        const audio = audioRef.current;
        if (!audio) {
            return;
        }
        if (audio.paused) {
            play();
        } else {
            pause();
        }
    }

    function fadeOut(duration = 1000) {
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
    }

    React.useEffect(() => {
        const audio = audioRef.current;
        if (!audio) {
            return;
        }

        function unlock() {
            if (!audio) {
                return;
            }
            audio.volume = 1;
            audio
                .play()
                .then(() => {
                    setIsPlaying(true);
                    setLyricsActive(false);
                    window.requestAnimationFrame(() => {
                        setLyricsActive(true);
                    });
                })
                .catch(() => {
                    setIsPlaying(false);
                });
            document.removeEventListener("click", unlock);
            document.removeEventListener("touchstart", unlock);
        }

        audio
            .play()
            .then(() => {
                setIsPlaying(true);
                setLyricsActive(false);
                window.requestAnimationFrame(() => {
                    setLyricsActive(true);
                });
            })
            .catch(() => {
                setIsPlaying(false);
                document.addEventListener("click", unlock);
                document.addEventListener("touchstart", unlock);
            });

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
