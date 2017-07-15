$(document).ready(function(e) {
  $('.list-responsable').hide();

  $('#tablero').on('click', '.plus a', function() {
    var id = $(this).attr('title');

    $('#tablero').find('#' + id).toggle();
  });

  Tabletop.init({
    key: 'https://docs.google.com/spreadsheets/d/1MfYB_s34mxs4YpROy1LihnS4_eZj7uH6_3KiBOCVBwQ/pubhtml',
    wanted: ['tablero'],
    callback: function(rawData, tabletop) {

      var compromisosTitlesArray = _.flow([
        function(data) { return _.map(data, function(e) { return e.compromisos }); },
        _.uniq
      ])(rawData);

      var mapFunction = function(data) { return _.map(data, function(e) {
        return {
          entidad: e.entidad,
          descripcion: e.hitos,
          status: e.estado
        };
      }); };

      // Crear estructura de compromisos
      var compromisosArray = _.map(compromisosTitlesArray, function(compromisoTitulo, index) {
        return {
          titulo: compromisoTitulo,
          numero: index + 1,
          primerAvance: _.flow([
            function(data) { return _.filter(data, function(e) {
              return e.compromisos === compromisoTitulo && e.fechaFin >= '2016-01-01' && e.fechaFin < '2017-01-01'
            }); },
            mapFunction
          ])(rawData),

          segundoAvance: _.flow([
            function(data) { return _.filter(data, function(e) {
              return e.compromisos === compromisoTitulo && e.fechaFin >= '2017-01-01' && e.fechaFin < '2018-01-01'
            }); },
            mapFunction
          ])(rawData),

          tercerAvance: _.flow([
            function(data) { return _.filter(data, function(e) {
              return e.compromisos === compromisoTitulo && e.fechaFin >= '2018-01-01' && e.fechaFin < '2019-01-01'
            }); },
            mapFunction
          ])(rawData)
        };
      });

      console.log(compromisosArray);

      var compiled = _.template(`<div class="row list-key">
            <div class="col-md-1 id">
                <h4><%= compromiso.numero %></h4>
            </div>
            <div class="col-md-2 ct">
                <p><%= compromiso.titulo %></p>
            </div>

            <div class="col-md-3 ct">
                <ul class="cumplimiento">
                    <% _.forEach(compromiso.primerAvance, function(hito) { %>
                        <li>
                            <a href="#" class="objetivo <%= hito.status %>"></a>
                            <ul>
                                <li>
                                    <div class="detalle">
                                        <p><%= hito.descripcion %></p>
                                        <p>Responsable: <a href="#"><%= hito.entidad %></a></p>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    <% }); %>
                </ul>
            </div>

            <div class="col-md-3 ct">
                <ul class="cumplimiento">
                    <% _.forEach(compromiso.segundoAvance, function(hito) { %>
                        <li>
                            <a href="#" class="objetivo <%= hito.status %>"></a>
                            <ul>
                                <li>
                                    <div class="detalle">
                                        <p><%= hito.descripcion %></p>
                                        <p>Responsable: <a href="#"><%= hito.entidad %></a></p>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    <% }); %>
                </ul>
            </div>

            <div class="col-md-3 ct tercer">
                <ul class="cumplimiento">
                    <% _.forEach(compromiso.tercerAvance, function(hito) { %>
                        <li>
                            <a href="#" class="objetivo <%= hito.status %>"></a>
                            <ul>
                                <li>
                                    <div class="detalle">
                                        <p><%= hito.descripcion %></p>
                                        <p>Responsable: <a href="#"><%= hito.entidad %></a></p>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    <% }); %>
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
