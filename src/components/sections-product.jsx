import { useState, useEffect } from "react";
import { Icon } from "./icons";
import logo from "../assets/Logo.svg";

export default function KiuinSwoosh({ flip, opacity = 1, color = "#5EB1BF" }) {
  return (
    <svg
      className={"kswoosh" + (flip ? " flip" : "")}
      viewBox="0 0 400 120"
      preserveAspectRatio="none"
      style={{ opacity }}
    >
      <path
        d="M0,0 C 120,90 260,110 400,40 L400,0 Z"
        fill={color}
        opacity="0.95"
      />
      <path
        d="M0,0 C 110,60 240,80 400,20 L400,0 Z"
        fill="#ffffff"
        opacity="0.55"
      />
    </svg>
  );
}

// ---------- KIUIN WORDMARK (used in mocks) ----------
// function KWordmark({ inverse, size = 22 }) {
//   return (
//     <span
//       className={"k-wordmark" + (inverse ? " inv" : "")}
//       style={{ fontSize: size }}
//     >
//       kiuin
//       <span className="k-dot">
//         <span className="k-eye"></span>
//       </span>
//     </span>
//   );
// }

export const Logo = () => {
  return <img src={logo} alt="logo"></img>;
};

// ---------- "TRÊS FRENTES" SECTION ----------
export function ProductSurfaces() {
  return (
    <section className="s surfaces" id="surfaces">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <span className="section-eyebrow">A experiência Kiuin</span>
          <h2 className="section-title" style={{ margin: "18px auto 14px" }}>
            Três frentes. Uma única operação{" "}
            <span style={{ color: "var(--cyan)" }}>
              conectada em tempo real
            </span>
            .
          </h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            O paciente agenda pelo app, faz check-in no totem ao chegar, e a
            equipe acompanha tudo pelo painel. Sem filas, sem papel, sem
            retrabalho.
          </p>
        </div>

        <div className="surfaces-grid">
          <SurfaceCard
            tag="01 · Paciente"
            title="App do paciente"
            sub="Agendamento, fila e lembretes no celular — antes mesmo de sair de casa."
          >
            <PhoneMock />
          </SurfaceCard>

          <SurfaceCard
            tag="02 · Recepção"
            title="Totem de check-in"
            sub="Check-in autônomo no balcão. Triagem por CPF ou cartão e senha impressa em segundos."
            wide
          >
            <TotemMock />
          </SurfaceCard>

          <SurfaceCard
            tag="03 · Sala de espera"
            title="Painel de chamada"
            sub="Senhas, consultório e tempo médio em tela cheia para o seu público."
            wide
          >
            <PanelMock />
          </SurfaceCard>
        </div>
      </div>
    </section>
  );
}

// ---------- SURFACE CARD WRAPPER ----------
function SurfaceCard({ tag, title, sub, children, wide }) {
  return (
    <div className={"surface-card" + (wide ? " wide" : "")}>
      <div className="surface-frame">{children}</div>
      <div className="surface-meta">
        <span className="surface-tag">{tag}</span>
        <h3>{title}</h3>
        <p>{sub}</p>
      </div>
    </div>
  );
}

// ---------- MOCK: PHONE (app do paciente — based on TelaPrincipalFilaSelecionadaCheck) ----------
function PhoneMock() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2400);
    return () => clearInterval(id);
  }, []);
  const pos = 5 - (tick % 5);
  const min = Math.max(4, 20 - (tick % 5) * 4);
  return (
    <div className="phone">
      <div className="phone-screen">
        <div className="phone-statusbar">
          <span>9:41</span>
          <span className="dots">●●●</span>
        </div>
        <div className="phone-header">
          <KiuinSwoosh />
          <div className="phone-logo">
            <Logo />
          </div>
          <div className="phone-bell">
            <span className="bell-dot"></span>
          </div>
        </div>
        <div className="phone-tabs">
          <span className="active">Consultas</span>
          <span>Fila</span>
          <span>Vacina</span>
          <span>Perfil</span>
        </div>

        <div className="phone-card">
          <div className="pcard-row">
            <div className="pcard-ic">
              <Icon.Clock size={28} />
            </div>
            <div>
              <div className="pcard-label">você está na posição:</div>
              <div className="pcard-big">
                {pos}
                <sup>º</sup>
              </div>
            </div>
          </div>
          <div className="pcard-row">
            <div className="pcard-ic">
              <Icon.People size={28} />
            </div>
            <div>
              <div className="pcard-label">Espera estimada de:</div>
              <div className="pcard-big small">
                {min}
                <small> min</small>
              </div>
            </div>
          </div>
          <div className="pcard-divider"></div>
          <div className="pcard-doctor">
            <div className="pcard-photo"></div>
            <div>
              <div className="pcard-doc-name">Dra. Aretha Franklin</div>
              <div className="pcard-doc-meta">Ginecologista · CRM 333-333</div>
              <div className="pcard-doc-meta">
                <Icon.Pin size={11} /> Hosp. Sírio Libanês
              </div>
              <div className="pcard-doc-meta">
                <Icon.Calendar size={11} /> 26/08/2024
              </div>
            </div>
          </div>
          <div className="pcard-cta">Adicionar lembrete</div>
        </div>

        <div className="phone-card-outline">
          <div className="pcard-outline-title">
            Não encontrou o que procurava?
          </div>
          <div className="pcard-cta dark">Acessar ajuda</div>
        </div>
      </div>
    </div>
  );
}

// ---------- MOCK: TOTEM (landscape — based on CheckInFinalizado) ----------
function TotemMock() {
  return (
    <div className="totem">
      <div className="totem-curve top">
        <KiuinSwoosh />
      </div>
      <div className="totem-curve bot">
        <KiuinSwoosh flip />
      </div>

      <div className="totem-head">
        <div className="totem-steps">
          <div className="tstep done">
            <div className="tdot">
              <Icon.Check size={12} />
            </div>
            <span>Identificação</span>
          </div>
          <div className="tline done"></div>
          <div className="tstep done">
            <div className="tdot">
              <Icon.Check size={12} />
            </div>
            <span>Escolher atendimento</span>
          </div>
          <div className="tline done"></div>
          <div className="tstep active">
            <div className="tdot"></div>
            <span>Aguardar</span>
          </div>
        </div>
        <div className="totem-logo">
          <Logo />
        </div>
      </div>

      <div className="totem-title">
        <div className="t-name">Francisca,</div>
        <div className="t-sub">
          Aguarde ser chamada, seu check-in foi realizado com sucesso!
        </div>
      </div>

      <div className="totem-card">
        <div className="totem-card-left">
          <div className="tc-row">
            <div className="tc-ic">
              <Icon.Clock size={36} />
            </div>
            <div>
              <div className="tc-label">Você está na posição:</div>
              <div className="tc-big">
                5<sup>º</sup>
              </div>
            </div>
          </div>
          <div className="tc-row">
            <div className="tc-ic">
              <Icon.People size={36} />
            </div>
            <div>
              <div className="tc-label">Espera estimada de:</div>
              <div className="tc-big small">
                20<small> min</small>
              </div>
            </div>
          </div>
        </div>
        <div className="totem-card-divider"></div>
        <div className="totem-card-right">
          <div className="tc-label-w">
            Quer acompanhar a fila em tempo real?
          </div>
          <div className="tc-help">
            Escaneie o QR Code abaixo ou clique em "acompanhar fila".
          </div>
          <div className="tc-qr">
            <div className="qr-pattern">
              {Array.from({ length: 49 }).map((_, i) => (
                <span
                  key={i}
                  className={"qb " + (i % 3 === 0 || i % 5 === 0 ? "on" : "")}
                ></span>
              ))}
              <span className="qb corner tl"></span>
              <span className="qb corner tr"></span>
              <span className="qb corner bl"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="totem-actions">
        <div className="t-btn outline">Acompanhar fila</div>
        <div className="t-btn solid">Finalizar sessão</div>
      </div>
    </div>
  );
}

// ---------- MOCK: PANEL (waiting room TV — chamada de senhas) ----------
function PanelMock() {
  const [cur, setCur] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setCur((c) => c + 1), 2200);
    return () => clearInterval(id);
  }, []);
  const senhas = ["C089", "C088", "C087", "C086", "C085"];
  const consultorios = [
    "Cons. 03",
    "Cons. 01",
    "Cons. 02",
    "Cons. 03",
    "Cons. 04",
  ];
  const i = cur % 5;
  return (
    <div className="panel">
      <div className="panel-top">
        <div className="panel-logo">
          <Logo />
        </div>
        <div className="panel-clock">
          <Icon.Clock size={14} /> 09:24 · Hospital de Fortaleza
        </div>
      </div>
      <div className="panel-body">
        <div className="panel-now">
          <div className="now-label">Chamando agora</div>
          <div className="now-senha pulse" key={i}>
            {senhas[i]}
          </div>
          <div className="now-cons">
            {consultorios[i]} <span className="arrow">→</span>
          </div>
        </div>
        <div className="panel-next">
          <div className="next-label">Próximas senhas</div>
          {[1, 2, 3, 4].map((off) => (
            <div
              key={off}
              className="next-row"
              style={{ opacity: 1 - off * 0.15 }}
            >
              <span className="ns">{senhas[(i + off) % 5]}</span>
              <span className="nc">{consultorios[(i + off) % 5]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="panel-foot">
        <span>
          Tempo médio: <strong>12 min</strong>
        </span>
        <span className="live">
          <span className="dot"></span> ao vivo
        </span>
      </div>
    </div>
  );
}
