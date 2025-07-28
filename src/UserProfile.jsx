import img from './assets/unsplash.jpg';
function UserProfile(props) {
  const { name, bio } = props;
  return (
    <div
      style={{
        backgroundColor: 'white',
        fontFamily: 'Helvetica, sans-serif',
        textAlign: 'center',
        color: 'blue',
        borderRadius: '12px',
        padding: '24px',
      }}
    >
      <img
        src={img}
        alt="a person"
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '4px solid #3d95ecff',
          marginBottom: '16px',
        }}
      />
      <h1>{name}</h1>
      <p>{bio}</p>
    </div>
  );
}
export default UserProfile;
