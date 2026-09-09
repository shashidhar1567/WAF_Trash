// import Header from "./components/Header";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// export default function Home() {
//   return (
//     <div className="page">

//       <Header />

//       <Navbar />

//       <main className="main-content">
//         <section className="hero">
//           <h1>Welcome to PSU</h1>

//           <p>
//             Explore career opportunities, resources and
//             useful information through our platform.
//           </p>

//           <button>
//             Explore Now
//           </button>
//         </section>
//       </main>

//       <Footer />

//     </div>
//   );
// }

import Counter from "./client-component/page";
import UsersPage from "./server-component/page";
export default function Home() {
  return (
    <div>
      <h1>Welcome to PSU</h1>
      <p>Explore career opportunities, resources and useful information through our platform.</p>
      <UsersPage />
      <button>Explore Now</button>
      <Counter/>
    </div>
  );
}