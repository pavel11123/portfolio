window.onload = function () {

   document.body.classList.add('loaded')

   setTimeout(function () {
      Draggable.create('.gallery', {
         bounds: 'body',
         inertia: true
      });
   })

}