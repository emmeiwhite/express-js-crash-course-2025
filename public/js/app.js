function App() {
  return (
    <>
      <p>React Component for the products rendering!</p>
    </>
  )
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)

root.render(<App />)
