export default async function ProductsPage() {
  const response = await fetch(
    "https://api.example.com/products"
  );

  const products = await response.json();

  return (
    <div>
      {products.map((product: any) => (
        <p key={product.id}>
          {product.name}
        </p>
      ))}
    </div>
  );
}