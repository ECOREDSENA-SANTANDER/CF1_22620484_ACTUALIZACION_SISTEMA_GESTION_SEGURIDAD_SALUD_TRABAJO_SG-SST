<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Sistema de Gestión de Seguridad y Salud en el Trabajo en Colombia 
        

    .row.justify-content-center.mb-5
      .col-lg-5(data-aos="fade-right")
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
    


    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Concepto, alcance y estructura del SG-SST




    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3 Roles, responsabilidades y documentos del SG-SST 




    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4 Importancia de la seguridad y salud en el trabajo 





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
