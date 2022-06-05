import React from 'react'
import { gsap } from "gsap";

export default function Script() {
  return (
    <div>
      {
        // マウスを動かすと発火するトリガー
        document.addEventListener("mousemove", (e) => {
          // eventのx、ｙ座標を取得
          const mouseX = e.clientX; 
          const mouseY = e.clientY; 
          
          // 付加させたいクラスを指定
          gsap.to(".circle", {
            x: mouseX,
            y: mouseY,
            stagger: 0.1,
          });
          
          // 遅延を消す関数
          gsap.set(".cursor", {
            x: mouseX,
            y: mouseY,
            stagger: 0.1,
          })
        })
      }
</div>
  )
}
