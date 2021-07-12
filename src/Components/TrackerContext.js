import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import config from "../config";
const TrackerContext = React.createContext();

export function useTracker() {
  return useContext(TrackerContext);
}

export default function TrackerProvider({ children }) {
  const [details, setDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const getIP = async () => {
    const getIpUrl = `https://api.ipify.org`;
    const response = await axios.get(getIpUrl);
    return response.data;
  };
  const setInitialDetails = async () => {
    const ip = await getIP();
    trackAddress(ip);
  };
  useEffect(() => {
    setInitialDetails();
  }, []);
  const trackAddress = async (ip) => {
    setIsLoading(true);
    let isFetched = true;
    const url = getRequestURL(ip);
    try {
      const response = await axios.get(url);
      const data = response.data;
      const { city, country, geonameId, timezone, lat, lng } = data.location;

      const details = {
        city,
        country,
        geonameId,
        timezone,
        isp: data.isp,
        ip: data.ip,
        position: [lat, lng],
      };
      setDetails(details);
    } catch (error) {
      isFetched = false;
    }

    setIsLoading(false);
    console.log(isFetched);
    return isFetched;
  };

  const getRequestURL = (request) => {
    const url = `https://geo.ipify.org/api/v1?apiKey=${config.ipifyAPIKey}`;
    if (!isNaN(request[request.length - 1]))
      return `${url}&ipAddress=${request}`;
    else return `${url}&domain=${request}`;
  };

  const value = {
    isLoading,
    details,
    trackAddress,
  };

  return (
    <TrackerContext.Provider value={value}>{children}</TrackerContext.Provider>
  );
}
