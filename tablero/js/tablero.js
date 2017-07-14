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
      var compromisosArray = _.map(compromisosTitlesArray, function(compromisoTitulo, index) {
        return {
          titulo: compromisoTitulo,
          numero: index + 1,
          primerAvance: [
            {titulo: 'Hito1', entidad: 'RED', descripcion: 'alksdjflkasdjflkasdjflkasjdfs', status: 'completado'},
            {titulo: 'Hito2', entidad: 'RED', descripcion: 'alksdjflkasdjflkasdjflkasjdfs', status: 'incompleto'}
          ],
          segundoAvance: [
            {titulo: 'Hito3', entidad: 'RED', descripcion: 'alksdjflkasdjflkasdjflkasjdfs', status: 'tarde'},
          ],
          tercerAvance: [
            {titulo: 'Hito4', entidad: 'RED', descripcion: 'alksdjflkasdjflkasdjflkasjdfs', status: 'tarde'},
            {titulo: 'Hito5', entidad: 'RED', descripcion: 'alksdjflkasdjflkasdjflkasjdfs', status: 'completado'}
          ]
        };
      });

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
