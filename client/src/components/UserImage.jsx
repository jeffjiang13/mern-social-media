import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      {image && (
        <img
          style={{ objectFit: "cover", borderRadius: "50%" }}
          width={size}
          height={size}
          alt="user"
          src={`https://mern-social-media-v9m2.onrender.com/assets/${image}`}
        />
      )}
    </Box>
  );
};

export default UserImage;
