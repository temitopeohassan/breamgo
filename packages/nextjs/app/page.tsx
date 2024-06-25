import Link from "next/link";
import type { NextPage } from "next";

const Home: NextPage = () => {

  return (
    <>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Welcome To Breamgo!</h1>
                <p className="mb-5">
                  Breamgo is your market place to the world, a window to showcase and sell your products to the world.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
          <div className="flex-grow bg-base-300 w-full  px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
          <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
    <Link href="/merchantsignup" passHref className="link">
                  Get Started
                </Link>
    </div>
  </div>
</div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
    <Link href="/merchantsignup" passHref className="link">
                  Get Started
                </Link>
    </div>
  </div>
</div>
          </div>
        </div>
    </>
  );
};

export default Home;
