import { LitElement, html, customElement, property } from 'lit-element';
import './todo-item.css'

@customElement('todo-item')
export class TodoItem extends LitElement {

	@property({ type: String }) 
	text
	
	@property({ type: Boolean, attrName: 'checked' }) 
	checked
	
	@property({ type: Number }) 
	index

	constructor() {
		super();
		this.onRemove = this.onRemove.bind(this);
		this.onToggle = this.onToggle.bind(this);
	}

	onRemove() {
		this.dispatchEvent(new CustomEvent('remove', { detail: this.index }));
	}

	onToggle() {
		this.dispatchEvent(new CustomEvent('toggle', { detail: this.index }));
	}

	render() {
		return html`
			<li>
				<input type="checkbox" .checked=${this.checked} @click="${this.onToggle}">
				<label>${this.text}</label>
				<button @click="${this.onRemove}">x</button>
			</li>
		`;
	}
		
}
