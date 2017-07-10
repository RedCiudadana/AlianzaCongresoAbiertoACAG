$(document).ready(function(e) {
  $('.list-responsable').hide();

  $('#tablero').on('click', '.plus a', function() {
    var id = $(this).attr('title');

    $('#tablero').find('#' + id).toggle();
  });

  Tabletop.init({
    key: 'https://docs.google.com/spreadsheets/d/1MfYB_s34mxs4YpROy1LihnS4_eZj7uH6_3KiBOCVBwQ/pubhtml',
    wanted: ['tablero'],
    callback: function(data, tabletop) {

      var compromisosTitlesArray = _.flow([
        function(data) { return _.map(data, function(e) { return e.compromisos }); },
        _.uniq
      ])(data);

      // Crear estructura de compromisos
      var compromisosArray = _.map(compromisosTitlesArray, function(compromisoTitle) {
        return {
          titulo: compromisoTitle,
          primerAvance: [
            {titulo: 'Hito1', status: 'Sup'},
            {titulo: 'Hito2', status: 'Sup'}
          ],
          segundoAvance: [
            {titulo: 'Hito3', status: 'Sup'},
          ],
          tercerAvance: [
            {titulo: 'Hito4', status: 'Sup'},
          ]
        };
      });

      var compiled = _.template(`<div class="row list-key">
            <div class="col-md-1 id">
                <h4>1</h4>
                <div class="plus">
                    <a href="#" title="responsable-1">+</a>
                </div>
            </div>
            <div class="col-md-2 ct">
                <p><%= compromiso.titulo %></p>
            </div>

            <div class="col-md-3 ct">
                <ul class="cumplimiento">
                    <li><a href="#" class="objetivo completado"></a>
                        <ul>
                            <li><div class="detalle">
                                <p>Habilitar los mecanismos técnicos para la integración de tramites y servicios</p>
                                <h4>5</h4>
                                <p class="row"><span class="col-md-6">Tramites y servicios en gob.mx por dependencias y entidades</span>
                                <span class="col-md-6"> <a href="#" class="medios">Medios de verificación</a></span>
                                </p>
                                <p>Responsable: <a href="#">Unidad de Gobierno Digital</a></p>
                            </div>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#" class="objetivo completado"></a>
                        <ul>
                            <li><div class="detalle">
                                <p>Habilitar los mecanismos técnicos para la integración de tramites y servicios</p>
                                <h4>5</h4>
                                <p class="row"><span class="col-md-6">Tramites y servicios en gob.mx por dependencias y entidades</span>
                                <span class="col-md-6"> <a href="#" class="medios">Medios de verificación</a></span>
                                </p>
                                <p>Responsable: <a href="#">Unidad de Gobierno Digital</a></p>
                            </div>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#" class="objetivo proceso"></a>
                        <ul>
                            <li><div class="detalle">
                                <p>Habilitar los mecanismos técnicos para la integración de tramites y servicios</p>
                                <h4>5</h4>
                                <p class="row"><span class="col-md-6">Tramites y servicios en gob.mx por dependencias y entidades</span>
                                <span class="col-md-6"> <a href="#" class="medios">Medios de verificación</a></span>
                                </p>
                                <p>Responsable: <a href="#">Unidad de Gobierno Digital</a></p>
                            </div>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#" class="objetivo tarde"></a>
                        <ul>
                            <li><div class="detalle">
                                <p>Habilitar los mecanismos técnicos para la integración de tramites y servicios</p>
                                <h4>5</h4>
                                <p class="row"><span class="col-md-6">Tramites y servicios en gob.mx por dependencias y entidades</span>
                                <span class="col-md-6"> <a href="#" class="medios">Medios de verificación</a></span>
                                </p>
                                <p>Responsable: <a href="#">Unidad de Gobierno Digital</a></p>
                            </div>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#" class="objetivo tarde"></a>
                        <ul>
                            <li><div class="detalle">
                                <p>Habilitar los mecanismos técnicos para la integración de tramites y servicios</p>
                                <h4>5</h4>
                                <p class="row"><span class="col-md-6">Tramites y servicios en gob.mx por dependencias y entidades</span>
                                <span class="col-md-6"> <a href="#" class="medios">Medios de verificación</a></span>
                                </p>
                                <p>Responsable: <a href="#">Unidad de Gobierno Digital</a></p>
                            </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="col-md-3 ct">
                <ul class="cumplimiento">
                    <li><a href="#" class="objetivo completado"></a>
                        <ul>
                            <li><div class="detalle">
                                <p>Habilitar los mecanismos técnicos para la integración de tramites y servicios</p>
                                <h4>5</h4>
                                <p class="row"><span class="col-md-6">Tramites y servicios en gob.mx por dependencias y entidades</span>
                                <span class="col-md-6"> <a href="#" class="medios">Medios de verificación</a></span>
                                </p>
                                <p>Responsable: <a href="#">Unidad de Gobierno Digital</a></p>
                            </div>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#" class="objetivo proceso"></a>
                        <ul>
                            <li><div class="detalle">
                                <p>Habilitar los mecanismos técnicos para la integración de tramites y servicios</p>
                                <h4>5</h4>
                                <p class="row"><span class="col-md-6">Tramites y servicios en gob.mx por dependencias y entidades</span>
                                <span class="col-md-6"> <a href="#" class="medios">Medios de verificación</a></span>
                                </p>
                                <p>Responsable: <a href="#">Unidad de Gobierno Digital</a></p>
                            </div>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#" class="objetivo proceso"></a>
                        <ul>
                            <li><div class="detalle">
                                <p>Habilitar los mecanismos técnicos para la integración de tramites y servicios</p>
                                <h4>5</h4>
                                <p class="row"><span class="col-md-6">Tramites y servicios en gob.mx por dependencias y entidades</span>
                                <span class="col-md-6"> <a href="#" class="medios">Medios de verificación</a></span>
                                </p>
                                <p>Responsable: <a href="#">Unidad de Gobierno Digital</a></p>
                            </div>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#" class="objetivo proceso"></a>
                        <ul>
                            <li><div class="detalle">
                                <p>Habilitar los mecanismos técnicos para la integración de tramites y servicios</p>
                                <h4>5</h4>
                                <p class="row"><span class="col-md-6">Tramites y servicios en gob.mx por dependencias y entidades</span>
                                <span class="col-md-6"> <a href="#" class="medios">Medios de verificación</a></span>
                                </p>
                                <p>Responsable: <a href="#">Unidad de Gobierno Digital</a></p>
                            </div>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#" class="objetivo tarde"></a>
                        <ul>
                            <li><div class="detalle">
                                <p>Habilitar los mecanismos técnicos para la integración de tramites y servicios</p>
                                <h4>5</h4>
                                <p class="row"><span class="col-md-6">Tramites y servicios en gob.mx por dependencias y entidades</span>
                                <span class="col-md-6"> <a href="#" class="medios">Medios de verificación</a></span>
                                </p>
                                <p>Responsable: <a href="#">Unidad de Gobierno Digital</a></p>
                            </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="col-md-3 ct tercer">
                <ul class="cumplimiento">
                    <li><a href="#" class="objetivo tarde"></a>
                        <ul>
                            <li><div class="detalle">
                                <p>Habilitar los mecanismos técnicos para la integración de tramites y servicios</p>
                                <h4>5</h4>
                                <p class="row"><span class="col-md-6">Tramites y servicios en gob.mx por dependencias y entidades</span>
                                <span class="col-md-6"> <a href="#" class="medios">Medios de verificación</a></span>
                                </p>
                                <p>Responsable: <a href="#">Unidad de Gobierno Digital</a></p>
                            </div>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#" class="objetivo tarde"></a>
                        <ul>
                            <li><div class="detalle">
                                <p>Habilitar los mecanismos técnicos para la integración de tramites y servicios</p>
                                <h4>5</h4>
                                <p class="row"><span class="col-md-6">Tramites y servicios en gob.mx por dependencias y entidades</span>
                                <span class="col-md-6"> <a href="#" class="medios">Medios de verificación</a></span>
                                </p>
                                <p>Responsable: <a href="#">Unidad de Gobierno Digital</a></p>
                            </div>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#" class="objetivo tarde"></a>
                        <ul>
                            <li><div class="detalle">
                                <p>Habilitar los mecanismos técnicos para la integración de tramites y servicios</p>
                                <h4>5</h4>
                                <p class="row"><span class="col-md-6">Tramites y servicios en gob.mx por dependencias y entidades</span>
                                <span class="col-md-6"> <a href="#" class="medios">Medios de verificación</a></span>
                                </p>
                                <p>Responsable: <a href="#">Unidad de Gobierno Digital</a></p>
                            </div>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#" class="objetivo tarde"></a>
                        <ul>
                            <li><div class="detalle">
                                <p>Habilitar los mecanismos técnicos para la integración de tramites y servicios</p>
                                <h4>5</h4>
                                <p class="row"><span class="col-md-6">Tramites y servicios en gob.mx por dependencias y entidades</span>
                                <span class="col-md-6"> <a href="#" class="medios">Medios de verificación</a></span>
                                </p>
                                <p>Responsable: <a href="#">Unidad de Gobierno Digital</a></p>
                            </div>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#" class="objetivo tarde"></a>
                        <ul>
                            <li><div class="detalle">
                                <p>Habilitar los mecanismos técnicos para la integración de tramites y servicios</p>
                                <h4>5</h4>
                                <p class="row"><span class="col-md-6">Tramites y servicios en gob.mx por dependencias y entidades</span>
                                <span class="col-md-6"> <a href="#" class="medios">Medios de verificación</a></span>
                                </p>
                                <p>Responsable: <a href="#">Unidad de Gobierno Digital</a></p>
                            </div>
                            </li>
                        </ul>
                    </li>                   
                </ul>
            </div>
        </div>`);

      var compromisosHtml = _.flow([
        function(compromisosArray) {
          return _.map(compromisosArray, function(compromiso) {
            return compiled({ compromiso });
          });
        },
        function(compromisosHtmlArray) {
          return _.reduce(compromisosHtmlArray, function(returnString, compromisoHtml) {
            return returnString + compromisoHtml;
          }, '');
        }
      ])(compromisosArray);

      $('#tablero .container .list-title').after(compromisosHtml);
    },
    simpleSheet: true
  });
});
