import React, {Component} from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class UserHeadingForm extends Component {
    constructor(){
        super();
        this.state = {
            rating: '',
            picture: '',
            name: '',
            age: ''
        }
    };
// handleSubmit(event){
//     event.preventDefault();
//     this.props.onFormSubmit({
//         rating: this.state.rating,
//         picture: this.state.picture,
//         name: this.state.name,
//         age: this.state.age
//     })
// }
    render(){
        return(
            // <form onSubmit={this.handleSubmit.bind(this)}>
            <form>
                <FormGroup className="userHeadingContainer">
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Rating</ControlLabel>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="Write a review..." 
                            type="text"
                            name="review"
                            onChange={e=>
                                {this.setState({[e.target.name]: e.target.value})}
                            }
                            value={this.state.rating}
                        />
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Rating</ControlLabel>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="Write a review..." 
                            type="text"
                            name="review"
                            onChange={e=>
                                {this.setState({[e.target.name]: e.target.value})}
                            }
                            value={this.state.picture}
                        />
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Name</ControlLabel>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="Write a review..." 
                            type="text"
                            name="name"
                            onChange={e=>
                                {this.setState({[e.target.name]: e.target.value})}
                            }
                            value={this.state.name}
                        />
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Age</ControlLabel>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="Write a review..." 
                            type="text"
                            name="age"
                            onChange={e=>
                                {this.setState({[e.target.name]: e.target.value})}
                            }
                            value={this.state.age}
                        />
                    </FormGroup>
                    <Button type="submit" className="userFormButton"></Button>
                </FormGroup>
            </form>
        )
    }

}


export default UserHeadingForm;