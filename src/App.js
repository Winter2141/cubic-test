import './App.css';

function App() {
  const stringValue = [];

  const showValue = (event) => {
    event.preventDefault();
    stringValue.push(document.getElementById('input_field').value);
    displayArray();
  }

  const displayArray = () => {
    let content = '';
    stringValue.forEach(ele => {
      content += `<p>${ele}</p>`
    })
    document.getElementById('show_input').innerHTML = content;
  }

  const removeValue = () => {
    const removeString = document.getElementById('input_field').value;

    const deleteIndex = stringValue.indexOf(removeString);

    if (deleteIndex === -1) {
      alert('')
    } else {
      stringValue.splice(deleteIndex, 1);
      displayArray();
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={showValue} class="form-wrapper">
          <input type="text" id="input_field"/>
          <button type='submit'>Display</button>
          <button type='button' onClick={removeValue}>Remove</button>
        </form>
        <div id="show_input"></div>
      </header>
    </div>
  );
}

export default App;
