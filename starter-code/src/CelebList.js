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

  nameSort() {
    const { contacts } = this.state;

    contacts.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    this.setState({ contacts });
  }

  popularitySort() {
    const { contacts } = this.state;

    contacts.sort((a, b) => {
      if (a.popularity < b.popularity) return -1;
      if (a.popularity > b.popularity) return 1;
      return 0;
    });
    this.setState({ contacts });
  }

  deleteCeleb(celebIndex) {
    const { contacts } = this.state;
    contacts.splice(celebIndex, 1);
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
        <td>
          <button
            onClick={() => {
              this.deleteCeleb(index);
            }}
          >
            Delete
          </button>
        </td>
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

        <button
          onClick={() => {
            this.nameSort();
          }}
        >
          Sort By name
        </button>

        <button
          onClick={() => {
            this.popularitySort();
          }}
        >
          Sort by Popularity
        </button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
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
