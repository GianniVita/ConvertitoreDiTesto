function App() {

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">
        Convertitore di Testo
      </h1>

      <div className="row justify-content-center mb-3">
        <div className="col-md-8">
          <textarea
            className="form-control"
            rows="4"
            placeholder="Scrivi il tuo testo..."
          ></textarea>
        </div>
      </div>

      <div className="d-flex gap-2 justify-content-center">
        <button className="btn btn-primary">MAIUSCOLO</button>
        <button className="btn btn-secondary">minuscolo</button>
        <button className="btn btn-success">Iniziali Maiuscole</button>
        <button className="btn btn-warning">Inverti parole</button>
      </div>
    </div>

  )

}


export default App