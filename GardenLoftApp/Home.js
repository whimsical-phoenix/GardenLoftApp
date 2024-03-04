// import React, { useState, useEffect } from "react";
// import { View, Text, ScrollView, StyleSheet } from "react-native";
// import Slider from "react-native-slick";
// import styled from "styled-components/native";
// import ProfileCard from "./ProfileCard";
// // import {
// //   ChevronLeftIcon,
// //   ChevronRightIcon,
// //   GardenLoftIcon,
// //   TvIcon,
// // } from "./icons";
// import CallHelpButtonComponent from "./CallHelpButton";
// import Contacts from "./Contacts";
// // import { GiFilmSpool } from "react-icons/gi";
// // import { FaPhoneAlt } from "react-icons/fa";

// // import { IoMdPhotos } from "react-icons/io";
// // import { GiWeightLiftingUp } from "react-icons/gi";

// // import { FaLightbulb } from "react-icons/fa";
// import Lights from "./Lights";
// import Entertainment from "./Entertainment";
// import Television from "./Tv";
// import Activities from "./Activities";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// const HomeContainer = styled.View`
//   position: relative;
//   top: 65px;
//   left: 0;
//   right: 0;
//   display: flex;
//   justify-content: center;
//   min-height: 42vh;
//   text-align: center;
// `;

// const WelcomeWrapper = styled.View`
//   display: flex;
//   flex-direction: row;
//   gap: 0.5rem;
//   justify-content: flex-end;
// `;

// const CustomArrowButton = styled.View`
//   width: 40px;
//   height: 40px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   position: absolute;
//   top: 40%;
//   left: 880px;
//   margin-left: 80px;
//   transform: translateY(-50%);
//   z-index: 1;
// `;

// const TextBelowCard = styled.Text`
//   margin: 0;
//   width: 300px;
//   font-size: 26px;
//   color: #2e3e5e;
//   position: relative;
//   left: 0%;
//   top: 95%;
//   display: flex;
// `;

// const SpaceBeforeBelowCard = styled.Text`
//   margin: 0;
//   font-size: 46px;
//   color: #fcf8e3;
//   position: relative;
//   left: 0%;
//   top: 95%;
//   display: flex;
// `;

// const PromptDiv = styled.Text`
//   display: flex;
//   width: 100vw;
//   text-align: center;
// `;

// const Home = ({ enteredName }) => {
//   const sliderRef = useRef(null);
//   const activitiesRef = useRef(null);
//   const tvRef = useRef(null);
//   const entertainmentRef = useRef(null);
//   const contactsRef = useRef(null);
//   const lightsRef = useRef(null);

//   const settings = {
//     centerMode: true,
//     centerPadding: "0",
//     infinite: true,
//     speed: 250,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     nextArrow: <CustomNextArrow data-clickable="true" />,
//     prevArrow: <CustomPrevArrow data-clickable="true" />,
//     beforeChange: () => {
//       // Disable hover effect for all cards
//       setDisableHover(true);
//     },
//     afterChange: (current) => {
//       // Enable hover effect for the center card
//       setDisableHover(false);
//       // Update the index of the center card
//       setCenterCardIndex(current);
//     },
//   };

//   const [disableHover, setDisableHover] = useState(false);
//   const [centerCardIndex, setCenterCardIndex] = useState(0);
//   const [activeCarousel, setActiveCarousel] = useState("cardData");

//   const handleCarouselChange = (current) => {
//     setDisableHover(true);
//     setActiveCarousel(current);
//   };

//   useEffect(() => {
//     // Remove event listener on component unmount
//     return () => {};
//   }, []);

//   return (
//     <>
//       <section id="home">
//         <div className="garden-logo">
//           {" "}
//           <GardenLoftIcon />
//         </div>
//         {/* Wrapper for Welcome and username */}
//         <WelcomeWrapper>
//           <div>
//             <span
//               style={{
//                 color: "#333",
//                 fontSize: "2rem",
//                 fontWeight: "bold",
//               }}>
//               Welcome
//             </span>
//           </div>

//           <div>
//             <span
//               style={{
//                 fontSize: "2rem",
//                 fontWeight: "bold",
//                 textTransform: "uppercase",
//                 color: "#0066cc",
//               }}>
//               {enteredName}
//             </span>
//           </div>
//         </WelcomeWrapper>
//         {/* <ToastContainer position="top-right" sound="alert.mp3" /> */}
//         <HomeContainer disableHover={disableHover}>
//           {/* Card Carousel */}
//           <ScrollView horizontal>
//             <View>
//               <Slider
//                 {...settings}
//                 ref={sliderRef}
//                 beforeChange={() => handleCarouselChange("cardData")}>
//                 {cardData.map((card, index) => (
//                   <View key={index}>
//                     <ProfileCard
//                       icon={card.icon}
//                       title={card.title}
//                       textBelowCard={card.textBelowCard}
//                       spaceBeforeBelowCard={card.spaceBeforeBelowCard}
//                     />
//                   </View>
//                 ))}
//               </Slider>
//             </View>
//           </ScrollView>
//         </HomeContainer>
//         {/* Component Carousel */}
//         <ScrollView horizontal>
//           <View>
//             {centerCardIndex === 1 && <Television ref={tvRef} />}
//             {centerCardIndex === 0 && (
//               <Activities ref={activitiesRef} enteredName={enteredName} />
//             )}
//             {centerCardIndex === 2 && <Entertainment ref={entertainmentRef} />}
//             {centerCardIndex === 4 && <Contacts ref={contactsRef} />}
//             {centerCardIndex === 5 && <Lights ref={lightsRef} />}
//             {/* ... add more components if needed */}
//           </View>
//         </ScrollView>

//         <CallHelpButtonComponent />

//         {/* Display Hello and the logged-in person's name */}
//       </section>
//     </>
//   );
// };

// export default Home;
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
