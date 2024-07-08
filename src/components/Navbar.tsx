function Navbar() {
  return (
    <nav className="px-5 py-5 flex items-center justify-between">
      <div className="uppercase tracking-widest font-bold text-xl">
        LiveInTech
      </div>
      <ul className="list-none space-x-10  flex items-center  font-semibold">
        <li>Home</li>
        <li>Why Studio</li>
        <li>Tracks</li>
        <li>Catalysts</li>
        <li>About</li>
        <li>iRise</li>
        <li>
          <button className="bg-blue-700 text-white uppercase font-normal p-2">
            Pitch
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
