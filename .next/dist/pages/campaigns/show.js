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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/nivas/Desktop/final-project-N1vas/pages/campaigns/show.js?entry';


var CampaignShow = function (_Component) {
	(0, _inherits3.default)(CampaignShow, _Component);

	function CampaignShow() {
		(0, _classCallCheck3.default)(this, CampaignShow);

		return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
	}

	(0, _createClass3.default)(CampaignShow, [{
		key: 'renderCards',
		value: function renderCards() {
			var _props = this.props,
			    chooseCategory = _props.chooseCategory,
			    title = _props.title,
			    details = _props.details,
			    balance = _props.balance,
			    manager = _props.manager,
			    minimumContribution = _props.minimumContribution,
			    requestsCount = _props.requestsCount,
			    approversCount = _props.approversCount;

			return _react2.default.createElement(_semanticUiReact.Card.Group, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 43
				}
			}, _react2.default.createElement(_semanticUiReact.Card, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			}, _react2.default.createElement(_semanticUiReact.Card.Content, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, _react2.default.createElement(_semanticUiReact.Card.Header, { style: { overflowWrap: 'break-word', color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, _react2.default.createElement(_semanticUiReact.Icon, { fitted: true, name: 'hashtag', size: 'big', __source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}), ' ', chooseCategory), _react2.default.createElement(_semanticUiReact.Card.Meta, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, 'Category'), _react2.default.createElement(_semanticUiReact.Card.Description, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, 'The category eligible for help'))), _react2.default.createElement(_semanticUiReact.Card, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, _react2.default.createElement(_semanticUiReact.Card.Content, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, _react2.default.createElement(_semanticUiReact.Card.Header, { style: { overflowWrap: 'break-word', color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, _react2.default.createElement(_semanticUiReact.Icon, { fitted: true, name: 'file', size: 'big', __source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}), ' ', title), _react2.default.createElement(_semanticUiReact.Card.Meta, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, 'Title'), _react2.default.createElement(_semanticUiReact.Card.Description, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 61
				}
			}, 'What the need is?'))), _react2.default.createElement(_semanticUiReact.Card, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 65
				}
			}, _react2.default.createElement(_semanticUiReact.Card.Content, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}, _react2.default.createElement(_semanticUiReact.Card.Header, { style: { overflowWrap: 'break-word', color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			}, _react2.default.createElement(_semanticUiReact.Icon, { fitted: true, name: 'pencil', size: 'big', __source: {
					fileName: _jsxFileName,
					lineNumber: 68
				}
			}), 'Description'), _react2.default.createElement(_semanticUiReact.Card.Description, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 70
				}
			}, details))), _react2.default.createElement(_semanticUiReact.Card, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 74
				}
			}, _react2.default.createElement(_semanticUiReact.Card.Content, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 75
				}
			}, _react2.default.createElement(_semanticUiReact.Card.Header, { style: { overflowWrap: 'break-word', color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 76
				}
			}, _react2.default.createElement(_semanticUiReact.Icon, { fitted: true, name: 'id badge outline', size: 'big', __source: {
					fileName: _jsxFileName,
					lineNumber: 77
				}
			}), ' Person in Need (address)'), _react2.default.createElement(_semanticUiReact.Card.Meta, { style: { overflowWrap: 'break-word' }, fitted: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 79
				}
			}, manager), _react2.default.createElement(_semanticUiReact.Card.Description, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 80
				}
			}, 'The manager created this campaign and can create requests to withdraw money.'))), _react2.default.createElement(_semanticUiReact.Card, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 84
				}
			}, _react2.default.createElement(_semanticUiReact.Card.Content, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 85
				}
			}, _react2.default.createElement(_semanticUiReact.Card.Header, { style: { overflowWrap: 'break-word', color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 86
				}
			}, ' ', _react2.default.createElement(_semanticUiReact.Icon, { fitted: true, name: 'money bill alternate outline', size: 'big', __source: {
					fileName: _jsxFileName,
					lineNumber: 86
				}
			}), ' ', minimumContribution, ' '), _react2.default.createElement(_semanticUiReact.Card.Meta, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 87
				}
			}, 'Minimum Contribution (wei)'), _react2.default.createElement(_semanticUiReact.Card.Description, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 88
				}
			}, 'You must contribute atleast to become an approver.'))), _react2.default.createElement(_semanticUiReact.Card, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 92
				}
			}, _react2.default.createElement(_semanticUiReact.Card.Content, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 93
				}
			}, _react2.default.createElement(_semanticUiReact.Card.Header, { style: { overflowWrap: 'break-word', color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 94
				}
			}, ' ', _react2.default.createElement(_semanticUiReact.Icon, { fitted: true, name: 'send outline', size: 'big', __source: {
					fileName: _jsxFileName,
					lineNumber: 94
				}
			}), ' ', requestsCount, ' '), _react2.default.createElement(_semanticUiReact.Card.Meta, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 95
				}
			}, 'Number of Requests'), _react2.default.createElement(_semanticUiReact.Card.Description, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 96
				}
			}, 'A request tries to withdraw money from the contract. Requests must be approvers by approvers.'))), _react2.default.createElement(_semanticUiReact.Card, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 100
				}
			}, _react2.default.createElement(_semanticUiReact.Card.Content, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 101
				}
			}, _react2.default.createElement(_semanticUiReact.Card.Header, { style: { overflowWrap: 'break-word', color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 102
				}
			}, ' ', _react2.default.createElement(_semanticUiReact.Icon, { fitted: true, name: 'spy', size: 'big', __source: {
					fileName: _jsxFileName,
					lineNumber: 102
				}
			}), ' ', approversCount, ' '), _react2.default.createElement(_semanticUiReact.Card.Meta, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 103
				}
			}, 'Numbers of approvers'), _react2.default.createElement(_semanticUiReact.Card.Description, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 104
				}
			}, 'Number of people who have already donated to this campaign.'))), _react2.default.createElement(_semanticUiReact.Card, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 108
				}
			}, _react2.default.createElement(_semanticUiReact.Card.Content, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 109
				}
			}, _react2.default.createElement(_semanticUiReact.Card.Header, { style: { overflowWrap: 'break-word', color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 110
				}
			}, ' ', _react2.default.createElement(_semanticUiReact.Icon, { fitted: true, name: 'dollar', size: 'big', __source: {
					fileName: _jsxFileName,
					lineNumber: 110
				}
			}), ' ', _web2.default.utils.fromWei(balance, 'ether'), ' '), _react2.default.createElement(_semanticUiReact.Card.Meta, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 111
				}
			}, 'Campaign Balance (ether)'), _react2.default.createElement(_semanticUiReact.Card.Description, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 112
				}
			}, 'The balance is how much money this campaign has left to spend.'))));
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 121
				}
			}, _react2.default.createElement('div', { style: { margin: 50 }, __source: {
					fileName: _jsxFileName,
					lineNumber: 122
				}
			}, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', icon: true, textAlign: 'center', color: 'teal', __source: {
					fileName: _jsxFileName,
					lineNumber: 123
				}
			}, _react2.default.createElement(_semanticUiReact.Header.Content, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 124
				}
			}, 'About'))), _react2.default.createElement(_semanticUiReact.Grid, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 129
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 130
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
					fileName: _jsxFileName,
					lineNumber: 131
				}
			}, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
					fileName: _jsxFileName,
					lineNumber: 135
				}
			}, _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 136
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 137
				}
			}, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
					fileName: _jsxFileName,
					lineNumber: 138
				}
			}))), _react2.default.createElement('div', { style: { marginTop: '155px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 142
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 144
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 8, __source: {
					fileName: _jsxFileName,
					lineNumber: 145
				}
			}, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
					fileName: _jsxFileName,
					lineNumber: 146
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 147
				}
			}, _react2.default.createElement(_semanticUiReact.Button, { animated: true, color: 'teal', __source: {
					fileName: _jsxFileName,
					lineNumber: 148
				}
			}, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 149
				}
			}, 'View Requests'), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 150
				}
			}, _react2.default.createElement(_semanticUiReact.Icon, { name: 'right arrow', __source: {
					fileName: _jsxFileName,
					lineNumber: 151
				}
			}))))))))))));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var campaign, summary;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								campaign = (0, _campaign2.default)(props.query.address);
								_context.next = 3;
								return campaign.methods.getSummary().call();

							case 3:
								summary = _context.sent;
								return _context.abrupt('return', {
									address: props.query.address,
									chooseCategory: summary[0],
									title: summary[1],
									details: summary[2],
									minimumContribution: summary[3],
									balance: summary[4],
									requestsCount: summary[6],
									approversCount: summary[5],
									manager: summary[7]
								});

							case 5:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIkhlYWRlciIsIkljb24iLCJ3ZWIzIiwiQ29udHJpYnV0ZUZvcm0iLCJMaW5rIiwiQ2FtcGFpZ25TaG93IiwicHJvcHMiLCJjaG9vc2VDYXRlZ29yeSIsInRpdGxlIiwiZGV0YWlscyIsImJhbGFuY2UiLCJtYW5hZ2VyIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIm92ZXJmbG93V3JhcCIsImNvbG9yIiwidXRpbHMiLCJmcm9tV2VpIiwibWFyZ2luIiwicmVuZGVyQ2FyZHMiLCJhZGRyZXNzIiwibWFyZ2luVG9wIiwiY2FtcGFpZ24iLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQU87Ozs7QUFDZCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVMsQUFBTSxBQUFLLEFBQU8sQUFBTzs7QUFDbEMsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBUSxBQUFXOzs7Ozs7O0ksQUFFYjs7Ozs7Ozs7Ozs7Z0NBcUJRO2dCQVVSLEtBVlEsQUFVSDtPQVZHLEFBRVgsd0JBRlcsQUFFWDtPQUZXLEFBR1gsZUFIVyxBQUdYO09BSFcsQUFJWCxpQkFKVyxBQUlYO09BSlcsQUFLWCxpQkFMVyxBQUtYO09BTFcsQUFNWCxpQkFOVyxBQU1YO09BTlcsQUFPWCw2QkFQVyxBQU9YO09BUFcsQUFRWCx1QkFSVyxBQVFYO09BUlcsQUFTWCx3QkFUVyxBQVNYLEFBR0Q7OzBCQUNFLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUVDO0FBRkQ7QUFBQSxJQUFBLGtCQUVDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQU8sRUFBQyxjQUFELEFBQWMsY0FBYyxPQUFoRCxBQUFvQixBQUFrQztlQUF0RDtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQyx1Q0FBSyxRQUFOLE1BQWEsTUFBYixBQUFrQixXQUFVLE1BQTVCLEFBQWlDO2VBQWpDO2lCQURELEFBQ0M7QUFBQTtPQUEyQyxLQUY3QyxBQUNDLEFBR0EsaUNBQUMsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBO0FBQUE7QUFBQSxNQUpELEFBSUMsQUFDQSw2QkFBQyxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUE7QUFBQTtBQUFBLE1BUkgsQUFFQyxBQUNDLEFBS0MsQUFJRixxREFBQSxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDRSxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFPLEVBQUMsY0FBRCxBQUFjLGNBQWMsT0FBaEQsQUFBb0IsQUFBa0M7ZUFBdEQ7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUMsdUNBQUssUUFBTixNQUFhLE1BQWIsQUFBa0IsUUFBTyxNQUF6QixBQUE4QjtlQUE5QjtpQkFERCxBQUNDO0FBQUE7T0FBd0MsS0FGMUMsQUFDQyxBQUdBLHdCQUFDLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQTtBQUFBO0FBQUEsTUFKRCxBQUlDLEFBQ0EsMEJBQUMsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBO0FBQUE7QUFBQSxNQWxCSCxBQVlDLEFBQ0MsQUFLQyxBQUlGLHdDQUFBLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQU8sRUFBQyxjQUFELEFBQWMsY0FBYyxPQUFoRCxBQUFvQixBQUFrQztlQUF0RDtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQyx1Q0FBSyxRQUFOLE1BQWEsTUFBYixBQUFrQixVQUFTLE1BQTNCLEFBQWdDO2VBQWhDO2lCQURELEFBQ0M7QUFBQTtPQUZGLEFBQ0MsQUFHQSxnQ0FBQyxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUEsQUFBbUI7QUFBbkI7QUFBQSxNQTNCSCxBQXNCQyxBQUNDLEFBSUMsQUFJRiw0QkFBQSxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDRSxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFPLEVBQUMsY0FBRCxBQUFjLGNBQWMsT0FBaEQsQUFBb0IsQUFBa0M7ZUFBdEQ7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUMsdUNBQUssUUFBTixNQUFhLE1BQWIsQUFBa0Isb0JBQW1CLE1BQXJDLEFBQTBDO2VBQTFDO2lCQURELEFBQ0M7QUFBQTtPQUZGLEFBQ0MsQUFHQSw4Q0FBQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxPQUFPLEVBQUMsY0FBbkIsQUFBa0IsQUFBYyxnQkFBZSxRQUEvQztlQUFBO2lCQUFBLEFBQXVEO0FBQXZEO01BSkQsQUFJQyxBQUNBLDBCQUFDLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQTtBQUFBO0FBQUEsTUFyQ0gsQUErQkMsQUFDQyxBQUtDLEFBSUYsbUdBQUEsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDRSxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRCxzQkFBQSxBQUFNLFVBQVEsT0FBTyxFQUFDLGNBQUQsQUFBYyxjQUFjLE9BQWpELEFBQXFCLEFBQWtDO2VBQXZEO2lCQUFBO0FBQUE7TUFBaUUscUJBQUEsQUFBQyx1Q0FBSyxRQUFOLE1BQWEsTUFBYixBQUFrQixnQ0FBK0IsTUFBakQsQUFBc0Q7ZUFBdEQ7aUJBQWpFLEFBQWlFO0FBQUE7T0FBaUUsS0FBbEkscUJBREQsQUFDQyxBQUNBLHNCQUFDLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQTtBQUFBO0FBQUEsTUFGRCxBQUVDLEFBQ0EsK0NBQUMsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBO0FBQUE7QUFBQSxNQTdDSCxBQXlDQyxBQUNDLEFBR0MsQUFJRix5RUFBQSxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDRSxjQUFELHNCQUFBLEFBQU0sVUFBUSxPQUFPLEVBQUMsY0FBRCxBQUFjLGNBQWMsT0FBakQsQUFBcUIsQUFBa0M7ZUFBdkQ7aUJBQUE7QUFBQTtNQUFpRSxxQkFBQSxBQUFDLHVDQUFLLFFBQU4sTUFBYSxNQUFiLEFBQWtCLGdCQUFlLE1BQWpDLEFBQXNDO2VBQXRDO2lCQUFqRSxBQUFpRTtBQUFBO09BQWlELEtBQWxILGVBREQsQUFDQyxBQUNBLHNCQUFDLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQTtBQUFBO0FBQUEsTUFGRCxBQUVDLEFBQ0EsdUNBQUMsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBO0FBQUE7QUFBQSxNQXJESCxBQWlEQyxBQUNDLEFBR0MsQUFJRixvSEFBQSxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDRSxjQUFELHNCQUFBLEFBQU0sVUFBUSxPQUFPLEVBQUMsY0FBRCxBQUFjLGNBQWMsT0FBakQsQUFBcUIsQUFBa0M7ZUFBdkQ7aUJBQUE7QUFBQTtNQUFpRSxxQkFBQSxBQUFDLHVDQUFLLFFBQU4sTUFBYSxNQUFiLEFBQWtCLE9BQU0sTUFBeEIsQUFBNkI7ZUFBN0I7aUJBQWpFLEFBQWlFO0FBQUE7T0FBd0MsS0FBekcsZ0JBREQsQUFDQyxBQUNBLHNCQUFDLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQTtBQUFBO0FBQUEsTUFGRCxBQUVDLEFBQ0EseUNBQUMsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBO0FBQUE7QUFBQSxNQTdESCxBQXlEQyxBQUNDLEFBR0MsQUFJRixrRkFBQSxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDRSxjQUFELHNCQUFBLEFBQU0sVUFBUSxPQUFPLEVBQUMsY0FBRCxBQUFjLGNBQWMsT0FBakQsQUFBcUIsQUFBa0M7ZUFBdkQ7aUJBQUE7QUFBQTtNQUFpRSxxQkFBQSxBQUFDLHVDQUFLLFFBQU4sTUFBYSxNQUFiLEFBQWtCLFVBQVMsTUFBM0IsQUFBZ0M7ZUFBaEM7aUJBQWpFLEFBQWlFO0FBQUE7T0FBMkMsbUJBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUEvSCxBQUE0RyxBQUEyQixVQUR4SSxBQUNDLEFBQ0Esc0JBQUMsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBO0FBQUE7QUFBQSxNQUZELEFBRUMsQUFDQSw2Q0FBQyxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUE7QUFBQTtBQUFBLE1BdEVKLEFBQ0MsQUFpRUMsQUFDQyxBQUdDLEFBS0o7Ozs7MkJBRVEsQUFDUjswQkFDQyxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0MsY0FBQSxTQUFLLE9BQU8sRUFBQyxRQUFiLEFBQVksQUFBUTtlQUFwQjtpQkFBQSxBQUNFO0FBREY7c0JBQ0UsQUFBQyx5Q0FBTyxJQUFSLEFBQVcsTUFBSyxNQUFoQixNQUFxQixXQUFyQixBQUErQixVQUFTLE9BQXhDLEFBQThDO2VBQTlDO2lCQUFBLEFBQ1E7QUFEUjtzQkFDUyxjQUFELHdCQUFBLEFBQVE7O2VBQVI7aUJBQUE7QUFBQTtBQUFBLE1BSFgsQUFDQyxBQUNFLEFBQ1EsQUFLViw0QkFBQSxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDRSxjQUFELHNCQUFBLEFBQU0sVUFBUSxPQUFkLEFBQXFCO2VBQXJCO2lCQUFBLEFBQ0U7QUFERjtXQURELEFBQ0MsQUFDRSxBQUFLLEFBR1AsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQVEsT0FBZCxBQUFxQjtlQUFyQjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDRSxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUEsQUFDQTtBQURBO0FBQUEsc0JBQ0EsQUFBQywwQ0FBZSxTQUFXLEtBQUEsQUFBSyxNQUFoQyxBQUFzQztlQUF0QztpQkFIRixBQUNDLEFBQ0MsQUFDQSxBQUlEO0FBSkM7eUJBSUQsY0FBQSxTQUFLLE9BQU8sRUFBQyxXQUFiLEFBQVksQUFBVztlQUF2QjtpQkFBQSxBQUVBO0FBRkE7c0JBRUMsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7ZUFBcEI7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0QztlQUFBO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxjQUFBOztlQUFBO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLEFBQUMseUNBQU8sVUFBUixNQUFpQixPQUFqQixBQUF1QjtlQUF2QjtpQkFBQSxBQUNPO0FBRFA7c0JBQ1EsY0FBRCx3QkFBQSxBQUFRLFdBQVEsU0FBaEI7ZUFBQTtpQkFBQTtBQUFBO01BRFAsQUFDTyxBQUNDLGtDQUFDLGNBQUQsd0JBQUEsQUFBUSxXQUFRLFFBQWhCO2VBQUE7aUJBQUEsQUFDTztBQURQO3NCQUNPLEFBQUMsdUNBQUssTUFBTixBQUFXO2VBQVg7aUJBL0J4QixBQUNDLEFBUUMsQUFDQyxBQUtDLEFBT0MsQUFFQSxBQUNDLEFBQ0MsQUFDQyxBQUNDLEFBRVEsQUFDTyxBQWlCeEI7QUFqQndCOzs7Ozs7d0csQUE3SUk7Ozs7O1lBQ3RCO0EsbUJBQVcsd0JBQVMsTUFBQSxBQUFNLE0sQUFBZixBQUFxQjs7ZUFFaEIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEIsQTs7WUFBOUM7QTs7a0JBS0ksTUFBQSxBQUFNLE1BRFQsQUFDZSxBQUNyQjt5QkFBZ0IsUUFGVixBQUVVLEFBQVEsQUFDeEI7Z0JBQU8sUUFIRCxBQUdDLEFBQVEsQUFDZjtrQkFBUyxRQUpILEFBSUcsQUFBUSxBQUNqQjs4QkFBcUIsUUFMZixBQUtlLEFBQVEsQUFDN0I7a0JBQVMsUUFOSCxBQU1HLEFBQVEsQUFDakI7d0JBQWUsUUFQVCxBQU9TLEFBQVEsQUFDdkI7eUJBQWdCLFFBUlYsQUFRVSxBQUFRLEFBQ3hCO2tCQUFTLFFBVEgsQUFTRyxBQUFRLEE7QUFUWCxBQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVHdCLEEsQUFrSzNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvbml2YXMvRGVza3RvcC9maW5hbC1wcm9qZWN0LU4xdmFzIn0=