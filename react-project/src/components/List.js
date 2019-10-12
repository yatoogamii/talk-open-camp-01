import React from 'react';

class List extends React.Component {
  constructor() {
    super();

    this.state = ({
      items: ['banane', 'pomme', 'orange', 'tomate']
    })
  }

  render() {
    return (
      <>
        {this.state.items.map((item, index) => (
          <li> {item} </li>
        ))}
      </>
    )
  }
}

export default List;