import React from "react";
import { Mail, Phone, User } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function AgentContact() {
    return (
        <div className="border border-foreground/30 p-4 bg-foreground/5 relative overflow-hidden group">
            {/* Scanning line effect */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-accent/50 animate-scan pointer-events-none" />

            <div className="flex items-center justify-between mb-3 border-b border-foreground/20 pb-2">
                <span className="text-xs font-bold text-accent tracking-widest">PROTOCOL: AGENT_COMM</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>

            <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center gap-3">
                    <User size={16} className="text-accent shrink-0" />
                    <div>
                        <div className="text-[10px] opacity-60 uppercase">Agent Handler</div>
                        <div className="font-bold">Artie</div>
                    </div>
                </div>

                <div className="flex items-center gap-3 group-hover:text-accent transition-colors">
                    <Mail size={16} className="shrink-0" />
                    <a href="mailto:hello@euhub.sk" className="hover:underline">
                        hello@euhub.sk
                    </a>
                </div>

                <div className="flex items-center gap-3 group-hover:text-accent transition-colors">
                    <Phone size={16} className="shrink-0" />
                    <a href="tel:+421919028987" className="hover:underline">
                        +421 919 028 987
                    </a>
                </div>
                <div className="flex items-center gap-3 group-hover:text-accent transition-colors">
                    <FaWhatsapp size={16} className="shrink-0" />
                    <a href="https://wa.me/421919028987" className="hover:underline">
                        WhatsApp
                    </a>
                </div>
            </div>

            <div className="mt-3 pt-2 border-t border-foreground/20 text-[10px] opacity-50 text-center">
                &lt; END_TRANSMISSION /&gt;
            </div>
        </div>
    );
}
