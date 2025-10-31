# 공연 후원 QR 랜딩 페이지 (Toss / KakaoPay)
모바일에서 QR을 스캔하면 이 페이지가 열리고, **토스** 또는 **카카오페이** 버튼을 눌러 바로 송금할 수 있습니다. 앱이 없거나 딥링크가 제한된 경우를 대비해 **계좌번호 복사**도 제공합니다.

## 1) 필요한 값 만들기
- **토스(Toss)**: `토스아이디`를 만들고 **송금 링크**를 복사하세요. 예: `https://toss.me/your-id` 또는 `https://toss.me/your-id/10000` (고정 금액)
- **카카오페이**: 앱에서 **코드송금 링크/QR**을 생성하세요. 보통 `https://qr.kakaopay.com/XXXX` 형태로 공유됩니다.
- **계좌 정보**: 은행명 / 계좌번호 / 예금주명을 준비하세요.

## 2) 설정
`config.sample.js`를 복사하여 `config.js`로 파일명을 바꾸고 안의 값을 채워 넣으세요.

```js
window.__DONATION_CONFIG__ = {
  BANK_NAME: "국민",
  ACCOUNT_NO: "123456-12-123456",
  ACCOUNT_HOLDER: "홍길동",
  TOSS_LINK: "https://toss.me/your-id",
  KAKAOPAY_LINK: "https://qr.kakaopay.com/your-code"
}
```

## 3) 로컬에서 테스트
아래 중 하나로 간단히 띄울 수 있습니다.

```bash
# 방법 A) Python
python3 -m http.server 5500

# 방법 B) Node (serve 설치)
npm i -g serve
serve -l 5500
```
이후 휴대폰에서 `http://<당신의_맥IP>:5500`로 접속하여 테스트하세요.

## 4) 배포 (쉽고 빠른 순)
- **GitHub Pages**: 정적 사이트로 바로 배포 가능
- **Netlify / Vercel**: 레포 연결 → 자동 배포
- **단기용**이라면 무료 호스팅을 추천합니다.

## 5) QR 코드 만들기
최종 배포 URL로 QR을 생성하세요. (예: `https://yourname.github.io/donate/`)
아래 스크립트로 생성할 수 있습니다.

```bash
python3 qr_generate.py "https://your-final-url.example/"
# 생성: qr.png
```

## 6) 현장 운영 팁
- **포스터/테이블 텐트**에 QR 이미지를 크게 인쇄
- 버튼 누르고 앱이 안 열리면 한 번 더 탭 안내 (iOS 보안 정책으로 첫 시도 실패 가능)
- **카드 결제**가 필요한 경우엔 별도 PG(토스페이먼츠/카카오페이) 결제 페이지 구축 필요
- **문구 예시**: “후원은 자율입니다. 감사합니다!”

## 7) 안전/법적 유의
- 개인 간 송금은 *결제*가 아니라 *이체*입니다. 환불·영수증 등은 별도 안내하세요.
- 금액 고정이 필요하면 **토스 `.../금액`** 링크 또는 **카카오페이 금액 지정 코드**를 사용하세요.
- 개인정보(계좌/이름)가 포스터에 그대로 노출되므로 필요하면 **닉네임/가상계좌** 사용을 고려하세요.
