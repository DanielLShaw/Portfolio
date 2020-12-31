import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import SPALink from "../SPALink";
import CONSTANTS from "../../lib/constants";
import Modal from "../Modal";
import ReactMarkdown from "react-markdown";

const propTypes = {
  className: PropTypes.string,
  day: PropTypes.number.isRequired,
  parts: PropTypes.arrayOf(PropTypes.element),
  markdown: PropTypes.string,
  stars: PropTypes.number,
};

const defaultProps = {
  className: null,
  markdown: null,
  parts: [],
  stars: 0,
};

const AoCContainer = ({ day, parts, stars, markdown, className }) => {
  const [showModal, setShowModal] = useState(false);
  const questionLink = `${CONSTANTS.aocLink}/day/${day}`;

  const containerClasses = classNames([
    "aoc-container",
    `day-${day}`,
    className,
    `stars-${stars}`,
  ]);

  const modalClasses = classNames([`aoc-modal`, `day-${day}`]);

  const handleClick = () => {
    if (stars > 0) {
      setShowModal(true);
    }
  };

  let starStr = "";
  for (var i = 0; i < stars; i++) {
    starStr += "*";
  }

  return (
    <div className={containerClasses}>
      <div className="date" onClick={handleClick}>
        <p className="day">{day}</p>
        <p className="stars">{starStr}</p>
      </div>
      <Modal
        className={modalClasses}
        showModal={showModal}
        setShowModal={setShowModal}
      >
        {markdown && <ReactMarkdown>{markdown}</ReactMarkdown>}
        <SPALink className="aoc-container__day-link" href={questionLink} newTab>
          Question Link
        </SPALink>
        <div className="grid-y aoc-container__solutions">
          {parts.map((Part, index) => (
            <Part key={`${day}-${index}`} />
          ))}
        </div>
      </Modal>
    </div>
  );
};

AoCContainer.propTypes = propTypes;
AoCContainer.defaultProps = defaultProps;

export default AoCContainer;
