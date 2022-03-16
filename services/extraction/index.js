import { validDaysFormat, extractGovernorate, extractBirthDate, extractBirthOrder, extractGender } from "./utils.js"

export const extractData = (national_id) => {
  return {
    birth_date: extractBirthDate(national_id),
    governorate: extractGovernorate(national_id),
    birth_order: extractBirthOrder(national_id),
    gender: extractGender(national_id),
  }
};


export const isValidNationalId = (national_id) => {
  if(national_id.length != 14) return false;

  const birth_month_format = "(0[1-9]|1[0-2])";
  const valid_days_format = validDaysFormat(national_id);
  const possible_governorates_format = "(01|02|03|04|11|12|13|14|15|16|17|18|19|21|22|23|24|25|26|27|28|29|31|32|33|34|35|88)";
  const full_format = `(2|3)([0-9][0-9])${birth_month_format}${valid_days_format}${possible_governorates_format}[0-9][0-9][0-9][0-9][0-9]`;
  const re = new RegExp(full_format);
  return re.test(national_id);
};
