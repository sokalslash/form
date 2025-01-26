const ADDRESS_FOR_SEND_DATA = "https://httpbin.org/post";
import { errorResponseServer, successResponseServer } from "./mock-data";

const sendData = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch(ADDRESS_FOR_SEND_DATA, {
      method: "POST",
      body,
    });

    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    // onSuccess(data);
    onSuccess(successResponseServer);
  } catch (err) {
    alert(`При отправке данных на сервер произошла ошибка ${err}`);
  }
};

export { sendData };
