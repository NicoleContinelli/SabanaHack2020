import { LitElement, html } from '@polymer/lit-element';
import { InfofamiliarordenStyle } from './infofamiliarorden.style';

export class Infofamiliarorden extends LitElement {
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
      ${InfofamiliarordenStyle}
    </style>
    <div data-layer="fe68db2c-c6d5-419d-84ae-11be163a6f82" class="infofamiliarorden">        <div data-layer="9bb2e7da-52a0-420e-a12a-750da642a284" class="rectangulo32"></div>
        <div data-layer="22e7e8d4-2b9f-4efa-8ec3-dc37411c9dcc" class="rectangulo33"></div>
        <svg data-layer="9a2d0c1c-065b-4c8c-9a32-938f4c155cd9" preserveAspectRatio="none" viewBox="1776.001220703125 1096.56591796875 1.5 1.5" class="trazado1"><path d="M 1776.751220703125 1097.31591796875"  /></svg>
        <svg data-layer="bdb87a0c-b123-4fd5-a9a7-616b386cdf20" preserveAspectRatio="none" viewBox="-0.75 -0.75 122.5 118.5" class="elipse2"><path d="M 60.5 0 C 93.91322326660156 0 121 26.19134521484375 121 58.5 C 121 90.80865478515625 93.91322326660156 117 60.5 117 C 27.08677291870117 117 0 90.80865478515625 0 58.5 C 0 26.19134521484375 27.08677291870117 0 60.5 0 Z"  /></svg>
        <div data-layer="8b00f430-8233-4b63-9801-93165b8a017c" class="rectangulo60"></div>
        <div data-layer="9617e651-3033-4af2-86d7-40be40d5c76d" class="estadoClinicoActual">Estado clínico actual</div>
        <div data-layer="ce5f23fa-846a-468d-ab3a-96410a8743df" class="rectangulo61"></div>
        <div data-layer="c9eab046-1ff4-43b4-9ecc-561e4df4b661" class="examenesDeLaboratorioRealizados">Exámenes de laboratorio realizados</div>
        <div data-layer="11d5ce31-3d89-4adf-a04e-3da36f9ee21c" class="rectangulo64"></div>
        <div data-layer="73b80851-4116-4c49-b9dd-d8d23efc6533" class="imagenesDiagnosticasRealizadas">Imágenes diagnósticas realizadas</div>
        <div data-layer="30c91e04-74ae-47e1-97e0-4118686abb4d" class="rectangulo65"></div>
        <div data-layer="417b17ff-68cf-4ddb-851d-c9b92e0bcda1" class="planDeManejoVsTratamientoDelDia">Plan de manejo vs Tratamiento del día</div>
        <div data-layer="9954a64e-662d-4ebd-a036-b0a9a00463e6" class="icon"></div>
        <div data-layer="efc2a515-7d51-4a5c-afc7-da177c137d6f" class="rectangulo74"></div>
        <div data-layer="5bc41c01-a8c4-45d9-8413-834496d5ab38" class="observacionAdicional">Observación Adicional</div>
        <div data-layer="8b7c9076-b20d-4dcf-a31c-d6091de7445c" class="rectangulo75"></div>
        <div data-layer="af02b836-b66e-46e7-9c23-8beafd6d216d" class="necesidadesDelPaciente">Necesidades del paciente</div>
        <svg data-layer="f5403d5d-a81c-4d34-b5be-70b18d105025" preserveAspectRatio="none" viewBox="0 -1.5 22 3" class="linea3"><path d="M 0 0 L 22 0"  /></svg>
        <svg data-layer="92db0e2a-890b-4c30-9f97-036404954267" preserveAspectRatio="none" viewBox="-1.5 0 3 21" class="linea4"><path d="M 0 0 L 0 21"  /></svg>
        <div data-layer="3f56fae3-808a-45de-ba6d-6e72b009170e" class="rectangulo76"></div>
        <div data-layer="b93c2d47-7f8b-48ea-a7a8-6750d3f853b8" class="necesidad1">Necesidad 1</div>
        <div data-layer="9a9be4c4-fce2-4bc6-91fe-6857f6606852" class="necesidad2">Necesidad 2</div>
        <div data-layer="2627cf10-a799-4a9a-983e-101efa0433e3" class="ordenMedica">Orden médica</div>
        <div data-layer="2c9c3ccf-5140-4c56-a24c-df2d18bfda7c" class="rectangulo77"></div>
        <svg data-layer="1ff5f425-4ebe-466a-ab53-258d52707e51" preserveAspectRatio="none" viewBox="-0.75 -0.75 24.5 19.5" class="poligono3"><path d="M 11.49999904632568 0 L 23 18 L 0 18 Z"  /></svg>
        <div data-layer="d22866ec-ab2a-45da-afc5-3503c8bd915d" class="nombreDelPaciente">Nombre del paciente</div>
</div>

    `;
  }
}
customElements.define('infofamiliarorden-element', Infofamiliarorden);
