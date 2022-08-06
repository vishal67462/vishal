// import module.css here;
const UserDetails = (props) => {
  var {Name,lname,address,karma,followers,post}=props
  return (
    <>
      <div data-testid="user-container">
        {/* user image */}
        <div>
          <div>
            <h3 data-testid="user-fname">{Name}</h3>
            <h3 data-testid="user-lname">{lname}</h3>
          </div>
          <div>
            <p data-testid="user-address">{address}</p>
          </div>
        </div>
        <div>
          <h3 data-testid="user-karma">{karma}</h3>
        </div>
        <div>
          <h3 data-testid="user-followers">{followers}</h3>
        </div>
        <div>
          <h3 data-testid="user-posts">{post}</h3>
        </div>
        <button data-testid="follow-btn"></button>
      </div>
    </>
  );
};
export default UserDetails;
