import "whatwg-fetch";
import config from "./config";
import axios from "axios";
import React from "react";
import { AsyncStorage } from "react-native";

export const saveData = (data, keyName, navigation, route) => {
  try {
    AsyncStorage.setItem(keyName, data).then(data => {
      if (navigation && route) {
         navigation.navigate(route);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const retrieveData = async (keyName) => {
  try {
    await AsyncStorage.getItem(keyName, (err, result) => {
      if (result) {
        return result;
      }
    });
   } catch (error) {
      console.log(error);
   }
};

export const callApi = (url, data, method) => {
  console.log("Calling Axios API... " + url);
  return new Promise(function(resolve, reject) {
    if (method === "PATCH") {
      axios
        .patch(`${config.fetchUrl}${url}`, data)
        .then(response => {
          console.log(response.data);
          resolve(response.data);
        })
        .catch(err => {
          console.log(err.message);
          reject(err);
        });
    }
    if (method === "POST") {
      axios
        .post(`${config.fetchUrl}${url}`, data)
        .then(response => {
          console.log(response.data);
          resolve(response.data);
        })
        .catch(err => {
          console.log(err.message);
          reject(err);
        });
    } else {
      axios
        .get(`${config.fetchUrl}${url}`)
        .then(response => {
          console.log(response.data);
          resolve(response.data);})
        .catch(err => {
          console.log(err);
          reject(err);});
    }
  });
};

export const States = [
  "Abia",
  "Adamawa",
  "Anambra",
  "Akwa Ibom",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Enugu",
  "Edo",
  "Ekiti",
  "FCT",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara"
];

export const abujaDisease = [
  {
    "Disease": "Monkeypox",
    "Epidemilogical Week": 40,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 56,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Monkeypox",
    "Epidemilogical Week": 40,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 57,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Monkeypox",
    "Epidemilogical Week": 40,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 58,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Monkeypox",
    "Epidemilogical Week": 40,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 59,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Monkeypox",
    "Epidemilogical Week": 41,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 60,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Monkeypox",
    "Epidemilogical Week": 39,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 61,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Monkeypox",
    "Epidemilogical Week": 44,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 103,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Monkeypox",
    "Epidemilogical Week": 45,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 104,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 4,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 167,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 9,
    "Lga": "Gwagwalada",
    "Sex": "Male",
    "Sn": 330,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 12,
    "Lga": "Gwagwalada",
    "Sex": "Female",
    "Sn": 331,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 9,
    "Lga": "Gwagwalada",
    "Sex": "Female",
    "Sn": 332,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 12,
    "Lga": "Gwagwalada",
    "Sex": "Male",
    "Sn": 333,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 8,
    "Lga": "Gwagwalada",
    "Sex": "Male",
    "Sn": 334,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 9,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 335,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 13,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 336,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 12,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 337,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 12,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 338,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 12,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 339,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 13,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 340,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 13,
    "Lga": "Abaji",
    "Sex": "Female",
    "Sn": 341,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 12,
    "Lga": "Abaji",
    "Sex": "Female",
    "Sn": 342,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 10,
    "Lga": "Bwari",
    "Sex": "Male",
    "Sn": 343,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 12,
    "Lga": "Bwari",
    "Sex": "Female",
    "Sn": 344,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 10,
    "Lga": "Bwari",
    "Sex": "Male",
    "Sn": 345,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 1,
    "Lga": "Bwari",
    "Sex": "Male",
    "Sn": 346,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 11,
    "Lga": "Bwari",
    "Sex": "Male",
    "Sn": 346,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 3,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 347,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 12,
    "Lga": "Bwari",
    "Sex": "Female",
    "Sn": 347,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 4,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 348,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 12,
    "Lga": "Bwari",
    "Sex": "Female",
    "Sn": 348,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 4,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 349,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 13,
    "Lga": "Kuje",
    "Sex": "Female",
    "Sn": 349,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 4,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 350,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 12,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 350,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 4,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 351,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 13,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 351,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 3,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 352,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 13,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 352,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 5,
    "Lga": "Bwari",
    "Sex": "Female",
    "Sn": 353,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 14,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 353,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 4,
    "Lga": "Abaji",
    "Sex": "Female",
    "Sn": 354,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 14,
    "Lga": "Abaji",
    "Sex": "Male",
    "Sn": 354,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 3,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 355,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 13,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 355,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 4,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 356,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 8,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 356,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 5,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 357,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 14,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 357,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 5,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 358,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 14,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 358,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 5,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 359,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 14,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 359,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 5,
    "Lga": "Gwagwalada",
    "Sex": "Male",
    "Sn": 360,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 14,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 360,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 5,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 361,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 13,
    "Lga": "Kuje",
    "Sex": "Female",
    "Sn": 361,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 5,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 362,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 16,
    "Lga": "Kuje",
    "Sex": "Male",
    "Sn": 362,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 6,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 363,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 15,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 363,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 6,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 364,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 16,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 364,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 6,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 365,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 18,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 365,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 7,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 366,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 15,
    "Lga": "Abaji",
    "Sex": "Male",
    "Sn": 366,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 7,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 367,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 19,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 367,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 5,
    "Lga": "Kuje",
    "Sex": "Female",
    "Sn": 368,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "CSM",
    "Epidemilogical Week": 19,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 368,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 7,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 369,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 7,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 370,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 7,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 371,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 6,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 372,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 7,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 373,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 7,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 374,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 7,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 375,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "Lassa Fever",
    "Epidemilogical Week": 7,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 376,
    "State": "Fct, Abuja",
    "Year": "1/1/2016"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 13,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 172672,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 22,
    "Lga": "Kuje",
    "Sex": "Male",
    "Sn": 172684,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 11,
    "Lga": "Kwali",
    "Sex": "Female",
    "Sn": 172688,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 12,
    "Lga": "Kwali",
    "Sex": "Male",
    "Sn": 172689,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 12,
    "Lga": "Kwali",
    "Sex": "Male",
    "Sn": 172690,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 12,
    "Lga": "Kwali",
    "Sex": "Female",
    "Sn": 172691,
    "State": "Fct, Abuja",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 12,
    "Lga": "Bwari",
    "Sex": "Male",
    "Sn": 172842,
    "State": "Fct, Abuja",
    "Year": "1/1/2013"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 10,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 172855,
    "State": "Fct, Abuja",
    "Year": "1/1/2013"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 12,
    "Lga": "Bwari",
    "Sex": "Male",
    "Sn": 172880,
    "State": "Fct, Abuja",
    "Year": "1/1/2013"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 11,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 172883,
    "State": "Fct, Abuja",
    "Year": "1/1/2013"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 11,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 172887,
    "State": "Fct, Abuja",
    "Year": "1/1/2013"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 11,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 172889,
    "State": "Fct, Abuja",
    "Year": "1/1/2013"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 11,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 172890,
    "State": "Fct, Abuja",
    "Year": "1/1/2013"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 12,
    "Lga": "Bwari",
    "Sex": "Female",
    "Sn": 172894,
    "State": "Fct, Abuja",
    "Year": "1/1/2013"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 12,
    "Lga": "Bwari",
    "Sex": "Male",
    "Sn": 172901,
    "State": "Fct, Abuja",
    "Year": "1/1/2013"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 11,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 172928,
    "State": "Fct, Abuja",
    "Year": "1/1/2013"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 10,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 172949,
    "State": "Fct, Abuja",
    "Year": "1/1/2013"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 11,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 173022,
    "State": "Fct, Abuja",
    "Year": "1/1/2013"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 11,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 173024,
    "State": "Fct, Abuja",
    "Year": "1/1/2013"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 31,
    "Lga": "Gwagwalada",
    "Sex": "Male",
    "Sn": 173267,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 4,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 173273,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 20,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 173277,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 8,
    "Lga": "Kwali",
    "Sex": "Male",
    "Sn": 173282,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 5,
    "Lga": "Gwagwalada",
    "Sex": "Male",
    "Sn": 173292,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 2,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 173333,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 7,
    "Lga": "Kuje",
    "Sex": "Male",
    "Sn": 173336,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 5,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 173338,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 5,
    "Lga": "Gwagwalada",
    "Sex": "Male",
    "Sn": 173361,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 14,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 173496,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 11,
    "Lga": "Gwagwalada",
    "Sex": "Male",
    "Sn": 173505,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 9,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 173521,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 10,
    "Lga": "Gwagwalada",
    "Sex": "Female",
    "Sn": 173525,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 23,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 173634,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 4,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 173670,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 11,
    "Lga": "Abaji",
    "Sex": "Male",
    "Sn": 173715,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 9,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 173723,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 1,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 173725,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 14,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 173821,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 9,
    "Lga": "Bwari",
    "Sex": "Male",
    "Sn": 173828,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 4,
    "Lga": "Kwali",
    "Sex": "Male",
    "Sn": 173875,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 1,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 173923,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 5,
    "Lga": "Gwagwalada",
    "Sex": "Male",
    "Sn": 173933,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 8,
    "Lga": "Gwagwalada",
    "Sex": "Male",
    "Sn": 173942,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 23,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 173945,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 25,
    "Lga": "Bwari",
    "Sex": "Female",
    "Sn": 173967,
    "State": "Fct, Abuja",
    "Year": "1/1/2009"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 5,
    "Lga": "Gwagwalada",
    "Sex": "Male",
    "Sn": 174027,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 8,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 174042,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 12,
    "Lga": "Bwari",
    "Sex": "Male",
    "Sn": 174111,
    "State": "Fct, Abuja",
    "Year": "1/1/2009"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 2,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 174130,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 24,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 174593,
    "State": "Fct, Abuja",
    "Year": "1/1/2009"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 44,
    "Lga": "Abaji",
    "Sex": "Female",
    "Sn": 174789,
    "State": "Fct, Abuja",
    "Year": "1/1/2009"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 22,
    "Lga": "Gwagwalada",
    "Sex": "Male",
    "Sn": 174916,
    "State": "Fct, Abuja",
    "Year": "1/1/2009"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 47,
    "Lga": "Kwali",
    "Sex": "Female",
    "Sn": 175088,
    "State": "Fct, Abuja",
    "Year": "1/1/2009"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 15,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 175190,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 7,
    "Lga": "Abaji",
    "Sex": "Male",
    "Sn": 176053,
    "State": "Fct, Abuja",
    "Year": "1/1/2009"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 9,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 176849,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 9,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 176997,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 10,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 177252,
    "State": "Fct, Abuja",
    "Year": "1/1/2008"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 51,
    "Lga": "Gwagwalada",
    "Sex": "Male",
    "Sn": 177469,
    "State": "Fct, Abuja",
    "Year": "1/1/2009"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 6,
    "Lga": "Abaji",
    "Sex": "Male",
    "Sn": 177665,
    "State": "Fct, Abuja",
    "Year": "1/1/2009"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 46,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 177728,
    "State": "Fct, Abuja",
    "Year": "1/1/2007"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 49,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 178197,
    "State": "Fct, Abuja",
    "Year": "1/1/2007"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 36,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 178396,
    "State": "Fct, Abuja",
    "Year": "1/1/2007"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 48,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 178528,
    "State": "Fct, Abuja",
    "Year": "1/1/2007"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 49,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 180073,
    "State": "Fct, Abuja",
    "Year": "1/1/2007"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 49,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 180425,
    "State": "Fct, Abuja",
    "Year": "1/1/2007"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 35,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 181505,
    "State": "Fct, Abuja",
    "Year": "1/1/2007"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 49,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 181517,
    "State": "Fct, Abuja",
    "Year": "1/1/2007"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 49,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 183145,
    "State": "Fct, Abuja",
    "Year": "1/1/2007"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 49,
    "Lga": "Municipal Area Council",
    "Sex": "Female",
    "Sn": 183156,
    "State": "Fct, Abuja",
    "Year": "1/1/2007"
  },
  {
    "Disease": "Measles",
    "Epidemilogical Week": 49,
    "Lga": "Municipal Area Council",
    "Sex": "Male",
    "Sn": 184485,
    "State": "Fct, Abuja",
    "Year": "1/1/2007"
  }
];
