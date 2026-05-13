<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Gestión integral del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST) en Colombia',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar el nivel de comprensión del Sistema de Gestión de Seguridad y Salud en el Trabajo en Colombia mediante la identificación de riesgos, el análisis de condiciones laborales y la aplicación de mecanismos de seguimiento, con el fin de prevenir accidentes, proteger la salud de los trabajadores y mejorar continuamente las condiciones de trabajo.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el objetivo principal del SG-SST?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aumentar la producción', esCorrecta: false },
            { id: 'b', texto: 'Mejorar las ventas', esCorrecta: false },
            {
              id: 'c',
              texto: 'Prevenir accidentes y enfermedades laborales',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Reducir impuestos', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el SG-SST en Colombia.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 2,
          texto: 'El SG-SST se basa principalmente en:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Castigos laborales', esCorrecta: false },
            { id: 'b', texto: 'Publicidad empresarial', esCorrecta: false },
            { id: 'c', texto: 'Mejora continua', esCorrecta: true },
            { id: 'd', texto: 'Competencia externa', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el SG-SST en Colombia.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Qué norma reglamenta el SG-SST en Colombia?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ley 100 de 1993', esCorrecta: false },
            { id: 'b', texto: 'Decreto 1072 de 2015', esCorrecta: true },
            { id: 'c', texto: 'Ley 30 de 1992', esCorrecta: false },
            { id: 'd', texto: 'Código Civil', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el SG-SST en Colombia.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes elementos es objeto de identificación y evaluación en el SG-SST?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Procesos comerciales', esCorrecta: false },
            { id: 'b', texto: 'Peligros y riesgos', esCorrecta: true },
            { id: 'c', texto: 'Clientes', esCorrecta: false },
            { id: 'd', texto: 'Estrategia de ventas', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el SG-SST en Colombia.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de los siguientes conjuntos describe adecuadamente las condiciones de trabajo en el SG-SST?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Salario y tipo de contrato', esCorrecta: false },
            {
              id: 'b',
              texto:
                'Factores físicos, químicos, biológicos, ergonómicos y psicosociales',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Jornada laboral y beneficios económicos',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estrategias comerciales y productividad',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el SG-SST en Colombia.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Qué permite medir un indicador en el SG-SST?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Publicidad', esCorrecta: false },
            { id: 'b', texto: 'Producción', esCorrecta: false },
            {
              id: 'c',
              texto: 'Desempeño del sistema y cumplimiento de objetivos',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Resultados financieros', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el SG-SST en Colombia.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 7,
          texto: 'El COPASST se encarga de:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Vender productos', esCorrecta: false },
            {
              id: 'b',
              texto: 'Apoyar la seguridad y salud en el trabajo',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Hacer contratos', esCorrecta: false },
            { id: 'd', texto: 'Revisar la contabilidad', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el SG-SST en Colombia.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Cuál es el propósito de una auditoría interna en el SG-SST?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evaluar la productividad del personal',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Verificar el cumplimiento de los requisitos establecidos y evaluar su eficacia',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incrementar beneficios laborales',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Gestionar compras', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el SG-SST en Colombia.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 9,
          texto: 'Una no conformidad es:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Un resultado esperado', esCorrecta: false },
            {
              id: 'b',
              texto: 'Un incumplimiento de un requisito establecido',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Una mejora implementada', esCorrecta: false },
            { id: 'd', texto: 'Un procedimiento aplicado', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el SG-SST en Colombia.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 10,
          texto: 'Las acciones correctivas buscan:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Reducir costos operativos', esCorrecta: false },
            {
              id: 'b',
              texto: 'Mejorar la productividad comercial',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar la causa raíz de una no conformidad para evitar su recurrencia',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Diseñar estrategias comerciales',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el SG-SST en Colombia.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 11,
          texto: 'Las acciones preventivas se aplican:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Después de detectar una no conformidad',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Durante la ejecución de una auditoría',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Antes de que se materialicen los riesgos o situaciones potenciales identificadas',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solo en áreas administrativas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el SG-SST en Colombia.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 12,
          texto: 'El Decreto 1072 de 2015 establece:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Normas del sector educativo',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Regulación de transporte', esCorrecta: false },
            { id: 'c', texto: 'Lineamientos del SG-SST', esCorrecta: true },
            { id: 'd', texto: 'Políticas de salud pública', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el SG-SST en Colombia.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 13,
          texto: 'La Ley 1562 de 2012 se relaciona con:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Educación superior', esCorrecta: false },
            { id: 'b', texto: 'Riesgos laborales', esCorrecta: true },
            { id: 'c', texto: 'Comercio exterior', esCorrecta: false },
            { id: 'd', texto: 'Energía', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el SG-SST en Colombia.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 14,
          texto: 'La Resolución 0312 de 2019 establece:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Regular únicamente las condiciones físicas del trabajo',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Establecer los estándares mínimos para la implementación del SG-SST',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Definir las responsabilidades de los empleadores',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar la producción de la empresa',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el SG-SST en Colombia.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 15,
          texto: 'El contexto organizacional en el SG-SST incluye:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Cambiar la estructura', esCorrecta: false },
            {
              id: 'b',
              texto:
                'Identificar factores internos y externos que influyen en la seguridad y salud en el trabajo',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tener en cuenta solo trabajadores',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Evitar las sanciones', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el SG-SST en Colombia.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 16,
          texto: 'La matriz de riesgos sirve para:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Medir el desempeño financiero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Identificar peligros, evaluar y priorizar riesgos',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Gestionar recursos', esCorrecta: false },
            {
              id: 'd',
              texto: 'Diseñar estrategias comerciales',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el SG-SST en Colombia.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 17,
          texto: 'El nivel de riesgo alto significa que:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'No hay peligro', esCorrecta: false },
            {
              id: 'b',
              texto: 'Requiere intervención inmediata',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Es opcional', esCorrecta: false },
            { id: 'd', texto: 'No necesita control', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el SG-SST en Colombia.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 18,
          texto: 'Los protocolos de bioseguridad buscan:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aumentar producción', esCorrecta: false },
            { id: 'b', texto: 'Prevenir riesgos biológicos', esCorrecta: true },
            { id: 'c', texto: 'Mejorar ventas', esCorrecta: false },
            { id: 'd', texto: 'Reducir personal', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el SG-SST en Colombia.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 19,
          texto: 'El plan de trabajo anual contiene:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Información financiera de la empresa',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Actividades, objetivos, responsables, recursos, cronograma e indicadores',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Datos de ventas', esCorrecta: false },
            { id: 'd', texto: 'Contratos laborales', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el SG-SST en Colombia.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 20,
          texto: '¿Cuál es el propósito de la mejora continua en el SG-SST?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Optimizar el desempeño del sistema',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mantener los procesos sin cambios',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Disminuir el número de trabajadores',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir costos operativos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el SG-SST en Colombia.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos de los conceptos relacionados con SG-SST en Colombia.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
