import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCEP } from '../actions/cepFinder';
import './FinderComponent.css';
import InputMask from 'react-input-mask';

class FinderComponent extends Component {
  constructor() {
    super();
    this.state = {
      cepInput: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }
  render() {
    const { fetchAPI } = this.props;
    const { cepInput } = this.state;
    return (
      <section className="finder-container">
        <h1>Digite um CEP para pesquisa do endereço </h1>
        <label htmlFor="cep-finder">
          <InputMask
            mask="99999-999"
            id="cep-finder"
            type="text"
            name="cepInput"
            className="finder-input"
            onChange = { this.handleChange }
          />
        </label>
        <button
          type="button"
          className="finder-btn"
          onClick={ () => fetchAPI(cepInput)}
        >
          Pesquisar
        </button>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.cepFinder.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: (cep) => dispatch(fetchCEP(cep)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FinderComponent);