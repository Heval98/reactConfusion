import React, { Component } from 'react';
import { Button, Label, Row, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        //this line is to set available the function into the render method
        this.toggleModal = this.toggleModal.bind(this);
        this.handleComments = this.handleComments.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleComments(values){
        this.toggleModal();
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }


    render() {
        return (
            <React.Fragment>
                <div>
                    <button onClick={this.toggleModal} className="btn btn-outline-secondary" ><span className="fa fa-edit" ></span> Submit Comment</button>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                <LocalForm onSubmit={(values) => this.handleComments(values)}>
                            <Row className="form-group">
                                <div className="col-12">
                                    <Label htmlFor="raiting">Raiting</Label>
                                </div>
                                <div className="col-12">
                                    <Control.select model=".raiting" name="raiting"
                                        className="form-control" >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </div>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" className="col-12">Your Name</Label>
                                <div className="col-12">
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required,
                                            maxLength: maxLength(15),
                                            minLength: minLength(3)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 2 characters ',
                                            maxLength: 'Must be 15 characters or less '
                                        }}
                                    />
                                </div>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" className="col-12">Comment</Label>
                                <div className="col-12">
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="6"
                                        className="form-control" />
                                </div>
                            </Row>
                            <Row className="form-group">
                                <div className="col-12" >
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </div>
                            </Row>
                        </LocalForm>
                </ModalBody>
            </Modal>
        </React.Fragment>
        );
    }
}

export default CommentForm;