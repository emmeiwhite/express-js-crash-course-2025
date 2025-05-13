function ProductForm({ product, setProduct }) {
  function handleInputChange(e) {
    const { name, value } = e.target

    setProduct({
      ...product,
      [name]: value,
      id: new Date().toISOString()
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!product.name || !product.price) return

    console.log(product)

    /** --- We got to send data to the server now --- */
    fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Product added:', data)
      })

    setProduct({
      name: '',
      price: ''
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add New Product</h2>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={product.name}
          onChange={handleInputChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
          required
        />
      </div>

      <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700">
          Price
        </label>
        <input
          id="price"
          name="price"
          type="number"
          step="0.01"
          value={product.price}
          onChange={handleInputChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Add Product
      </button>
    </form>
  )
}

function Products({ products, setProducts, loading, setLoading }) {
  /** 1. First API call with */
  function fetchProducts() {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setProducts(data.products)
        setLoading(false)
      })
  }
  React.useEffect(() => {
    fetchProducts()
  }, [])

  if (loading) {
    return (
      <div className="p-6 bg-white">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Product List</h2>

        <h3>Loading ...</h3>
      </div>
    )
  }
  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Product List</h2>
      <ul className="grid gap-6 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
        {products.map(product => {
          const { id, name, price, image, description } = product
          return (
            <li
              key={id}
              className="p-4 bg-white rounded-xl shadow hover:shadow-md transition-shadow border border-gray-100">
              {/* <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover rounded-md mb-4"
              /> */}
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
              <p className="text-sm text-gray-600">${price}</p>
              <button className="bg-blue border rounded-sm px-3 py-1 ">delete</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function App() {
  const [products, setProducts] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  const [product, setProduct] = React.useState({
    id: '',
    name: '',
    price: ''
  })
  return (
    <>
      <ProductForm
        product={product}
        setProduct={setProduct}
      />
      <Products
        products={products}
        setProducts={setProducts}
        loading={loading}
        setLoading={setLoading}
      />
    </>
  )
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)

root.render(<App />)
