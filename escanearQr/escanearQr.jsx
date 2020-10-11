
import React from "react";
import PropTypes from "prop-types";

import "./escanearQr.css";

class EscanearQr extends React.Component {

  constructor(props) {
      super(props);
      this.state = {

      };
  }
  
  render() {
    
    return (
          <div data-layer="3e03f467-c282-45d2-9b16-ffe2b6e23d06" className="escanearQr">        <div data-layer="9d49bd1f-337b-4fdb-8240-94d235611c62" className="escaneeElCodigoDelPaciente">Escanee el código <br />    del paciente</div>
        <div data-layer="7bf5c793-6b6d-41b2-b501-e2ee9747276d" className="rectangulo32"></div>
        <div data-layer="6ea284a4-76cc-44b6-b226-f0d7ed3b0256" className="rectangulo33"></div>
        <div data-layer="575041f7-319d-4c85-bccb-2af2a02fa620" className="rectangulo38"></div>
        <div data-layer="87a709c3-c844-482a-899c-1f3458d211f4" className="logoclinicauniversidaddelasabana250x90"></div>
        <svg data-layer="79ac0e53-c7f2-4252-b48a-f5f277529869" preserveAspectRatio="none" viewBox="1776.001220703125 1096.56591796875 1.5 1.5" className="trazado1"><path d="M 1776.751220703125 1097.31591796875"  /></svg>
        <svg data-layer="0d688964-a618-4516-a0df-5c9e5e1ed6b3" preserveAspectRatio="none" viewBox="-0.75 -0.75 24.5 19.5" className="poligono2"><path d="M 11.49999904632568 0 L 23 18 L 0 18 Z"  /></svg>
</div>

    );
  }
}

EscanearQr.propTypes = {

}

EscanearQr.defaultProps = {

}


export default EscanearQr;
          