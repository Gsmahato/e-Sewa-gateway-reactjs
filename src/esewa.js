import { useEffect } from "react";

const Esewa = () => {
  useEffect(() => {
    const generateRandomPID = () => {
      const randomNumber = Math.floor(Math.random() * 90000) + 10000; // Generate a random number between 10000 and 99999
      return randomNumber.toString();
    };

    const path = "https://uat.esewa.com.np/epay/main";
    const params = {
      amt: 100,
      psc: 0,
      pdc: 0,
      txAmt: 1,
      tAmt: 101,
      pid: generateRandomPID(), // Generate a random 5-digit number for the pid parameter
      scd: "EPAYTEST",
      su: "http://localhost:3000/success",
      fu: "http://localhost:3000",
    };

    const post = (path, params) => {
      const form = document.createElement("form");
      form.setAttribute("method", "POST");
      form.setAttribute("action", path);

      for (const key in params) {
        const hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", key);
        hiddenField.setAttribute("value", params[key]);
        form.appendChild(hiddenField);
      }

      document.body.appendChild(form);
      form.submit();
    };

    post(path, params);
  }, []);

  return null;
};

export default Esewa;
