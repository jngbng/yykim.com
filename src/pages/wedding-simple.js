import React from "react";
import { Link, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill";
import BackgroundImage from "gatsby-background-image";
import GatsbyGallery from "../components/gallery";

// js
import SEO from "../components/seo";
// css
import styles from './wedding-simple.module.css'

function Intro({data}) {
  return (
    <BackgroundImage
      id={Intro.name}
      Tag="section"
      className={styles.intro}
      fluid={[
        data.introMobile.childImageSharp.fluid,
        {
          ...data.intro.childImageSharp.fluid,
          media: "(min-width: 601px)",
        },
      ]}
    >
      <div className={styles.introContent}>
        <h1>
          초대합니다.
        </h1>
        
        <div className={styles.introMessage}>
          서정봉 - 김유영
        </div>

        <div className={styles.introWhenWhere}>
          - 2020년 10월 9일 (금) 14시 30분 -
          <br/>
          라플레이스 웨딩홀
        </div>
      </div>
    </BackgroundImage>
  );
}

function Menus(props) {
  return (
    <section className={styles.menus}>
      <ul>
        <li>
          <Link to={`#${Gallery.name}`}>
            갤러리
          </Link>
        </li>
        <li>
          <Link to={`#${WhereWhen.name}`}>
            시간과 장소
          </Link>
        </li>
      </ul>
    </section>
  );
}

function WhoAreUs(props) {
  return (
    <div className={styles.whoAreUs}>
      <Img
        className={styles.profileImg}
        fluid={props.img.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%" />
      <div className={styles.name}>
        {props.parents}
        <span className={styles.relation}>
          {props.relation}
        </span>
        {props.name}
      </div>
    </div>
  );
}

function BloomAndBride({data}) {
  return (
    <section className={styles.bloomAndBride}>
      <WhoAreUs
        parents="서성군, 김순옥"
        relation="의 장남"
        name="정봉"
        img={data.bloom}
      />

      <WhoAreUs
        parents="김웅암, 박선심"
        relation="의 차녀"
        name="유영"
        img={data.bride}
      />
    </section>
  );
}

function WhereWhen({data}) {
  return (
    <section
      id={WhereWhen.name}
      className={styles.whereWhen}>
      <h1>시간과 장소</h1>
      <div className={styles.whereWhenWrapper}>
        <div className={styles.whenOfWhereWhen}>
          2020년 10월 9일 14시 30분
        </div>
        <ul className={styles.whereOfWhereWhen}>
          <li>라플레이스 웨딩홀</li>
          <li>서울 강남구 테헤란로 424 대치타워 지하1층</li>
          <li>전화: <a href="tel:02-6339-0466">02-6339-0466</a></li>
          <li>지하철 2호선 선릉역 1번 출구 도보 3분 소요</li>
          <li>승용차 주차 무료</li>
        </ul>
      </div>
      <div className={styles.whereWhenMapContainer}>
        <Img
          fluid={data.map.childImageSharp.fluid}
          alt="약도" />
        <br />
        <a href="https://map.kakao.com/?urlX=511817&urlY=1112785&urlLevel=3&map_type=TYPE_MAP&map_hybrid=false">
          <Img
            fixed={data.kakaoMap.childImageSharp.fixed}
            className={styles.mapIcon}
            alt="카카오 지도" />
        </a>
        <a href="http://naver.me/FAjWyeif">
          <Img
            fixed={data.naverMap.childImageSharp.fixed}
            className={styles.mapIcon}
            alt="네이버 지도" />
        </a>
      </div>
    </section>
  );
}

function Gallery({data}) {
  return (
    <section
      id={Gallery.name}
      className={styles.gallery}
    >
      <h1>갤러리</h1>
      <div className={styles.galleryWrapper}>
        <GatsbyGallery files={data.galleryFiles.nodes} />
      </div>
    </section>
  );
}

export default function WeddingPage({data}) {
  return (
    <div className={styles.container}>
      <SEO
        title="유영&#128150;정봉"
        lang="ko"
        description="유영과 정봉이 결혼합니다."
        meta={[{
          name: "og:image",
          content: `https://yykim.com${data.ogImg.publicURL}`,
        }]}
      />

      <Intro data={data} />

      <Menus />

      <BloomAndBride data={data} />

      <div className={styles.spliter1}>
        <Img
          fixed={data.laurelTree.childImageSharp.fixed}/>
        <p className={styles.poem}>
          사랑은 소유가 아니라 동행임을 아는 두사람<br/>
          잡은 손을 놓지 않되 함부로 잡아끌지 않을 것이며<br/>
          서로의 두 눈을 고요히 바라보아<br/>
          말하지 않아도 같은 쪽으로 걸어가리라<br/>
          <span className={styles.poetry}>&lt;박미라, "아름다운 날에 부치다" 중&gt;</span>
        </p>
      </div>

      <Gallery data={data} />

      <WhereWhen data={data} />

      <BackgroundImage
        Tag="div"
        className={styles.footer}
        fluid={data.thankyou.childImageSharp.fluid}
      >
        <div className={styles.footerThanks}>감사합니다</div>
        <div className={styles.footerSig}>정봉 &amp; 유영</div>
      </BackgroundImage>
    </div>
  )
}

export const query = graphql`
  query {
    intro: file(relativePath: { eq: "intro.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2500, webpQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    introMobile: file(relativePath: { eq: "intro-mobile.jpg" }) {
      childImageSharp {
        fluid(webpQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    bloom: file(relativePath: { eq: "bloom.jpg" }) {
      childImageSharp {
        fluid(maxWidth:450, maxHeight: 450, cropFocus: CENTER, webpQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    bride: file(relativePath: { eq: "bride.jpg" }) {
      childImageSharp {
        fluid(maxWidth:450, maxHeight: 450, cropFocus: CENTER, webpQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    thankyou: file(relativePath: { eq: "thankyou.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 500) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    laurelTree: file(relativePath: { eq: "laurel_tree.png" }) {
      childImageSharp {
        fixed(width: 60) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    ogImg: file(relativePath: { eq: "og_wedding.jpg" }) {
      publicURL
    }
    map: file(relativePath: { eq: "map.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    kakaoMap: file(relativePath: { eq: "kakaomap.png" }) {
      childImageSharp {
        fixed(width: 45, quality: 95) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    naverMap: file(relativePath: { eq: "navermap.png" }) {
      childImageSharp {
        fixed(width: 45, quality: 95) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    galleryFiles: allFile(
        filter: { 
          sourceInstanceName: { eq: "content/gallery" },
          name: { regex: "/gallery(1|13|14|15|19|20|3|4)$/" }
        },
        sort: { order: ASC, fields: name }
    ) {
      nodes {
        id
        name
        publicURL
        childImageSharp {
          fluid(maxWidth: 2500, maxHeight: 2500) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  }
`;
