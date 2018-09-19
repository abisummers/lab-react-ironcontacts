import React from "react";
import list from "./contacts.json";

class OriginalList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { contacts: list.slice(0, 5) };
  }

  addCeleb() {
    const { contacts } = this.state;
    const randomNumber = Math.floor(Math.random() * 199);
    const randomCeleb = list[randomNumber];

    contacts.push(randomCeleb);
    this.setState({ contacts });
  }
  render() {
    const { contacts } = this.state;

    const movieListStructure = contacts.map((oneCeleb, index) => (
      <tr key={index}>
        <td>
          <img
            className="celebPhotos"
            src={oneCeleb.pictureUrl}
            alt="celebrity photos"
          />
        </td>
        <td>{oneCeleb.name}</td>
        <td>{oneCeleb.popularity}</td>
      </tr>
    ));

    return (
      <div>
        <button
          onClick={() => {
            this.addCeleb();
          }}
        >
          Add a Random Celeb
        </button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>

          <tbody>{movieListStructure}</tbody>
        </table>
        <div />
      </div>
    );
  }
}

export default OriginalList;
