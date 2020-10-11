import { LitElement, html } from '@polymer/lit-element';
import { InfofamiliarStyle } from './infofamiliar.style';

export class Infofamiliar extends LitElement {
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
      ${InfofamiliarStyle}
    </style>
    <div data-layer="98cb1267-16e0-4bee-a86e-aec79c45c3de" class="infofamiliar">        <div data-layer="d1bbf6c6-c792-4810-80e1-954d0c181f44" class="rectangulo32"></div>
        <div data-layer="df8cc57e-6197-44da-adce-24df2432fe13" class="rectangulo33"></div>
        <svg data-layer="54aa3110-58e2-41a0-9fce-bcda33ea3060" preserveAspectRatio="none" viewBox="1776.001220703125 1096.56591796875 1.5 1.5" class="trazado1"><path d="M 1776.751220703125 1097.31591796875"  /></svg>
        <svg data-layer="0944c2a8-e09f-41ec-8dbc-0945176be133" preserveAspectRatio="none" viewBox="-0.75 -0.75 122.5 118.5" class="elipse2"><path d="M 60.5 0 C 93.91322326660156 0 121 26.19134521484375 121 58.5 C 121 90.80865478515625 93.91322326660156 117 60.5 117 C 27.08677291870117 117 0 90.80865478515625 0 58.5 C 0 26.19134521484375 27.08677291870117 0 60.5 0 Z"  /></svg>
        <div data-layer="0a452280-49b2-42ca-a58b-9fdf48c39b03" class="rectangulo60"></div>
        <div data-layer="8800686c-1970-4315-a066-fd85e0f0988e" class="estadoClinicoActual">Estado clínico actual</div>
        <div data-layer="ded21d0b-056b-4cac-9caa-e7a17e489eea" class="rectangulo61"></div>
        <div data-layer="ab32e490-d490-4e1b-abd7-beec4d6b066b" class="examenesDeLaboratorioRealizados">Exámenes de laboratorio realizados</div>
        <div data-layer="8caf2aaa-9ed2-419c-8a44-73b927e21f75" class="rectangulo64"></div>
        <div data-layer="816d4eee-0c52-4287-b4a3-0f138d9fcf26" class="imagenesDiagnosticasRealizadas">Imágenes diagnósticas realizadas</div>
        <div data-layer="5753c8be-fdfa-4a69-a21a-d879968a4570" class="rectangulo65"></div>
        <div data-layer="7fe13dfc-7da3-430b-b327-9e285cd131da" class="planDeManejoVsTratamientoDelDia">Plan de manejo vs Tratamiento del día</div>
        <div data-layer="febab14d-0721-4295-b969-a0588e503fb7" class="rectangulo68"></div>
        <div data-layer="1ab373f1-b6bc-4f13-891f-c0daa1b51485" class="observacionAdicional">Observación Adicional</div>
        <div data-layer="80af5cff-e229-44b0-a6a2-51dba169cbd4" class="icon"></div>
        <div data-layer="b295ddd4-a3fc-44c4-a60e-42bbb1bdd6a7" class="rectangulo72"></div>
        <div data-layer="3d36e00b-eded-40c6-ba68-5a3cfa1c22d8" class="necesidadesDelPaciente">Necesidades del paciente</div>
        <svg data-layer="99ce9928-4869-45e8-8054-6f9f367f130b" preserveAspectRatio="none" viewBox="0 -1.5 22 3" class="linea2"><path d="M 0 0 L 22 0"  /></svg>
        <svg data-layer="28f4278c-cfa2-4344-8ed6-56a5421ca472" preserveAspectRatio="none" viewBox="-1.5 0 3 21" class="linea1"><path d="M 0 0 L 0 21"  /></svg>
        <svg data-layer="c010061e-f7e0-47a4-99ff-996d3b9f2a08" preserveAspectRatio="none" viewBox="-0.75 -0.75 24.5 19.5" class="poligono4"><path d="M 11.49999904632568 0 L 23 18 L 0 18 Z"  /></svg>
        <div data-layer="0f48afbd-0627-4939-acbc-5522ab0ba91b" class="nombreDelPaciente">Nombre del paciente</div>
        <div data-layer="807c1b39-204b-4f34-ad56-60d967fe2e6d" class="rectangulo80"></div>
        <div data-layer="27847290-f5c1-46a8-b439-30cdecdbe986" class="phoneXxl"></div>
</div>

    `;
  }
}
customElements.define('infofamiliar-element', Infofamiliar);