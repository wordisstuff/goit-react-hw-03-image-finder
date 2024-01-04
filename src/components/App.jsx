import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";


const imgArr = [{ url: "https://media.istockphoto.com/id/1295767500/photo/sunflower-wearing-sunglasses-with-smile-face-on-vintage-tone-for-summer-festival-concept.jpg?s=2048x2048&w=is&k=20&c=gwjmGTZXOjh4JDUAFsXmOklu6wiOWrK4avCdBKWG97A=" }, { url: "https://media.istockphoto.com/id/1295767500/photo/sunflower-wearing-sunglasses-with-smile-face-on-vintage-tone-for-summer-festival-concept.jpg?s=2048x2048&w=is&k=20&c=gwjmGTZXOjh4JDUAFsXmOklu6wiOWrK4avCdBKWG97A=" }, { url: "https://media.istockphoto.com/id/175622348/photo/boy-in-sunglasses-and-hat-eating-popsicle-outdoors.jpg?s=2048x2048&w=is&k=20&c=9-45JDygsR9Ejt3bRLkRePCVU7WpzHzrvCJm0ekrplY=" }, { url: "https://media.istockphoto.com/id/175622348/photo/boy-in-sunglasses-and-hat-eating-popsicle-outdoors.jpg?s=2048x2048&w=is&k=20&c=9-45JDygsR9Ejt3bRLkRePCVU7WpzHzrvCJm0ekrplY=" }, { url: "https://media.istockphoto.com/id/175622348/photo/boy-in-sunglasses-and-hat-eating-popsicle-outdoors.jpg?s=2048x2048&w=is&k=20&c=9-45JDygsR9Ejt3bRLkRePCVU7WpzHzrvCJm0ekrplY=" }, { url: "https://media.istockphoto.com/id/175622348/photo/boy-in-sunglasses-and-hat-eating-popsicle-outdoors.jpg?s=2048x2048&w=is&k=20&c=9-45JDygsR9Ejt3bRLkRePCVU7WpzHzrvCJm0ekrplY=" }]


class App extends Component {
  state = {}

  componentDidMount() {
    console.log("object");
  }


  render() {


    return (<>
      <Searchbar />
      <Loader />
      <ImageGallery imgArr={imgArr} />
      <Button />
      <Modal />
    </>);
  }
}

export default App;
