const Header = () => {
    return (
      <header
        className="text-center text-white"
        style={{
          backgroundImage: 'url(/Header.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textShadow: '2px 2px 5px black',
          color: 'white',
          padding: '30px 20px',
          position: 'relative',          
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1
          }}
        ></div>
  
     
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1>¡Pizzería Mamma Mia!</h1>
          <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
        </div>
      </header>
    );
  };
  
  export default Header;
  