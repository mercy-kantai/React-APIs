
const UserCard = ({image, fullName}) => {
 const images ={
    border: 'solid 1px'
 }
  
    return (
        <div>
        
            <img src={image} alt={`${fullName} profile`} style={images} />
           
            <h3>
              {fullName}
            </h3>
        </div>
    );
};
export default UserCard;