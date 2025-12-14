import React from "react";
import "../styles/menu-style.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <section className="hero">
        <h1>Our Menu</h1>
      </section>
      <section className="menu-category" style={{ background: "white" }}>
        <h2 className="category-title">Appetizers</h2>
        <div className="menu-grid">
          <div className="menu-item">
            <img
              src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
              alt="Bruschetta"
              className="menu-img"
            />
            <div className="menu-info">
              <h3 className="menu-title">Classic Bruschetta</h3>
              <p className="menu-desc">
                Toasted bread topped with fresh tomatoes, basil, garlic, and
                olive oil.
              </p>
              <span className="menu-price">$9.99</span>
            </div>
          </div>
          <div className="menu-item">
            <img
              src="https://images.unsplash.com/photo-1626645738305-d5d0f483f3a0?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
              alt="Calamari"
              className="menu-img"
            />
            <div className="menu-info">
              <h3 className="menu-title">Crispy Calamari</h3>
              <p className="menu-desc">
                Lightly fried squid rings served with spicy marinara and lemon
                aioli.
              </p>
              <span className="menu-price">$12.99</span>
            </div>
          </div>
          <div className="menu-item">
            <img
              src="https://images.unsplash.com/photo-1546833999-b9f581a748ba?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
              alt="Soup"
              className="menu-img"
            />
            <div className="menu-info">
              <h3 className="menu-title">Soup of the Day</h3>
              <p className="menu-desc">
                Chef's daily creation using fresh seasonal ingredients.
              </p>
              <span className="menu-price">$8.99</span>
            </div>
          </div>
        </div>
      </section>
      <section className="menu-category" style={{ background: "var(--light)" }}>
        <h2 className="category-title">Main Courses</h2>
        <div className="menu-grid">
          <div className="menu-item">
            <img
              src="https://images.unsplash.com/photo-1604909052743-94e838986d24?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
              alt="Grilled Salmon"
              className="menu-img"
            />
            <div className="menu-info">
              <h3 className="menu-title">Herb-Grilled Salmon</h3>
              <p className="menu-desc">
                Atlantic salmon with lemon herb butter, served with roasted
                vegetables and quinoa.
              </p>
              <span className="menu-price">$24.99</span>
            </div>
          </div>
          <div className="menu-item">
            <img
              src="https://images.unsplash.com/photo-1625937288797-d2177f5a4e2b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
              alt="Steak"
              className="menu-img"
            />
            <div className="menu-info">
              <h3 className="menu-title">Ribeye Steak</h3>
              <p className="menu-desc">
                12oz premium ribeye grilled to perfection with garlic mashed
                potatoes and asparagus.
              </p>
              <span className="menu-price">$34.99</span>
            </div>
          </div>
          <div className="menu-item">
            <img
              src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
              alt="Pasta"
              className="menu-img"
            />
            <div className="menu-info">
              <h3 className="menu-title">Truffle Mushroom Pasta</h3>
              <p className="menu-desc">
                Handmade fettuccine with wild mushrooms, truffle oil, and
                parmesan cream sauce.
              </p>
              <span className="menu-price">$21.99</span>
            </div>
          </div>
          <div className="menu-item">
            <img
              src="https://images.unsplash.com/photo-1563379926898-4c6c917c1b73?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
              alt="Burger"
              className="menu-img"
            />
            <div className="menu-info">
              <h3 className="menu-title">Signature Savoré Burger</h3>
              <p className="menu-desc">
                House-ground beef patty, aged cheddar, caramelized onions, and
                secret sauce.
              </p>
              <span className="menu-price">$18.99</span>
            </div>
          </div>
        </div>
      </section>
      <section className="menu-category" style={{ background: "white" }}>
        <h2 className="category-title">Desserts</h2>
        <div className="menu-grid">
          <div className="menu-item">
            <img
              src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
              alt="Tiramisu"
              className="menu-img"
            />
            <div className="menu-info">
              <h3 className="menu-title">Classic Tiramisu</h3>
              <p className="menu-desc">
                Layers of espresso-soaked ladyfingers and mascarpone cream,
                dusted with cocoa.
              </p>
              <span className="menu-price">$9.99</span>
            </div>
          </div>
          <div className="menu-item">
            <img
              src="https://images.unsplash.com/photo-1622621795563-e9db21e6cde9?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
              alt="Lava Cake"
              className="menu-img"
            />
            <div className="menu-info">
              <h3 className="menu-title">Molten Chocolate Lava Cake</h3>
              <p className="menu-desc">
                Warm chocolate cake with gooey center, served with vanilla ice
                cream.
              </p>
              <span className="menu-price">$11.99</span>
            </div>
          </div>
          <div className="menu-item">
            <img
              src="https://images.unsplash.com/photo-1563805042-7684c7f057f3?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
              alt="Cheesecake"
              className="menu-img"
            />
            <div className="menu-info">
              <h3 className="menu-title">New York Cheesecake</h3>
              <p className="menu-desc">
                Creamy cheesecake with berry compote and graham cracker crust.
              </p>
              <span className="menu-price">$10.99</span>
            </div>
          </div>
        </div>
        {/* <NavLink to="/contact" className="btn">
          Reserve a Table to Enjoy These Dishes
        </NavLink> */}
      </section>
    </>
  );
};

export default Menu;
