const toolMatrix = [
  { name: "Premiere", level: "상", use: "컷 편집, 대사 싱크, 색보정, 사운드 믹싱" },
  { name: "After Effects", level: "중", use: "모션 그래픽, 애니메이션" },
  { name: "Photoshop", level: "중", use: "레이어 분리, 마스킹, 이미지 합성·보정" },
  {
    name: "생성형 AI 활용 역량",
    use: "Adobe Firefly, Gemini Nano Banana Series, Gemini Omni Series, ChatGPT Images Series, Midjourney, Kling AI, ElevenLabs (Text to Speech·Sound Effects·Eleven Music), Supertone Play",
    wide: true,
  },
];

const shortAnimationVideos = [
  {
    group: "점괘보는 공녀님",
    episode: "9화",
    duration: "2분 24초",
    poster: "assets/projects/short-animation/final-videos/fortune-princess-ep09.jpg",
    youtube: "https://youtube.com/shorts/PwsN7nyzPyk?feature=share",
  },
  {
    group: "점괘보는 공녀님",
    episode: "10화",
    duration: "2분 29초",
    poster: "assets/projects/short-animation/final-videos/fortune-princess-ep10.jpg",
    youtube: "https://youtube.com/shorts/W5mDMJXmhKc?feature=share",
  },
  {
    group: "점괘보는 공녀님",
    episode: "11화",
    duration: "1분 23초",
    poster: "assets/projects/short-animation/final-videos/fortune-princess-ep11.jpg",
    youtube: "https://youtube.com/shorts/qz6310ZOMho?feature=share",
  },
  {
    group: "점괘보는 공녀님",
    episode: "9화 프로모션 · 터치형",
    duration: "YouTube Shorts",
    poster: "assets/projects/short-animation/outputs/teaser.jpg",
    youtube: "https://youtube.com/shorts/Bt2eeOXGEI8?feature=share",
  },
  {
    group: "점괘보는 공녀님",
    episode: "10화 프로모션 · 터치형",
    duration: "YouTube Shorts",
    poster: "assets/projects/short-animation/outputs/teaser.jpg",
    youtube: "https://youtube.com/shorts/mzAJt61oDEk?feature=share",
  },
  {
    group: "점괘보는 공녀님",
    episode: "1~6화 프로모션",
    duration: "YouTube Shorts",
    poster: "assets/projects/short-animation/outputs/teaser.jpg",
    youtube: "https://youtube.com/shorts/Unnp3GSet9M?feature=share",
  },
  {
    group: "전령새 왕녀님",
    episode: "1화",
    duration: "1분 52초",
    poster: "assets/projects/short-animation/final-videos/messenger-bird-ep01.jpg",
    youtube: "https://youtube.com/shorts/wefQYggOTfQ?feature=share",
  },
  {
    group: "전령새 왕녀님",
    episode: "2화",
    duration: "1분 26초",
    poster: "assets/projects/short-animation/final-videos/messenger-bird-ep02.jpg",
    youtube: "https://youtube.com/shorts/XeuteDMTU98?feature=share",
  },
  {
    group: "전령새 왕녀님",
    episode: "3화",
    duration: "1분 58초",
    poster: "assets/projects/short-animation/final-videos/messenger-bird-ep03.jpg",
    youtube: "https://youtube.com/shorts/tGgkaAfPPBI",
  },
];

const projects = [
  {
    slug: "webtoon-ai-short-animation",
    title: "웹툰 IP 기반 AI 숏애니메이션 제작",
    thumbnail: "assets/thumbnails/project-01-ai-animation.jpg",
    thumbnailAlt: "무표정 인물과 말풍선이 공중에 떠 있는 3D 아이콘",
    summary:
      "두 개의 웹툰 IP를 회차형·프로모션형 애니메이션으로 제작했습니다. 원작 보존, 첫 프레임, 모션, TTS·사운드, 편집·QC와 Layer-in-Layer 정립 과정을 실제 소스로 공개합니다.",
    role: "회차 분석·연출부터 이미지·영상·음성 생성, 편집과 QC까지 AI 애니메이션 제작 전담",
    contribution: "100%",
    contributionNote: "사내 에이전트 개발 전체가 아니라, 배정된 AI 애니메이션 제작 공정 기준",
    tools: [
      ["Kling AI", "상"],
      ["Premiere Pro", "상"],
      ["Photoshop", "중"],
      ["After Effects", "중"],
      ["ElevenLabs", "중"],
      ["Gemini · Firefly", "중"],
    ],
    media: {
      type: "youtube",
      youtube: "https://youtube.com/shorts/PwsN7nyzPyk?feature=share",
    },
    article: "content/posts/01-webtoon-ai-short-animation.md",
  },
  {
    slug: "antiframe",
    title: "자연어로 영상 초안을 만들고 수정하는 제작 워크플로우",
    thumbnail: "assets/thumbnails/project-02-antiframe.jpg",
    thumbnailAlt: "공중에 떠 있는 파란색과 보라색 채팅 말풍선 3D 아이콘",
    summary:
      "대본 입력부터 장면별 초안, 자연어 수정과 부분 재실행을 하나의 흐름으로 연결했습니다. 반복 입력은 자동화하고 콘텐츠 방향을 결정하는 단계에는 사용자의 확인을 남겼습니다.",
    role: "문제 정의, 제품 기획, UX·정보 구조, 프론트엔드·API, 생성 파이프라인, 렌더 워커와 QA",
    contribution: "100%",
    contributionNote: "기획·개발·검증 전 과정",
    tools: [
      ["ChatGPT · Gemini", "상"],
      ["Next.js · TypeScript", "중"],
      ["Supabase · API", "중"],
      ["After Effects", "중"],
      ["FFmpeg", "중"],
    ],
    media: {
      type: "image",
      src: "assets/projects/antiframe/format-select.png",
      alt: "Antiframe의 영상 형식 선택 화면",
    },
    article: "content/posts/02-antiframe.md",
  },
  {
    slug: "ai-drama",
    title: "AI 드라마의 인물·공간·구도를 고정하는 제작 워크플로우",
    thumbnail: "assets/thumbnails/project-03-ai-drama.jpg",
    thumbnailAlt: "공중에 떠 있는 검은색 바디와 다채로운 상단의 영상 슬레이트 3D 아이콘",
    summary:
      "텍스트 프롬프트만으로 통제되지 않던 구도를 사람의 스케치로 먼저 잠그고, 캐릭터 팩·공간 팩·후보 3안과 QC를 연결했습니다. 현재 실제 제작 자료와 진행 상태를 공개합니다.",
    role: "대본·스토리보드, 구도 스케치, 캐스팅·레퍼런스 팩, 첫 프레임 생성·선택과 연속성 QC",
    contribution: "100%",
    contributionNote: "현재 프리프로덕션·첫 프레임 제작 단계 기준",
    tools: [
      ["ChatGPT · Codex", "상"],
      ["이미지 생성 모델", "상"],
      ["Photoshop", "중"],
      ["Premiere Pro", "상"],
      ["ElevenLabs", "중"],
    ],
    media: {
      type: "image",
      src: "assets/projects/ai-drama/preproduction-overview.jpg",
      alt: "AI 드라마 캐릭터 팩과 공간 팩, 첫 프레임 제작 현황",
    },
    article: "content/posts/02-cinematic-layer-in-layer.md",
  },
  {
    slug: "prombank",
    title: "생성형 AI 시행착오를 재사용 가능한 템플릿으로 만든 프롬뱅크",
    thumbnail: "assets/thumbnails/project-04-prombank.jpg",
    thumbnailAlt: "네 개의 프롬프트 말풍선 상자가 공중에 떠 있는 3D 아이콘",
    summary:
      "이미지·영상·TTS·사운드 생성의 성공·실패 사례를 수집하고, 사용 목적·변경 정보·고정 조건·결과 예시로 구조화해 공유한 프롬프트 플랫폼입니다.",
    role: "문제 정의, 학회 제안, 사례 수집·분류, 템플릿 구조와 서비스 기획·제작·운영",
    contribution: "100%",
    contributionNote: "학회 구성원은 생성 사례 제공, 플랫폼 기획·제작·운영은 직접 수행",
    tools: [
      ["ChatGPT · Gemini", "상"],
      ["이미지·영상 생성 도구", "중"],
      ["TTS · 사운드 생성", "중"],
      ["서비스 기획·운영", "상"],
    ],
    media: null,
    article: "content/posts/04-prombank.md",
  },
];

const projectGrid = document.querySelector("#projectGrid");
const homeView = document.querySelector("#homeView");
const articleView = document.querySelector("#articleView");
const readingProgress = document.querySelector("#readingProgress");
const toolOverview = document.querySelector("#toolOverview");
let renderRequest = 0;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function mediaMarkup(project) {
  if (project.media?.type === "youtube" && project.media.youtube) {
    return `
      <div class="video-shell media-embed">
        <iframe
          src="${escapeHtml(youtubeEmbedUrl(project.media.youtube))}"
          title="${escapeHtml(project.title)} 영상"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    `;
  }

  if (project.media?.type === "youtube-pending") {
    return `
      <div class="video-shell youtube-pending">
        <img src="${escapeHtml(project.media.poster)}" alt="" />
        <div>
          <span>YOUTUBE MASTER</span>
          <strong>${escapeHtml(project.media.label)}</strong>
          <small>YouTube 원본 링크 연결 후 이 자리에서 고화질로 재생됩니다.</small>
        </div>
      </div>
    `;
  }

  if (project.media?.type === "embed") {
    return `
      <div class="video-shell media-embed">
        <iframe
          src="${escapeHtml(project.media.src)}"
          title="${escapeHtml(project.title)} 영상"
          loading="lazy"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
    `;
  }

  if (project.media?.type === "image") {
    return `
      <div class="video-shell media-image">
        <img
          src="${escapeHtml(project.media.src)}"
          alt="${escapeHtml(project.media.alt || project.title)}"
          loading="lazy"
        />
      </div>
    `;
  }

  return "";
}

function youtubeEmbedUrl(url) {
  const value = String(url || "").trim();
  const shortLinkMatch = value.match(/youtu\.be\/([a-zA-Z0-9_-]{6,})/);
  const shortsMatch = value.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{6,})/);
  const watchMatch = value.match(/[?&]v=([a-zA-Z0-9_-]{6,})/);
  const embedMatch = value.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{6,})/);
  const id = shortLinkMatch?.[1] || shortsMatch?.[1] || watchMatch?.[1] || embedMatch?.[1] || value;
  return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}`;
}

function renderToolOverview() {
  if (!toolOverview) return;
  toolOverview.innerHTML = toolMatrix
    .map(
      (tool) => `
        <div class="tool-item${tool.wide ? " tool-item--wide" : ""}">
          <div>
            <strong>${escapeHtml(tool.name)}</strong>
            <span>${escapeHtml(tool.use)}</span>
          </div>
          ${tool.level ? `<b>${escapeHtml(tool.level)}</b>` : ""}
        </div>
      `,
    )
    .join("");
}

function renderProjects() {
  projectGrid.innerHTML = projects
    .map(
      (project) => `
        <a class="project-card" href="#project/${project.slug}">
          <div class="project-thumbnail">
            <img
              src="${escapeHtml(project.thumbnail)}"
              alt="${escapeHtml(project.thumbnailAlt)}"
              width="800"
              height="800"
            />
          </div>
          <div class="project-content">
            <h3>${escapeHtml(project.title)}</h3>
            <p class="project-summary">${escapeHtml(project.summary)}</p>
          </div>
          <span class="project-arrow" aria-hidden="true">→</span>
        </a>
      `,
    )
    .join("");
}

function projectRequirementsMarkup(project) {
  return `
    <section class="project-requirements" aria-label="담당 업무, 기여도와 사용 도구">
      <div class="project-requirements-main">
        <div>
          <span>담당 업무</span>
          <strong>${escapeHtml(project.role)}</strong>
        </div>
        <div>
          <span>기여도</span>
          <strong>${escapeHtml(project.contribution)}</strong>
          <small>${escapeHtml(project.contributionNote)}</small>
        </div>
      </div>
      <div class="project-tools">
        <span>사용 툴 · 숙련도</span>
        <div>
          ${project.tools
            .map(([name, level]) => `<p><strong>${escapeHtml(name)}</strong><b>${escapeHtml(level)}</b></p>`)
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function inlineMarkdown(text) {
  let result = escapeHtml(String(text));
  result = result.replace(/&lt;small&gt;([\s\S]*?)&lt;\/small&gt;/g, "<small>$1</small>");
  result = result.replace(
    /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
    '<a href="$2" target="_blank" rel="noreferrer">$1</a>',
  );
  result = result.replace(/`([^`]+)`/g, "<code>$1</code>");
  result = result.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  result = result.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return result;
}

function markdownToHtml(markdown) {
  return parseMarkdownBlocks(markdown.replace(/\r/g, "").split("\n"));
}

function parseMarkdownBlocks(lines, state = { sectionIndex: 0 }) {
  const output = [];
  let paragraph = [];
  let listType = null;
  let listItems = [];
  let tableRows = [];
  let codeLines = [];
  let inCode = false;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    const text = paragraph
      .map((line) => (line.endsWith("  ") ? `${line.trimEnd()}\u0000BR\u0000` : line))
      .join(" ");
    output.push(`<p>${inlineMarkdown(text).replaceAll("\u0000BR\u0000", "<br>")}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (!listItems.length) return;
    output.push(
      `<${listType}>${listItems.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</${listType}>`,
    );
    listType = null;
    listItems = [];
  };

  const flushTable = () => {
    if (!tableRows.length) return;
    const rows = tableRows.map((row) =>
      row
        .slice(1, -1)
        .split("|")
        .map((cell) => cell.trim()),
    );
    const hasSeparator = rows[1]?.every((cell) => /^:?-{3,}:?$/.test(cell));
    const head = rows[0];
    const body = hasSeparator ? rows.slice(2) : rows.slice(1);
    output.push(`
      <div class="table-scroll">
        <table>
          <thead><tr>${head.map((cell) => `<th>${inlineMarkdown(cell)}</th>`).join("")}</tr></thead>
          <tbody>
            ${body
              .map(
                (row) =>
                  `<tr>${row.map((cell) => `<td>${inlineMarkdown(cell)}</td>`).join("")}</tr>`,
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `);
    tableRows = [];
  };

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const trimmed = line.trim();

    if (inCode) {
      if (trimmed.startsWith("```")) {
        output.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
        codeLines = [];
        inCode = false;
      } else {
        codeLines.push(line);
      }
      continue;
    }

    if (trimmed.startsWith("```")) {
      flushParagraph();
      flushList();
      flushTable();
      inCode = true;
      continue;
    }

    if (trimmed.startsWith(">")) {
      flushParagraph();
      flushList();
      flushTable();
      const quoteLines = [];
      while (index < lines.length && lines[index].trim().startsWith(">")) {
        quoteLines.push(lines[index].trim().replace(/^>\s?/, ""));
        index += 1;
      }
      index -= 1;
      output.push(`<blockquote>${parseMarkdownBlocks(quoteLines, state)}</blockquote>`);
      continue;
    }

    if (/^\|.*\|\s*$/.test(trimmed)) {
      flushParagraph();
      flushList();
      tableRows.push(trimmed);
      const next = lines[index + 1]?.trim() || "";
      if (!/^\|.*\|\s*$/.test(next)) flushTable();
      continue;
    }
    flushTable();

    const heading = trimmed.match(/^(#{2,4})\s+(.+)$/);
    const unordered = trimmed.match(/^[-*]\s+(.+)$/);
    const ordered = trimmed.match(/^\d+\.\s+(.+)$/);
    const image = trimmed.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/);

    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }

    if (trimmed === "---") {
      flushParagraph();
      flushList();
      output.push("<hr />");
      continue;
    }

    const artifact = trimmed.match(/^\[\[([a-z0-9-]+)\]\]$/i);
    if (artifact) {
      flushParagraph();
      flushList();
      output.push(portfolioArtifactMarkup(artifact[1]));
      continue;
    }

    if (image) {
      flushParagraph();
      flushList();
      output.push(`
        <figure class="article-figure">
          <img src="${escapeHtml(image[2])}" alt="${escapeHtml(image[1])}" loading="lazy" />
          ${image[1] ? `<figcaption>${inlineMarkdown(image[1])}</figcaption>` : ""}
        </figure>
      `);
      continue;
    }

    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1].length;
      const id = level === 2 ? `section-${++state.sectionIndex}` : "";
      output.push(`<h${level}${id ? ` id="${id}"` : ""}>${inlineMarkdown(heading[2])}</h${level}>`);
      continue;
    }

    if (unordered || ordered) {
      flushParagraph();
      const nextType = unordered ? "ul" : "ol";
      if (listType && listType !== nextType) flushList();
      listType = nextType;
      listItems.push((unordered || ordered)[1]);
      continue;
    }

    flushList();
    paragraph.push(trimmed);
  }

  if (inCode) output.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
  flushParagraph();
  flushList();
  flushTable();
  return output.join("");
}

function antiframeDemoMarkup() {
  return `
    <section class="antiframe-demo" data-antiframe-demo aria-labelledby="demoTitle">
      <div class="demo-head">
        <p>STATIC PRODUCT DEMO · API NOT CONNECTED</p>
        <h3 id="demoTitle">필요한 장면만 말로 수정해보기</h3>
        <span>아래 입력은 외부 API를 호출하지 않습니다. 실제 제품의 장면 선택 → 자연어 요청 → 변경 범위 확인 흐름만 재현했습니다.</span>
      </div>
      <div class="demo-layout">
        <div class="demo-scenes" role="list" aria-label="영상 초안 장면">
          <button class="demo-scene is-selected" type="button" data-scene="0" role="listitem">
            <span>01</span>
            <strong>문제 제기</strong>
            <small>도시 열섬 현상을 한 문장으로 소개</small>
          </button>
          <button class="demo-scene" type="button" data-scene="1" role="listitem">
            <span>02</span>
            <strong>원인 설명</strong>
            <small>아스팔트와 건물의 열 흡수 구조</small>
          </button>
          <button class="demo-scene" type="button" data-scene="2" role="listitem">
            <span>03</span>
            <strong>대안 제시</strong>
            <small>녹지와 차열 포장의 역할</small>
          </button>
        </div>
        <div class="demo-editor">
          <div class="demo-preview" aria-live="polite">
            <div>
              <span>선택한 장면</span>
              <strong data-demo-title>01 · 문제 제기</strong>
            </div>
            <dl>
              <div><dt>내레이션</dt><dd data-demo-narration>여름 도심은 주변보다 더 뜨거워집니다.</dd></div>
              <div><dt>화면</dt><dd data-demo-visual>열화상 카메라로 본 도심 전경</dd></div>
              <div><dt>움직임</dt><dd data-demo-motion>천천히 줌 인</dd></div>
            </dl>
          </div>
          <div class="demo-chips" aria-label="수정 요청 예시">
            <button type="button" data-request="내레이션을 더 짧고 쉽게 바꿔줘">더 짧고 쉽게</button>
            <button type="button" data-request="화면을 수치가 보이는 자료 중심으로 바꿔줘">자료 중심으로</button>
            <button type="button" data-request="전환과 움직임을 더 차분하게 바꿔줘">더 차분하게</button>
          </div>
          <form class="demo-form">
            <label for="demoRequest">수정할 내용을 말로 입력</label>
            <div>
              <input id="demoRequest" name="request" value="내레이션을 더 짧고 쉽게 바꿔줘" autocomplete="off" />
              <button type="submit">변경 범위 확인</button>
            </div>
          </form>
          <div class="demo-result" data-demo-result aria-live="polite">
            <span>대기</span>
            <p>장면을 고르고 수정 요청을 적용해보세요.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function portfolioArtifactMarkup(type) {
  if (type === "antiframe-demo") return antiframeDemoMarkup();

  if (type === "short-output-gallery") {
    const groups = ["점괘보는 공녀님", "전령새 왕녀님"];
    return `
      <section class="artifact-block" aria-labelledby="outputGalleryTitle">
        <div class="artifact-heading">
          <span>FINAL DELIVERABLES · YOUTUBE MASTER</span>
          <h3 id="outputGalleryTitle">두 작품의 회차형·프로모션형 완성 영상 9편</h3>
          <p>네이버웹툰 지원용 포트폴리오 PDF에 수록한 YouTube 원본을 직접 연결했습니다. 사이트용 재압축 없이 화질과 사운드를 그대로 검토할 수 있습니다.</p>
        </div>
        ${groups
          .map((group) => {
            const videos = shortAnimationVideos.filter((video) => video.group === group);
            return `
              <section class="video-group" aria-label="${escapeHtml(group)} 결과 영상">
                <div class="video-group-title">
                  <h4>${escapeHtml(group)}</h4>
                  <span>${videos.length} DELIVERABLES</span>
                </div>
                <div class="youtube-gallery">
                  ${videos
                    .map(
                      (video) => `
                        <figure class="youtube-card">
                          ${
                            video.youtube
                              ? `<iframe
                                  src="${escapeHtml(youtubeEmbedUrl(video.youtube))}"
                                  title="${escapeHtml(`${video.group} ${video.episode}`)}"
                                  loading="lazy"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  referrerpolicy="strict-origin-when-cross-origin"
                                  allowfullscreen
                                ></iframe>`
                              : `<div class="youtube-card-pending">
                                  <img src="${escapeHtml(video.poster)}" alt="" loading="lazy" />
                                  <span>YOUTUBE LINK</span>
                                  <strong>고화질 영상 연결 예정</strong>
                                </div>`
                          }
                          <figcaption>
                            <strong>${escapeHtml(video.episode)}</strong>
                            <span>${escapeHtml(video.duration)} · 9:16</span>
                          </figcaption>
                        </figure>
                      `,
                    )
                    .join("")}
                </div>
              </section>
            `;
          })
          .join("")}
        <p class="artifact-note">회차형은 사건 순서와 감정 연결을, 프로모션형은 첫 장면의 후킹과 원작 유입을 기준으로 장면 선택과 편집 밀도를 달리했습니다.</p>
      </section>
    `;
  }

  if (type === "motion-comparison") {
    return `
      <section class="artifact-block" aria-labelledby="motionCompareTitle">
        <div class="artifact-heading">
          <span>GENERATION CANDIDATES</span>
          <h3 id="motionCompareTitle">동일 장면의 모션 후보를 나란히 검수</h3>
          <p>한 번의 결과를 정답으로 채택하지 않고, 같은 첫 프레임에서 생성한 후보를 얼굴 보존·행동 순서·종료 프레임 기준으로 비교했습니다.</p>
        </div>
        <div class="clip-comparison">
          <figure>
            <iframe
              src="${escapeHtml(youtubeEmbedUrl("https://youtube.com/shorts/rfWtxjCl_Ek?feature=share"))}"
              title="Kling 생성 샘플 01"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <figcaption><strong>Candidate A</strong><span>표정, 시선과 인물 고정 상태 확인</span></figcaption>
          </figure>
          <figure>
            <iframe
              src="${escapeHtml(youtubeEmbedUrl("https://youtube.com/shorts/pBQAog5Hy1M?feature=share"))}"
              title="Kling 생성 샘플 02"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <figcaption><strong>Candidate B</strong><span>동작 순서, 움직임 범위와 연결 가능 구간 확인</span></figcaption>
          </figure>
        </div>
        <p class="artifact-note">두 클립은 완성본이 아니라 편집 전 생성 후보입니다. 포트폴리오에서는 좋은 결과만 숨기지 않고 실제 선택 단위를 함께 제시합니다.</p>
      </section>
    `;
  }

  if (type === "short-postproduction-videos") {
    const processVideos = [
      {
        title: "다중 화자 분리 생성·합성",
        description: "화자별 발화 구간을 따로 생성한 뒤 Premiere Pro에서 타이밍을 맞춰 합성한 결과",
        youtube: "https://youtube.com/shorts/ahtOHt9TQtE?feature=share",
      },
      {
        title: "오디오 선행 씬 전환",
        description: "다음 장면의 BGM·효과음을 화면보다 먼저 들려줘 장면 전환을 준비한 편집 결과",
        youtube: "https://youtube.com/shorts/RMEUm-_Mjfg?feature=share",
      },
    ];
    return `
      <section class="artifact-block" aria-labelledby="postproductionVideoTitle">
        <div class="artifact-heading">
          <span>POST-PRODUCTION EVIDENCE · YOUTUBE</span>
          <h3 id="postproductionVideoTitle">생성 결과를 편집 문법으로 완성한 사례</h3>
          <p>생성 모델이 한 번에 해결하기 어려운 화자 제어와 씬 연결을 분리 생성·타임라인 합성·오디오 선행 방식으로 해결했습니다.</p>
        </div>
        <div class="clip-comparison">
          ${processVideos
            .map(
              (video) => `
                <figure>
                  <iframe
                    src="${escapeHtml(youtubeEmbedUrl(video.youtube))}"
                    title="${escapeHtml(video.title)}"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                  <figcaption>
                    <strong>${escapeHtml(video.title)}</strong>
                    <span>${escapeHtml(video.description)}</span>
                  </figcaption>
                </figure>
              `,
            )
            .join("")}
        </div>
      </section>
    `;
  }

  if (type === "speech-bubble-gallery") {
    const items = [
      ["speech_bubble_01_whisper.png", "속삭임", "낮은 발화와 긴장"],
      ["speech_bubble_02_alert.png", "경고", "강한 발화와 즉각적인 반응"],
      ["speech_bubble_03_inner_voice.png", "내면 독백", "행동과 분리된 생각"],
      ["speech_bubble_04_support.png", "보조 대사", "주요 발화 사이의 정보"],
      ["speech_bubble_05_question.png", "질문", "상대 반응을 여는 발화"],
      ["speech_bubble_06_trailing.png", "말끝 흐림", "정적과 감정 여운"],
    ];
    return `
      <section class="artifact-block" aria-labelledby="bubbleGalleryTitle">
        <div class="artifact-heading">
          <span>DIALOGUE SYSTEM</span>
          <h3 id="bubbleGalleryTitle">말풍선을 텍스트가 아닌 연기·타이밍 정보로 분류</h3>
          <p>말풍선의 모양과 문장 부호를 발화 강도, 정적, 화자 전환과 TTS 디렉팅의 단서로 사용했습니다.</p>
        </div>
        <div class="bubble-gallery">
          ${items
            .map(
              ([src, title, description]) => `
                <figure>
                  <img src="assets/projects/short-animation/speech-bubbles/${src}" alt="${title} 말풍선 예시" loading="lazy" />
                  <figcaption><strong>${title}</strong><span>${description}</span></figcaption>
                </figure>
              `,
            )
            .join("")}
        </div>
      </section>
    `;
  }

  if (type === "short-workflow") {
    const steps = [
      ["01", "회차 분석", "서사 기능·감정 전환·발화 주체 표시", "장면 후보와 제외 사유"],
      ["02", "포맷 설계", "에피소드·티저·요약 목적별 정보 밀도 결정", "러닝타임과 컷 구조"],
      ["03", "첫 프레임", "PSD 분해, 9:16 확장, 원작 보존 검수", "영상 생성 입력 프레임"],
      ["04", "모션 지시", "Layer-in-Layer로 고정·움직임·금지 조건 분리", "장면별 Motion Brief"],
      ["05", "후보 생성", "같은 조건의 결과를 비교하고 통과 구간 선택", "통과·보류·재생성 판단"],
      ["06", "음성·대화", "화자별 TTS와 발화 전·중·후 클립 설계", "캐릭터별 음성과 합성 소스"],
      ["07", "편집·사운드", "리액션 길이, 시선축, BGM·SFX와 말풍선 조립", "감상 가능한 마스터"],
      ["08", "QC·기록", "IP 보존, 연속성, 포맷 적합성, 실패 원인 기록", "재현 가능한 제작 기준"],
    ];
    return `
      <section class="artifact-block artifact-workflow" aria-labelledby="workflowTitle">
        <div class="artifact-heading">
          <span>END-TO-END WORKFLOW</span>
          <h3 id="workflowTitle">산출물과 되돌아갈 조건까지 정의한 8단계 제작 흐름</h3>
        </div>
        <ol>
          ${steps
            .map(
              ([number, title, action, output]) => `
                <li>
                  <span>${number}</span>
                  <div><strong>${title}</strong><p>${action}</p></div>
                  <small>${output}</small>
                </li>
              `,
            )
            .join("")}
        </ol>
      </section>
    `;
  }

  if (type === "antiframe-system-map") {
    return `
      <section class="artifact-block system-map" aria-labelledby="systemMapTitle">
        <div class="artifact-heading">
          <span>SERVICE ARCHITECTURE</span>
          <h3 id="systemMapTitle">입력·생성·검수·렌더를 상태로 연결한 구조</h3>
          <p>브라우저에서 무거운 렌더링까지 처리하지 않고, 웹의 제작 상태와 로컬 렌더 워커를 작업 큐로 분리했습니다.</p>
        </div>
        <div class="system-flow">
          <div><span>01</span><strong>Next.js Web</strong><small>대본 입력·장면 검수·자연어 수정</small></div>
          <b aria-hidden="true">→</b>
          <div><span>02</span><strong>Generation APIs</strong><small>대본 구조화·음성·자료 후보</small></div>
          <b aria-hidden="true">→</b>
          <div><span>03</span><strong>Supabase</strong><small>프로젝트·파일·render_jobs 큐</small></div>
          <b aria-hidden="true">→</b>
          <div><span>04</span><strong>Mac Render Worker</strong><small>패키지 수집·After Effects 실행</small></div>
          <b aria-hidden="true">→</b>
          <div><span>05</span><strong>Final MP4</strong><small>업로드·상태 완료·다운로드</small></div>
        </div>
      </section>
    `;
  }

  if (type === "antiframe-change-scope") {
    const rows = [
      ["발음만 수정", "tts_script", "화면 자막·장면 자료·다른 장면"],
      ["문장을 쉽게 수정", "narration + tts_script", "장면 자료가 여전히 맞으면 유지"],
      ["화면 자료만 수정", "scene description + 검색·생성 prompt", "내레이션·목소리"],
      ["움직임만 수정", "effect type 또는 해당 장면 영상", "앞뒤 장면·대본"],
      ["장면 전체 재구성", "선택 장면의 텍스트·자료·음성", "프로젝트 설정·다른 장면"],
    ];
    return `
      <section class="artifact-block change-scope" aria-labelledby="scopeTitle">
        <div class="artifact-heading">
          <span>CHANGE-SCOPE POLICY</span>
          <h3 id="scopeTitle">자연어 요청을 ‘무엇을 다시 만들지’로 변환</h3>
        </div>
        <div class="scope-table" role="table" aria-label="수정 요청별 변경 범위">
          <div class="scope-row scope-row--head" role="row">
            <span role="columnheader">사용자 요청</span><span role="columnheader">변경</span><span role="columnheader">보존</span>
          </div>
          ${rows
            .map(
              ([request, change, preserve]) => `
                <div class="scope-row" role="row">
                  <strong role="cell">${request}</strong><span role="cell">${change}</span><span role="cell">${preserve}</span>
                </div>
              `,
            )
            .join("")}
        </div>
      </section>
    `;
  }

  if (type === "drama-preproduction-gallery") {
    const items = [
      ["storyboard-final.jpg", "스토리보드 최종안", "대사·장면 기능·첫 프레임·움직임·음향과 길이를 컷 단위로 잠금"],
      ["casting-overview.jpg", "캐스팅 후보와 선택", "개별 이미지의 미감보다 반복 생성 가능한 얼굴 특징을 기준으로 비교"],
      ["character-angle-pack.jpg", "캐릭터 각도 팩", "정면·45도·측면에서 얼굴·헤어·체형이 유지되는 기준"],
      ["wardrobe-pack.jpg", "의상 팩", "장면과 인물별 의상·소재·실루엣을 컷마다 다시 정의하지 않도록 고정"],
      ["expression-pack.jpg", "표정 팩", "중립부터 압박·당황·긴장까지 허용할 연기 범위를 기준 이미지로 관리"],
      ["location-pack.jpg", "청문회장 공간 팩", "좌석·출입구·증인석·카메라 축과 광원을 여러 시점으로 잠금"],
      ["preproduction-overview.jpg", "첫 프레임 전 준비", "캐릭터·공간·의상·표정 기준을 한 화면에서 점검"],
      ["generated-candidates-01.jpg", "컷별 후보 3안", "구도 정확도·인물 일관성·영상화 가능성·앞뒤 연결성으로 선택"],
    ];
    return `
      <section class="artifact-block" aria-labelledby="dramaEvidenceTitle">
        <div class="artifact-heading">
          <span>ACTUAL PRODUCTION ARTIFACTS</span>
          <h3 id="dramaEvidenceTitle">대본에서 첫 프레임 후보까지 실제 제작 자료</h3>
          <p>완성 예정 항목을 설명으로 채우지 않고, 현재까지 제작이 끝난 자료와 그 자료가 다음 공정에서 수행하는 역할을 함께 제시합니다.</p>
        </div>
        <div class="evidence-gallery">
          ${items
            .map(
              ([src, title, description]) => `
                <figure>
                  <img src="assets/projects/ai-drama/${src}" alt="${title}" loading="lazy" />
                  <figcaption><strong>${title}</strong><span>${description}</span></figcaption>
                </figure>
              `,
            )
            .join("")}
        </div>
      </section>
    `;
  }

  if (type === "drama-failure-gallery") {
    return `
      <section class="artifact-block" aria-labelledby="dramaFailureTitle">
        <div class="artifact-heading">
          <span>REJECTED OUTPUTS · REVISION ROUTE</span>
          <h3 id="dramaFailureTitle">그럴듯해도 편집할 수 없는 결과를 탈락시킨 기준</h3>
          <p>AI가 임의의 글자·아이콘·UI를 생성하면 개별 이미지는 풍부해 보이지만 컷 간 정보와 후반 합성 기준이 무너집니다.</p>
        </div>
        <div class="failure-gallery">
          <figure>
            <img src="assets/projects/ai-drama/rejected-ui-error.jpg" alt="청문회 명패와 화면에 임의 기호가 생성된 탈락 결과" loading="lazy" />
            <figcaption><strong>임의 기호·제어 아이콘</strong><span>정확한 그래픽이 필요한 영역은 비워 두고 후반 합성하도록 입력 단계로 되돌림</span></figcaption>
          </figure>
          <figure>
            <img src="assets/projects/ai-drama/rejected-pseudo-ui.jpg" alt="화면에 가짜 텍스트와 UI가 생성된 탈락 결과" loading="lazy" />
            <figcaption><strong>가짜 텍스트·정보 위계 붕괴</strong><span>시각적 풍부함보다 편집 가능한 빈 영역과 정보 책임을 우선해 탈락</span></figcaption>
          </figure>
        </div>
      </section>
    `;
  }

  if (type === "prombank-template") {
    const cards = [
      ["01", "사용 목적", "어떤 콘텐츠와 장면을 만들기 위한 템플릿인지 먼저 설명"],
      ["02", "변경 정보", "인물·표정·시선·카메라·장소처럼 사용자가 바꿀 변수를 분리"],
      ["03", "고정 조건", "유지할 대상, 금지 변형, 출력 길이와 형식을 명시"],
      ["04", "결과·수정 기록", "생성 예시와 실패 원인, 다음 시도에서 바꾼 조건을 함께 보관"],
    ];
    return `
      <section class="artifact-block prombank-artifact" aria-labelledby="prombankTemplateTitle">
        <div class="artifact-heading">
          <span>REUSABLE PROMPT CASE</span>
          <h3 id="prombankTemplateTitle">한 문장을 복사하는 자료가 아닌 네 칸의 제작 기록</h3>
          <p>프롬프트의 길이를 경쟁하지 않고, 다른 제작자가 자신의 장면에 맞게 바꾸면서도 핵심 조건을 잃지 않도록 사례를 구조화했습니다.</p>
        </div>
        <ol class="template-cards">
          ${cards
            .map(
              ([number, title, description]) => `
                <li><span>${number}</span><strong>${title}</strong><p>${description}</p></li>
              `,
            )
            .join("")}
        </ol>
        <div class="prombank-metrics">
          <div><span>MVP 공개 후 첫 4주</span><strong>1,311</strong><small>고유 방문자</small></div>
          <div><span>동일 기간</span><strong>3,285</strong><small>방문 세션</small></div>
        </div>
      </section>
    `;
  }

  return "";
}

function initializeAntiframeDemo(container) {
  const demo = container.querySelector("[data-antiframe-demo]");
  if (!demo) return;

  const scenes = [
    {
      title: "01 · 문제 제기",
      narration: "여름 도심은 주변보다 더 뜨거워집니다.",
      visual: "열화상 카메라로 본 도심 전경",
      motion: "천천히 줌 인",
    },
    {
      title: "02 · 원인 설명",
      narration: "아스팔트와 건물은 낮 동안 받은 열을 오래 저장합니다.",
      visual: "도로와 건물 표면의 열 축적 비교",
      motion: "좌우 비교 화면",
    },
    {
      title: "03 · 대안 제시",
      narration: "도시의 녹지와 차열 포장은 체감 온도를 낮추는 방법입니다.",
      visual: "녹지 조성 전후의 거리",
      motion: "전후 장면 교차",
    },
  ];
  let selected = 0;
  const title = demo.querySelector("[data-demo-title]");
  const narration = demo.querySelector("[data-demo-narration]");
  const visual = demo.querySelector("[data-demo-visual]");
  const motion = demo.querySelector("[data-demo-motion]");
  const result = demo.querySelector("[data-demo-result]");
  const input = demo.querySelector("input");

  const renderScene = () => {
    const scene = scenes[selected];
    title.textContent = scene.title;
    narration.textContent = scene.narration;
    visual.textContent = scene.visual;
    motion.textContent = scene.motion;
  };

  demo.querySelectorAll("[data-scene]").forEach((button) => {
    button.addEventListener("click", () => {
      selected = Number(button.dataset.scene);
      demo.querySelectorAll("[data-scene]").forEach((item) => item.classList.remove("is-selected"));
      button.classList.add("is-selected");
      renderScene();
      result.innerHTML = `<span>장면 선택</span><p>${escapeHtml(scenes[selected].title)}의 제작 요소를 불러왔습니다.</p>`;
    });
  });

  demo.querySelectorAll("[data-request]").forEach((button) => {
    button.addEventListener("click", () => {
      input.value = button.dataset.request;
      input.focus();
    });
  });

  demo.querySelector(".demo-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const request = input.value.trim();
    if (!request) {
      result.innerHTML = "<span>입력 필요</span><p>수정할 내용을 자연어로 입력해 주세요.</p>";
      return;
    }

    const changed = [];
    if (/짧|쉽|내레이션|대본/.test(request)) {
      scenes[selected].narration =
        selected === 0 ? "도시는 여름에 더 뜨거워집니다." : scenes[selected].narration.split(" ").slice(0, 6).join(" ") + ".";
      changed.push("내레이션");
    }
    if (/화면|자료|수치|이미지|영상/.test(request)) {
      scenes[selected].visual = "온도 수치가 표시된 비교 그래프와 도심 자료 화면";
      changed.push("화면 자료");
    }
    if (/차분|느리|전환|움직임/.test(request)) {
      scenes[selected].motion = "카메라 고정 · 0.4초 디졸브";
      changed.push("장면 움직임");
    }
    if (!changed.length) {
      changed.push("내레이션·화면 검토");
    }

    renderScene();
    result.innerHTML = `<span>적용 범위</span><p><strong>${escapeHtml(changed.join(", "))}</strong>만 다시 만들도록 분리했습니다. 다른 장면은 유지됩니다.</p>`;
  });
}

async function renderArticle(project) {
  const requestId = ++renderRequest;
  homeView.hidden = true;
  articleView.hidden = false;
  document.body.classList.add("is-article");
  document.title = `${project.title} | AI 콘텐츠 포트폴리오`;
  articleView.innerHTML = `
    <header class="article-hero">
      <div class="article-hero-inner">
        <a class="back-link" href="#work"><span aria-hidden="true">←</span> 프로젝트 목록</a>
        <h1>${escapeHtml(project.title)}</h1>
        <p class="article-lead">${escapeHtml(project.summary)}</p>
        <div class="article-byline">
          <div class="author-avatar" aria-hidden="true">S</div>
          <div>
            <strong>최수호</strong>
            <p data-read-meta>상세 제작 기록 · 분량 계산 중</p>
          </div>
        </div>
      </div>
    </header>
    ${projectRequirementsMarkup(project)}
    ${project.media ? `<div class="article-video">${mediaMarkup(project)}</div>` : ""}
    <div class="article-body"><p class="article-loading">제작 기록을 불러오는 중입니다.</p></div>
  `;
  window.scrollTo({ top: 0, behavior: "auto" });

  try {
    const response = await fetch(project.article);
    if (!response.ok) throw new Error("article load failed");
    const markdown = await response.text();
    if (requestId !== renderRequest || location.hash !== `#project/${project.slug}`) return;
    const articleBody = articleView.querySelector(".article-body");
    const articleCharacterCount = markdown
      .replace(/!\[[^\]]*\]\([^)]+\)|\[\[[^\]]+\]\]|[#>*`|_-]/g, "")
      .replace(/\s/g, "").length;
    const readMinutes = Math.max(4, Math.ceil(articleCharacterCount / 800));
    const readMeta = articleView.querySelector("[data-read-meta]");
    if (readMeta) {
      readMeta.textContent = `${articleCharacterCount.toLocaleString("ko-KR")}자 · 약 ${readMinutes}분 분량`;
    }
    articleBody.innerHTML = markdownToHtml(markdown);
    initializeAntiframeDemo(articleBody);
    const next = projects[(projects.indexOf(project) + 1) % projects.length];
    articleView.insertAdjacentHTML(
      "beforeend",
      `
        <a class="article-next" href="#project/${next.slug}">
          <span>NEXT PROJECT<strong>${escapeHtml(next.title)}</strong></span>
          <b aria-hidden="true">↗</b>
        </a>
      `,
    );
  } catch {
    const articleBody = articleView.querySelector(".article-body");
    if (articleBody) {
      articleBody.innerHTML =
        '<p class="article-error">상세 제작 기록을 불러오지 못했습니다. 잠시 후 다시 확인해 주세요.</p>';
    }
  }
}

function showHome(anchor = "home") {
  ++renderRequest;
  articleView.hidden = true;
  articleView.innerHTML = "";
  homeView.hidden = false;
  document.body.classList.remove("is-article");
  document.title = "AI 콘텐츠 제작과 제작 워크플로우";

  requestAnimationFrame(() => {
    if (anchor === "home") {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    document.querySelector(`#${anchor}`)?.scrollIntoView({ block: "start" });
  });
}

function route() {
  const projectMatch = location.hash.match(/^#project\/(.+)$/);
  if (projectMatch) {
    const project = projects.find((item) => item.slug === projectMatch[1]);
    if (project) {
      renderArticle(project);
      return;
    }
  }

  const anchor = location.hash.replace(/^#/, "") || "home";
  showHome(anchor === "work" ? "work" : "home");
}

function updateProgress() {
  if (!readingProgress) return;
  if (!document.body.classList.contains("is-article")) {
    readingProgress.style.width = "0";
    return;
  }
  const available = document.documentElement.scrollHeight - window.innerHeight;
  const value = available > 0 ? Math.min(100, (window.scrollY / available) * 100) : 0;
  readingProgress.style.width = `${value}%`;
}

renderProjects();
renderToolOverview();
route();
window.addEventListener("hashchange", route);
window.addEventListener("scroll", updateProgress, { passive: true });
