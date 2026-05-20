<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Sistema de Gestión de Seguridad y Salud en el Trabajo en Colombia 
        

    .row.justify-content-center.mb-5
      .col-lg-5.col-md-9.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/1.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p.mb-4 El Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST) en Colombia constituye una herramienta fundamental para la prevención de riesgos laborales y la protección de la salud de los trabajadores. Su implementación permite organizar de manera estructurada las actividades orientadas a identificar peligros, evaluar riesgos y establecer controles efectivos dentro del entorno laboral.     
        .bg1.p-4
          p.mb-0 Este sistema se fundamenta en un enfoque de mejora continua que integra la planificación, ejecución, verificación y ajuste de las acciones preventivas. De esta manera, las organizaciones pueden garantizar condiciones laborales seguras, reducir la accidentalidad y promover el bienestar de los trabajadores. 
    
    p El SG-SST fortalece la cultura de prevención dentro de las organizaciones, contribuyendo al cumplimiento normativo, la eficiencia operativa y la sostenibilidad de los procesos laborales. 


    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Concepto, alcance y estructura del SG-SST

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-4.mb-4.mb-lg-0
        p.mb-0 El SG-SST es un modelo de gestión obligatorio que integra un conjunto de políticas, procedimientos, planes, recursos y actividades orientadas a la prevención de accidentes laborales y enfermedades de origen profesional. Su enfoque es sistemático, preventivo y de mejora continua, permitiendo identificar peligros, evaluar riesgos y establecer controles eficaces para proteger la salud de los trabajadores. Este sistema no actúa de forma aislada, sino como un proceso integral que articula la gestión organizacional con la prevención de riesgos laborales.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/2.svg', alt='')
      .col-lg-4
        .bg2.p-4.h-100.d-flex.flex-column.justify-content-center
          p.mb-0 El sistema de gestión se fundamenta en la organización de acciones planificadas que permiten mantener condiciones de trabajo seguras y saludables. Su aplicación requiere la participación activa de todos los niveles de la empresa, promoviendo una cultura de prevención que reduzca incidentes y mejore el bienestar laboral. 
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Alcance del SG-SST

    .row.bgcolor-1.align-items-center.p-3.py-4.p-md-4.py-md-5.mb-5(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center.align-items-center
            .col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/3.png', alt='')
            .col-lg-8
              SlyderF(columnas="col-lg-4 col-md-6")
                .tarjeta.color-acento-contenido.p-4
                  .row.justify-content-center.mb-3.mb-lg-4
                    .col-8
                      img(src='@/assets/curso/temas/t1/tarj1-1.png' alt='')
                  p.text-center Es de obligatorio cumplimiento para todas las organizaciones. 
                .tarjeta.color-acento-contenido.p-4
                  .row.justify-content-center.mb-3.mb-lg-4
                    .col-8
                      img(src='@/assets/curso/temas/t1/tarj1-2.png' alt='')
                  p.text-center Aplica a empleadores, trabajadores, contratistas, subcontratistas y visitantes. 
                .tarjeta.color-acento-contenido.p-4
                  .row.justify-content-center.mb-3.mb-lg-4
                    .col-8
                      img(src='@/assets/curso/temas/t1/tarj1-3.png' alt='')
                  p.text-center Cubre todas las actividades laborales, procesos operativos y administrativos. 
                .tarjeta.color-acento-contenido.p-4
                  .row.justify-content-center.mb-3.mb-lg-4
                    .col-8
                      img(src='@/assets/curso/temas/t1/tarj1-4.png' alt='')
                  p.text-center Incluye riesgos físicos, químicos, biológicos, mecánicos, ergonómicos y psicosociales. 
                .tarjeta.color-acento-contenido.p-4
                  .row.justify-content-center.mb-3.mb-lg-4
                    .col-8
                      img(src='@/assets/curso/temas/t1/tarj1-5.png' alt='')
                  p.text-center Se adapta al tamaño, sector económico y nivel de riesgo de la organización. 
                .tarjeta.color-acento-contenido.p-4
                  .row.justify-content-center.mb-3.mb-lg-4
                    .col-8
                      img(src='@/assets/curso/temas/t1/tarj1-6.png' alt='')
                  p.text-center Considera la mejora continua como principio fundamental del sistema. 

    .mb-0.tabla1(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 1.
        span Estructura del SG-SST (ciclo PHVA)
      .tabla-a.color-primario
        table
          thead
            tr
              th.w-25 Fase
              th Descripción ampliada
              th Ejemplos de aplicación
          tbody
            tr
              td Planear
              td Definición del sistema y análisis de riesgos.
              td Diagnóstico inicial, identificación de peligros, establecimiento de objetivos y matriz de riesgos.
            tr
              td Hacer
              td Implementación de acciones preventivas.
              td Capacitaciones, inspecciones, controles operacionales, uso de elementos de protección personal (EPP).
            tr
              td Verificar
              td Evaluación del desempeño del sistema.
              td Indicadores de accidentalidad, auditorías internas, seguimiento a metas.
            tr
              td Actuar
              td Mejora continua del sistema.
              td Acciones correctivas, preventivas y actualización de procedimientos.

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Contexto organizacional, planificación y control

    .row.justify-content-center.mb-5
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/4.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .bg3.p-4.px-lg-5.mb-4
          p.mb-0 El contexto organizacional corresponde al análisis de las condiciones internas y externas que influyen en la seguridad y salud en el trabajo. Este análisis incluye aspectos como la estructura de la empresa, la naturaleza de sus procesos, la ubicación geográfica, la normatividad vigente, la cultura organizacional y las condiciones del entorno laboral. Su propósito es identificar factores que puedan afectar el desempeño del sistema.
        p El reconocimiento del contexto permite establecer una base sólida para la gestión de riesgos, ya que facilita la identificación de amenazas y oportunidades dentro de la organización. A continuación, se presentan los elementos del contexto organizacional. 

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-4.col-md-6.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/tarj2-1.svg' alt='')
          .tarjeta.bg4.w-100
            .p-4
              h4.text-center Condiciones internas
              p.text-center Estructura organizativa, procesos productivos, recursos humanos, tecnológicos y financieros. 
      .col-lg-4.col-md-6.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/tarj2-2.svg' alt='')
          .tarjeta.bg4.w-100
            .p-4
              h4.text-center Condiciones externas
              p.text-center Legislación vigente, entorno social, económico y ambiental. 
      .col-lg-4.col-md-6.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/tarj2-3.svg' alt='')
          .tarjeta.bg4.w-100
            .p-4
              h4.text-center Partes interesadas
              p.text-center Trabajadores, empleadores, contratistas, clientes, proveedores y autoridades. 

    .row.justify-content-center.mb-5
      .col-lg-6.mb-3
        .tarjeta.color-primario.h-100.p-4
          h4 Planificación del SG-SST
          p La planificación es la fase en la que se definen las acciones necesarias para gestionar los riesgos laborales de manera efectiva. A continuación, se presentan sus principales elementos: 
          ul.lista-ul--color.color-acento-botones.fa-lista
            li
              i.fas.fa-shield-alt
              span.mb-0 Establecimiento de objetivos medibles, realistas y alcanzables.
            li
              i.fas.fa-shield-alt
              span.mb-0 Identificación de peligros y evaluación de riesgos asociados. 
            li
              i.fas.fa-shield-alt
              span.mb-0 Diseño de programas de prevención y control. 
            li
              i.fas.fa-shield-alt
              span.mb-0 Asignación de recursos técnicos, humanos y financieros. 
            li
              i.fas.fa-shield-alt
              span.mb-0 Elaboración del plan anual de trabajo con actividades específicas. 
            li.mb-0
              i.fas.fa-shield-alt
              span.mb-0 Definición de indicadores de seguimiento y evaluación. 
      .col-lg-6.mb-3
        .tarjeta.color-secundario.h-100.p-4
          h4 Control del sistema
          p El control permite verificar la eficacia de las acciones implementadas y asegurar el cumplimiento de los objetivos. En este proceso se incluyen las siguientes actividades: 
          ul.lista-ul--color.color-acento-botones.fa-lista
            li
              i.fas.fa-shield-alt
              span.mb-0 Seguimiento de indicadores como accidentalidad, ausentismo y enfermedades laborales. 
            li
              i.fas.fa-shield-alt
              span.mb-0 Realización de auditorías internas y externas. 
            li
              i.fas.fa-shield-alt
              span.mb-0 Revisión periódica por la alta dirección. 
            li
              i.fas.fa-shield-alt
              span.mb-0 Evaluación del cumplimiento legal y técnico. 

    .row.justify-content-center
      .col-lg-7(data-aos="fade-right")
        img.w-80x.mb-3(src='@/assets/curso/temas/t1/5.svg', alt='')
        p Este proceso garantiza la toma de decisiones informadas, basadas en la recolección y análisis de datos confiables sobre el desempeño del sistema, permitiendo identificar oportunidades de mejora, corregir desviaciones y fortalecer las acciones preventivas. Asimismo, asegura la mejora continua del SG-SST mediante la evaluación permanente de los resultados, la implementación de ajustes oportunos y la optimización de los recursos destinados a la gestión de la seguridad y salud en el trabajo. 
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/6.png', alt='')


    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3 Roles, responsabilidades y documentos del SG-SST 

    p.mb-4 El SG-SST requiere la participación activa y coordinada de todos los niveles de la organización, donde cada actor cumple funciones específicas que garantizan su adecuado funcionamiento. 

    .mb-0.tabla1.row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 2.
          span Roles y responsabilidades SG-SST
        .tabla-a.color-primario
          table
            thead
              tr
                th Actor
                th Responsabilidad ampliada
            tbody
              tr
                td Alta dirección
                td Liderar el sistema, asignar recursos, aprobar políticas y promover la cultura preventiva.
              tr
                td Responsable SG-SST
                td Diseñar, implementar, evaluar y mejorar el sistema de gestión.
              tr
                td Trabajadores
                td Cumplir normas, usar elementos de protección personal y reportar condiciones inseguras.
              tr
                td Comité Paritario de Seguridad y Salud en el Trabajo (COPASST)
                td Apoyar la vigilancia del sistema y promover acciones de prevención.
              tr
                td Brigada de emergencia
                td Actuar ante situaciones de riesgo, incidentes o emergencias.

    .subt2.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt2.svg', alt='')
      h4.mb-0 Documentación del SG-SST

    p.mb-4 La documentación es fundamental para evidenciar el funcionamiento del sistema y garantizar su control. Para ello, es necesario contar con una serie de documentos que soportan la implementación, el seguimiento y la mejora continua del sistema, entre los cuales se encuentran: 

    .row.justify-content-center.mb-4
      .col-lg-6.col-md-9.mb-3.mb-lg-0
        img(src='@/assets/curso/temas/t1/7.png', alt='')
      .col-lg-6
        ul.lista-ul--color.color-acento-botones.fa-lista
          li.mb-2
            i.fas.fa-shield-alt
            span.mb-0 Política de Seguridad y Salud en el Trabajo. 
          li.mb-2
            i.fas.fa-shield-alt
            span.mb-0 Matriz de identificación de peligros y evaluación de riesgos. 
          li.mb-2
            i.fas.fa-shield-alt
            span.mb-0 Plan anual de trabajo. 
          li.mb-2
            i.fas.fa-shield-alt
            span.mb-0 Procedimientos operativos y protocolos de seguridad. 
          li.mb-2
            i.fas.fa-shield-alt
            span.mb-0 Registros de capacitaciones y formación del personal. 
          li.mb-2
            i.fas.fa-shield-alt
            span.mb-0 Informes de inspecciones, accidentes e incidentes. 
          li.mb-2
            i.fas.fa-shield-alt
            span.mb-0 Evidencias de auditorías internas y planes de mejora. 
          li.mb-0
            i.fas.fa-shield-alt
            span.mb-0 Registros de seguimiento y control de indicadores. 

    p La adecuada implementación del Sistema de Gestión de Seguridad y Salud en el Trabajo requiere no solo del cumplimiento de la normatividad vigente, sino también de una gestión organizada que integre la planificación, el control, la documentación y la mejora continua. La correcta aplicación de sus componentes permite identificar riesgos, establecer acciones preventivas y garantizar condiciones laborales seguras y saludables. De esta manera, el SG-SST se consolida como una herramienta clave para la protección de los trabajadores y el fortalecimiento de la gestión organizacional. 


    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4 Importancia de la seguridad y salud en el trabajo 

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-2.col-md-5.col-8.mb-3.mb-lg-0
        img(src='@/assets/curso/temas/t1/8.svg', alt='')
      .col-lg-6
        p La seguridad y salud en el trabajo constituye un elemento esencial para el desarrollo sostenible de las organizaciones, ya que protege la integridad física, mental y social de los trabajadores y promueve ambientes laborales seguros, saludables y productivos. La implementación del SG-SST no solo busca cumplir la normatividad vigente, sino también fortalecer la cultura organizacional orientada a la prevención y el autocuidado. Un sistema bien gestionado permite anticipar riesgos, reducir incidentes y mejorar la calidad de vida laboral. 
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/9.png', alt='')

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Importancia del SG-SST

    .row.bgcolor-1.align-items-center.p-3.py-4.p-md-4.py-md-5.mb-5(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center.align-items-center
            .col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/10.png', alt='')
            .col-lg-8
              SlyderF(columnas="col-lg-4 col-md-6")
                .tarjeta.color-acento-contenido.p-4
                  .row.justify-content-center.mb-3.mb-lg-4
                    .col-8
                      img(src='@/assets/curso/temas/t1/tarj3-1.svg' alt='')
                  p.text-center Prevención de accidentes de trabajo y enfermedades laborales. 
                .tarjeta.color-acento-contenido.p-4
                  .row.justify-content-center.mb-3.mb-lg-4
                    .col-8
                      img(src='@/assets/curso/temas/t1/tarj3-2.svg' alt='')
                  p.text-center Mejora de las condiciones laborales y del bienestar del trabajador. 
                .tarjeta.color-acento-contenido.p-4
                  .row.justify-content-center.mb-3.mb-lg-4
                    .col-8
                      img(src='@/assets/curso/temas/t1/tarj3-3.svg' alt='')
                  p.text-center Reducción del ausentismo y la rotación del personal. 
                .tarjeta.color-acento-contenido.p-4
                  .row.justify-content-center.mb-3.mb-lg-4
                    .col-8
                      img(src='@/assets/curso/temas/t1/tarj3-4.svg' alt='')
                  p.text-center Disminución de costos asociados a incidentes y sanciones. 
                .tarjeta.color-acento-contenido.p-4
                  .row.justify-content-center.mb-3.mb-lg-4
                    .col-8
                      img(src='@/assets/curso/temas/t1/tarj3-5.svg' alt='')
                  p.text-center Incremento de la productividad y eficiencia organizacional. 
                .tarjeta.color-acento-contenido.p-4
                  .row.justify-content-center.mb-3.mb-lg-4
                    .col-8
                      img(src='@/assets/curso/temas/t1/tarj3-6.svg' alt='')
                  p.text-center Fortalecimiento de la cultura preventiva y organizacional. 
                .tarjeta.color-acento-contenido.p-4
                  .row.justify-content-center.mb-3.mb-lg-4
                    .col-8
                      img(src='@/assets/curso/temas/t1/tarj3-7.svg' alt='')
                  p.text-center Cumplimiento de la normatividad vigente en seguridad laboral. 

    .mb-0.tabla1.row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 3.
          span Impacto organizacional del SG-SST
        .tabla-a.color-primario
          table
            thead
              tr
                th.w-25 Área
                th Beneficio
            tbody
              tr
                td Humana
                td Protección de la vida, salud y bienestar del trabajador.
              tr
                td Económica
                td Reducción de costos por accidentes, incapacidades y sanciones.
              tr
                td Productiva
                td Mayor eficiencia y continuidad en los procesos.
              tr
                td Legal
                td Cumplimiento de la normativa vigente y reducción de riesgos legales.
              tr
                td Social
                td Mejora de la reputación y responsabilidad social empresarial.





</template>

<script>
export default {
  name: 'Tema1',
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
