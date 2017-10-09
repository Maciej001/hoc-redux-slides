const withLoadingOrEmpty = (Component) => props => {
  if (props.isLoading) {
    return <p>{props.message.onLoading}</p>
  }
  if (!props.data || !props.data.length) {
    return <p>{props.message.onNoData}</p>
  }
  return <Component {...props} />
};

const CamerasWithLoadingOrEmpty =
  withLoadingOrEmpty(Cameras);
export default CamerasWithLoadingOrEmpty;

const Cameras = ({ data, activeCamera, onClick }) => (
  <div className="cameras">
    {data.map(camera => (
      ...
    ))}
  </div>
)
