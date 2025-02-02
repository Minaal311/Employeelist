import { Colors } from "@/styles/Colors";
import { StyleSheet, View, Image, Text, Platform } from "react-native";

interface Employee {
  uuid: string;
  full_name: string;
  phone_number: string;
  email_address: string;
  biography: string;
  photo_url_small: string;
  photo_url_large: string;
  team: string;
  employee_type: string;
}

interface CardProps {
  employee: Employee;
}

const CardComponent: React.FC<CardProps> = ({ employee }) => {
  return (
    <View style={styles.card}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          height: "100%",
        }}
      >
        <Image
          source={{ uri: employee?.photo_url_small }}
          style={styles.image}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{employee?.full_name}</Text>
        <Text style={styles.email}>{employee?.email_address}</Text>
        <Text style={styles.email}>Phone : {employee?.phone_number}</Text>
        <Text style={styles.team}>Team : {employee?.team}</Text>
        <Text style={styles.empType}>
          Employee type: {employee?.employee_type}
        </Text>
        <View>
          <Text style={styles.bioText}>Bio: {employee?.biography}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#A8C6D459",
    boxShadow: "0 3 3 0 rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 8 },
    //shadowOffset: { width: 0, height: Platform.OS == 'ios' ? moderateScaleVertical(2) : moderateScaleVertical(12.41) },
    shadowOpacity: Platform.OS == "ios" ? 0.5 : 0.19,
    shadowRadius: Platform.OS == "ios" ? 4 : 21.27,
    elevation: 10,
    marginHorizontal: 20,
    // backgroundColor: '#f5f5f5',
    backgroundColor: Colors.lightBlueTransparent,
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
    // width:200
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    fontSize: 12,
    color: "gray",
  },
  team: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 4,
  },
  empType: {
    fontSize: 14,
    fontWeight: "500",
  },
  bioText: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 8,
  },
});
