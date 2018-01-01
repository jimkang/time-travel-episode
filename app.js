var d3 = require('d3-selection');
var Zoom = require('d3-zoom');

(function go() {
  var board = d3.select('#board');
  var zoomLayer = board.select('#board .zoom-layer');
  var zoom = Zoom.zoom()
    .scaleExtent([0.1, 4])
    .on('zoom', zoomed);

  board.call(zoom);

  var initialZoomParams = Zoom.zoomIdentity.translate(120, -29).scale(0.29);
  zoomLayer
    .transition()
    .duration(750)
    .call(zoom.transform, initialZoomParams);

  function zoomed() {
    zoomLayer.attr('transform', d3.event.transform);
  }
})();
