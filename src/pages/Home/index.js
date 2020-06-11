import React from 'react';
//import { Link } from 'react-router-dom'
import '../../styles/GlobalStyle.css';
import './style.css';

import { BsCodeSlash, BsPeopleCircle, BsPeople, BsBullseye, BsTerminal, BsCardText, BsPhone, BsChevronDown, BsCalendar } from "react-icons/bs";
import { TiSocialLinkedinCircular, TiSocialFacebookCircular, TiSocialGithubCircular, TiSocialAtCircular } from "react-icons/ti";

//import logo from '../../assets/logo.png';
import logoPink from '../../assets/logo-pink.png';
import logoBvs from '../../assets/logo-bvs.png';
import logoSerasa from '../../assets/logo-serasa.png';
import logoForma from '../../assets/logo-forma.png';
import logoFanpage from '../../assets/logo-fanpage.png';
import logoGlobal from '../../assets/logo-global.png';
import logoFecap from '../../assets/logo-fecap.png';
import logoUdemy from '../../assets/logo-udemy.png';
import jobCP from '../../assets/job-cp.jpg';
import jobBVS from '../../assets/job-bvs.jpg';
import jobFloripa from '../../assets/job-floripa.jpg';
import jobVinn from '../../assets/job-vinn.jpg';
import jobDavidVega from '../../assets/job-dv.jpg';
import jobCpLanding from '../../assets/job-cp-landing.jpg';
import jobBVSLanding from '../../assets/job-bvs-landing.jpg';
import jobGeru from '../../assets/job-geru.jpg';
import feCV from '../../assets/felipe-abreu-cv.pdf';
import videoCode from '../../assets/video-code.mp4';
import videoGif from '../../assets/video.gif';

import eu from '../../assets/eu.jpg';


export default function Home(){
   return (
      <main className="">
        <div className="relative height-full">
          <div className="video">
            <div className="text-for-video">
              <div className="logo animate__animated animate__fadeInDown">
                <img src={logoPink} alt="" />
              </div>
              <h1 className="title-left animate__animated animate__fadeInDown animate__delay-1s">
                  <span className="white">Felipe</span>
              </h1>
              <h1 className="title-right animate__animated animate__fadeInUp animate__delay-2s">
                  <span className="white">Abreu</span>
              </h1>
              <h1 className="title-down animate__animated animate__fadeIn animate__delay-3s">
                  <span className="pink">Desenvolvedor Front-End</span>
              </h1>
            </div>
            <video src={videoCode} height="100%" autobuffer="true" poster={videoGif} width="100%" preload="auto" loop autostart="true" autoPlay={true}></video>
          </div>
          <div className="row">
            <div className="down">
              <BsChevronDown color="#fff" size="100" />
            </div>
          </div>
        </div>
        <div className="animate__animated animate__fadeInUp">
          <div className="row">
            <div className="col-xs-12 section-title">
              Sobre Mim
            </div>
          </div>
        </div>
        <div className="animate__animated animate__fadeInUp">
          <div className="container">
            <div className="row m-t-3 m-b-5">
              <div className="col-xs-12 col-sm-12 col-md-3 my-story">
                <img src={eu} className="rounded" alt="Eu" />
                <div className="social-me">
                    <a target="_blank" without="true" rel="noopener noreferrer" href="https://www.linkedin.com/in/felipe-abreu-5a945a39/" className="icon-social"><TiSocialLinkedinCircular size="40" /></a>
                    <a target="_blank" without="true" rel="noopener noreferrer" href="https://www.facebook.com/fe.abreu17/" className="icon-social"><TiSocialFacebookCircular size="39" /></a>
                    <a target="_blank" without="true" rel="noopener noreferrer" href="https://github.com/FeAbreu/" className="icon-social"><TiSocialGithubCircular size="40" /></a>
                    <a target="_blank" without="true" rel="noopener noreferrer" href="mailto:eu@feabreu.com.br" className="icon-social"><TiSocialAtCircular size="40" /></a>
                  </div>
                <div className="about-me">
                  <h2 className="title-resume">
                      <BsPeopleCircle size="20" /> Nome: <span className="border-bottom-pink">Felipe S Abreu</span>
                  </h2>
                  <h2 className="title-resume">
                      <BsCalendar size="20" color="#333" /> Idade: <span className="border-bottom-pink">31 anos</span>
                  </h2>
                  <h2 className="title-resume">
                    <BsPhone size="20" color="#333" /> Celular: <span className="border-bottom-pink">11 96321-4191</span>
                  </h2>
                  <h2 className="title-resume">
                    <BsCardText size="20" color="#333" /> E-mail: <span className="border-bottom-pink">eu@feabreu.com.br</span>
                  </h2>
                  <div className="download-resume">
                    <a href={feCV} className="cta-resume" target="blank">Baixar CV</a>
                  </div>
                </div>
              </div>
              <div className="col-md-offset-1 col-md-8 section-me">
                  <div className="row">
                    <h3 className="col-xs-12 title-about-me border-bottom-pink">Resumo</h3>
                  </div>
                  <p className="text-me">
                    Trabalho como desenvolvedor front-end há 9 anos. Amo o que faço e gosto de me atualizar para criar aplicações cada vez mais intuitivas e otimizadas para os usuários.
                  </p>
                  <p className="text-me">
                    Atualmente trabalho com desenvolvedor front-end na Boa Vista SCPC, atuo na Squad do portal do Consumidor Positivo, criando e desenvolvendo interfaces. No momento estou estudando ReactJS e UX, visando aplicar em todos os meus projetos.
                  </p>
                  <p className="text-me">
                    Estou disponível para trabalhos como freelancer e disposto a enfrentar novos desafios. Entre em contato comigo para conversarmos sobre suas ideias.
                  </p>
                  <p className="text-me">
                    Vamos trabalhar juntos?
                  </p>
                  <div className="row">
                    <h3 className="col-xs-12 title-about-me border-bottom-pink">Carreira</h3>
                  </div>
                  <div className="row">
                    <div className="col-xs-6 col-sm-4 col-md-3 logo-job logos">
                      <img src={logoBvs} alt="Boa Vista" />
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-3 logo-job logos">
                      <img src={logoSerasa} alt="Serasa" />
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-3 logo-job logos">
                      <img src={logoForma} alt="Forma Turismo" />
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-3 logo-job logos">
                      <img src={logoGlobal} alt="Global Map" />
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-3 logo-job logos">
                      <img src={logoFanpage} alt="FanPage Center" />
                    </div>
                  </div>
                  <div className="row">
                    <h3 className="col-xs-12 title-about-me border-bottom-pink">Estudos</h3>
                  </div>
                  <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-3 logo-job logos">
                      <img src={logoFecap} alt="FECAP" />
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-3 logo-job logos">
                      <img src={logoUdemy} alt="Udemy" />
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="animate__animated animate__fadeInUp">
          <div className="row">
            <div className="col-xs-12 section-title">
              Skills
            </div>
          </div>
        </div>
        <div className="animate__animated animate__fadeInUp">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3 skills skill-one">
              <div className="skill-icon">
                <BsCodeSlash size="100" />
              </div>
              <div className="skill-title">
                Desenvolvimento
              </div>
              <div className="skill-text">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>jQuery</p>
                <p>ReactJs</p>
                <p>API REST</p>
                <p>Wordpress</p>
                <p>Moodle</p>
                <p>GIT</p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 skills skill-two">
              <div className="skill-icon">
                <BsBullseye size="100" />
              </div>
              <div className="skill-title">
                UX/UI
              </div>
              <div className="skill-text">
                <p>Criação de Personas</p>
                <p>Jornada do Cliente</p>
                <p>Modelos de Negócios</p>
                <p>Testes de Usabilidade</p>
                <p>Pesquisa</p>
                <p>Storytelling</p>
                <p>Prototipação</p>
                <p>Adobe Photoshop</p>
                <p>Adobe XD</p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 skills skill-three">
              <div className="skill-icon">
                <BsTerminal size="100" />
              </div>
              <div className="skill-title">
                Tools
              </div>
              <div className="skill-text">
                <p>Google Analytics</p>
                <p>Google Optmize</p>
                <p>Google Tag Manager</p>
                <p>Trello</p>
                <p>Kanbanize</p>
                <p>Figma</p>
                <p>InVision</p>
                <p>Insomnia</p>
                <p>Terminal</p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 skills skill-four">
              <div className="skill-icon">
                <BsPeople size="100" />
              </div>
              <div className="skill-title">
                Soft Skills
              </div>
              <div className="skill-text">
                <p>Trabalho em equipe</p>
                <p>Descontraído</p>
                <p>Comunicativo</p>
                <p>Criativo</p>
                <p>Objetivo</p>
                <p>Flexível</p>
                <p>Curioso</p>
                <p>Focado</p>
                <p>Empático</p>
              </div>
            </div>
          </div>
        </div>
        <div className="animate__animated animate__fadeInUp">
          <div className="row">
            <div className="col-xs-12 section-title">
              Trabalhos
            </div>
          </div>
        </div>
        <div className="animate__animated animate__fadeInUp">
          <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-3 jobs">
              <a href="https://www.consumidorpositivo.com.br/" without="true" rel="noopener noreferrer" target="_blank">
                <img src={jobCP} alt="Consumidor Positivo" />
              </a>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-3 jobs">
              <a href="https://www.consumidorpositivo.com.br/" without="true" rel="noopener noreferrer" target="_blank">
                <img src={jobBVS} alt="Boa Vista SCPC" />
              </a>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-3 jobs">
              <a href="https://www.floripaguesthouse.com/" without="true" rel="noopener noreferrer" target="_blank">
                <img src={jobFloripa} alt="Floripa Guest House" />
              </a>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-3 jobs">
              <a href="http://www.vinn.com.br/" without="true" rel="noopener noreferrer" target="_blank">
                <img src={jobVinn} alt="Vinn" />
              </a>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-3 jobs">
              <a href="http://www.davidvega.com.br/" without="true" rel="noopener noreferrer" target="_blank">
                <img src={jobDavidVega} alt="David Vega" />
              </a>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-3 jobs">
              <a href="https://www.consumidorpositivo.com.br/consulte-seu-cpf-agora/" without="true" rel="noopener noreferrer" target="_blank">
                <img src={jobCpLanding} alt="Landing Google" />
              </a>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-3 jobs">
              <a href="https://www.boavistaservicos.com.br/consultas/" without="true" rel="noopener noreferrer" target="_blank">
                <img src={jobBVSLanding} alt="Landing Boa Vista Consultas" />
              </a>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-3 jobs">
              <a href="https://www.consumidorpositivo.com.br/geru/" without="true" rel="noopener noreferrer" target="_blank">
                <img src={jobGeru} alt="Landing Geru" />
              </a>
            </div>
          </div>
        </div>
      </main>
   )
}
