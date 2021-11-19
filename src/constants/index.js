export const ctx = {
  url: "https://foodex-api.herokuapp.com/",
  baseUrl: "https://foodex-api.herokuapp.com/api/admin",
  // url: "http://localhost:8080/",
  // baseUrl: "http://localhost:8080/api/admin",
  normalizer: (str, chunk = 3) => {
    if (str === 0 || str === "0") {
      return str;
    }
    if (!str) {
      return "";
    }
    if (typeof str !== "string") {
      str = String(str);
    }

    //* Localization check
    if (str.indexOf(".") !== -1) {
      //* Seperate decimal and inregral parts
      let [decimalPart, integralPart] = str.split(".");

      //* Make it easy to append to the result
      let reverseDecimal = decimalPart.split("").reverse().join("");

      //* Result to store
      let result = "";
      for (let i = 0; i < reverseDecimal.length; i += chunk) {
        //* Append three digits
        result += reverseDecimal.slice(i, i + chunk);

        //* Append seperating space only if it is not last chunk
        if (i + chunk < reverseDecimal.length) result += " ";
      }

      //* The `.` has been removed so we add it
      return (
        result.split("").reverse().join("") + "." + integralPart.substring(0, 2)
      );
    } else {
      let reverseDecimal = str.split("").reverse().join("");

      //* Result to store
      let result = "";
      for (let i = 0; i < reverseDecimal.length; i += chunk) {
        //* Apped three digits
        result += reverseDecimal.slice(i, i + chunk);

        //* Append seperating space only if it is not last chunk
        if (i + chunk < reverseDecimal.length) result += " ";
      }

      return result.split("").reverse().join("");
    }
  },
};
