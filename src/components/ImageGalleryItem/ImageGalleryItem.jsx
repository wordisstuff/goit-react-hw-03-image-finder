import { Component } from "react";
import { Container } from "./ImageGalleryItem.styled";
import { nanoid } from "nanoid";

class ImageGalleryItem extends Component {
    state = {}
    render() {
        return (<>
            {this.props.imgArr.map(item =>
                <Container key={nanoid()} className="gallery-item">HELLO!!!
                    <img src={item.url} alt="" />
                </Container>)}
        </>);
    }
}

export default ImageGalleryItem;