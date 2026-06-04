export default function App() {
  const categories = [
    {
      name: "Laptops",
      products: [
        {
          id: 1,
          title: "UltraBook Pro",
          price: "$1299",
          image:
            "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
          description: "Lightweight performance laptop for professionals.",
        },
        {
          id: 2,
          title: "Gaming Beast X",
          price: "$1899",
          image:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop",
          description: "High-end gaming laptop with RTX graphics.",
        },
      ],
    },
    {
      name: "Smartphones",
      products: [
        {
          id: 3,
          title: "Pixel Max",
          price: "$999",
          image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
          description: "Flagship smartphone with advanced camera features.",
        },
        {
          id: 4,
          title: "Nova Lite",
          price: "$699",
          image:
            "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=1200&auto=format&fit=crop",
          description: "Affordable smartphone with excellent battery life.",
        },
      ],
    },
  ];

  return (
    <div className="container">
      <h1 className="heading">Product Catalog</h1>

      {categories.map((category) => (
        <div key={category.name} className="category-section">
          <h2 className="category-title">{category.name}</h2>

          <div className="product-grid">
            {category.products.map((product) => (
              <div key={product.id} className="card">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />

                <div className="card-body">
                  <h3>{product.title}</h3>

                  <p>{product.description}</p>

                  <div className="card-footer">
                    <span className="price">{product.price}</span>

                    <button className="btn">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}