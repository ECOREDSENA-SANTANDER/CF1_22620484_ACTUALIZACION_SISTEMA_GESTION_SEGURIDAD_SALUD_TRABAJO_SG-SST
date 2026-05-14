<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Mejora continua y plan de mejora del SG-SST

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos='fade')
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t4/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.py-lg-5
        p.mb-0 La mejora continua es un proceso sistemático orientado a optimizar el desempeño del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST). Se desarrolla mediante la evaluación periódica del sistema, la identificación de no conformidades y la implementación de acciones correctivas y preventivas que permitan fortalecer su eficacia.
    
    p Su objetivo principal es prevenir riesgos laborales, proteger la salud de los trabajadores y asegurar el cumplimiento de la normativa vigente mediante la implementación y el seguimiento del sistema. 


    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1. Diagnóstico del sistema y auditorías internas 

    .row.justify-content-center.mb-5
      .col-lg-5.col-md-9.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/2.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p El diagnóstico del sistema corresponde a una etapa clave del SG-SST que permite determinar el estado de la gestión en seguridad y salud en el trabajo. En esta fase se identifican peligros, se evalúan riesgos, se revisa la documentación existente y se analiza el cumplimiento de la normativa vigente. Este proceso permite identificar brechas y establecer una línea base para la mejora del sistema. 
        .bg4.p-4.px-lg-5
          p.mb-0 Las auditorías internas son evaluaciones sistemáticas, periódicas y documentadas que permiten verificar la implementación del SG-SST y su conformidad con los requisitos establecidos, así como el cumplimiento de los objetivos definidos. 

    .mb-4.tabla1(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 7.
        span Elementos del diagnóstico del SG-SST
      .tabla-a.color-primario.mb-5
        table
          thead
            tr
              th.w-25 Elemento
              th Descripción
          tbody
            tr
              td Identificación de peligros
              td Identificación de fuentes, situaciones o actos con potencial de causar daño a los trabajadores.
            tr
              td Evaluación de riesgos
              td Análisis y valoración de los riesgos, considerando la probabilidad de ocurrencia y la severidad de las consecuencias.
            tr
              td Revisión documental
              td Verificación de políticas, procedimientos y registros asociados al SG-SST.
            tr
              td Cumplimiento legal
              td Verificación del cumplimiento de los requisitos establecidos en la normativa vigente.
            tr
              td Condiciones de trabajo
              td Evaluación de las condiciones del entorno laboral, incluyendo factores físicos, químicos, biológicos, ergonómicos y psicosociales.

    .mb-5.tabla1(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 8.
        span Aspectos evaluados en auditorías internas
      .tabla-a.color-primario.mb-5
        table
          thead
            tr
              th.w-25 Aspecto evaluado
              th Propósito
          tbody
            tr
              td Cumplimiento normativo
              td Verificar el cumplimiento de los requisitos legales aplicables en seguridad y salud en el trabajo.
            tr
              td Implementación del sistema
              td Evaluar la ejecución de los procesos del SG-SST conforme a lo planificado.
            tr
              td Eficacia del SG-SST
              td Determinar el grado de cumplimiento de los objetivos e indicadores del sistema.
            tr
              td Registros y evidencias
              td Verificar la existencia, integridad y trazabilidad de la información documentada.
            tr
              td Mejora continua
              td Identificar no conformidades y oportunidades de mejora, así como hacer seguimiento a las acciones correctivas.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Importancia del diagnóstico y auditorías 

    .row.justify-content-center
      .col-lg-4.col-md-7.col-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/3.png', alt='')
      .col-lg-8(data-aos="fade-left")
        .bg4.p-4.mb-4
          p.mb-0 El diagnóstico y las auditorías internas son herramientas clave para la gestión del SG-SST, ya que permiten evaluar de manera objetiva el estado del sistema y su grado de implementación frente a los requisitos definidos. El diagnóstico establece una línea base a partir de la identificación de peligros, la evaluación de riesgos, la revisión documental y el análisis del cumplimiento normativo, lo que facilita reconocer brechas y priorizar acciones. 
        .row.justify-content-center.align-items-cente
          .col-lg-9
            p Por su parte, las auditorías internas verifican de forma sistemática la conformidad del sistema con criterios establecidos, como la normativa vigente, los estándares mínimos y los procedimientos internos, así como el cumplimiento de los objetivos e indicadores. En conjunto, estos procesos proporcionan evidencia para la toma de decisiones, permiten detectar no conformidades y oportunidades de mejora, y orientan la implementación de acciones correctivas y preventivas que fortalecen el desempeño del sistema y las condiciones de seguridad y salud en el trabajo. 
          .col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/4.svg', alt='')


    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2. No conformidades y análisis de hallazgos 

    .row.justify-content-center.mb-5
      .col-lg-5.col-md-8.col-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/5.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/6.svg', alt='')
          .col-lg-10
            p.mb-0 Las no conformidades corresponden al incumplimiento de requisitos establecidos en el SG-SST, ya sean de origen legal, normativo o definidos por la propia organización. Estas pueden evidenciarse durante diagnósticos, auditorías o procesos de seguimiento, y suelen estar asociadas a deficiencias en la implementación de controles, incumplimiento de procedimientos, fallas en la gestión documental o debilidades en la formación del personal. 
        p En el análisis de hallazgos se clasifican los resultados en no conformidades, observaciones y oportunidades de mejora, con el fin de establecer su impacto y prioridad. Este proceso incluye la identificación de causas raíz mediante herramientas como el análisis de causa-efecto o los “5 porqués”, lo que permite definir acciones correctivas y preventivas orientadas a eliminar la causa del problema y evitar su recurrencia. Asimismo, implica el seguimiento y la verificación de la eficacia de las acciones implementadas, asegurando la mejora continua del sistema. 
    
    .mb-4.tabla2(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 9.
        span Tipos de hallazgos
      .tabla-a.color-primario
        table
          thead
            tr
              th.w-25 Tipo
              th Descripción
          tbody
            tr
              td No conformidad mayor
              td Incumplimiento grave que afecta el sistema.
            tr
              td No conformidad menor
              td Falla puntual sin impacto significativo.
            tr
              td Observación / oportunidad de mejora
              td Situación que no constituye incumplimiento, pero que puede optimizar el desempeño del sistema o prevenir fallas futuras.

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-down")
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 10.
          span Proceso de análisis de hallazgos
        .tabla-a.tabla2.color-primario
          table
            thead
              tr
                th.w-25 Etapa
                th Descripción
            tbody
              tr
                td Identificación
                td Detección y registro del hallazgo o no conformidad.
              tr
                td Análisis
                td Determinación de las causas raíz del hallazgo mediante herramientas de análisis.
              tr
                td Evaluación
                td Valoración del impacto y priorización del hallazgo según su criticidad.
              tr
                td Solución
                td Definición e implementación de acciones correctivas y/o preventivas.
              tr
                td Seguimiento
                td Verificación de la eficacia de las acciones implementadas.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/7.png', alt='')

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Importancia del análisis de hallazgos 

    .row.justify-content-center.align-items-center
      .col-lg-2.col-md-4.col-6.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/8.svg', alt='')
      .col-lg-10(data-aos="fade-left")  
        p El análisis de hallazgos es un proceso fundamental en el SG-SST, ya que permite identificar no solo las desviaciones o incumplimientos detectados, sino también sus causas raíz. A partir de este análisis, se definen acciones correctivas y preventivas orientadas a eliminar las causas de las no conformidades y evitar su recurrencia. Además, facilita la priorización de riesgos, el seguimiento a la eficacia de las acciones implementadas y la toma de decisiones basada en evidencia. De esta manera, el análisis de hallazgos contribuye al fortalecimiento del desempeño del sistema y a la mejora continua de las condiciones de seguridad y salud en el trabajo. 


    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.3 Acciones correctivas y preventivas 

    p.mb-4 Las acciones correctivas se implementan cuando ya ha ocurrido una no conformidad, con el fin de eliminar la causa del problema. Las acciones preventivas, en cambio, buscan evitar que ocurran posibles fallas mediante la anticipación de riesgos. 
    
    .mb-5.tabla1(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 11.
        span Diferencia entre acciones correctivas y preventivas
      .tabla-a.color-primario.mb-5
        table
          thead
            tr
              th.w-25 Tipo de acción
              th Momento de aplicación
              th Objetivo
          tbody
            tr
              td Correctiva
              td Posterior a la detección de una no conformidad.
              td Eliminar la causa raíz de la no conformidad y evitar la recurrencia del incumplimiento.
            tr
              td Preventiva
              td Ante la identificación de riesgos o situaciones potenciales.
              td Eliminar o controlar las causas de posibles no conformidades antes de que ocurran.

    .row.justify-content-center.mb-5
      .col-lg-5(data-aos='fade-right')
        .subt2.mb-4
          img(src='@/assets/curso/temas/t1/subt2.svg', alt='')
          h4.mb-0 Elementos clave en la implementación
        .bg1.p-4.mb-4.mb-lg-0
          ul.lista-ul--color.color-acento-botones.fa-lista.mb-0
            li
              i.fas.fa-shield-alt
              span.mb-0 Identificación clara del problema o riesgo. 
            li
              i.fas.fa-shield-alt
              span.mb-0 Definición de acciones específicas.  
            li
              i.fas.fa-shield-alt
              span.mb-0 Asignación de responsables.  
            li
              i.fas.fa-shield-alt
              span.mb-0 Establecimiento de tiempos de ejecución. 
            li.mb-0
              i.fas.fa-shield-alt
              span.mb-0 Seguimiento y evaluación de la eficacia.  
      .col-lg-7
        img(src='@/assets/curso/temas/t4/9.png', alt='')

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Importancia de las acciones 

    .row.justify-content-center.align-items-center
      .col-lg-2.col-md-4.col-6.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/10.svg', alt='')
      .col-lg-10(data-aos="fade-left")  
        p Las acciones correctivas y preventivas son fundamentales en el SG-SST, ya que permiten intervenir de manera estructurada sobre las causas de las no conformidades y los riesgos identificados. A través de su implementación, no solo se corrigen desviaciones detectadas, sino que se previene la ocurrencia de eventos futuros, contribuyendo a la reducción de riesgos y al mejoramiento de las condiciones de trabajo. Además, estas acciones facilitan el cumplimiento de los requisitos legales y el logro de los objetivos del sistema, siempre que se basen en un análisis adecuado de causas y se verifique su eficacia. De este modo, constituyen un elemento clave para la mejora continua y el fortalecimiento del desempeño del SG-SST. 


    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.4 Plan de trabajo anual e informes de mejora 

    .row.justify-content-center.mb-4
      .col-lg-5.col-md-8.col-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/11.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/12.svg', alt='')
          .col-lg-10
            p.mb-0 El plan de trabajo anual del SG-SST es un instrumento de planificación y gestión que organiza, prioriza y hace seguimiento a las actividades necesarias para la implementación, mantenimiento y mejora del sistema durante un periodo determinado. Su formulación se basa en los resultados del diagnóstico, las auditorías internas, la evaluación de riesgos, el análisis de indicadores y la identificación de requisitos legales aplicables, lo que permite establecer acciones alineadas con las necesidades reales de la organización.
        .bg4.p-4
          p.mb-0 Este plan define objetivos, metas, responsables, recursos, cronogramas e indicadores de seguimiento, facilitando el control de su ejecución y la toma de decisiones. Además, permite articular las acciones correctivas y preventivas con la gestión del riesgo, asegurando la mejora continua y el cumplimiento de los objetivos del SG-SST. 

    p.mb-4 El plan de trabajo anual es una herramienta de planificación que organiza las actividades del SG-SST durante un periodo determinado. Este plan se construye a partir de los resultados del diagnóstico, auditorías y análisis de riesgos. 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 12.
          span Componentes del plan de trabajo anual del SG-SST
        .tabla-a.tabla2.color-primario
          table
            thead
              tr
                th.w-25 Componente
                th Descripción
            tbody
              tr
                td Actividades
                td Acciones a desarrollar dentro del SG-SST, alineadas con las necesidades identificadas.
              tr
                td Objetivo
                td Resultado que se espera alcanzar con la actividad, en coherencia con los objetivos del sistema.
              tr
                td Prioridad
                td Nivel de importancia definido según riesgo, impacto y cumplimiento normativo.
              tr
                td Responsables
                td Personas o áreas encargadas de la ejecución y seguimiento.
              tr
                td Recursos
                td Medios humanos, técnicos y financieros necesarios para su desarrollo.
              tr
                td Cronograma
                td Fechas de inicio, finalización y periodicidad de la actividad.
              tr
                td Indicadores
                td Variables que permiten medir el avance y cumplimiento de la actividad.
              tr
                td Meta
                td Valor esperado del indicador que define el nivel de logro.
              tr
                td Estado / avance
                td Nivel de ejecución (pendiente, en proceso, ejecutado).
              tr
                td Evidencias
                td Registros que soportan la ejecución de la actividad.
              tr
                td Seguimiento y evaluación
                td Verificación del cumplimiento y análisis de la eficacia de las acciones implementadas.

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-4.mb-4.mb-lg-0
        img.w-80x.mb-3(src='@/assets/curso/temas/t4/13.svg', alt='')
        p.mb-0 La priorización de actividades en el SG-SST se realiza con base en el nivel de riesgo, el impacto sobre la seguridad y salud de los trabajadores y el cumplimiento de requisitos legales aplicables. Se atienden primero aquellas acciones que controlan peligros críticos, corrigen no conformidades mayores o responden a obligaciones normativas. También se consideran la disponibilidad de recursos y la urgencia de intervención para evitar incidentes. De este modo, la planificación se enfoca en acciones con mayor efecto sobre la reducción del riesgo y el desempeño del sistema.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/14.png', alt='')
      .col-lg-4
        .bg3.p-4.px-lg-5.h-100.d-flex.flex-column.justify-content-center
          p.mb-0 Por otro lado, los informes de mejora son documentos que consolidan los resultados del SG-SST y permiten evaluar su desempeño a partir de indicadores, hallazgos y acciones implementadas. Proporcionan información objetiva para la toma de decisiones, el seguimiento de la mejora continua y la verificación del cumplimiento de los objetivos del sistema. 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 13.
          span Contenido de informes de mejora
        .tabla-a.tabla2.color-primario
          table
            thead
              tr
                th.w-25 Elemento
                th Descripción
            tbody
              tr
                td Resultados
                td Desempeño del SG-SST medido a través de indicadores y cumplimiento de metas.
              tr
                td Avances
                td Grado de ejecución del plan de trabajo y cumplimiento de actividades programadas.
              tr
                td No conformidades y hallazgos
                td Incumplimientos, desviaciones y oportunidades de mejora identificadas.
              tr
                td Análisis de causas
                td Identificación de las causas raíz de las no conformidades detectadas.
              tr
                td Acciones implementadas
                td Acciones correctivas y preventivas ejecutadas para tratar los hallazgos.
              tr
                td Seguimiento y eficacia
                td Evaluación del cumplimiento y efectividad de las acciones implementadas.
              tr
                td Cumplimiento normativo
                td Verificación del cumplimiento de los requisitos legales aplicables.
              tr
                td Recomendaciones
                td Propuestas de mejora orientadas al fortalecimiento del sistema.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5(data-aos='fade')
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t4/15.png')})`}"
      )
      .bloque-texto-g__texto.p-4.py-lg-5
        h4 Importancia del plan e informes #[br] #[br]
        p.mb-0 El plan de trabajo y los informes de mejora son herramientas clave del SG-SST, ya que permiten organizar las actividades, hacer seguimiento a su ejecución y evaluar el desempeño del sistema. A partir de la información que generan, se facilita la toma de decisiones oportunas y el fortalecimiento de la mejora continua. 


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
