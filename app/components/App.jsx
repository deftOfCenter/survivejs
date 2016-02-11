import AltContainer from 'alt-container';
import React from 'react';
import Lanes from './Lanes.jsx';
import LaneActions from '../actions/LaneActions';
import LaneStore from '../stores/LaneStore';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <button className="lanes__add" onClick={this.addLane}>+</button>
        <AltContainer
          stores={[LaneStore]}
          inject={{
            lanes: () => LaneStore.getState().lanes
          }}
        >
          <Lanes />
        </AltContainer>
      </div>
    );
  }
  addLane() {
    LaneActions.create({name: 'New lane'});
  }
  // editLane(id, task) {
  //   LaneActions.update({id, task});
  // }
  // deleteLane(id) {
  //   LaneActions.delete(id);
  // }
}
