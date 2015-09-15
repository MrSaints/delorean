let React = require("react");
let moment = require("moment");

let HistoryItem = React.createClass({
  statics: {
    truncate: function (s) {
      let newString = s.substr(0, 100);
      if (s.length > 100) {
        newString += "..."
      }
      return newString
    },
    getTime: function (t) {
      return moment(t).format("hh:mm:ss A");
    }
  },
  render: function () {
    let formattedTime = this.constructor.getTime(this.props.visited);
    return (
      <tr>
        <td className="mdl-data-table__cell--non-numeric">
          {this.props.stale ? <em>{formattedTime}</em> : formattedTime}
        </td>
        <td className="mdl-data-table__cell--non-numeric"><img src={"chrome://favicon/" + this.props.url} /></td>
        <td className="mdl-data-table__cell--non-numeric">
          <a
            href={this.props.url}
            target="_blank"
            className="mdl-badge"
            data-badge={this.props.count}>
            {this.constructor.truncate(this.props.title || this.props.url)}
          </a>
        </td>
      </tr>
    );
  }
});

module.exports = HistoryItem;