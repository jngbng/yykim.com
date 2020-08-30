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
      fluid={data.intro.childImageSharp.fluid}
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
          <Link to={`#${Intro.name}`}>
            맨위로
          </Link>
        </li>
        <li>
          <Link to={`#${Stories.name}`}>
            우리 이야기
          </Link>
        </li>
        <li>
          <span role="img" aria-label="tada">&#127881;</span>
        </li>
        <li>
          <Link to={`#${WhereWhen.name}`}>
            시간과 장소
          </Link>
        </li>
        <li>
          <Link to={`#${Gallery.name}`}>
            갤러리
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
        desc="1987년 경남 고성군에서 태어나 안정적인 대기업에서 경력을 시작하였으나, 일확천금을 꿈꾸며 스타트업의 세계로 전향하여 배팅을 키워가고 있습니다. IT 직업병으로 점차 &#129302;로봇화 되어가던 중 영님을 만나 극적으로 인간미을 회복하였습니다."
      />

      <WhoAreUs
        name="&#128112; 김유영"
        img={data.bride}
        desc="1987년 충북 제천에서 태어나 (군인아버지와 함께) 전국을 누비다 용인에 정착했습니다. 전국을 누빈 덕분에 변하는 환경에 잘 적응하게 되었으며 직장도 여기저기 누비다 현재는 외국계 IT 회사에서 일하고 있습니다. 여러 인생의 굴곡점을 지나 지쳐가던 나날에 정볼리를 만나 평안과 행복을 되찾았습니다."
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
        {/* <p className={styles.storyComment}> */}
        {/*   <span className={styles.commentBy}>정봉:</span> */}
        {/*   <span>{props.bloomComment}</span> */}
        {/* </p> */}
        {/* <p className={styles.storyComment}> */}
        {/*   <span className={styles.commentBy}>유영:</span> */}
        {/*   <span>{props.brideComment}</span> */}
        {/* </p> */}
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
          title="처음 만남"
          bloomComment="같은 회사를 다녔지만 이야기를 시작해보는데는 2년이 걸렸습니다. 처음에는 같은 한국어를 하는게 맞나 싶을 정도록 대화가 헛돌았지만, 이야기하다보니 의외로 서로 비슷함을 발견해 나갔습니다."
        >
          같은 회사를 다녔지만 사적인 이야기를 시작하는 데는 2년이 걸렸습니다. 그 전에 우리의 대화는 주로 이런 식이었습니다.
          <p>
            유영(마케터) : 서버가 죽었다고요? 광고비가 새고있어!!! 서버 빨리 살려요!<br/>
            정봉(서버개발자) : 허허허, 그럴 수도 있죠
          </p>
          <p>
            유영(마케터) : (대략 노가다) 자동으로 되게 해주세요.<br/>
            정봉(서버개발자) : 허허허<br />
            유영: (수동으로 함)
          </p>
        </Story>
        
        <Story
          imgs={[data.storyMusicFest]}
          when={new Date(2018, 9 - 1)}
          title="뮤직 페스티벌"
          bloomComment='아직 사귀기 전, 회사일로 지쳐있는 영님에게 휴식을 제안할 겸 나들이를 권했습니다. 영님은 "누가 이런데서 썸을 탄다는거에요! 최악이죠!" 라는 평을 남겼습니다.'
          brideComment="뫟"
        >
          <p>
            회사일로 지쳐가던 시기에 정볼리가 제안을 해왔습니다. 
            공대생인 그의 제안은 티켓 가격에서부터 동선에 이르기까지 꽤 구체적이었습니다.
          </p>

           <p>
            정봉: “지쳐가고 있는 영님 &amp; A님, (단둘이 가자고 하면 거절할 것을 대비하며 다른 한 명을 포함시킴), 콘서트 가지 않을래요?”<br/>

            유영: “무슨 콘서트요?”<br/>
            정봉: “가수 라인업은 이러이러하고, 티켓은 원래는 얼마인데 제가 할인처에서 구입하면 얼마정도에요. 그날 콘서트 장소는 OOO니까 영님이 용인에서 올라오면서 OO에서 갈아타고 ㅁㅁㅁ에서 다 같이 만나서 맛집인 OO를 가는거에요. 카페 OO에서 커피 한 잔을 사먹은 뒤에 택시를 타고 OO로 이동하면 완벽하죠!”<br/> 
            유영: (엄청난 사람이네) ㄱㄱ
          </p>

          <p>
            훗날 들어보니 콘서트를 같이 갔던 A군은 본인은 빠져야하나 라고 생각했다더군요.<br/>
            A님: 음...정봉님, 전 빠져드릴까요<br/>
            정봉: “잔말말고 따라와요”
          </p>
          <p>
            제 친구는 “그 사람 너한테 완전 관심있는데” 라고 평했지만 저는 “뭐라는겨? 둘이 가는거 아니야.” 라고 답했습니다.
            하지만 제 친구의 추측은 완전 정확했습니다.
          </p>

       </Story>

        <Story
          imgs={[data.storyTaiwan, data.storyJeju, data.storyYangpyeong]}
          when={new Date(2019, 5 - 1)}
          title="600일간의 데이트"
          bloomComment="뷁"
          brideComment="얍"
        >
          그 후로 약 600일간 둘이서 놀고 먹고 울고 웃고 논쟁하며 한 방향을 향해 함께 걸어왔습니다.
          그는 처음 사귈 때부터 “결혼” 이라는 이야기를 참 자주했는데, 예를 들면 “영님은 언제쯤 결혼할 생각이에요? “영님 우리 같이 살려면 집 구하는 지역은 OO이어야겠죠? 라는 식이었습니다.
          그냥 하는 이야기겠거니 하고 듣다가 양평데이트를 가서 말을 타고 신나하는 그를 보고 '돈을 벌어서 그를 평생 말타게 해주리라'고 마음 먹었습니다.
        </Story>

        <Story
          imgs={[data.storyPropose]}
          when={new Date(2019, 12 - 1)}
          title="프로포즈"
          bloomComment="1주년 기념일에 맞춰 프로포즈를 하였습니다. 프로포즈에 모든 에너지를 소진한 나머지 이후 인플루엔자에 걸려서 몸져 누웠습니다."
          brideComment="쥬르륵"
        >
          2020년이 다가오던 때 서로 선물교환을 하기로 했습니다. 
          그는 요상하게 생긴 모빌을 안겨주며 2020년도 잘 부탁한다 이야기하고 다른 선물을 또 준비한게 있다며 반지를 꺼내와서 프로포즈를 했습니다.<br/><br/>
          “2020년 뿐만이 아니고, 앞으로도 평생 잘 부탁드려요. 저랑 결혼해주시겠어요?”
        </Story>

      </div>
      
      <div className={styles.storiesFinal}>
        이제, 우리 결혼합니다.
      </div>
    </section>
  );
}

function WhereWhen(props) {
  const mapHeight= 360;
  useEffect(() => {
    if ("daum" in window) {
      const mapWidth = Math.min(640, Math.max(300, window.document.body.clientWidth - 60));
      new window.daum.roughmap.Lander({timestamp: "1598805339827", key : "2ztno", mapWidth: mapWidth, mapHeight: mapHeight}).render();
    }
  });
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
      <div>
        <div>
          <div
            id="daumRoughmapContainer1598805339827"
            className="root_daum_roughmap root_daum_roughmap_landing"
            style={{height: mapHeight}}>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery(props) {
  return (
    <section
      id={Gallery.name}
      className={styles.gallery}
    >
      <h1>우리 갤러리</h1>
      <div className={styles.galleryWrapper}>
        <GatsbyGallery />
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
      />

      <main className={styles.main}>
        <Intro data={data} />

        <Menus />

        <BloomAndBride data={data} />

        <div className={styles.spliter1}>
          <Img
            fixed={data.inner.childImageSharp.fixed}
          />
        </div>

        <Stories data={data} />

        <BackgroundImage
          Tag="div"
          className={styles.storiesConclusion}
          fluid={data.storyConclusion.childImageSharp.fluid}
        >
        </BackgroundImage>


        <WhereWhen />
        <Gallery />
      </main>
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
        fluid(maxWidth: 2560) {
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
        fluid(maxHeight: 300) {
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
        fluid(maxHeight: 300) {
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
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    inner: file(relativePath: { eq: "inner.png" }) {
      childImageSharp {
        fixed(height: 250) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;
