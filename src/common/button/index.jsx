import "./Button.css";
import cls from "classnames";
import Loading from "../loading";
import { Link } from "react-router-dom";

function AppButton({
  type,
  children,
  btnType,
  isSizeLarge,
  Icon,
  img,
  isLoading,
  loadingPosition,
  htmlType,
  onClick,
  url,
  ...restProps
}) {
  const classes = cls("button", {
    button_0: btnType === "button_0",
    button_1: btnType === "button_1",
    button_2: btnType === "button_2",
    button_img: btnType === "button_img",
  });

  const jsxContent = (
    <>
      {loadingPosition !== "after" && isLoading && <Loading />}
      {children}
      {loadingPosition === "after" && isLoading && <Loading />}
    </>
  );

  if (htmlType === "a") {
    return (
      <>
        <a
          className={classes}
          {...restProps}
          style={{
            paddingTop: `${isSizeLarge ? "5px" : "15px"}`,
            paddingRight: `${isSizeLarge ? "15px" : "25px"}`,
            paddingBottom: `${isSizeLarge ? "5px" : "15px"}`,
            paddingLeft: `${isSizeLarge ? "15px" : "25px"}`,
          }}
          onClick={onClick}
        >
          {Icon && <Icon />} {jsxContent}{" "}
          {img && <img src={img} alt="" className="profile-picture" />}
        </a>
      </>
    );
  }

    if (htmlType === "link") {
      return (
        <Link
          to={url}
          className={classes}
          {...restProps}
          style={{
            paddingTop: `${isSizeLarge ? "5px" : "15px"}`,
            paddingRight: `${isSizeLarge ? "15px" : "25px"}`,
            paddingBottom: `${isSizeLarge ? "5px" : "15px"}`,
            paddingLeft: `${isSizeLarge ? "15px" : "25px"}`,
          }}
        >
          {Icon && <Icon />} {jsxContent}{" "}
          {img && <img src={img} alt="" className="profile-picture" />}
        </Link>
      );
    }

  return (
    <button className={classes} {...restProps}>
      {Icon && <Icon />} {jsxContent}
    </button>
  );
}

export default AppButton;
