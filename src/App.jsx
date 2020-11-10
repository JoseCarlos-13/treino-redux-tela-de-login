import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import { changeName } from "./store/Actions/alterarCampo";
import { changeAge } from "./store/Actions/alterarCampo";

const App = (props) => {
  let { campoNome, campoIdade } = props;

  return (
    <div className="App">
      <div className="form">
        <h1>Something Awful</h1>

        <div className="fields">
          <strong>Nome: </strong>
          <input
            type="text"
            value={campoNome}
            onChange={(e) => props.setChangeName(e.target.value)}
          />
          <br />

          <strong>Idade: </strong>
          <input
            type="number"
            value={campoIdade}
            onChange={(e) => props.setChangeAge(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

const getStore = (store) => {
  return {
    campoNome: store.campo.name,
    campoIdade: store.campo.age
  };
};

const getActions = (dispatch) => {
  return {
    setChangeName(newValue) {
      dispatch(changeName(newValue));
    },

    setChangeAge(newValue) {
      dispatch(changeAge(newValue));
    }
  };
};

export default connect(getStore, getActions)(App);
