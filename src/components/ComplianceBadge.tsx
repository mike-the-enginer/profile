import React from "react";
import { ShieldCheck } from "lucide-react";

interface ComplianceBadgeProps {
    label: string;
}

export default function ComplianceBadge({ label }: ComplianceBadgeProps) {
    return (
        <div className="inline-flex items-center gap-1 border border-accent text-accent px-2 py-1 text-xs font-mono uppercase tracking-wider hover:bg-accent hover:text-background transition-colors cursor-default">
            <ShieldCheck size={14} />
            <span>{label}</span>
        </div>
    );
}
