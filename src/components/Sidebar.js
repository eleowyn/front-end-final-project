function Sidebar() {
    return (
      <aside className="bg-gray-100 p-4 w-64">
        <h3 className="text-xl font-bold mb-4">Categories</h3>
        <ul className="space-y-2">
          <li><a href="#electronics" className="text-blue-600 hover:underline">Electronics</a></li>
          <li><a href="#documents" className="text-blue-600 hover:underline">Documents</a></li>
          <li><a href="#clothing" className="text-blue-600 hover:underline">Clothing</a></li>
        </ul>
      </aside>
    );
  }
  
  export default Sidebar;