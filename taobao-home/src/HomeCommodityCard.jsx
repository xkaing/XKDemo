import React from "react";
import { Card, Image, AutoCenter, Grid } from "antd-mobile";

const imgSrc =
  "https://gw.alicdn.com/bao/uploaded/i3/65253377/TB2z39KemCI.eBjy1XbXXbUBFXa_!!65253377.jpg_500x500q90.jpg_.webp";

const HomeCommodityCard = ({ img }) => {
  return (
    <Card style={{ height: "272px", width: "178px" }}>
      <Image
        src={img}
        width={178}
        height={178}
        fit="cover"
        style={{ borderRadius: 8 }}
      />
      <AutoCenter style={{ margin: "10px 10px 0 10px" }}>
        耐热玻璃茶海 公道杯分茶器功夫茶具配件公平茶道
      </AutoCenter>
      <p style={{ margin: "5px 0" }}>
        <span
          style={{
            color: "red",
            margin: "10px",
          }}
        >
          ￥9.9
        </span>
        <span
          style={{
            color: "gray",
          }}
        >
          500+人已购买
        </span>
      </p>
    </Card>
  );
};

export default HomeCommodityCard;
