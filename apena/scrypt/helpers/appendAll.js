// позволяет добавлять в родительский Node несколько дочек за один вызов
export function appendAll(rootNode, arrayOnNodes) {
	arrayOnNodes.forEach((el) => {
		rootNode.appendChild(el);
	});
	return rootNode;
}
