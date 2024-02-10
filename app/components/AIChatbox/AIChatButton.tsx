import React from "react";
import { Bot } from "lucide-react";
import { useState } from "react";
import AIChatBox from "./AIChatbox";

export default function AIChatButton() {
	const [chatBoxOpen, setChatBoxOpen] = useState(true);

	return (
		<>
			<button onClick={() => setChatBoxOpen(!chatBoxOpen)} className={`${
				chatBoxOpen ? "hidden" : ""
			} animate-bounce pr-4 pb-4`}>
				<Bot size={35} />
			</button>
			<AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
		</>
	);
}
