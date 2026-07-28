# CJ AI 콘텐츠 포트폴리오 데모

이 저장소는 CJ AI 콘텐츠 제작자 지원용 독립 포트폴리오 사이트입니다.

## 프로젝트 구성

1. 웹툰 AI 숏애니메이션
2. Antiframe
3. AI 드라마

숏애니는 공개 가능한 Google Drive 영상으로 재생하고, Antiframe은 실제 UI 이미지와 API 없는 정적 인터랙티브 데모를 사용합니다. AI 드라마는 제작 완료 후 결과 영상과 제작 자료를 연결합니다.

원본 제작 소스와 대용량 영상 전체는 공개 저장소에 복사하지 않습니다. 포트폴리오에 사용할 수 있는 선별 자료만 `assets/projects`에 둡니다.

숏애니 상세 글에는 포맷별 결과 이미지, 첫 프레임 변환, 실제 모션 프롬프트, 생성 후보 비교 클립, 말풍선·TTS·사운드·편집 자료와 에이전트 화면을 사용합니다. Antiframe 상세 글에는 실제 제품 기준 문서와 구현을 근거로 장면 데이터, 자연어 변경 범위, 상태·재시도 정책과 렌더 워커 구조를 설명합니다.

## 상세 글

- `content/posts/01-webtoon-ai-short-animation.md`
- `content/posts/02-antiframe.md`
- `content/posts/02-cinematic-layer-in-layer.md`

제목, 태그, 상태와 미디어 경로는 `src/app.js`의 `projects`에서 수정합니다.
