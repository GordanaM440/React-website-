import React from "react";
import { MenuList } from "../List/MenuList";
import MenuItem from "../components/MenuItem";
import "../style/Shop.css";

function Menu() {
  return (
    <div className="menu">
      
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}      
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
