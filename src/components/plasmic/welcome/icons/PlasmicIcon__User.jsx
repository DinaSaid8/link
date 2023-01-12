// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function UserIcon(props) {
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
          "M10 3.125a4.375 4.375 0 100 8.75 4.375 4.375 0 000-8.75zM4.375 7.5a5.625 5.625 0 1111.25 0 5.625 5.625 0 01-11.25 0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M10 13.124a8.125 8.125 0 00-7.037 4.063.625.625 0 11-1.082-.624 9.376 9.376 0 0116.238 0 .625.625 0 11-1.082.625A8.125 8.125 0 0010 13.123z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UserIcon;
/* prettier-ignore-end */
