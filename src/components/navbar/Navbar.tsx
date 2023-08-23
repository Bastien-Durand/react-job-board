const Navbar = () => {
  return (
    <nav className="flex justify-center ">
      <ul className="flex justify-center w-full">
        <li className=" w-3/4 text-start">
          <a className=" text-blue-500 hover:text-blue-800" href="#">
            Home
          </a>
        </li>
        <li className=" w-1/6">
          <a className="text-blue-500 hover:text-blue-800" href="#">
            DrkMode
          </a>
        </li>
        <li className=" w-1/6">
          <a className="text-blue-500 hover:text-blue-800" href="#">
            Task Board
          </a>
        </li>
        <li className=" w-1/6">
          <a className="text-gray-400 cursor-not-allowed" href="#">
            Job listings
          </a>
        </li>
        <li className=" w-1/6">
          <a className="text-gray-400 cursor-not-allowed" href="#">
            Email@gmail.com
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
