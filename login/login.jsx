
import React from "react";
import PropTypes from "prop-types";

import "./login.css";

class Login extends React.Component {

  constructor(props) {
      super(props);
      this.state = {

      };
  }
  
  render() {
    
    return (
          <div data-layer="6cbbd584-2dcc-4806-8493-1dd81794ffb3" className="login">        <div data-layer="e50829d4-a775-4314-a2c6-41e5c8623e78" className="ingreseSusCredenciales">Ingrese sus credenciales</div>
        <div data-layer="8d80bc02-8025-42f9-ae6f-5d2657eb7d93" className="rectangulo4"></div>
        <div data-layer="bc787177-5db5-4ab5-8ab5-4c55b4c66d65" className="rectangulo6"></div>
        <div data-layer="a2e2acef-6389-4150-94b2-ebdc0cbf4067" className="usuario">Usuario</div>
        <div data-layer="2fd6a5fd-f8a2-4b6a-98d3-3a50180fdd8f" className="contrasena">Contraseña</div>
        <div data-layer="7b6a4562-45b3-460e-adb0-687d0790cea0" className="rectangulo16"></div>
        <div data-layer="ae1dd255-634a-46f1-89b6-2119c600518f" className="ingresar">Ingresar</div>
        <svg data-layer="3caa6823-d974-4d16-bbea-36cfde7c525c" preserveAspectRatio="none" viewBox="-0.75 -0.75 24.5 19.5" className="poligono1"><path d="M 11.5 0 L 23 18 L 0 18 Z"  /></svg>
</div>

    );
  }
}

Login.propTypes = {

}

Login.defaultProps = {

}


export default Login;
          