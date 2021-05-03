# 04_team(팀명)

## 팀 구성 및 역할 분담
- 안승재
- 조현정
- 허재혁

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

## 프로젝트 관리(Github Project)
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

## References
- BEM: [http://getbem.com/](http://getbem.com/)
- git flow: [https://danielkummer.github.io/git-flow-cheatsheet/](https://danielkummer.github.io/git-flow-cheatsheet/)
- AngularJS commit conventions: [https://gist.github.com/stephenparish/9941e89d80e2bc58a153](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)

