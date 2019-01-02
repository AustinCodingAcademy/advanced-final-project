import React, {Component} from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class UserForm extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            body: [
                {AboutMe: ''},
                {LookingFor: ''},
                {IdealDate: ''}
            ]
        }
    };
    // handleSubmit(event){
    //     event.preventDefault();
    //     this.props.onFormSubmit({
    //         title: this.state.title,
    //         body: [
    //             {AboutMe: this.state.AboutMe},
    //             {LookingFor: this.state.LookingFor},
    //             {IdealDate: this.state.IdealDate}
    //         ]
    //     })
    // }
    render(){
        return(
            // <form onSubmit={this.handleSubmit.bind(this)}>
            <form>
                <FormGroup className="userForm">
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>About Me</ControlLabel>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="Write your response here" 
                            type="text"
                            name="body"
                            onChange={e=>
                                {this.setState({[e.target.name]: e.target.value})}
                            }
                            value={this.state.AboutMe}
                        />
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Looking For</ControlLabel>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="Write your response here" 
                            type="text"
                            name="body"
                            onChange={e=>
                                {this.setState({[e.target.name]: e.target.value})}
                            }
                            value={this.state.LookingFor}
                        />
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Ideal Date</ControlLabel>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="Write your response here" 
                            type="text"
                            name="body"
                            onChange={e=>
                                {this.setState({[e.target.name]: e.target.value})}
                            }
                            value={this.state.IdealDate}
                        />
                    </FormGroup>
                    <Button type="submit" className="userFormButton"></Button>
                    </FormGroup>
            </form>
        )
    }

}



export default UserForm;