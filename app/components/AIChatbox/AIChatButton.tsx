import React from "react";
import { Bot } from "lucide-react";
import { useState } from "react";
import AIChatBox from "./AIChatbox";
import { Tooltip } from "@nextui-org/react";

export default function AIChatButton() {
	const [chatBoxOpen, setChatBoxOpen] = useState(true);

	return (
		<>
			<Tooltip content="Ask me any question?" color="foreground">
				<button onClick={() => setChatBoxOpen(!chatBoxOpen)} className={`${
					chatBoxOpen ? "hidden" : ""
				} animate-bounce pr-4 pb-4`}>
					<Bot size={35} color="black" />
				</button>
			</Tooltip>
			<AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
		</>
	);
}
