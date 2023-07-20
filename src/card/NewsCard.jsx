import React from "react";
import Button from "../components/common/Button/Button";

const NewsCard = ({ apiData, altTitle, searchInput }) => {
  return (
    <div className="container my-3">
      <div className="row">
        {apiData
          .filter((data) => {
            if (searchInput === "") {
              return true;
            } else {
              const title = data.title || "";
              const description = data.description || "";
              return (
                title.toLowerCase().includes(searchInput.toLowerCase()) ||
                description.toLowerCase().includes(searchInput.toLowerCase())
              );
            }
          })
          .map((data, index) => {
            return (
              <div
                key={index}
                className="col-lg-4 col-md-6 col-sm-12 my-3 shadow-lg mb-5 rounded"
              >
                <div className="card-group">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={data.image}
                      height={"180px"}
                      alt={altTitle}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {typeof data.title === "string"
                          ? data.title.slice(0, 40)
                          : "Title Not Available"}
                      </h5>
                      <p className="card-text">
                        {typeof data.description === "string"
                          ? data.description.slice(0, 75)
                          : "Description Not Available"}
                        ....
                      </p>
                      <h6>Published At: {data.publishedAt}</h6>
                      <Button
                        href={data.url}
                        target="_blank"
                        className="btn btn-primary mt-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default NewsCard;
