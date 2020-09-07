import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import { actions, selectors } from "../../reducer";

class Create extends Component {
  close = () => {
    const { dispatch } = this.props;
    dispatch(actions.setModalMode(null));
  };

  render() {
    return (
      <Modal dimmer={"blurring"} open={true} onClose={this.close}>
        <Modal.Header>Crear Meeting</Modal.Header>
        <Modal.Content></Modal.Content>
        <Modal.Actions>
          <Button negative onClick={this.close}>
            Cancelar
          </Button>
          <Button positive onClick={() => {}}>
            Crear
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default connect()(Create);
