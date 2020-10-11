import { LitElement, html } from '@polymer/lit-element';
import { InfofamiliarnecesidadStyle } from './infofamiliarnecesidad.style';

export class Infofamiliarnecesidad extends LitElement {
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
      ${InfofamiliarnecesidadStyle}
    </style>
    <div data-layer="0b5798c0-4462-49c3-9a2e-75e0fc671e92" class="infofamiliarnecesidad">        <div data-layer="bd21f3bd-fe9d-4147-b947-b03abe8b251c" class="rectangulo32"></div>
        <div data-layer="d172adc8-8f6b-4027-ae44-d1d9329a41ac" class="rectangulo33"></div>
        <svg data-layer="209ddaea-f511-4c0f-b939-4b75e5f6785b" preserveAspectRatio="none" viewBox="1776.001220703125 1096.56591796875 1.5 1.5" class="trazado1"><path d="M 1776.751220703125 1097.31591796875"  /></svg>
        <svg data-layer="c1798cbe-3a2b-4793-a2a0-344f2afa710c" preserveAspectRatio="none" viewBox="-0.75 -0.75 122.5 118.5" class="elipse2"><path d="M 60.5 0 C 93.91322326660156 0 121 26.19134521484375 121 58.5 C 121 90.80865478515625 93.91322326660156 117 60.5 117 C 27.08677291870117 117 0 90.80865478515625 0 58.5 C 0 26.19134521484375 27.08677291870117 0 60.5 0 Z"  /></svg>
        <div data-layer="8637d265-3a71-42c8-bafa-5cafc3e8faba" class="rectangulo60"></div>
        <div data-layer="24150ec4-35fc-4923-a9fd-c9f9234e1ca7" class="estadoClinicoActual">Estado clínico actual</div>
        <div data-layer="eb4c0b58-8269-4291-a27a-8f8dff6f81b7" class="rectangulo61"></div>
        <div data-layer="7917e738-d927-45ec-b47f-b4b3003b4a3d" class="examenesDeLaboratorioRealizados">Exámenes de laboratorio realizados</div>
        <div data-layer="44bedfe2-f084-44f1-929e-38f923327517" class="rectangulo64"></div>
        <div data-layer="d669c710-401f-401a-bc94-7f6546c04565" class="imagenesDiagnosticasRealizadas">Imágenes diagnósticas realizadas</div>
        <div data-layer="8e6739c6-10e7-4e4e-9a21-959b33600a6c" class="rectangulo65"></div>
        <div data-layer="28551707-30db-4b39-b276-d32ee13a6343" class="planDeManejoVsTratamientoDelDia">Plan de manejo vs Tratamiento del día</div>
        <div data-layer="92478bd0-b0f7-4008-a966-cd4de0dbf690" class="rectangulo68"></div>
        <div data-layer="2114e879-0ef1-4d4f-b74d-02e73c31abf2" class="observacionAdicional">Observación Adicional</div>
        <div data-layer="b166c63d-91bc-46b3-9398-8192fdcbeb54" class="icon"></div>
        <div data-layer="14ca6993-7ed6-4a37-9d6c-72d3d9bf626d" class="rectangulo72"></div>
        <div data-layer="a86a7c40-3f77-4866-9180-ebe178617c1c" class="necesidadesDelPaciente">Necesidades del paciente</div>
        <svg data-layer="c8877b4e-3ab5-4961-b751-12bc02534916" preserveAspectRatio="none" viewBox="0 -1.5 22 3" class="linea2"><path d="M 0 0 L 22 0"  /></svg>
        <svg data-layer="a82dac28-663d-4b73-9d99-9aa69c00d95b" preserveAspectRatio="none" viewBox="-1.5 0 3 21" class="linea1"><path d="M 0 0 L 0 21"  /></svg>
        <div data-layer="214b394b-9767-4b21-b40d-8e8d3f9763d5" class="rectangulo73"></div>
        <div data-layer="e8e8fc06-d2d0-4963-ba07-0dd0c4c370c1" class="necesidad1">Necesidad 1</div>
        <div data-layer="7d106e4c-bbea-4946-b995-ae9306eb0a00" class="necesidad2">Necesidad 2</div>
        <div data-layer="baea1304-92c0-4023-91cb-acfdc86cfc49" class="ordenMedica">Orden médica</div>
        <svg data-layer="7a5af6f2-2c09-4b13-b86e-dc6e1b874ea3" preserveAspectRatio="none" viewBox="-0.75 -0.75 24.5 19.5" class="poligono3"><path d="M 11.49999904632568 0 L 23 18 L 0 18 Z"  /></svg>
        <div data-layer="03a05c68-488a-4f3c-b056-a967fa469ea3" class="nombreDelPaciente">Nombre del paciente</div>
</div>

    `;
  }
}
customElements.define('infofamiliarnecesidad-element', Infofamiliarnecesidad);
