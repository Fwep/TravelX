import React from 'react';
import ScheduleItem from './schedule_item';
import List from '@material-ui/core/List';

export default class ScheduleShow extends React.Component {
  render() {
    const scheduleItems = this.props.attractions.map(attraction => (
      <ScheduleItem key={attraction.id} attraction={attraction} />
    ));

    return (
      <List>
        {scheduleItems}
      </List>
    );
  }
};