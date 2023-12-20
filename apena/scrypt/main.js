import { render_stats } from "./player/player.js";

export function appendAll(rootNode, arrayOnNodes) {
	arrayOnNodes.forEach((el) => {
		rootNode.appendChild(el);
	});
	return rootNode;
}

console.log(Node);
render_stats();
