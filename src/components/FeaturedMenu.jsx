import React from "react";

const FeaturedMenu = () => {
  return (
    <section style={{ background: "white" }}>
      <h2 className="section-title">Our Signature Dishes</h2>
      <p className="section-subtitle">
        Handcrafted masterpieces that keep our guests coming back
      </p>

      <div className="menu-grid">
        <div className="dish-card">
          <img
            src="https://assets.epicurious.com/photos/554cb4bf9a0aa705333ea403/master/w_2000,h_1334,c_limit/109533_grilled-salmon-with-basil-and-mint_6x4.jpg"
            alt="Grilled Salmon"
            className="dish-img"
          />
          <div className="dish-info">
            <h3 className="dish-title">Herb-Grilled Salmon</h3>
            <p className="dish-price">24.99TK</p>
          </div>
        </div>

        <div className="dish-card">
          <img
            src="https://thumbs.dreamstime.com/z/colorful-fresh-sushi-platter-showcasing-japanese-food-cuisine-culinary-art-delicious-visually-appealing-meal-372945900.jpg"
            alt="Sushi Platter"
            className="dish-img"
          />
          <div className="dish-info">
            <h3 className="dish-title">Deluxe Sushi Platter</h3>
            <p className="dish-price">32.99TK</p>
          </div>
        </div>

        <div className="dish-card">
          <img
            src="https://www.allrecipes.com/thmb/cuDcxfQAvVOALbKcdoIzXPwqQMo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4499842-257380-AR-spaghetti-alla-carbonara-tradizionali-buckwheat-queen-4x3-eb4e48956fbd4277adcc3556e3bf6ecc.jpg"
            alt="Carbonara"
            className="dish-img"
          />
          <div className="dish-info">
            <h3 className="dish-title">Classic Carbonara</h3>
            <p className="dish-price">18.99TK</p>
          </div>
        </div>

        <div className="dish-card">
          <img
            src="https://thumbs.dreamstime.com/b/colorful-mexican-street-food-platter-featuring-tacos-al-pastor-lime-wedges-grilled-onions-fresh-cilantro-rustic-clay-418796147.jpg"
            alt="Tacos"
            className="dish-img"
          />
          <div className="dish-info">
            <h3 className="dish-title">Street Tacos Trio</h3>
            <p className="dish-price">16.99TK</p>
          </div>
        </div>

        <div className="dish-card">
          <img
            src="https://images.getrecipekit.com/20250325120225-how-20to-20make-20chocolate-20molten-20lava-20cake-20in-20the-20microwave.png?width=650&quality=90&"
            alt="Lava Cake"
            className="dish-img"
          />
          <div className="dish-info">
            <h3 className="dish-title">Molten Chocolate Lava</h3>
            <p className="dish-price">12.99TK</p>
          </div>
        </div>

        <div className="dish-card">
          <img
            src="https://img.freepik.com/premium-photo/shot-chef-cooking-professional-kitchen_579247-45.jpg"
            alt="Chef Special"
            className="dish-img"
          />
          <div className="dish-info">
            <h3 className="dish-title">Chef's Daily Special</h3>
            <p className="dish-price">28.99TK</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
