class App extends Component {
  ...
  render() {

    return (
      <div>
        ...
        { this.props.cameras &&
          <ImagesWithFetching url=.../>
        }
      </div>
    )
  }
}
