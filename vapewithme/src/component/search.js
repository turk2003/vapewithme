import React, { useState } from 'react';


const Navbar = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Searching for ${search}`);
  }

  return (
    <nav>
      <h1>Vape With Me  </h1>
      <ul>
        <li><a href="/">หน้าหลัก</a></li>
        <li><a href="/Produce">ผู้ผลิต</a></li>
        <li><a href="/Shop">เลือกดูสินค้า</a></li>
        <li><a href="/Login">เข้าสู่ระบบ</a></li>
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="ค้าหาหัวพอต" value={search} onChange={e => setSearch(e.target.value)} />
        <button type="submit">ค้นหา</button>
      </form>
    </nav>
  );
}

export default Navbar;