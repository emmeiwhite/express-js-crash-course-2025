function App() {
  const [products, setProducts] = React.useState([])

  function fetchProducts() {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => {
        console.log(data)

        // setProducts
      })
  }
  React.useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Product List</h2>
      <ul className="grid gap-6 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
        <li className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
          <div className="text-lg font-medium text-gray-900">Awesome Product</div>
          <div className="text-sm text-gray-600">This is a brief description of the product.</div>
        </li>

        <li className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
          <div className="text-lg font-medium text-gray-900">Awesome Product</div>
          <div className="text-sm text-gray-600">This is a brief description of the product.</div>
        </li>

        <li className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
          <div className="text-lg font-medium text-gray-900">Awesome Product</div>
          <div className="text-sm text-gray-600">This is a brief description of the product.</div>
        </li>
      </ul>
    </div>
  )
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)

root.render(<App />)
