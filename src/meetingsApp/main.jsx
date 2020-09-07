import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Icon, Table, Button } from "semantic-ui-react";
import values from "../test_values";
import ModalContainer from "./components/modal/Container";
import { actions, selectors } from "./reducer";

export const modes = {
  CREATE: "CREATE",
  DETAILS: "DETAILS",
};

class MeetingsApp extends Component {
  render() {
    let meetings = [...values.meetings];
    const { dispatch, modalMode } = this.props;
    return (
      <Fragment>
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan={5}>
                <Button
                  positive
                  icon="add"
                  content="Crear meetup"
                  onClick={() => dispatch(actions.setModalMode(modes.CREATE))}
                />
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
                    <Button animated="fade" color="blue">
                      <Button.Content visible icon>
                        <Icon name="content" />
                      </Button.Content>
                      <Button.Content hidden>detalles</Button.Content>
                    </Button>
                    <Button animated="fade" color="green">
                      <Button.Content visible icon>
                        <Icon name="edit" />
                      </Button.Content>
                      <Button.Content hidden>editar</Button.Content>
                    </Button>
                    <Button animated="fade" color="red">
                      <Button.Content visible icon>
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

        <ModalContainer modalMode={modalMode} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  modalMode: selectors.getModalMode(state),
});

export default connect(mapStateToProps)(MeetingsApp);
