import React from 'react';
import {Card, Grid, Button, Image, Modal } from 'semantic-ui-react';

export default function People({data}) {
    const [open, setOpen] = React.useState(false)
  return (
   <div>   
        <h1>Star Wars Characters List</h1>
    <Modal
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
    trigger={
          <Grid columns={3}>
            {data.map((people, i)=> {
                return(
                    <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{people.name}</Card.Header>
                                <Card.Description>
                                    <strong>Birth Year</strong>
                                    <p>{people.birth_year}</p>
                                    <strong>Gender</strong>
                                    <p>{people.gender}</p>
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Button color='blue' type="submit" 
                                onClick={() => this.handleClick(people.id)}>
                                    See More
                                    </Button>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                )
            })}
          </Grid>}
  >
    <Modal.Header >Name</Modal.Header><Modal.Content image>
        <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
        <Modal.Description>
          <strong>Height</strong>
          <p></p>
          <strong>Mass</strong>
          <p></p>
          <strong>Hair Color</strong>
          <p></p>
          <strong>Skin Color</strong>
          <p></p>
          <strong>Birth Year</strong>
          <p></p>
          <strong>Gender</strong>
          <p></p>
        </Modal.Description>
      </Modal.Content><Modal.Actions>
          <Button color='red' onClick={() => setOpen(false)}>
            Close
          </Button>
        </Modal.Actions> 
        </Modal>

  </div>
  );
}

