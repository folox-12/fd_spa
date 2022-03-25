import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
	constructor(params) {
		super(params);
		this.setTitle("PostSettings");
	}

	async getHtml() {
		console.log(this.params.id);
		return `
		Post settings
		`;
	}
}