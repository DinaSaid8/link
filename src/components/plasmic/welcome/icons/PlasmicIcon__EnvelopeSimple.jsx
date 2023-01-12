// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function EnvelopeSimpleIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M1.875 4.375c0-.345.28-.625.625-.625h15c.345 0 .625.28.625.625V15a1.25 1.25 0 01-1.25 1.25H3.125A1.25 1.25 0 011.875 15V4.375zM3.125 5v10h13.75V5H3.125z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M2.04 3.953a.625.625 0 01.882-.039L10 10.402l7.078-6.488a.625.625 0 11.844.922l-7.5 6.875a.625.625 0 01-.844 0l-7.5-6.875a.625.625 0 01-.039-.883z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EnvelopeSimpleIcon;
/* prettier-ignore-end */
