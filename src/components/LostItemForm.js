import React, { useState } from 'react';

function LostItemForm() {
    const [formData, setFormData] = useState({
      itemName: '',
      description: '',
      location: '',
      contact: '',
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Lost Item Reported:', formData);
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold">Report Lost Item</h2>
        <div>
          <label>Item Name</label>
          <input type="text" name="itemName" onChange={handleChange} className="w-full p-2 border" required />
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" onChange={handleChange} className="w-full p-2 border" required></textarea>
        </div>
        <div>
          <label>Location</label>
          <input type="text" name="location" onChange={handleChange} className="w-full p-2 border" required />
        </div>
        <div>
          <label>Contact Info</label>
          <input type="text" name="contact" onChange={handleChange} className="w-full p-2 border" required />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    );
  }
  
  export default LostItemForm;