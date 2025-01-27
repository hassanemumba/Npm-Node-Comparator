import React from "react";
import "./Comparison.css";

export default function Comparison({ package1, package2 }) {
  return (
    (
      <div className="comparison">
        <h2 className="comparison__title">Comparison</h2>
        <div className="comparison__wrapper">
          <div className="comparison__row">
            <div className="comparison__header">Package Name</div>
            <div className="comparison__data">
              {" "}
              <b>
                {package1.name} ({package1.version})
              </b>
            </div>
            <div className="comparison__data">
              {" "}
              <b>
                {package2.name} ({package2.version})
              </b>
            </div>
          </div>

          <div className="comparison__row">
            <div className="comparison__header">Description</div>
            <div className="comparison__data">{package1.description}</div>
            <div className="comparison__data">{package2.description}</div>
          </div>

          <div className="comparison__row">
            <div className="comparison__header">Keywords</div>
            <div className="comparison__tags">
              {package1.keywords && package1.keywords.length > 0 ? (
                package1.keywords.map((keyword, index) => (
                  <span key={index} className="comparison__tag">
                    {keyword}
                  </span>
                ))
              ) : (
                <span className="comparison__tag">N/A</span>
              )}
            </div>
            <div className="comparison__data">
              <div className="comparison__tags">
                {package2.keywords && package2.keywords.length > 0 ? (
                  package2.keywords.map((keyword, index) => (
                    <span key={index} className="comparison__tag">
                      {keyword}
                    </span>
                  ))
                ) : (
                  <span className="comparison__tag">N/A</span>
                )}
              </div>
            </div>
          </div>

          <div className="comparison__row">
            <div className="comparison__header">Repository</div>
            <div className="comparison__data">
              {Object.keys(package1.links).map((key, index) => (
                <a
                  key={index}
                  href={package1.links[key]}
                  className="comparison__link"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </a>
              ))}
            </div>
            <div className="comparison__data">
              {Object.keys(package2.links).map((key, index) => (
                <a
                  key={index}
                  href={package2.links[key]}
                  className="comparison__link"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </a>
              ))}
            </div>
          </div>

          <div className="comparison__row">
            <div className="comparison__header">License</div>
            <div className="comparison__data">
              <span className="comparison__license">MIT</span>
            </div>
            <div className="comparison__data">
              <span className="comparison__license">MIT</span>
            </div>
          </div>

          <div className="comparison__row">
            <div className="comparison__header">Last Modification Date</div>
            <div className="comparison__data">
              {new Date(package1.date).toLocaleDateString()}
            </div>
            <div className="comparison__data">
              {new Date(package2.date).toLocaleDateString()}
            </div>
          </div>
          <div className="comparison__row">
            <div className="comparison__header">Authors/Publishers</div>

            <div className="comparison__data">
              <span className="comparison__author">
                {package1.publisher.username}
              </span>
            </div>
            <div className="comparison__data">
              {package1.publisher.username}
            </div>
          </div>

          <div className="comparison__row">
            <div className="comparison__header">Maintainers</div>
            <div className="comparison__data">{package1.maintainers[0].email}</div>
            <div className="comparison__data">{package2.maintainers[0].email}</div>
          </div>
        </div>
      </div>
    )
  );
}
