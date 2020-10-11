import { LitElement, html } from '@polymer/lit-element';
import { Infofamiliarnecesidad2Style } from './infofamiliarnecesidad2.style';

export class Infofamiliarnecesidad2 extends LitElement {
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
      ${Infofamiliarnecesidad2Style}
    </style>
    <div data-layer="5ab49474-1024-4545-9758-fe7f98b91235" class="infofamiliarnecesidad2">        <div data-layer="819294a6-f861-409a-bb32-d93d1e9ed9e2" class="rectangulo32"></div>
        <div data-layer="71c3a819-2846-483b-bb02-9ad99e4c9da9" class="rectangulo33"></div>
        <svg data-layer="56b1adb3-9594-47b6-bd85-773fea4267c6" preserveAspectRatio="none" viewBox="1776.001220703125 1096.56591796875 1.5 1.5" class="trazado1"><path d="M 1776.751220703125 1097.31591796875"  /></svg>
        <svg data-layer="676ec691-edaf-4118-896d-4b39d8880b1d" preserveAspectRatio="none" viewBox="-0.75 -0.75 122.5 118.5" class="elipse2"><path d="M 60.5 0 C 93.91322326660156 0 121 26.19134521484375 121 58.5 C 121 90.80865478515625 93.91322326660156 117 60.5 117 C 27.08677291870117 117 0 90.80865478515625 0 58.5 C 0 26.19134521484375 27.08677291870117 0 60.5 0 Z"  /></svg>
        <div data-layer="2f78ff21-8a11-4edd-8f96-d52a1e737a59" class="rectangulo60"></div>
        <div data-layer="fc7a90be-4e2a-4f7d-8b2f-429666688f09" class="estadoClinicoActual">Estado clínico actual</div>
        <div data-layer="f5af3b50-f5f1-4b9b-b7e2-b2598149944f" class="rectangulo61"></div>
        <div data-layer="163c3111-93c2-4a26-972b-8cb4ff049201" class="examenesDeLaboratorioRealizados">Exámenes de laboratorio realizados</div>
        <div data-layer="c3c413b3-198c-48f6-a3e0-59603d27ca62" class="rectangulo64"></div>
        <div data-layer="e22a54b2-7ebc-4960-9382-ab31f9b9743e" class="imagenesDiagnosticasRealizadas">Imágenes diagnósticas realizadas</div>
        <div data-layer="e7927bf2-330e-4102-9b67-ee4c870878b7" class="rectangulo65"></div>
        <div data-layer="ef0b927b-3617-469e-91d2-7d3bf9f8a419" class="planDeManejoVsTratamientoDelDia">Plan de manejo vs Tratamiento del día</div>
        <div data-layer="3f08f832-d4e7-4a21-b26d-9328f78ca4b5" class="icon"></div>
        <div data-layer="c04162d0-206b-4b7f-adb1-1e7e5fe19a0e" class="rectangulo74"></div>
        <div data-layer="3b7fb8d0-dda6-47e8-aabe-a37bb888f32a" class="observacionAdicional">Observación Adicional</div>
        <div data-layer="f53e96b4-462b-4c7d-ab31-29a13fb18da5" class="rectangulo75"></div>
        <div data-layer="779b8794-d1a4-4c65-9dc6-2dbfbe229ec3" class="necesidadesDelPaciente">Necesidades del paciente</div>
        <svg data-layer="ac1e9307-3fb2-41ad-9716-feefcebc9c3a" preserveAspectRatio="none" viewBox="0 -1.5 22 3" class="linea3"><path d="M 0 0 L 22 0"  /></svg>
        <svg data-layer="06529148-cd53-4ed6-abfc-56ddc7cb0358" preserveAspectRatio="none" viewBox="-1.5 0 3 21" class="linea4"><path d="M 0 0 L 0 21"  /></svg>
        <div data-layer="e912afd3-d5be-4bb0-a09b-565c59cdf754" class="rectangulo76"></div>
        <div data-layer="165b1e8e-87f0-4633-b71a-0b7d11f09152" class="necesidad1">Necesidad 1</div>
        <div data-layer="4232b971-51d0-440e-8caf-b6b679945aa9" class="necesidad2">Necesidad 2</div>
        <div data-layer="4be7fddd-fa71-427b-a959-3d25e7f174d8" class="ordenMedica">Orden médica</div>
        <div data-layer="b64ce9a7-23b2-4047-bf16-6e77eb435634" class="rectangulo77"></div>
        <svg data-layer="f02b4a13-b168-4d60-925a-49289fcdd384" preserveAspectRatio="none" viewBox="-0.75 -0.75 24.5 19.5" class="poligono3"><path d="M 11.49999904632568 0 L 23 18 L 0 18 Z"  /></svg>
        <div data-layer="766e2163-582a-4e05-b09e-6cc2d6df42bd" class="nombreDelPaciente">Nombre del paciente</div>
</div>

    `;
  }
}
customElements.define('infofamiliarnecesidad2-element', Infofamiliarnecesidad2);
