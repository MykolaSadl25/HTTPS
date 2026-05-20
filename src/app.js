import {
  alert,
  notice,
  info,
  success,
  error,
  defaultModules,
} from "@pnotify/core/dist/PNotify.js";
import * as PNotifyMobile from "@pnotify/mobile/dist/PNotifyMobile.js";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/PNotify.css";
defaultModules.set(PNotifyMobile, {});
import fetchCountries from "./js/fetchCountries";
import createItems from "./js/createItems";
import debounce from "lodash.debounce";
import createCountryList from "./js/createCountryList";

let searchQuery = "";

const countryInputRef = document.querySelector(".enterCountry");
const countryInfoBoxRef = document.querySelector(".countryInfo");

countryInputRef.addEventListener(
  "input",
  debounce((e) => {
    searchQuery = e.target.value;
    fetchCountries(searchQuery)
      .then((res) => {
        if (res.length > 10) {
          error({
            title: "Request is not clear",
            text: "Too many matches found. Please enter a more specific query",
          });
        } else if (res.length > 2 && res.length < 10) {
          countryInfoBoxRef.innerHTML = createCountryList(res);
        } else {
          countryInfoBoxRef.innerHTML = createItems(res);
        }
      })
      .catch((error) => error);
  }, 500),
);
