const toolMatrix = [
  { name: "Premiere", level: "상", use: "컷 편집, 대사 싱크, 색보정, 사운드 믹싱" },
  { name: "After Effects", level: "중", use: "모션 그래픽, 애니메이션" },
  { name: "Photoshop", level: "중", use: "레이어 분리, 마스킹, 이미지 합성·보정" },
];

const shortAnimationVideos = [
  {
    group: "점괘보는 공녀님",
    episode: "9화",
    duration: "2분 24초",
    youtube: "https://youtube.com/shorts/PwsN7nyzPyk?feature=share",
  },
  {
    group: "점괘보는 공녀님",
    episode: "10화",
    duration: "2분 29초",
    youtube: "https://youtube.com/shorts/W5mDMJXmhKc?feature=share",
  },
  {
    group: "점괘보는 공녀님",
    episode: "11화",
    duration: "1분 23초",
    youtube: "https://youtube.com/shorts/qz6310ZOMho?feature=share",
  },
  {
    group: "점괘보는 공녀님",
    episode: "9화 프로모션 · 터치형",
    duration: "15초",
    youtube: "https://youtube.com/shorts/Bt2eeOXGEI8?feature=share",
  },
  {
    group: "점괘보는 공녀님",
    episode: "10화 프로모션 · 터치형",
    duration: "17초",
    youtube: "https://youtube.com/shorts/mzAJt61oDEk?feature=share",
  },
  {
    group: "점괘보는 공녀님",
    episode: "1~6화 프로모션",
    duration: "53초",
    youtube: "https://youtube.com/shorts/Unnp3GSet9M?feature=share",
  },
  {
    group: "전령새 왕녀님",
    episode: "1화",
    duration: "1분 52초",
    youtube: "https://youtube.com/shorts/wefQYggOTfQ?feature=share",
  },
  {
    group: "전령새 왕녀님",
    episode: "2화",
    duration: "1분 26초",
    youtube: "https://youtube.com/shorts/XeuteDMTU98?feature=share",
  },
  {
    group: "전령새 왕녀님",
    episode: "3화",
    duration: "1분 58초",
    youtube: "https://youtube.com/shorts/tGgkaAfPPBI",
  },
];

function shortAnimationDisplayTitle(video) {
  const episode = video.episode.replace(" · 터치형", "");
  return `${video.group} AI 애니메이션 ${episode}`;
}

function shortAnimationVideoDescription(video) {
  if (video.episode.includes("프로모션")) {
    return "프로모션 편집 · 첫 장면의 주목도와 핵심 사건 전달에 맞춰 장면 길이와 사운드 밀도를 조정했습니다.";
  }
  if (video.group === "전령새 왕녀님") {
    return "에피소드형 애니메이션 · 인물 관계와 대화 흐름이 이어지도록 발화와 리액션을 장면 단위로 편집했습니다.";
  }
  return "에피소드형 애니메이션 · 원작의 사건 순서와 감정선을 유지하면서 모션·대사·사운드를 한 편으로 구성했습니다.";
}

const projects = [
  {
    slug: "webtoon-ai-short-animation",
    title: "자사 IP 기반 AI 애니메이션 제작",
    period: "2025.08 - 2026.04",
    thumbnail: "assets/thumbnails/project-01-ai-animation-v2.jpg",
    thumbnailAlt: "컷과 말풍선이 있는 펼친 만화책 3D 아이콘",
    recommended: true,
    summary:
      "웹툰 IP 분석부터 이미지·영상 생성, 음성·사운드 제작, 편집, 품질 검수까지 전 과정을 수행했습니다. 원작의 그림체를 유지하면서 필요한 동작만 제어하는 ‘레이어 인 레이어’ 제작 방식을 정립했습니다.",
    role: "웹툰 IP 분석, 이미지·영상 생성, 음성·사운드 제작, 편집과 품질 검수 전 과정",
    contribution: "100%",
    contributionNote: "",
    media: null,
    article: "content/posts/01-webtoon-ai-short-animation.md",
    annotations: [
      ["첫 프레임", "영상 생성의 출발 이미지입니다. 인물·배경·구도와 움직임이 시작될 상태를 이 단계에서 확정했습니다."],
      ["Layer-in-Layer", "화면을 고정 영역, 주요 동작, 미세 연기와 금지 조건으로 나눠 필요한 요소만 움직이는 제작 방식입니다."],
      ["발화 단위", "한 인물이 말하기 전, 말하는 동안, 말이 끝난 뒤의 반응을 나눈 편집 단위입니다."],
    ],
  },
  {
    slug: "antiframe",
    title: "자연어 기반 AI 영상 편집 툴 개발",
    period: "2026.05 - 현재",
    thumbnail: "assets/thumbnails/project-02-antiframe.jpg",
    thumbnailAlt: "공중에 떠 있는 파란색과 보라색 채팅 말풍선 3D 아이콘",
    summary:
      "대본 입력–영상 초안 생성–장면 검토–자연어 수정–부분 재생성으로 이어지는 AI 영상 제작 과정을 구현했습니다. 제작 자동화 구조와 사용자 검증 과정을 수록했습니다.",
    role: "제품 기획, UX·정보 구조, 프론트엔드·API, 생성 파이프라인, 렌더 워커 구현과 사용자 검증",
    contribution: "100%",
    contributionNote: "",
    media: null,
    article: "content/posts/02-antiframe.md",
    annotations: [
      ["부분 재실행", "수정 요청과 관련된 장면·음성·자료만 다시 만들고 승인된 결과는 유지하는 방식입니다."],
      ["Human Checkpoint", "제작 비용이나 결과 방향이 크게 바뀌는 지점에서 사용자가 확인하고 다음 단계로 넘기는 절차입니다."],
      ["렌더 워커", "웹에서 확정한 제작 패키지를 받아 After Effects 렌더링을 수행하는 별도 실행 프로그램입니다."],
    ],
  },
  {
    slug: "ai-drama",
    title: "AI 드라마 제작과 인물·공간의 일관성 연구",
    period: "2026.07 - 현재",
    thumbnail: "assets/thumbnails/project-03-ai-drama.jpg",
    thumbnailAlt: "공중에 떠 있는 검은색 바디와 다채로운 상단의 영상 슬레이트 3D 아이콘",
    summary:
      "인물과 공간의 설정 자료 및 장면 간 연속성 검수 기준을 활용해 등장인물의 외형, 공간, 동작을 일관되게 유지하는 제작 방식을 설계했습니다.",
    role: "대본·스토리보드, 인물·공간 설정 자료, 구도 스케치, 첫 프레임 생성과 장면 간 연속성 검수",
    contribution: "100%",
    contributionNote: "",
    media: null,
    article: "content/posts/02-cinematic-layer-in-layer.md",
    annotations: [
      ["캐릭터 팩", "같은 인물을 여러 컷에서 유지하기 위해 얼굴 각도, 의상과 표정 기준을 묶은 참조 자료입니다."],
      ["공간 팩", "세트 구조, 좌석과 출입구, 촬영 축과 광원을 여러 시점에서 고정한 참조 자료입니다."],
      ["시선축", "마주 보는 인물과 카메라의 방향 관계입니다. 컷 사이에서 뒤집히면 인물의 위치가 바뀐 것처럼 보일 수 있습니다."],
    ],
  },
  {
    slug: "prombank",
    title: "AI 콘텐츠 프롬프트 공유 플랫폼 ‘프롬뱅크’ 운영",
    period: "2024.03 - 2025.06",
    thumbnail: "assets/thumbnails/project-04-prombank.jpg",
    thumbnailAlt: "네 개의 프롬프트 말풍선 상자가 공중에 떠 있는 3D 아이콘",
    summary:
      "이미지·영상·TTS·효과음·배경음악 프롬프트와 생성 결과, 수정 과정을 분석해 재사용 가능한 정보로 분류했습니다. MVP 공개 후 첫 4주간 고유 방문자 1,311명과 3,285회의 방문 세션을 기록했습니다.",
    role: "서비스 기획, 프롬프트 콘텐츠 제작",
    contribution: "80%",
    contributionNote: "",
    media: null,
    article: "content/posts/04-prombank.md",
    annotations: [
      ["프롬프트 템플릿", "문장 하나를 복사하는 자료가 아니라, 바꿀 정보·고정 조건·생성 결과·수정 기록을 함께 묶은 제작 양식입니다."],
      ["고유 방문자", "집계 기간에 같은 사용자의 중복 방문을 제외해 센 방문자 수입니다."],
      ["방문 세션", "사용자가 사이트에 들어와 활동한 한 번의 방문 단위입니다."],
    ],
  },
  {
    slug: "music-tts-pronunciation",
    title: "AI 음성 콘텐츠를 위한 음악 고유명사 발음사전",
    period: "2026.03 - 2026.06",
    thumbnail: "assets/thumbnails/project-05-tts-pronunciation-v3.jpg",
    thumbnailAlt: "단순한 보라색 마이크와 두 개의 음성 파형 카드가 공중에 떠 있는 3D 아이콘",
    summary:
      "곡명·아티스트명 약 3만 5천 개를 발음사전 후보로 정리하고, 초기 약 3,500건을 직접 조사했습니다. 등록 뒤에는 실제 추천 문장으로 발음과 끊어읽기를 다시 검수했습니다.",
    role: "발음 수동 조사, 근거·소요 시간 기록, 테스트 문장 제작, 주 단위 적용 확인",
    contribution: "인턴 실무",
    contributionLabel: "참여 형태",
    contributionNote: "최종 규칙 정리와 적용은 담당 멘토와 협업",
    media: null,
    article: "content/posts/05-music-tts-pronunciation.md",
    annotations: [
      ["발음사전", "화면의 표기는 유지하면서 TTS가 읽을 발음을 별도로 연결하는 데이터입니다."],
      ["끊어읽기", "문장 안에서 의미 단위에 맞춰 쉬는 위치와 호흡을 조정하는 검수 항목입니다."],
      ["Op.", "Opus의 약어로 클래식 작품 번호를 나타냅니다. 곡 번호나 악장 번호와 구분해 읽었습니다."],
    ],
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

function multilineHtml(value) {
  return escapeHtml(value || "").replaceAll("\n", "<br />");
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
          <span>고화질 원본</span>
          <strong>${escapeHtml(project.media.label)}</strong>
          <small>원본 링크 연결 후 이 자리에서 고화질로 재생됩니다.</small>
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
    .map((tool) => {
      const filledDots = { 상: 3, 중: 2, 하: 1 }[tool.level] || 0;
      return `
        <div class="tool-item${tool.wide ? " tool-item--wide" : ""}">
          <div>
            <strong>${escapeHtml(tool.name)}</strong>
            <span>${escapeHtml(tool.use)}</span>
          </div>
          ${
            tool.level
              ? `<span class="proficiency-dots" role="img" aria-label="숙련도 ${escapeHtml(tool.level)}">
                  ${[1, 2, 3]
                    .map((dot) => `<i class="${dot <= filledDots ? "is-filled" : ""}" aria-hidden="true"></i>`)
                    .join("")}
                </span>`
              : ""
          }
        </div>
      `;
    })
    .join("");
}

function renderProjects() {
  projectGrid.innerHTML = projects
    .map(
      (project) => `
        <a class="project-card${project.recommended ? " project-card--recommended" : ""}" href="#project/${project.slug}">
          <div class="project-thumbnail">
            ${project.recommended ? '<span class="recommendation-badge">추천</span>' : ""}
            <img
              src="${escapeHtml(project.thumbnail)}"
              alt="${escapeHtml(project.thumbnailAlt)}"
              width="800"
              height="800"
            />
          </div>
          <div class="project-content">
            <p class="project-period">작업 기간 <span>${escapeHtml(project.period)}</span></p>
            <h3>${escapeHtml(project.title)}</h3>
            <p class="project-summary">${escapeHtml(project.summary)}</p>
          </div>
          <span class="project-arrow" aria-hidden="true">→</span>
        </a>
      `,
    )
    .join("");
}

function initializeAiToolsModal() {
  const openButton = document.querySelector("[data-ai-tools-open]");
  const modal = document.querySelector("[data-ai-tools-modal]");
  const closeButton = modal?.querySelector("[data-ai-tools-close]");
  if (!openButton || !modal || !closeButton) return;

  const closeModal = () => {
    if (!modal.open) return;
    modal.close();
    openButton.focus();
  };

  openButton.addEventListener("click", () => modal.showModal());
  closeButton.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
}

function projectRequirementsMarkup(project) {
  return `
    <section class="project-requirements" aria-label="담당 업무와 기여도">
      <div class="project-requirements-main">
        <div>
          <span>담당 업무</span>
          <strong>${escapeHtml(project.role)}</strong>
        </div>
        <div>
          <span>${escapeHtml(project.contributionLabel || "기여도")}</span>
          <strong>${escapeHtml(project.contribution)}</strong>
          ${project.contributionNote ? `<small>${escapeHtml(project.contributionNote)}</small>` : ""}
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
  result = result.replace(/==([^=]+)==/g, "<mark>$1</mark>");
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
          <a class="article-figure-link" href="${escapeHtml(image[2])}" target="_blank" rel="noreferrer" title="원본 크기로 보기">
            <img src="${escapeHtml(image[2])}" alt="${escapeHtml(image[1])}" loading="lazy" />
          </a>
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
        <p>인터랙션 데모</p>
        <h3 id="demoTitle">필요한 장면만 말로 수정해보기</h3>
        <span>장면 선택 → 자연어 요청 → 변경 범위 확인 순서로 부분 수정 흐름을 직접 확인할 수 있습니다.</span>
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
    const representative = shortAnimationVideos[0];
    const additionalVideos = shortAnimationVideos.slice(1);
    const videoRowMarkup = (video, index) => `
      <li class="final-video-row">
        <span class="final-video-index">${String(index + 2).padStart(2, "0")}</span>
        <div>
          <strong>${escapeHtml(shortAnimationDisplayTitle(video))}</strong>
          <span>${escapeHtml(video.duration)}</span>
        </div>
        <button
          type="button"
          data-final-video
          data-video-src="${escapeHtml(youtubeEmbedUrl(video.youtube))}"
          data-video-title="${escapeHtml(shortAnimationDisplayTitle(video))}"
          data-video-duration="${escapeHtml(video.duration)}"
          data-video-description="${escapeHtml(shortAnimationVideoDescription(video))}"
          aria-haspopup="dialog"
        >
          영상 보기 <b aria-hidden="true">→</b>
        </button>
      </li>
    `;
    return `
      <section class="artifact-block final-video-library" aria-labelledby="outputGalleryTitle">
        <div class="representative-video">
          <button
            class="representative-poster"
            type="button"
            data-final-video
            data-video-src="${escapeHtml(youtubeEmbedUrl(representative.youtube))}"
            data-video-title="${escapeHtml(shortAnimationDisplayTitle(representative))}"
            data-video-duration="${escapeHtml(representative.duration)}"
            data-video-description="${escapeHtml(shortAnimationVideoDescription(representative))}"
            aria-label="${escapeHtml(shortAnimationDisplayTitle(representative))} 재생"
            aria-haspopup="dialog"
          >
            <img src="assets/projects/short-animation/final-videos/fortune-princess-ep09.jpg" alt="" />
            <span aria-hidden="true"><b>▶</b></span>
          </button>
          <div class="representative-video-copy">
            <span class="representative-kicker">추천 · 대표작</span>
            <h3 id="outputGalleryTitle">${escapeHtml(shortAnimationDisplayTitle(representative))}</h3>
            <p>${escapeHtml(representative.duration)} · 에피소드형 애니메이션</p>
            <small>원작 장면을 세로형 영상으로 재구성하고 모션·대사·사운드를 한 편으로 완성했습니다.</small>
            <div class="representative-actions">
              <button
                class="representative-play"
                type="button"
                data-final-video
                data-video-src="${escapeHtml(youtubeEmbedUrl(representative.youtube))}"
                data-video-title="${escapeHtml(shortAnimationDisplayTitle(representative))}"
                data-video-duration="${escapeHtml(representative.duration)}"
                data-video-description="${escapeHtml(shortAnimationVideoDescription(representative))}"
                aria-haspopup="dialog"
              >
                영상 보기 <b aria-hidden="true">▶</b>
              </button>
              <button class="video-library-open" type="button" data-video-library-open aria-haspopup="dialog">
                다른 작품 보기 <span>${additionalVideos.length}편</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <dialog class="video-library-modal" data-video-library-modal aria-labelledby="videoLibraryTitle">
        <div class="video-library-panel">
          <header>
            <div>
              <span>최종 영상 · ${additionalVideos.length}편</span>
              <strong id="videoLibraryTitle">다른 작품 보기</strong>
            </div>
            <button type="button" data-video-library-close aria-label="목록 닫기">×</button>
          </header>
          <ol class="video-library-list">
            ${additionalVideos.map(videoRowMarkup).join("")}
          </ol>
        </div>
      </dialog>
      <dialog class="video-modal" data-video-modal aria-labelledby="videoModalTitle">
        <div class="video-modal-panel">
          <header>
            <div>
              <strong id="videoModalTitle" data-video-modal-title></strong>
              <span data-video-modal-duration></span>
            </div>
            <button type="button" data-video-modal-close aria-label="영상 닫기">×</button>
          </header>
          <div class="video-modal-player" data-video-modal-player></div>
          <p class="video-modal-description" data-video-modal-description></p>
        </div>
      </dialog>
    `;
  }

  if (type === "motion-comparison") {
    return `
      <section class="artifact-block" aria-labelledby="motionCompareTitle">
        <div class="artifact-heading">
          <span>모션 후보 비교</span>
          <h3 id="motionCompareTitle">동일 장면의 모션 후보를 나란히 검수</h3>
          <p>한 번의 결과를 정답으로 채택하지 않고, 같은 첫 프레임에서 생성한 후보를 얼굴 보존·행동 순서·종료 프레임 기준으로 비교했습니다.</p>
        </div>
        <div class="clip-comparison">
          <figure>
            <video controls preload="metadata" playsinline aria-label="모션 후보 A 재생" src="assets/projects/short-animation/clips/motion-candidate-a.mp4"></video>
            <figcaption><strong>후보 A</strong><span>표정, 시선과 인물 고정 상태 확인</span></figcaption>
          </figure>
          <figure>
            <video controls preload="metadata" playsinline aria-label="모션 후보 B 재생" src="assets/projects/short-animation/clips/motion-candidate-b.mp4"></video>
            <figcaption><strong>후보 B</strong><span>동작 순서, 움직임 범위와 연결 가능 구간 확인</span></figcaption>
          </figure>
        </div>
        <p class="artifact-note">같은 5초 장면의 생성 후보를 얼굴 보존, 행동 순서와 편집 가능한 구간 기준으로 비교한 기록입니다.</p>
      </section>
    `;
  }

  if (type === "short-format-gallery") {
    const formats = [
      {
        title: "에피소드형 애니메이션 · 9화",
        description: "사건 전개와 인물 감정의 연결을 우선한 세로형 에피소드",
        youtube: shortAnimationVideos[0].youtube,
      },
      {
        title: "에피소드형 애니메이션 · 11화",
        description: "대사·리액션·전환을 에피소드 단위로 조립한 완결형 구성",
        youtube: shortAnimationVideos[2].youtube,
      },
      {
        title: "프로모션형 애니메이션 · 1~6화",
        description: "원작의 핵심 사건을 짧은 시간 안에 재배열한 유입용 구성",
        youtube: shortAnimationVideos[5].youtube,
      },
      {
        title: "프로모션형 애니메이션 · 9화",
        description: "첫 장면의 후킹과 다음 행동 유도를 우선한 15초 터치형 편집",
        youtube: shortAnimationVideos[3].youtube,
      },
    ];
    return `
      <section class="artifact-block" aria-labelledby="shortFormatTitle">
        <div class="artifact-heading">
          <span>포맷별 완성 영상 · YouTube 원본</span>
          <h3 id="shortFormatTitle">같은 IP를 목적이 다른 네 가지 편집 구조로 제작</h3>
          <p>에피소드형·프로모션형은 단순히 길이만 다르지 않습니다. 관객이 먼저 알아야 할 정보와 컷의 종료 조건을 포맷별로 다시 정의했습니다.</p>
        </div>
        <div class="format-video-grid">
          ${formats
            .map(
              (format) => `
                <figure class="format-video-card">
                  <iframe
                    src="${escapeHtml(youtubeEmbedUrl(format.youtube))}?rel=0&amp;playsinline=1"
                    title="${escapeHtml(format.title)}"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                  <figcaption><strong>${escapeHtml(format.title)}</strong><span>${escapeHtml(format.description)}</span></figcaption>
                </figure>
              `,
            )
            .join("")}
        </div>
      </section>
    `;
  }

  if (type === "speaker-scene-comparison") {
    const speakerScenes = [
      ["speaker-female.png", "여성 화자 중심 생성", "여성 화자의 발화 구간만 움직이고 상대 인물은 고정"],
      ["speaker-male.png", "남성 화자 중심 생성", "남성 화자의 입·턱 움직임과 시선 변화만 분리 생성"],
      ["speaker-composite.jpg", "발화 주체별 결과 합성", "두 결과의 통과 구간을 편집해 하나의 대화 장면으로 연결"],
    ];
    return `
      <section class="artifact-block speaker-scene-comparison" aria-labelledby="speakerSceneTitle">
        <div class="artifact-heading">
          <span>다중 화자 장면 제작</span>
          <h3 id="speakerSceneTitle">화자별 생성 결과를 한 장면으로 합성</h3>
          <p>한 번에 두 인물의 발화를 만들지 않고, 말하는 인물만 움직인 두 결과를 따로 검수한 뒤 편집에서 연결했습니다.</p>
        </div>
        <div class="speaker-scene-grid">
          ${speakerScenes
            .map(
              ([src, title, description]) => `
                <figure>
                  <div class="speaker-scene-frame">
                    <img src="assets/projects/short-animation/${src}" alt="${title}" loading="lazy" />
                  </div>
                  <figcaption><strong>${title}</strong><span>${description}</span></figcaption>
                </figure>
              `,
            )
            .join("")}
        </div>
      </section>
    `;
  }

  if (type === "short-audio-sources") {
    const audioSources = [
      {
        title: "다중 화자 합성 오디오",
        duration: "5.7초",
        description: "화자 경계와 대사 사이의 빈 시간을 분리해 만든 합성 소스입니다. 발화가 겹치지 않는지, 청자 리액션이 들어갈 호흡이 남는지를 확인할 수 있습니다.",
        src: "assets/projects/short-animation/audio/multi-speaker-mix.m4a",
      },
      {
        title: "오디오 선행 장면 전환",
        duration: "18.3초",
        description: "다음 장면의 소리를 화면 컷보다 먼저 진입시킨 편집 소스입니다. 이미지 변화가 시작되기 전에 장소와 사건의 방향을 청각적으로 예고했습니다.",
        src: "assets/projects/short-animation/audio/audio-lead-transition.m4a",
      },
    ];
    return `
      <section class="artifact-block" aria-labelledby="shortAudioTitle">
        <div class="artifact-heading">
          <span>오디오 원본</span>
          <h3 id="shortAudioTitle">타임라인에서 실제로 사용한 음성·전환 소스</h3>
          <p>최종 영상만으로는 확인하기 어려운 화자 분리와 장면 전환 판단을 오디오 단위로 분리했습니다.</p>
        </div>
        <div class="audio-source-list">
          ${audioSources
            .map(
              (audioSource, index) => `
                <article class="audio-source">
                  <header>
                    <span>${String(index + 1).padStart(2, "0")}</span>
                    <div><strong>${audioSource.title}</strong><small>${audioSource.duration}</small></div>
                  </header>
                  <audio controls preload="metadata" aria-label="${audioSource.title} 재생" src="${audioSource.src}"></audio>
                  <p>${audioSource.description}</p>
                </article>
              `,
            )
            .join("")}
        </div>
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
          <span>후반 제작 결과</span>
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
          <span>대사·연기 자료</span>
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
          <span>제작 워크플로우</span>
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
          <span>서비스 구조</span>
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
          <span>수정 범위 기준</span>
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

  if (type === "drama-storyboard-document") {
    const storyboard = window.aiDramaStoryboardData;
    if (!storyboard) return "";
    const sceneMarkup = storyboard.scenes
      .map(
        (scene) => `
          <details class="storyboard-scene">
            <summary>
              <span class="storyboard-scene-number">SCENE ${escapeHtml(scene.scene)}</span>
              <span>
                <strong>${escapeHtml(scene.slugline)}</strong>
                <small>${escapeHtml(scene.cutRange)} · ${escapeHtml(scene.cutCount)}컷 · 약 ${escapeHtml(scene.durationSeconds)}초</small>
              </span>
              <b aria-hidden="true">＋</b>
            </summary>
            <p class="storyboard-scene-function">${escapeHtml(scene.function)}</p>
            <div class="storyboard-cut-list">
              ${scene.cuts
                .map(
                  (cut) => `
                    <article class="storyboard-cut-row">
                      <header>
                        <strong>CUT ${escapeHtml(cut.cut)}</strong>
                        <span>${escapeHtml(cut.note.match(/예상 [0-9.]+초/)?.[0] || "")}</span>
                      </header>
                      <dl>
                        <div><dt>장면·카메라</dt><dd>${multilineHtml(cut.direction)}</dd></div>
                        <div><dt>대사</dt><dd>${cut.dialogue ? multilineHtml(cut.dialogue) : "—"}</dd></div>
                        <div><dt>사운드</dt><dd>${cut.sound ? multilineHtml(cut.sound) : "—"}</dd></div>
                        <div><dt>제작 메모</dt><dd>${multilineHtml(cut.note)}</dd></div>
                      </dl>
                    </article>
                  `,
                )
                .join("")}
            </div>
          </details>
        `,
      )
      .join("");
    const ruleMarkup = storyboard.rules
      .map(
        (item) => `
          <div class="storyboard-rule-row">
            <strong>${escapeHtml(item.category)}</strong>
            <p>${escapeHtml(item.rule)}</p>
            <span>${escapeHtml(item.note)}</span>
          </div>
        `,
      )
      .join("");
    const setupMarkup = storyboard.setups
      .map(
        (item) => `
          <article class="storyboard-setup">
            <header><strong>${escapeHtml(item.id)}</strong><span>${escapeHtml(item.subject)} · ${escapeHtml(item.shot)}</span></header>
            <dl>
              <div><dt>카메라</dt><dd>${escapeHtml(item.camera)}</dd></div>
              <div><dt>시선·배경</dt><dd>${escapeHtml(item.eyeline)}</dd></div>
              <div><dt>사용 컷</dt><dd>${escapeHtml(item.cuts)}</dd></div>
              <div><dt>고정 규칙</dt><dd>${escapeHtml(item.rule)}</dd></div>
            </dl>
          </article>
        `,
      )
      .join("");
    const sourceMarkup = storyboard.sources
      .map(
        (item) => `
          <a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">
            <span>${escapeHtml(item.label)}</span><b aria-hidden="true">↗</b>
          </a>
        `,
      )
      .join("");
    return `
      <section class="artifact-block storyboard-document" aria-labelledby="storyboardDocumentTitle">
        <div class="artifact-heading">
          <span>스토리보드 원문 · 4개 시트 통합</span>
          <h3 id="storyboardDocumentTitle">58개 컷을 장면별로 직접 읽기</h3>
          <p>엑셀에 기록한 장면·카메라·대사·사운드·제작 메모를 웹 문서로 옮겼습니다. 장면별 항목을 펼치면 원문의 58개 컷을 모두 확인할 수 있습니다.</p>
        </div>
        <div class="storyboard-summary" aria-label="스토리보드 문서 요약">
          <div><span>화면비</span><strong>${escapeHtml(storyboard.aspectRatio)}</strong></div>
          <div><span>구성</span><strong>${escapeHtml(storyboard.sceneCount)}씬</strong></div>
          <div><span>제작 단위</span><strong>${escapeHtml(storyboard.cutCount)}컷</strong></div>
          <div><span>예상 길이</span><strong>약 4분 34초</strong></div>
        </div>
        <div class="storyboard-sheet-list" aria-label="엑셀 시트 구성">
          <span>스토리보드 최종 v2</span>
          <span>씬 요약</span>
          <span>작성 기준</span>
          <span>고정 구도 바이블</span>
        </div>
        <details class="storyboard-source">
          <summary>
            <span><small>스토리보드 최종 v2</small><strong>58개 컷 전체 내용 보기</strong></span>
            <b aria-hidden="true">＋</b>
          </summary>
          <div class="storyboard-source-body">
            <p class="storyboard-classification">${escapeHtml(storyboard.classification.replace("분류 원칙: ", ""))}</p>
            ${sceneMarkup}
          </div>
        </details>
        <details class="storyboard-source storyboard-source--support">
          <summary>
            <span><small>작성 기준</small><strong>씬·컷 분류와 카메라 원칙</strong></span>
            <b aria-hidden="true">＋</b>
          </summary>
          <div class="storyboard-rule-list">
            ${ruleMarkup}
            <div class="storyboard-source-links">${sourceMarkup}</div>
          </div>
        </details>
        <details class="storyboard-source storyboard-source--support">
          <summary>
            <span><small>고정 구도 바이블</small><strong>청문회장 9개 반복 세팅</strong></span>
            <b aria-hidden="true">＋</b>
          </summary>
          <div class="storyboard-setup-grid">${setupMarkup}</div>
        </details>
      </section>
    `;
  }

  if (type === "drama-preproduction-gallery") {
    const characterItems = [
      ["casting-overview.jpg", "캐스팅 후보와 선택", "개별 이미지의 미감보다 반복 생성 가능한 얼굴 특징을 기준으로 비교"],
      ["character-angle-pack.jpg", "캐릭터 각도 팩", "정면·45도·측면에서 얼굴·헤어·체형이 유지되는 기준"],
      ["wardrobe-pack.jpg", "의상 팩", "장면과 인물별 의상·소재·실루엣을 컷마다 다시 정의하지 않도록 고정"],
      ["expression-pack.jpg", "표정 팩", "중립부터 압박·당황·긴장까지 허용할 연기 범위를 기준 이미지로 관리"],
    ];
    const sceneItems = [
      ["location-pack.jpg", "청문회장 공간 팩", "좌석·출입구·증인석·카메라 축과 광원을 여러 시점으로 잠금"],
      ["generated-candidates-01.jpg", "컷별 후보 3안", "구도 정확도·인물 일관성·영상화 가능성·앞뒤 연결성으로 선택"],
      ["generated-candidates-02.jpg", "추가 컷 후보 3안", "같은 인물과 공간 기준을 재사용해 컷마다 선택·탈락 근거를 기록"],
    ];
    const evidenceFigureMarkup = ([src, title, description]) => `
      <figure>
        <a href="assets/projects/ai-drama/${src}" target="_blank" rel="noreferrer" title="${title} 원본 크기로 보기">
          <img src="assets/projects/ai-drama/${src}" alt="${title}" loading="lazy" />
        </a>
        <figcaption><strong>${title}</strong><span>${description}</span><b>이미지를 누르면 원본 크기로 열립니다.</b></figcaption>
      </figure>
    `;
    return `
      <section class="artifact-block" aria-labelledby="dramaEvidenceTitle">
        <div class="artifact-heading">
          <span>실제 제작 자료</span>
          <h3 id="dramaEvidenceTitle">대본에서 첫 프레임 후보까지 실제 제작 자료</h3>
          <p>전체 기준을 먼저 보고, 필요한 경우 인물과 공간 자료를 펼쳐볼 수 있도록 구성했습니다. 각 자료는 다음 생성 단계에서 고정하거나 검수할 항목을 정의합니다.</p>
        </div>
        <div class="evidence-reader evidence-featured">
          ${evidenceFigureMarkup(["preproduction-overview.jpg", "첫 프레임 전 준비", "캐릭터·공간·의상·표정 기준을 한 화면에서 점검"])}
        </div>
        <div class="evidence-groups">
          <details class="evidence-group">
            <summary>
              <span><small>인물 일관성 기준 · 4개 자료</small><strong>캐스팅·각도·의상·표정 자료 보기</strong></span>
              <b aria-hidden="true">＋</b>
            </summary>
            <div class="evidence-reader">${characterItems.map(evidenceFigureMarkup).join("")}</div>
          </details>
          <details class="evidence-group">
            <summary>
              <span><small>공간·첫 프레임 검수 · 3개 자료</small><strong>공간 팩과 컷별 후보 보기</strong></span>
              <b aria-hidden="true">＋</b>
            </summary>
            <div class="evidence-reader">${sceneItems.map(evidenceFigureMarkup).join("")}</div>
          </details>
        </div>
      </section>
    `;
  }

  if (type === "drama-generation-rounds") {
    const roundItems = [
      [
        "sources/first-frame-round06-overview-01.jpg",
        "Round 06 · 청문회 핵심 구도",
        "CUT 5-1~5-5의 A/B/C 후보. 동일 인물·의상·공간 기준을 재사용하면서 증인석, 정면 CU, 전체 세트와 인서트의 편집 역할을 구분했습니다.",
      ],
      [
        "sources/first-frame-round06-overview-02.jpg",
        "Round 06 · 대화와 리액션 구도",
        "CUT 5-6~5-10 후보. 말하는 인물만이 아니라 듣는 인물, 투숏과 공간 인서트가 한 시퀀스로 연결되는지를 함께 검수했습니다.",
      ],
      [
        "sources/first-frame-round07-overview-01.jpg",
        "Round 07 · 잔여 컷 제작",
        "프롬프트마다 의도적으로 다른 카메라 위치와 정보 밀도를 부여했습니다. 반복 샘플링이 아니라 연출 선택지를 비교하기 위한 A/B/C입니다.",
      ],
      [
        "sources/first-frame-round07-overview-07.jpg",
        "Round 07 · 결말부 연기와 매체 시선",
        "손-마이크 인서트, 기자단 WS, 증인 정면 MS·CU를 묶어 마지막 발언 전후의 압박과 공개성의 규모를 설계했습니다.",
      ],
    ];
    return `
      <section class="artifact-block drama-rounds" aria-labelledby="dramaRoundsTitle">
        <div class="artifact-heading">
          <span>첫 프레임 생성·검수 기록</span>
          <h3 id="dramaRoundsTitle">컷 단위 후보를 라운드로 묶어 연속성까지 검수</h3>
          <p>Round 06에서는 10개 컷의 30개 초기 후보와 수정 3개를, Round 07에서는 28개 컷의 84개 초기 후보와 수정 2개를 보존했습니다. 수정은 전체 재생성이 아니라 QA에서 실패한 컷에만 적용했습니다.</p>
        </div>
        <div class="round-metrics" aria-label="첫 프레임 생성 기록">
          <div><span>Round 06</span><strong>10컷 · 33개</strong><small>초기 30 + 수정 3</small></div>
          <div><span>Round 07</span><strong>28컷 · 86개</strong><small>초기 84 + 수정 2</small></div>
        </div>
        <div class="drama-round-reader">
          ${roundItems
            .map(
              ([src, title, description]) => `
                <figure>
                  <a href="assets/projects/ai-drama/${src}" target="_blank" rel="noreferrer" title="${title} 원본 보기">
                    <img src="assets/projects/ai-drama/${src}" alt="${title}" loading="lazy" />
                  </a>
                  <figcaption><strong>${title}</strong><span>${description}</span></figcaption>
                </figure>
              `,
            )
            .join("")}
        </div>
        <figure class="candidate-contact-sheet">
          <a href="assets/projects/ai-drama/sources/contact-cut-5-11.jpg" target="_blank" rel="noreferrer" title="CUT 5-11 후보 원본 보기">
            <img src="assets/projects/ai-drama/sources/contact-cut-5-11.jpg" alt="CUT 5-11 첫 프레임 후보 A B C 비교" loading="lazy" />
          </a>
          <figcaption>
            <strong>CUT 5-11 · 화면 합성 영역을 남기는 세 가지 선택지</strong>
            <span>A는 정보 화면 자체, B는 기자단을 포함한 관찰 시점, C는 공간 규모와 리모컨 동작을 함께 보여줍니다. 실제 UI 문구는 생성 이미지에 맡기지 않고 후반 합성 대상으로 남겼습니다.</span>
          </figcaption>
        </figure>
      </section>
    `;
  }

  if (type === "drama-failure-gallery") {
    return `
      <section class="artifact-block" aria-labelledby="dramaFailureTitle">
        <div class="artifact-heading">
          <span>탈락 결과 · 수정 경로</span>
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
          <span>재사용 가능한 프롬프트 사례</span>
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

  if (type === "tts-data-flow") {
    const steps = [
      ["01", "후보 추출", "영어·숫자가 포함된 곡명과 아티스트명"],
      ["02", "공개 자료 조사", "통용 발음·언어권·활동 정보 확인"],
      ["03", "근거 기록", "확인 자료·판단 이유·처리 시간 보존"],
      ["04", "사전 등록", "반복 표기와 예외를 나눠 주 단위 반영"],
      ["05", "문장 청취", "조사 연결·호흡·고유명사 전달력 확인"],
      ["06", "재검수", "같은 문장으로 반영 여부와 부작용 확인"],
    ];
    return `
      <section class="artifact-block tts-data-flow" aria-labelledby="ttsFlowTitle">
        <div class="artifact-heading">
          <span>발음 데이터 제작 기록</span>
          <h3 id="ttsFlowTitle">조사 결과를 실제 음성 출력까지 연결한 흐름</h3>
        </div>
        <div class="tts-metrics" aria-label="발음사전 작업 규모">
          <div><span>전체 후보</span><strong>약 35,000개</strong></div>
          <div><span>초기 수동 조사</span><strong>약 3,500건</strong></div>
          <div><span>적용 확인</span><strong>주 1회</strong></div>
        </div>
        <ol class="tts-flow-list">
          ${steps
            .map(
              ([number, title, description]) => `
                <li><span>${number}</span><strong>${title}</strong><p>${description}</p></li>
              `,
            )
            .join("")}
        </ol>
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

function initializeFinalVideoModal(container) {
  const modal = container.querySelector("[data-video-modal]");
  if (!modal) return;

  const libraryModal = container.querySelector("[data-video-library-modal]");
  const libraryOpenButton = container.querySelector("[data-video-library-open]");
  const libraryCloseButton = libraryModal?.querySelector("[data-video-library-close]");
  const modalTitle = modal.querySelector("[data-video-modal-title]");
  const modalDuration = modal.querySelector("[data-video-modal-duration]");
  const modalDescription = modal.querySelector("[data-video-modal-description]");
  const modalPlayer = modal.querySelector("[data-video-modal-player]");
  const closeButton = modal.querySelector("[data-video-modal-close]");
  let triggerButton = null;
  let returnToLibrary = false;

  const closeModal = () => {
    if (modal.open) modal.close();
  };

  const closeLibrary = () => {
    if (libraryModal?.open) libraryModal.close();
  };

  libraryOpenButton?.addEventListener("click", () => libraryModal?.showModal());
  libraryCloseButton?.addEventListener("click", closeLibrary);
  libraryModal?.addEventListener("click", (event) => {
    if (event.target === libraryModal) closeLibrary();
  });
  libraryModal?.addEventListener("close", () => {
    if (!modal.open) libraryOpenButton?.focus();
  });

  container.querySelectorAll("[data-final-video]").forEach((button) => {
    button.addEventListener("click", () => {
      triggerButton = button;
      returnToLibrary = Boolean(button.closest("[data-video-library-modal]"));
      modalTitle.textContent = button.dataset.videoTitle || "최종 영상";
      modalDuration.textContent = button.dataset.videoDuration || "";
      modalDescription.textContent = button.dataset.videoDescription || "";

      const iframe = document.createElement("iframe");
      const videoUrl = new URL(button.dataset.videoSrc, window.location.href);
      videoUrl.searchParams.set("autoplay", "1");
      videoUrl.searchParams.set("rel", "0");
      videoUrl.searchParams.set("playsinline", "1");
      videoUrl.searchParams.set("origin", window.location.origin);
      iframe.src = videoUrl.toString();
      iframe.title = `${button.dataset.videoTitle || "최종 영상"} 재생`;
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.allowFullscreen = true;
      modalPlayer.replaceChildren(iframe);
      if (libraryModal?.open) libraryModal.close();
      modal.showModal();
    });
  });

  closeButton.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  modal.addEventListener("close", () => {
    modalPlayer.replaceChildren();
    if (returnToLibrary && libraryModal) {
      libraryModal.showModal();
      triggerButton?.focus();
    } else {
      triggerButton?.focus();
    }
  });
}

function decorateArticleContent(container, project) {
  (project.annotations || []).forEach(([term, explanation]) => {
    wrapFirstTextMatch(container, term, (text) => {
      const note = document.createElement("span");
      note.className = "term-note";
      note.tabIndex = 0;
      note.dataset.note = explanation;
      note.setAttribute("aria-label", `${text}: ${explanation}`);
      note.textContent = text;
      return note;
    });
  });
}

function wrapFirstTextMatch(container, phrase, createElement) {
  const blocked = "a, button, code, pre, audio, video, .term-note";
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
  let node;

  while ((node = walker.nextNode())) {
    if (!node.parentElement || node.parentElement.closest(blocked)) continue;
    const index = node.textContent.indexOf(phrase);
    if (index === -1) continue;

    const fragment = document.createDocumentFragment();
    const before = node.textContent.slice(0, index);
    const after = node.textContent.slice(index + phrase.length);
    if (before) fragment.append(document.createTextNode(before));
    fragment.append(createElement(phrase));
    if (after) fragment.append(document.createTextNode(after));
    node.replaceWith(fragment);
    return;
  }
}

async function renderArticle(project) {
  const requestId = ++renderRequest;
  homeView.hidden = true;
  articleView.hidden = false;
  document.body.classList.add("is-article");
  document.title = `${project.title} | 최수호 포트폴리오`;
  articleView.innerHTML = `
    <header class="article-hero">
      <div class="article-hero-inner">
        <a class="back-link" href="#work"><span aria-hidden="true">←</span> 프로젝트 목록</a>
        <h1>${escapeHtml(project.title)}</h1>
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
    articleBody.innerHTML = markdownToHtml(markdown);
    initializeAntiframeDemo(articleBody);
    initializeFinalVideoModal(articleBody);
    decorateArticleContent(articleBody, project);
    const next = projects[(projects.indexOf(project) + 1) % projects.length];
    articleView.insertAdjacentHTML(
      "beforeend",
      `
        <a class="article-next" href="#project/${next.slug}">
          <span>다음 프로젝트<strong>${escapeHtml(next.title)}</strong></span>
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
  document.title = "최수호 | AI 콘텐츠 제작 포트폴리오 블로그";

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
initializeAiToolsModal();
initializeFinalVideoModal(homeView);
route();
window.addEventListener("hashchange", route);
window.addEventListener("scroll", updateProgress, { passive: true });
