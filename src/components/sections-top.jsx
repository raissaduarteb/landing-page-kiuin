import { useState, useEffect } from "react";
import { Icon } from "./icons";
import KiuinSwoosh from "./sections-product";
import { Logo } from "./sections-product";
import logo from "../assets/Logo.svg";

function Header({ onCTA }) {
  return (
    <header className="header">
      <div className="container header-inner">
        <a className="logo" href="#top">
          <img src={logo} alt="Kiuin" />
        </a>
        <nav className="nav">
          <a href="#sobre">Sobre</a>
          <a href="#como">Como funciona</a>
          <a href="#surfaces">Produto</a>
          <a href="#planos">Planos</a>
          <a href="#faq">FAQ</a>
          <a href="#contato">Contato</a>
        </nav>
        <button className="btn btn-dark" onClick={onCTA}>
          Agendar demo
        </button>
      </div>
    </header>
  );
}

// ---------- HERO ----------
function Hero({ onCTA, copy }) {
  const defaults = {
    eyebrow: "Conheça a Kiuin",
    h1: (
      <>
        Mais tempo cuidando.
        <br />
        menos tempo <span className="accent">administrando</span>.<br />
        sem fricção.
      </>
    ),
    lead: "A plataforma que une agendamento, fila em tempo real e check-in digital para clínicas e hospitais — do consultório à rede hospitalar.",
  };
  const c = copy || defaults;
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-text">
          <span className="eyebrow">
            <span className="dot"></span> {c.eyebrow}
          </span>
          <h1>{c.h1}</h1>
          <p className="lead">{c.lead}</p>
          <div className="hero-ctas">
            <button className="btn btn-primary btn-lg" onClick={onCTA}>
              Agendar demonstração <Icon.ArrowRight />
            </button>
            <a href="#planos" className="btn btn-outline btn-lg">
              Ver planos
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-num">−42%</div>
              <div className="hero-stat-label">
                tempo de espera
                <br />
                na recepção
              </div>
            </div>
            <div>
              <div className="hero-stat-num">+38%</div>
              <div className="hero-stat-label">
                confirmações
                <br />
                de consulta
              </div>
            </div>
            <div>
              <div className="hero-stat-num">4.9★</div>
              <div className="hero-stat-label">
                satisfação
                <br />
                do paciente
              </div>
            </div>
          </div>
        </div>
        <HeroMock />
      </div>
    </section>
  );
}

function HeroMock() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2200);
    return () => clearInterval(id);
  }, []);

  // Rotating queue — the patient at position 1 cycles every tick
  const pool = [
    {
      senha: "C089",
      name: "Francisca Silva",
      esp: "Cardiologia",
      cons: "Cons. 03",
    },
    { senha: "C090", name: "Maria Lopes", esp: "Triagem", cons: "Triagem" },
    { senha: "C091", name: "João Pereira", esp: "Pediatria", cons: "Cons. 02" },
    {
      senha: "C092",
      name: "Ana Beatriz",
      esp: "Cardiologia",
      cons: "Cons. 03",
    },
    { senha: "C093", name: "Lucas Tavares", esp: "Triagem", cons: "Triagem" },
    { senha: "C094", name: "Carlos Vieira", esp: "Geral", cons: "Cons. 01" },
  ];
  const idx = tick % pool.length;
  const now = pool[idx];
  const next = [
    pool[(idx + 1) % pool.length],
    pool[(idx + 2) % pool.length],
    pool[(idx + 3) % pool.length],
  ];
  const minutes = 18 + (tick % 7);

  return (
    <div className="hero-mock">
      {/* Dashboard / Painel — dark navy with cyan accents, à la Kiuin */}
      <div className="device device-main">
        <div className="hpanel">
          <div className="hpanel-top">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Logo />

              <span className="hpanel-divider"></span>
              <span style={{ fontSize: 12, opacity: 0.7 }}>
                Painel da fila · Cardiologia
              </span>
            </div>
            <span className="hpanel-live">
              <span className="d"></span> ao vivo
            </span>
          </div>
          <div className="hpanel-now">
            <div className="hpn-label">Chamando agora</div>
            <div className="hpn-row">
              <div className="hpn-senha" key={now.senha}>
                {now.senha}
              </div>
              <div className="hpn-info">
                <div className="hpn-name">{now.name}</div>
                <div className="hpn-meta">
                  {now.esp} · {now.cons}
                </div>
              </div>
            </div>
          </div>
          <div className="hpanel-list">
            <div className="hpanel-list-hd">
              <span>Próximos na fila</span>
              <span style={{ opacity: 0.6 }}>
                {next.length + 12} aguardando
              </span>
            </div>
            {next.map((q, i) => (
              <div
                key={q.senha + i}
                className="hpanel-card"
                style={{ animationDelay: i * 0.08 + "s" }}
              >
                <span className="hpc-pos">{q.senha}</span>
                <div className="hpc-meta">
                  <div className="hpc-name">{q.name}</div>
                  <div className="hpc-sub">{q.esp}</div>
                </div>
                <span className={"hpc-tag " + (i === 0 ? "soon" : "")}>
                  {i === 0 ? "Próximo" : `+${(i + 1) * 6} min`}
                </span>
              </div>
            ))}
          </div>
          <div className="hpanel-foot">
            <span>Espera média</span>
            <strong>{minutes} min</strong>
          </div>
        </div>
      </div>

      {/* Mini phone — patient app, Kiuin visual DNA */}
      <div className="device device-mini">
        <div className="hphone">
          <div className="hphone-header">
            <KiuinSwoosh />
            <div className="hphone-logo">
              <Logo />
            </div>
            <div className="hphone-bell">
              <span className="bd"></span>
            </div>
          </div>
          <div className="hphone-body">
            <div className="hphone-greet">Sua vez chegou!</div>
            <div className="hphone-ticket">
              <div className="hpt-label">Sua senha</div>
              <div className="hpt-num" key={now.senha}>
                {now.senha}
              </div>
              <div className="hpt-meta">{now.cons} · Dr. Mendes</div>
            </div>
            <div className="hphone-step done">
              <span className="b"></span> Check-in
            </div>
            <div className="hphone-step done">
              <span className="b"></span> Triagem
            </div>
            <div className="hphone-step active">
              <span className="b pulse"></span> Consulta
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- TRUST STRIP ----------
function Strip() {
  return (
    <div className="strip">
      <div className="container strip-inner">
        <div className="strip-label">
          Atendendo clínicas e hospitais em todo o Brasil
        </div>
        <div className="strip-logos">
          <span className="ph">Clínica Vita</span>
          <span className="ph">Hospital São Lucas</span>
          <span className="ph">CardioCentro</span>
          <span className="ph">PediaMais</span>
          <span className="ph">Rede Saúde+</span>
        </div>
      </div>
    </div>
  );
}

// ---------- FEATURES ----------
function Features({ onCTA }) {
  return (
    <section className="s" id="como" style={{ background: "var(--white)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <span className="section-eyebrow">Como a Kiuin pode ajudar</span>
          <h2 className="section-title" style={{ margin: "18px auto 14px" }}>
            Um único sistema, três grandes problemas resolvidos.
          </h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            Substitua planilhas, papel e múltiplos apps por uma plataforma feita
            para clínicas e hospitais — do agendamento ao atendimento.
          </p>
        </div>

        <div className="feature">
          <div className="feature-text">
            <span className="section-eyebrow">01 · Agenda</span>
            <h3>Agendamento online que vira consulta confirmada.</h3>
            <p>
              Seus pacientes agendam pelo celular em segundos. Lembretes
              automáticos por WhatsApp reduzem faltas em até 40% e liberam sua
              secretária para o que importa.
            </p>
            <ul className="feature-list">
              <li>
                <span className="check">
                  <Icon.Check size={14} />
                </span>{" "}
                Link público de agendamento
              </li>
              <li>
                <span className="check">
                  <Icon.Check size={14} />
                </span>{" "}
                Confirmação automática por WhatsApp
              </li>
              <li>
                <span className="check">
                  <Icon.Check size={14} />
                </span>{" "}
                Lembretes 24h e 2h antes
              </li>
              <li>
                <span className="check">
                  <Icon.Check size={14} />
                </span>{" "}
                Sincroniza com Google Agenda
              </li>
            </ul>
            <button className="btn btn-dark" onClick={onCTA}>
              Quero testar <Icon.ArrowRight />
            </button>
          </div>
          <FeatureVisualAgenda />
        </div>

        <div className="feature reverse">
          <div className="feature-text">
            <span className="section-eyebrow">02 · Fila em tempo real</span>
            <h3>Os pacientes sabem exatamente quando chamar.</h3>
            <p>
              Check-in digital ao chegar, posição na fila no celular e chamadas
              via painel. Recepção mais leve, sala de espera vazia, pacientes
              felizes.
            </p>
            <ul className="feature-list">
              <li>
                <span className="check">
                  <Icon.Check size={14} />
                </span>{" "}
                Check-in por QR Code
              </li>
              <li>
                <span className="check">
                  <Icon.Check size={14} />
                </span>{" "}
                Posição da fila em tempo real
              </li>
              <li>
                <span className="check">
                  <Icon.Check size={14} />
                </span>{" "}
                Painel de chamada multi-tela
              </li>
              <li>
                <span className="check">
                  <Icon.Check size={14} />
                </span>{" "}
                Triagem e prioridades
              </li>
            </ul>
            <button className="btn btn-dark" onClick={onCTA}>
              Quero testar <Icon.ArrowRight />
            </button>
          </div>
          <FeatureVisualQueue />
        </div>

        <div className="feature">
          <div className="feature-text">
            <span className="section-eyebrow">03 · Gestão</span>
            <h3>Decisões baseadas em dados — não em achismo.</h3>
            <p>
              Tempo médio de espera, taxa de no-show, ocupação por profissional
              e satisfação do paciente. Tudo num único painel, atualizado em
              tempo real.
            </p>
            <ul className="feature-list">
              <li>
                <span className="check">
                  <Icon.Check size={14} />
                </span>{" "}
                Relatórios automáticos
              </li>
              <li>
                <span className="check">
                  <Icon.Check size={14} />
                </span>{" "}
                Múltiplos usuários e unidades
              </li>
              <li>
                <span className="check">
                  <Icon.Check size={14} />
                </span>{" "}
                Pesquisa de satisfação (NPS)
              </li>
              <li>
                <span className="check">
                  <Icon.Check size={14} />
                </span>{" "}
                Exportação para BI
              </li>
            </ul>
            <button className="btn btn-dark" onClick={onCTA}>
              Quero testar <Icon.ArrowRight />
            </button>
          </div>
          <FeatureVisualReports />
        </div>
      </div>
    </section>
  );
}

function FeatureVisualAgenda() {
  const dows = ["D", "S", "T", "Q", "Q", "S", "S"];
  const days = Array.from({ length: 35 }, (_, i) => i - 2);
  return (
    <div className="feature-visual">
      <div className="fv-agenda">
        <div className="hdr">
          <h5>Maio de 2026</h5>
          <div className="nav-arrows">
            <span>‹</span>
            <span>›</span>
          </div>
        </div>
        <div className="cal">
          {dows.map((d, i) => (
            <div key={"d" + i} className="dow">
              {d}
            </div>
          ))}
          {days.map((n, i) => {
            const day = n;
            const empty = day < 1 || day > 31;
            const isToday = day === 12;
            const isSel = day === 18;
            const hasDot = [4, 7, 11, 14, 20, 23, 26].includes(day);
            return (
              <div
                key={i}
                className={
                  "d" +
                  (empty ? " empty" : "") +
                  (isToday ? " today" : "") +
                  (isSel ? " sel" : "") +
                  (hasDot && !isSel && !isToday ? " has" : "")
                }
              >
                {empty ? "" : day}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function FeatureVisualQueue() {
  return (
    <div className="feature-visual">
      <div className="fv-queue">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <strong style={{ fontSize: 15 }}>Fila ao vivo · Cardiologia</strong>
          <span style={{ fontSize: 11, color: "var(--muted)" }}>
            4 aguardando · 1 em atendimento
          </span>
        </div>
        {[
          {
            pos: "A12",
            name: "Maria Lopes",
            sub: "Triagem concluída • 8 min",
            s: "now",
            l: "Sendo chamada",
          },
          {
            pos: "A13",
            name: "João Pereira",
            sub: "Aguarda triagem • 12 min",
            s: "wait",
            l: "Próximo",
          },
          {
            pos: "A14",
            name: "Ana Beatriz",
            sub: "Aguarda triagem • 18 min",
            s: "wait",
            l: "Na fila",
          },
          {
            pos: "A15",
            name: "Carlos Vieira",
            sub: "Check-in feito • 22 min",
            s: "wait",
            l: "Na fila",
          },
        ].map((q, i) => (
          <div
            key={i}
            className={"queue-card" + (q.s === "now" ? " now" : "")}
            style={{ animationDelay: i * 0.08 + "s" }}
          >
            <span className="pos">{q.pos}</span>
            <div>
              <div className="name">{q.name}</div>
              <div className="sub">{q.sub}</div>
            </div>
            <span className={"status " + q.s}>{q.l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureVisualReports() {
  const bars = [42, 68, 51, 80, 64, 88, 72];
  const labels = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
  return (
    <div className="feature-visual">
      <div className="fv-reports">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <strong>Painel · Esta semana</strong>
          <span style={{ fontSize: 11, opacity: 0.6 }}>Atualizado agora</span>
        </div>
        <div className="kpis">
          <div className="kpi">
            <div className="v">1.284</div>
            <div className="l">Atendimentos</div>
          </div>
          <div className="kpi">
            <div className="v">12 min</div>
            <div className="l">Espera média</div>
          </div>
          <div className="kpi">
            <div className="v">7%</div>
            <div className="l">No-show</div>
          </div>
        </div>
        <div className="chart">
          <div className="lbl">Atendimentos por dia</div>
          <div className="bars">
            {bars.map((b, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flex: 1,
                  gap: 6,
                }}
              >
                <div className="b" style={{ height: b + "%", width: "70%" }} />
                <span style={{ fontSize: 10, opacity: 0.6 }}>{labels[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Header, Hero, Strip, Features };
