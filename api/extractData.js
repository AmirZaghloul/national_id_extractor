import { isValidNationalId, extractData } from "../services/extraction/index.js";

export default (req, res, next) => {
  const national_id = req.params.national_id;
  if(isValidNationalId(national_id)) {
    const result = extractData(national_id);
    res.status(200).json({ data: result });
  } else {
    res.status(422).json({ errors: ["Invalid national ID"] });
  }

};
 