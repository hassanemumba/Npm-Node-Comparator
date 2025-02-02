import React from "react";
import "./Downloads.css";

export default function Downloads({ dataset1, dataset2 }) {
  console.log(dataset1, dataset2);
  const recommendedPackage = dataset1.health > dataset2.health ? dataset1 : dataset2;
  const betterPercentage = (recommendedPackage.health / (recommendedPackage === dataset1 ? dataset2.health : dataset1.health)) * 100;

  // Calculate total downloads
  const totalDownloads = (downloads) => {
    return downloads.reduce((total, download) => total + download.count, 0);
  };

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
              {recommendedPackage.keywords.map((keyword, index) => (
                <span key={index} className="download__language">{keyword}</span>
              ))}
            </div>
            <div className="download__stats">
              <div className="download__stat">
                <span className="download__label">Total Downloads</span>
                <span className="download__value">{totalDownloads(recommendedPackage.downloads)}</span>
              </div>
              <div className="download__stat">
                <span className="download__label">Stars</span>
                <span className="download__value">{recommendedPackage.stars}</span>
              </div>
              <div className="download__stat">
                <span className="download__label">Health</span>
                <span className="download__value">{(recommendedPackage.health * 100).toFixed(2)}%</span>
              </div>
            </div>

            <div className="download__links">
              <span>ℹ️</span>
              <a href={recommendedPackage.links.repository} className="download__link">Repository</a>
              <span>📄</span>
              <a href={recommendedPackage.links.documentation} className="download__link">Documentation</a>
            </div>
          </div>
        </div>
      </div>
      <span className="copywrite">Copyright 2023 Emumba Inc</span>
    </>
  );
}