<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.col-md-2.col-3
        img(src='@/assets/curso/temas/intro/1.svg', alt='')
      .col-lg-11.col-md-10.col-9
        p.mb-0 La gestión del Sistema de Seguridad y Salud en el Trabajo en Colombia constituye un enfoque integral orientado a la prevención de riesgos laborales y a la protección de la salud de los trabajadores. Comprende el concepto, el alcance y la estructura del SG-SST, junto con la planificación, el control organizacional y la definición de roles, responsabilidades y documentos necesarios para su implementación en los distintos entornos laborales.

    p.mb-4 Este tema aborda el análisis del marco normativo nacional y de la Comunidad Andina, así como la aplicación del Decreto 1072 de 2015, la Ley 1562 de 2012 y la Resolución 0312 de 2019. Asimismo, desarrolla procesos clave del SG-SST, como la identificación de peligros, la evaluación de riesgos, el seguimiento mediante indicadores, la autoevaluación y la mejora continua, orientados al fortalecimiento de condiciones de trabajo seguras y saludables. 

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/gtDib9YDf2s?si=FUCZIrh96EbvbVg7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Gestión integral del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST) en Colombia 

</template>

<script>
export default {
  name: 'Introduccion',
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
