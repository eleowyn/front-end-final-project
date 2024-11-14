function Header() {
    return (
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Lost and Found</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#lost-items" className="hover:underline">Lost Items</a></li>
            <li><a href="#found-items" className="hover:underline">Found Items</a></li>
            <li><a href="#report" className="hover:underline">Report Item</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;