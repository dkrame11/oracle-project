'use strict';

exports.__esModule = true;
exports.getInstances = exports.createUpdateChart = exports.createUnloadData = exports.createRedraw = exports.createLoadData = exports.createGenerateChart = exports.createExportChart = exports.createDestroyChart = exports.createAssignElementToRef = exports.createComponentWillUnmount = exports.createComponentWillUpdate = exports.createShouldComponentUpdate = exports.createComponentDidMount = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _shallowEqual = require('fbjs/lib/shallowEqual');

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bb = require('./bb');

var _bb2 = _interopRequireDefault(_bb);

var _shapes = require('./shapes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // external dependencies


// billboard


// shapes


var createComponentDidMount = exports.createComponentDidMount = function createComponentDidMount(instance) {
  /**
   * @function componentDidMount
   *
   * @description
   * on mount, update the chart based on props
   */
  return function () {
    requestAnimationFrame(function () {
      instance.updateChart(instance.props);
    });
  };
};

var createShouldComponentUpdate = exports.createShouldComponentUpdate = function createShouldComponentUpdate(instance) {
  /**
   * @function shouldComponentUpdate
   *
   * @description
   * if the component is pure, base the update on whether props and context have changed
   *
   * @param {Object} nextProps the next props
   * @param {Object} nextState the next state
   * @param {Object} nextContext the next context
   * @returns {boolean} should the component update
   */
  return function (nextProps, nextState, nextContext) {
    var isPure = nextProps.isPure;


    return isPure ? !(0, _shallowEqual2.default)(instance.props, nextProps) || !(0, _shallowEqual2.default)(instance.context, nextContext) : true;
  };
};

var createComponentWillUpdate = exports.createComponentWillUpdate = function createComponentWillUpdate(instance) {
  /**
   * @function componentWillUpdate
   *
   * @description
   * when the component will update, update the chart with the new props
   *
   * @param {Object} nextProps the next props
   */
  return function (nextProps) {
    instance.updateChart(nextProps);
  };
};

var createComponentWillUnmount = exports.createComponentWillUnmount = function createComponentWillUnmount(instance) {
  /**
   * @function componentWillUnmount
   *
   * @description
   * prior to unmount, destroy the chart
   */
  return function () {
    instance.destroyChart();
  };
};

var createAssignElementToRef = exports.createAssignElementToRef = function createAssignElementToRef(instance, refName) {
  /**
   * @function assignElementToRef
   *
   * @description
   * set the element DOM node to the refName passed
   *
   * @param {HTMLElement} element the element to assign to the ref
   */
  return function (element) {
    instance[refName] = element;
  };
};

var createDestroyChart = exports.createDestroyChart = function createDestroyChart(instance) {
  /**
   * @function destroyChart
   *
   * @description
   * destroy the chart and set the ref to null
   */
  return function () {
    try {
      instance.chart.destroy();

      instance.chart = null;
    } catch (error) {
      console.error('Internal billboard.js error', error); // eslint-disable-line no-console
    }
  };
};

var createExportChart = exports.createExportChart = function createExportChart(instance) {
  /**
   * @function exportChart
   *
   * @description
   * export the chart if it exists
   *
   * @param {string} mimeType the mimetype of the image
   * @param {function} callback the callback with the data URL
   */
  return function (mimeType, callback) {
    if (instance.chart) {
      instance.chart.export(mimeType, callback);
    }
  };
};

var createGenerateChart = function createGenerateChart(instance) {
  /**
   * @function generateChart
   *
   * @description
   * generate the chart based on the props passed
   *
   * @returns {Object} the chart instance that was generated
   */
  return function () {
    var _instance$props = instance.props,
        classNameIgnored = _instance$props.className,
        isPureIgnored = _instance$props.isPure,
        styleIgnored = _instance$props.style,
        unloadBeforeLoadIgnored = _instance$props.unloadBeforeLoad,
        config = _objectWithoutProperties(_instance$props, ['className', 'isPure', 'style', 'unloadBeforeLoad']);

    return (0, _bb2.default)().generate(_extends({
      bindto: instance.chartElement
    }, config));
  };
};

exports.createGenerateChart = createGenerateChart;
var createLoadData = exports.createLoadData = function createLoadData(instance) {
  /**
   * @function loadData
   *
   * @description
   * load new data to the existing chart
   *
   * @param {Object} data the data to load
   */
  return function (data) {
    instance.chart.load(data);
  };
};

var createRedraw = exports.createRedraw = function createRedraw(instance) {
  /**
   * @function redraw
   *
   * @description
   * trigger a redraw of the chart
   */
  return function () {
    instance.chart.flush();
  };
};

var createUnloadData = exports.createUnloadData = function createUnloadData(instance) {
  /**
   * @function unloadData
   *
   * @description
   * unload data from the existing chart
   *
   * @param {Object} data the data to unload
   */
  return function (data) {
    instance.chart.unload(data);
  };
};

var createUpdateChart = exports.createUpdateChart = function createUpdateChart(instance) {
  /**
   * @function updateChart
   *
   * @description
   * update the chart with the new data
   *
   * @param {Object} props the props to update the chart with
   */
  return function (props) {
    var data = props.data,
        unloadBeforeLoad = props.unloadBeforeLoad;


    if (!instance.chart) {
      instance.chart = instance.generateChart(props);
    }

    instance.loadData(unloadBeforeLoad ? _extends({}, data, { unload: true }) : data);
  };
};

/**
 * @function getInstances
 *
 * @description
 * get all chart instances created by billboard
 *
 * @returns {Array<Object>} the array of chart instances
 */
var getInstances = exports.getInstances = function getInstances() {
  return (0, _bb2.default)().instance;
};

var BillboardChart = function (_Component) {
  _inherits(BillboardChart, _Component);

  function BillboardChart() {
    var _temp, _this, _ret;

    _classCallCheck(this, BillboardChart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.componentDidMount = createComponentDidMount(_this), _this.shouldComponentUpdate = createShouldComponentUpdate(_this), _this.componentWillUpdate = createComponentWillUpdate(_this), _this.componentWillUnmount = createComponentWillUnmount(_this), _this.chart = null, _this.chartElement = null, _this.destroyChart = createDestroyChart(_this), _this.exportChart = createExportChart(_this), _this.generateChart = createGenerateChart(_this), _this.loadData = createLoadData(_this), _this.redraw = createRedraw(_this), _this.setChartRef = createAssignElementToRef(_this, 'chartElement'), _this.unloadData = createUnloadData(_this), _this.updateChart = createUpdateChart(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  // lifecycle methods


  // instance values


  // instance methods


  // global methods


  BillboardChart.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        style = _props.style;


    return (
      /* eslint-disable prettier */
      _react2.default.createElement('div', {
        className: className,
        ref: this.setChartRef,
        style: style
      })
      /* eslint-enable */

    );
  };

  return BillboardChart;
}(_react.Component);

BillboardChart.displayName = 'BillboardChart';
BillboardChart.propTypes = {
  area: _shapes.AREA_SHAPE,
  axis: _shapes.AXIS_SHAPE,
  bar: _shapes.BAR_SHAPE,
  className: _propTypes2.default.string,
  clipPath: _propTypes2.default.bool,
  color: _shapes.COLOR_SHAPE,
  data: _shapes.DATA_SHAPE.isRequired,
  donut: _shapes.DONUT_SHAPE,
  gauge: _shapes.GAUGE_SHAPE,
  grid: _shapes.GRID_SHAPE,
  interaction: _shapes.INTERACTION_SHAPE,
  isPure: _propTypes2.default.bool,
  legend: _shapes.LEGEND_SHAPE,
  line: _shapes.LINE_SHAPE,
  onafterinit: _propTypes2.default.func,
  onbeforeinit: _propTypes2.default.func,
  oninit: _propTypes2.default.func,
  onmouseout: _propTypes2.default.func,
  onmouseover: _propTypes2.default.func,
  onrendered: _propTypes2.default.func,
  onresize: _propTypes2.default.func,
  onresized: _propTypes2.default.func,
  padding: _shapes.PADDING_SHAPE,
  pie: _shapes.PIE_SHAPE,
  point: _shapes.POINT_SHAPE,
  regions: _propTypes2.default.arrayOf(_shapes.REGION_SHAPE),
  resize: _shapes.RESIZE_SHAPE,
  size: _shapes.SIZE_SHAPE,
  spline: _shapes.SPLINE_SHAPE,
  style: _propTypes2.default.object,
  subchart: _shapes.SUBCHART_SHAPE,
  svg: _shapes.SVG_SHAPE,
  title: _shapes.TITLE_SHAPE,
  tooltip: _shapes.TOOLTIP_SHAPE,
  transition: _shapes.TRANSITION_SHAPE,
  unloadBeforeLoad: _propTypes2.default.bool,
  zoom: _shapes.ZOOM_SHAPE
};
BillboardChart.defaultProps = {
  isPure: false,
  unloadBeforeLoad: false
};
BillboardChart.getInstances = getInstances;
exports.default = BillboardChart;