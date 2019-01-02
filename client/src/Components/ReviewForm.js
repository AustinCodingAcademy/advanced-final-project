import React, {Component} from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class ReviewForm extends Component {
    constructor(){
        super();
        this.state = {
            date: '',
            rating: '',
            review: ''
        }
    };
// handleSubmit(event){
//     event.preventDefault();
//     this.props.onFormSubmit({
//         date: this.state.date,
//         rating: this.state.rating,
//         review: this.state.review
//     })
// }
    render(){
        return(
            // <form onSubmit={this.handleSubmit.bind(this)}>
            <form>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Write a review</ControlLabel>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="Write a review..." 
                            type="text"
                            name="review"
                            onChange={e=>
                                {this.setState({[e.target.name]: e.target.value})}
                            }
                            value={this.state.review}
                        />
                    </FormGroup>
                    <Button type="submit" className="reviewFormButton"></Button>
            </form>
        )
    }

}


export default ReviewForm;