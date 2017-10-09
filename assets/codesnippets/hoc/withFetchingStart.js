const withFetching = url => Comp =>
  class WithFetch extends Component {
    state = {
      data: {},
      isLoading: false,
      error: null
    };

    fetchData = url => {...};

    render() {
      - edgeCases
      - <Comp {...props} {...state} />
    }
  };
