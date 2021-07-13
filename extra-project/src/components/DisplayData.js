import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { closeModal } from '../actions/cepFinder';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

class DisplayData extends Component {
  render() {
    Modal.setAppElement('#root');
    const { data, modal, modalClose, requestError } = this.props;
    const { 
      cep,
      logradouro,
      complemento,
      bairro,
      localidade,
      uf,
    } = data
    if (modal && requestError === '') {
      return (
        <Modal isOpen={ modal } style={customStyles}>
        <p>{`CEP: ${cep}`}</p>
        <p>{`Logradouro: ${logradouro}`}</p>
        <p>{`Complemento: ${complemento}`}</p>
        <p>{`Bairro: ${bairro}`}</p>
        <p>{`Cidade: ${localidade}`}</p>
        <p>{`Estado: ${uf}`}</p>
        <button onClick={ () => modalClose() }>
          Fechar
        </button>
      </Modal>
      )
    }
    if (requestError.status_code === 404) {
      return (
        <Modal isOpen={ modal } style={customStyles}>
        <p>CEP inválido!</p>
        <button onClick={ () => modalClose() }>
          Fechar
        </button>
      </Modal>
      )
    }
    return (
      <Modal isOpen={ modal } style={customStyles}>
      <p>Ocorreu um erro na requsição, favor tentar novamente</p>
      <button onClick={ () => modalClose() }>
        Fechar
      </button>
    </Modal>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.cepFinder.data,
  modal: state.cepFinder.modalVisible,
  requestError: state.cepFinder.error,
})

const mapDispatchToProps = (dispatch) => ({
  modalClose: () => dispatch(closeModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DisplayData);
