# **코리아 IT 아카데미 국비과정**
## React ⚛️
<a name="readme-top"></a>

---

## 목차

- [Day 01 - Node.js / 객체 디스트럭처링 / 모듈 / React 소개](#day-01)
- [Day 02 - JSX 상세 / 컴포넌트](#day-02)
- [Day 03 - 고차 컴포넌트 / useReducer / useRef / useEffect](#day-03)
- [Day 04 - React Hook / 커스텀 훅 / Server](#day-04)
- [Day 05 - React Router / Immer / Chart.js](#day-05)
- [Day 06 - Next.js / npx / 페이지 라우터](#day-06)
- [Day 08 - TypeScript / JavaScript 모듈 시스템](#day-08)

---

<a name="day-01"></a>
## Day 01 - Node.js / 객체 디스트럭처링 / 모듈 / React 소개

#### Node.js란?
	Chrome V8 JavaScript 엔진 위에서 동작하는 비동기 이벤트 기반의 Server Side JavaScript 런타임 환경.
	브라우저에서만 실행되던 JavaScript를 서버에서도 실행할 수 있도록 만들어짐.

#### ※ Chrome V8 JavaScript 엔진이란?
	Google이 Chrome 브라우저를 만들면서 개발한 엔진.
	이름의 V8은 자동차 V8 엔진처럼 빠른 JavaScript 실행을 의미.

#### Node.js의 역사
	1995년 : JavaScript가 넷스케이프에서 처음 개발됨.
	2008년 : Google이 V8 JavaScript 엔진을 공개.
	2009년 : Ryan Dahl이 Node.js를 공개 (V8 엔진 기반).
	2010년 : npm(Node Package Manager) 출시.
	2011년 : Microsoft가 Windows용 Node.js 지원 시작.
	2015년 : io.js와 합쳐져 Node.js 재단 설립.
	2019년 : Node.js 재단과 JS 재단이 합쳐져 OpenJS Foundation 탄생.

#### ※ Deno란?
	Node.js를 만든 Ryan Dahl이 "Node.js에는 실수들이 많다"고 인정하며 새롭게 개발한 JavaScript/TypeScript 런타임.

#### ※ LTS(Long Term Support)란?
	- 새로운 주요 버전은 매년 4월과 10월에 출시.
	- LTS 버전은 2년간 Active LTS, 이후 12개월간 Maintenance LTS 진행 (총 3년 지원).

-------------------------------------------------------------------------------------

#### 객체 디스트럭처링(Destructuring)이란?
	객체의 속성을 쉽게 추출하여 개별 변수에 할당할 수 있도록 도와주는 문법.
	가독성을 높이고, 불필요한 반복을 제거.

#### 1. 기본적인 객체 디스트럭처링

	const person = { name: "Alice", age: 25, job: "Developer" };
	const { name, age, job } = person;

#### 2. 변수 이름 변경하기 (별칭)
	: 을 사용하여 별칭(Alias)을 부여.

	const { name: fullName, age: years } = person;

#### 3. 기본값 설정하기
	객체에 특정 속성이 없을 경우 기본값을 지정.

	const { name, age = 0 } = person;

#### 4. 중첩된 객체 디스트럭처링

	const { id, info: { name, age } } = user;

#### 5. 나머지 연산자 (...rest) 사용

	const { name, age, ...rest } = person;

#### 6-8. 함수 매개변수에서 객체 디스트럭처링

	function greet({ name = "Guest", age = 0 }) {
	    console.log(`Hello, My Name is ${name} and I am ${age} years old`);
	}

#### 9. 배열과 객체를 함께 디스트럭처링

	const [{ name: firstUser }, { age: secondUserAge }] = users;

#### 10-16. 배열 디스트럭처링

	// 기본
	const [a, b] = [1, 2, 3];

	// 일부 값 건너뛰기
	const [first, , third] = arr;

	// 기본값
	const [a, b = 200] = [100];

	// 나머지 연산자
	const [first, ...rest] = arr;

	// 변수 값 교환 (swap)
	[x, y] = [y, x];

-------------------------------------------------------------------------------------

#### 자바스크립트 모듈
	코드를 여러 파일로 분리하여 관리할 수 있는 기능.
	전역 스코프 오염 방지, 코드 재사용성 증가, 유지보수 용이, 의존성 관리 용이.

#### 모듈 내보내기 (export)

	// Named Export (여러 개 내보내기)
	export const PI = 3.14;
	export function add(a, b) { return a + b; }

	// Default Export (한 개만 가능)
	export default function multiply(a, b) { return a * b; }

#### 모듈 가져오기 (import)

	// Named Import
	import { PI, add } from './utils.js'

	// Default Import
	import multiply from './math.js'

	// 별칭 사용
	import { add as sum } from './utils.js'

	// 모두 가져오기
	import * as utils from './utils.js'

-------------------------------------------------------------------------------------

#### 리액트(React)란?
	페이스북(현 Meta)에서 개발한 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리.
	컴포넌트 기반 아키텍처를 사용하여 코드의 재사용성을 높이고 유지보수를 용이하도록 함.

#### 리액트의 주요 개념
	- 컴포넌트 : UI를 구성하는 독립적인 단위. 재사용 가능.
	- 가상 DOM(Virtual DOM) : 변경된 부분만 효율적으로 업데이트.
	- JSX : HTML과 같은 문법을 JavaScript 안에서 사용.

#### 리액트의 장점
	- 빠른 렌더링 : Virtual DOM 사용으로 DOM 조작 최소화.
	- 컴포넌트 재사용성 : 유지보수가 쉬운 코드 작성 가능.
	- 광범위한 생태계 및 강력한 커뮤니티.
	- React Native 지원으로 모바일 앱 개발도 가능.

#### 리액트의 단점
	- 초기 학습 난이도 : JSX, 상태 관리, 훅 등에 대한 학습이 필요.
	- 구조 설계 필요 : 프로젝트가 커질수록 상태 관리 및 폴더 구조 설계 중요.
	- SEO 문제 : CSR 방식이 기본이므로 SEO에 불리할 수 있음 (SSR로 해결 가능).

#### CSR / SSR
	CSR(Client Side Rendering) : 서버에서 최소한의 HTML을 제공하고, 이후 JavaScript가 실행되면서 화면이 동적으로 그려지는 방식.
	SSR(Server Side Rendering) : 서버에서 페이지를 렌더링한 후 완전한 HTML을 제공하는 방식. Next.js 등으로 구현.

-------------------------------------------------------------------------------------

#### Vite
	빠르게 리액트 프로젝트를 만들고 실습하기에 적합한 빌드 도구.

	npm create vite@6.1.0   >> vite React 설치
	npm install             >> React 모듈 설치
	npm run dev             >> 개발 서버 실행 (코드 변경 실시간 반영)
	npm run build           >> 빌드 생성 (배포용 dist 폴더 생성)

#### ※ 번들링(Bundling)이란?
	여러 개의 파일(HTML, CSS, JS 등)을 하나의 파일로 묶어서 최적화하는 과정.

	- HTTP 요청 수 감소 : 여러 파일을 하나로 합쳐 요청 수를 줄임.
	- 코드 최적화 : 트리 쉐이킹(사용하지 않는 코드 자동 제거), 압축(공백/주석 제거, 변수명 단축).

-------------------------------------------------------------------------------------

#### JSX(JavaScript XML)란?
	React에서 사용하는 문법으로, JavaScript 코드 안에서 HTML과 유사한 구문을 작성할 수 있도록 해주는 문법 확장.
	JSX는 브라우저가 직접 이해할 수 없기 때문에 내부적으로 React.createElement로 변환된다.

	// JSX 사용
	const element = <h1>Hello, World!</h1>;

	// JSX 없이 동일하게 작성
	const element = React.createElement('h1', null, 'Hello World!');

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<a name="day-02"></a>
## Day 02 - JSX 상세 / 컴포넌트

#### JSX의 특징

	1) 반드시 하나의 '부모' 요소로 감싸야 한다.
	   - <div>로 감싸거나, React.Fragment(<></>) 사용.

	2) JavaScript 표현식 사용 가능 ({})
	   - {} 안에서 변수, 함수 호출, 삼항 연산자, 배열(map) 사용 가능.

	3) class가 아닌 className 사용
	   - JavaScript 예약어인 class 대신 className 사용.

	4) 기본적인 HTML 속성은 camelCase 사용
	   - onclick -> onClick

	5) Self-closing 태그
	   - <img src="logo.png" /> 처럼 반드시 Self-closing으로 작성.

	6) 스타일 적용 시 객체(Object) 형태로 전달
	   - const divStyle = { color: "blue", fontSize: "20px" };
	   - <div style={divStyle}>Hello</div>

	7) JSX 내부 주석 : {/* */} 사용
	   JSX 외부 주석 : 일반 JavaScript 주석 (//, /* */) 사용

#### JSX의 장점
	- 가독성 향상 : HTML과 유사한 문법으로 코드 작성이 쉬움.
	- React.createElement를 직접 호출할 필요가 없음.
	- 가상 DOM을 빠르게 처리.

-------------------------------------------------------------------------------------

#### main.jsx
	createRoot 함수는 앱의 최상위 루트 요소의 빠른 렌더링을 위해 사용.
	StrictMode는 문제가 있거나 권장되지 않는 코드들에 대해 개발 과정 중 경고해 주기 위한 기능.

-------------------------------------------------------------------------------------

#### 컴포넌트란?
	UI를 구성하는 독립적인 단위.
	하나의 화면을 여러 개의 작은 조각으로 나누어 재사용성과 유지보수성을 높이는 개념.
	- 컴포넌트는 반드시 대문자로 시작.
	- Props(속성)은 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달하는 읽기 전용 값.
	- Props는 부모 -> 자식 방향으로만 전달 가능.

#### 1) 함수형 컴포넌트
	function Greeting(props) {
	    return <h1>Hello, {props.name}!</h1>;
	}

	// 화살표 함수 사용
	const Greeting = ({ name }) => <h1>Hello, {name}!</h1>;

#### 2) 클래스형 컴포넌트
	import React, { Component } from "react";

	class Greeting extends Component {
	    render() {
	        return <h1>Hello, {this.props.name}!</h1>;
	    }
	}

#### 3) state
	컴포넌트 내부에서 관리되는 변경 가능한 값으로, 컴포넌트의 UI를 동적으로 변경할 수 있도록 함.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<a name="day-03"></a>
## Day 03 - 고차 컴포넌트 / useReducer / useRef / useEffect

#### 고차 컴포넌트(HOC, Higher-Order Component)
	컴포넌트를 인자로 받아 새로운 컴포넌트를 반환하는 함수.
	여러 종류의 컴포넌트에 공통 기능을 부여.
	최근에는 HOC 대신 커스텀 훅을 더 많이 사용.

	사용 이유
	1) 코드 재사용성 : 동일한 기능을 여러 컴포넌트에서 중복 작성 없이 재사용.
	2) 관심사 분리 : UI 로직과 부가 로직을 분리하여 코드를 깔끔하게 유지.
	3) 조건부 렌더링 : 인증된 사용자만 특정 페이지를 볼 수 있도록 접근 제어.

	※ StrictMode가 활성화되면, 개발 환경에서 useEffect 및 생명주기 메서드가 두 번 실행될 수 있음.

-------------------------------------------------------------------------------------

#### useReducer란?
	React의 상태 관리 훅(Hook) 중 하나.
	상태 변화가 여러 단계로 이루어지거나, 상태 변경 로직이 복잡한 경우 유용.

	const [state, dispatch] = useReducer(reducer, initialState);

	- reducer : 상태 변경 로직을 정의하는 함수
	- initialState : 초기 상태값
	- state : 현재 상태값
	- dispatch : 액션을 보내는 함수 (dispatch({ type: "INCREMENT" }))

	장점
	- 상태 변화 로직을 한 곳에서 관리하므로 체계적인 상태 관리 가능.
	- 여러 개의 setState 대신 한 개의 dispatch로 다양한 상태 변화를 처리.

-------------------------------------------------------------------------------------

#### useRef란?
	컴포넌트가 리렌더링 되어도 유지되는 값을 저장하거나 DOM 요소에 직접 접근하는 Hook.

	주요 특징
	- 리렌더링을 유발하지 않음 (useState는 리렌더링 수행, useRef는 수행하지 않음)
	- DOM 요소에 접근 가능
	- 컴포넌트의 상태를 저장할 수 있음

-------------------------------------------------------------------------------------

#### useEffect란?
	함수형 컴포넌트에서 사이드 이펙트(Side Effect)를 처리할 때 사용하는 Hook.
	API 요청, 이벤트 리스너 등록, DOM 직접 조작, 타이머 설정 같은 부수적인 동작에 사용.
	클래스형 컴포넌트의 componentDidMount, componentDidUpdate, componentWillUnmount를 대체.

	- componentDidMount : 마운트 후 실행
	- componentDidUpdate : 업데이트 후 실행
	- componentWillUnmount : 언마운트 시 실행

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<a name="day-04"></a>
## Day 04 - React Hook / 커스텀 훅 / Server

#### React Hook이란?
	함수형 컴포넌트 개발의 핵심 요소.
	클래스 컴포넌트 없이 함수형 컴포넌트에서도 상태 관리와 라이프사이클 기능을 사용할 수 있도록 도와줌.
	use로 시작되는 것들이 리액트 훅에 해당됨.

#### 주요 React Hook 종류

	- useState : 상태 관리
	  useState(초기값) 호출 시 [상태값, 상태변경함수] 반환.
	  상태변경함수 호출 시 컴포넌트가 리렌더링 됨.

	- useEffect : Side Effect 관리
	  useEffect(Callback, [의존성]) 형태로 사용.
	  의존성 배열 안의 값이 변경될 때만 실행.
	  의존성 배열 생략 시 매 렌더링마다 실행.

	- useRef : DOM 요소를 참조 또는 상태 유지
	  useRef는 객체 { current: 값 }을 반환.
	  값이 변경되어도 컴포넌트가 리렌더링 되지 않음.

	- useReducer : 복잡한 상태 관리
	  useReducer(리듀서 함수, 초기값) 형태로 사용.
	  dispatch({ type: "increment" })를 통해 reducer 함수 실행 후 새로운 상태 반환.

	- useContext : 전역 상태 공유
	  createContext()로 컨텍스트 생성.
	  Provider를 통해 value를 하위 컴포넌트에 제공.

	- useMemo : 성능 최적화 (값 메모이제이션)
	  useMemo(Callback, [의존성]) 형태로 사용.
	  의존성이 변경될 때만 Callback 실행. 이미 실행된 결과를 재사용.

	- useCallback : 함수 메모이제이션
	  useCallback(Callback, [의존성]) 형태로 사용.
	  콜백 함수를 기억하여 불필요한 재생성 방지.
	  주로 React.memo와 함께 사용하여 렌더링 성능 최적화.

	그 외 : useLayoutEffect, useImperativeHandle, useTransition 등이 있음.

-------------------------------------------------------------------------------------

#### 커스텀 훅(Custom Hook)
	React의 Hook을 조합하여 사용자 정의 로직을 재사용할 수 있도록 만든 함수.
	useState, useEffect, useRef 등을 활용하여 특정 기능을 캡슐화.

	장점
	- 코드 재사용성 증가
	- 비즈니스 로직 분리
	- 컴포넌트 코드 간결화

	기본 규칙
	- use로 시작해야 함.
	- 다른 훅(useState, useEffect 등)을 내부에서 사용할 수 있음.
	- 조건문이나 반복문 내부에서 호출되면 안 됨.

-------------------------------------------------------------------------------------

#### Server
	- CORS(Cross-Origin Resource Sharing) : 서버가 다른 도메인에서 요청을 받을 수 있도록 도와주는 미들웨어.
	- Express.js : Node.js에서 가장 많이 사용되는 웹 프레임워크. HTTP 서버를 쉽게 만들 수 있도록 도와줌.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<a name="day-05"></a>
## Day 05 - React Router / Immer / Chart.js

#### react-router-dom
	React 애플리케이션에서 라우팅을 쉽게 구현할 수 있도록 도와주는 라이브러리.
	페이지를 새로고침하지 않고도 URL을 변경하면서 컴포넌트를 동적으로 렌더링.

	- useLocation : 현재 URL의 경로, 쿼리 문자열, 해시값, 상태 정보를 취득하는 훅.
	- useParams : 현재 URL에서 동적 경로(파라미터)를 추출하는 훅.
	  e.g. http://localhost:5173/user/1234

	- useTransition : UI 업데이트의 우선순위를 조절하는 훅.
	  부하가 큰 상태 업데이트를 낮은 우선순위로 처리.

	- useActionState : 비동기 함수를 실행하고, 그 결과를 상태로 관리.
	  isPending을 제공하여 비동기 작업 진행 중 여부 확인 가능.

	- useOptimistic : 비동기 작업이 완료되기 전에 낙관적 업데이트를 적용.
	  실제 데이터 반영 전에 UI를 먼저 업데이트하여 사용자 경험 향상.

-------------------------------------------------------------------------------------

#### Immer란?
	불변성을 쉽게 관리할 수 있도록 도와주는 JavaScript 라이브러리.
	React에서 useState, useReducer와 함께 상태를 관리할 때 유용.
	직접 변경하는 방식처럼 작성하면서도 불변성이 유지됨.

	// produce 함수 사용
	produce(draft => { 변경작업 })

-------------------------------------------------------------------------------------

#### Chart.js란?
	HTML5의 <canvas> 요소를 활용하여 반응형 차트를 그릴 수 있는 라이브러리.

	지원하는 차트 종류
	1. 막대 그래프(Bar Chart) : 데이터를 수직 또는 수평 막대로 표현.
	2. 꺾은선 그래프(Line Chart) : 데이터의 변화를 선으로 연결하여 경향 표시.
	3. 파이 차트(Pie Chart) : 전체 대비 각 항목의 비율을 원형으로 표현.
	4. 도넛 차트(Doughnut Chart) : 파이 차트와 유사하지만 가운데가 뚫려 있음.
	5. 레이더 차트(Radar Chart) : 다각형 형태로 여러 항목의 값을 비교.
	6. 산점도(Scatter Chart) : 데이터의 개별 값을 점으로 표시하여 분포 표현.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<a name="day-06"></a>
## Day 06 - Next.js / npx / 페이지 라우터

#### Next.js란?
	React 기반의 프레임워크로, 서버 사이드 렌더링(SSR), 정적 사이트 생성(SSG), API 라우트 등을 지원.
	성능 최적화와 개발 편의성을 높이는 것이 특징.
	2016년 Vercel(구 Zeit)에서 개발. React의 SEO 최적화 및 초기 로딩 속도 문제를 보완하기 위해 등장.

#### Next.js 주요 기능

	- 라우팅 시스템 (파일 기반 라우팅)
	  /pages/index.js        -> / 경로
	  /pages/about.js        -> /about 경로
	  /pages/blog/[id].js    -> 동적 라우팅 (/blog/123)

	- 렌더링 방식
	  SSR (Server Side Rendering) : 요청 시 서버에서 페이지 생성
	  SSG (Static Site Generation) : 빌드 시 HTML 미리 생성
	  CSR (Client Side Rendering) : 프론트엔드에서 데이터 가져오기
	  ISR (Incremental Static Regeneration) : SSG처럼 미리 생성하면서, 일정 시간마다 갱신

	- API Routes : /pages/api/ 디렉터리에 API 엔드포인트 생성. 별도 서버 없이 API 개발 가능.
	- 이미지 최적화 : next/image 컴포넌트를 사용해 자동 이미지 최적화.
	- 국제화(i18n) : 다국어 지원 기능 내장.
	- SWC 사용 시 빌드 속도 증가.

#### Next.js 장점
	SEO 최적화, 빠른 성능, 개발 편의성, 강력한 데이터 패칭, 이미지 최적화, 대규모 애플리케이션 개발 가능.

#### Next.js 단점
	- 학습 곡선 : SSR, SSG, ISR 개념을 익혀야 함.
	- 서버 비용 증가 가능 : SSR 과도 사용 시 서버 부하 및 비용 증가.
	- 빌드 속도 이슈 : SSG 페이지가 많을 경우 빌드 시간이 길어질 수 있음.
	- 백엔드 기능 부족 : API Routes가 있지만 본격적인 백엔드 기능은 부족.

#### Next.js를 사용하는 유명 기업
	Vercel, Netflix, TikTok, Twitch, Github Copilot

-------------------------------------------------------------------------------------

#### npx란?
	Node.js 8.2.0 이상부터 기본적으로 포함된 도구로, 패키지를 실행하는 용도로 사용.
	특정 패키지를 전역 설치 없이 실행할 수 있음.

	npx 특징
	- 전역 설치 없이 패키지 실행 : 패키지를 일시적으로 다운로드한 후 실행하고 이후 삭제.
	- 프로젝트 로컬 패키지 실행 : node_modules/.bin 내부의 패키지를 찾아 실행.
	- 특정 버전의 패키지 실행 : npx typescript@4.5 --version
	- 설치된 패키지가 없으면 설치 후 실행 : npx create-react-app my-app

	주의할 점
	- 자주 실행하는 패키지는 전역 또는 로컬로 설치하는 것이 더 효율적.
	- 신뢰할 수 있는 패키지만 실행할 것.
	- 실행한 패키지를 캐시에 저장하므로 동일한 패키지 재실행 시 빠르게 실행됨.

-------------------------------------------------------------------------------------

#### 1. 페이지 라우터(Page Router)
	Next 초창기부터 제공되어 오던 구 버전 라우터.
	많은 기업에서 사용되고 있는 안정적인 라우터.
	React Router처럼 페이지 라우팅 기능 제공.

	// Next.js 프로젝트 생성
	npx create-next-app@14 next-page-router

#### 2. 앱 라우터(App Router)
	Next.js 13 이후부터 도입된 새로운 라우팅 방식.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<a name="day-08"></a>
## Day 08 - TypeScript / JavaScript 모듈 시스템

#### TypeScript란?
	마이크로소프트(Microsoft)에서 개발한 프로그래밍 언어.
	자바스크립트에 정적 타입(static typing), 인터페이스(interface), 제네릭(generic), 클래스(class) 등의 기능을 추가한 언어.
	최종적으로 자바스크립트로 변환되어 실행.

#### TypeScript 특징
	- 정적 타입 검사 : 개발 중에 타입 오류를 감지.
	- 가독성 및 유지보수성 향상.
	- 강력한 객체 지향 프로그래밍 지원 : 클래스, 인터페이스, 접근 제한자 제공.

#### TypeScript 기본 문법

	let message : string = "Hello, TypeScript!";
	let count   : number = 42;
	let isDone  : boolean = true;

#### TypeScript 동작 원리

	자바스크립트 코드   -> AST 변환 -> 바이트 코드로 변환
	타입스크립트 코드  -> AST 변환 -> 타입 검사 -> 자바스크립트 코드로 변환
	즉, 실행 자체는 자바스크립트 코드로 수행됨.

-------------------------------------------------------------------------------------

#### 자바스크립트 모듈 시스템

#### 1. ES 모듈(ESM, ES6 Module)
	가장 최신 모듈 시스템. React, Vue 등 최신 프론트엔드 기술은 ESM을 채택.
	import 및 export 키워드 사용.

	// 기본 내보내기 (Default Export)
	export default function add(a, b) { return a + b; }
	import add from './math.js'

	// 명명된 내보내기 (Named Export)
	export function add(a, b) { return a + b; }
	export function subtract(a, b) { return a - b; }
	import { add, subtract } from './math.js'

	// 별칭 사용 (as 키워드)
	import { multiply as mul } from './math.js';

	// 모든 모듈 가져오기
	import * as math from './math.js'

#### 2. CommonJS (Node.js 모듈 시스템)
	Node.js 등장과 함께 만들어진 모듈 시스템.
	require()로 모듈을 불러오고 module.exports로 내보냄.

	// 내보내기
	function add(a, b) { return a + b; }
	module.exports = { add };

	// 불러오기
	const math = require('./math')
	console.log(math.add(2, 3));

<p align="right">(<a href="#readme-top">back to top</a>)</p>
