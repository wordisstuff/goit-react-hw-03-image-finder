import { Component } from "react";
import { Container } from "./Modal.styled";

class Modal extends Component {
    state = {}
    render() {
        return (<>
            <Container className="overlay">
                <div className="modal">
                    <img src="" alt="" />
                </div>
            </Container>
        </>);
    }
}

export default Modal;