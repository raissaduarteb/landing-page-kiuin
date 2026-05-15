import { useState, useEffect } from "react";
import { Icon } from "./icons";
import React from "react";

// ---------- STATS BAND ----------
export function StatsBand() {
  return (
    <section className="stats-band">
      <div className="container stats-grid">
        <div className="stat">
          <div className="v">82%</div>
          <div className="l">
            Dos pacientes consideram o atendimento como principal fator de
            escolha da clínica.
          </div>
        </div>
        <div className="stat">
          <div className="v">
            10–20<small style={{ fontSize: "0.55em" }}> min</small>
          </div>
          <div className="l">
            Tempo médio de espera para iniciar a triagem em clínicas e
            hospitais.
          </div>
        </div>
        <div className="stat">
          <div className="v">30%</div>
          <div className="l">
            É a taxa média de faltas em consultas sem confirmação automática.
          </div>
        </div>
        <div className="stat">
          <div className="v">R$ 140k</div>
          <div className="l">
            Custo aproximado anual de uma recepção operando manualmente.
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- PRICING ----------
export function Pricing({ onCTA }) {
  return (
    <section className="s" id="planos">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <span className="section-eyebrow">Planos &amp; preços</span>
          <h2 className="section-title" style={{ margin: "18px auto 14px" }}>
            Um plano para cada estágio da sua operação.
          </h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            Comece pequeno e expanda quando quiser. Sem fidelidade, sem taxa de
            implantação no Starter e no Professional.
          </p>
        </div>

        <div className="pricing-grid">
          <div className="plan">
            <h3>Starter</h3>
            <div className="who">Para consultórios pequenos</div>
            <div className="price">
              <span className="currency">R$</span>
              <span className="amount">—</span>
              <span className="per">/mês</span>
            </div>
            <p className="pricing-note">
              Valor sob consulta — fale com o time para receber a proposta.
            </p>
            <ul>
              <li>
                <span className="ck">
                  <Icon.Check size={11} />
                </span>{" "}
                Agenda online ilimitada
              </li>
              <li>
                <span className="ck">
                  <Icon.Check size={11} />
                </span>{" "}
                Lembretes e confirmações por WhatsApp
              </li>
              <li>
                <span className="ck">
                  <Icon.Check size={11} />
                </span>{" "}
                Link público de agendamento
              </li>
              <li>
                <span className="ck">
                  <Icon.Check size={11} />
                </span>{" "}
                1 profissional + 1 secretaria
              </li>
              <li>
                <span className="ck">
                  <Icon.Check size={11} />
                </span>{" "}
                Suporte por e-mail
              </li>
            </ul>
            <button className="btn btn-outline dark-on-light" onClick={onCTA}>
              Falar com vendas
            </button>
          </div>

          <div className="plan featured">
            <span className="plan-badge">Mais indicado</span>
            <h3>Professional</h3>
            <div className="who">Para clínicas em crescimento</div>
            <div className="price">
              <span className="currency">R$</span>
              <span className="amount">—</span>
              <span className="per">/mês</span>
            </div>
            <p className="pricing-note">
              Valor sob consulta. Inclui tudo do Starter, e muito mais.
            </p>
            <ul>
              <li>
                <span className="ck">
                  <Icon.Check size={11} />
                </span>{" "}
                Fila em tempo real e painel de chamada
              </li>
              <li>
                <span className="ck">
                  <Icon.Check size={11} />
                </span>{" "}
                Check-in digital por QR Code
              </li>
              <li>
                <span className="ck">
                  <Icon.Check size={11} />
                </span>{" "}
                Relatórios e indicadores (NPS, no-show, espera)
              </li>
              <li>
                <span className="ck">
                  <Icon.Check size={11} />
                </span>{" "}
                Multiusuário (até 10 profissionais)
              </li>
              <li>
                <span className="ck">
                  <Icon.Check size={11} />
                </span>{" "}
                Triagem com prioridades
              </li>
              <li>
                <span className="ck">
                  <Icon.Check size={11} />
                </span>{" "}
                Suporte prioritário (chat &amp; telefone)
              </li>
            </ul>
            <button className="btn btn-primary" onClick={onCTA}>
              Agendar demonstração
            </button>
          </div>

          <div className="plan">
            <h3>Enterprise</h3>
            <div className="who">Para hospitais e redes</div>
            <div className="price">
              <span className="amount" style={{ fontSize: 32 }}>
                Sob medida
              </span>
            </div>
            <p className="pricing-note">
              Valor proporcional ao volume e número de unidades. Fale com nosso
              time comercial.
            </p>
            <ul>
              <li>
                <span className="ck">
                  <Icon.Check size={11} />
                </span>{" "}
                Múltiplas unidades e especialidades
              </li>
              <li>
                <span className="ck">
                  <Icon.Check size={11} />
                </span>{" "}
                Integração com prontuário e HIS
              </li>
              <li>
                <span className="ck">
                  <Icon.Check size={11} />
                </span>{" "}
                SSO e auditoria (LGPD)
              </li>
              <li>
                <span className="ck">
                  <Icon.Check size={11} />
                </span>{" "}
                SLA dedicado &amp; gerente de conta
              </li>
              <li>
                <span className="ck">
                  <Icon.Check size={11} />
                </span>{" "}
                Onboarding presencial e treinamento
              </li>
              <li>
                <span className="ck">
                  <Icon.Check size={11} />
                </span>{" "}
                Customizações e API
              </li>
            </ul>
            <button className="btn btn-outline dark-on-light" onClick={onCTA}>
              Falar com vendas
            </button>
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            color: "var(--muted)",
            fontSize: 13,
            marginTop: 32,
          }}
        >
          Todos os planos incluem hospedagem segura, atualizações automáticas e
          conformidade com a LGPD.
        </p>
      </div>
    </section>
  );
}

// ---------- TESTIMONIAL ----------
export function Testimonial() {
  return (
    <section className="s" style={{ background: "var(--white)" }}>
      <div className="container testimonial-wrap">
        <div>
          <div className="t-photo">
            <div className="silhouette"></div>
          </div>
          <div className="t-name">Daniel Cotta</div>
          <div className="t-role">
            Diretor de operações · Hospital de Fortaleza
          </div>
        </div>
        <div>
          <span className="t-quote-mark">“</span>
          <p className="t-quote">
            Antes da Kiuin, a sala de espera era nossa maior reclamação no NPS.
            Em 90 dias, reduzimos a espera média em 38% e o no-show caiu pela
            metade. Hoje é impossível imaginar a operação sem ela.
          </p>
          <div
            style={{ display: "flex", gap: 24, flexWrap: "wrap", marginTop: 8 }}
          >
            <div>
              <div
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: 800,
                  fontSize: 32,
                  color: "var(--cyan)",
                }}
              >
                −38%
              </div>
              <div style={{ fontSize: 13, color: "var(--muted)" }}>
                tempo de espera
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: 800,
                  fontSize: 32,
                  color: "var(--cyan)",
                }}
              >
                −50%
              </div>
              <div style={{ fontSize: 13, color: "var(--muted)" }}>
                taxa de no-show
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: 800,
                  fontSize: 32,
                  color: "var(--cyan)",
                }}
              >
                +62%
              </div>
              <div style={{ fontSize: 13, color: "var(--muted)" }}>
                NPS do paciente
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- CTA / FORM ----------
export function CTAForm() {
  const [form, setForm] = React.useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    cargo: "",
    plano: "Professional",
  });
  const [consent, setConsent] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.nome) errs.nome = true;
    if (!form.email || !/.+@.+\..+/.test(form.email)) errs.email = true;
    if (!form.empresa) errs.empresa = true;
    if (!consent) errs.consent = true;
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <section className="cta-band" id="contato">
      <div className="container cta-grid">
        <form className="cta-card" onSubmit={submit} noValidate>
          <h3>Veja a Kiuin em ação</h3>
          <p className="cta-sub">
            Preencha o formulário e nosso time entrará em contato em até 1 dia
            útil para uma demonstração personalizada.
          </p>
          <div className="form-grid">
            <div className="field">
              <label>Nome</label>
              <input
                value={form.nome}
                onChange={upd("nome")}
                placeholder="Como podemos te chamar?"
                className={errors.nome ? "error" : ""}
              />
            </div>
            <div className="field">
              <label>Empresa</label>
              <input
                value={form.empresa}
                onChange={upd("empresa")}
                placeholder="Clínica, hospital ou rede"
                className={errors.empresa ? "error" : ""}
              />
            </div>
            <div className="field">
              <label>E-mail corporativo</label>
              <input
                type="email"
                value={form.email}
                onChange={upd("email")}
                placeholder="voce@empresa.com.br"
                className={errors.email ? "error" : ""}
              />
            </div>
            <div className="field">
              <label>Telefone / WhatsApp</label>
              <input
                value={form.telefone}
                onChange={upd("telefone")}
                placeholder="(11) 99999-9999"
              />
            </div>
            <div className="field">
              <label>Cargo</label>
              <input
                value={form.cargo}
                onChange={upd("cargo")}
                placeholder="Gestor, diretor, médico..."
              />
            </div>
            <div className="field">
              <label>Plano de interesse</label>
              <select value={form.plano} onChange={upd("plano")}>
                <option>Starter</option>
                <option>Professional</option>
                <option>Enterprise</option>
                <option>Ainda não sei</option>
              </select>
            </div>
          </div>
          <label
            className={"consent" + (consent ? " checked" : "")}
            onClick={() => setConsent(!consent)}
            style={errors.consent ? { color: "#ff9c9c" } : {}}
          >
            <span className="box">{consent && <Icon.Check size={12} />}</span>
            Li e concordo com os Termos de Uso e a Política de Privacidade.
          </label>
          <button
            type="submit"
            className={"btn-submit" + (submitted ? " success" : "")}
          >
            {submitted
              ? "Recebemos! Em breve falamos com você."
              : "Agendar demonstração"}
          </button>
        </form>
        <div className="cta-visual">
          <img src="./assets/ipad-mockup.png" alt="App Kiuin em iPad" />
        </div>
      </div>
    </section>
  );
}

// ---------- FAQ ----------
export function FAQ() {
  const items = [
    {
      q: "Qual é a taxa da Kiuin?",
      a: "Trabalhamos com mensalidade fixa por plano — sem comissão por consulta e sem cobrar nada do paciente. O valor depende do plano (Starter, Professional ou Enterprise) e do número de profissionais ou unidades. Fale com nosso time para receber a proposta.",
    },
    {
      q: "Existe algum custo para os pacientes da minha clínica?",
      a: "Não. O paciente agenda, faz check-in e acompanha a fila sem pagar nada. A Kiuin é cobrada apenas da clínica ou hospital.",
    },
    {
      q: "Como ser um hospital ou clínica apoiada pela Kiuin?",
      a: "Basta solicitar uma demonstração pelo formulário acima. Após uma conversa de 30 minutos, nosso time monta uma proposta sob medida e cuida de toda a implantação — sem custo adicional no Starter e no Professional.",
    },
    {
      q: "Que tipo de soluções a Kiuin pode oferecer para minha empresa?",
      a: "Agendamento online, fila em tempo real, check-in digital, painel de chamada, relatórios de gestão (espera média, no-show, NPS), multiusuário, integração com prontuário e API. Tudo numa única plataforma.",
    },
    {
      q: "A Kiuin está em conformidade com a LGPD?",
      a: "Sim. Todos os dados são criptografados, armazenados em servidores no Brasil e tratados conforme a LGPD. No plano Enterprise oferecemos SSO, trilhas de auditoria e DPA.",
    },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section className="s" id="faq">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-title" style={{ margin: "18px auto 14px" }}>
            Perguntas frequentes
          </h2>
        </div>
        <div className="faq-wrap">
          {items.map((it, i) => (
            <div
              key={i}
              className={"faq-item" + (open === i ? " open" : "")}
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              <div className="faq-q">
                <span>{it.q}</span>
                <span className="faq-chev">
                  <Icon.Plus size={16} />
                </span>
              </div>
              <div className="faq-a">{it.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- FOOTER ----------
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <img
              src="assets/Logo.svg"
              alt="Kiuin"
              style={{ height: 38, filter: "brightness(0) invert(1)" }}
            />
            <p className="footer-tag">
              Ajudamos clínicas e hospitais a encontrar seu máximo potencial —
              paciente por paciente.
            </p>
            <div className="social">
              <a href="#" aria-label="Instagram">
                <Icon.Instagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Icon.Linkedin />
              </a>
              <a href="#" aria-label="WhatsApp">
                <Icon.Whatsapp />
              </a>
            </div>
          </div>
          <div>
            <h4>Produto</h4>
            <ul>
              <li>
                <a href="#como">Agenda</a>
              </li>
              <li>
                <a href="#como">Fila em tempo real</a>
              </li>
              <li>
                <a href="#como">Relatórios</a>
              </li>
              <li>
                <a href="#planos">Planos</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Empresa</h4>
            <ul>
              <li>
                <a href="#">Quem somos</a>
              </li>
              <li>
                <a href="#">Carreira</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contato</h4>
            <ul>
              <li>
                <a href="mailto:ola@kiuin.com.br">ola@kiuin.com.br</a>
              </li>
              <li>
                <a href="#">(11) 3000-0000</a>
              </li>
              <li>
                <a href="#contato">Agendar demo</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Kiuin. Todos os direitos reservados.</span>
          <span>Política de Privacidade · Termos de Uso · LGPD</span>
        </div>
      </div>
    </footer>
  );
}
