import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import { FaHollyBerry } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export function NavBar() {
  const { categoryId } = useParams();
  const categories = [
    { id: 1, name: "Trees" },
    { id: 2, name: "Lights" },
    { id: 3, name: "Ornaments and Tree Accesories" },
    { id: 4, name: "Kitchenwear and Tablewear" },
    { id: 5, name: "Home Decor" },
  ];
  return (
    <div className="containerNavBar">
      <Link className="titleStyleNav" to={`/`}>
        <div className="logo">
          <FaHollyBerry style={{ fontSize: "3rem", color: "green" }} />
          <h1 className="title">Merry Deco</h1>
        </div>
      </Link>
      <ul className="containerList">
        <Link className="titleStyleNav" to={`/`}>
          <li className="listItem titleStyleNav">Home</li>
        </Link>
        {categories.map((item, key) => (
          <Link
            className="listItem titleStyleNav"
            to={`/categories/${item.id}`}
            key={item.id}
          >
            {item.name}
          </Link>
        ))}
        <CartWidget size="6rem" color="pink" />
        <p className="cartItems">0</p>
      </ul>
    </div>
  );
}
