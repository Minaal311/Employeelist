import { showMessage } from "react-native-flash-message";
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

type MessageFunction = (message: string | any) => void;

export const isValidEmployee = (employee: Employee): boolean => {
  return (
    !!employee.uuid &&
    !!employee.full_name &&
    !!employee.phone_number &&
    !!employee.email_address &&
    !!employee.photo_url_small &&
    !!employee.photo_url_large &&
    !!employee.team &&
    !!employee.employee_type
  );
};

export const showValidationError = (message: string | any, duration = 2500) => {
  console.log(message, "IUJEHIWJEI");

  showMessage({
    type: "danger",
    // icon: "danger",
    floating: true,
    style: { backgroundColor: "#083043" },
    titleStyle: { color: "white" },
    message: String(message),
    duration,
  });
};
