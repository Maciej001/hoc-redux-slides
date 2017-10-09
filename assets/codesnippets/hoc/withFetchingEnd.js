import React, { Component } from "react";

const withFetching () => Comp =>
  class WithFetch extends Component {
    state = {
      data: {},
      isLoading: true,
      error: null
    };

    componentDidMount() {
      this.fetchData(url);
    }

    componentWillReceiveProps(nextProps) {
      this.fetchData(url);
    }

    fetchData = url => {
      this.setState({ isLoading: true });

      fetch(url)
        ...
    };

    render() {
      if (this.state.isLoading) {
        return <p>Loading...</p>;
      }

      if (this.state.error) {
        return <p>Fetching data error.</p>;
      }

      return <Comp {...this.props} {...this.state} />;
    }
  };

const ImagesWithFetching = withFetching(Images);

export default ImagesWithFetching;
