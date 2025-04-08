import React from 'react';

const Categories: React.FC = () => {
  return (
    <section className="carousel__content">
      <div className="landing__categories carousel">
        {/* Food */}
        <div className="category-bubble__container">
          <a href="/ro/ro/medias/mancare_1/" className="category-bubble__link">
            {/* Shadow shape */}
            <div className="category-bubble__shadow">
              {/* White circle */}
              <div className="category-bubble__blob">
                <img
                  src="https://glovo.dhmedia.io/image/customer-assets-glovo/category_group_icons/a79ace566074e380f98056265cac2c0ae312dbfecb165dea7d7247d406f6305d"
                  alt="Food"
                  className="category-bubble__data__img"
                />
              </div>
            </div>
            <div className="category-bubble__title">Food</div>
          </a>
        </div>

        {/* Package Delivery */}
        <div className="category-bubble__container">
          <a href="/ro/ro/medias/bauturi_1/" className="category-bubble__link">
            <div className="category-bubble__shadow">
              <div className="category-bubble__blob">
                <img
                  src="https://glovo.dhmedia.io/image/customer-assets-glovo/category_group_icons/3ec9bff5a4a85485922e6c6f74de529bc7981ac30e5766e8a8648c7d3f28dae2"
                  alt="Package Delivery"
                  className="category-bubble__data__img"
                />
              </div>
            </div>
            <div className="category-bubble__title">Package Delivery</div>
          </a>
        </div>

        {/* Desserts */}
        <div className="category-bubble__container">
          <a href="/ro/ro/medias/deserturi_1/" className="category-bubble__link">
            <div className="category-bubble__shadow">
              <div className="category-bubble__blob">
                <img
                  src="https://glovo.dhmedia.io/image/customer-assets-glovo/category_group_icons/abe0e6d60c9e6e62d73ede9d1eec870dac15283d32b5aeee41045402e466eed3"
                  alt="Desserts"
                  className="category-bubble__data__img"
                />
              </div>
            </div>
            <div className="category-bubble__title">Desserts</div>
          </a>
        </div>

        {/* Pizza */}
        <div className="category-bubble__container">
          <a href="/ro/ro/medias/pizza_1/" className="category-bubble__link">
            <div className="category-bubble__shadow">
              <div className="category-bubble__blob">
                <img
                  src="https://glovo.dhmedia.io/image/customer-assets-glovo/category_group_icons/c0fd33b415a34052003807189c2a8e5c513b1fcef4be33a79052344abecfcc02"
                  alt="Pizza"
                  className="category-bubble__data__img"
                />
              </div>
            </div>
            <div className="category-bubble__title">Pizza</div>
          </a>
        </div>

        {/* Burgers */}
        <div className="category-bubble__container">
          <a href="/ro/ro/medias/burgeri_1/" className="category-bubble__link">
            <div className="category-bubble__shadow">
              <div className="category-bubble__blob">
                <img
                  src="https://glovo.dhmedia.io/image/customer-assets-glovo/category_group_icons/abe0e6d60c9e6e62d73ede9d1eec870dac15283d32b5aeee41045402e466eed3"
                  alt="Burgers"
                  className="category-bubble__data__img"
                />
              </div>
            </div>
            <div className="category-bubble__title">Burgers</div>
          </a>
        </div>

        {/* Sushi */}
        <div className="category-bubble__container">
          <a href="/ro/ro/medias/sushi_1/" className="category-bubble__link">
            <div className="category-bubble__shadow">
              <div className="category-bubble__blob">
                <img
                  src="https://glovo.dhmedia.io/image/customer-assets-glovo/category_group_icons/3ec9bff5a4a85485922e6c6f74de529bc7981ac30e5766e8a8648c7d3f28dae2"
                  alt="Sushi"
                  className="category-bubble__data__img"
                />
              </div>
            </div>
            <div className="category-bubble__title">Sushi</div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Categories;
