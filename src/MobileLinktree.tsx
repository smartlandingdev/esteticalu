import { useEffect, useRef, useState } from "react";
import lucianeImg from "./assets/lucioane_mobile.png";
import facialSpaImg from "./assets/servicos/massagem  facial.jpg";
import limpezaImg from "./assets/servicos/limpeza facial profunda.jpg";
import fotobioImg from "./assets/servicos/fotobiomodulada.jpg";
import massagemFuncionalImg from "./assets/servicos/massagem funcional.jpg";
import antes1Img from "./assets/antes e depois/antes 1.jpg";
import depois1Img from "./assets/antes e depois/depois 1.jpg";
import antes2Img from "./assets/antes e depois/antes-2.PNG";
import depois2Img from "./assets/antes e depois/depois-2.JPG";
import resultado1Img from "./assets/resultados/resultado (1).JPG";
import resultado5Img from "./assets/resultados/resultado (5).JPG";
import resultadoImg from "./assets/resultados/resultado.JPG";
import "./MobileLinktree.css";

const WPP_BASE = "https://wa.me/5545999149281";
const wpp = (msg: string) => `${WPP_BASE}?text=${encodeURIComponent(msg)}`;

const WHATSAPP_URL  = wpp("Olá Luciane! Vim pelo seu site e gostaria de agendar um horário. 🌿");
const INSTAGRAM_URL = "https://www.instagram.com/esteticalugoncalves/?utm_source=site_mobile&utm_medium=linktree&utm_content=instagram";
const MAPS_URL      = "https://maps.google.com/?q=Rua+Nereu+Ramos+1889+Centro+Cascavel+PR&utm_source=site_mobile&utm_medium=linktree&utm_content=localizacao";

const wppTratamento = (nome: string) =>
  wpp(`Olá Luciane! Vim pelo seu site e tenho interesse no tratamento: ${nome}. Poderia me passar mais informações? 🌿`);

const treatments = [
  { name: "Massagem Funcional Esculpe Detox" },
  { name: "Esculpe Week – A Massagem do Verão" },
  { name: "Esculpe 21" },
  { name: "Esculpe Detox Pós-Operatório" },
  { name: "Drenagem Linfática" },
];

const facialTreatments = [
  { name: "Limpeza de Pele Profunda", img: limpezaImg },
  { name: "Limpeza Fotobiomodulada", img: fotobioImg },
  { name: "Massagem Spa Facial", img: facialSpaImg },
];

const beforeAfter = [
  { antes: antes1Img, depois: depois1Img },
  { antes: antes2Img, depois: depois2Img },
];

export default function MobileLinktree() {
  const whatsappLinkRef = useRef<HTMLAnchorElement>(null);
  const [showFloatingWpp, setShowFloatingWpp] = useState(false);

  useEffect(() => {
    const el = whatsappLinkRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowFloatingWpp(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="ml-root">

      {/* ── FOTO ── */}
      <div className="ml-photo-wrap">
        <img src={lucianeImg} alt="Luciane Gonçalves" className="ml-photo" />
        {/* Vinheta lateral esquerda */}
        <div className="ml-vignette ml-vignette--left" />
        {/* Vinheta lateral direita */}
        <div className="ml-vignette ml-vignette--right" />
        {/* Vinheta topo */}
        <div className="ml-vignette ml-vignette--top" />
        {/* Pontos nos cantos */}
        <span className="ml-dot-tl" /><span className="ml-dot-tr" />
        <span className="ml-dot-bl" /><span className="ml-dot-br" />
        {/* Ornamento topo centro */}
        <div className="ml-hero-ornament">
          <span className="ml-hero-orn-line" />
          <span className="ml-hero-orn-gem">✦</span>
          <span className="ml-hero-orn-line" />
        </div>
      </div>

      {/* ── IDENTIDADE ── */}
      <div className="ml-identity">
        <p className="ml-pre-name">Luciane Gonçalves</p>
        <h1 className="ml-title">Estética Funcional<br />& Bem‑estar</h1>
        <p className="ml-specialty">✦ &nbsp;Especialista em Método Esculpe Detox&nbsp; ✦</p>
        <p className="ml-location">Cascavel, PR</p>
      </div>

      {/* Divider */}
      <div className="ml-divider">
        <span /><span className="ml-divider-gem">✦</span><span />
      </div>

      {/* Tagline */}
      <p className="ml-tagline">
        "O toque que transforma.<br />A beleza que renova."
      </p>

      {/* ── BOTÕES PRINCIPAIS ── */}
      <div className="ml-links">
        <a
          ref={whatsappLinkRef}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-btn ml-btn--primary"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Agendar pelo WhatsApp
        </a>

        <div className="ml-btn-row">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-btn ml-btn--instagram"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Instagram
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-btn ml-btn--maps"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Como Chegar
          </a>
        </div>
      </div>

      {/* ── SOBRE MIM ── */}
      <div className="ml-section-card">
        <h2 className="ml-section-title">Sobre mim</h2>
        <p className="ml-section-text">
          Sou Luciane Gonçalves, especialista em Método Esculpe Detox e apaixonada por estética funcional — uma abordagem que busca o equilíbrio natural do corpo.
        </p>
        <div className="ml-pills">
          <span className="ml-pill">Sem aparelhos</span>
          <span className="ml-pill">Sem cremes</span>
          <span className="ml-pill">Sem dor</span>
        </div>
      </div>

      {/* ── TRATAMENTOS CORPORAIS ── */}
      <div className="ml-section-card">
        <h2 className="ml-section-title">Tratamentos</h2>
        <div className="ml-treat-list">
          {treatments.map((t) => (
            <a
              key={t.name}
              href={wppTratamento(t.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-treat-row"
            >
              <span className="ml-treat-dot" />
              <span className="ml-treat-name">{t.name}</span>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" width="12" height="12" className="ml-treat-arrow">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* ── TRATAMENTOS FACIAIS ── */}
      <div className="ml-section-card">
        <h2 className="ml-section-title">Faciais</h2>
        <div className="ml-facial-grid">
          {facialTreatments.map((t) => (
            <a
              key={t.name}
              href={wppTratamento(t.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-facial-item"
            >
              <div className="ml-facial-img-wrap">
                <img src={t.img} alt={t.name} className="ml-facial-img" />
              </div>
              <span className="ml-facial-name">{t.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* ── BENEFÍCIOS ── */}
      <div className="ml-section-card">
        <h2 className="ml-section-title">Benefícios</h2>
        <p className="ml-section-text">
          Cada toque ativa o corpo de dentro pra fora — promovendo equilíbrio, leveza e bem-estar visível desde a primeira sessão.
        </p>
        <div className="ml-benefits-img-wrap">
          <img src={massagemFuncionalImg} alt="Benefícios dos tratamentos" className="ml-benefits-img" />
        </div>
        <ul className="ml-benefit-list">
          <li className="ml-benefit-item">
            <span className="ml-benefit-dot" />
            <span>Redução de medidas e celulite</span>
          </li>
          <li className="ml-benefit-item">
            <span className="ml-benefit-dot" />
            <span>Melhora da circulação e do trato intestinal</span>
          </li>
          <li className="ml-benefit-item">
            <span className="ml-benefit-dot" />
            <span>Aumento da firmeza e elasticidade da pele</span>
          </li>
          <li className="ml-benefit-item">
            <span className="ml-benefit-dot" />
            <span>Alívio do inchaço e sensação de leveza</span>
          </li>
          <li className="ml-benefit-item">
            <span className="ml-benefit-dot" />
            <span>Relaxamento físico e mental</span>
          </li>
          <li className="ml-benefit-item">
            <span className="ml-benefit-dot" />
            <span>Bem-estar e autoestima renovada</span>
          </li>
        </ul>
      </div>

      {/* ── ANTES E DEPOIS ── */}
      <div className="ml-section-card">
        <h2 className="ml-section-title">Antes & Depois</h2>
        <p className="ml-section-text">
          A transformação é visível e real. Veja os resultados conquistados pelas nossas clientes.
        </p>
        <div className="ml-ad-list">
          {beforeAfter.map((pair, i) => (
            <div key={i} className="ml-ad-pair">
              <div className="ml-ad-side">
                <img src={pair.antes} alt="Antes" className="ml-ad-img" />
                <span className="ml-ad-label ml-ad-label--antes">Antes</span>
              </div>
              <div className="ml-ad-arrow">→</div>
              <div className="ml-ad-side">
                <img src={pair.depois} alt="Depois" className="ml-ad-img" />
                <span className="ml-ad-label ml-ad-label--depois">Depois</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RESULTADOS ── */}
      <div className="ml-section-card">
        <h2 className="ml-section-title">Resultados</h2>
        <p className="ml-section-text">
          Leveza, confiança e autoestima renovada. Veja como o Método Esculpe Detox transforma o corpo e o bem-estar.
        </p>
        <div className="ml-gallery">
          <div className="ml-gallery-item">
            <img src={resultado1Img} alt="Resultado 1" className="ml-gallery-img" />
            <span className="ml-gallery-label">Transformação Real</span>
          </div>
          <div className="ml-gallery-item">
            <img src={resultado5Img} alt="Resultado 2" className="ml-gallery-img" />
            <span className="ml-gallery-label">Resultados Visíveis</span>
          </div>
          <div className="ml-gallery-item">
            <img src={resultadoImg} alt="Resultado 3" className="ml-gallery-img" />
            <span className="ml-gallery-label">Resultados Visíveis</span>
          </div>
        </div>
      </div>

      {/* ── TRATAMENTO ESTÉTICO FUNCIONAL ── */}
      <div className="ml-section-card ml-funcional-card">
        <h2 className="ml-section-title">Tratamento Estético Funcional</h2>
        <p className="ml-funcional-text ml-funcional-lead">
          A massagem funcional do método Esculpe Detox é um tratamento eficaz para disfunções estéticas, como celulite, gordura localizada, flacidez, redução de medidas, trato intestinal, edema e contorno corporal, resultando na melhora da qualidade da pele e a aparência geral do corpo.
        </p>
        <div className="ml-funcional-divider">
          <span className="ml-funcional-dot" />
          <span className="ml-funcional-line" />
          <span className="ml-funcional-dot" />
        </div>
        <p className="ml-funcional-text">
          Este método é conhecido por seus benefícios pelas manobras com sentido e com propósito, que atuam de dentro para fora.
        </p>
        <div className="ml-funcional-highlight">
          <span className="ml-funcional-gem">✦</span>
          <p>E o melhor: os resultados são visíveis desde a primeira sessão.</p>
          <span className="ml-funcional-gem">✦</span>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="ml-section-card ml-cta-card">
        <h2 className="ml-section-title">Sua transformação começa no autocuidado.</h2>
        <p className="ml-section-text">
          Agende sua sessão e viva a experiência de um toque que vai muito além da estética. Porque quando você se cuida, tudo à sua volta se transforma.
        </p>
        <div className="ml-cta-buttons">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-btn ml-btn--primary"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendar atendimento
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-btn ml-btn--instagram ml-btn--full"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Conheça nosso perfil
          </a>
        </div>
      </div>

      {/* ── HORÁRIO ── */}
      <p className="ml-hours">Seg – Sáb &nbsp;|&nbsp; 09:00 – 18:00</p>
      <p className="ml-hours-sub">Atendimento com hora marcada</p>

      {/* ── FOOTER ── */}
      <div className="ml-footer-info">
        <a href="https://wa.me/5545999149281" target="_blank" rel="noopener noreferrer" className="ml-footer-link">
          <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          (45) 99914-9281
        </a>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="ml-footer-link">
          <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
          @esteticalugoncalves
        </a>
        <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="ml-footer-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Rua Nereu Ramos, 1889 — Centro, Cascavel-PR
        </a>
      </div>

      {/* ── SMARTLANDING ── */}
      <div className="ml-smartlanding">
        <span>Desenvolvido por</span>
        <a
          href="https://wa.me/5545998404893?text=Ol%C3%A1%2C%20gostaria%20de%20um%20site%20mobile%20igual%20a%20esse!"
          target="_blank"
          rel="noopener noreferrer"
        >
          SmartLanding
        </a>
      </div>

      {/* ── FAB WHATSAPP ── */}
      {showFloatingWpp && (
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-fab"
          aria-label="WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      )}
    </div>
  );
}
