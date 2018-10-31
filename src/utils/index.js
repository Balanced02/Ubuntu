import "whatwg-fetch";
import config from "./config";
import axios from "axios";
import React from "react";
import { AsyncStorage } from "react-native";

export const saveData = (data, keyName, navigation, route, type) => {
  try {
    AsyncStorage.setItem(keyName, data).then(data => {
      if (navigation && route) {
        if (type === "new") {
         navigation.navigate(route, { type });
        } else {
          navigation.navigate(route);
        }
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

export const lagosDisease = [
  {
    "Disease": "Monkeypox",
    "Epidemilogical Week": 40,
    "Lga": "Alimosho",
    "Sex": "Male",
    "Sn": 20,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Monkeypox",
    "Epidemilogical Week": 41,
    "Lga": "Lagos Island",
    "Sex": "Male",
    "Sn": 21,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Monkeypox",
    "Epidemilogical Week": 41,
    "Lga": "Badagry",
    "Sex": "Female",
    "Sn": 22,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Monkeypox",
    "Epidemilogical Week": 40,
    "Lga": "Eti Osa",
    "Sex": "Female",
    "Sn": 34,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Monkeypox",
    "Epidemilogical Week": 41,
    "Lga": "Lagos Island",
    "Sex": "Male",
    "Sn": 83,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Monkeypox",
    "Epidemilogical Week": 41,
    "Lga": "Shomolu",
    "Sex": "Male",
    "Sn": 84,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Monkeypox",
    "Epidemilogical Week": 41,
    "Lga": "Lagos Island",
    "Sex": "Female",
    "Sn": 85,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Monkeypox",
    "Epidemilogical Week": 42,
    "Lga": "Lagos Island",
    "Sex": "Male",
    "Sn": 86,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Monkeypox",
    "Epidemilogical Week": 42,
    "Lga": "Lagos Island",
    "Sex": "Male",
    "Sn": 87,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Monkeypox",
    "Epidemilogical Week": 41,
    "Lga": "Lagos Island",
    "Sex": "Male",
    "Sn": 90,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Monkeypox",
    "Epidemilogical Week": 40,
    "Lga": "Ojo",
    "Sex": "Male",
    "Sn": 113,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Monkeypox",
    "Epidemilogical Week": 40,
    "Lga": "Eti Osa",
    "Sex": "Female",
    "Sn": 115,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Monkeypox",
    "Epidemilogical Week": 41,
    "Lga": "Ifako/Ijaiye",
    "Sex": "Male",
    "Sn": 126,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Monkeypox",
    "Epidemilogical Week": 40,
    "Lga": "Ifako/Ijaiye",
    "Sex": "Male",
    "Sn": 129,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Monkeypox",
    "Epidemilogical Week": 41,
    "Lga": "Oshodi/Isolo",
    "Sex": "Male",
    "Sn": 130,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Monkeypox",
    "Epidemilogical Week": 41,
    "Lga": "Agege",
    "Sex": "Male",
    "Sn": 150,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Monkeypox",
    "Epidemilogical Week": 52,
    "Lga": "Ojo",
    "Sex": "Female",
    "Sn": 180,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 26,
    "Lga": "Surulere",
    "Sex": "Female",
    "Sn": 2072,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 27,
    "Lga": "Surulere",
    "Sex": "Male",
    "Sn": 2073,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 27,
    "Lga": "Surulere",
    "Sex": "Female",
    "Sn": 2074,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 26,
    "Lga": "Surulere",
    "Sex": "Male",
    "Sn": 2075,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 26,
    "Lga": "Surulere",
    "Sex": "Male",
    "Sn": 2076,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 27,
    "Lga": "Surulere",
    "Sex": "Female",
    "Sn": 2077,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 26,
    "Lga": "Surulere",
    "Sex": "Female",
    "Sn": 2078,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 26,
    "Lga": "Surulere",
    "Sex": "Female",
    "Sn": 2079,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 26,
    "Lga": "Surulere",
    "Sex": "Female",
    "Sn": 2080,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 26,
    "Lga": "Surulere",
    "Sex": "Female",
    "Sn": 2081,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 26,
    "Lga": "Surulere",
    "Sex": "Female",
    "Sn": 2082,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 26,
    "Lga": "Surulere",
    "Sex": "Female",
    "Sn": 2083,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 26,
    "Lga": "Surulere",
    "Sex": "Female",
    "Sn": 2084,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 28,
    "Lga": "Mushin",
    "Sex": "Female",
    "Sn": 2085,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 28,
    "Lga": "Surulere",
    "Sex": "Female",
    "Sn": 2086,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 29,
    "Lga": "Surulere",
    "Sex": "Female",
    "Sn": 2087,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 29,
    "Lga": "Ikorodu",
    "Sex": "Male",
    "Sn": 2088,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 29,
    "Lga": "Surulere",
    "Sex": "Male",
    "Sn": 2089,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 29,
    "Lga": "Surulere",
    "Sex": "Male",
    "Sn": 2090,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 29,
    "Lga": "Surulere",
    "Sex": "Male",
    "Sn": 2091,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 29,
    "Lga": "Surulere",
    "Sex": "Male",
    "Sn": 2092,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 29,
    "Lga": "Surulere",
    "Sex": "Male",
    "Sn": 2093,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 29,
    "Lga": "Surulere",
    "Sex": "Male",
    "Sn": 2094,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 30,
    "Lga": "Mushin",
    "Sex": "Male",
    "Sn": 2095,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 30,
    "Lga": "Surulere",
    "Sex": "Male",
    "Sn": 2096,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 30,
    "Lga": "Surulere",
    "Sex": "Male",
    "Sn": 2097,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 30,
    "Lga": "Surulere",
    "Sex": "Female",
    "Sn": 2098,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 30,
    "Lga": "Surulere",
    "Sex": "Male",
    "Sn": 2099,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 30,
    "Lga": "Surulere",
    "Sex": "Male",
    "Sn": 2100,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 30,
    "Lga": "Mushin",
    "Sex": "Female",
    "Sn": 2101,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 30,
    "Lga": "Mushin",
    "Sex": "Female",
    "Sn": 2102,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 29,
    "Lga": "Shomolu",
    "Sex": "Male",
    "Sn": 2103,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 29,
    "Lga": "Shomolu",
    "Sex": "Male",
    "Sn": 2104,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 29,
    "Lga": "Shomolu",
    "Sex": "Male",
    "Sn": 2105,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 29,
    "Lga": "Shomolu",
    "Sex": "Male",
    "Sn": 2106,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 29,
    "Lga": "Shomolu",
    "Sex": "Female",
    "Sn": 2107,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 29,
    "Lga": "Shomolu",
    "Sex": "Female",
    "Sn": 2108,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 29,
    "Lga": "Shomolu",
    "Sex": "Male",
    "Sn": 2109,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 30,
    "Lga": "Lagos Mainland",
    "Sex": "Male",
    "Sn": 2110,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 28,
    "Lga": "Oshodi/Isolo",
    "Sex": "Female",
    "Sn": 2111,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 28,
    "Lga": "Oshodi/Isolo",
    "Sex": "Male",
    "Sn": 2112,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 33,
    "Lga": "Apapa",
    "Sex": "Male",
    "Sn": 2113,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 33,
    "Lga": "Apapa",
    "Sex": "Male",
    "Sn": 2114,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 33,
    "Lga": "Apapa",
    "Sex": "Male",
    "Sn": 2115,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 33,
    "Lga": "Apapa",
    "Sex": "Female",
    "Sn": 2116,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 33,
    "Lga": "Apapa",
    "Sex": "Female",
    "Sn": 2117,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 33,
    "Lga": "Apapa",
    "Sex": "Male",
    "Sn": 2118,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 33,
    "Lga": "Apapa",
    "Sex": "Female",
    "Sn": 2119,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 33,
    "Lga": "Apapa",
    "Sex": "Male",
    "Sn": 2120,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 33,
    "Lga": "Apapa",
    "Sex": "Male",
    "Sn": 2121,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 33,
    "Lga": "Apapa",
    "Sex": "Male",
    "Sn": 2122,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 33,
    "Lga": "Apapa",
    "Sex": "Male",
    "Sn": 2123,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 33,
    "Lga": "Apapa",
    "Sex": "Male",
    "Sn": 2124,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 33,
    "Lga": "Apapa",
    "Sex": "Male",
    "Sn": 2125,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 33,
    "Lga": "Apapa",
    "Sex": "Male",
    "Sn": 2126,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 33,
    "Lga": "Apapa",
    "Sex": "Male",
    "Sn": 2127,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 33,
    "Lga": "Apapa",
    "Sex": "Male",
    "Sn": 2128,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 33,
    "Lga": "Apapa",
    "Sex": "Male",
    "Sn": 2129,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 32,
    "Lga": "Lagos Island",
    "Sex": "Male",
    "Sn": 2130,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 32,
    "Lga": "Lagos Island",
    "Sex": "Male",
    "Sn": 2131,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 31,
    "Lga": "Lagos Island",
    "Sex": "Female",
    "Sn": 2132,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 31,
    "Lga": "Oshodi/Isolo",
    "Sex": "Male",
    "Sn": 2133,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 31,
    "Lga": "Oshodi/Isolo",
    "Sex": "Female",
    "Sn": 2134,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 30,
    "Lga": "Shomolu",
    "Sex": "Male",
    "Sn": 2135,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 31,
    "Lga": "Shomolu",
    "Sex": "Male",
    "Sn": 2136,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 31,
    "Lga": "Shomolu",
    "Sex": "Male",
    "Sn": 2137,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 31,
    "Lga": "Shomolu",
    "Sex": "Male",
    "Sn": 2138,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 31,
    "Lga": "Shomolu",
    "Sex": "Male",
    "Sn": 2139,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 31,
    "Lga": "Shomolu",
    "Sex": "Male",
    "Sn": 2140,
    "State": "Lagos",
    "Year": "1/1/2017"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 31,
    "Lga": "Shomolu",
    "Sex": "Male",
    "Sn": 2141,
    "State": "Lagos",
    "Year": "1/1/2017"
  }
];

export const kanoDisease = [
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Bagwai",
    "Sex": "Male",
    "Sn": 10977,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Dala",
    "Sex": "Male",
    "Sn": 11037,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Dala",
    "Sex": "Female",
    "Sn": 11038,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Dala",
    "Sex": "Female",
    "Sn": 11039,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Dala",
    "Sex": "Male",
    "Sn": 11040,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Dala",
    "Sex": "Female",
    "Sn": 11041,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Dala",
    "Sex": "Male",
    "Sn": 11042,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Dala",
    "Sex": "Female",
    "Sn": 11043,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Dala",
    "Sex": "Female",
    "Sn": 11044,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Dala",
    "Sex": "Female",
    "Sn": 11045,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Dala",
    "Sex": "Male",
    "Sn": 11046,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 2,
    "Lga": "Dala",
    "Sex": "Female",
    "Sn": 11047,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 2,
    "Lga": "Dala",
    "Sex": "Male",
    "Sn": 11048,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Dawakin Kudu",
    "Sex": "Female",
    "Sn": 11061,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Dawakin Kudu",
    "Sex": "Female",
    "Sn": 11062,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Dawakin Kudu",
    "Sex": "Female",
    "Sn": 11063,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Fagge",
    "Sex": "Female",
    "Sn": 11112,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Fagge",
    "Sex": "Male",
    "Sn": 11113,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Fagge",
    "Sex": "Female",
    "Sn": 11114,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Fagge",
    "Sex": "Female",
    "Sn": 11115,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Fagge",
    "Sex": "Male",
    "Sn": 11116,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Fagge",
    "Sex": "Male",
    "Sn": 11117,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Fagge",
    "Sex": "Female",
    "Sn": 11118,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Fagge",
    "Sex": "Male",
    "Sn": 11119,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Fagge",
    "Sex": "Male",
    "Sn": 11120,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Fagge",
    "Sex": "Female",
    "Sn": 11121,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 2,
    "Lga": "Fagge",
    "Sex": "Male",
    "Sn": 11122,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Gwale",
    "Sex": "Female",
    "Sn": 11183,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Gwale",
    "Sex": "Male",
    "Sn": 11184,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Gwale",
    "Sex": "Female",
    "Sn": 11185,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Gwale",
    "Sex": "Male",
    "Sn": 11186,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Gwale",
    "Sex": "Male",
    "Sn": 11187,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Gwale",
    "Sex": "Male",
    "Sn": 11188,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Gwale",
    "Sex": "Female",
    "Sn": 11189,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Gwale",
    "Sex": "Male",
    "Sn": 11190,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Gwale",
    "Sex": "Female",
    "Sn": 11191,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 2,
    "Lga": "Gwale",
    "Sex": "Male",
    "Sn": 11192,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Gwale",
    "Sex": "Male",
    "Sn": 11193,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Gwale",
    "Sex": "Male",
    "Sn": 11194,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Gwale",
    "Sex": "Female",
    "Sn": 11195,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Gwale",
    "Sex": "Male",
    "Sn": 11196,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Kano Municipal",
    "Sex": "Male",
    "Sn": 11276,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Kano Municipal",
    "Sex": "Male",
    "Sn": 11277,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Kano Municipal",
    "Sex": "Male",
    "Sn": 11278,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Kano Municipal",
    "Sex": "Male",
    "Sn": 11279,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Kano Municipal",
    "Sex": "Male",
    "Sn": 11280,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Kano Municipal",
    "Sex": "Male",
    "Sn": 11281,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Kano Municipal",
    "Sex": "Male",
    "Sn": 11282,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 2,
    "Lga": "Kano Municipal",
    "Sex": "Female",
    "Sn": 11283,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 2,
    "Lga": "Kano Municipal",
    "Sex": "Male",
    "Sn": 11284,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 2,
    "Lga": "Kano Municipal",
    "Sex": "Male",
    "Sn": 11285,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 2,
    "Lga": "Kano Municipal",
    "Sex": "Female",
    "Sn": 11286,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 2,
    "Lga": "Kano Municipal",
    "Sex": "Female",
    "Sn": 11287,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Kura",
    "Sex": "Female",
    "Sn": 11288,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Nassarawa",
    "Sex": "Female",
    "Sn": 11398,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Nassarawa",
    "Sex": "Female",
    "Sn": 11399,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Nassarawa",
    "Sex": "Female",
    "Sn": 11400,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Nassarawa",
    "Sex": "Male",
    "Sn": 11401,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Tarauni",
    "Sex": "Female",
    "Sn": 11418,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Tarauni",
    "Sex": "Male",
    "Sn": 11419,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Tarauni",
    "Sex": "Female",
    "Sn": 11420,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Ungogo",
    "Sex": "Female",
    "Sn": 11499,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Ungogo",
    "Sex": "Male",
    "Sn": 11500,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Ungogo",
    "Sex": "Male",
    "Sn": 11501,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Ungogo",
    "Sex": "Female",
    "Sn": 11502,
    "State": "Kano",
    "Year": "1/1/2018"
  },
  {
    "Disease": "Cholera",
    "Epidemilogical Week": 1,
    "Lga": "Ungogo",
    "Sex": "Male",
    "Sn": 11503,
    "State": "Kano",
    "Year": "1/1/2018"
  }
];
