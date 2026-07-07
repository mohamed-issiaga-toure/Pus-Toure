export default function Navbar(){
    return(
   <div>
       <header className="flex justify-between h-18 bg-slate-600 px-8 items-center  text-white font-bold ">
        <h1 className="text-2xl text-blue-400">Agence digital</h1>
            <nav className="flex justify-around gap-5 items-center text-xl decoration-0 ">
                <a href="" className=" text-white hover:text-blue-400 transition-normal">Accueil</a>
                <a href="" className="  text-white hover:text-blue-400">Solution</a>
                <a href="" className= " text-white hover:text-blue-400">A propos</a>
                <button className="text-center bg-blue-500 rounded-lg border-none py-2 px-6 cursor-pointer"
                >Connexion</button>
            </nav>
       </header>
   </div>
    );
}