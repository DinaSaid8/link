// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function LockKeyIcon(props) {
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
          "M10 10a.937.937 0 100 1.875A.937.937 0 0010 10zm-2.188.938a2.188 2.188 0 114.376 0 2.188 2.188 0 01-4.376 0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M10 11.875c.345 0 .625.28.625.625v1.875a.625.625 0 11-1.25 0V12.5c0-.345.28-.625.625-.625z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M2.5 7.5c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v8.75c0 .69-.56 1.25-1.25 1.25H3.75c-.69 0-1.25-.56-1.25-1.25V7.5zm13.75 0H3.75v8.75h12.5V7.5z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M10 1.875a2.188 2.188 0 00-2.188 2.188v2.812a.625.625 0 11-1.25 0V4.062a3.437 3.437 0 116.875 0v2.813a.625.625 0 11-1.25 0V4.062A2.188 2.188 0 0010 1.876z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LockKeyIcon;
/* prettier-ignore-end */
