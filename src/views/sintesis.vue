<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p El Sistema de Gestión de Seguridad y Salud en el Trabajo en Colombia es un conjunto de acciones organizadas que buscan prevenir accidentes y enfermedades laborales, mediante la identificación de peligros, evaluación de riesgos y control de las condiciones de trabajo. Este sistema establece la planificación, los roles, las responsabilidades y los documentos necesarios para su correcta aplicación. Su importancia radica en proteger la salud de los trabajadores y asegurar el cumplimiento de la normatividad vigente, como el Decreto 1072 de 2015, la Ley 1562 de 2012 y la Resolución 0312 de 2019, las cuales definen los requisitos, estándares mínimos y obligaciones de las empresas. 
    p Además, el SG-SST requiere un seguimiento constante a través de la medición de indicadores, la evaluación de las condiciones de salud y trabajo, y la implementación de protocolos de bioseguridad. Asimismo, incluye procesos de mejora continua, como auditorías internas, identificación de no conformidades y aplicación de acciones correctivas y preventivas. Estas actividades se organizan en un plan de trabajo anual y se registran en informes de mejora, lo que permite evaluar los avances y fortalecer el sistema de manera permanente. 
    
    .row.justify-content-center
      .col-lg-12.mb-5.p-4
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama del SG-SST con cuatro áreas: sistema, normativa, gestión y mejora continua.Incluye subtemas como riesgos, seguimiento, auditorías y acciones de mejora.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
