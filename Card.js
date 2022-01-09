import React, { useState, useEffect } from "react";
import {Container,Cards,UserContent,Image,UserDetails,UserName,Description,CardContent,Title,Desc,UserInteraction,Count ,Bottom,Like1,Comment1,Share1,} from "./Cardstyles.js";
import Data from "./Userdata.json";
import Comment from "./Comment";
function Card() {
  const [num, setNum] = useState(109);
  const [Commentup, setComment] = useState(false);
  const val = (incNum) => {
    setNum((prevState) => prevState + incNum);
  };

  useEffect(() => {
    window.localStorage.setItem("num", num);
  }, [num]);
   window.onload = function () {
    postData();
  };

  function postData() {
    fetch("https://api.countapi.xyz/update/countview.com/4ab/?amount=1")
      .then((res) => res.json())
      .then((res) => {
        document.getElementById("count").innerHTML = res.value;
      });
  }

  return (
    <Container>
      <Cards>
        <UserContent>
          {Data.map((cnt) => {
            return (
              <>
                <Image src={cnt.img} alt=""></Image>
                <UserDetails>
                  <UserName> {cnt.name}</UserName>
                  <Description>
                    {cnt.content}
                    <br></br>
                    1d | San Francisco
                  </Description>

                </UserDetails>
              </>
            );
          })}
        </UserContent>
        <CardContent>
          <Title>The concept of Research: A cross-cultural study</Title>
          <Desc>
            Oxford Nanopore has pulled in £100m from investor in the
            Asia-pacific region, as it completes a funding round that values the
            fast-grouwing UK biotechnology company at £1.5bn.
          </Desc>
        </CardContent>
        <UserInteraction>
          <Count>
            <div id="count">0</div> Views | {num} Likes | 22 Comments | 7 Shares
          </Count>
          <Bottom>
            <Like1 onClick={() => val(1)}>Like</Like1>
            <Comment1 onClick={() => val(1), () => setComment(true))}}>Comment</Comment1>
            <Comment trigger={Commentup} setTrigger={setComment}>
              <h2>Leave a Comment</h2>
              <Cform>
                <Clabel>
                  <Cinput type="text" placeholder="Write Your Comment..." />
                </Clabel>
                <Cinputb type="submit" value="Submit" />
              </Cform>
             </Comment>
            <Share1 onClick={() => val(1)}>Share</Share1>
          </Bottom>
        </UserInteraction>
      </Cards>
    </Container>
  );
}

export default Card;
const Cform = styled.form``;
const Clabel = styled.label`
  width: 100%;
`;
const Cinput = styled.input`
  height: 100px;
  width: 100%;
  border: 2px solid #333;
`;
const Cinputb = styled.input`
  width: 100px;
`;
