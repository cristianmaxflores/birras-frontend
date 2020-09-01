import React, { Component } from "react";
import { Icon, Table, Button } from "semantic-ui-react";
import values from "../test_values";

class meetingsApp extends Component {
  render() {
    let meetings = [...values.meetings];
    return (
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan={5}>
              <Button positive icon="add" content="Crear meetup" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {meetings.map((meet) => (
            <Table.Row>
              <Table.Cell collapsing>
                <Icon name="folder" />
                {meet.name}
              </Table.Cell>
              <Table.Cell>{meet.description}</Table.Cell>
              <Table.Cell>{meet.date}</Table.Cell>
              <Table.Cell>{meet.time}</Table.Cell>
              <Table.Cell collapsing>
                <Button.Group>
                  <Button animated="fade" color='blue'>
                    <Button.Content visible icon >
                      <Icon name="content" />
                    </Button.Content>
                    <Button.Content hidden>detalles</Button.Content>
                  </Button>
                  <Button animated="fade" color='green'>
                    <Button.Content visible icon>
                      <Icon name="edit" />
                    </Button.Content>
                    <Button.Content hidden>editar</Button.Content>
                  </Button>
                  <Button animated="fade" color='red'>
                    <Button.Content visible icon >
                      <Icon name="trash alternate" />
                    </Button.Content>
                    <Button.Content hidden>borrar</Button.Content>
                  </Button>
                </Button.Group>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }
}

export default meetingsApp;
