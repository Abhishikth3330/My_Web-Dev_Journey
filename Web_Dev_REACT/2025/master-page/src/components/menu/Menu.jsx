import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./menu.css"

const menuItems = [
  {
    title: "STARTERS",
    image: "https://cafekoreabbq.com/wp-content/uploads/2023/02/20230131-BHK_6295-Edit-1030x1030.jpg",
    link: "https://cafekoreabbq.com/starters/",
  },
  {
    title: "MAIN COURSE",
    image: "https://cafekoreabbq.com/wp-content/uploads/2023/02/20230131-BHK_6295-Edit-1030x1030.jpg",
    link: "#",
  },
  {
    title: "DESSERTS",
    image: "https://cafekoreabbq.com/wp-content/uploads/2023/02/20230131-BHK_6295-Edit-1030x1030.jpg",
    link: "#",
  },
];

const Menu = () => {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Our Menu</h2>
      <div className="row g-4">
        {menuItems.map((item, index) => (
          <div key={index} className="col-md-4">
            <a href={item.link} className="text-decoration-none">
              <div className="card menu-card border-0">
                <div className="position-relative">
                  <img
                    src={item.image}
                    className="card-img-top rounded"
                    alt={item.title}
                  />
                  <div className="menu-overlay">
                    <h3 className="text-white text-center">{item.title}</h3>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
