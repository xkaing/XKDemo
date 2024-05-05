import React from "react";
import { Card, Image, AutoCenter, Grid } from "antd-mobile";

const itemIconArr = [
  {
    icon: "https://gw.alicdn.com/imgextra/i3/O1CN01ULqxIg1sMvM4cBneE_!!6000000005753-2-tps-183-144.png_q90.jpg_.webp",
    title: "机票酒店",
  },
  {
    icon: "https://gw.alicdn.com/imgextra/i1/O1CN01awMno81R5zC3ORUdr_!!6000000002061-2-tps-183-144.png_q90.jpg_.webp",
    title: "百亿补贴",
  },
  {
    icon: "https://gw.alicdn.com/imgextra/i3/O1CN013WcsZW1jfr4AXnmVl_!!6000000004576-2-tps-183-144.png_q90.jpg_.webp",
    title: "领取金币",
  },
  {
    icon: "https://gw.alicdn.com/imgextra/i1/O1CN01Lil7RM1U7JCGBNT1U_!!6000000002470-2-tps-183-144.png_q90.jpg_.webp",
    title: "聚划算",
  },
  {
    icon: "https://gw.alicdn.com/imgextra/i2/O1CN01yvtpzl1phaFwksY3V_!!6000000005392-2-tps-183-144.png_q90.jpg_.webp",
    title: "充值中心",
  },
  {
    icon: "https://gw.alicdn.com/imgextra/i3/O1CN01ULqxIg1sMvM4cBneE_!!6000000005753-2-tps-183-144.png_q90.jpg_.webp",
    title: "机票酒店",
  },
  {
    icon: "https://gw.alicdn.com/imgextra/i1/O1CN01awMno81R5zC3ORUdr_!!6000000002061-2-tps-183-144.png_q90.jpg_.webp",
    title: "百亿补贴",
  },
  {
    icon: "https://gw.alicdn.com/imgextra/i3/O1CN013WcsZW1jfr4AXnmVl_!!6000000004576-2-tps-183-144.png_q90.jpg_.webp",
    title: "领取金币",
  },
  {
    icon: "https://gw.alicdn.com/imgextra/i1/O1CN01Lil7RM1U7JCGBNT1U_!!6000000002470-2-tps-183-144.png_q90.jpg_.webp",
    title: "聚划算",
  },
  {
    icon: "https://gw.alicdn.com/imgextra/i2/O1CN01yvtpzl1phaFwksY3V_!!6000000005392-2-tps-183-144.png_q90.jpg_.webp",
    title: "充值中心",
  },
];

const HomeEnterInfo = () => {
  return (
    <Card
      style={{
        background: "#FFFFFF",
        margin: "10px",
        height: "151px",
      }}
    >
      <Grid columns={5} gap={1}>
        {itemIconArr.map((item, index) => (
          <Grid.Item key={index}>
            <ItemIcon icon={item.icon} title={item.title} />
          </Grid.Item>
        ))}
      </Grid>
    </Card>
  );
};

const ItemIcon = ({ icon, title }) => {
  return (
    <div
      style={{
        width: "63px",
        height: "68px",
      }}
    >
      <Image src={icon} width={63} height={50} />
      <AutoCenter>{title}</AutoCenter>
    </div>
  );
};

export default HomeEnterInfo;
