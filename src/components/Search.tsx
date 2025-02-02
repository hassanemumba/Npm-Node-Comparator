import React, { useState, useEffect } from "react";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import { Alert } from "antd";
import "./Search.css";
import Comparision from "./Comparison.tsx";
import axios from 'axios';
import Result from "./Result.tsx";
import Download from "./Downloads.tsx";

const SearchComponent = () => {
  const [showComponents, setShowComponents] = useState(false);
  const [packages, setPackages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [packageData, setPackageData] = useState<{ package1: any, package2: any } | null>(null);
  const [downloadData, setDownloadData] = useState<{ downloadPackage1: any, downloadPackage2: any } | null>(null);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (inputValue.trim()) {
      axios.get(`https://api.npms.io/v2/search/suggestions?q=${inputValue}`)
        .then((response) => {
          setSuggestions(response.data);
          setShowSuggestions(true);
        })
        .catch((error) => {
          console.error("Error fetching suggestions:", error);
          setSuggestions([]);
        });
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [inputValue]);

  const processAPI = () => {
    Promise.all([
      axios.get('https://api.npms.io/v2/search?q=' + packages[0]),
      axios.get('https://api.npms.io/v2/search?q=' + packages[1]),
      axios.get('https://api.npms.io/v2/package/' + packages[0]),
      axios.get('https://api.npms.io/v2/package/' + packages[1])
    ])
      .then(([response1, response2, response3, response4]) => {
        const package1 = response1.data.results[0];
        const package2 = response2.data.results[0];
        const downloadPackage1 = response3.data;
        const downloadPackage2 = response4.data;
        setPackageData({ package1, package2 });
        setDownloadData({ downloadPackage1, downloadPackage2 });
        setShowComponents(true);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Failed to fetch package data. Please try again.");
      });
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setErrorMessage("");
  };

  const handleSuggestionClick = (suggestion) => {
    if (packages.length >= 2) {
      setErrorMessage("You can only compare two packages at a time.");
      return;
    }
    setPackages([...packages, suggestion.package.name]);
    setInputValue("");
    setShowSuggestions(false);
  };

  const removePackage = (indexToRemove) => {
    setPackages(packages.filter((_, index) => index !== indexToRemove));
    setErrorMessage("");
  };

  const analysis = () => {
    if (packages.length === 2) {
      console.log(`Comparing ${packages[0]} with ${packages[1]}`);
      processAPI();
    }
  };

  return (
    <>
      <div className="search">
        <div className="search__wrapper">
          <div className="search__input__wrapper">
            {packages.map((pkg, index) => (
              <span key={index} className="search__tag">
                {pkg}
                <CloseOutlined
                  className="search__tag__close"
                  onClick={() => removePackage(index)}
                />
              </span>
            ))}
            <input
              type="text"
              className="search__input"
              value={inputValue}
              onChange={handleInputChange}
              disabled={packages.length >= 2}
              placeholder="Search for packages..."
            />
          </div>
          {errorMessage && <Alert type="error" message={errorMessage} />}
          {showSuggestions && suggestions.length > 0 && (
            <div className="suggestions__dropdown">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="suggestion__item"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion.package.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <button onClick={analysis}>
          <SearchOutlined className="search__icon" />
          Compare
        </button>
      </div>
      {showComponents && packageData && downloadData && (
        <>
          <Comparision package1={packageData.package1.package} package2={packageData.package2.package} />
          <Result package1={downloadData.downloadPackage1.collected.npm.downloads} package2={downloadData.downloadPackage2.collected.npm.downloads} />
          <Download 
            dataset1={{
              downloads: downloadData.downloadPackage1.collected.npm.downloads,
              stars: downloadData.downloadPackage1.collected.github.starsCount,
              health: downloadData.downloadPackage1.evaluation.quality.health,
              package: packageData.package1.package,
              keywords: packageData.package1.package.keywords,
              links: packageData.package1.package.links
            }} 
            dataset2={{
              downloads: downloadData.downloadPackage2.collected.npm.downloads,
              stars: downloadData.downloadPackage2.collected.github.starsCount,
              health: downloadData.downloadPackage1.evaluation.quality.health,
              package: packageData.package2.package,
              keywords: packageData.package2.package.keywords,
              links: packageData.package2.package.links
            }} 
          />
        </>
      )}
    </>
  );
};

export default SearchComponent;