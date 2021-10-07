import axios from "axios";
import { LOGIN_URL, OCP_API_SUBSCRIPTION_KEY } from "../constant";
export const loginToCatalina = async (email: string, password: string) => {
  try{
    const loginData = await axios.post(
      LOGIN_URL,
      JSON.stringify({
        email,
        password,
      }),
      {
        headers: {
          "Ocp-Apim-Subscription-Key": OCP_API_SUBSCRIPTION_KEY,
          "Ocp-Apim-Trace": "true",
          "Content-Type": "application/json",
        },
      }
    );
    console.log(loginData, 'in dataApi')
    return loginData;
  } catch(err){
    throw new Error('Unable to establish a login session.'); // here I'd like to send the error to the user instead
  }
}