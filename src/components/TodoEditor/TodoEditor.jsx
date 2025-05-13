import { Component } from "react";
import { Textarea } from "./TodoEditor.styled";

export class TodoEditor extends Component {
    state={
        textValue: '',
    }

    handleChange = (e) => {
		this.setState({
			textValue: e.currentTarget.value,
		})
	}

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.textValue);
        this.setState({
            textValue: '',
        })
    }

    render() {
        return(
            <form onSubmit={this.onFormSubmit}>
                <Textarea value={this.state.textValue} onChange={this.handleChange}></Textarea>
                <button type="submit">
                    Create
                </button>
            </form>
        )
    }
}