import Link from "next/link";
export default function Products() {
    return (
        <div>
            <h1>Products</h1>
            <Link href="/product/101">Product 101</Link>
            <br />
            <Link href="/product/102">Product 102</Link>
            <br />
            <Link href="/product/103">Product 103</Link>
            <br />
            <Link href="/product/name/XYZ">Product Name: XYZ</Link>
            <Link href="/product/name/PQR">Product Name: PQR</Link>
            <Link href="/product/name/Gadget">Product Name: Gadget</Link>
            <br/>

            
            </div>
    );
}
