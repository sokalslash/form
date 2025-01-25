const ADDRESS_FOR_SEND_DATA = "https://httpbin.org/post";

const sendData = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch(ADDRESS_FOR_SEND_DATA, {
      method: "POST",
      body,
    });

    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    const json = await response.json();
    onSuccess(json);
  } catch (err) {
    onFail(`При отправке данных на сервер произошла ошибка ${err}`);
  }
};

export { sendData };
