import { Component } from "react";
import { Container } from "./ImageGallery.styled";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";

class ImageGallery extends Component {
    state = {}
    render() {
        return (<Container>
            <ul className="gallery">
                <ImageGalleryItem imgArr={this.props.imgArr} />
            </ul>
        </Container>);
    }
}

export default ImageGallery;