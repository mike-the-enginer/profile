import React from "react";

export default function ConsoleHeader() {
    return (
        <div className="w-full border-b border-foreground/30 pb-4 mb-8 font-mono text-sm md:text-base">
            <div className="flex flex-col md:flex-row md:items-center gap-2">
                <span className="text-accent">mike.g@ai-ops:~ $</span>
                <span className="typing-effect">run_profile --mode=prod</span>
            </div>
            <div className="mt-2 text-xs text-foreground/70">
                &gt; Loading profile configuration...
                <br />
                &gt; Initializing infrastructure modules...
                <br />
                &gt; <span className="text-green-500">SUCCESS:</span> Profile loaded.
            </div>
        </div>
    );
}
