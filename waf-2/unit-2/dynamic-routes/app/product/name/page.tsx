export default async function ProductPage({
    params,
}: {
    params: Promise<{ name: string }>;
}) {
    const { name } = await params;
    return (
        <div>
            <h1>Product Details</h1>
            <p>Product Name: {name}</p>

        </div>
    );
}
