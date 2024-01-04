import { Component } from "react";
import { Container } from "./Searchbar.styled";

class Searchbar extends Component {
    state = {}
    render() {
        return (<Container>
            <header className="searchbar">
                <form className="form">
                    <input
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>
                </form>
            </header>
        </Container>);
    }
}

export default Searchbar;