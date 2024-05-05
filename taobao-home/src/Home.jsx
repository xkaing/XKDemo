import React from "react";
import HomeHeader from "./HomeHeader";
import HomeEnterInfo from "./HomeEnterInfo";
import HomeCommodityCard from "./HomeCommodityCard";
import { Grid } from "antd-mobile";

const commodityArr = [
  {
    img: "https://gw.alicdn.com/bao/uploaded/i3/65253377/TB2z39KemCI.eBjy1XbXXbUBFXa_!!65253377.jpg_500x500q90.jpg_.webp",
  },
  {
    img: "https://gw.alicdn.com/bao/uploaded/i4/437697693/O1CN01zADRVJ26hRkW6bPVt_!!437697693.jpg_500x500q90.jpg_.webp",
  },
  {
    img: "https://gw.alicdn.com/bao/uploaded/i1/2080119931/O1CN01g2BohC2NES5djgj6R_!!0-item_pic.jpg_500x500q90.jpg_.webp",
  },
  {
    img: "https://gw.alicdn.com/bao/uploaded/i2/24178350/O1CN01npXAfR2BYM4LqnZXA_!!24178350.jpg_500x500q90.jpg_.webp",
  },
  {
    img: "https://gw.alicdn.com/bao/uploaded/i3/65253377/TB2z39KemCI.eBjy1XbXXbUBFXa_!!65253377.jpg_500x500q90.jpg_.webp",
  },
  {
    img: "https://gw.alicdn.com/bao/uploaded/i4/437697693/O1CN01zADRVJ26hRkW6bPVt_!!437697693.jpg_500x500q90.jpg_.webp",
  },
  {
    img: "https://gw.alicdn.com/bao/uploaded/i1/2080119931/O1CN01g2BohC2NES5djgj6R_!!0-item_pic.jpg_500x500q90.jpg_.webp",
  },
  {
    img: "https://gw.alicdn.com/bao/uploaded/i2/24178350/O1CN01npXAfR2BYM4LqnZXA_!!24178350.jpg_500x500q90.jpg_.webp",
  },
];

const Home = () => {
  return (
    <div
      style={{
        background: "#F4F4F4",
        height: "100vh",
      }}
    >
      <HomeHeader />
      <HomeEnterInfo />
      <Grid columns={2} gap={8} style={{ margin: "10px" }}>
        {commodityArr.map((item, index) => (
          <Grid.Item key={index}>
            <HomeCommodityCard img={item.img} />
          </Grid.Item>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
