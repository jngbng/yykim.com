import React, { useEffect } from "react";
import { Link, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill";
import BackgroundImage from "gatsby-background-image";
import GatsbyGallery from "../components/gallery";

// js
import SEO from "../components/seo";
// css
import styles from './wedding.module.css'

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
          <span role="img" aria-label="bride">&#128131;</span>유영과 <span role="img" aria-label="bloom">&#128378;</span>정봉이 결혼합니다
          <span role="img" aria-label="tada">&#127881;</span>
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
          <Link to={`#${Stories.name}`}>
            우리 이야기
          </Link>
        </li>
        <li>
          <Link to={`#${Gallery.name}`}>
            갤러리
          </Link>
        </li>
        <li>
          <span role="img" aria-label="tada">&#127881;</span>
        </li>
        <li>
          <Link to={`#${LetterForCOVID19.name}`}>
            코로나 안내
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
        {props.name}
      </div>
      <p className={styles.introduction}>{props.desc}</p>
    </div>
  );
}

function BloomAndBride({data}) {
  return (
    <section className={styles.bloomAndBride}>
      <WhoAreUs
        name="&#129333; 서정봉"
        img={data.bloom}
        desc="1987년 경남 고성군에서 태어나 안정적인 대기업에서 경력을 시작하였으나, 일확천금을 꿈꾸며 스타트업의 세계로 전향하여 배팅을 키워가고 있습니다. IT 직업병으로 점차 &#129302;로봇화 되어가던 중 영님을 만나 극적으로 인간미를 회복하였습니다."
      />

      <WhoAreUs
        name="&#128112; 김유영"
        img={data.bride}
        desc="1987년 충북 제천에서 태어나 군인아버지와 함께 전국을 누비다 용인에 정착했습니다. IT 정글 속에서 이직만 5번, 현재는 외국계 IT 회사에서 일하고 있습니다. 여러 인생의 굴곡점을 지나며 지쳐가던 나날에 정볼리를 만나 평안과 행복을 되찾았습니다."
      />
    </section>
  );
}

function StoryImages({imgs}) {
  if (imgs.length === 1) {
    return (
      <Img
        className={styles.storyImgHolder}
        fluid={imgs[0].childImageSharp.fluid}
        backgroundColor="#f8f8f8"
      />
    );
  }
  const aniStyle = {
    position: "absolute",
    animationName: styles[`imgFadeInOut${imgs.length}`],
    animationDuration: `${imgs.length * 2}s`,
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
  };
  return (
    <div className={styles.storyMultiImgWrapper}>
      {imgs.map((img, idx) => (
        <Img
          key={idx}
          className={styles.storyImgHolder}
          fluid={img.childImageSharp.fluid}
          style={{
            ...aniStyle,
            animationDelay: `${((2 - idx) * 2)}s`,
          }}
        />
      ))}
    </div>
  );
}

function Story(props) {
  return (
    <div className={styles.story}>
      <div className={styles.storyImg}>
        <StoryImages imgs={props.imgs} />
      </div>
      <div className={styles.storyWhen}>
        <div className={styles.storyWhenYear}>{props.when.getFullYear()}</div>
        <div className={styles.storyWhenMonth}>{props.when.getMonth() + 1}</div>
      </div>
      <div className={styles.storyDetail}>
        <div className={styles.storyTitle}>
          {props.title}
        </div>
        {props.children}
      </div>
    </div>
  );
}

function Stories({data}) {
  return (
    <section
      id={Stories.name}
      className={styles.stories} >
      <h1>우리 이야기</h1>
      
      <div className={styles.storiesContainer}>
        <Story
          imgs={[data.storyFirstContact]}
          when={new Date(2018, 8 - 1)}
          title="만나다">
          <p>
            같은 회사를 다녔지만 사적인 이야기를 시작하는 데는 2년이 걸렸습니다. 그 전에 우리의 대화는 주로 이런 식이었습니다.
          </p>
          <p>
            유영(마케터): “서버가 죽었다고요? 광고비가 새고있어!!! 빨리 서버 살려내요!”<br/>
            정봉(서버개발자): “허허허”<br/>
            <br/>
            유영(마케터): (대략 노가다 중) 자동으로 되게 개발해주세요.<br/>
            정봉(서버개발자): 허허허<br/>
          </p>

          <p>
            처음에는 같은 한국어를 하는게 맞나 싶을 정도로 대화가 헛돌았지만, 이야기하다보니 의외로 서로 비슷함을 발견해 나갔습니다.
          </p>
        </Story>
        
        <Story
          imgs={[data.storyMusicFest]}
          when={new Date(2018, 9 - 1)}
          title="뮤직 페스티벌">
          <p>
            회사일로 지쳐가던 유영님에게 나들이를 제안 했습니다.
          </p>
          <p>
            정봉: 영님 & S님, 콘서트 가지 않을래요? 장소는 뚝섬이니까 (...대략 자세한 계획...) 완벽하죠!<br/>
            S군: (...정봉님, 전 빠져드릴까요?)<br/>
            정봉: (잔말말고 따라와요)<br/>
          </p>
          <p>
            콘서트 테마는 “썸” 이었는데, 유영님은 "누가 이런데서 썸을 탄다는거에요! 최악이죠!" 라는 평을 남겼습니다...
          </p>
          <p>
            하지만 그 후 점점 더 사이가 가까워져, 드디어 연인사이가 되었습니다, 훗. 
          </p>
       </Story>

        <Story
          imgs={[
            data.storyTaiwan,
            data.storyJeju,
            data.storyYangpyeong,
            data.storyTongyeong,
            data.storyJeju2,
          ]}
          when={new Date(2019, 5 - 1)}
          title="600일간의 데이트"
        >
          <p>
            약 600일간 둘이서 놀고 먹고 울고 웃고 논쟁하며 한 방향을 향해 함께 걸어왔습니다.
          </p>
          <p>
            그는 처음 사귈 때부터 “결혼” 이라는 이야기를 자주했는데, 예를 들면 “영님은 언제쯤 결혼할 생각이에요?” “영님 우리 같이 살려면 집 구하는 지역은 이쯤이어야겠죠?” 라는 식이었습니다.
          </p>
          <p>
            그냥 하는 이야기겠거니 하고 듣다가 양평데이트를 가서 말을 타고 신나하는 그를 보고 '돈을 벌어서 그를 평생 말타게 해주리라'고 마음 먹었습니다.
          </p>
        </Story>

        <Story
          imgs={[data.storyPropose]}
          when={new Date(2019, 12 - 1)}
          title="프로포즈"
        >
          <p>
            유영: 2020년이 다가오던 때 서로 선물교환을 하기로 했습니다.
            그는 요상하게 생긴 모빌을 안겨주며 2020년도 잘 부탁한다 이야기하고 다른 선물을 또 준비한게 있다며 반지를 꺼내와서 프로포즈를 했습니다.
          </p>

          <p>
            “2020년 뿐만이 아니고, 앞으로도 평생 잘 부탁드려요. 저랑 결혼해주시겠어요?”
          </p>

          <p>
            정봉: 그 후 전 모든 에너지를 소진한 나머지 인플루엔자에 걸려서 몸져 누웠습니다.
          </p>
        </Story>

      </div>
      
      <div className={styles.storiesFinal}>
        이제, 우리 결혼합니다.
      </div>
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
      <h1>우리 갤러리</h1>
      <div className={styles.galleryWrapper}>
        <GatsbyGallery files={data.galleryFiles.nodes} />
      </div>
    </section>
  );
}

function LetterForCOVID19({data}) {
  return (
    <section
      id={LetterForCOVID19.name}
      className={styles.letterForCovid19}
    >
      <h1>코로나 안내</h1>
      <p className={styles.letterForCovid19Container}>
        최근 코로나19로 인해 어려운 시기를 보내고 있는 요즘, 걱정이 많으실거라 생각됩니다.
        결혼식 참석에 대한 부담은 갖지 마시고 마음 가득 축복해주시길 바랍니다.
        전해주시는 축하의 마음만으로도 저희는 큰 힘과 기쁨 됨을 말씀드리고 싶습니다.
        새로운 출발을 축하해 주시는 모든 분들께 진심으로 감사드리며 건강하시기를 기원합니다.<br />
        <br />
        <strong>
          * 로비에서 웰컴 드링크를 제공합니다.<br />
          * 식사는 1인 코스로 개인별로 제공됩니다.<br />
          * 예식장도 제한된 인원이 단독으로 사용합니다.
        </strong>
      </p>
      <figure className={styles.hallSettingContainer}>
        <Img
          fluid={data.weddingHallSetting.childImageSharp.fluid}
          alt="웨딩홀 자리 배치"
          imgStyle={{
            filter: "contrast(60%) brightness(120%)"
          }}
        />
        <figcaption>웨딩홀 자리 배치</figcaption>
      </figure>
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

      <Stories data={data} />

      <BackgroundImage
        Tag="div"
        className={styles.storiesConclusion}
        fluid={data.storyConclusion.childImageSharp.fluid}
      >
      </BackgroundImage>

      <Gallery data={data} />

      <LetterForCOVID19 data={data} />

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
    storyFirstContact: file(relativePath: { eq: "story_1808_first_contact.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 540, maxHeight: 300, fit: CONTAIN, background: "rgba(0,0,0,0)") {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    storyMusicFest: file(relativePath: { eq: "story_1809_music_fest.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    storyTaiwan: file(relativePath: { eq: "story_1905_taiwan_trip.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 540, maxHeight: 300, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    storyJeju: file(relativePath: { eq: "story_1909_jeju_trip.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    storyYangpyeong: file(relativePath: { eq: "story_1910_yangpyeong_trip.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    storyTongyeong: file(relativePath: { eq: "story_1901_tongyeong.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    storyJeju2: file(relativePath: { eq: "story_1909_jeju_trip2.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    storyPropose: file(relativePath: { eq: "story_propose.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    storyConclusion: file(relativePath: { eq: "stories_conclusion.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid_withWebp
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
    weddingHallSetting: file(relativePath: { eq: "wedding_hall_setting.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
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
        filter: { sourceInstanceName: { eq: "content/gallery" } },
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
