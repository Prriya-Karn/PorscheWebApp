import { Pause, Play } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";

export default function Sound({ path }) {
    const waveformRef = useRef(null);
    const wavesurfer = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (!path) return;

        wavesurfer.current = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: "#ccc",
            progressColor: "#000",
            cursorColor: "transparent",
            height: 80,
        });

        wavesurfer.current.load(path);

        // when playback finishes
        wavesurfer.current.on("finish", () => {
            setIsPlaying(false);
        });

        return () => wavesurfer.current.destroy();
    }, [path]);

    const togglePlay = () => {
        if (wavesurfer.current) {
            wavesurfer.current.playPause();
            setIsPlaying(wavesurfer.current.isPlaying());
        }
    };

    return (
        <div className="flex items-center gap-5">
            <button
                onClick={togglePlay}
                className="p-2 cursor-pointer bg-black text-white rounded-full flex items-center justify-center"
            >
                {isPlaying ? (
                    <Pause className="w-4 h-4" />
                ) : (
                    <Play className="w-4 h-4" />
                )}
            </button>

            <div ref={waveformRef} className="w-full" />
        </div>
    );
}
