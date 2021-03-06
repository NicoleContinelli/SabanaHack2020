import { LitElement, html } from '@polymer/lit-element';
import { InfoguardadadoctorStyle } from './infoguardadadoctor.style';

export class Infoguardadadoctor extends LitElement {
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
      ${InfoguardadadoctorStyle}
    </style>
    <div data-layer="4aed6e81-cf81-4490-9de5-d59c707d77dd" class="infoguardadadoctor">        <div data-layer="a6940cf2-869b-4dc9-833a-761094fd709c" class="rectangulo32"></div>
        <div data-layer="88e78107-5445-4380-8592-f9fd98335a70" class="rectangulo33"></div>
        <svg data-layer="010ab4cc-176b-4eae-a4fe-df06100fc623" preserveAspectRatio="none" viewBox="1776.001220703125 1096.56591796875 1.5 1.5" class="trazado1"><path d="M 1776.751220703125 1097.31591796875"  /></svg>
        <svg data-layer="73826dad-a244-44ff-8bc8-c820d0e0e503" preserveAspectRatio="none" viewBox="-0.75 -0.75 122.5 118.5" class="elipse2"><defs><pattern id="img-elipse2" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><image xlink:href="assets/elipse2.png" x="0" y="0" width="121.00px" height="117.00px" /></pattern></defs><path d="M 60.5 0 C 93.91322326660156 0 121 26.19134521484375 121 58.5 C 121 90.80865478515625 93.91322326660156 117 60.5 117 C 27.08677291870117 117 0 90.80865478515625 0 58.5 C 0 26.19134521484375 27.08677291870117 0 60.5 0 Z" fill="url(#img-elipse2)" /></svg>
        <div data-layer="642639a3-9b47-42d9-a02b-f0fab5a18f31" class="visualizarReporte">Visualizar Reporte</div>
        <div data-layer="625cd14c-5d70-44e4-9c73-1202607a11b8" class="rectangulo49"></div>
        <div data-layer="2f1d36a0-d668-4d3d-9c4c-3db3ae8a63fa" class="guardar">Guardar</div>
        <div data-layer="a2d70dc2-29b3-4b8e-90bd-942cf3a9343a" class="rectangulo60"></div>
        <div data-layer="756af6f6-e6bb-4b18-95c7-91724caec90b" class="estadoClinicoActual">Estado clínico actual</div>
        <div data-layer="8f76fe02-a45f-4e53-a31c-6ca99fd8bcd5" class="rectangulo61"></div>
        <div data-layer="9619eae7-6a79-46a7-9abb-fb2b230b0b6d" class="examenesDeLaboratorioRealizados">Exámenes de laboratorio realizados</div>
        <div data-layer="165acebd-bbe0-417c-b96f-50ad9dcad7fc" class="rectangulo64"></div>
        <div data-layer="38f3e639-5dda-44f6-88ab-4fbc1b4b3985" class="imagenesDiagnosticasRealizadas">Imágenes diagnósticas realizadas</div>
        <div data-layer="392d7703-7881-48ba-bf06-9c5e09025656" class="rectangulo65"></div>
        <div data-layer="1162c5da-9140-4f5b-9863-32d5dbecd6b4" class="planDeManejoVsTratamientoDelDia">Plan de manejo vs Tratamiento del día</div>
        <div data-layer="50bf7f88-e4e4-4e31-a91d-16c7924b1de5" class="rectangulo68"></div>
        <div data-layer="191c198f-71d8-4d10-bcfc-14f2a14542e1" class="observacionAdicional">Observación Adicional</div>
        <div data-layer="8f676e89-d1ee-4f97-aa09-976cbfb24ee3" class="icon"></div>
        <div data-layer="2f4872bd-77cc-4f34-8c1c-1c7865767ef4" class="paper"></div>
        <div data-layer="32f5f079-321c-4ae9-abbb-45fa581a721a" class="rectangulo70"></div>
        <div data-layer="cec1c1c4-d876-46ff-ab82-e35e6d0dda54" class="laInformacionHaSidoGuardadaConExito">La información ha sido <br />   guardada con éxito </div>
        <div data-layer="daadfc59-62c9-4615-a248-93c5232b1a55" class="nombreDelPaciente">Nombre del paciente</div>
</div>

    `;
  }
}
customElements.define('infoguardadadoctor-element', Infoguardadadoctor);
