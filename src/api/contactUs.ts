import axios, { AxiosError } from "axios";
import {
  ApiResult,
  ContactUsRequestDto,
  ResponseDto,
} from "./ApiResponseInterface";

export const contactUs = async (
  payload: ContactUsRequestDto,
): Promise<ApiResult<string>> => {
  try {
    const url = "https://karya-sync-api.yashbhatnagar.app/api/contactUs"; // Replace with your actual API endpoint
    const response = await axios.post<ResponseDto<string>>(url, payload);
    debugger;
    if (!response.data.success) {
      return {
        data: null,
        error: response.data.message || "Unexpected Error",
      };
    }

    return { data: response.data.data, error: null };
  } catch (error: unknown) {
    const err = error as AxiosError<any>;
    console.error("Error updating user address:", err);

    const errorMessage = err?.response?.data?.message || "unexpectedError";

    return {
      data: null,
      error: errorMessage,
    };
  }
};
