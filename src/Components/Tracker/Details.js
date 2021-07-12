import React from "react";
import { useTracker } from "../TrackerContext.js";
import Loader from "../Loader/Loader"

export default function Details() {
  const { details, isLoading } = useTracker();
  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="details-section">
            <div className="details-title">IP Address</div>
            <div className="details-section-value">{details?.ip}</div>
          </div>
          
          <div className="details-section">
            <div className="details-title"> Location</div>
            <div className="details-section-value">{`${details?.city}, ${details?.country}, ${details?.geonameId}`}</div>
          </div>
          
          <div className="details-section">
            <div className="details-title">Timezone</div>
            <div className="details-section-value">UTC {details?.timezone}</div>
          </div>
          
          <div className="details-section">
            <div className="details-title">ISP</div>
            <div className="details-section-value">{details?.isp}</div>
          </div>
        </>
      )}
    </div>
  );
}
