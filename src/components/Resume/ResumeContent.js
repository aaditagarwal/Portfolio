import React from "react";

function ResumeContent(props) {
  return (
    <div className="resume-item">
      <h5 className={props.company ? "resume-title" : "resume-no-title"}>
        {props.company ? 
          props.title ? 
            <div>
              <i>{props.title}</i> <br /> <a href={props.link}>{props.company}</a>
            </div> :
            <a href={props.link}>{props.company}</a>
          :
          null
        }
        </h5>
      <p>
        <em>{props.date}</em>
      </p>
      <ul>
        {props.content.map((value, index) => (
          <li key={index}> ‣ {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResumeContent;
