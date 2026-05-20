export default {
  global: {
    Name:
      'Gestión integral del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST) en Colombia',
    Description:
      'Este componente formativo está orientado al desarrollo de competencias para implementar, gestionar y mejorar el Sistema de Gestión de Seguridad y Salud en el Trabajo. Aborda fundamentos del sistema, marco normativo vigente, identificación de peligros, evaluación de riesgos, seguimiento y medición, y mejora continua. Fortalece la aplicación de instrumentos técnicos, el cumplimiento de requisitos legales y la elaboración de informes que promuevan entornos laborales seguros y saludables.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Sistema de Gestión de Seguridad y Salud en el Trabajo en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto, alcance y estructura del SG-SST',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Contexto organizacional, planificación y control',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Roles, responsabilidades y documentos del SG-SST',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Importancia de la seguridad y salud en el trabajo',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Marco normativo, responsabilidades y lineamientos del SG-SST',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Normativa en SST nacional y de la Comunidad Andina',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Matriz de requisitos legales y régimen sancionatorio en SST',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Responsabilidades legales y estándares mínimos del SG-SST',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión, seguimiento y medición del SG-SST',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Identificación de peligros y evaluación de riesgos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Condiciones de trabajo y condiciones de salud',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Instrumentos de seguimiento, medición e indicadores',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Autoevaluación y protocolos de bioseguridad',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Mejora continua y plan de mejora del SG-SST',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Diagnóstico del sistema y auditorías internas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'No conformidades y análisis de hallazgos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Acciones correctivas y preventivas',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Plan de trabajo anual e informes de mejora',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Accidente de trabajo',
      significado:
        'suceso repentino que ocurre en el trabajo y puede causar lesión o muerte.',
    },
    {
      termino: 'Autoevaluación',
      significado:
        'proceso mediante el cual la empresa revisa su propio desempeño en seguridad y salud en el trabajo.',
    },
    {
      termino: 'Condiciones de trabajo',
      significado:
        'características del entorno laboral que pueden influir en la salud y seguridad de los trabajadores.',
    },
    {
      termino: 'Condiciones de salud',
      significado:
        'estado físico y mental del trabajador relacionado con el trabajo.',
    },
    {
      termino: 'Contexto organizacional',
      significado:
        'factores internos y externos que afectan el SG-SST en la empresa.',
    },
    {
      termino: 'Diagnóstico del sistema',
      significado:
        'análisis inicial que permite conocer el estado del SG-SST en una organización.',
    },
    {
      termino: 'Evaluación de riesgos',
      significado:
        'proceso de análisis para determinar la probabilidad y el impacto de los riesgos identificados.',
    },
    {
      termino: 'Indicadores',
      significado:
        'herramientas de medición que permiten evaluar el desempeño del SG-SST.',
    },
    {
      termino: 'Matriz de requisitos legales',
      significado:
        'documento que recopila las normas aplicables en seguridad y salud en el trabajo que debe cumplir la empresa.',
    },
    {
      termino: 'No conformidades',
      significado:
        'incumplimientos de los requisitos establecidos en el SG-SST o en la normativa vigente.',
    },
    {
      termino: 'Plan de trabajo anual',
      significado:
        'documento que organiza las actividades, responsables y tiempos del SG-SST durante el año.',
    },
    {
      termino: 'SG-SST',
      significado:
        'sistema de gestión que busca prevenir accidentes y enfermedades laborales mediante la mejora continua.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bedoya Marrugo, E. A., Balarezo Rodríguez, K., & Mora Arquez, G. (2023). Seguridad y salud en el trabajo: Un enfoque interdisciplinar (HSEQ). Tecnológico Comfenalco.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (2012). Ley 1562 de 2012 por la cual se modifica el Sistema de Riesgos Laborales. Diario Oficial.',
      link: '',
    },
    {
      referencia:
        'Comunidad Andina. (2004). Instrumento andino de seguridad y salud en el trabajo (Decisión 584).',
      link: '',
    },
    {
      referencia:
        'Correa Chaparro, C. G. (2022). Sistema integrado de gestión en seguridad y salud en el trabajo. ECOE Ediciones.',
      link: '',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2025). Circular 0047 de 2025 por la cual se imparten lineamientos en materia de seguridad y salud en el trabajo.',
      link: '',
    },
    {
      referencia:
        'Ministerio del Trabajo de Colombia. (2015). Decreto 1072 de 2015: Decreto Único Reglamentario del Sector Trabajo.',
      link: '',
    },
    {
      referencia:
        'Ministerio del Trabajo de Colombia. (2019). Resolución 0312 de 2019: Estándares mínimos del SG-SST.',
      link: '',
    },
    {
      referencia:
        'Organización Internacional del Trabajo. (2022). Seguridad y salud en el trabajo: principios y buenas prácticas. OIT.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2025). Sistema de gestión de seguridad y salud en el trabajo en Colombia: contenido del curso. Material de formación interna.',
      link: '',
    },
    {
      referencia:
        'Vera Méndez, D. M., Laguado Ramírez, R. I., & Flórez Serrano, E. G. (2021). Relationship of the PDCA cycle in occupational health and safety management. International Journal of Engineering Research & Technology, 14(8), 1-8.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Johann Sebastián Teran Carvajal',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
