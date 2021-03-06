import { LitElement, html } from '@polymer/lit-element';
import { InfofamiliarcedulaStyle } from './infofamiliarcedula.style';

export class Infofamiliarcedula extends LitElement {
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
      ${InfofamiliarcedulaStyle}
    </style>
    <div data-layer="637f6a5c-d722-469b-a5a5-faf5635f6af3" class="infofamiliarcedula">        <div data-layer="216f24c4-818d-42f9-8b41-9bbf6fe43d32" class="rectangulo32"></div>
        <div data-layer="ef9ffbb1-36a8-4f04-ac97-13e9844b0570" class="rectangulo33"></div>
        <svg data-layer="7f58d748-fa8e-4c2f-9c26-d0c1382af3bd" preserveAspectRatio="none" viewBox="1776.001220703125 1096.56591796875 1.5 1.5" class="trazado1"><path d="M 1776.751220703125 1097.31591796875"  /></svg>
        <svg data-layer="e7b02796-2d8d-4fcf-a715-aa4c43a58858" preserveAspectRatio="none" viewBox="-0.75 -0.75 122.5 118.5" class="elipse2"><defs><pattern id="img-elipse2" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><image xlink:href="assets/elipse2.png" x="0" y="0" width="121.00px" height="117.00px" /></pattern></defs><path d="M 60.5 0 C 93.91322326660156 0 121 26.19134521484375 121 58.5 C 121 90.80865478515625 93.91322326660156 117 60.5 117 C 27.08677291870117 117 0 90.80865478515625 0 58.5 C 0 26.19134521484375 27.08677291870117 0 60.5 0 Z" fill="url(#img-elipse2)" /></svg>
        <div data-layer="739305ac-eae4-4ccb-bf40-88619752a832" class="rectangulo60"></div>
        <div data-layer="796f8f4a-5fe5-4936-8eaf-1b2fe9c5bc55" class="estadoClinicoActual">Estado clínico actual</div>
        <div data-layer="648cc051-2de3-48e8-9d66-89b83b0770f8" class="rectangulo61"></div>
        <div data-layer="a5d38d2c-bd9a-47fd-a965-d0a7af3adf8c" class="examenesDeLaboratorioRealizados">Exámenes de laboratorio realizados</div>
        <div data-layer="de8ecca7-50c7-448c-874e-a31850a11c6c" class="rectangulo64"></div>
        <div data-layer="2bfd15b6-8aef-4edc-af2a-daba482305f4" class="imagenesDiagnosticasRealizadas">Imágenes diagnósticas realizadas</div>
        <div data-layer="74b1310d-115a-438f-b854-d2480af16b61" class="rectangulo65"></div>
        <div data-layer="f95f6217-9473-4267-be45-953eda6bb77f" class="planDeManejoVsTratamientoDelDia">Plan de manejo vs Tratamiento del día</div>
        <div data-layer="8ff8ac63-8116-46bc-8a78-2cc78c0bc029" class="rectangulo68"></div>
        <div data-layer="6f0fb9b3-29b3-43e5-ba3c-546bef3e3642" class="observacionAdicional">Observación Adicional</div>
        <div data-layer="059a312c-a3f0-4f2e-9b9e-39f94c5255a2" class="icon"></div>
        <div data-layer="9ad70e24-6496-45df-a04c-ae1e595ce5b3" class="rectangulo72"></div>
        <div data-layer="1818d417-c9f5-49ae-a47c-70ed4d1d94e7" class="necesidadesDelPaciente">Necesidades del paciente</div>
        <svg data-layer="03f387b3-5d2c-4c92-8909-0bba27e008d2" preserveAspectRatio="none" viewBox="0 -1.5 22 3" class="linea2"><path d="M 0 0 L 22 0"  /></svg>
        <svg data-layer="4a8693b9-4d00-450b-9af4-a34e444211e9" preserveAspectRatio="none" viewBox="-1.5 0 3 21" class="linea1"><path d="M 0 0 L 0 21"  /></svg>
        <div data-layer="a70514c4-3ca2-4f3b-9028-c710754777b8" class="rectangulo73"></div>
        <div data-layer="538284fb-7a43-4501-b210-d8103bdf8bad" class="necesidad1">Necesidad 1</div>
        <div data-layer="f16c1708-ca6a-461f-951f-612483511b2b" class="necesidad2">Necesidad 2</div>
        <div data-layer="6e2c4d8d-43c3-4872-b064-53cfb59b9fb2" class="ordenMedica">Orden médica</div>
        <svg data-layer="7e74ef1d-ea80-43ec-a0eb-a8d499875866" preserveAspectRatio="none" viewBox="-0.75 -0.75 24.5 19.5" class="poligono3"><path d="M 11.49999904632568 0 L 23 18 L 0 18 Z"  /></svg>
        <div data-layer="2026758d-cddd-49c4-aa8a-ed63252bcdfd" class="rectangulo78"></div>
        <div data-layer="a7675ea8-1e5e-4630-ad8c-eb87325e1dad" class="seleccioneElArchivo">Seleccione el archivo</div>
        <div data-layer="6fbc1c26-4246-42d4-90dc-b2f1c09ac2fd" class="rectangulo49"></div>
        <div data-layer="00bfa289-696e-44a3-b609-b94f73931eed" class="adjuntar">Adjuntar</div>
        <div data-layer="e7d63268-8beb-42fe-8b8f-7bc4b871cf7b" class="cedulapng">cédula.png</div>
        <div data-layer="a35338d0-0916-40f8-975c-5550a85b3a1c" class="nombreDelPaciente">Nombre del paciente</div>
</div>

    `;
  }
}
customElements.define('infofamiliarcedula-element', Infofamiliarcedula);
