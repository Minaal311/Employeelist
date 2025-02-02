import { Image, Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { useEffect, useState } from "react";
import axios from "axios";
import { styles } from "./styles";
import CardComponent from "@/Components/Card";
import {
  isValidEmployee,
  showValidationError,
} from "@/helperFunctions/validations";
import NoDataComponent from "@/Components/NoDataComponent";

const API_URL = "https://s3.amazonaws.com/sq-mobile-interview/employees.json";
const MALFORMED_URL =
  "https://s3.amazonaws.com/sq-mobile-interview/employees_malformed.json";
const EMPTY_URL =
  "https://s3.amazonaws.com/sq-mobile-interview/employees_empty.json";

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

export default function Index() {
  const [data, setData] = useState<Employee[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      const isValidList = response?.data?.employees.every(isValidEmployee);
      if (isValidList) {
        setData(response?.data?.employees);
      } else {
        showValidationError(
          "Invalid employee data detected, discarding the entire list."
        );
        setData([]); // Discard the list
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const renderItem = ({ item }: { item: Employee }) => {
    return <CardComponent employee={item} />;
  };

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 20,
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <Text style={styles.heading}>Employee List</Text>
      <FlashList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => `item-${index}`}
        ListEmptyComponent={() => {
          return <NoDataComponent />;
        }}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <View style={{ marginBottom: 42 }}></View>}
        // estimatedItemSize={300}
      />
    </View>
  );
}
