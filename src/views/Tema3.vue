<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión, seguimiento y medición del SG-SST 

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5(data-aos='fade')
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La gestión del SG-SST permite identificar, evaluar y controlar los riesgos laborales presentes en la organización, con el propósito de garantizar condiciones de trabajo seguras y proteger la salud de los trabajadores. Este proceso se desarrolla de manera continua e integrada con las actividades de la empresa. El seguimiento y la medición son fundamentales, ya que permiten evaluar el desempeño del sistema, verificar el cumplimiento de los objetivos y establecer acciones de mejora a partir de resultados medibles. 


    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Identificación de peligros y evaluación de riesgos

    p.mb-5 Este proceso consiste en reconocer los peligros presentes en el entorno laboral y analizar el nivel de riesgo asociado, considerando la probabilidad de ocurrencia y la gravedad de sus consecuencias. Es la base para la toma de decisiones en prevención. 

    .subt2.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt2.svg', alt='')
      h4.mb-0 Etapas del proceso

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-3.col-md-6.mb-3
        .tarjeta--boton.color-acento-contenido.bg5.h-100.p-4
          .row.justify-content-center.mb-3.mb-lg-4
            .col-5.col-md-6.col-lg-6
              img(src='@/assets//curso/temas/t3/tarj1-1.svg', alt='')
          p.text-center Identificación de peligros en cada actividad o proceso. 
      .col-lg-3.col-md-6.mb-3
        .tarjeta--boton.color-acento-contenido.bg5.h-100.p-4
          .row.justify-content-center.mb-3.mb-lg-4
            .col-5.col-md-6.col-lg-6
              img(src='@/assets//curso/temas/t3/tarj1-2.svg', alt='')
          p.text-center Evaluación del riesgo (probabilidad y consecuencia). 
      .col-lg-3.col-md-6.mb-3
        .tarjeta--boton.color-acento-contenido.bg5.h-100.p-4
          .row.justify-content-center.mb-3.mb-lg-4
            .col-5.col-md-6.col-lg-6
              img(src='@/assets//curso/temas/t3/tarj1-3.svg', alt='')
          p.text-center Clasificación del nivel de riesgo (alto, medio, bajo). 
      .col-lg-3.col-md-6.mb-3
        .tarjeta--boton.color-acento-contenido.bg5.h-100.p-4
          .row.justify-content-center.mb-3.mb-lg-4
            .col-5.col-md-6.col-lg-6
              img(src='@/assets//curso/temas/t3/tarj1-4.svg', alt='')
          p.text-center Definición de medidas de control. 

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-7
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 5.
          span Ejemplo de clasificación de niveles de riesgo
        .tabla-a.tabla2.color-primario
          table
            thead
              tr
                th.w-25 Nivel de riesgo
                th Descripción
                th Acción requerida
            tbody
              tr
                td Alto
                td Alta probabilidad y consecuencias graves.
                td Intervención inmediata.
              tr
                td Medio
                td Probabilidad moderada.
                td Control y seguimiento.
              tr
                td Bajo
                td Baja probabilidad y consecuencias leves.
                td Monitoreo.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/2.png', alt='')


    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Condiciones de trabajo y condiciones de salud 

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p Las condiciones de trabajo corresponden a los factores presentes en el entorno laboral que pueden afectar al trabajador, mientras que las condiciones de salud están relacionadas con el estado físico y mental del personal. 
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bg-color-primario")
          .row(titulo="Condiciones de trabajo")
            .col-12
              ul.lista-ul--color.color-acento-botones.fa-lista
                li
                  i.fas.fa-shield-alt
                  span.mb-0 #[b Físicas:] ruido, iluminación, temperatura. 
                li
                  i.fas.fa-shield-alt
                  span.mb-0 #[b Químicas:] gases, vapores, sustancias peligrosas. 
                li
                  i.fas.fa-shield-alt
                  span.mb-0 #[b Biológicas:] virus, bacterias, hongos. 
                li
                  i.fas.fa-shield-alt
                  span.mb-0 #[b Ergonómicas:] posturas, movimientos repetitivos. 
                li
                  i.fas.fa-shield-alt
                  span.mb-0 #[b Psicosociales:] estrés, carga laboral, clima organizacional. 
          .row(titulo="Condiciones de salud")
            .col-12
              ul.lista-ul--color.color-acento-botones.fa-lista
                li
                  i.fas.fa-shield-alt
                  span.mb-0 Exámenes médicos ocupacionales (ingreso, periódicos, retiro). 
                li
                  i.fas.fa-shield-alt
                  span.mb-0 Seguimiento al ausentismo laboral. 
                li
                  i.fas.fa-shield-alt
                  span.mb-0 Indicadores de salud (enfermedades laborales, incapacidades). 
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/3.png', alt='')

    p.mb-4 Para complementar toda esta información, se invita al aprendiz a visitar el siguiente podcast, que será de gran utilidad: 

    .bg-color-primario(data-aos="fade-down")
      img(src='@/assets/curso/temas/t3/podcast.png', alt='')
      .p-4
        .bg-white.tarjeta.p-4
          TarjetaAudio.color-acento-botones(
            texto="Condiciones de trabajo y condiciones de salud"
            :audio="require('@/assets/componentes/audios/Podcast_CF1_22620484.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")


    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3. Instrumentos de seguimiento, medición e indicadores 

    p.mb-5 Los instrumentos de seguimiento permiten evaluar el cumplimiento y la eficacia del SG-SST, facilitando la toma de decisiones basadas en datos. 

    .row.justify-content-center
      .col-lg-5(data-aos='fade-right')
        .subt2.mb-4
          img(src='@/assets/curso/temas/t1/subt2.svg', alt='')
          h4.mb-0 Principales herramientas
        .bg1.p-4.mb-4.mb-lg-0
          ul.lista-ul--color.color-acento-botones.fa-lista.mb-0
            li.mb-2
              i.fas.fa-shield-alt
              span.mb-0 Indicadores de gestión (accidentalidad, frecuencia, severidad).
            li.mb-2
              i.fas.fa-shield-alt
              span.mb-0 Listas de chequeo. 
            li.mb-2
              i.fas.fa-shield-alt
              span.mb-0 Auditorías internas. 
            li.mb-0
              i.fas.fa-shield-alt
              span.mb-0 Informes de seguimiento.
      .col-lg-7(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 6.
          span Ejemplo de indicadores del SG-SST
        .tabla-a.tabla2.color-primario
          table
            thead
              tr
                th Indicador
                th Qué mide
                th Importancia
            tbody
              tr
                td Tasa de accidentalidad
                td Número de accidentes
                td Evalúa la seguridad
              tr
                td Ausentismo
                td Días no laborados
                td Mide impacto en la salud
              tr
                td Incidentes reportados
                td Eventos sin lesión
                td Prevención
            

    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.4 Autoevaluación y protocolos de bioseguridad 

    .row.justify-content-center.mb-5
      .col-lg-5.col-md-9.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/4.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p La autoevaluación es un proceso interno que permite verificar el grado de cumplimiento del SG-SST y detectar oportunidades de mejora. Se realiza mediante listas de chequeo y revisión de evidencias del sistema. 
        .bg4.p-4.px-lg-5
          .row.justify-content-center.align-items-center
            .col-lg-10
              p.py-lg-4.mb-0 Los protocolos de bioseguridad son un conjunto de medidas orientadas a prevenir y controlar los riesgos biológicos en el entorno laboral, especialmente frente a enfermedades transmisibles. 
            .col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/5.svg', alt='')
    
    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-primario")
          .row(titulo="Elementos de la autoevaluación")
            .col-12
              ul.lista-ul--color.color-acento-botones.fa-lista
                li
                  i.fas.fa-shield-alt
                  span.mb-0 Revisión de estándares mínimos. 
                li
                  i.fas.fa-shield-alt
                  span.mb-0 Verificación de documentos y registros. 
                li
                  i.fas.fa-shield-alt
                  span.mb-0 Identificación de no conformidades. 
          .row(titulo="Medidas de bioseguridad")
            .col-12
              ul.lista-ul--color.color-acento-botones.fa-lista
                li
                  i.fas.fa-shield-alt
                  span.mb-0 Uso de elementos de protección personal (EPP). 
                li
                  i.fas.fa-shield-alt
                  span.mb-0 Higiene y desinfección. 
                li
                  i.fas.fa-shield-alt
                  span.mb-0 Control de exposición a agentes biológicos. 
                li
                  i.fas.fa-shield-alt
                  span.mb-0 Capacitación en prevención de riesgos. 
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/6.png', alt='')

    p Estos procesos permiten fortalecer el SG-SST, mejorar las condiciones laborales y garantizar la protección integral de los trabajadores. 


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    mostrarIndicadorTarjetaAudio: true,
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
