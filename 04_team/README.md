# team 04

## 팀 구성 및 역할 분담

- 안승재: 홈 HTML 마크업 작성, 신규 이모티콘 콘텐츠, 푸터 영역 스타일링
- 조현정: 홈 HTML 마크업 작성, 인기 이모티콘 콘텐츠, 스타일 콘텐츠 스타일링
- 허재혁: 홈 HTML 마크업 작성, 헤더 및 네비게이션 스타일링

## 선택한 서비스: [카카오 이모티콘샵](https://e.kakao.com/)

## 코딩 컨벤션

- HTML, CSS 네이밍 컨벤션: [BEM(Block, Element, Modifier)](http://getbem.com/)
  - `(blockName)__(elementName)--(modifier)-(value)`
    - Block: 그 자체로 의미가 있는 entity
    - Element: 그 자체로 의미가 없고 block에 의미론적으로 종속돼있는 entity의 부분
    - Modifier: block과 element의 모습과 행동을 변경을 표시하는 flag
    
- github collaboration 컨벤션: git flow
  - `FEATURE_NAME` 네이밍: 작업하는 부분 및 기능(예. navigation-bar-markup)으로 네이밍한다.
  - `commit`: 위 BEM 컨벤션 중 block 단위로 커밋한다. 커밋 메시지 형식은 [AngularJS 포맷](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)을 따른다.
  - `pull request`: 작업단위 구현이 완성되면 github pull request를 보낸다. `FEATURE_NAME(이름 이니셜) - 날짜`의 형식으로 네이밍한다. 예시) navigation-bar-markup(HJH) - 210503
  
```shell
git flow init # initialize git flow

git flow feature start FEATURE_NAME # start new feature

git flow feature finish FEATURE_NAME # finish up feature
```

## 프로젝트 관리

- Github Project
  - To do: 개발해야 할 block 단위로 생성한다. 포맷 description은 아래와 같이 한다.
  ```
    `FEATURE_NAME`
    - Assignee: 허재혁
    - Docs: url
    - Deadline: 210503
  ```
  - In progress: block 단위의 To do를 생성하고 작업 시작되면 In progress로 이동시킨다.
  - Done: pull request가 완료되면 팀장이 Done으로 옮긴다.
  - Hotfix: Hotfix 사항이 발생하면 팀장은 팀원에게 Assign한다.
  
- discord: github webhooks을 연동하여 github message를 공유한다.

## 의존성 패키지 모듈

| 패키지명 | 설명 |
|-|-|
| live-server | 라이브 서버 실행 |
| htmlhint | HTML 파일에 대한 문법검사를 수행 |
| chokidar-cli | htmlhint가 watch 옵션을 제공하지 않는 문제를 해결 |
| sass | Dart Sass 설치 |
| normalize-scss | normalize.css의 sass 버전 |
| postcss | postcss를 사용하기 위한 패키지 |
| autoprefixer | 자동으로 웹브라우저 별 접두사를 생성 |
| postcss-csso | css 파일 최적화(압축) |
| postcss-combine-media-query | 미디어쿼리 병합 |
| npm-run-all | 2개 이상의 npm 스크립트 명령을 직렬 또는 병렬로 수행 |

## 기존 카카오 이모티콘 샵 문제점 분석

### 웹 표준 관점

| 항목 | 위반 사항 |
| ---- | ---- |
| inline style sheet 방식이 적용되었다. | 구조와 표현의 분리라는 관점에서 바람직하지 않고 선택자의 우선 순위가 가장 높기 때문에 스타일 재정의가 어렵다. |
| 이미지와 설명을 div로 묶었다. | 의미가 없는 태그인 div는 연관관계를 갖는 이미지와 이미지 설명을 묶으면 그 관계가 퇴색된다. |
| footer 태그에서 details 태그로 해결 가능한 문제를 javascript로 대체하였다. | |
| `<a>` 태그에서 `target = "_blank"`을 사용하여 외부 링크로 넘어가지만 rel 속성값으로 noopener, noreferrer을 설정하지 않았다. |  보안 이슈가 발생가능하다. |

### 웹 접근성 관점(WCAG 2.1)

| 항목 | 마크업 | 위반 사항 | 위반 상세 |
| ---- | ---- | ---- | ---- |
| 모든 요소가 div 태그로 구성되었다. | 모두 | 인식의 용이성 | 1.3.5 이웃한 콘텐츠 간의 구별이 어렵지 않아야 한다. |
| 의미의 순서에 맞게 semantic하게 마크업되지 않았다. | 모두 | 이해의 용이성 | 3.3.1 콘텐츠는 논리적인 순서로 제공해야 한다. |
| 버튼에 title 속성이 누락되었다. | 모두 | 인식의 용이성 | 1.1.1 텍스트 아닌 콘텐츠는 그 의미나 용도를 이해할 수 있는 대체 텍스트를 제공해야 한다. |
| 사이드바와 메인 네비게이션의 내용이 중복되었다. | 헤더 | 이해의 용이성 | 3.3.1 콘텐츠는 논리적인 순서로 제공해야 한다. |
| 우측 상단 사용자 이미지가 로그인 여부를 혼동하게 하였다. | 헤더 | 인식의 용이성 | 1.1.1 텍스트 아닌 콘텐츠는 그 의미나 용도를 이해할 수 있는 대체 텍스트를 제공해야 한다. |
| 이모티콘 리스트를 div 태그로만 구성하였다. | 메인 | 인식의 용이성 | 1.3.5 이웃한 콘텐츠는 구별될 수 있어야 한다. |
| 이모티콘 img 태그에 alt 속성이 생략되었다. | 메인 | 인식의 용이성 | 1.1.1 텍스트 아닌 콘텐츠는 그 의미나 용도를 이해할 수 있는 대체 텍스트를 제공해야 한다. |
| 연속된 리스트 내용을 보여주기 위해 분리된 ol 태그를 두 개 사용하였다. | 메인 | 인색의 용이성, 이해의 용이성 | 1.3.5 이웃한 콘텐츠는 구별될 수 있어야 한다. 3.3.1 콘텐츠는 논리적인 순서로 제공해야 한다. |
| 네비게이션 outline의 focus와 hover 효과가 네비게이션을 불명확하게 만든다. | 헤더 | 인식의 용이성 | 1.3.2 지시사항은 모양, 크기, 방향, 색, 소리 등에 관계없이 인식될 수 있어야 한다(명확한 지시사항 제공) |
| 백드롭 영역을 마우스로 클릭해야만 영역을 닫을 수 있다. | 헤더 | 운용의 용이성 | 2.1.1 모든 기능은 키보드만으로도 사용할 수 있어야 한다(키보드 사용 보장) |
| 특정 영역의 명도 대비가 뚜렷하지 않다. | 모두 | 인식의 용이성 | 1.3.3 콘텐츠는 색에 관계없이 인식될 수 있어야 한다(색에 무관한 콘텐츠 인식) |

### 사용성 관점

| 항목 | 개선 사항 |
| ---- | ---- |
| footer 부분에서 전화번호와 이메일을 일반 텍스트로 처리하였다. | a 태그로 처리하고 href 속성값 앞에 tel: 과 mailto: 를 설정하여 바로 전화를 걸고 이메일을 보낼 수 있도록 처리 가능하다. |
| ‘페이지 상단으로 이동’ 버튼이 페이지 최하단에 위치한다. | 전 페이지에서 이용가능하도록 처리 가능하다. |

## 문법 검사 결과

- [결과 HTML](./validateHTML/result.html)

## Lighthouse report

- [데스크탑](./lighthouse/실습_Lighthouse(desktop).html)
- [모바일](./lighthouse/실습_Lighthouse(mobile).html)

## References

- BEM: [http://getbem.com/](http://getbem.com/)
- git flow: [https://danielkummer.github.io/git-flow-cheatsheet/](https://danielkummer.github.io/git-flow-cheatsheet/)
- AngularJS commit conventions: [https://gist.github.com/stephenparish/9941e89d80e2bc58a153](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)
- Web Content Accessibility Guidelines (WCAG) 2.1: [https://www.w3.org/TR/WCAG21/](https://www.w3.org/TR/WCAG21/)
