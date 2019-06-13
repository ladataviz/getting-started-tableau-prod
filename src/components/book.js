import React from "react"
import Container from "./container"
import "./component.css"
import "./default.css"

const Book = () => (
  <div className="main">
    <ul id="bk-list" className="bk-list">
      <li>
        <div className="bk-book book-1 bk-bookdefault">
          <div className="bk-front">
            <div className="bk-cover-back" />
            <div className="bk-cover" />
          </div>
          <div className="bk-page">
            <div className="bk-content" />
            <div className="bk-content bk-content-current" />
          </div>
          <div className="bk-back" />
          <div className="bk-right" />
          <div className="bk-left">
            <h2>
              <span>Getting Started with Tableau 2019.2</span>
              <span>by Tristan Guillevin</span>
            </h2>
          </div>
          <div className="bk-top" />
          <div className="bk-bottom" />
        </div>
        <div className="bk-info" />
      </li>
    </ul>
  </div>
)

export default Book
