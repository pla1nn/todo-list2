import { Component } from "react";
import { Button, Form, Textarea } from "./TodoEditor.styled";

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
            <Form onSubmit={this.onFormSubmit}>
                <Textarea value={this.state.textValue} onChange={this.handleChange}></Textarea>
                <Button type="submit">
                    Create
                </Button>
            </Form>
        )
    }
}