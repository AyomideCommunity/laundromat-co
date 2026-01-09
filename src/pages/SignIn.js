import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function SignIn() {

  useEffect(() => {
    document.title = 'Sign In - Laundry and Co';
  }, []);

  return (
    <div id="__next" className="__className_e8ce0c">
      <Navigation />
      
      <main className="bg-neutral-100 pt-20 md:pt-24 min-h-screen">
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80" alt="Laundry background" className="w-1/3 h-full absolute top-0 left-0 pointer-events-none object-cover hidden md:block" /><div className="w-full h-full absolute top-0 left-0 bg-brand-blue/30 z-10 backdrop-grayscale md:block hidden"></div><Link to="/"><img alt="Laundry and Co Logo" loading="lazy" width="930" height="234" decoding="async"  className="w-40 absolute md:top-4 top-20 left-4 z-[99] md:block hidden" src="/logo-white.svg"  /></Link><div className="w-full md:w-3/4 h-full absolute top-0 right-0 flex flex-col z-20 bg-brand-beige"><div className="w-full px-6 pt-20 md:hidden"><img alt="Laundry and Co Logo" loading="lazy" width="930" height="234" decoding="async"  className="w-40 left-4 z-[99] md:invert-0 md:hidden" src="/logo.svg"  /></div><div className="w-full h-full flex flex-col p-6 md:p-20 bg-brand-beige"><div className="w-full flex-1 justify-center items-start flex flex-col"><div className="flex flex-col gap-3 w-full md:w-[500px]"><h1 className="font-medium text-3xl text-neutral-800">Welcome back!</h1><p className="font-light text-neutral-600">Track your orders, update your preferences, and enjoy the convenience of having your laundry handled with care.</p><form className="flex flex-col gap-6 mt-7"><label className="form-control w-full"><input autoComplete="email" placeholder="E-mail*" className="input input-ghost !border-b border-b-black rounded-none !bg-transparent w-full !p-0 h-auto m-0 text-sm" type="email" name="email" /></label><label className="form-control w-full"><input autoComplete="new-password" placeholder="Password*" className="input input-ghost !border-b border-b-black rounded-none !bg-transparent w-full !p-0 h-auto m-0 text-sm" type="password" name="password" /></label><button className="btn btn-primary mt-4 !bg-white !text-black !border-none rounded-none font-light">Log In</button></form><div className="w-full border-dashed text-sm text-neutral-800 pt-6 mt-6 flex flex-col gap-5"><div>Don't have an account? <Link className="underline" to="/sign-up">Sign up</Link></div><div>Forgot your password? <Link className="underline" to="/recover-password">Recover password</Link></div></div></div></div><div className="w-full h-40"></div></div></div>
      </main>
      <Footer />
    </div>
  );
}

export default SignIn;
