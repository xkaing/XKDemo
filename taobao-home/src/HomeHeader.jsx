import React from "react";
import { NavBar, Toast, Image, Input } from "antd-mobile";

const logoSrc =
  "https://gw.alicdn.com/imgextra/i4/O1CN019XWXNq1aAPOVMYSiu_!!6000000003289-2-tps-167-63.png";
const signInSrc =
  "https://gw.alicdn.com/imgextra/i4/O1CN01ftum4629SHP6bCqTm_!!6000000008066-2-tps-99-99.png";

const HomeHeader = () => {
  const back = () =>
    Toast.show({
      content: "点击了淘宝主页",
      duration: 1000,
    });

  const backView = <Image src={logoSrc} width={57} height={21} />;
  const right = <Image src={signInSrc} width={35} height={35} />;

  return (
    <NavBar
      right={right}
      back={backView}
      onBack={back}
      backArrow={false}
      style={{
        "--height": "50px",
        background: "#F4F4F4",
      }}
    >
      <Input
        placeholder="  寻找宝贝店铺"
        style={{
          fontSize: "12px",
          borderRadius: "20px",
          border: "2px solid orange",
        }}
      ></Input>
    </NavBar>
  );
};

export default HomeHeader;
