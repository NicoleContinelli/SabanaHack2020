import { LitElement, html } from '@polymer/lit-element';
import { InfodoctorhistoriaStyle } from './infodoctorhistoria.style';

export class Infodoctorhistoria extends LitElement {
  static get properties(){
    return {
      
      
    };
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
  }

  
  

  constructor(){
    super();

    
    
    
  }

  handleKeyPress(e) {
      if (e.key === 'Enter') {
        let name;
        let id;
        let index = -1;
        const value = e.target.value;
        if (e.target.name.search("::") > -1) {
            const varCount = e.target.name.split("::").length;
            if (varCount === 2) {
                name = e.target.name.split("::")[0];
                id = e.target.name.split("::")[1];
            } else if (varCount === 3) {
                name = e.target.name.split("::")[0];
                index = e.target.name.split("::")[1];
                id = e.target.name.split("::")[2];
            }
        } else {
            name = e.target.name;
        }
        this.dispatchEvent(new CustomEvent(`${name}:enter`, {
            bubbles: true,
            detail: {
                type: "textinput",
                name: name,
                value: value,
                index: index,
                id: id
          }
        }));
      }
      let name;
      let id;
      let index = -1;
      const value = e.key;
      if (e.target.name.search("::") > -1) {
          const varCount = e.target.name.split("::").length;
          if (varCount === 2) {
              name = e.target.name.split("::")[0];
              id = e.target.name.split("::")[1];
          } else if (varCount === 3) {
              name = e.target.name.split("::")[0];
              index = e.target.name.split("::")[1];
              id = e.target.name.split("::")[2];
          }
      } else {
          name = e.target.name;
      }
      this.dispatchEvent(new CustomEvent(`${name}:keypress`, {
          bubbles: true,
          detail: {
              type: "textinput",
              name: name,
              value: value,
              index: index,
              id: id
          }
      }));
  }

  handleChange(e) {
    let name;
    let id;
    let index = -1;
    const value = e.target.value;
    if (e.target.name.search("::") > -1) {
        const varCount = e.target.name.split("::").length;
        if (varCount === 2) {
            name = e.target.name.split("::")[0];
            id = e.target.name.split("::")[1];
        } else if (varCount === 3) {
            name = e.target.name.split("::")[0];
            index = e.target.name.split("::")[1];
            id = e.target.name.split("::")[2];
        }
    } else {
        name = e.target.name;
    }
    this.dispatchEvent(new CustomEvent(`${name}:change`, {
        bubbles: true,
        detail: {
            type: "textinput",
            name: name,
            value: value,
            index: index,
            id: id
        }
    }));
  }

  handleClick(target, owner, e) {
    let name;
    let id;
    let index = -1;
    if (target.search("::") > -1) {
        const varCount = target.split("::").length;
        if (varCount === 2) {
            name = target.split("::")[0];
            id = target.split("::")[1];
        } else if (varCount === 3) {
            name = target.split("::")[0];
            index = parseInt(target.split("::")[1]);
            id = target.split("::")[2];
            this[`${owner}SelectedIndex`] = index;
            this.requestUpdate();
        }
    } else {
        name = target;
    }
    this.dispatchEvent(new CustomEvent(`${name}:click`, {
        bubbles: true,
        detail: {
            type: "button",
            name: name,
            index: index,
            id: id
        }
    }));
  }

  handleMouseOver(target, owner, e) {
    let name;
    let id;
    let index = -1;
    if (target.search("::") > -1) {
        const varCount = target.split("::").length;
        if (varCount === 2) {
            name = target.split("::")[0];
            id = target.split("::")[1];
        } else if (varCount === 3) {
            name = target.split("::")[0];
            index = parseInt(target.split("::")[1]);
            id = target.split("::")[2];
        }
    } else {
        name = target;
    }
    this.dispatchEvent(new CustomEvent(`${name}:mouseover`, {
        bubbles: true,
        detail: {
            type: "button",
            name: name,
            index: index,
            id: id
        }
    }));
  }

  handleMouseOut(target, owner, e) {
    let name;
    let id;
    let index = -1;
    if (target.search("::") > -1) {
        const varCount = target.split("::").length;
        if (varCount === 2) {
            name = target.split("::")[0];
            id = target.split("::")[1];
        } else if (varCount === 3) {
            name = target.split("::")[0];
            index = parseInt(target.split("::")[1]);
            id = target.split("::")[2];
        }
    } else {
        name = target;
    }
    this.dispatchEvent(new CustomEvent(`${name}:mouseout`, {
        bubbles: true,
        detail: {
            type: "button",
            name: name,
            index: index,
            id: id
        }
    }));
  }

  handleChangeCheckbox(e) {
      let name;
      let id;
      let index = -1;
      const value = e.target.checked;
      if (e.target.name.search("::") > -1) {
          const varCount = e.target.name.split("::").length;
          if (varCount === 2) {
              name = e.target.name.split("::")[0];
              id = e.target.name.split("::")[1];
          } else if (varCount === 3) {
              name = e.target.name.split("::")[0];
              index = e.target.name.split("::")[1];
              id = e.target.name.split("::")[2];
          }
      } else {
          name = e.target.name;
      }
      this.dispatchEvent(new CustomEvent(`${name}:change`, {
          bubbles: true,
          detail: {
              type: "checkbox",
              name: name,
              value: value,
              index: index,
              id: id
          }
      }));
  }

  handleChangeRadio(e) {
      let name;
      let id;
      let index = -1;
      const value = e.target.checked;
      if (e.target.name.search("::") > -1) {
          const varCount = e.target.name.split("::").length;
          if (varCount === 2) {
              name = e.target.name.split("::")[0];
              id = e.target.name.split("::")[1];
          } else if (varCount === 3) {
              name = e.target.name.split("::")[0];
              index = e.target.name.split("::")[1];
              id = e.target.name.split("::")[2];
          }
      } else {
          name = e.target.name;
      }
      this.dispatchEvent(new CustomEvent(`${name}:change`, {
          bubbles: true,
          detail: {
              type: "radio",
              name: name,
              value: value,
              index: index,
              id: id
          }
      }));
  }

  handleChangeRadioGroup(e) {
      let name;
      let id;
      let index = -1;
      const value = e.target.value;
      if (e.target.name.search("::") > -1) {
          const varCount = e.target.name.split("::").length;
          if (varCount === 2) {
              name = e.target.name.split("::")[0];
              id = e.target.name.split("::")[1];
          } else if (varCount === 3) {
              name = e.target.name.split("::")[0];
              index = e.target.name.split("::")[1];
              id = e.target.name.split("::")[2];
          }
      } else {
          name = e.target.name;
      }
      // this.state[groupName] = value;
      this.dispatchEvent(new CustomEvent(`${name}:change`, {
          bubbles: true,
          detail: {
              type: "radiogroup",
              name: name,
              value: value,
              index: index,
              id: id
          }
      }));
  }

  handleChangeSelect(e) {
      let name;
      let id;
      const value = e.target.value;
      if (value !== "selectdefault") {
          if (e.target.id.search("::") > -1) {
              id = e.target.id.split("::")[1];
          }
          name = e.target.name;
          // this.state[groupName] = value;
          this.dispatchEvent(new CustomEvent(`${name}:change`, {
              bubbles: true,
              detail: {
                  type: "select",
                  name: name,
                  value: value,
                  id: id
              }
          }));
      }
  }

  render(){
    
    return html`
    <style>
      ${InfodoctorhistoriaStyle}
    </style>
    <div data-layer="9940c4f4-f0fd-40ef-8d43-122ba5fba07d" class="infodoctorhistoria">        <div data-layer="ed24b457-2a43-44ec-b7b1-80d4507f04d1" class="rectangulo32"></div>
        <div data-layer="ebae2234-beb6-4871-bff0-b73e85fddf47" class="rectangulo33"></div>
        <svg data-layer="52058d43-2b9b-41d6-bb9a-c1a3e6f77357" preserveAspectRatio="none" viewBox="1776.001220703125 1096.56591796875 1.5 1.5" class="trazado1"><path d="M 1776.751220703125 1097.31591796875"  /></svg>
        <svg data-layer="86b6a702-0532-4479-88ed-08b58da3a4d4" preserveAspectRatio="none" viewBox="-0.75 -0.75 122.5 118.5" class="elipse2"><defs><pattern id="img-elipse2" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><image xlink:href="assets/elipse2.png" x="0" y="0" width="121.00px" height="117.00px" /></pattern></defs><path d="M 60.5 0 C 93.91322326660156 0 121 26.19134521484375 121 58.5 C 121 90.80865478515625 93.91322326660156 117 60.5 117 C 27.08677291870117 117 0 90.80865478515625 0 58.5 C 0 26.19134521484375 27.08677291870117 0 60.5 0 Z" fill="url(#img-elipse2)" /></svg>
        <div data-layer="afca0636-ec55-4cd7-a091-b186dcb4ef90" class="visualizarReporte">Visualizar Reporte</div>
        <div data-layer="72f4ac46-ddff-4ca4-a5b2-077a09432ed8" class="rectangulo49"></div>
        <div data-layer="b434b41b-b342-490d-9fcc-fcee4a77548f" class="guardar">Guardar</div>
        <div data-layer="046dc8da-df27-4b7d-9c32-71dc470f19b0" class="rectangulo60"></div>
        <div data-layer="638518c3-8888-468d-8a48-5f2652338989" class="estadoClinicoActual">Estado clínico actual</div>
        <div data-layer="6f6558f9-4f6b-44bc-9b2e-38f8d2851175" class="rectangulo61"></div>
        <div data-layer="cfecb8df-d6fa-4c1f-bfdc-0ab5ac340070" class="examenesDeLaboratorioRealizados">Exámenes de laboratorio realizados</div>
        <div data-layer="af6364ac-699e-4dc2-a807-2e53a808148a" class="rectangulo64"></div>
        <div data-layer="6d223bd7-d75b-4766-8c06-4cca4d492865" class="imagenesDiagnosticasRealizadas">Imágenes diagnósticas realizadas</div>
        <div data-layer="ee63eee8-0918-4d81-b6ba-33eb885c5c58" class="rectangulo65"></div>
        <div data-layer="c9795a85-8fc1-4226-874c-36a72585f772" class="planDeManejoVsTratamientoDelDia">Plan de manejo vs Tratamiento del día</div>
        <div data-layer="c21cb4e0-c2f3-4c04-9a83-d2a7f601acf2" class="rectangulo68"></div>
        <div data-layer="03473f4e-038c-4a5c-b71a-f92d99c69c50" class="observacionAdicional">Observación Adicional</div>
        <div data-layer="d89e9428-9217-484a-80a8-feaabb33842b" class="icon"></div>
        <div data-layer="d298fa9e-66d4-4936-81eb-c6d5d91394dd" class="paper"></div>
        <div data-layer="e5281d18-8445-4e73-b2d7-624e517c216b" class="nombreDelPaciente">Nombre del paciente</div>
        <div data-layer="5902ae2c-0c9a-4764-b20f-f250d637a138" class="historia"></div>
        <svg data-layer="dee7c314-9179-4e6d-8c09-dd13047bf255" preserveAspectRatio="none" viewBox="-0.75 -0.75 24.5 19.5" class="poligono5"><path d="M 11.49999904632568 0 L 23 18 L 0 18 Z"  /></svg>
</div>

    `;
  }
}
customElements.define('infodoctorhistoria-element', Infodoctorhistoria);
