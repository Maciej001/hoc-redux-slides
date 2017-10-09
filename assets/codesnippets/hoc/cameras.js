const Cameras = ({ cameras, ..., isLoadingCameras }) => {
  if (isLoadingCameras) {
    return <p>Loading cameras...</p>
  }
  if (!cameras || !cameras.length) {
    <p>No data for chosen sol.</p>
  }
  return (
    <div className="cameras">...</div>
  )
};
