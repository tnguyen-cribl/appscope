import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../scss/_download.scss";
import "../../utils/font-awesome";
export default function Download(props) {
  return (
    <Link to="/docs/downloading" className="download">
      <FontAwesomeIcon icon={"download"} />
      <span> {props.btnText}</span>
    </Link>
  );
}
