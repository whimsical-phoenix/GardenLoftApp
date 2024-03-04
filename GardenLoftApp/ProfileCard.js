// import React from "react";
// import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
// import styled from "styled-components/native";

// const ProfileCardContainer = styled.View`
//   width: ${(props) => (props.active ? "133px" : "133px")};
//   height: ${(props) => (props.active ? "130px" : "130px")};
//   background: ${(props) =>
//     props.active ? "#f3b717" : props.backgroundColor || "#7F8181"};
//   border-radius: ${(props) =>
//     props.active ? "30%" : props.borderRadius || "38px"};
//   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
//   margin: 30px 20px;
//   padding: 10px;
//   align-items: center;
//   justify-content: space-between;
//   position: relative;
// `;

// const CardContent = styled.View`
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
// `;

// const TextBelowCard = styled.Text`
//   position: absolute;
//   top: 60%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   color: black;
//   display: ${(props) => (props.active ? "flex" : "none")};
// `;

// const ProfileCard = ({
//   link,
//   icon,
//   onClick,
//   title,
//   textBelowCard,
//   backgroundColor,
//   borderRadius,
//   disableHover,
//   active,
// }) => {
//   const handleCardClick = () => {
//     if (onClick) {
//       onClick();
//     }
//   };

//   return (
//     <TouchableOpacity onPress={handleCardClick}>
//       <ProfileCardContainer
//         active={active}
//         backgroundColor={backgroundColor}
//         borderRadius={borderRadius}
//         disableHover={disableHover}>
//         <CardContent>
//           <View>{icon}</View>
//           <Text style={styles.title}>{title}</Text>
//         </CardContent>
//         <TextBelowCard active={active}>{textBelowCard}</TextBelowCard>
//       </ProfileCardContainer>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   title: {
//     color: "#f3b717",
//     fontSize: 15,
//     marginLeft: 10,
//   },
// });

// export default ProfileCard;
