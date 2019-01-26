'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

var _ContributeForm = require('../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/nivas/Desktop/final-project-N1vas/pages/index.js?entry';


var CampaignIndex = function (_Component) {
	(0, _inherits3.default)(CampaignIndex, _Component);

	function CampaignIndex() {
		(0, _classCallCheck3.default)(this, CampaignIndex);

		return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
	}

	(0, _createClass3.default)(CampaignIndex, [{
		key: 'renderCampaigns',
		value: function renderCampaigns() {

			var items = this.props.campaigns.map(function (address) {
				return {
					header: address,
					description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
							fileName: _jsxFileName,
							lineNumber: 21
						}
					}, _react2.default.createElement('a', {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 22
						}
					}, _react2.default.createElement('p', { style: { color: 'teal' }, __source: {
							fileName: _jsxFileName,
							lineNumber: 22
						}
					}, 'View', _react2.default.createElement(_semanticUiReact.Icon, { name: 'right arrow', __source: {
							fileName: _jsxFileName,
							lineNumber: 22
						}
					})))),
					fluid: true
				};
			});

			return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 29
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}, _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			}, _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}, _react2.default.createElement('img', { src: '../static/HelpEth.png', style: { width: 350, height: 350, marginLeft: 380, marginTop: 0 }, __source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}), _react2.default.createElement('h2', { align: 'center', style: { marginTop: 0, color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}, 'Get Sponsors for your events, and Philanthropists for your welfare orgs, all at one place!')), _react2.default.createElement('div', { style: { margin: 50 }, __source: {
					fileName: _jsxFileName,
					lineNumber: 43
				}
			}, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', icon: true, textAlign: 'center', color: 'teal', __source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			}, _react2.default.createElement(_semanticUiReact.Icon, { name: 'users', circular: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			}), _react2.default.createElement(_semanticUiReact.Header.Content, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, 'Needs'))), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			}, _react2.default.createElement(_semanticUiReact.Button, { animated: 'fade', floated: 'right', basic: true, color: 'teal', __source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, _react2.default.createElement('p', { style: { color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, 'Create Need')), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, _react2.default.createElement(_semanticUiReact.Icon, { name: 'add circle', color: 'teal', __source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}))))), this.renderCampaigns()));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var campaigns;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _factory2.default.methods.getDeployedCampaigns().call();

							case 2:
								campaigns = _context.sent;
								return _context.abrupt('return', { campaigns: campaigns });

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps() {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsIkljb24iLCJIZWFkZXIiLCJmYWN0b3J5IiwiTGF5b3V0IiwiTGluayIsImNvbnRyaSIsIkNhbXBhaWduSW5kZXgiLCJpdGVtcyIsInByb3BzIiwiY2FtcGFpZ25zIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiY29sb3IiLCJmbHVpZCIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsIm1hcmdpbiIsInJlbmRlckNhbXBhaWducyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFTLEFBQU0sQUFBUSxBQUFLOztBQUM1QixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVEsQUFBVzs7QUFDbkIsQUFBTyxBQUFZOzs7Ozs7Ozs7SUFFYixBOzs7Ozs7Ozs7OztvQ0FPYSxBQUVqQjs7T0FBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxtQkFBVyxBQUNqRDs7YUFBTyxBQUNDLEFBQ1A7a0NBQ0MsQUFBQyw4QkFBSyx1QkFBTixBQUEyQjtpQkFBM0I7bUJBQUEsQUFDQTtBQURBO01BQUEsa0JBQ0EsY0FBQTs7aUJBQUE7bUJBQUEsQUFBRztBQUFIO0FBQUEsd0JBQUcsY0FBQSxPQUFHLE9BQU8sRUFBQyxPQUFYLEFBQVUsQUFBTztpQkFBakI7bUJBQUE7QUFBQTtRQUE4Qix3QkFBQSxBQUFDLHVDQUFLLE1BQU4sQUFBVztpQkFBWDttQkFKNUIsQUFHTCxBQUNBLEFBQUcsQUFBOEIsQUFHbEM7QUFIa0M7O1lBSm5DLEFBQU8sQUFPQyxBQUVSO0FBVE8sQUFDTjtBQUZGLEFBQWMsQUFZZCxJQVpjOzt3Q0FZUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO2VBQW5CO2lCQUFQLEFBQU8sQUFDUDtBQURPO0lBQUE7Ozs7MkJBR0EsQUFDUDswQkFDQyxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxjQUFBOztlQUFBO2lCQUFBLEFBRUE7QUFGQTtBQUFBLDZDQUVLLEtBQUwsQUFBUyx5QkFBd0IsT0FBTyxFQUFDLE9BQUQsQUFBTyxLQUFLLFFBQVosQUFBbUIsS0FBSyxZQUF4QixBQUFtQyxLQUFLLFdBQWhGLEFBQXdDLEFBQWtEO2VBQTFGO2lCQUZBLEFBRUEsQUFFQTtBQUZBO3VCQUVBLGNBQUEsUUFBSSxPQUFKLEFBQVUsVUFBUyxPQUFPLEVBQUMsV0FBRCxBQUFXLEdBQUcsT0FBeEMsQUFBMEIsQUFBb0I7ZUFBOUM7aUJBQUE7QUFBQTtNQUxELEFBQ0MsQUFJQSxBQUdBLGdIQUFBLGNBQUEsU0FBSyxPQUFPLEVBQUMsUUFBYixBQUFZLEFBQVE7ZUFBcEI7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUMseUNBQU8sSUFBUixBQUFXLE1BQUssTUFBaEIsTUFBcUIsV0FBckIsQUFBK0IsVUFBUyxPQUF4QyxBQUE4QztlQUE5QztpQkFBQSxBQUNRO0FBRFI7c0JBQ1EsQUFBQyx1Q0FBSyxNQUFOLEFBQVcsU0FBUyxVQUFwQjtlQUFBO2lCQURSLEFBQ1EsQUFDQTtBQURBO3VCQUNDLGNBQUQsd0JBQUEsQUFBUTs7ZUFBUjtpQkFBQTtBQUFBO0FBQUEsTUFYVixBQVFDLEFBQ0MsQUFFUSxBQUtULDRCQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO2VBQVo7aUJBQUEsQUFDQztBQUREO3NCQUNDLGNBQUE7O2VBQUE7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsQUFBQyx5Q0FBTyxVQUFSLEFBQWlCLFFBQU8sU0FBeEIsQUFBZ0MsU0FBUSxPQUF4QyxNQUE4QyxPQUE5QyxBQUFvRDtlQUFwRDtpQkFBQSxBQUNFO0FBREY7c0JBQ0csY0FBRCx3QkFBQSxBQUFRLFdBQVEsU0FBaEI7ZUFBQTtpQkFBQSxBQUF3QjtBQUF4QjtzQkFBd0IsY0FBQSxPQUFHLE9BQU8sRUFBQyxPQUFYLEFBQVUsQUFBTztlQUFqQjtpQkFBQTtBQUFBO01BRDFCLEFBQ0UsQUFBd0IsQUFDdEIsaUNBQUMsY0FBRCx3QkFBQSxBQUFRLFdBQVEsUUFBaEI7ZUFBQTtpQkFBQSxBQUNHO0FBREg7c0JBQ0csQUFBQyx1Q0FBSyxNQUFOLEFBQVcsY0FBYSxPQUF4QixBQUE4QjtlQUE5QjtpQkFyQlYsQUFnQkMsQUFDQyxBQUNDLEFBRUksQUFDRyxBQUtQO0FBTE87Z0JBdkJaLEFBQ0MsQUFDQyxBQTBCRyxBQUFLLEFBSVY7Ozs7Ozs7Ozs7OztlQXZEd0Isa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHVCQUFoQixBQUF1QyxBOztZQUF6RDtBO3lDQUVDLEVBQUUsV0FBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSm1CLEEsQUE0RDVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL25pdmFzL0Rlc2t0b3AvZmluYWwtcHJvamVjdC1OMXZhcyJ9