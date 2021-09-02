import React from 'react';
import {Input} from 'reactstrap';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      userWord: 'string'
    }
  }
    searchFunction() {
    }
    
      render() {
        return(
          <div>
            <Input placeholder='Search Here' onChange={(e) => this.setState({userWord: e.currentTarget.value})} />
            <h3>Results:</h3>
            {this.state.things.filter(thing => thing.includes(this.state.userWord)).map(filteredThing => (
              <li>{filteredThing}</li>
            ))}
          </div>
        )
      }
}



export default SearchIndex;
