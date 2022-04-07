import React from 'react'
import Skeleton from "react-loading-skeleton";
const Loading = () => {
    return (
        <div>
          <p>Loading ..</p>
          <div className="col-md-3">
            <Skeleton height={350} />
          </div>
          <div className="col-md-3">
            <Skeleton height={350} />
          </div>{" "}
          <div className="col-md-3">
            <Skeleton height={350} />
          </div>{" "}
          <div className="col-md-3">
            <Skeleton height={350} />
          </div>
        </div>
      );
}

export default Loading