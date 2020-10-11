import { LitElement, html } from '@polymer/lit-element';
import { InfofamiliararchivoadStyle } from './infofamiliararchivoad.style';

export class Infofamiliararchivoad extends LitElement {
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
      ${InfofamiliararchivoadStyle}
    </style>
    <div data-layer="37421864-e60f-469d-8b3b-17145c18c613" class="infofamiliararchivoad">        <div data-layer="5ce29f4c-1045-4333-9249-3659fd74684e" class="rectangulo32"></div>
        <div data-layer="ef2e3a2d-1d9c-4216-8634-0991b5ca4564" class="rectangulo33"></div>
        <svg data-layer="e0271b85-8c72-429e-ad49-9dcc81d732ed" preserveAspectRatio="none" viewBox="1776.001220703125 1096.56591796875 1.5 1.5" class="trazado1"><path d="M 1776.751220703125 1097.31591796875"  /></svg>
        <svg data-layer="2359d3fc-2bb7-4db9-8a03-029c17da94cd" preserveAspectRatio="none" viewBox="-0.75 -0.75 122.5 118.5" class="elipse2"><defs><pattern id="img-elipse2" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><image xlink:href="assets/elipse2.png" x="0" y="0" width="121.00px" height="117.00px" /></pattern></defs><path d="M 60.5 0 C 93.91322326660156 0 121 26.19134521484375 121 58.5 C 121 90.80865478515625 93.91322326660156 117 60.5 117 C 27.08677291870117 117 0 90.80865478515625 0 58.5 C 0 26.19134521484375 27.08677291870117 0 60.5 0 Z" fill="url(#img-elipse2)" /></svg>
        <div data-layer="08355833-884e-4491-a3a1-53436c725fbf" class="rectangulo60"></div>
        <div data-layer="de5b15bf-5f97-4480-99c2-041314d83cd7" class="estadoClinicoActual">Estado clínico actual</div>
        <div data-layer="b2e49be5-738f-492f-8da4-aea2f63de348" class="rectangulo61"></div>
        <div data-layer="abc311b4-63a4-4be5-8d54-9303ba0164a7" class="examenesDeLaboratorioRealizados">Exámenes de laboratorio realizados</div>
        <div data-layer="5d8dc238-88a4-4199-9e8b-c90ac918f8a7" class="rectangulo64"></div>
        <div data-layer="7a7f62f4-e065-479a-8b76-22a692256434" class="imagenesDiagnosticasRealizadas">Imágenes diagnósticas realizadas</div>
        <div data-layer="d392e028-4724-4856-9e91-10ab03909b00" class="rectangulo65"></div>
        <div data-layer="bf159810-7e39-45fd-84a8-c67bca9bea32" class="planDeManejoVsTratamientoDelDia">Plan de manejo vs Tratamiento del día</div>
        <div data-layer="24c56c59-2871-41ef-9f06-cc9da20a45fa" class="rectangulo68"></div>
        <div data-layer="30e0e019-83e9-4f1f-9494-ecf9ba03e26b" class="observacionAdicional">Observación Adicional</div>
        <div data-layer="2d4be9ff-6976-4f9d-9f7f-4dca53c7de67" class="icon"></div>
        <div data-layer="5a5d3bce-0799-40a0-92f0-c3213432cca9" class="rectangulo72"></div>
        <div data-layer="2eb2d096-3139-4d1b-8434-cb4ce52eeb2e" class="necesidadesDelPaciente">Necesidades del paciente</div>
        <svg data-layer="f0c4f16a-3293-4d18-953e-7a1823bf6aa5" preserveAspectRatio="none" viewBox="0 -1.5 22 3" class="linea2"><path d="M 0 0 L 22 0"  /></svg>
        <svg data-layer="9c9bc967-2fee-49ef-b373-03134c66248a" preserveAspectRatio="none" viewBox="-1.5 0 3 21" class="linea1"><path d="M 0 0 L 0 21"  /></svg>
        <div data-layer="f63994dc-3eec-46ed-a703-17317acfaebe" class="rectangulo73"></div>
        <div data-layer="c1756568-0607-4884-88e3-75ecd44e1abf" class="necesidad1">Necesidad 1</div>
        <div data-layer="2fc8f22d-98a0-4cbc-8821-cafc33f6b754" class="necesidad2">Necesidad 2</div>
        <div data-layer="3ba07fa3-023c-4544-99b6-c86edbf45ec4" class="ordenMedica">Orden médica</div>
        <svg data-layer="ea6ab11c-1198-465c-bde3-f77b9c67602d" preserveAspectRatio="none" viewBox="-0.75 -0.75 24.5 19.5" class="poligono3"><path d="M 11.49999904632568 0 L 23 18 L 0 18 Z"  /></svg>
        <div data-layer="4778e26a-3e5a-4cd6-b2ce-afd5474a5738" class="rectangulo78"></div>
        <div data-layer="003ec3d8-eb90-4a53-8908-6ef8a757dae4" class="seleccioneElArchivo">Seleccione el archivo</div>
        <div data-layer="651d2a25-d70b-419e-9b95-156452cde503" class="rectangulo49"></div>
        <div data-layer="7b6a38d6-765c-41f0-9af6-2c5c481c2f43" class="adjuntar">Adjuntar</div>
        <div data-layer="7785f692-0a7b-4ea9-9e7b-9e09aeaacccc" class="nombreDelPaciente">Nombre del paciente</div>
</div>

    `;
  }
}
customElements.define('infofamiliararchivoad-element', Infofamiliararchivoad);
