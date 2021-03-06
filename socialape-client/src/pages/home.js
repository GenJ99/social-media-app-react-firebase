// Snippet: rce
import React, { Component } from 'react';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';

export class home extends Component {
  state = {
      screams = null;
    }

  componentDidMount() {
    axios.get('/screams')
      .then(res => {
        console.log(res.data);
        
        this.setState({
          screams: res.data
        })
      })
      .catch(err => {
        console.log(err);
        
      })
  }

  render() {
    let recentScreamsMarkup = 
    return (
      <Grid container spacing={3}>
        <Grid item sm={8} xs={12}>
          {recentScreamsMarkup}
        </Grid>

        <Grid item sm={4} xs={12}>
          <p>Profile...</p>
        </Grid>
      </Grid>
    );
  }
}

export default home;
