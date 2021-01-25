import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Menu from './components/Menu';
import './App.css';

function App() {
  const [inputItens, setInputItens] = React.useState("");
  const [inputTitulo, setInputTitulo] = React.useState("")
  // Redux
  const dispatch = useDispatch()
  const itens = useSelector((state) => state.reducerItens.itens)

  function alterarTitulo(event) {

    setInputTitulo(event.target.value);
    dispatch({ type: "ALTERAR", value: event.target.value })
  }


  function adicionarItem(event) {
    event.preventDefault();

    if (inputItens !== "") {
      const objItem = {
        nome: inputItens
      }

      dispatch({ type: "ADICIONAR", value: objItem })

      setInputItens("");
    }
  }

  function blurForm(event) {
    const form = event.target.parentNode;
    const msg = form.lastChild;
    if (event.target.value !== "") {
      form.classList.add("d-none");
    } else {
      msg.classList.remove("d-none")
    }
  }

  function showForm(){
    const form = document.getElementById("formTitulo")
    console.log(form.classList)
    if(form.firstChild.classList.contains("d-none")){
      form.firstChild.classList.remove("d-none")
    }
  }

  function submitTitle(event) {
    event.preventDefault();
    event.target[0].blur();
  }

  return (
    <div className="container">
      <div className="mt-5 mb-5 p-3 purple-border">
        <Menu />
        <form id="formTitulo" onSubmit={submitTitle}>
          <div className="form-group">
            <label htmlFor="" className="form-label text-white">Título</label>
            <input type="text" className="form-control" value={inputTitulo} onBlur={blurForm} onChange={alterarTitulo} placeholder="Insira o título da lista" />
            <div class="form-text text-danger d-none">Insira o título da sua lista</div>
          </div>
        </form>

        <form onSubmit={adicionarItem} className="d-flex flex-column align-items-center justify-content-center">
          <input type="text" className="mb-2 form-control" placeholder="Digite um item..." value={inputItens} onChange={(event) => { setInputItens(event.target.value) }} />
          <div className="d-flex justify-content-between w-100">
            <button type="submit" className="enviar btn btn-block mt-2">Enviar</button>
            <button className="enviar btn btn-block mt-2" onClick={showForm}>Alterar título</button>
          </div>
        </form>

      </div>
      <ul className="list-group my-2 d-flex flex-wrap flex-row">
        {itens.map((item, index) => {
          return (
            <li className="list-group-item list-group-item-action my-2 p-1 w-25" key={index}>{item.nome}</li>
          )
        }
        )
        }
      </ul>
    </div>
  );
}

export default App;
