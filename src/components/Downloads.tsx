import React from "react";
import "./Downloads.css";

export default function Downloads({ package1, package2 }) {
  const recommendedPackage = package1.score.popularity > package2.score.popularity ? package1 : package2;
  const betterPercentage = (recommendedPackage.score.popularity / (recommendedPackage === package1 ? package2.score.popularity : package1.score.popularity)) * 100;

  return (
    <>
      <div className="downloads">
        <h2 className="downloads__title">
          ✨ {recommendedPackage.package.name} is {betterPercentage.toFixed(2)}% better! ✨
        </h2>
        <div className="download__title">
          <div className="download__content">
            <div className="download__header">
              <h2 className="download__winner">👑 {recommendedPackage.package.name}</h2>
              <span className="download__badge">recommended</span>
            </div>

            <p className="download__description">
              {recommendedPackage.package.description}
            </p>

            <div className="download__languages">
              {recommendedPackage.package.keywords.map((keyword, index) => (
                <span key={index} className="download__language">{keyword}</span>
              ))}
            </div>
            <div className="download__stats">
              <div className="download__stat">
                <span className="download__label">Downloads</span>
                <span className="download__value">{recommendedPackage.package.downloads}</span>
              </div>
              <div className="download__stat">
                <span className="download__label">Stars</span>
                <span className="download__value">{recommendedPackage.package.stars}</span>
              </div>
              <div className="download__stat">
                <span className="download__label">Health</span>
                <span className="download__value">{recommendedPackage.package.health}</span>
              </div>
            </div>

            <div className="download__links">
              <span>ℹ️</span>
              <a href={recommendedPackage.package.links.repository} className="download__link">Repository</a>
              <span>📄</span>
              <a href={recommendedPackage.package.links.documentation} className="download__link">Documentation</a>
            </div>
          </div>
        </div>
      </div>
      <span className="copywrite">Copyright 2023 Emumba Inc</span>
    </>
  );
}