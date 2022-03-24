import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: [],
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    return (
      //div
      <div className="row">
        <div className="col-1">
          <span style={{ fontSize: 15 }} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value == 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            X
          </button>
        </div>
        {/* <div>
          {this.state.tags.length == 0 && "Please create a new tag!"}
          {this.renderTags()}
        </div> */}
      </div>
    );
  }

  // handleDecrement = () => {
  //   this.setState({ value: this.props.counter.value - 1 });
  // };

  // //is this a var or a function???
  // handleIncrement = () => {
  //   //because it is passed as a reference itself, not obj.method
  //   this.setState({ value: this.state.value + 1 });
  // };

  // renderTags() {
  //   // if (this.state.tags.length == 0) return <p>There are no tags!</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value == 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count == 0 ? "Zero" : count;
  }
}

export default Counter;
