const errorResponseServer = {
  status: "error",
  fields: {
    name: "сообщение об ошибке",
  },
};

const successResponseServer = {
  status: "success",
  msg: "Ваша заявка успешно отправлена",
};

export { errorResponseServer, successResponseServer };
