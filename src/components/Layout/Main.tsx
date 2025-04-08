import React from 'react';

const Main: React.FC = () => {
  return (
    <main 
      className="landing-wrapper row-vertical" 
      style={{ backgroundColor: '#292929', color: '#ffffff' }}
    >
      {/* Landing Links */}
      <section className="landing-links filter-links">
        <h2 
          className="heading-h2 landing-links__title heading-h2--big" 
          style={{ color: '#ffffff' }}
        >
          Top Categories in Medias
        </h2>
        <div className="landing-links__links-container">
          <a 
            href="/ro/ro/medias/restaurante_1/pizza_34701/" 
            style={{ color: '#ffa31a' }}
          >
            Pizza
          </a>
          <a 
            href="/ro/ro/medias/restaurante_1/gratar_34811/" 
            style={{ color: '#ffa31a' }}
          >
            Grill
          </a>
          <a 
            href="/ro/ro/medias/restaurante_1/burgeri_34789/" 
            style={{ color: '#ffa31a' }}
          >
            Burgers
          </a>
        </div>
      </section>

      {/* Corporate container with updated dark theme */}
      <section className="corporate-container">
        <h2 
          className="heading-h2 heading-h2--bigger" 
          style={{ color: '#ffffff' }}
        >
          Let's Succeed Together
        </h2>
        <div className="corporate-container__content">
          <div className="corporate-element">
            <div className="corporate-element__top">
              <img
                src="https://glovoapp.com/images/corporate-container/rider-image-opt.png"
                alt="Become a Courier"
                className="corporate-element__image"
              />
              <div className="corporate-element__text">
                <h3 style={{ color: '#ffa31a' }}>Become a Courier</h3>
                <div style={{ color: '#ffffff' }}>
                  Enjoy flexibility, freedom, and competitive earnings...
                </div>
              </div>
            </div>
            <a href="https://couriers.glovoapp.com/ro/">
              <button 
                type="button" 
                className="helio-button primary"
                style={{
                  backgroundColor: '#ffa31a',
                  color: '#ffffff',
                  border: 'none'
                }}
              >
                Sign Up Here
              </button>
            </a>
          </div>
          {/* ... additional corporate elements if needed ... */}
        </div>
      </section>
    </main>
  );
};

export default Main;
