import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="flex  justify-around items-center py-2 text-lg font-semibold bg-pink-400 text-slate-100">
      <div className="flex justify-center items-center gap-1 ">
      <Image
        src="/logo.png"
        width={40}
        height={40}
        alt="Picture of the logo"
      />
      <h1 className="text-2xl">Pink Petal</h1>
      </div>
     <ul className="flex gap-10 ">
     <li className="hover:text-green-400"><a href="">Home</a></li>
     <li className="hover:text-green-400"><a href="">About</a></li>
     <li className="hover:text-green-400"><a href="">Contact</a></li>
     <li className="hover:text-green-400"><a href="">Pictures</a></li>
     <li className="hover:text-green-400"><a href="">Programmes</a></li>
     </ul>
    </nav>
  )
}

export default Navbar