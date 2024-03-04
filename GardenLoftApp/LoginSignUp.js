// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";
// import { Link } from "react-router-native";
// import axios from "axios";

// const LoginSignUp = ({ onLogin, onNameEntered }) => {
//   const [name, setName] = useState("");
//   const [userData, setUserData] = useState(null);

//   const handleLogin = async () => {
//     try {
//       const response = await axios.get(
//         "https://api.signupgenius.com/v2/k/signups/report/filled/47293846/?user_key=UmNrVWhyYWwrVGhtQmdXeVpweTBZZz09"
//       );

//       if (!response.data.success) {
//         throw new Error("Failed to retrieve signed-up activities.");
//       }

//       const signUpData = response.data.data.signup;

//       const matchingUserActivities = signUpData.filter(
//         (item) =>
//           item.firstname.trim().toLowerCase() === name.trim().toLowerCase() ||
//           item.lastname.trim().toLowerCase() === name.trim().toLowerCase()
//       );

//       if (matchingUserActivities.length > 0) {
//         console.log(
//           `Logged in as: ${matchingUserActivities[0].firstname} ${matchingUserActivities[0].lastname}`
//         );
//         onLogin(name);
//         onNameEntered(name, matchingUserActivities[0].itemmemberid);
//         setUserData(matchingUserActivities[0]); // Set user data if needed
//       } else {
//         console.error("User not found.");
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error.message);
//     }
//   };

//   return (
//     <View style={styles.alignSign}>
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <Text style={styles.text}>Login</Text>
//           <View style={styles.underline}></View>
//         </View>
//         <View style={styles.inputs}>
//           <View style={styles.input}>
//             <TextInput
//               placeholder="Name"
//               value={name}
//               onChangeText={(text) => setName(text)}
//               style={styles.inputText}
//             />
//           </View>
//         </View>
//         <TouchableOpacity onPress={handleLogin} style={styles.summit}>
//           <Link to="/home" style={styles.link}>
//             <Text>Login</Text>
//           </Link>
//         </TouchableOpacity>
//         {userData && (
//           <View style={styles.userData}>
//             <Text>User Data: {JSON.stringify(userData)}</Text>
//             <Text>Activity: {userData.item}</Text>
//           </View>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   alignSign: {
//     marginTop: "20vh",
//   },
//   container: {
//     maxWidth: 900,
//     maxHeight: 800,
//     margin: "auto",
//     backgroundColor: "#8c8f92af",
//     padding: 20,
//     borderWidth: 4,
//     borderColor: "#666a58",
//     borderRadius: 8,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 8,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 28,
//   },
//   header: {
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   text: {
//     color: "#363d42",
//     fontSize: 40,
//     fontWeight: "bold",
//   },
//   underline: {
//     height: 8,
//     width: 190,
//     backgroundColor: "#f3b717",
//     margin: "0 auto",
//   },
//   inputs: {
//     marginBottom: 20,
//     textTransform: "uppercase",
//   },
//   input: {
//     marginBottom: 15,
//     textTransform: "uppercase",
//   },
//   inputText: {
//     width: "100%",
//     marginTop: 10,
//     fontSize: 30,
//     padding: 20,
//     borderWidth: 1,
//     borderColor: "#8e8b8b",
//     borderRadius: 5,
//     // boxSizing: "border-box",
//   },
//   summit: {
//     backgroundColor: "#f3b717",
//     borderRadius: 15,
//     cursor: "pointer",
//     fontFamily: "Roboto",
//     fontSize: 16,
//     fontWeight: "600",
//     lineHeight: "normal",
//     padding: 16,
//     textAlign: "center",
//     textDecoration: "none",
//     marginTop: 90,
//   },
//   link: {
//     textDecoration: "none",
//     color: "#1b1919",
//   },
//   userData: {
//     marginTop: 20,
//     backgroundColor: "#f0f0f0",
//     padding: 10,
//     borderRadius: 5,
//   },
// });

// export default LoginSignUp;

// LoginSignUp.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import axios from "axios";

const LoginSignUp = () => {
  const [name, setName] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    // Your login logic here
    navigation.navigate("Home"); // Navigate to Home screen after login
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.box}> */}
      <Text style={styles.header}>Login</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  // box: {
  //   flex: 1,
  //   backgroundColor: "#afb0ab",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   width: "92%",
  //   height: 80,
  //   borderWidth: 2,
  //   borderColor: "#ccc",
  //   borderRadius: 5,
  //   padding: 20,
  //   marginBottom: 20,
  // },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#f3b717",
    padding: 10,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
  },
});

export default LoginSignUp;
