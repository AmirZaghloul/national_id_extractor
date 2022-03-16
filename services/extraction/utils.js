import { GOVERNORATES } from "./constants.js";

export const validDaysFormat = (national_id) => {
  const month = parseInt(extractMonth(national_id));
  const year = parseInt(extractYear(national_id));

  switch(parseInt(month)) {
    case 2:
      return year % 4 == 0 ? "(0[1-9]|(1|2)[0-9])" : "(0[1-9]|(1|2)[0-8])"; // Leap year every 4 years has 29 days otherwise 28
    case 4:
    case 6:
    case 9:
    case 11:
      return "(0[1-9]|(1|2)[0-9]|30)"; // 30 days months
    default:
      return "(0[1-9]|(1|2)[0-9]|3[0-1])"; // 31 days month
  }
};

export const extractGovernorate = (national_id) => {
  return GOVERNORATES[national_id.substring(7,9)];
};

export const extractBirthDate = (national_id) => {
  return `${extractDay(national_id)}/${extractMonth(national_id)}/${yearPrefix(national_id)}${extractYear(national_id)}`
}

export const extractBirthOrder = (national_id) => {
  return national_id.substring(9,13);
}

export const extractGender = (national_id) => {
  return national_id[12] % 2 == 0 ? 'Female' : 'Male'; // Even digit is females and odd is male
}

const extractDay = (national_id) => {
  return national_id.substring(5,7);
}

const extractMonth = (national_id) => {
  return national_id.substring(3,5);
}

const extractYear = (national_id) => {
  return national_id.substring(1,3);
}

const yearPrefix = (national_id) => {
  return national_id[0] == "2" ? "19" : "20"
}
