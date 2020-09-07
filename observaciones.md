### Comentarios Generales

Ivette, lo primero que corresponde es darte mis felicitaciones por un hermoso portfolio. Me encanta ver cómo adaptaste el modelo de Ada a tu propia personalidad, la elección de colores, el agregado de cositas como gradientes para hacerlo más impactante y atractivo. Quedó muy bien!  

Una de las cosas a las que más importancia le damos es el reponsive, y ese aspecto en particular quedó muy bien. Salvo un unico detalle (la imagen de la seccion principal tiene width 400px, asi que se ve mal en todos los celulares que tienen menos de esa medida), hiciste un gran trabajo ahi. 

Con respecto a tu código HTML, está muy prolijo, ordenado y fácil de seguir, con algunos detalles que te dejo comentados en el archivo. La unica cosa general a comentarte es que dejas muchos saltos de linea de mas, que dificultan la lectura. Tu CSS tiene algunas desprolijidades. No es poco habitual ver cosas asi:

```css 
.item-description{
    color: gray;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 50px;
   
   
}
```

Es importante que no pongas espacios de mas, y que dejes los saltos de linea correspondientes asi tu CSS se ve ordenado. Te aseguro que simplifica mucho la lectura. Tambien tenes muy desordenado el tabulado. Tomá en cuenta que podés bajarte linters a VSCode para formatear el CSS con un clic: "CSS Formatter" es el que yo uso y recomiendo, pero hay muchísimos. 

En ambos, HTML y CSS hay algunos detalles que te comento en los archivos para que tengas en cuenta. Se nota que te esforzaste por hacer tu código reutilizable, algo que sin dudas ayuda a lo bien que se ve visualmente y a lo claro que es el código.

Usaste correctamente las etiquetas semanticas, cuando las usas: otras veces las olvidas. Hay muchos divs que deberian ser section.  Algo que fue un desafio para muchas no lo fue para vos: ubicar correctamente la jerarquia de tus titulos con h1, h2, etc. Con respecto a tus nombres de clases, son excelentes por lo general: descriptivos, claros y bien hechos. La unica cosa a comentar es que a veces los haces en español y a veces en ingles, cuando lo ideal es que sigan un patron (asi despues no tenes que pensar mucho si tenes que agregar algo mas)

Tengo que mencionar lo bien ordenado de tu proyecto en github. Tu README tambien es excelente. Tus mensajes de commits no son claros, pareciera a veces que te los querias sacar de encima. Y se que al principio es muuuy dificil entender la importancia de hacerlos bien. Hoy quizá no parezca importante, pero te aseguro que cuando trabajamos en equipo es muy valioso saber qué hizo cada uno en el proyecto para encontrar los cambios que buscamos rápidamente. 

Dejo algunos comentarios a lo largo de tu código de todo lo que me parezca necesario mejorar. 

Es mi trabajo ser detallista y quisquillosa a la hora de corregir, como verás en los comentarios de los distintos archivos. No es mi intención comentarte cada detalle porque sí: tu trabajo es fantástico. Mi tarea es comentarte todo lo que vea para que sea más fantástico aún. 


### Nota final: 8

Nota desagregada: 
✅ Estructura correcta de documento HTML.
✅ Respeta la consigna.
✅ Respeta el diseño dado.
✅ Responsive funciona correctamente.
✔️ Código bien indentado ---> con observaciones
✅ Comentarios que permiten mejorar la legibilidad del código.
✔️ Uso correcto de etiquetas semánticas --> con observaciones
✔️ Buenos nombres de clases ---> con observaciones
✅ Reutilización de estilos.
✔️ Código CSS ordenado ---> con observaciones
❌ Commits con mensajes adecuados.


